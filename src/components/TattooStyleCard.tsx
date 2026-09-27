import React from 'react';
import type { TattooStyleItem } from '../data/tattooStyles';
import { TattooImageDisplay } from './TattooImageDisplay';
import { ArrowRight, Sparkles, MapPin, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TattooStyleCardProps {
  item: TattooStyleItem;
  onTryStyle: (item: TattooStyleItem) => void;
}

export const TattooStyleCard: React.FC<TattooStyleCardProps> = ({ item, onTryStyle }) => {
  const navigate = useNavigate();

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-slate-800/90 hover:border-purple-500/60 transition-all duration-300 group flex flex-col justify-between shadow-xl my-4">
      
      {/* 1. Primary Visual Image Element */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#07090E]">
        <TattooImageDisplay
          src={item.imageUrl}
          alt={item.altText}
          styleName={item.name}
          tryPresetText={item.tryPresetText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-transparent opacity-90" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-extrabold text-purple-300 border border-purple-800/60 shadow-md">
          {item.category}
        </div>

        {/* Style Name Overlay on Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-black text-xl text-white tracking-tight group-hover:text-purple-300 transition-colors drop-shadow-md">
            {item.name}
          </h3>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-[#131722]">
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {item.shortDescription}
        </p>

        {/* Characteristics Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.characteristics.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold text-slate-400 bg-[#0B0E14] px-2.5 py-1 rounded-lg border border-slate-800/80 flex items-center gap-1"
            >
              <Tag className="w-3 h-3 text-purple-400" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Placement Tag */}
        {item.suitablePlacement && item.suitablePlacement.length > 0 && (
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">Placement: <strong className="text-slate-200">{item.suitablePlacement.slice(0, 2).join(', ')}</strong></span>
          </div>
        )}

        {/* 3. Action Buttons Row */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2.5">
          <button
            onClick={() => {
              navigate(`/tattoo-styles/${item.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Explore Style</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onTryStyle(item)}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold shadow-md transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Try Font</span>
          </button>
        </div>

      </div>

    </div>
  );
};
