import React, { useState } from 'react';
import { X, Heart, Share2, Sparkles, Check } from 'lucide-react';
import type { BottomBodyTattoo } from '../data/bottomBodyTattoos';
import { useNavigate } from 'react-router-dom';

interface BottomBodyTattooModalProps {
  tattoo: BottomBodyTattoo | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (tattoo: BottomBodyTattoo) => void;
  onSelectCategory?: (category: string) => void;
}

export const BottomBodyTattooModal: React.FC<BottomBodyTattooModalProps> = ({
  tattoo,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onSelectCategory,
}) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || !tattoo) return null;

  const handleCreateSimilar = () => {
    onClose();
    if (onSelectCategory) {
      if (tattoo.style === 'Script') {
        onSelectCategory('calligraphy');
      } else if (tattoo.style === 'Minimalist' || tattoo.style === 'Fine Line') {
        onSelectCategory('minimalist');
      } else {
        onSelectCategory('all');
      }
    }
    navigate('/?text=Custom+Design');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${tattoo.name} — Tattoo Inspiration`,
      text: `Check out this ${tattoo.style} ${tattoo.name} for ${tattoo.placement} on TattooFontLab!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copy link
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0F131C] border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#131722]">
          <div>
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
              {tattoo.placement} • {tattoo.style}
            </span>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {tattoo.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Visual Image Display */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0E14] flex items-center justify-center min-h-[260px] p-4">
            <img
              src={tattoo.svgVisual}
              alt={tattoo.name}
              className="max-h-[300px] w-auto object-contain rounded-xl"
            />
            <button
              onClick={() => onToggleSave(tattoo)}
              className={`absolute top-4 right-4 p-3 rounded-2xl border transition-all ${
                isSaved
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/50 shadow-lg'
                  : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save Design Idea'}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
            </button>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#131722] p-3 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Placement</span>
              <span className="text-xs font-extrabold text-white mt-0.5 block">{tattoo.placement}</span>
            </div>

            <div className="bg-[#131722] p-3 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Style</span>
              <span className="text-xs font-extrabold text-purple-300 mt-0.5 block">{tattoo.style}</span>
            </div>

            <div className="bg-[#131722] p-3 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Size Scale</span>
              <span className="text-xs font-extrabold text-emerald-400 mt-0.5 block">{tattoo.size}</span>
            </div>

            <div className="bg-[#131722] p-3 rounded-2xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Design Type</span>
              <span className="text-xs font-extrabold text-pink-400 mt-0.5 block">{tattoo.designType}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#131722] p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Design Context & Aesthetics</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {tattoo.description}
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-[#131722]">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-bold transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-purple-400" />}
              <span>{copied ? 'Link Copied!' : 'Share Idea'}</span>
            </button>
          </div>

          <button
            onClick={handleCreateSimilar}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-purple-950/50 flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Create Similar Tattoo</span>
          </button>
        </div>

      </div>
    </div>
  );
};
