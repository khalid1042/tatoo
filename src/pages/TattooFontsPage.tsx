import React from 'react';
import { FONT_CATEGORIES, TATTOO_FONTS } from '../data/fonts';
import type { TattooFont, FontCategoryId } from '../data/fonts';
import { FontCard } from '../components/FontCard';
import { Sparkles, Layers } from 'lucide-react';

interface TattooFontsPageProps {
  inputText: string;
  selectedCategory: FontCategoryId;
  setSelectedCategory: (cat: FontCategoryId) => void;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  textColor: string;
  backgroundColor: string;
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number;
  savedFonts: TattooFont[];
  toggleSaveFont: (font: TattooFont) => void;
  setPlacementFont: (font: TattooFont | null) => void;
}

export const TattooFontsPage: React.FC<TattooFontsPageProps> = ({
  inputText,
  selectedCategory,
  setSelectedCategory,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlignment,
  textTransform,
  textColor,
  backgroundColor,
  curvedOption,
  rotation,
  savedFonts,
  toggleSaveFont,
  setPlacementFont,
}) => {
  const activeCategoryInfo = FONT_CATEGORIES.find((c) => c.id === selectedCategory) || FONT_CATEGORIES[0];

  const categoryFonts = TATTOO_FONTS.filter(
    (font) => selectedCategory === 'all' || font.category === selectedCategory
  );

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2 pb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Dedicated Tattoo Font Catalog
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Tattoo Font Categories & Styles
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore our complete collection of tattoo lettering styles. Select a category below to view specific font designs rendered with your custom text.
        </p>
      </div>

      {/* Category Selection Filter Pills */}
      <div className="bg-[#131722] p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl my-8">
        <div className="flex items-center justify-between text-sm sm:text-base font-extrabold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-4">
          <span className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-purple-400" />
            Select Font Category
          </span>
          <span className="text-purple-400 font-mono text-sm sm:text-base">{categoryFonts.length} Fonts Available</span>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
          {FONT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold border transition-all duration-200 shadow-md ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white border-purple-400 shadow-purple-950/60 ring-2 ring-purple-400/50 scale-105'
                  : 'bg-[#0B0E14] text-slate-300 border-slate-800 hover:border-purple-500/60 hover:text-white hover:bg-slate-850'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Description Banner */}
      <div className="bg-gradient-to-r from-purple-950/50 via-[#131722] to-slate-900 p-8 sm:p-10 lg:p-12 rounded-3xl border border-purple-800/60 shadow-2xl space-y-3 my-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {activeCategoryInfo.name} Lettering Style
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
          {activeCategoryInfo.description}
        </p>
      </div>

      {/* Font Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryFonts.map((font) => (
          <FontCard
            key={font.id}
            font={font}
            inputText={inputText}
            fontSize={fontSize}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            textAlignment={textAlignment}
            textTransform={textTransform}
            curvedOption={curvedOption}
            rotation={rotation}
            strokeWidth={0}
            textColor={textColor}
            backgroundColor={backgroundColor}
            isStencilMode={false}
            isSaved={savedFonts.some((f) => f.id === font.id)}
            onToggleSave={toggleSaveFont}
            onOpenPlacementModal={(f) => setPlacementFont(f)}
          />
        ))}
      </div>
    </div>
  );
};
