import React from 'react';
import { MultilingualSection } from '../components/MultilingualSection';
import { FontCard } from '../components/FontCard';
import type { TattooFont } from '../data/fonts';
import type { LanguageInfo } from '../data/multilingual';
import { Globe, ShieldAlert, Filter } from 'lucide-react';

interface MultilingualPageProps {
  inputText: string;
  setInputText: (text: string) => void;
  selectedLanguage: LanguageInfo;
  setSelectedLanguage: (lang: LanguageInfo) => void;
  filterCompatibleOnly: boolean;
  setFilterCompatibleOnly: (val: boolean) => void;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  textColor: string;
  backgroundColor: string;
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number;
  filteredFonts: TattooFont[];
  savedFonts: TattooFont[];
  toggleSaveFont: (font: TattooFont) => void;
  setPlacementFont: (font: TattooFont | null) => void;
}

export const MultilingualPage: React.FC<MultilingualPageProps> = ({
  inputText,
  setInputText,
  selectedLanguage,
  setSelectedLanguage,
  filterCompatibleOnly,
  setFilterCompatibleOnly,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlignment,
  textTransform,
  textColor,
  backgroundColor,
  curvedOption,
  rotation,
  filteredFonts,
  savedFonts,
  toggleSaveFont,
  setPlacementFont,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2 pb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          Unicode & RTL Script Support
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          AI Multilingual Tattoo Lettering
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Preview tattoo lettering in Urdu, Arabic, Persian, Devanagari (Hindi), Cyrillic, Hebrew, Greek, Thai, Japanese, Chinese, and Korean with exact text preservation and AI font advice.
        </p>
      </div>

      {/* Multilingual Control Panel */}
      <MultilingualSection
        inputText={inputText}
        setInputText={setInputText}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        filterCompatibleOnly={filterCompatibleOnly}
        setFilterCompatibleOnly={setFilterCompatibleOnly}
      />

      {/* Font Results Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Compatible Tattoo Fonts ({selectedLanguage.name})
            </span>
          </div>
          <span className="text-xs font-mono text-purple-400">
            {filteredFonts.length} Fonts Shown
          </span>
        </div>

        {/* Live Font Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFonts.map((font) => (
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

      {/* Permanent Tattoo Safety Warning Banner */}
      <div className="bg-purple-950/40 p-8 rounded-3xl border border-purple-800/60 flex items-start gap-4 shadow-xl">
        <ShieldAlert className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-extrabold text-base text-white">Multilingual Tattoo Accuracy Disclaimer</h3>
          <p className="text-sm text-purple-200 leading-relaxed">
            Always verify the exact spelling, translation, Unicode characters, and cultural meaning with a qualified native speaker or professional tattoo artist before applying a permanent tattoo.
          </p>
        </div>
      </div>

    </div>
  );
};
