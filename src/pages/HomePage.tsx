import React from 'react';
import { ControlPanel } from '../components/ControlPanel';
import type { SortOption } from '../components/ControlPanel';
import { FontCard } from '../components/FontCard';
import { PopularStylesSection } from '../components/PopularStylesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { PlacementVisualizer } from '../components/PlacementVisualizer';
import { MultilingualSection } from '../components/MultilingualSection';
import { TattooStyleGallery } from '../components/TattooStyleGallery';
import { TattooNameQuoteGallery } from '../components/TattooNameQuoteGallery';
import { FeaturedVisualInspirationSection } from '../components/FeaturedVisualInspirationSection';
import { SeoGuideSection } from '../components/SeoGuideSection';
import type { TattooFont, FontCategoryId } from '../data/fonts';
import type { LanguageInfo } from '../data/multilingual';
import { Type, Filter, Sparkles, Zap, Layers, Globe, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  inputText: string;
  setInputText: (val: string) => void;
  selectedCategory: FontCategoryId;
  setSelectedCategory: (cat: FontCategoryId) => void;
  selectedLanguage: LanguageInfo;
  setSelectedLanguage: (lang: LanguageInfo) => void;
  filterCompatibleOnly: boolean;
  setFilterCompatibleOnly: (val: boolean) => void;
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
  filteredFonts: TattooFont[];
  savedFonts: TattooFont[];
  toggleSaveFont: (font: TattooFont) => void;
  placementFont: TattooFont | null;
  setPlacementFont: (font: TattooFont | null) => void;
  onOpenPrintModal?: (font: TattooFont) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  inputText,
  setInputText,
  selectedCategory,
  setSelectedCategory,
  selectedLanguage,
  setSelectedLanguage,
  filterCompatibleOnly,
  setFilterCompatibleOnly,
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
  filteredFonts,
  savedFonts,
  toggleSaveFont,
  placementFont,
  setPlacementFont,
  onOpenPrintModal,
}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Create Custom Tattoo Lettering & Stencils | Tattoo Font Generator';
  }, []);

  return (
    <div className="space-y-20 lg:space-y-32">
      
      {/* Premium Hero Header Section with Ambient Backdrop Light */}
      <div className="relative text-center max-w-4xl mx-auto space-y-6 pt-4 pb-6 px-4">
        {/* Glow Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/70 border border-purple-700/60 text-purple-200 text-xs sm:text-sm font-extrabold shadow-lg shadow-purple-950/50 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>100+ Free Custom Tattoo Lettering & Stencil Generator</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Create Custom <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Tattoo Lettering & Stencils
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
          Enter your name, quote, date, or phrase to instantly preview 100+ tattoo fonts. Customize sizing, letter spacing, curvature, and stencil outlines with instant PNG & SVG exports.
        </p>

        {/* Feature Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131722] border border-slate-800 text-xs font-bold text-slate-300 shadow-md">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Instant Live Preview</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131722] border border-slate-800 text-xs font-bold text-slate-300 shadow-md">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>100+ Tattoo Fonts</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131722] border border-slate-800 text-xs font-bold text-slate-300 shadow-md">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>15+ Languages & RTL</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131722] border border-slate-800 text-xs font-bold text-slate-300 shadow-md">
            <Download className="w-4 h-4 text-blue-400" />
            <span>Free PNG & SVG Export</span>
          </div>
        </div>
      </div>

      {/* Main Tattoo Font Generator Control Panel */}
      <ControlPanel
        inputText={inputText}
        setInputText={setInputText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        fontSize={fontSize}
        setFontSize={setFontSize}
        letterSpacing={letterSpacing}
        setLetterSpacing={setLetterSpacing}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        textAlignment={textAlignment}
        setTextAlignment={setTextAlignment}
        textTransform={textTransform}
        setTextTransform={setTextTransform}
        textColor={textColor}
        setTextColor={setTextColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        curvedOption={curvedOption}
        setCurvedOption={setCurvedOption}
        rotation={rotation}
        setRotation={setRotation}
        resetAllControls={resetAllControls}
      />

      {/* Multilingual Section */}
      <MultilingualSection
        inputText={inputText}
        setInputText={setInputText}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        filterCompatibleOnly={filterCompatibleOnly}
        setFilterCompatibleOnly={setFilterCompatibleOnly}
      />

      {/* Live Font Results Gallery Header */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Filter className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Compatible Tattoo Fonts
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono text-purple-300 font-bold bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-lg">
            {filteredFonts.length} Fonts Available
          </span>
        </div>

        {/* Font Gallery Cards Grid */}
        {filteredFonts.length === 0 ? (
          <div className="bg-[#131722] p-12 text-center rounded-3xl border border-slate-800 space-y-4">
            <Type className="w-14 h-14 text-slate-600 mx-auto" />
            <h3 className="font-extrabold text-lg text-slate-200">No fonts match your filter criteria.</h3>
            <p className="text-sm text-slate-400">Try clearing your search query or selecting "All Styles"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-extrabold transition-all shadow-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                onOpenPrintModal={onOpenPrintModal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Placement Visualizer Modal */}
      {placementFont && (
        <div className="my-12">
          <PlacementVisualizer
            inputText={inputText}
            selectedFont={placementFont}
            onSelectFont={setPlacementFont}
            fontSize={fontSize}
            letterSpacing={letterSpacing}
            rotation={rotation}
            isStencilMode={false}
          />
        </div>
      )}

      {/* Featured Visual Inspiration Galleries (Beautiful, Couple, Famous Tattoos) */}
      <FeaturedVisualInspirationSection />

      {/* Explore Tattoo Styles Visual Gallery (PRD Add-on) */}
      <TattooStyleGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Tattoo Name & Quote Ideas Visual Gallery (PRD Add-on) */}
      <TattooNameQuoteGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Popular Tattoo Styles Section */}
      <PopularStylesSection
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          navigate('/tattoo-fonts');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Educational & FAQ SEO Section */}
      <div className="pt-8 sm:pt-16">
        <SeoGuideSection />
      </div>

    </div>
  );
};
