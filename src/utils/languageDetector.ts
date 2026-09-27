import { SUPPORTED_LANGUAGES } from '../data/multilingual';
import type { LanguageInfo, ScriptId } from '../data/multilingual';

export interface DetectionResult {
  detectedLanguage: LanguageInfo;
  scriptId: ScriptId;
  scriptName: string;
  isRtl: boolean;
  confidence: 'high' | 'medium' | 'low';
}

/**
 * Intelligently detect writing system / script and language from Unicode text
 */
export function detectLanguageAndScript(text: string): DetectionResult {
  const clean = text.trim();

  if (!clean) {
    return {
      detectedLanguage: SUPPORTED_LANGUAGES[0], // English default
      scriptId: 'latin',
      scriptName: 'Latin Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // Count character code points per script range
  let arabicCount = 0;
  let urduSpecificCount = 0;
  let devanagariCount = 0;
  let cyrillicCount = 0;
  let greekCount = 0;
  let hebrewCount = 0;
  let thaiCount = 0;
  let hangulCount = 0; // Korean
  let cjkCount = 0;    // Chinese / Japanese Kanji
  let hiraganaKatakanaCount = 0; // Japanese specific
  let latinCount = 0;

  for (let i = 0; i < clean.length; i++) {
    const code = clean.charCodeAt(i);

    // Arabic / Urdu / Persian block: U+0600 - U+06FF, U+0750 - U+077F, U+FB50 - U+FDFF, U+FE70 - U+FEFF
    if (
      (code >= 0x0600 && code <= 0x06ff) ||
      (code >= 0x0750 && code <= 0x077f) ||
      (code >= 0xfb50 && code <= 0xfdff) ||
      (code >= 0xfe70 && code <= 0xfeff)
    ) {
      arabicCount++;
      // Check for Urdu specific characters: ے, ٹ, ڈ, ڑ, ں, ھ, ۂ, ۃ
      if (
        code === 0x06d2 ||
        code === 0x0698 ||
        code === 0x0679 ||
        code === 0x0686 ||
        code === 0x0688 ||
        code === 0x0691 ||
        code === 0x06ba ||
        code === 0x06be
      ) {
        urduSpecificCount++;
      }
    }
    // Devanagari: U+0900 - U+097F
    else if (code >= 0x0900 && code <= 0x097f) {
      devanagariCount++;
    }
    // Cyrillic: U+0400 - U+04FF
    else if (code >= 0x0400 && code <= 0x04ff) {
      cyrillicCount++;
    }
    // Greek: U+0370 - U+03FF
    else if (code >= 0x0370 && code <= 0x03ff) {
      greekCount++;
    }
    // Hebrew: U+0590 - U+05FF
    else if (code >= 0x0590 && code <= 0x05ff) {
      hebrewCount++;
    }
    // Thai: U+0E00 - U+0E7F
    else if (code >= 0x0e00 && code <= 0x0e7f) {
      thaiCount++;
    }
    // Korean Hangul: U+AC00 - U+D7AF, U+1100 - U+11FF, U+3130 - U+318F
    else if (
      (code >= 0xac00 && code <= 0xd7af) ||
      (code >= 0x1100 && code <= 0x11ff) ||
      (code >= 0x3130 && code <= 0x318f)
    ) {
      hangulCount++;
    }
    // Japanese Hiragana & Katakana: U+3040 - U+309F, U+30A0 - U+30FF
    else if ((code >= 0x3040 && code <= 0x309f) || (code >= 0x30a0 && code <= 0x30ff)) {
      hiraganaKatakanaCount++;
    }
    // CJK Unified Ideographs (Chinese & Japanese Kanji): U+4E00 - U+9FFF
    else if (code >= 0x4e00 && code <= 0x9fff) {
      cjkCount++;
    }
    // Latin Alphabets
    else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 192 && code <= 383)) {
      latinCount++;
    }
  }

  // 1. Urdu / Arabic / Persian
  if (arabicCount > 0) {
    if (urduSpecificCount > 0) {
      const urduLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'ur') || SUPPORTED_LANGUAGES[1];
      return {
        detectedLanguage: urduLang,
        scriptId: 'arabic',
        scriptName: 'Arabic-derived (Nastaliq / Urdu)',
        isRtl: true,
        confidence: 'high',
      };
    }
    const arabicLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'ar') || SUPPORTED_LANGUAGES[2];
    return {
      detectedLanguage: arabicLang,
      scriptId: 'arabic',
      scriptName: 'Arabic Script',
      isRtl: true,
      confidence: 'high',
    };
  }

  // 2. Devanagari (Hindi)
  if (devanagariCount > 0) {
    const hindiLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'hi') || SUPPORTED_LANGUAGES[4];
    return {
      detectedLanguage: hindiLang,
      scriptId: 'devanagari',
      scriptName: 'Devanagari Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 3. Korean
  if (hangulCount > 0) {
    const koreanLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'ko') || SUPPORTED_LANGUAGES[6];
    return {
      detectedLanguage: koreanLang,
      scriptId: 'korean',
      scriptName: 'Hangul Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 4. Japanese
  if (hiraganaKatakanaCount > 0) {
    const jpLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'ja') || SUPPORTED_LANGUAGES[5];
    return {
      detectedLanguage: jpLang,
      scriptId: 'japanese',
      scriptName: 'Kanji / Hiragana / Katakana',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 5. Chinese vs Japanese CJK
  if (cjkCount > 0) {
    const zhLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'zh') || SUPPORTED_LANGUAGES[7];
    return {
      detectedLanguage: zhLang,
      scriptId: 'chinese',
      scriptName: 'Han Characters',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 6. Cyrillic (Russian)
  if (cyrillicCount > 0) {
    const ruLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'ru') || SUPPORTED_LANGUAGES[8];
    return {
      detectedLanguage: ruLang,
      scriptId: 'cyrillic',
      scriptName: 'Cyrillic Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 7. Hebrew
  if (hebrewCount > 0) {
    const heLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'he') || SUPPORTED_LANGUAGES[9];
    return {
      detectedLanguage: heLang,
      scriptId: 'hebrew',
      scriptName: 'Hebrew Script',
      isRtl: true,
      confidence: 'high',
    };
  }

  // 8. Greek
  if (greekCount > 0) {
    const elLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'el') || SUPPORTED_LANGUAGES[10];
    return {
      detectedLanguage: elLang,
      scriptId: 'greek',
      scriptName: 'Greek Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // 9. Thai
  if (thaiCount > 0) {
    const thLang = SUPPORTED_LANGUAGES.find((l) => l.code === 'th') || SUPPORTED_LANGUAGES[11];
    return {
      detectedLanguage: thLang,
      scriptId: 'thai',
      scriptName: 'Thai Script',
      isRtl: false,
      confidence: 'high',
    };
  }

  // Fallback to English / Latin
  return {
    detectedLanguage: SUPPORTED_LANGUAGES[0],
    scriptId: 'latin',
    scriptName: 'Latin Script',
    isRtl: false,
    confidence: latinCount > 0 ? 'high' : 'low',
  };
}
