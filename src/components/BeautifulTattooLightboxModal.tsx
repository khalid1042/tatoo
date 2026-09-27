import React from 'react';
import type { BeautifulTattoo } from '../data/beautifulTattoos';
import { X, Type, Tag, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BeautifulTattooLightboxModalProps {
  tattoo: BeautifulTattoo | null;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

export const BeautifulTattooLightboxModal: React.FC<BeautifulTattooLightboxModalProps> = ({
  tattoo,
  onClose,
  onSelectCategory,
}) => {
  const navigate = useNavigate();

  if (!tattoo) return null;

  const handleTryLettering = () => {
    onClose();
    if (tattoo.generatorCategory) {
      if (onSelectCategory) {
        onSelectCategory(tattoo.generatorCategory);
      }
      navigate(`/?category=${tattoo.generatorCategory}&text=${encodeURIComponent(tattoo.presetText || 'BLOOM')}`);
    } else {
      navigate('/?category=all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0B0E14] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/80"
          title="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Visual Image Container */}
        <div className="w-full md:w-1/2 bg-[#07090E] relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-800">
          <img
            src={tattoo.image}
            alt={tattoo.altText}
            className="w-full h-auto max-h-[60vh] object-contain rounded-2xl shadow-xl border border-slate-800/80"
          />

          <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Licensed Inspiration Graphic</span>
          </div>
        </div>

        {/* Right Details Container */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-purple-400" />
                {tattoo.style}
              </span>

              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {tattoo.placement}
              </span>

              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {tattoo.size} • {tattoo.colorType}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {tattoo.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {tattoo.shortDescription}
            </p>

            {/* Common Interpretation */}
            <div className="bg-purple-950/30 border border-purple-800/40 p-4 rounded-2xl space-y-1.5">
              <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Symbolic Meaning &amp; Context
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {tattoo.commonInterpretation}
              </p>
            </div>

            {/* License & Source Notice */}
            <div className="text-[11px] text-slate-400 space-y-1 border-t border-slate-800/80 pt-3">
              <div><strong className="text-slate-300">Source:</strong> {tattoo.source}</div>
              <div><strong className="text-slate-300">Creator:</strong> {tattoo.creator}</div>
              <div><strong className="text-slate-300">License:</strong> {tattoo.license}</div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="pt-4 border-t border-slate-800 space-y-2.5">
            <button
              onClick={handleTryLettering}
              className="w-full py-3 px-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm shadow-lg shadow-purple-950/50 transition-all flex items-center justify-center gap-2"
            >
              <Type className="w-4 h-4" />
              Customize Lettering in Font Generator
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 transition-colors"
            >
              Close &amp; Keep Exploring
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
