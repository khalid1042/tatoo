import React from 'react';
import { SeoGuideSection } from '../components/SeoGuideSection';
import { BookOpen, Compass, Ruler, ShieldAlert } from 'lucide-react';

export const GuidesPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-4">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          Educational Guides & Advice
        </div>
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
          Tattoo Lettering Selection & Preparation Guides
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
          Learn how to select font styles, calculate optimal lettering dimensions, prepare transfer stencils, and collaborate with tattoo artists.
        </p>
      </div>

      {/* Guide Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-7 rounded-3xl border border-slate-800 space-y-3">
          <Compass className="w-6 h-6 text-purple-400" />
          <h3 className="font-bold text-lg text-white">1. Style Selection</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Match font personalities to body placement. Delicate cursive suits collarbones, while blackletter dominates chest and back tattoos.
          </p>
        </div>

        <div className="glass-card p-7 rounded-3xl border border-slate-800 space-y-3">
          <Ruler className="w-6 h-6 text-indigo-400" />
          <h3 className="font-bold text-lg text-white">2. Sizing & Aging</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ink spreads slightly under the skin over time. Keep letter loops open to prevent ink blurring as the tattoo matures.
          </p>
        </div>

        <div className="glass-card p-7 rounded-3xl border border-slate-800 space-y-3">
          <ShieldAlert className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-white">3. Stencil Preparation</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Export vector SVG or high-res PNG stencils to hand over to your tattoo artist for crisp thermal transfer printing.
          </p>
        </div>
      </div>

      {/* Full Guide Content */}
      <div className="pt-12 border-t border-slate-800/80">
        <SeoGuideSection />
      </div>
    </div>
  );
};
