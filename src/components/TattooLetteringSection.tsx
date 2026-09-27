import React from 'react';
import { Type, Sparkles, ShieldAlert } from 'lucide-react';

export const TattooLetteringSection: React.FC = () => {
  return (
    <section id="lettering-section" className="my-24 py-16 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          Tattoo Lettering for Names, Quotes, Dates & More
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Tattoo lettering allows you to turn meaningful words, names, and memories into permanent body art. Whether you are planning a small wrist tattoo or a prominent backpiece, generating live previews helps you find the visual balance before entering the studio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-slate-800">
            <h3 className="font-extrabold text-xl text-white mb-3 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400" /> Name & Initials Lettering
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Name tattoos for family members, partners, or children look best in flowing script or traditional Old English lettering with legible spacing.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-800">
            <h3 className="font-extrabold text-xl text-white mb-3 flex items-center gap-3">
              <Type className="w-5 h-5 text-indigo-400" /> Dates & Roman Numerals
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Birth dates and anniversary milestones rendered in Roman numerals (e.g. XIII.VI.MMXXVI) pair well with minimal serif or clean structured typography.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FontSelectionGuideSection: React.FC = () => {
  return (
    <section id="selection-guide-section" className="my-24 py-16 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          Tattoo Font Selection Guide
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Choosing the right tattoo font depends on your desired aesthetic and placement area:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-7 rounded-3xl border border-slate-800">
            <span className="text-xs font-black uppercase text-purple-400 block mb-2 tracking-wider">Elegant</span>
            <h3 className="font-extrabold text-lg text-white mb-2">Script & Calligraphy</h3>
            <p className="text-sm text-slate-300 leading-relaxed">Best for romantic quotes, names, and curved collarbone tattoos.</p>
          </div>

          <div className="glass-card p-7 rounded-3xl border border-slate-800">
            <span className="text-xs font-black uppercase text-amber-400 block mb-2 tracking-wider">Bold</span>
            <h3 className="font-extrabold text-lg text-white mb-2">Blackletter & Gothic</h3>
            <p className="text-sm text-slate-300 leading-relaxed">Best for chest, backpiece, and traditional biker tattoo aesthetics.</p>
          </div>

          <div className="glass-card p-7 rounded-3xl border border-slate-800">
            <span className="text-xs font-black uppercase text-indigo-400 block mb-2 tracking-wider">Simple</span>
            <h3 className="font-extrabold text-lg text-white mb-2">Minimalist & Serif</h3>
            <p className="text-sm text-slate-300 leading-relaxed">Best for subtle micro tattoos, wrist dates, and coordinates.</p>
          </div>

          <div className="glass-card p-7 rounded-3xl border border-slate-800">
            <span className="text-xs font-black uppercase text-emerald-400 block mb-2 tracking-wider">Personal</span>
            <h3 className="font-extrabold text-lg text-white mb-2">Handwritten & Signature</h3>
            <p className="text-sm text-slate-300 leading-relaxed">Best for signature reproductions and personal handwriting style.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PlacementInspirationSection: React.FC = () => {
  return (
    <section id="placement-section" className="my-24 py-16 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          Placement & Body Experimentation
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-8">
          Different lettering shapes work differently depending on placement. Curved text suits ribcages, shoulders, and wrist contours, while flat multi-line text fits upper back and forearm placements.
        </p>

        {/* PRD Section 34 Disclaimer */}
        <div className="bg-purple-950/40 p-7 rounded-3xl border border-purple-800/60 flex items-start gap-4 shadow-xl">
          <ShieldAlert className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-purple-200 leading-relaxed">
            <strong>Important Disclaimer:</strong> The generator creates digital lettering previews. Final tattoo sizing, readability, placement, and suitability should be discussed with a professional tattoo artist.
          </p>
        </div>
      </div>
    </section>
  );
};
