import React, { useState, useEffect } from 'react';
import {
  Globe,
  Sparkles,
  Search,
  Languages,
  ShieldAlert,
  ArrowRight,
  Filter,
  X,
} from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/multilingual';
import type { LanguageInfo } from '../data/multilingual';
import { detectLanguageAndScript } from '../utils/languageDetector';
import { getAIRecommendations } from '../utils/aiRecommendation';
import type { AIRecommendationResult } from '../utils/aiRecommendation';
import { TranslationModal } from './TranslationModal';

interface MultilingualSectionProps {
  inputText: string;
  setInputText: (text: string) => void;
  selectedLanguage: LanguageInfo;
  setSelectedLanguage: (lang: LanguageInfo) => void;
  filterCompatibleOnly: boolean;
  setFilterCompatibleOnly: (val: boolean) => void;
  onSelectRecommendedFont?: (fontId: string) => void;
}

export const MultilingualSection: React.FC<MultilingualSectionProps> = ({
  inputText,
  setInputText,
  selectedLanguage,
  setSelectedLanguage,
  filterCompatibleOnly,
  setFilterCompatibleOnly,
  onSelectRecommendedFont,
}) => {
  const [stylePrompt, setStylePrompt] = useState('');
  const [aiResult, setAiResult] = useState<AIRecommendationResult | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [languageSearch, setLanguageSearch] = useState('');
  const [showTranslationModal, setShowTranslationModal] = useState(false);

  // Auto-detect language whenever input text changes
  useEffect(() => {
    const res = detectLanguageAndScript(inputText);
    if (res.detectedLanguage) {
      setSelectedLanguage(res.detectedLanguage);
    }
  }, [inputText]);

  // Handle AI Recommendation call
  const handleGetRecommendations = () => {
    setIsAiLoading(true);
    setTimeout(() => {
      const res = getAIRecommendations(inputText, selectedLanguage, stylePrompt);
      setAiResult(res);
      setIsAiLoading(false);
    }, 400);
  };

  // Filter languages in modal
  const filteredLanguages = SUPPORTED_LANGUAGES.filter(
    (lang) =>
      lang.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(languageSearch.toLowerCase()) ||
      lang.scriptName.toLowerCase().includes(languageSearch.toLowerCase())
  );

  return (
    <section id="multilingual-section" className="my-16 py-12 border-t border-slate-800/80 space-y-10">
      
      {/* Feature Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          AI Multilingual Tattoo Lettering Generator
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Create Tattoo Lettering in Your Language
        </h2>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
          Supports Urdu, Arabic, Persian, Devanagari (Hindi), Cyrillic, Hebrew, Greek, Thai, Japanese, Chinese, Korean, and Latin alphabets with full RTL bidirectional rendering.
        </p>
      </div>

      {/* Main Multilingual Workspace Panel */}
      <div className="bg-[#131722] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 border border-slate-800 shadow-2xl my-8 py-6 sm:py-10 space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* Top Control Bar: Language Badge & Selector */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 bg-[#0B0E14] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/90">
          
          {/* Detected Language Indicator */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-purple-950/70 text-purple-400 border border-purple-800/60 shrink-0">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
                <span className="text-slate-400">Active Language:</span>
                <span className="text-purple-300 font-extrabold text-sm sm:text-base">
                  {selectedLanguage.name} ({selectedLanguage.nativeName})
                </span>
                {selectedLanguage.direction === 'rtl' && (
                  <span className="bg-rose-950/90 text-rose-300 border border-rose-800/80 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wide">
                    RTL Direction
                  </span>
                )}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Script System: <strong className="text-slate-200">{selectedLanguage.scriptName}</strong>
              </p>
            </div>
          </div>

          {/* Action Buttons: Language Selector & Translation Helper */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-start md:justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
            <button
              onClick={() => setShowLanguageModal(true)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900 text-xs sm:text-sm font-bold text-slate-200 border border-slate-700/80 hover:border-purple-500 hover:text-white transition-all shadow-md"
            >
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Change Language</span>
            </button>

            <button
              onClick={() => setShowTranslationModal(true)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-purple-950/70 text-xs sm:text-sm font-bold text-purple-200 border border-purple-800/60 hover:bg-purple-900/80 transition-all shadow-md"
            >
              <Languages className="w-4 h-4 text-amber-400" />
              <span>Translate Text</span>
            </button>
          </div>

        </div>

        {/* Input Text Box with Direction Support */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider px-1">
            <span>Multilingual Tattoo Text Input</span>
            <span className="text-slate-500 font-mono text-xs hidden sm:inline">Preserves Exact User Input</span>
          </div>

          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your tattoo text in any language..."
              dir={selectedLanguage.direction}
              rows={inputText.includes('\n') ? 3 : 2}
              className="w-full bg-[#0B0E14] text-white placeholder-slate-500 text-lg sm:text-2xl font-bold p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all resize-none leading-relaxed shadow-inner"
            />
          </div>
        </div>

        {/* Filter Compatible Fonts Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0B0E14] p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-800/50">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <div>
              <span className="text-xs sm:text-base font-bold text-white block">
                Filter Compatible Fonts Only ({selectedLanguage.name})
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">Hide fonts that do not support {selectedLanguage.scriptName}</span>
            </div>
          </div>

          <button
            onClick={() => setFilterCompatibleOnly(!filterCompatibleOnly)}
            className={`w-12 sm:w-14 h-7 sm:h-8 rounded-full transition-colors relative p-1 shrink-0 ${
              filterCompatibleOnly ? 'bg-purple-600' : 'bg-slate-800'
            }`}
          >
            <div
              className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white transition-transform ${
                filterCompatibleOnly ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* AI Prompt Input & Recommendation Controls */}
        <div className="bg-[#0B0E14] p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              AI Style & Layout Assistant
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">Optional Recommendations</span>
          </div>

          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              value={stylePrompt}
              onChange={(e) => setStylePrompt(e.target.value)}
              placeholder='Describe desired style e.g. "Elegant Urdu calligraphy with thin flowing strokes"'
              className="flex-1 bg-[#131722] text-xs sm:text-base font-medium text-slate-200 placeholder-slate-500 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-800 focus:border-purple-500 outline-none"
            />

            <button
              onClick={handleGetRecommendations}
              disabled={isAiLoading}
              className="px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
              <span>{isAiLoading ? 'Analyzing Script...' : 'Generate AI Recommendations'}</span>
            </button>
          </div>

          {/* AI Result Card */}
          {aiResult && (
            <div className="pt-6 border-t border-slate-800 space-y-5 animate-fade-in">
              
              {/* Layout & Style Advice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-[#131722] p-5 rounded-2xl border border-slate-800 space-y-1.5">
                  <span className="font-extrabold text-purple-400 block text-xs uppercase tracking-wider">Recommended Layout</span>
                  <span className="text-white font-extrabold text-base capitalize block">{aiResult.recommendedLayout} Layout</span>
                  <p className="text-slate-400 text-xs leading-relaxed">{aiResult.layoutExplanation}</p>
                </div>

                <div className="bg-[#131722] p-5 rounded-2xl border border-slate-800 space-y-1.5">
                  <span className="font-extrabold text-purple-400 block text-xs uppercase tracking-wider">Style Guidance</span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{aiResult.styleAdvice}</p>
                </div>
              </div>

              {/* Readability Warning if text is long */}
              {aiResult.readabilityWarning && (
                <div className="bg-amber-950/50 p-4 rounded-2xl border border-amber-800/60 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{aiResult.readabilityWarning}</span>
                </div>
              )}

              {/* Recommended Font Chips */}
              <div className="pt-2 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Recommended Compatible Fonts:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {aiResult.recommendedFonts.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => onSelectRecommendedFont && onSelectRecommendedFont(font.id)}
                      className="px-4 py-2.5 rounded-xl bg-purple-950/80 text-purple-200 border border-purple-800/80 text-xs sm:text-sm font-extrabold hover:bg-purple-900 transition-all flex items-center gap-2 shadow-md"
                    >
                      <span>{font.name}</span>
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Multilingual Examples Grid */}
      <div className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Multilingual Tattoo Examples (Click to Try)
          </h3>
          <span className="text-xs font-semibold text-slate-400">10 Popular Writing Systems</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {SUPPORTED_LANGUAGES.slice(0, 10).map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setInputText(lang.sample);
                setSelectedLanguage(lang);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#131722] p-5 rounded-3xl border border-slate-800/90 hover:border-purple-500/80 cursor-pointer transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between items-center text-center space-y-3"
            >
              {/* Language Name & RTL Badge */}
              <div className="flex items-center justify-center gap-2 w-full text-xs font-bold text-purple-400">
                <span>{lang.name}</span>
                {lang.direction === 'rtl' && (
                  <span className="text-[10px] text-rose-300 font-mono bg-rose-950/80 border border-rose-800/60 px-1.5 py-0.5 rounded">
                    RTL
                  </span>
                )}
              </div>

              {/* Centered Tattoo Word/Name Sample */}
              <div
                dir={lang.direction}
                className="font-extrabold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors text-center w-full py-1 leading-relaxed"
              >
                {lang.sample}
              </div>

              {/* Native Language Name */}
              <span className="text-xs text-slate-400 block font-medium text-center w-full">
                {lang.nativeName}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Language Selector Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[#131722] w-full max-w-md rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-white">Select Language / Script</h3>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Language */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={languageSearch}
                onChange={(e) => setLanguageSearch(e.target.value)}
                placeholder="Search language or script..."
                className="w-full bg-[#0B0E14] text-xs font-medium text-slate-200 pl-9 pr-3 py-2.5 rounded-xl border border-slate-800 outline-none focus:border-purple-500"
              />
            </div>

            {/* List */}
            <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setShowLanguageModal(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all ${
                    selectedLanguage.code === lang.code
                      ? 'bg-purple-600/30 text-purple-200 border-purple-500'
                      : 'bg-[#0B0E14] text-slate-300 border-slate-800/80 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <span className="font-bold text-white block">{lang.name} ({lang.nativeName})</span>
                    <span className="text-[10px] text-slate-400">{lang.scriptName}</span>
                  </div>
                  <span className="font-mono text-purple-300">{lang.sample}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Translation Modal Helper */}
      <TranslationModal
        isOpen={showTranslationModal}
        onClose={() => setShowTranslationModal(false)}
        currentText={inputText}
        onApplyTranslation={(translated, targetLang) => {
          setInputText(translated);
          setSelectedLanguage(targetLang);
        }}
      />

    </section>
  );
};
