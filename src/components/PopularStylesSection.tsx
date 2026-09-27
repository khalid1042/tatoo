import React from 'react';
import type { FontCategoryId } from '../data/fonts';
import { Type, ArrowRight } from 'lucide-react';

interface PopularStylesSectionProps {
  onSelectCategory: (cat: FontCategoryId) => void;
}

const POPULAR_STYLES: { id: FontCategoryId; name: string; description: string; sample: string }[] = [
  {
    id: 'script',
    name: 'Script Tattoo Fonts',
    description: 'Elegant, flowing cursive strokes with artistic flourishes for names and quotes.',
    sample: 'Amor Fati',
  },
  {
    id: 'cursive',
    name: 'Cursive Tattoo Fonts',
    description: 'Connected handwritten lettering with soft, continuous loops.',
    sample: 'Always & Forever',
  },
  {
    id: 'gothic',
    name: 'Gothic Tattoo Fonts',
    description: 'Dark, dramatic lettering with sharp angular strokes for chest and back tattoos.',
    sample: 'Stay Strong',
  },
  {
    id: 'blackletter',
    name: 'Blackletter Tattoo Fonts',
    description: 'Traditional medieval blackletter style with diamond drop caps.',
    sample: 'Family First',
  },
  {
    id: 'old-english',
    name: 'Old English Tattoo Fonts',
    description: 'Classic gangland and traditional biker tattoo aesthetic.',
    sample: 'XIII.VI.MMXXVI',
  },
  {
    id: 'calligraphy',
    name: 'Calligraphy Tattoo Fonts',
    description: 'Decorative and artistic pen strokes with high pressure contrast.',
    sample: 'Blessed',
  },
  {
    id: 'minimalist',
    name: 'Minimalist Tattoo Fonts',
    description: 'Simple, delicate thin line lettering for subtle micro tattoos.',
    sample: 'Carpe Diem',
  },
  {
    id: 'handwritten',
    name: 'Handwritten Tattoo Fonts',
    description: 'Natural handwriting-inspired styles for personal signatures.',
    sample: 'Love Never Dies',
  },
];

export const PopularStylesSection: React.FC<PopularStylesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="popular-styles-section" className="my-16 py-12 border-t border-slate-800/80 overflow-visible">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight pt-2">
          Popular Tattoo Font Styles
        </h2>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore the most requested lettering styles for custom text tattoos. Click any category to filter the generator.
        </p>
      </div>

      {/* Spacious 4-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {POPULAR_STYLES.map((style) => (
          <div
            key={style.id}
            onClick={() => {
              onSelectCategory(style.id);
              const el = document.getElementById('generator-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glass-card p-6 lg:p-7 rounded-3xl cursor-pointer hover:border-purple-500/60 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-extrabold text-base lg:text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {style.name}
                </h3>
                <div className="p-2 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-800/50 shrink-0">
                  <Type className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs lg:text-sm text-slate-300 leading-relaxed mb-6">
                {style.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-400 group-hover:text-purple-300">
              <span className="truncate pr-2">Explore {style.name.replace(' Tattoo Fonts', '')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
