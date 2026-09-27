import React, { useState, useMemo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Search,
  Type,
  Eye,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Compass,
  Globe,
  SlidersHorizontal,
  Grid,
  Info
} from 'lucide-react';
import {
  BEAUTIFUL_TATTOOS,
  BEAUTIFUL_STYLES_CARDS,
  BEAUTIFUL_PLACEMENTS_CARDS,
  type BeautifulTattoo
} from '../data/beautifulTattoos';
import { BeautifulTattooLightboxModal } from '../components/BeautifulTattooLightboxModal';

interface BeautifulTattoosPageProps {
  onSelectCategory?: (category: string) => void;
}

export const BeautifulTattoosPage: React.FC<BeautifulTattoosPageProps> = ({ onSelectCategory }) => {
  const navigate = useNavigate();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [selectedPlacement, setSelectedPlacement] = useState<string>('All Placements');
  const [selectedCategory, setSelectedCategoryFilter] = useState<string>('All Categories');
  const [selectedSize, setSelectedSize] = useState<string>('All Sizes');
  const [selectedColor, setSelectedColor] = useState<string>('All Colors');

  // Lightbox Modal State
  const [selectedTattooForModal, setSelectedTattooForModal] = useState<BeautifulTattoo | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic Page Title & Meta Tags
  useEffect(() => {
    document.title = 'Beautiful Tattoos: Ideas, Designs & Tattoo Inspiration';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore beautiful tattoo ideas, designs, styles, lettering, symbols, and placement inspiration. Discover your favorite tattoo style and create personalized tattoo lettering.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered Tattoo Items
  const filteredTattoos = useMemo(() => {
    return BEAUTIFUL_TATTOOS.filter((tattoo) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tattoo.title.toLowerCase().includes(q) ||
        tattoo.shortDescription.toLowerCase().includes(q) ||
        tattoo.style.toLowerCase().includes(q) ||
        tattoo.placement.toLowerCase().includes(q) ||
        tattoo.category.toLowerCase().includes(q) ||
        tattoo.relatedTags.some((tag) => tag.toLowerCase().includes(q));

      const matchesStyle = selectedStyle === 'All Styles' || tattoo.style === selectedStyle;
      const matchesPlacement = selectedPlacement === 'All Placements' || tattoo.placement === selectedPlacement;
      const matchesCategory = selectedCategory === 'All Categories' || tattoo.category === selectedCategory;
      const matchesSize = selectedSize === 'All Sizes' || tattoo.size === selectedSize;
      const matchesColor = selectedColor === 'All Colors' || tattoo.colorType === selectedColor;

      return matchesSearch && matchesStyle && matchesPlacement && matchesCategory && matchesSize && matchesColor;
    });
  }, [searchQuery, selectedStyle, selectedPlacement, selectedCategory, selectedSize, selectedColor]);

  // Handle Generator Navigation
  const handleTryGenerator = (generatorCategory?: string, presetText?: string) => {
    if (generatorCategory) {
      if (onSelectCategory) {
        onSelectCategory(generatorCategory);
      }
      navigate(`/?category=${generatorCategory}&text=${encodeURIComponent(presetText || 'BLOOM')}`);
    } else {
      navigate('/?category=all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Data (JSON-LD)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tattoofontlab.com/' },
      { '@type': 'ListItem', position: 2, name: 'Beautiful Tattoos', item: 'https://tattoofontlab.com/beautiful-tattoos' }
    ]
  };

  const faqData = [
    {
      q: 'What are beautiful tattoos?',
      a: 'Beautiful tattoos combine aesthetic harmony, clean line work, meaningful design elements, and complementary body placement. Beauty in tattoos is subjective, ranging from delicate fine line flowers to bold blackwork panthers and artistic calligraphy.'
    },
    {
      q: 'What are some beautiful tattoo ideas?',
      a: 'Popular beautiful tattoo concepts include wildflower botanical bouquets, fine line monarch butterflies, sacred geometry compasses, Arabic and Chicano lettering, watercolor hummingbirds, and minimalist mountain pine landscapes.'
    },
    {
      q: 'What are the most beautiful tattoo styles?',
      a: 'Visual tattoo styles commonly celebrated for their beauty include Fine Line, Minimalist, Botanical, Black & Grey Realism, Japanese Irezumi, Watercolor, Sacred Geometry, and Gothic Calligraphy.'
    },
    {
      q: 'What are beautiful small tattoo ideas?',
      a: 'Beautiful small tattoo ideas include micro wildflower stems, tiny butterfly silhouettes, initial lettering, Roman numeral dates, small crescent moons, minimalist stars, and single-word script tattoos.'
    },
    {
      q: 'How can I create a beautiful tattoo with my name?',
      a: 'You can use the Tattoo Font Generator to test your name across over 84 tattoo lettering styles including Script, Cursive, Gothic, Old English, Calligraphy, and Minimalist fonts before visiting a professional tattoo artist.'
    },
    {
      q: 'What lettering styles look good for tattoos?',
      a: 'Popular tattoo lettering styles include sweeping Chicano script, classic Old English blackletter, elegant cursive, minimalist fine line fonts, and calligraphic brush lettering.'
    },
    {
      q: 'Can I create tattoo lettering in another language?',
      a: 'Yes, our multilingual generator supports English, Arabic (RTL), Urdu, Persian, Hindi, Japanese, Chinese, Korean, Spanish, French, Italian, and more with correct character direction and glyph shaping.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
        <NavLink to="/" className="hover:text-purple-400 transition-colors">Home</NavLink>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-200 font-bold">Beautiful Tattoos</span>
      </nav>

      {/* 2. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: H1 + Intro */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Tattoo Visual Inspiration Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Beautiful Tattoos
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Discover beautiful tattoo ideas, styles, symbols, lettering, and designs for your next tattoo. Explore visual inspiration and find a style that matches your personality.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#gallery"
              className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm shadow-xl shadow-purple-950/50 transition-all flex items-center gap-2"
            >
              <Grid className="w-4 h-4" />
              Explore Tattoo Ideas
            </a>

            <NavLink
              to="/"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Type className="w-4 h-4 text-purple-400" />
              Create Tattoo Lettering
            </NavLink>
          </div>

          {/* Trust Banner */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Explore ideas for inspiration before choosing your final tattoo design. Always consult a qualified tattoo professional.</span>
          </div>
        </div>

        {/* Right Column: Hero Inspiration Collage */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 relative">
          {BEAUTIFUL_TATTOOS.slice(0, 4).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedTattooForModal(item)}
              className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-[#07090E] group cursor-pointer shadow-lg hover:border-purple-600/50 transition-all ${
                idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-900/90 text-purple-300 border border-purple-500/40">
                  {item.style}
                </span>
                <span className="text-[10px] font-bold text-slate-300 truncate max-w-[120px]">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Main Gallery Section */}
      <section id="gallery" className="space-y-8 pt-6 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Beautiful Tattoo Ideas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse visual inspiration across categories, styles, placements, sizes, and color palettes.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search beautiful tattoo ideas..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
            <SlidersHorizontal className="w-4 h-4 text-purple-400" />
            <span>Filter Tattoo Ideas:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {/* Style Filter */}
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-purple-500 focus:outline-none"
            >
              <option value="All Styles">All Styles</option>
              <option value="Fine Line">Fine Line</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Blackwork">Blackwork</option>
              <option value="Gothic">Gothic</option>
              <option value="Realism">Realism</option>
              <option value="Watercolor">Watercolor</option>
              <option value="Geometric">Geometric</option>
              <option value="Lettering">Lettering</option>
            </select>

            {/* Placement Filter */}
            <select
              value={selectedPlacement}
              onChange={(e) => setSelectedPlacement(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-purple-500 focus:outline-none"
            >
              <option value="All Placements">All Placements</option>
              <option value="Forearm">Forearm</option>
              <option value="Wrist">Wrist</option>
              <option value="Arm">Arm</option>
              <option value="Back">Back</option>
              <option value="Sternum">Sternum</option>
              <option value="Shoulder">Shoulder</option>
              <option value="Rib">Rib</option>
              <option value="Leg">Leg</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-purple-500 focus:outline-none"
            >
              <option value="All Categories">All Categories</option>
              <option value="Floral">Floral</option>
              <option value="Animal">Animal</option>
              <option value="Lettering">Lettering</option>
              <option value="Geometric">Geometric</option>
              <option value="Symbol">Symbol</option>
              <option value="Nature">Nature</option>
            </select>

            {/* Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-purple-500 focus:outline-none"
            >
              <option value="All Sizes">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Sleeve">Sleeve</option>
            </select>

            {/* Color Filter */}
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-purple-500 focus:outline-none"
            >
              <option value="All Colors">All Colors</option>
              <option value="Black">Black</option>
              <option value="Black & Grey">Black &amp; Grey</option>
              <option value="Color">Color</option>
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTattoos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTattooForModal(item)}
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-purple-600/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-purple-950/20"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090E]">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-1 rounded-md bg-slate-900/90 border border-purple-500/40 text-purple-300">
                    {item.style}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-slate-300">
                    {item.placement}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                  <div className="text-[11px] text-purple-300/90 bg-purple-950/30 p-2 rounded-xl border border-purple-900/40 line-clamp-2">
                    <strong>Meaning: </strong> {item.commonInterpretation}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTattooForModal(item);
                    }}
                    className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    Inspect Idea
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTryGenerator(item.generatorCategory, item.presetText);
                    }}
                    className="py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-extrabold text-white transition-colors flex items-center justify-center gap-1"
                  >
                    <Type className="w-3.5 h-3.5" />
                    Try Lettering
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tattoo Style Explorer */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beautiful Tattoo Styles
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore major visual styles from delicate single-needle fine line art to bold medieval blackletter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEAUTIFUL_STYLES_CARDS.map((style) => (
            <div
              key={style.slug}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-purple-600/50 transition-all"
            >
              <div className="space-y-3">
                <div className="h-32 rounded-xl overflow-hidden bg-[#07090E] border border-slate-800">
                  <img src={style.image} alt={style.altText} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white">{style.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{style.shortDescription}</p>
              </div>

              <NavLink
                to={style.targetLink}
                className="py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-purple-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Explore {style.name}</span>
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Tattoo Ideas by Body Placement */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beautiful Tattoo Ideas by Body Placement
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Find tattoo concepts specifically suited for arms, forearms, wrists, back, and sternum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEAUTIFUL_PLACEMENTS_CARDS.map((place) => (
            <div
              key={place.slug}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-purple-600/40 transition-all"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-950 border border-slate-800">
                <img src={place.image} alt={place.altText} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{place.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{place.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Beautiful Small Tattoos Section */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 border border-purple-800/40 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beautiful Small Tattoos
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Explore compact designs perfect for subtle placement on wrists, fingers, ankles, and behind the ear.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Small Flowers', image: '/images/beautiful/wildflower-bouquet-fineline.svg' },
            { label: 'Micro Butterflies', image: '/images/beautiful/monarch-butterfly-minimalist.svg' },
            { label: 'Initial Lettering', image: '/images/beautiful/chicano-script-family.svg' },
            { label: 'Tiny Stars & Moons', image: '/images/beautiful/moon-lotus-unalome.svg' },
            { label: 'Small Roman Dates', image: '/images/couples/roman-numeral-date.svg' },
            { label: 'Minimal Lines', image: '/images/beautiful/fineline-rose-compass.svg' },
            { label: 'Small Hearts', image: '/images/couples/interlocking-initials-heart.svg' },
            { label: 'Single Word Script', image: '/images/beautiful/arabic-calligraphy-salam.svg' }
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center group">
              <div className="h-20 rounded-lg bg-[#030407] border border-slate-800/80 p-1 flex items-center justify-center overflow-hidden mb-2">
                <img src={item.image} alt={item.label} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-xs font-bold text-purple-200 group-hover:text-white block truncate">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs transition-all shadow-lg"
          >
            <Type className="w-4 h-4" />
            Create a Small Tattoo Idea
          </NavLink>
        </div>
      </section>

      {/* 7. Women & Men Inspiration Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800/80">
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xl font-extrabold text-white">Beautiful Tattoos for Women</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Explore tattoo ideas that are commonly searched for by women, including delicate wildflower bouquets, fine line script, botanical leaves, moon lotus unalome, and ornamental chest pieces.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-purple-300">
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40">Wildflowers</span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40">Fine Line</span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40">Butterflies</span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40">Minimalist Script</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xl font-extrabold text-white">Beautiful Tattoos for Men</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Explore tattoo ideas commonly searched for by men, including high-contrast blackwork panthers, Japanese Irezumi dragon sleeves, geometric compass mandalas, and Old English gothic shoulder lettering.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-blue-300">
            <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40">Blackwork</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40">Japanese Irezumi</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40">Old English</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40">Geometric Compass</span>
          </div>
        </div>
      </div>

      {/* 8. Beautiful Tattoo Lettering Section */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-purple-800/50 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beautiful Tattoo Lettering
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Beautiful tattoos are not limited to pictures and symbols. Lettering turns meaningful names, dates, quotes, and family mottos into high art.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Script', 'Cursive', 'Gothic', 'Blackletter', 'Old English', 'Calligraphy', 'Handwritten', 'Minimal', 'Roman', 'Chicano'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleTryGenerator(cat.toLowerCase().replace(' ', '-'))}
              className="px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-purple-900/40 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white transition-colors"
            >
              {cat} Lettering
            </button>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm shadow-xl transition-all"
          >
            <Type className="w-4 h-4" />
            Create Your Tattoo Lettering
          </NavLink>
        </div>
      </section>

      {/* 9. Multilingual Beautiful Tattoos Section */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
            <Globe className="w-4 h-4 text-purple-400" />
            <span>Global Typography</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Beautiful Tattoos in Different Languages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Our multilingual generator supports authentic right-to-left glyph rendering for Arabic, Urdu, Persian, and Hebrew as well as Devanagari Hindi, Japanese, and Latin scripts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { lang: 'Arabic (سلام)', script: 'Arabic Thuluth' },
            { lang: 'Urdu (محبت)', script: 'Nastaliq Calligraphy' },
            { lang: 'Hindi (शान्ति)', script: 'Devanagari Sanskrit' },
            { lang: 'Japanese (愛)', script: 'Kanji Script' },
            { lang: 'Spanish (Amor)', script: 'Chicano Script' },
            { lang: 'French (L’amour)', script: 'Parisienne Cursive' },
            { lang: 'English (Family)', script: 'Gothic Blackletter' },
            { lang: 'Italian (Vita)', script: 'Fine Line Roman' }
          ].map((item) => (
            <div key={item.lang} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-sm font-bold text-white">{item.lang}</div>
              <div className="text-[11px] text-purple-400">{item.script}</div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to="/multilingual"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-colors"
          >
            <Globe className="w-4 h-4 text-purple-400" />
            Create Multilingual Tattoo Lettering
          </NavLink>
        </div>
      </section>

      {/* 10. How to Choose a Beautiful Tattoo */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          How to Choose a Beautiful Tattoo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '1. Choose a concept that carries deep personal meaning or emotional connection.',
            '2. Select an appropriate visual style (Fine Line, Blackwork, Gothic, Watercolor).',
            '3. Consider body placement, movement, and natural skin contours.',
            '4. Balance size and level of detail so the tattoo ages gracefully.',
            '5. Check how lettering and typography look at your intended stencil size.',
            '6. Review the artwork from multiple angles before stencil application.',
            '7. Double-check all spelling, dates, and foreign-language translations.',
            '8. Discuss final adjustments with a certified, licensed tattoo professional.'
          ].map((step) => (
            <div key={step} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
          <HelpCircle className="w-4 h-4 text-purple-400" />
          <span>Frequently Asked Questions</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Frequently Asked Questions About Beautiful Tattoos
        </h2>

        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-sm font-bold text-white">{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${
                    openFaqIndex === idx ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 border border-purple-800/60 text-center space-y-6 shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Create Your Own Tattoo Design
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Found a tattoo style you love? Start experimenting with your own lettering, names, quotes, dates, and styles before taking your idea to a tattoo professional.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <NavLink
            to="/"
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm shadow-xl shadow-purple-950/50 transition-all flex items-center gap-2"
          >
            <Type className="w-4 h-4" />
            Open Tattoo Font Generator
          </NavLink>

          <NavLink
            to="/tattoo-styles"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-purple-400" />
            Explore Tattoo Styles
          </NavLink>
        </div>
      </section>

      {/* Lightbox Modal */}
      <BeautifulTattooLightboxModal
        tattoo={selectedTattooForModal}
        onClose={() => setSelectedTattooForModal(null)}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
};
