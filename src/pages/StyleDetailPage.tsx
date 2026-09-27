import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TATTOO_STYLES } from '../data/tattooStyles';
import { TATTOO_FONTS } from '../data/fonts';
import { FontCard } from '../components/FontCard';
import { TattooImageDisplay } from '../components/TattooImageDisplay';
import { ArrowLeft, Sparkles, MapPin, Tag, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface StyleDetailPageProps {
  inputText: string;
  setInputText: (text: string) => void;
  setSelectedCategory: (cat: any) => void;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'right';
  textTransform: 'none' | 'uppercase' | 'lowercase';
  textColor: string;
  backgroundColor: string;
  curvedOption: 'none' | 'slight' | 'medium' | 'strong';
  rotation: number;
  savedFonts: any[];
  toggleSaveFont: (font: any) => void;
  setPlacementFont: (font: any) => void;
}

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({
  inputText,
  setInputText,
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
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const styleItem = TATTOO_STYLES.find((s) => s.slug === slug) || TATTOO_STYLES[0];

  // Find compatible font objects
  const matchingFonts = TATTOO_FONTS.filter((font) =>
    styleItem.relatedFontCategories.includes(font.category)
  ).slice(0, 3);

  const handleLaunchInGenerator = () => {
    if (styleItem.tryPresetText) {
      setInputText(styleItem.tryPresetText);
    }
    if (styleItem.relatedFontCategories && styleItem.relatedFontCategories[0]) {
      setSelectedCategory(styleItem.relatedFontCategories[0]);
    }
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FAQS = [
    {
      q: `Is ${styleItem.name} suitable for first-time tattoos?`,
      a: `${styleItem.name} designs offer versatile styling. Always consult your tattoo artist regarding linework thickness, placement area, and long-term aging before committing.`,
    },
    {
      q: `Which fonts work best with ${styleItem.name}?`,
      a: `Recommended categories include ${styleItem.relatedFontCategories.join(', ')} typography, providing high contrast and visual legibility.`,
    },
    {
      q: `Can I export high-resolution stencils for ${styleItem.name}?`,
      a: `Yes, you can generate and download 100% free vector SVG or PNG thermal transfer stencils directly from our tattoo font generator.`,
    },
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* Back Button */}
      <div>
        <Link
          to="/tattoo-styles"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-purple-400" />
          <span>Back to All Tattoo Styles</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Tag className="w-3.5 h-3.5 text-purple-400" />
          {styleItem.category} Style Guide
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          {styleItem.name}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
          {styleItem.shortDescription}
        </p>
      </div>

      {/* Large Hero Image Display */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 bg-[#0B0E14] shadow-2xl relative aspect-[16/9] max-h-[480px]">
        <TattooImageDisplay
          src={styleItem.imageUrl}
          alt={styleItem.altText}
          styleName={styleItem.name}
          tryPresetText={styleItem.tryPresetText}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <span className="text-xs font-mono text-purple-300 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-lg">
            Source: {styleItem.creator} • {styleItem.licenseInfo}
          </span>
        </div>
      </div>

      {/* Style Overview & Characteristics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Content (2 cols) */}
        <div className="md:col-span-2 glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 className="text-2xl font-extrabold text-white">What is {styleItem.name}?</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            {styleItem.fullDescription}
          </p>

          {/* Suitable Placement */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="font-extrabold text-base text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Recommended Body Placements</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {styleItem.suitablePlacement.map((p) => (
                <span
                  key={p}
                  className="text-xs font-bold text-slate-200 bg-[#0B0E14] px-3.5 py-1.5 rounded-xl border border-slate-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Characteristics Column (1 col) */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="font-extrabold text-lg text-white">Key Characteristics</h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {styleItem.characteristics.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-slate-800">
            <button
              onClick={handleLaunchInGenerator}
              className="w-full py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Try {styleItem.name} Lettering</span>
            </button>
          </div>
        </div>

      </div>

      {/* Recommended Fonts Preview Section */}
      <div className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Recommended Fonts for {styleItem.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchingFonts.map((font) => (
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

      {/* FAQ Accordion Section */}
      <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Frequently Asked Questions ({styleItem.name})</h2>
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#0B0E14] border border-slate-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-slate-200"
              >
                <span>{faq.q}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
