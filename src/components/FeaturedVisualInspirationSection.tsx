import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, ArrowRight, HeartHandshake, Flame } from 'lucide-react';
import { BEAUTIFUL_TATTOOS } from '../data/beautifulTattoos';
import { COUPLE_TATTOOS } from '../data/coupleTattoos';
import { FAMOUS_TATTOOS } from '../data/famousTattoos';

export const FeaturedVisualInspirationSection: React.FC = () => {
  return (
    <section className="space-y-12 py-10 border-t border-slate-800/80">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-extrabold shadow-inner">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Visual Tattoo Inspiration Galleries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Explore Tattoo Ideas &amp; Artwork Galleries
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Discover visual tattoo ideas across aesthetics, partner concepts, and iconic historical masterpieces before customizing your lettering.
        </p>
      </div>

      {/* 3 Main Hub Visual Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Hub 1: Beautiful Tattoos */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 group shadow-xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#07090E]">
            <img
              src={BEAUTIFUL_TATTOOS[0].image}
              alt="Beautiful Tattoos Gallery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-xl bg-purple-950/90 text-purple-300 border border-purple-800/60">
              Visual Library
            </span>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Beautiful Tattoos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore fine line wildflowers, minimalist butterflies, sacred geometry, watercolor hummingbirds, and script lettering.
              </p>
            </div>

            <NavLink
              to="/beautiful-tattoos"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="py-3 px-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Explore Beautiful Tattoos</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

        {/* Hub 2: Couple Tattoos */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-rose-500/60 transition-all duration-300 group shadow-xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#07090E]">
            <img
              src={COUPLE_TATTOOS[0].image}
              alt="Couple Tattoos Gallery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-xl bg-rose-950/90 text-rose-300 border border-rose-800/60">
              Partner &amp; Matching
            </span>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white group-hover:text-rose-300 transition-colors flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-rose-400" />
                Couple Tattoos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discover matching sun &amp; moon, lock &amp; key, king &amp; queen crowns, interlocking initials, and anniversary dates.
              </p>
            </div>

            <NavLink
              to="/couple-tattoos"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="py-3 px-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Explore Couple Tattoos</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

        {/* Hub 3: Most Famous Tattoos */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 group shadow-xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#07090E]">
            <img
              src={FAMOUS_TATTOOS[0].image}
              alt="Most Famous Tattoos Gallery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-xl bg-amber-950/90 text-amber-300 border border-amber-800/60">
              Iconic Masterpieces
            </span>
          </div>

          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                Most Famous Tattoos
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discover world-famous celebrity pieces, traditional Sailor Jerry flash, Samoan tribal sleeves, and historic Japanese Irezumi.
              </p>
            </div>

            <NavLink
              to="/most-famous-tattoos"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Explore Famous Tattoos</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

      </div>

    </section>
  );
};
