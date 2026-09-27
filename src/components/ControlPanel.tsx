import React, { useState } from 'react';
import {
  Search,
  Sliders,
  X,
  RotateCcw,
  Sparkles,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Filter,
} from 'lucide-react';
import {
  FONT_CATEGORIES,
  COLOR_SWATCHES,
  BACKGROUND_SWATCHES,
} from '../data/fonts';
import type { FontCategoryId } from '../data/fonts';

export type SortOption = 'popular' | 'new' | 'a-z' | 'recommended';

interface ControlPanelProps {
  inputText: string;
  setInputText: (val: string) => void;
  selectedCategory: FontCategoryId;
  setSelectedCategory: (cat: FontCategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: SortOption;
  setSortOption: (opt: SortOption) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  letterSpacing: number;
  setLetterSpacing: (val: number) => void;
  lineHeight: number;
  setLineHeight: (val: number) => void;
  textAlignment: 'left' | 'center' | 'right';
  setTextAlignment: (val: 'left' | 'center' | 'right') => void;
  textTransform: 'none' | 'uppercase' | 'lowercase';
  setTextTransform: (val: 'none' | 'uppercase' | 'lowercase') => void;
  textColor: string;
  setTextColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  setCurvedOption: (opt: 'none' | 'slight' | 'medium' | 'strong') => void;
  rotation: number;
  setRotation: (val: number) => void;
  resetAllControls: () => void;
}

const PRESET_EXAMPLES = ['Khalid', 'Forever', 'Family', '1998', 'Love Never Dies', 'XIII.VI.MMXXVI'];

export const ControlPanel: React.FC<ControlPanelProps> = ({
  inputText,
  setInputText,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  fontSize,
  setFontSize,
  letterSpacing,
  setLetterSpacing,
  lineHeight,
  setLineHeight,
  textAlignment,
  setTextAlignment,
  textTransform,
  setTextTransform,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
  curvedOption,
  setCurvedOption,
  rotation,
  setRotation,
  resetAllControls,
}) => {
  const [showCustomization, setShowCustomization] = useState(false);

  const charCount = inputText.length;
  const maxCharLimit = 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.value.length <= maxCharLimit) {
      setInputText(e.target.value);
    }
  };

  return (
    <div id="generator-section" className="bg-[#131722] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-800/80 shadow-2xl my-8 py-6 space-y-6">
      
      {/* 1. Large Text Input Box */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>Type Your Tattoo Text</span>
          </label>
          <span className="text-xs font-mono text-slate-400 bg-[#0B0E14] px-2.5 py-1 rounded-md border border-slate-800">
            {charCount} / {maxCharLimit}
          </span>
        </div>

        <div className="relative">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your tattoo text here..."
            rows={inputText.includes('\n') ? 3 : 1}
            className="w-full bg-[#0B0E14] text-white placeholder-slate-500 text-base sm:text-lg lg:text-xl font-semibold px-4 py-3.5 pr-10 rounded-xl sm:rounded-2xl border border-slate-700/80 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none leading-relaxed"
          />
          {inputText && (
            <button
              onClick={() => setInputText('')}
              className="absolute right-3 top-3.5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-all"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Clickable Preset Examples */}
        <div className="pt-2">
          <div className="flex flex-wrap items-center gap-2 bg-[#0B0E14] p-3 rounded-xl border border-slate-800/80">
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Try an example:</span>
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {PRESET_EXAMPLES.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setInputText(preset)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                    inputText === preset
                      ? 'bg-purple-600/30 text-purple-200 border-purple-500/80 ring-1 ring-purple-500/40 shadow-sm'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-purple-500/50 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Font Categories Filters */}
      <div className="space-y-4 pt-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Filter className="w-4 h-4 text-purple-400" />
            <span>Filter By Style</span>
          </span>
          <span className="text-xs font-mono text-slate-400 bg-[#0B0E14] px-3 py-1 rounded-lg border border-slate-800">
            {FONT_CATEGORIES.length} Categories
          </span>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-3.5 bg-[#0B0E14] p-5 sm:p-6 rounded-2xl border border-slate-800/90">
          {FONT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold border transition-all duration-200 shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white border-purple-400 shadow-purple-950/60 ring-2 ring-purple-400/50 scale-105'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-purple-500/60 hover:text-white hover:bg-slate-850'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Search Bar, Sorting & Customization Toggle */}
      <div className="pt-2">
        <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5">
          
          {/* Search Input */}
          <div className="relative flex-1 min-w-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tattoo fonts..."
              style={{ paddingLeft: '2.5rem' }}
              className="w-full bg-[#131722] text-xs font-medium text-slate-200 placeholder-slate-500 pr-9 py-2.5 rounded-xl border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sorting Dropdown & Customization Toggle */}
          <div className="flex items-center gap-3 justify-between md:justify-end shrink-0">
            
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-400 shrink-0">Sort:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-[#131722] text-xs font-semibold text-slate-200 px-3 py-2.5 rounded-xl border border-slate-800 outline-none focus:border-purple-500 cursor-pointer"
              >
                <option value="popular">Popular</option>
                <option value="recommended">Recommended</option>
                <option value="new">New</option>
                <option value="a-z">A–Z</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              {/* Customization Drawer Toggle */}
              <button
                onClick={() => setShowCustomization((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  showCustomization
                    ? 'bg-purple-950/80 text-purple-200 border-purple-500/60 ring-1 ring-purple-500/30'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5 text-purple-400" />
                <span>Customize</span>
              </button>

              {showCustomization && (
                <button
                  onClick={resetAllControls}
                  className="p-2.5 rounded-xl bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
                  title="Reset to defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* 4. Full Customization Panel */}
      {showCustomization && (
        <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 animate-fade-in">
          
          {/* Font Size */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>Font Size</span>
              <span className="font-mono text-purple-400">{fontSize}px</span>
            </div>
            <input
              type="range"
              min="16"
              max="120"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Letter Spacing */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>Letter Spacing</span>
              <span className="font-mono text-purple-400">{letterSpacing}px</span>
            </div>
            <input
              type="range"
              min="-3"
              max="25"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Line Height */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>Line Height</span>
              <span className="font-mono text-purple-400">{lineHeight}</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="2.5"
              step="0.1"
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Curved Text Option */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <span className="block text-xs font-semibold text-slate-300">Curved Text</span>
            <div className="grid grid-cols-4 gap-1 bg-slate-900 p-1 rounded-lg">
              {(['none', 'slight', 'medium', 'strong'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setCurvedOption(opt)}
                  className={`text-[10px] font-bold capitalize py-1 rounded transition-all ${
                    curvedOption === opt ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Text Rotation */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>Text Rotation</span>
              <span className="font-mono text-purple-400">{rotation}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Text Alignment */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <span className="block text-xs font-semibold text-slate-300">Text Alignment</span>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg">
              <button
                onClick={() => setTextAlignment('left')}
                className={`flex-1 py-1 rounded flex items-center justify-center transition-all ${textAlignment === 'left' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTextAlignment('center')}
                className={`flex-1 py-1 rounded flex items-center justify-center transition-all ${textAlignment === 'center' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <AlignCenter className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTextAlignment('right')}
                className={`flex-1 py-1 rounded flex items-center justify-center transition-all ${textAlignment === 'right' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <AlignRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Text Transform */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <span className="block text-xs font-semibold text-slate-300">Text Transform</span>
            <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg">
              {(['none', 'uppercase', 'lowercase'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTextTransform(mode)}
                  className={`text-[10px] font-bold uppercase py-1 rounded transition-all ${
                    textTransform === mode ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mode === 'none' ? 'Original' : mode.slice(0, 5)}
                </button>
              ))}
            </div>
          </div>

          {/* Text Color */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 space-y-2">
            <span className="block text-xs font-semibold text-slate-300">Text Color</span>
            <div className="flex items-center gap-2 pt-0.5">
              {COLOR_SWATCHES.map((swatch) => (
                <button
                  key={swatch.name}
                  onClick={() => setTextColor(swatch.value)}
                  style={{ backgroundColor: swatch.value }}
                  className={`w-6 h-6 rounded-full border transition-all ${
                    textColor === swatch.value ? 'scale-110 border-purple-400 ring-2 ring-purple-500/40' : 'border-slate-700 hover:scale-105'
                  }`}
                  title={swatch.name}
                />
              ))}
            </div>
          </div>

          {/* Preview Background */}
          <div className="bg-[#0B0E14] p-3.5 rounded-xl border border-slate-800 sm:col-span-2 lg:col-span-4 space-y-2">
            <span className="block text-xs font-semibold text-slate-300">Preview Background</span>
            <div className="flex flex-wrap items-center gap-2">
              {BACKGROUND_SWATCHES.map((bg) => (
                <button
                  key={bg.name}
                  onClick={() => setBackgroundColor(bg.value)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                    backgroundColor === bg.value
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-950/40'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {bg.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

