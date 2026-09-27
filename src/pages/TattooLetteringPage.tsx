import React from 'react';
import { TattooLetteringSection, FontSelectionGuideSection, PlacementInspirationSection } from '../components/TattooLetteringSection';
import { Type, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TattooLetteringPageProps {
  setInputText: (text: string) => void;
}

export const TattooLetteringPage: React.FC<TattooLetteringPageProps> = ({ setInputText }) => {
  const navigate = useNavigate();

  const LETTERING_TYPES = [
    {
      title: 'Name Tattoo Lettering',
      text: 'Names of children, family members, or loved ones look best in flowing Script or Old English lettering with custom flourishes.',
      preset: 'Khalid',
    },
    {
      title: 'Quote & Phrase Lettering',
      text: 'Multi-line quotes, latin maxims, and inspiration phrases (e.g. "Amor Fati", "Carpe Diem") rendered with balanced line height.',
      preset: 'Love Never Dies',
    },
    {
      title: 'Anniversary & Birth Dates',
      text: 'Special dates and milestones transformed into clean Roman numeral stencils (e.g. XIII.VI.MMXXVI) or minimal serif digits.',
      preset: 'XIII.VI.MMXXVI',
    },
    {
      title: 'Initial Lettering & Monograms',
      text: 'Interlocking capital letters, monogram initials, and calligraphic drop caps designed for chest or wrist tattoos.',
      preset: 'K.A.M.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Type className="w-3.5 h-3.5 text-purple-400" />
          Lettering Design Workspace
        </div>
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
          Tattoo Lettering for Names, Quotes & Dates
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
          Tattoo lettering transforms personal words, dates, and memories into permanent body art. Explore custom lettering categories below and launch instant font previews.
        </p>
      </div>

      {/* Lettering Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LETTERING_TYPES.map((item) => (
          <div key={item.title} className="glass-card p-7 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.text}
            </p>
            <div className="pt-3 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400">Example: "{item.preset}"</span>
              <button
                onClick={() => {
                  setInputText(item.preset);
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition-all"
              >
                Preview Lettering
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Lettering Sections */}
      <TattooLetteringSection />
      <FontSelectionGuideSection />
      <PlacementInspirationSection />

      {/* Studio Checklist */}
      <div className="bg-[#131722] p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-2xl font-bold text-white">4 Rules for Studio-Ready Tattoo Lettering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Size for Aging:</strong> Ink expands slightly over decades. Choose adequate font size for intricate script loops.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Test Contrast:</strong> Verify your lettering in both high-contrast black ink and thermal outline stencil modes.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Check Spelling Twice:</strong> Verify names, latin phrases, and date numbers before printing the transfer stencil.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Consult Your Artist:</strong> Bring vector SVG or PNG downloads to your tattoo appointment for accurate tracing.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
