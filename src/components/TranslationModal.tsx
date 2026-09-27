import React, { useState } from 'react';
import { X, Languages, ShieldAlert, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/multilingual';
import type { LanguageInfo } from '../data/multilingual';
import { translateTattooText } from '../utils/aiRecommendation';
import type { TranslationResult } from '../utils/aiRecommendation';

interface TranslationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentText: string;
  onApplyTranslation: (translatedText: string, targetLanguage: LanguageInfo) => void;
}

export const TranslationModal: React.FC<TranslationModalProps> = ({
  isOpen,
  onClose,
  currentText,
  onApplyTranslation,
}) => {
  const [selectedTargetLang, setSelectedTargetLang] = useState<LanguageInfo>(SUPPORTED_LANGUAGES[1]); // Urdu default
  const [translationResult, setTranslationResult] = useState<TranslationResult | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [editedText, setEditedText] = useState('');

  if (!isOpen) return null;

  const handleTranslate = async () => {
    setIsTranslating(true);
    const res = await translateTattooText(currentText || 'Forever', selectedTargetLang);
    setTranslationResult(res);
    setEditedText(res.translatedText);
    setIsTranslating(false);
  };

  const handleApply = () => {
    if (editedText.trim()) {
      onApplyTranslation(editedText.trim(), selectedTargetLang);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-[#131722] w-full max-w-lg rounded-3xl border border-slate-800 p-6 lg:p-8 shadow-2xl space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">AI Tattoo Translation</h3>
              <p className="text-xs text-slate-400">Optional secondary translation helper</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Permanent Tattoo Safety Warning */}
        <div className="bg-amber-950/40 p-4 rounded-2xl border border-amber-800/50 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-200 leading-relaxed">
            <strong>Important Safety Rule:</strong> Always verify spelling, translation, characters, and cultural meaning with a qualified native speaker or tattoo professional before getting a permanent tattoo.
          </p>
        </div>

        {/* Original Text Display */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Original Text</label>
          <div className="bg-[#0B0E14] px-4 py-3 rounded-xl border border-slate-800 text-white font-semibold text-base">
            "{currentText || 'Forever'}"
          </div>
        </div>

        {/* Target Language Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Target Language</label>
          <select
            value={selectedTargetLang.code}
            onChange={(e) => {
              const lang = SUPPORTED_LANGUAGES.find((l) => l.code === e.target.value);
              if (lang) {
                setSelectedTargetLang(lang);
                setTranslationResult(null);
              }
            }}
            className="w-full bg-[#0B0E14] text-slate-200 text-xs font-bold px-4 py-3 rounded-xl border border-slate-800 outline-none focus:border-purple-500"
          >
            {SUPPORTED_LANGUAGES.filter((l) => l.code !== 'en').map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name} ({lang.nativeName}) — {lang.scriptName}
              </option>
            ))}
          </select>
        </div>

        {/* Translate Action Button */}
        {!translationResult && (
          <button
            onClick={handleTranslate}
            disabled={isTranslating}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all shadow-lg"
          >
            <Languages className="w-4 h-4" />
            <span>{isTranslating ? 'Translating Text...' : `Translate to ${selectedTargetLang.name}`}</span>
          </button>
        )}

        {/* Translation Confirmation & Edit Panel */}
        {translationResult && (
          <div className="space-y-4 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase">
              <span>Review Translation</span>
              <span className="text-emerald-400 font-mono">Confidence {translationResult.confidence}</span>
            </div>

            <div className="relative">
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                dir={selectedTargetLang.direction}
                className="w-full bg-[#0B0E14] text-purple-300 font-extrabold text-xl px-4 py-3.5 rounded-xl border border-purple-500/60 focus:ring-2 focus:ring-purple-500/30 outline-none"
              />
            </div>

            <p className="text-[11px] text-slate-400 italic">
              {translationResult.notes}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleApply}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg"
              >
                <Check className="w-4 h-4" />
                <span>Use Translation in Generator</span>
              </button>
              <button
                onClick={() => setTranslationResult(null)}
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800"
              >
                Reset
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
