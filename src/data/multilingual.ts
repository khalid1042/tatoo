export type ScriptId =
  | 'latin'
  | 'arabic'
  | 'cyrillic'
  | 'greek'
  | 'hebrew'
  | 'devanagari'
  | 'bengali'
  | 'tamil'
  | 'telugu'
  | 'thai'
  | 'chinese'
  | 'japanese'
  | 'korean';

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  scriptId: ScriptId;
  scriptName: string;
  direction: 'ltr' | 'rtl';
  sample: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    scriptId: 'latin',
    scriptName: 'Latin Script',
    direction: 'ltr',
    sample: 'Forever',
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    scriptId: 'arabic',
    scriptName: 'Arabic-derived (Nastaliq)',
    direction: 'rtl',
    sample: 'ہمیشہ',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    scriptId: 'arabic',
    scriptName: 'Arabic Script',
    direction: 'rtl',
    sample: 'إلى الأبد',
  },
  {
    code: 'fa',
    name: 'Persian (Farsi)',
    nativeName: 'فارسی',
    scriptId: 'arabic',
    scriptName: 'Persian-Arabic Script',
    direction: 'rtl',
    sample: 'برای همیشه',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    scriptId: 'devanagari',
    scriptName: 'Devanagari Script',
    direction: 'ltr',
    sample: 'हमेशा',
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    scriptId: 'japanese',
    scriptName: 'Kanji / Hiragana / Katakana',
    direction: 'ltr',
    sample: '永遠',
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    scriptId: 'korean',
    scriptName: 'Hangul Script',
    direction: 'ltr',
    sample: '영원히',
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    scriptId: 'chinese',
    scriptName: 'Han Characters',
    direction: 'ltr',
    sample: '永远',
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    scriptId: 'cyrillic',
    scriptName: 'Cyrillic Script',
    direction: 'ltr',
    sample: 'Навсегда',
  },
  {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    scriptId: 'hebrew',
    scriptName: 'Hebrew Script',
    direction: 'rtl',
    sample: 'לנצח',
  },
  {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    scriptId: 'greek',
    scriptName: 'Greek Script',
    direction: 'ltr',
    sample: 'Για πάντα',
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    scriptId: 'thai',
    scriptName: 'Thai Script',
    direction: 'ltr',
    sample: 'ตลอดไป',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    scriptId: 'latin',
    scriptName: 'Latin Script',
    direction: 'ltr',
    sample: 'Para siempre',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    scriptId: 'latin',
    scriptName: 'Latin Script',
    direction: 'ltr',
    sample: 'Pour toujours',
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    scriptId: 'latin',
    scriptName: 'Latin Script',
    direction: 'ltr',
    sample: 'Für immer',
  },
];
