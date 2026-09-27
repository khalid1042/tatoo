import React, { useState, useMemo } from 'react';
import {
  FAMOUS_TATTOOS,
  FAMOUS_TATTOO_CATEGORIES,
  FAMOUS_TATTOO_STYLES,
  FAMOUS_TATTOO_PLACEMENTS,
  FAMOUS_TATTOO_TYPES,
  type FamousTattoo
} from '../data/famousTattoos';
import { FamousTattooCard } from '../components/FamousTattooCard';
import { FamousTattooLightboxModal } from '../components/FamousTattooLightboxModal';
import { AiStyleFinderModal } from '../components/AiStyleFinderModal';
import { TATTOO_STYLES } from '../data/tattooStyles';
import { TattooImageDisplay } from '../components/TattooImageDisplay';
import {
  Search,
  ShieldCheck,
  Type,
  Filter,
  User,
  Compass,
  HelpCircle,
  Award
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface MostFamousTattoosPageProps {
  onSelectCategory?: (category: any) => void;
}

export const MostFamousTattoosPage: React.FC<MostFamousTattoosPageProps> = ({
  onSelectCategory,
}) => {
  const navigate = useNavigate();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [selectedPlacement, setSelectedPlacement] = useState<string>('All Placements');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [sortOption, setSortOption] = useState<'featured' | 'a-z' | 'recent'>('featured');

  // Modals
  const [activeLightboxTattoo, setActiveLightboxTattoo] = useState<FamousTattoo | null>(null);
  const [activeAiFinderTattoo, setActiveAiFinderTattoo] = useState<FamousTattoo | null>(null);

  // Filtered List
  const filteredTattoos = useMemo(() => {
    let result = FAMOUS_TATTOOS.filter((tattoo) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tattoo.title.toLowerCase().includes(q) ||
        (tattoo.person && tattoo.person.toLowerCase().includes(q)) ||
        tattoo.style.toLowerCase().includes(q) ||
        tattoo.category.toLowerCase().includes(q) ||
        tattoo.placement.toLowerCase().includes(q) ||
        tattoo.shortDescription.toLowerCase().includes(q) ||
        tattoo.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === 'All Categories' || tattoo.category === selectedCategory;
      
      const matchesStyle =
        selectedStyle === 'All Styles' || tattoo.style.includes(selectedStyle);

      const matchesPlacement =
        selectedPlacement === 'All Placements' || tattoo.placement === selectedPlacement;

      const matchesType =
        selectedType === 'All Types' || tattoo.type === selectedType;

      return matchesSearch && matchesCategory && matchesStyle && matchesPlacement && matchesType;
    });

    if (sortOption === 'a-z') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'recent') {
      result = [...result].reverse();
    }

    return result;
  }, [searchQuery, selectedCategory, selectedStyle, selectedPlacement, selectedType, sortOption]);

  // Featured Celebrity Section List
  const celebrityTattoos = useMemo(() => {
    return FAMOUS_TATTOOS.filter((t) => t.category === 'Celebrity Tattoos' || t.person);
  }, []);

  // Famous Lettering Section List
  const letteringTattoos = useMemo(() => {
    return FAMOUS_TATTOOS.filter(
      (t) => t.category === 'Famous Lettering Tattoos' || t.type === 'Name' || t.type === 'Quote'
    );
  }, []);

  // Famous Symbols List
  const symbolTattoos = useMemo(() => {
    return FAMOUS_TATTOOS.filter((t) => t.category === 'Famous Symbol Tattoos' || t.type === 'Symbol');
  }, []);

  const handleOpenGenerator = (cat?: string) => {
    if (onSelectCategory && cat) {
      onSelectCategory(cat);
    }
    const catQuery = cat ? `?category=${cat}` : '';
    navigate(`/${catQuery}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-2 pb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-bold shadow-lg">
          <Award className="w-4 h-4 text-purple-400" />
          Documented Iconic Tattoo Heritage & Visual Discovery
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Most Famous Tattoos
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          Explore iconic tattoo designs, famous tattoo styles, lettering, symbols, and visual inspiration from recognizable tattoos around the world.
        </p>

        <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Editorial Rule: </strong> All descriptions are grounded in documented public records, artist statements, and historical traditions without manufactured popularity rankings.
          </span>
        </div>
      </section>

      {/* 2. Search & Controls Bar */}
      <section className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search famous tattoos by name, person, style, symbol, placement..."
              className="w-full bg-[#07090E] border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Option */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-400">Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="bg-[#07090E] border border-slate-800 rounded-xl px-4 py-3 text-xs font-bold text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="featured">Featured Famous</option>
              <option value="a-z">Name (A–Z)</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>
        </div>

        {/* Category Pills & Dropdown Filters */}
        <div className="space-y-4 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-purple-400" />
            Categories
          </div>

          <div className="flex flex-wrap gap-2">
            {FAMOUS_TATTOO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl border transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-950/50'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Filters: Style, Placement, Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Filter By Style
              </label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full bg-[#07090E] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {FAMOUS_TATTOO_STYLES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Filter By Placement
              </label>
              <select
                value={selectedPlacement}
                onChange={(e) => setSelectedPlacement(e.target.value)}
                className="w-full bg-[#07090E] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {FAMOUS_TATTOO_PLACEMENTS.map((pl) => (
                  <option key={pl} value={pl}>
                    {pl}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Filter By Design Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#07090E] border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
              >
                {FAMOUS_TATTOO_TYPES.map((tp) => (
                  <option key={tp} value={tp}>
                    {tp}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Famous Tattoo Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Famous Tattoo Designs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Showing {filteredTattoos.length} iconic tattoo design entries
            </p>
          </div>

          {(searchQuery || selectedCategory !== 'All Categories' || selectedStyle !== 'All Styles' || selectedPlacement !== 'All Placements' || selectedType !== 'All Types') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedStyle('All Styles');
                setSelectedPlacement('All Placements');
                setSelectedType('All Types');
              }}
              className="text-xs font-bold text-purple-400 hover:text-purple-300 underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredTattoos.length === 0 ? (
          <div className="glass-card p-12 text-center rounded-3xl border border-slate-800 space-y-4">
            <Compass className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No famous tattoos found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your search criteria or resetting filters to explore all iconic tattoos.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedStyle('All Styles');
                setSelectedPlacement('All Placements');
                setSelectedType('All Types');
              }}
              className="py-2.5 px-6 rounded-xl bg-purple-600 text-white font-bold text-xs"
            >
              Show All Famous Tattoos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTattoos.map((tattoo) => (
              <FamousTattooCard
                key={tattoo.id}
                tattoo={tattoo}
                onOpenLightbox={(t) => setActiveLightboxTattoo(t)}
                onOpenAiFinder={(t) => setActiveAiFinderTattoo(t)}
                onOpenGeneratorWithStyle={(cat) => handleOpenGenerator(cat)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. Famous Celebrity Tattoos Section */}
      <section className="glass-card p-8 lg:p-10 rounded-3xl border border-slate-800 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-bold mb-2">
              <User className="w-3.5 h-3.5 text-amber-400" />
              Public Figure Iconography
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Famous Celebrity Tattoos
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Recognizable tattoos associated with public figures and cultural icons with documented background context.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrityTattoos.map((tattoo) => (
            <div
              key={tattoo.id}
              onClick={() => {
                navigate(`/most-famous-tattoos/${tattoo.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#07090E] border border-slate-800/90 rounded-2xl p-4 space-y-3 cursor-pointer hover:border-amber-500/50 transition-all group"
            >
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
                <TattooImageDisplay
                  src={tattoo.image}
                  alt={tattoo.altText}
                  styleName={tattoo.style}
                  tryPresetText={tattoo.person || tattoo.title}
                />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  {tattoo.person}
                </span>
                <h4 className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                  {tattoo.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {tattoo.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Famous Tattoo Lettering Section (Connected to Font Generator) */}
      <section className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-800/50 p-8 lg:p-12 rounded-3xl space-y-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-950 px-3 py-1 rounded-md border border-purple-800 inline-block">
              Typography & Lettering Hub
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Famous Tattoo Lettering
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore famous names, quotes, Gothic blackletter backpieces, and fine-line scripts. Turn any iconic lettering style into your own custom tattoo stencil.
            </p>
          </div>

          <button
            onClick={() => handleOpenGenerator('all')}
            className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 font-extrabold text-sm text-white shadow-xl hover:shadow-purple-950/50 transition-all flex items-center gap-2 shrink-0"
          >
            <Type className="w-5 h-5" />
            Open Tattoo Font Generator
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {letteringTattoos.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B0E14] border border-slate-800 p-5 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 rounded-xl overflow-hidden bg-[#030407] p-2 border border-slate-800 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-950/80 px-2.5 py-0.5 rounded border border-purple-800">
                    {item.style}
                  </span>
                  <h4 className="font-bold text-base text-white mt-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.shortDescription}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <Link
                  to={`/most-famous-tattoos/${item.slug}`}
                  className="py-2 px-3 rounded-xl bg-slate-900 text-center text-xs font-bold text-slate-300 hover:text-white"
                >
                  View Style
                </Link>
                <button
                  onClick={() => handleOpenGenerator(item.generatorCategory || 'gothic')}
                  className="py-2 px-3 rounded-xl bg-purple-600 text-center text-xs font-bold text-white hover:bg-purple-500"
                >
                  Try This Font
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Famous Tattoo Styles Quick Jump */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Famous Tattoo Styles
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Explore the foundational artistic movements that shape famous tattoo design.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TATTOO_STYLES.slice(0, 6).map((style) => (
            <Link
              key={style.id}
              to={`/tattoo-styles/${style.slug}`}
              className="glass-card p-3 rounded-2xl border border-slate-800 hover:border-purple-600/60 transition-all text-center space-y-2 group"
            >
              <div className="h-20 rounded-xl bg-[#030407] border border-slate-800/80 p-1 flex items-center justify-center overflow-hidden">
                <img src={style.imageUrl} alt={style.name} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-purple-300 truncate">
                {style.name}
              </h4>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Famous Tattoo Symbols Section */}
      <section className="glass-card p-8 lg:p-10 rounded-3xl border border-slate-800 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Famous Tattoo Symbols
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Recognizable icons and their documented cultural context. <strong className="text-slate-300">Commonly associated meanings include:</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {symbolTattoos.slice(0, 6).map((sym) => (
            <div
              key={sym.id}
              onClick={() => {
                navigate(`/most-famous-tattoos/${sym.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#07090E] border border-slate-800/90 rounded-2xl p-5 space-y-3 cursor-pointer hover:border-purple-600/50 transition-all"
            >
              <div className="h-36 rounded-xl bg-[#030407] border border-slate-800/80 p-2 flex items-center justify-center overflow-hidden">
                <img src={sym.image} alt={sym.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-bold text-base text-white">{sym.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {sym.shortDescription}
              </p>
              <div className="text-[11px] font-medium text-purple-300 bg-purple-950/40 p-2.5 rounded-xl border border-purple-800/40">
                <strong className="text-purple-200">Associated Meaning: </strong>
                {sym.commonInterpretation || sym.documentedMeaning}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Famous Tattoos by Body Placement */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Famous Tattoos by Placement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Explore famous tattoo arrangements by anatomical placement.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Arm & Sleeve', count: '12+ Designs', placement: 'Arm', image: '/images/famous/japanese-koi-irezumi.svg' },
            { name: 'Forearm', count: '10+ Designs', placement: 'Forearm', image: '/images/famous/chicano-family-first.svg' },
            { name: 'Wrist & Hand', count: '8+ Designs', placement: 'Wrist', image: '/images/famous/fine-line-roman-numerals.svg' },
            { name: 'Chest & Ribs', count: '9+ Designs', placement: 'Chest', image: '/images/famous/dwayne-johnson-polynesian.svg' },
            { name: 'Back Piece', count: '7+ Designs', placement: 'Back', image: '/images/famous/david-beckham-guardian-angel.svg' },
            { name: 'Shoulder', count: '6+ Designs', placement: 'Shoulder', image: '/images/famous/angelina-khmer-yantra.svg' },
            { name: 'Leg & Thigh', count: '5+ Designs', placement: 'Leg', image: '/images/famous/medusa-serpent-portrait.svg' },
            { name: 'Neck & Collar', count: '4+ Designs', placement: 'Neck', image: '/images/famous/roaring-lion-crown.svg' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedPlacement(item.placement)}
              className="glass-card p-3 rounded-2xl border border-slate-800 hover:border-purple-600/60 text-left transition-all group"
            >
              <div className="h-20 rounded-xl bg-[#030407] border border-slate-800/80 p-1 flex items-center justify-center overflow-hidden mb-2">
                <img src={item.image} alt={item.name} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-purple-300">
                {item.name}
              </h4>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 9. Factual FAQ Section */}
      <section className="glass-card p-8 lg:p-12 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-7 h-7 text-purple-400" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'What makes a tattoo design "famous"?',
              a: 'A tattoo is characterized as famous or notable based on documented public recognition, historical significance in traditional tattoo heritage, cultural impact, or association with prominent historical or public figures.'
            },
            {
              q: 'What is the most popular tattoo design?',
              a: 'Tattoo popularity varies by era and culture. Documented staples in tattoo history include traditional nautical swallows, fine-line Roman numerals, script name tattoos, and sacred geometry motifs.'
            },
            {
              q: 'Can I create my own personalized tattoo lettering from a famous style?',
              a: 'Yes. You can use our free online Tattoo Font Generator to preview your custom text across Gothic, Script, Old English, and Minimalist lettering fonts.'
            },
            {
              q: 'Can I copy a famous tattoo directly?',
              a: 'Tattoo ethics recommend using famous designs as visual inspiration. You should work with a professional tattoo artist to customize placement and lettering to make the final design uniquely yours.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#07090E] border border-slate-800/90 p-5 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-sm sm:text-base text-white">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <FamousTattooLightboxModal
        tattoo={activeLightboxTattoo}
        onClose={() => setActiveLightboxTattoo(null)}
      />

      {/* AI Style Finder Modal */}
      <AiStyleFinderModal
        tattoo={activeAiFinderTattoo}
        onClose={() => setActiveAiFinderTattoo(null)}
      />
    </div>
  );
};
