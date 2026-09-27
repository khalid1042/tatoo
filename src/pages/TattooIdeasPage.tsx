import React from 'react';
import { TattooIdeasSection } from '../components/TattooIdeasSection';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TattooIdeasPageProps {
  setInputText: (text: string) => void;
}

export const TattooIdeasPage: React.FC<TattooIdeasPageProps> = ({ setInputText }) => {
  const navigate = useNavigate();

  const FEATURED_IDEAS = [
    { title: 'Khalid', category: 'Name Tattoo', style: 'Old English / Cursive' },
    { title: 'Love Never Dies', category: 'Quote Tattoo', style: 'Script / Calligraphy' },
    { title: 'XIII.VI.MMXXVI', category: 'Date Tattoo', style: 'Roman Numerals' },
    { title: 'Forever Family', category: 'Family Tattoo', style: 'Blackletter' },
    { title: 'Amor Fati', category: 'Latin Motto', style: 'Minimalist Serif' },
    { title: 'Stay Strong', category: 'Motivational', style: 'Gothic / Brush' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          Tattoo Inspiration Hub
        </div>
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
          Tattoo Lettering Ideas & Inspiration
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
          Need inspiration for your next lettering tattoo? Browse popular ideas, quotes, dates, and name concepts below. Click any idea to open it live in the font generator.
        </p>
      </div>

      {/* Featured Preset Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_IDEAS.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              setInputText(item.title);
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-purple-500/60 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                {item.category}
              </span>
              <h3 className="font-extrabold text-2xl text-white group-hover:text-purple-300 transition-colors mb-2">
                "{item.title}"
              </h3>
              <p className="text-xs text-slate-400">
                Recommended in: <strong>{item.style}</strong>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-bold text-purple-400 group-hover:text-purple-300">
              <span>Preview in Generator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Ideas Section */}
      <TattooIdeasSection />
    </div>
  );
};
