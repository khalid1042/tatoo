import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TattooNameQuoteGalleryProps {
  setInputText: (text: string) => void;
  setSelectedCategory: (cat: any) => void;
}

const NAME_QUOTE_IDEAS = [
  {
    title: 'Children & Family Names',
    category: 'Name Tattoo',
    sampleText: 'Khalid & Family',
    styleName: 'Old English / Cursive Banner',
    recommendedCat: 'old-english',
    description: 'Tribute tattoos honoring children, partners, or family names with custom banner lettering.',
    ctaLabel: 'Create Name Tattoo',
  },
  {
    title: 'Inspirational Latin Maxims',
    category: 'Quote Tattoo',
    sampleText: 'Amor Fati',
    styleName: 'Flowing Script Calligraphy',
    recommendedCat: 'script',
    description: 'Timeless short phrases and latin maxims rendered in fluid calligraphic loops.',
    ctaLabel: 'Generate Quote Tattoo',
  },
  {
    title: 'Milestone Dates & Years',
    category: 'Date & Number Tattoo',
    sampleText: 'XIII.VI.MMXXVI',
    styleName: 'Serif Roman Numerals',
    recommendedCat: 'serif',
    description: 'Birth dates, wedding anniversaries, and memorial years in clean structured digits.',
    ctaLabel: 'Generate Date Tattoo',
  },
  {
    title: 'Love & Memorial Quotes',
    category: 'Memorial Quote',
    sampleText: 'Love Never Dies',
    styleName: 'Cursive Handwritten Script',
    recommendedCat: 'cursive',
    description: 'Meaningful multi-word quotes with balanced line height and legibility.',
    ctaLabel: 'Try Quote Lettering',
  },
];

export const TattooNameQuoteGallery: React.FC<TattooNameQuoteGalleryProps> = ({
  setInputText,
  setSelectedCategory,
}) => {
  const navigate = useNavigate();

  const handleLaunchPreset = (sampleText: string, cat: string) => {
    setInputText(sampleText);
    setSelectedCategory(cat);
    const el = document.getElementById('generator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="name-quote-gallery-section" className="my-16 sm:my-20 py-12 sm:py-16 border-t border-slate-800/80">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Name, Quote & Date Tattoo Inspiration
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Visual Name & Quote Tattoo Ideas
        </h2>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore real visual concepts for name tattoos, inspirational quotes, memorial phrases, and Roman numeral dates.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {NAME_QUOTE_IDEAS.map((item) => (
          <div
            key={item.title}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-5 group hover:border-purple-500/60 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider bg-amber-950/70 border border-amber-800/60 px-3 py-1 rounded-lg">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-purple-300">{item.styleName}</span>
              </div>

              <h3 className="font-extrabold text-2xl text-white group-hover:text-purple-300 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Visual Preview Box */}
              <div className="bg-[#0B0E14] p-5 rounded-2xl border border-slate-800/90 flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-xs text-slate-500 font-mono">Example Lettering Preview:</span>
                <span className="font-extrabold text-2xl sm:text-3xl text-purple-200 tracking-wide py-1">
                  "{item.sampleText}"
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Ready to customize?</span>
              <button
                onClick={() => handleLaunchPreset(item.sampleText, item.recommendedCat)}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>{item.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
