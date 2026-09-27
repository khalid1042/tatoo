import React from 'react';
import type { FamousTattoo } from '../data/famousTattoos';
import { TattooImageDisplay } from './TattooImageDisplay';
import { Eye, Type, User, Tag, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FamousTattooCardProps {
  tattoo: FamousTattoo;
  onOpenLightbox: (tattoo: FamousTattoo) => void;
  onOpenAiFinder: (tattoo: FamousTattoo) => void;
  onOpenGeneratorWithStyle?: (category?: string) => void;
}

export const FamousTattooCard: React.FC<FamousTattooCardProps> = ({
  tattoo,
  onOpenLightbox,
  onOpenAiFinder,
  onOpenGeneratorWithStyle,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/most-famous-tattoos/${tattoo.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTryGenerator = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tattoo.generatorCategory) {
      if (onOpenGeneratorWithStyle) {
        onOpenGeneratorWithStyle(tattoo.generatorCategory);
      } else {
        navigate(`/?category=${tattoo.generatorCategory}&text=${encodeURIComponent(tattoo.presetText || 'KHALID')}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/?category=all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="glass-card rounded-2xl sm:rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col hover:border-purple-600/50 transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-purple-950/20"
    >
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090E]">
        <TattooImageDisplay
          src={tattoo.image}
          alt={tattoo.altText}
          styleName={tattoo.style}
          tryPresetText={tattoo.presetText || tattoo.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-[#0B0E14]/90 backdrop-blur-md border border-purple-500/40 text-purple-300 shadow-md flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-purple-400" />
            {tattoo.style}
          </span>

          {tattoo.person && (
            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-amber-300 shadow-md flex items-center gap-1.5">
              <User className="w-3 h-3 text-amber-400" />
              {tattoo.person}
            </span>
          )}
        </div>

        {/* Quick Actions overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAiFinder(tattoo);
            }}
            className="p-2 rounded-xl bg-slate-900/90 text-purple-300 hover:text-white hover:bg-purple-600 transition-colors shadow-lg backdrop-blur-sm border border-purple-500/40"
            title="AI Style Breakdown & Inspiration"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox(tattoo);
            }}
            className="p-2 rounded-xl bg-purple-600/90 text-white hover:bg-purple-500 transition-colors shadow-lg backdrop-blur-sm"
            title="Preview high-res image & metadata"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
              {tattoo.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <MapPin className="w-3 h-3 text-purple-400" />
              {tattoo.placement}
            </span>
            <span>•</span>
            <span className="text-slate-400">{tattoo.category}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {tattoo.shortDescription}
          </p>

          <div className="bg-purple-950/40 border border-purple-800/40 p-2.5 rounded-xl">
            <span className="text-[11px] font-semibold text-purple-300 block line-clamp-2">
              <span className="font-bold text-purple-200">Why Notable: </span>
              {tattoo.notableReason}
            </span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
          <button
            onClick={handleCardClick}
            className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            View Details
          </button>

          <button
            onClick={handleTryGenerator}
            className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-extrabold text-white shadow-md transition-colors flex items-center justify-center gap-1.5"
          >
            <Type className="w-3.5 h-3.5" />
            Try Lettering
          </button>
        </div>
      </div>
    </div>
  );
};
