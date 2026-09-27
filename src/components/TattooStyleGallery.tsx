import React, { useState, useMemo } from 'react';
import { TATTOO_STYLES } from '../data/tattooStyles';
import type { TattooStyleItem } from '../data/tattooStyles';
import { TattooStyleCard } from './TattooStyleCard';
import { Image, Search, Filter, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TattooStyleGalleryProps {
  setInputText: (text: string) => void;
  setSelectedCategory: (cat: any) => void;
}

export const TattooStyleGallery: React.FC<TattooStyleGalleryProps> = ({
  setInputText,
  setSelectedCategory,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'style' | 'lettering' | 'multilingual' | 'name' | 'date'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleTryStyle = (item: TattooStyleItem) => {
    if (item.tryPresetText) {
      setInputText(item.tryPresetText);
    }
    if (item.relatedFontCategories && item.relatedFontCategories[0]) {
      setSelectedCategory(item.relatedFontCategories[0] as any);
    }
    const el = document.getElementById('generator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredItems = useMemo(() => {
    return TATTOO_STYLES.filter((item) => {
      const matchesType = selectedFilter === 'all' || item.type === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        (item.language && item.language.toLowerCase().includes(q));

      return matchesType && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section id="explore-styles-section" className="my-16 sm:my-20 py-12 sm:py-16 border-t border-slate-800/80">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Image className="w-3.5 h-3.5 text-purple-400" />
          Tattoo Style Image Inspiration
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Explore Tattoo Styles & Artwork
        </h2>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Understand what each tattoo aesthetic looks like in real body art before selecting your lettering style. Click any style to test it live in the generator.
        </p>
      </div>

      {/* Filter Bar & Search Box */}
      <div className="bg-[#131722] p-5 sm:p-6 rounded-3xl border border-slate-800/90 shadow-2xl mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-purple-400" />
              <span>Filter:</span>
            </span>

            {[
              { id: 'all', label: 'All Styles' },
              { id: 'style', label: 'Tattoo Aesthetics' },
              { id: 'lettering', label: 'Lettering Styles' },
              { id: 'multilingual', label: 'Multilingual Art' },
              { id: 'name', label: 'Names & Dates' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                  selectedFilter === f.id
                    ? 'bg-purple-600 text-white border-purple-400 shadow-md ring-2 ring-purple-400/40'
                    : 'bg-[#0B0E14] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search styles e.g. Gothic, Fine Line..."
              className="w-full bg-[#0B0E14] text-xs font-medium text-slate-200 pl-9 pr-3 py-2.5 rounded-xl border border-slate-800 outline-none focus:border-purple-500"
            />
          </div>

        </div>
      </div>

      {/* Responsive Visual Card Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#131722] p-12 text-center rounded-3xl border border-slate-800 space-y-3">
          <Sparkles className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="font-bold text-slate-300 text-base">No tattoo styles match "{searchQuery}"</h3>
          <p className="text-xs text-slate-400">Try searching for "Gothic", "Japanese", "Fine Line", or "Script".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <TattooStyleCard key={item.id} item={item} onTryStyle={handleTryStyle} />
          ))}
        </div>
      )}

    </section>
  );
};
