import React, { useState, useMemo, useEffect } from 'react';
import {
  BOTTOM_BODY_TATTOOS,
  type BottomBodyTattoo,
  type TattooFilterState,
} from '../data/bottomBodyTattoos';
import { BottomBodyTattooModal } from '../components/BottomBodyTattooModal';
import { BottomBodyFilterDrawer } from '../components/BottomBodyFilterDrawer';
import {
  Search,
  Sparkles,
  Heart,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  ArrowUpRight,
  Compass,
  Layers,
  Award,
  Languages,
  Type
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface BottomBodyTattooPageProps {
  onSelectCategory?: (category: string) => void;
}

export const BottomBodyTattooPage: React.FC<BottomBodyTattooPageProps> = ({
  onSelectCategory,
}) => {
  const navigate = useNavigate();

  // State
  const [filterState, setFilterState] = useState<TattooFilterState>({
    placement: 'all',
    style: 'all',
    size: 'all',
    designType: 'all',
    searchQuery: '',
    sortBy: 'featured',
  });

  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedTattoo, setSelectedTattoo] = useState<BottomBodyTattoo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // LocalStorage Saved Favorites
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bottom_body_saved_tattoos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bottom_body_saved_tattoos', JSON.stringify(savedIds));
    } catch {
      // safe fallback
    }
  }, [savedIds]);

  const toggleSave = (tattoo: BottomBodyTattoo) => {
    setSavedIds((prev) =>
      prev.includes(tattoo.id) ? prev.filter((id) => id !== tattoo.id) : [...prev, tattoo.id]
    );
  };

  // Category quick links
  const quickCategories = [
    { label: 'All Designs', placement: 'all', style: 'all' },
    { label: 'Lower Back', placement: 'Lower Back', style: 'all' },
    { label: 'Hip', placement: 'Hip', style: 'all' },
    { label: 'Side Waist', placement: 'Side Waist', style: 'all' },
    { label: 'Upper Thigh', placement: 'Upper Thigh', style: 'all' },
    { label: 'Outer Thigh', placement: 'Outer Thigh', style: 'all' },
    { label: 'Lower Abdomen', placement: 'Lower Abdomen', style: 'all' },
    { label: 'Small Tattoos', placement: 'all', style: 'all', size: 'Small' },
    { label: 'Lettering & Script', placement: 'all', style: 'Script' },
    { label: 'Floral & Rose', placement: 'all', style: 'Floral' },
    { label: 'Minimalist', placement: 'all', style: 'Minimalist' },
  ];

  // Filter & Sort Logic
  const filteredTattoos = useMemo(() => {
    let result = BOTTOM_BODY_TATTOOS.filter((tattoo) => {
      const matchesPlacement =
        filterState.placement === 'all' || tattoo.placement === filterState.placement;
      const matchesStyle =
        filterState.style === 'all' || tattoo.style === filterState.style;
      const matchesSize =
        filterState.size === 'all' || tattoo.size === filterState.size;
      const matchesDesignType =
        filterState.designType === 'all' || tattoo.designType === filterState.designType;

      const q = filterState.searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tattoo.name.toLowerCase().includes(q) ||
        tattoo.placement.toLowerCase().includes(q) ||
        tattoo.style.toLowerCase().includes(q) ||
        tattoo.designType.toLowerCase().includes(q) ||
        tattoo.description.toLowerCase().includes(q);

      return (
        matchesPlacement &&
        matchesStyle &&
        matchesSize &&
        matchesDesignType &&
        matchesSearch
      );
    });

    // Sorting
    if (filterState.sortBy === 'popular') {
      result.sort((a, b) => b.popularScore - a.popularScore);
    } else if (filterState.sortBy === 'newest') {
      result.sort((a, b) => (b.newest ? 1 : 0) - (a.newest ? 1 : 0));
    } else if (filterState.sortBy === 'smallest') {
      const sizeOrder = { Tiny: 1, Small: 2, Medium: 3, Large: 4 };
      result.sort((a, b) => sizeOrder[a.size] - sizeOrder[b.size]);
    } else if (filterState.sortBy === 'largest') {
      const sizeOrder = { Tiny: 1, Small: 2, Medium: 3, Large: 4 };
      result.sort((a, b) => sizeOrder[b.size] - sizeOrder[a.size]);
    } else {
      // 'featured'
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filterState]);

  const displayedTattoos = filteredTattoos.slice(0, visibleCount);

  const resetFilters = () => {
    setFilterState({
      placement: 'all',
      style: 'all',
      size: 'all',
      designType: 'all',
      searchQuery: '',
      sortBy: 'featured',
    });
    setVisibleCount(12);
  };

  const handleOpenModal = (tattoo: BottomBodyTattoo) => {
    setSelectedTattoo(tattoo);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <div className="relative text-center space-y-6 max-w-4xl mx-auto pt-4 pb-4">
        {/* Glow backdrop light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-950/30">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Feminine & Tasteful Aesthetic Gallery</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Tattoos for Girls' <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent">
            Bottom Body
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Explore beautiful tattoo ideas for the lower back, hips, waist, thighs, and other lower-body placements. Discover fine line, floral, ornamental, and minimalist design concepts.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#gallery-section"
            className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-purple-950/50 flex items-center gap-2 transition-all"
          >
            <span>Explore Tattoo Ideas</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              navigate('/?text=My+Tattoo');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <span>Create Your Tattoo</span>
            <ArrowUpRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        {/* Hero Tasteful Visual Collage Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
          {BOTTOM_BODY_TATTOOS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="bg-[#131722] p-2.5 rounded-2xl border border-slate-800/80 hover:border-purple-500/50 transition-all cursor-pointer group text-left"
            >
              <div className="bg-[#0B0E14] rounded-xl p-3 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src={item.svgVisual}
                  alt={item.name}
                  className="h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] font-bold text-purple-400 block uppercase">{item.placement}</span>
              <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
            </div>
          ))}
        </div>

      </div>

      {/* 2. QUICK PLACEMENT NAVIGATION BAR */}
      <div className="border-y border-slate-800/80 py-4 bg-[#0F131C]/60 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-2 sm:px-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 shrink-0 mr-2 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Category:</span>
          </span>
          {quickCategories.map((cat) => {
            const isActive =
              (cat.placement !== 'all' && filterState.placement === cat.placement) ||
              (cat.style !== 'all' && filterState.style === cat.style) ||
              (cat.size && filterState.size === cat.size) ||
              (cat.placement === 'all' && cat.style === 'all' && filterState.placement === 'all' && filterState.style === 'all');

            return (
              <button
                key={cat.label}
                onClick={() => {
                  setFilterState((prev) => ({
                    ...prev,
                    placement: cat.placement,
                    style: cat.style,
                    size: cat.size || 'all',
                  }));
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-950/50'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. GALLERY CONTROLS & SEARCH BAR */}
      <div id="gallery-section" className="space-y-6">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#131722] p-4 rounded-2xl border border-slate-800">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tattoo ideas (butterfly, flower, hip, lower back...)"
              value={filterState.searchQuery}
              onChange={(e) =>
                setFilterState((prev) => ({ ...prev, searchQuery: e.target.value }))
              }
              className="w-full pl-10 pr-4 py-2.5 bg-[#0B0E14] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          {/* Desktop Filter & Sort Controls */}
          <div className="flex items-center gap-2">
            
            {/* Sort Select */}
            <select
              value={filterState.sortBy}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  sortBy: e.target.value as TattooFilterState['sortBy'],
                }))
              }
              className="bg-[#0B0E14] border border-slate-800 text-xs font-bold text-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="popular">Sort: Most Popular</option>
              <option value="newest">Sort: Newest Designs</option>
              <option value="smallest">Sort: Smallest Size</option>
              <option value="largest">Sort: Largest Size</option>
            </select>

            {/* Mobile Filter Sheet Trigger */}
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-purple-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <SlidersHorizontal className="w-4 h-4 text-purple-400" />
              <span>Filters</span>
            </button>

          </div>

        </div>

        {/* Active Filters Bar */}
        {(filterState.placement !== 'all' ||
          filterState.style !== 'all' ||
          filterState.size !== 'all' ||
          filterState.designType !== 'all' ||
          filterState.searchQuery) && (
          <div className="flex items-center justify-between bg-purple-950/40 border border-purple-800/40 px-4 py-2.5 rounded-xl text-xs text-purple-200">
            <span>
              Showing results for:{' '}
              <strong>
                {[
                  filterState.placement !== 'all' && `Placement: ${filterState.placement}`,
                  filterState.style !== 'all' && `Style: ${filterState.style}`,
                  filterState.size !== 'all' && `Size: ${filterState.size}`,
                  filterState.designType !== 'all' && `Type: ${filterState.designType}`,
                  filterState.searchQuery && `Query: "${filterState.searchQuery}"`,
                ]
                  .filter(Boolean)
                  .join(' • ')}
              </strong>
            </span>
            <button
              onClick={resetFilters}
              className="font-bold underline hover:text-white ml-2 text-purple-300 shrink-0"
            >
              Clear All
            </button>
          </div>
        )}

        {/* 4. TATTOO MASONRY/GRID GALLERY */}
        {filteredTattoos.length === 0 ? (
          /* Empty State (PRD Section 35) */
          <div className="bg-[#131722] p-12 text-center rounded-3xl border border-slate-800 space-y-4 my-8">
            <Compass className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="font-extrabold text-lg text-slate-200">No tattoo designs found.</h3>
            <p className="text-sm text-slate-400">
              Try broadening your search term or clearing active filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-extrabold transition-all shadow-lg"
            >
              Browse All Tattoos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTattoos.map((item) => {
              const isSaved = savedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-[#131722] rounded-2xl border border-slate-800/80 hover:border-purple-500/50 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  {/* Card Visual Header */}
                  <div
                    onClick={() => handleOpenModal(item)}
                    className="relative bg-[#0B0E14] p-6 flex items-center justify-center min-h-[220px] cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.svgVisual}
                      alt={item.name}
                      className="max-h-[180px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(item);
                      }}
                      className={`absolute top-3 right-3 p-2.5 rounded-xl border transition-all ${
                        isSaved
                          ? 'bg-rose-500/20 text-rose-400 border-rose-500/50'
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                      title={isSaved ? 'Remove from Favorites' : 'Save Design Idea'}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-400 text-rose-400' : ''}`} />
                    </button>

                    {/* Placement Tag */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-900/90 text-purple-300 border border-slate-800">
                      {item.placement}
                    </span>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-base text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 pt-1 border-t border-slate-800/60">
                      <span className="text-purple-400">{item.style}</span>
                      <span>•</span>
                      <span className="text-emerald-400">{item.size}</span>
                      <span>•</span>
                      <span className="text-pink-400">{item.designType}</span>
                    </div>

                    <button
                      onClick={() => handleOpenModal(item)}
                      className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-purple-500/50 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-purple-400" />
                      <span>View Design</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredTattoos.length && (
          <div className="text-center pt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-200 hover:text-white text-xs sm:text-sm font-extrabold transition-all shadow-md"
            >
              Load More Designs ({filteredTattoos.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* 5. DEDICATED LOWER BODY PLACEMENT SHOWCASES */}
      <div className="space-y-16 pt-8 border-t border-slate-800/80">
        
        {/* Lower Back Section */}
        <div className="bg-[#131722] p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Placement Spotlight</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">Lower Back Tattoo Ideas</h2>
              <p className="text-xs text-slate-400 mt-1">Symmetrical mandalas, floral vines, lace wings, and lettering for lower back contours.</p>
            </div>
            <button
              onClick={() => {
                setFilterState((prev) => ({ ...prev, placement: 'Lower Back' }));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-purple-300 hover:text-white shrink-0 self-start sm:self-auto"
            >
              Filter Lower Back
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BOTTOM_BODY_TATTOOS.filter((t) => t.placement === 'Lower Back').slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="bg-[#0B0E14] p-4 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 cursor-pointer transition-all"
              >
                <img src={item.svgVisual} alt={item.name} className="h-32 w-auto mx-auto object-contain mb-3" />
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{item.style} • {item.size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hip & Waist Showcase */}
        <div className="bg-[#131722] p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Placement Spotlight</span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">Hip & Side Waist Tattoo Ideas</h2>
              <p className="text-xs text-slate-400 mt-1">Fine line crescents, vertical quotes, constellation stars, and botanical tendrils.</p>
            </div>
            <button
              onClick={() => {
                setFilterState((prev) => ({ ...prev, placement: 'Hip' }));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-purple-300 hover:text-white shrink-0 self-start sm:self-auto"
            >
              Filter Hip Tattoos
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BOTTOM_BODY_TATTOOS.filter((t) => t.placement === 'Hip' || t.placement === 'Side Waist').slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="bg-[#0B0E14] p-4 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 cursor-pointer transition-all"
              >
                <img src={item.svgVisual} alt={item.name} className="h-32 w-auto mx-auto object-contain mb-3" />
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{item.style} • {item.placement}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6. FEMININE TATTOO STYLES EXPLORER */}
      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Popular Feminine Tattoo Styles</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: 'Fine Line', desc: 'Thin, delicate, ultra-crisp linework', style: 'Fine Line', image: '/images/tattoos/fine-line-tattoo-style.svg' },
            { title: 'Minimalist', desc: 'Clean simple designs with quiet elegance', style: 'Minimalist', image: '/images/tattoos/minimalist-tattoo-style.svg' },
            { title: 'Floral', desc: 'Roses, peonies, cherry blossoms & vines', style: 'Floral', image: '/images/tattoos/botanical-tattoo-style.svg' },
            { title: 'Ornamental', desc: 'Mandala lace, symmetry & geometric accents', style: 'Ornamental', image: '/images/beautiful/sacred-geometry-compass.svg' },
            { title: 'Script Lettering', desc: 'Calligraphy, dates, quotes & initials', style: 'Script', image: '/images/tattoos/script-lettering-artwork.svg' },
            { title: 'Geometric', desc: 'Crisp shapes, linework & serpent coils', style: 'Geometric', image: '/images/tattoos/geometric-tattoo-style.svg' },
            { title: 'Blackwork', desc: 'Bold black shading & botanical stippling', style: 'Blackwork', image: '/images/tattoos/blackwork-tattoo-style.svg' },
            { title: 'Watercolor', desc: 'Soft pastel color splashes & petals', style: 'Watercolor', image: '/images/beautiful/watercolor-hummingbird.svg' },
          ].map((st) => (
            <div
              key={st.title}
              onClick={() => {
                setFilterState((prev) => ({ ...prev, style: st.style as TattooFilterState['style'] }));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="bg-[#131722] p-3.5 rounded-2xl border border-slate-800 hover:border-purple-500/50 cursor-pointer transition-all group"
            >
              <div className="h-24 rounded-xl bg-[#0B0E14] border border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-2.5">
                <img src={st.image} alt={st.title} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-sm text-purple-300 group-hover:text-purple-200">{st.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. YOU MAY ALSO LIKE (RELATED HUBS) */}
      <div className="space-y-6 pt-8 border-t border-slate-800/80">
        <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          <span>You May Also Like</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: 'Beautiful Tattoos', path: '/beautiful-tattoos', icon: Sparkles },
            { label: 'Couple Tattoos', path: '/couple-tattoos', icon: Heart },
            { label: 'Most Famous Tattoos', path: '/most-famous-tattoos', icon: Award },
            { label: 'Tattoo Styles', path: '/tattoo-styles', icon: Compass },
            { label: 'Tattoo Fonts', path: '/tattoo-fonts', icon: Type },
            { label: 'Multilingual AI', path: '/multilingual', icon: Languages },
          ].map((hub) => {
            const IconComp = hub.icon;
            return (
              <Link
                key={hub.label}
                to={hub.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#131722] p-3.5 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col items-center text-center group"
              >
                <div className="p-2 rounded-xl bg-slate-900 group-hover:bg-purple-900/40 text-purple-400 mb-2">
                  <IconComp className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-300 group-hover:text-white line-clamp-1">{hub.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 8. FINAL CALL TO ACTION SECTION */}
      <div className="relative rounded-3xl bg-gradient-to-r from-purple-950 via-[#131722] to-slate-900 p-8 sm:p-12 border border-purple-800/40 text-center space-y-6 overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Create Your Own Tattoo Design
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Found a style you like? Turn your idea into a custom tattoo design with our live Tattoo Font Generator.
          </p>
          <button
            onClick={() => {
              navigate('/?text=My+Custom+Tattoo');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm shadow-xl shadow-purple-950/60 inline-flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Create Custom Tattoo</span>
          </button>
        </div>
      </div>

      {/* Interactive Modals & Drawers */}
      <BottomBodyTattooModal
        tattoo={selectedTattoo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isSaved={selectedTattoo ? savedIds.includes(selectedTattoo.id) : false}
        onToggleSave={toggleSave}
        onSelectCategory={onSelectCategory}
      />

      <BottomBodyFilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filterState={filterState}
        setFilterState={setFilterState}
        onReset={resetFilters}
      />

    </div>
  );
};
