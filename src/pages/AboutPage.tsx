import React from 'react';
import { SeoFaqSection } from '../components/SeoFaqSection';
import { ShieldCheck, Download, Code2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-4">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2 pb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Client-Side Privacy & Open Source
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          About TattooFontLab
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          TattooFontLab is a dedicated, web-based workspace designed to help tattoo enthusiasts and tattoo artists generate instant, high-contrast lettering previews and stencil vectors.
        </p>
      </div>

      {/* Product Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 lg:p-9 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <ShieldCheck className="w-7 h-7 text-emerald-400" />
          <h3 className="font-bold text-xl text-white">100% Client-Side Privacy</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your text entries, name previews, and dates are rendered directly in your web browser. No text or images are ever uploaded to remote servers.
          </p>
        </div>

        <div className="glass-card p-8 lg:p-9 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <Download className="w-7 h-7 text-purple-400" />
          <h3 className="font-bold text-xl text-white">Free Stencil Exports</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Download crisp PNG stencils and vector SVG files free of charge for stencil printing or digital tattoo design software.
          </p>
        </div>

        <div className="glass-card p-8 lg:p-9 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <Code2 className="w-7 h-7 text-indigo-400" />
          <h3 className="font-bold text-xl text-white">SIL OFL Open Fonts</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            All fonts in our generator are open-source font assets under SIL Open Font License, allowing personal and commercial use.
          </p>
        </div>
      </div>

      {/* SEO FAQ Section */}
      <div className="pt-12 pb-12 sm:pb-20 border-t border-slate-800/80">
        <SeoFaqSection />
      </div>
    </div>
  );
};
