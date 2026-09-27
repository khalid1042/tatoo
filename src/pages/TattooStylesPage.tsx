import React, { useEffect, useState } from 'react';
import { TattooStyleGallery } from '../components/TattooStyleGallery';
import { TattooNameQuoteGallery } from '../components/TattooNameQuoteGallery';
import { Sparkles, Layers, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, Type, Compass, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface TattooStylesPageProps {
  setInputText: (text: string) => void;
  setSelectedCategory: (cat: any) => void;
}

const FAQ_ITEMS = [
  {
    question: 'Which tattoo style ages the best over time?',
    answer: 'American Traditional and Blackwork styles generally age best because their heavy black outlines and solid black fills hold structure against natural skin pigment migration over decades.',
  },
  {
    question: 'What is the difference between Fine Line and Traditional tattoos?',
    answer: 'Fine Line tattoos use ultra-thin single needle groupings (1RL) for delicate, subtle micro detail, whereas Traditional tattoos use heavy needle groupings (14RL) for thick black outlines and vibrant primary color fills.',
  },
  {
    question: 'Can you mix different tattoo styles on the same arm or body part?',
    answer: 'Yes! Combining complementary styles—such as wrapping fine-line script around a blackwork geometric mandala—is a popular modern tattoo design approach.',
  },
  {
    question: 'What tattoo style is easiest to cover up later?',
    answer: 'Blackwork, Gothic lettering, and American Traditional are the most effective cover-up styles due to their heavy black ink saturation and dense negative space utilization.',
  },
  {
    question: 'How do I choose the best lettering font category for my tattoo style?',
    answer: 'Match line weight and historical context: pair Fine Line tattoos with micro Cursive script, pair Gothic or Blackwork with Old English blackletter, and pair Traditional tattoos with bold banner Calligraphy.',
  },
];

export const TattooStylesPage: React.FC<TattooStylesPageProps> = ({
  setInputText,
  setSelectedCategory,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Tattoo Styles Guide: 20+ Visual Aesthetics, Characteristics & Design Inspiration';
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* JSON-LD Structured Data Schema for Tattoo Styles Guide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                '@id': 'https://tatoo-two-self.vercel.app/tattoo-styles#article',
                headline: 'Tattoo Styles Guide: 20+ Visual Aesthetics, Characteristics & Design Inspiration',
                description: 'A comprehensive visual guide to 20+ major tattoo styles—explaining key visual traits, historical origins, aging dynamics, and font category pairings.',
                image: 'https://tatoo-two-self.vercel.app/images/tattoos/fine-line-tattoo-style.svg',
                author: {
                  '@type': 'Organization',
                  name: 'TattooFontLab Editorial Team',
                  url: 'https://tatoo-two-self.vercel.app/about',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'TattooFontLab',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://tatoo-two-self.vercel.app/images/tattoos/fine-line-tattoo-style.svg',
                  },
                },
                datePublished: '2026-09-26',
                dateModified: '2026-09-26',
                mainEntityOfPage: 'https://tatoo-two-self.vercel.app/tattoo-styles',
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://tatoo-two-self.vercel.app/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Tattoo Styles',
                    item: 'https://tatoo-two-self.vercel.app/tattoo-styles',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQ_ITEMS.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* 1. Page Hero Header */}
      <div className="text-center max-w-4xl mx-auto space-y-6 pt-4 px-4">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/70 border border-purple-700/60 text-purple-200 text-xs sm:text-sm font-extrabold shadow-lg backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Complete Visual Tattoo Inspiration Directory</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Tattoo Styles Guide: <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-amber-300 bg-clip-text text-transparent">
            20+ Visual Aesthetics & Characteristics
          </span>
        </h1>

        {/* SmartMag Subtitle / Deck */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium">
          A comprehensive visual guide to 20+ major tattoo styles—explaining key visual traits, historical origins, aging dynamics, and font category pairings from American Traditional to ultra-fine line.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#explore-styles-section"
            className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-xl flex items-center gap-2 transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Visual Styles</span>
          </a>
          <button
            onClick={() => {
              navigate('/?text=Tattoo+Style');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <Type className="w-4 h-4 text-purple-400" />
            <span>Test Lettering Styles Live</span>
          </button>
        </div>
      </div>

      {/* 2. Visual Matrix Hero Section */}
      <section className="bg-[#131722] p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-extrabold text-purple-400 uppercase tracking-widest">Visual Overview</span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">Major Tattoo Art Movements</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">20+ Curated Styles</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Traditional', image: '/images/tattoos/traditional-tattoo-style.svg', trait: 'Bold lines & primary fills' },
            { name: 'Fine Line', image: '/images/tattoos/fine-line-tattoo-style.svg', trait: 'Single-needle micro detail' },
            { name: 'Blackwork', image: '/images/tattoos/blackwork-tattoo-style.svg', trait: 'Solid black graphic contrast' },
            { name: 'Gothic', image: '/images/tattoos/gothic-tattoo-style.svg', trait: 'Medieval blackletter script' },
            { name: 'Japanese', image: '/images/tattoos/japanese-tattoo-style.svg', trait: 'Dragons, waves & Irezumi' },
            { name: 'Geometric', image: '/images/tattoos/geometric-tattoo-style.svg', trait: 'Mandalas & symmetry' },
          ].map((item) => (
            <a
              key={item.name}
              href="#explore-styles-section"
              className="bg-[#0B0E14] p-3 rounded-2xl border border-slate-800/80 hover:border-purple-500/50 transition-all text-center group block"
            >
              <div className="h-24 rounded-xl bg-[#030407] border border-slate-800/80 p-2 flex items-center justify-center overflow-hidden mb-2">
                <img src={item.image} alt={item.name} className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-purple-300 truncate">{item.name}</h4>
              <p className="text-[10px] text-slate-400 mt-0.5 truncate">{item.trait}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Main Tattoo Style Gallery Component */}
      <TattooStyleGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 4. Technical Comparison: Linework, Shading & Aging */}
      <section className="space-y-8 pt-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Technical Breakdown</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Linework, Shading & Aging Characteristics
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Understanding how different tattoo needle configurations, ink saturation techniques, and anatomical placements interact with skin aging over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-28 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/tattoos/fine-line-tattoo-style.svg" alt="Fine Line Linework" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Fine Line Precision
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Utilizes single-needle groupings (1RL to 3RL) for subtle micro-details. Best suited for flat skin canvases (forearm, inner bicep, collarbone). Requires touch-ups every 5–7 years.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-28 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/tattoos/blackwork-tattoo-style.svg" alt="Blackwork & Saturation" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Blackwork & High Saturation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Employs heavy black ink packing and negative space geometry. Highly resistant to fading over decades, making it the ideal style for cover-ups and durable sleeve art.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="h-28 rounded-xl bg-[#030407] border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
              <img src="/images/tattoos/gothic-tattoo-style.svg" alt="Gothic Outlines" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Traditional Bold Outlines
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Constructed with heavy 14RL round liner needles and saturated primary pigment fills. Known as "Bold Will Hold" due to unyielding structural clarity on aging skin.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Name, Quote & Date Gallery Component */}
      <TattooNameQuoteGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 6. Frequently Asked Questions Section */}
      <section className="max-w-4xl mx-auto bg-[#131722] p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-800/90 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-400 border border-purple-800/60">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-extrabold text-2xl text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Expert guidance on selecting, sizing, and pairing tattoo styles</p>
          </div>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-[#0B0E14] shadow-md hover:border-purple-500/50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-200 hover:text-white transition-colors"
              >
                <span>{item.question}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 ml-2" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Internal Cross-Navigation Hub Links */}
      <section className="p-8 rounded-3xl bg-slate-900 border border-purple-800/40 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Explore More Tattoo Inspiration Hubs</h2>
          <p className="text-xs sm:text-sm text-slate-300">Browse curated tattoo design galleries by category, relationship, and placement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Tattoos for Girls' Bottom Body", path: '/tattoos-for-girls-bottom-body', desc: 'Hip, waist, thigh & lower back ideas' },
            { title: 'Most Famous Tattoos', path: '/most-famous-tattoos', desc: 'Celebrity & historical tattoo classics' },
            { title: 'Beautiful Tattoos for Women', path: '/beautiful-tattoos', desc: 'Wildflowers, butterflies & fine line' },
            { title: 'Matching Couple Tattoos', path: '/couple-tattoos', desc: 'Partner initials, dates & lock concepts' },
          ].map((hub) => (
            <Link
              key={hub.title}
              to={hub.path}
              className="p-4 rounded-2xl bg-[#0B0E14] border border-slate-800 hover:border-purple-500/50 transition-all block group"
            >
              <h4 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                <span>{hub.title}</span>
                <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-slate-400 mt-1">{hub.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
