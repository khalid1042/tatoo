import React, { useEffect } from 'react';
import type { FamousTattoo } from '../data/famousTattoos';
import { TattooImageDisplay } from './TattooImageDisplay';
import { X, Type, ExternalLink, ShieldCheck, User, Tag, MapPin, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FamousTattooLightboxModalProps {
  tattoo: FamousTattoo | null;
  onClose: () => void;
}

export const FamousTattooLightboxModal: React.FC<FamousTattooLightboxModalProps> = ({
  tattoo,
  onClose,
}) => {
  const navigate = useNavigate();

  // Keyboard ESC Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!tattoo) return null;

  const handleGoToDetail = () => {
    onClose();
    navigate(`/most-famous-tattoos/${tattoo.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGenerator = () => {
    onClose();
    const catParam = tattoo.generatorCategory ? `?category=${tattoo.generatorCategory}` : '';
    const textParam = tattoo.presetText ? `&text=${encodeURIComponent(tattoo.presetText)}` : '';
    navigate(`/${catParam}${textParam}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative max-w-4xl w-full bg-[#0B0E14] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl space-y-0 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090E]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            <h3 className="font-extrabold text-base sm:text-lg text-white">
              {tattoo.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image View */}
          <div className="relative aspect-[4/3] md:aspect-auto w-full bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 overflow-hidden">
            <TattooImageDisplay
              src={tattoo.image}
              alt={tattoo.altText}
              styleName={tattoo.style}
              tryPresetText={tattoo.presetText || tattoo.title}
              className="w-full h-full object-contain max-h-[500px]"
            />
          </div>

          {/* Details & Facts */}
          <div className="p-6 space-y-5 flex flex-col justify-between max-h-[600px] overflow-y-auto">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-purple-400" />
                  {tattoo.style}
                </span>

                {tattoo.person && (
                  <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    {tattoo.person}
                  </span>
                )}

                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {tattoo.placement}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {tattoo.shortDescription}
              </p>

              {/* Why Notable */}
              <div className="bg-purple-950/30 border border-purple-800/40 p-3.5 rounded-2xl space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  Why Notable & Documented Fame
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tattoo.notableReason}
                </p>
              </div>

              {/* Documented Meaning */}
              {tattoo.documentedMeaning && (
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <Info className="w-4 h-4 text-blue-400" />
                    Documented Meaning
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tattoo.documentedMeaning}
                  </p>
                </div>
              )}

              {/* Main Elements */}
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-2">
                  Key Design Elements:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tattoo.mainElements.map((elem) => (
                    <span
                      key={elem}
                      className="text-[11px] font-medium bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source Info if present */}
              {tattoo.sourceInfo && (
                <p className="text-[11px] text-slate-400 font-mono italic">
                  Source: {tattoo.sourceInfo}
                </p>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleGoToDetail}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-purple-400" />
                Full Design Page
              </button>

              <button
                onClick={handleOpenGenerator}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-extrabold text-white shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Type className="w-4 h-4" />
                Try In Font Generator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
