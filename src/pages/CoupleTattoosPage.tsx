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
  Heart,
  HeartHandshake,
  Layers
} from 'lucide-react';
import {
  COUPLE_TATTOOS,
  COUPLE_RELATIONSHIP_TYPES,
  type CoupleTattoo
} from '../data/coupleTattoos';
import { CoupleTattooLightboxModal } from '../components/CoupleTattooLightboxModal';

interface CoupleTattoosPageProps {
  onSelectCategory?: (category: string) => void;
}

export const CoupleTattoosPage: React.FC<CoupleTattoosPageProps> = ({ onSelectCategory }) => {
  const navigate = useNavigate();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRelationship, setSelectedRelationship] = useState<string>('All Relationships');
  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [selectedCategory, setSelectedCategoryFilter] = useState<string>('All Types');
  const [selectedPlacement, setSelectedPlacement] = useState<string>('All Placements');
  const [selectedSize, setSelectedSize] = useState<string>('All Sizes');

  // Lightbox Modal State
  const [selectedTattooForModal, setSelectedTattooForModal] = useState<CoupleTattoo | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Page Title & Meta Description
  useEffect(() => {
    document.title = 'Couple Tattoos: Matching & Meaningful Tattoo Ideas';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore couple tattoo ideas, matching tattoos, meaningful designs, names, initials, dates, quotes, symbols, and personalized lettering for partners.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered Tattoo Items
  const filteredTattoos = useMemo(() => {
    return COUPLE_TATTOOS.filter((tattoo) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tattoo.title.toLowerCase().includes(q) ||
        tattoo.shortDescription.toLowerCase().includes(q) ||
        tattoo.style.toLowerCase().includes(q) ||
        tattoo.placement.toLowerCase().includes(q) ||
        tattoo.category.toLowerCase().includes(q) ||
        tattoo.relationshipType.toLowerCase().includes(q) ||
        tattoo.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesRelationship = selectedRelationship === 'All Relationships' || tattoo.relationshipType === selectedRelationship;
      const matchesStyle = selectedStyle === 'All Styles' || tattoo.style === selectedStyle;
      const matchesCategory = selectedCategory === 'All Types' || tattoo.category === selectedCategory;
      const matchesPlacement = selectedPlacement === 'All Placements' || tattoo.placement === selectedPlacement;
      const matchesSize = selectedSize === 'All Sizes' || tattoo.size === selectedSize;

      return matchesSearch && matchesRelationship && matchesStyle && matchesCategory && matchesPlacement && matchesSize;
    });
  }, [searchQuery, selectedRelationship, selectedStyle, selectedCategory, selectedPlacement, selectedSize]);

  // Navigation Handler
  const handleTryGenerator = (generatorCategory?: string, presetText?: string) => {
    if (generatorCategory) {
      if (onSelectCategory) {
        onSelectCategory(generatorCategory);
      }
      navigate(`/?category=${generatorCategory}&text=${encodeURIComponent(presetText || 'ALWAYS')}`);
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
      { '@type': 'ListItem', position: 2, name: 'Couple Tattoos', item: 'https://tattoofontlab.com/couple-tattoos' }
    ]
  };

  const faqData = [
    {
      q: 'What are couple tattoos?',
      a: 'Couple tattoos are matching, complementary, or connected tattoo designs created around a shared relationship, memory, symbol, anniversary date, or meaningful phrase.'
    },
    {
      q: 'What are some good couple tattoo ideas?',
      a: 'Popular couple tattoo concepts include interlocking partner initials, matching Roman numeral dates, complementary sun and moon designs, lock and key artwork, pinky promise linework, and split quote lettering.'
    },
    {
      q: 'Do couple tattoos have to match exactly?',
      a: 'No. Couple tattoos do not have to be identical. Many couples choose complementary concepts (such as sun & moon or lock & key) or shared themes customized to each individual.'
    },
    {
      q: 'What are cute couple tattoo ideas?',
      a: 'Cute couple tattoo ideas include small micro hearts, interlocking puzzle pieces, cartoon-inspired icons, tiny matching animals, and delicate single-line initials.'
    },
    {
      q: 'What are meaningful couple tattoos?',
      a: 'Meaningful couple tattoos commemorate shared milestones such as wedding anniversaries, first meeting GPS coordinates, family surname lettering, or quotes that hold special personal significance.'
    },
    {
      q: 'What are small couple tattoo ideas?',
      a: 'Small couple tattoos include tiny ring finger crowns, minimal wrist dates, micro initials, subtle coordinates, and minimalist line-art symbols.'
    },
    {
      q: 'What are good couple tattoo lettering styles?',
      a: 'Popular couple tattoo typography styles include sweeping Chicano script, classic Old English blackletter, elegant cursive, minimalist fine line fonts, and calligraphic brush lettering.'
    },
    {
      q: 'Can couples create tattoos with their names or initials?',
      a: 'Yes! You can use our free Tattoo Font Generator to test partner names, interlocking initials (e.g. A ♡ B), and anniversary dates across over 84 tattoo fonts.'
    },
    {
      q: 'Can couple tattoos be in another language?',
      a: 'Yes. Our generator supports multilingual tattoo lettering in English, Arabic (RTL), Urdu, Persian, Hindi, Spanish, French, Italian, Japanese, and more.'
    },
    {
      q: 'Where should couples get matching tattoos?',
      a: 'Popular couple tattoo placements include inner wrists, forearms, ring fingers, shoulders, ankles, and upper arm areas.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
        <NavLink to="/" className="hover:text-rose-400 transition-colors">Home</NavLink>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-200 font-bold">Couple Tattoos</span>
      </nav>

      {/* 2. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-bold shadow-inner">
            <HeartHandshake className="w-4 h-4 text-rose-400" />
            <span>Relationship &amp; Partner Tattoo Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Couple Tattoos
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Discover matching and meaningful couple tattoo ideas, from minimalist symbols and initials to names, dates, quotes, and personalized lettering.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#gallery"
              className="px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-xl shadow-rose-950/50 transition-all flex items-center gap-2"
            >
              <Grid className="w-4 h-4" />
              Explore Couple Tattoo Ideas
            </a>

            <NavLink
              to="/"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Type className="w-4 h-4 text-rose-400" />
              Create Couple Tattoo Lettering
            </NavLink>
          </div>
        </div>

        {/* Right Column: Hero Collage */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 relative">
          {COUPLE_TATTOOS.slice(0, 4).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedTattooForModal(item)}
              className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-[#07090E] group cursor-pointer shadow-lg hover:border-rose-600/50 transition-all ${
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
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-rose-950/90 text-rose-300 border border-rose-500/40">
                  {item.relationshipType}
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
              Couple Tattoo Ideas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore matching, complementary, and connected designs created for two people.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search couple tattoo ideas..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
            <SlidersHorizontal className="w-4 h-4 text-rose-400" />
            <span>Filter Couple Tattoo Ideas:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {/* Relationship Filter */}
            <select
              value={selectedRelationship}
              onChange={(e) => setSelectedRelationship(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-rose-500 focus:outline-none"
            >
              <option value="All Relationships">All Relationships</option>
              <option value="Couples">Couples</option>
              <option value="Married">Married</option>
              <option value="Engaged">Engaged</option>
              <option value="Partners">Partners</option>
              <option value="Long Distance">Long Distance</option>
              <option value="Best Friends">Best Friends</option>
            </select>

            {/* Type Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-rose-500 focus:outline-none"
            >
              <option value="All Types">All Types</option>
              <option value="Matching">Matching</option>
              <option value="Complementary">Complementary</option>
              <option value="Connected">Connected</option>
              <option value="Initial">Initials</option>
              <option value="Date">Dates</option>
              <option value="Quote">Quotes</option>
              <option value="Symbol">Symbols</option>
            </select>

            {/* Style Filter */}
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-rose-500 focus:outline-none"
            >
              <option value="All Styles">All Styles</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Fine Line">Fine Line</option>
              <option value="Script">Script</option>
              <option value="Geometric">Geometric</option>
              <option value="Traditional">Traditional</option>
            </select>

            {/* Placement Filter */}
            <select
              value={selectedPlacement}
              onChange={(e) => setSelectedPlacement(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-rose-500 focus:outline-none"
            >
              <option value="All Placements">All Placements</option>
              <option value="Wrist">Wrist</option>
              <option value="Forearm">Forearm</option>
              <option value="Finger">Finger</option>
              <option value="Arm">Arm</option>
              <option value="Ankle">Ankle</option>
              <option value="Shoulder">Shoulder</option>
            </select>

            {/* Size Filter */}
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 p-2 focus:border-rose-500 focus:outline-none"
            >
              <option value="All Sizes">All Sizes</option>
              <option value="Tiny">Tiny</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTattoos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTattooForModal(item)}
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-rose-600/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-rose-950/20"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090E]">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] font-extrabold px-2 py-1 rounded-md bg-rose-950/90 border border-rose-500/40 text-rose-300">
                    {item.relationshipType}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-slate-300">
                    {item.placement}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                  <div className="text-[11px] text-rose-300/90 bg-rose-950/30 p-2 rounded-xl border border-rose-900/40 line-clamp-2">
                    <strong>Meaning: </strong> {item.commonInterpretation}
                  </div>
                </div>

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
                    className="py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-extrabold text-white transition-colors flex items-center justify-center gap-1"
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

      {/* 4. Matching vs Complementary vs Connected Section */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Matching Couple Tattoos
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Matching tattoos do not have to be identical. Explore the 3 primary design approaches for partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-32 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/couples/matching-nautical-anchors.svg" alt="Identical Tattoos" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              Identical Tattoos
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The exact same design placed on both people. Popular examples include matching micro hearts, initial lettering, anniversary dates, and small anchors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-32 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/couples/sun-moon-minimalist.svg" alt="Complementary Tattoos" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              Complementary Tattoos
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Different designs that form a single shared concept when viewed together, such as Sun &amp; Moon, Lock &amp; Key, or King &amp; Queen crowns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-32 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/couples/connected-puzzle-pieces.svg" alt="Connected Tattoos" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-400" />
              Connected Tattoos
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Two tattoos that visually lock together when standing side-by-side, such as interlocking puzzle pieces, split quote lines, or pinky promise hands.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Couple Tattoos by Relationship */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Couple Tattoos by Relationship
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Inspiration tailored for husband &amp; wife, engaged couples, long-distance partners, and close companions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUPLE_RELATIONSHIP_TYPES.map((type) => (
            <div
              key={type.slug}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-rose-600/40 transition-all"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-950 border border-slate-800">
                <img src={type.image} alt={type.altText} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{type.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{type.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Couple Name, Initial & Date Lettering Section */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-rose-800/50 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Couple Name, Initial &amp; Date Lettering
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Turn your partner’s name, interlocking initials (e.g. A ♡ B), or anniversary date into personalized tattoo lettering across over 84 styles.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Partner Names', cat: 'script', image: '/images/couples/infinity-loop-names.svg' },
            { label: 'Interlocking Initials', cat: 'cursive', image: '/images/couples/interlocking-initials-heart.svg' },
            { label: 'Anniversary Dates', cat: 'minimalist', image: '/images/couples/roman-numeral-date.svg' },
            { label: 'Roman Numerals', cat: 'serif', image: '/images/famous/fine-line-roman-numerals.svg' },
            { label: 'Split Quotes', cat: 'calligraphy', image: '/images/couples/split-quote-lettering.svg' },
            { label: 'Family Surnames', cat: 'old-english', image: '/images/famous/gothic-surname-backpiece.svg' },
            { label: 'GPS Coordinates', cat: 'stencil', image: '/images/couples/coordinates-meeting-place.svg' },
            { label: 'Gothic Lettering', cat: 'gothic', image: '/images/beautiful/gothic-old-english-shoulder.svg' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleTryGenerator(item.cat)}
              className="p-3 rounded-xl bg-slate-950 hover:bg-rose-950/40 border border-slate-800 text-center transition-colors group"
            >
              <div className="h-20 rounded-lg bg-[#030407] border border-slate-800/80 p-1 flex items-center justify-center overflow-hidden mb-2">
                <img src={item.image} alt={item.label} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-xs font-bold text-rose-200 group-hover:text-white block truncate">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-xl transition-all"
          >
            <Type className="w-4 h-4" />
            Create Couple Tattoo Lettering
          </NavLink>
        </div>
      </section>

      {/* 7. Multilingual Couple Tattoos Section */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
            <Globe className="w-4 h-4 text-rose-400" />
            <span>Multilingual Partner Lettering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Couple Tattoos in Different Languages
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Create authentic multilingual partner tattoos in English, Arabic (RTL), Urdu, Persian, Hindi, Spanish, French, Italian, Japanese, and more. Always verify spelling with native speakers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { lang: 'Arabic (محبت)', script: 'Thuluth Script' },
            { lang: 'Urdu (ہمسفر)', script: 'Nastaliq Calligraphy' },
            { lang: 'Hindi (प्रेम)', script: 'Devanagari Sanskrit' },
            { lang: 'Spanish (Siempre)', script: 'Chicano Script' },
            { lang: 'French (Pour Toujours)', script: 'Cursive Script' },
            { lang: 'Japanese (永遠)', script: 'Kanji Script' },
            { lang: 'English (Forever)', script: 'Gothic Blackletter' },
            { lang: 'Italian (Amore)', script: 'Fine Line Roman' }
          ].map((item) => (
            <div key={item.lang} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-sm font-bold text-white">{item.lang}</div>
              <div className="text-[11px] text-rose-400">{item.script}</div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to="/multilingual"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-colors"
          >
            <Globe className="w-4 h-4 text-rose-400" />
            Create Multilingual Couple Lettering
          </NavLink>
        </div>
      </section>

      {/* 8. How to Choose a Couple Tattoo */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          How to Choose a Couple Tattoo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '1. Choose a shared idea, memory, location, phrase, or symbol that connects both partners.',
            '2. Decide whether you want identical matching designs or complementary halves.',
            '3. Choose an aesthetic visual style (Minimalist, Fine Line, Script, Traditional, Geometric).',
            '4. Decide on body placement and whether both partners want the same spot.',
            '5. Test typography and layout in the generator at your intended stencil size.',
            '6. Double-check all names, initials, dates, and foreign-language translations.',
            '7. Discuss the final concept with a qualified, licensed tattoo professional.'
          ].map((step) => (
            <div key={step} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="space-y-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
          <HelpCircle className="w-4 h-4 text-rose-400" />
          <span>Frequently Asked Questions</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Frequently Asked Questions About Couple Tattoos
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
                  className={`w-4 h-4 text-rose-400 transition-transform duration-300 ${
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

      {/* 10. Final CTA Section */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-rose-950/80 via-slate-900 to-slate-950 border border-rose-800/60 text-center space-y-6 shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Create Your Own Couple Tattoo
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Turn your names, initials, dates, quotes, or shared ideas into personalized tattoo lettering and explore different styles before finalizing your concept.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <NavLink
            to="/"
            className="px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-xl shadow-rose-950/50 transition-all flex items-center gap-2"
          >
            <Type className="w-4 h-4" />
            Create Couple Tattoo Lettering
          </NavLink>

          <NavLink
            to="/beautiful-tattoos"
            className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-rose-400" />
            Explore Beautiful Tattoos
          </NavLink>
        </div>
      </section>

      {/* Lightbox Modal */}
      <CoupleTattooLightboxModal
        tattoo={selectedTattooForModal}
        onClose={() => setSelectedTattooForModal(null)}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
};
