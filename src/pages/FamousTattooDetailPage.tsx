import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FAMOUS_TATTOOS } from '../data/famousTattoos';
import { TattooImageDisplay } from '../components/TattooImageDisplay';
import {
  ChevronRight,
  ShieldCheck,
  Type,
  MapPin,
  Tag,
  User,
  Info,
  Layers,
  BookOpen
} from 'lucide-react';

interface FamousTattooDetailPageProps {
  onSelectCategory?: (category: any) => void;
}

export const FamousTattooDetailPage: React.FC<FamousTattooDetailPageProps> = ({
  onSelectCategory,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const tattoo = FAMOUS_TATTOOS.find((t) => t.slug === slug);

  if (!tattoo) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Famous Tattoo Not Found</h2>
        <p className="text-slate-400 text-sm">The requested famous tattoo entry does not exist or has been moved.</p>
        <Link
          to="/most-famous-tattoos"
          className="inline-block py-3 px-6 rounded-xl bg-purple-600 text-white font-bold text-xs"
        >
          Return to Most Famous Tattoos Hub
        </Link>
      </div>
    );
  }

  // Similar Tattoo Ideas (4 items from same style or category)
  const similarTattoos = FAMOUS_TATTOOS.filter(
    (t) => t.id !== tattoo.id && (t.style === tattoo.style || t.category === tattoo.category)
  ).slice(0, 4);

  const handleOpenGenerator = () => {
    if (tattoo.generatorCategory && onSelectCategory) {
      onSelectCategory(tattoo.generatorCategory);
    }
    const catQuery = tattoo.generatorCategory ? `?category=${tattoo.generatorCategory}` : '';
    const textQuery = tattoo.presetText ? `&text=${encodeURIComponent(tattoo.presetText)}` : '';
    navigate(`/${catQuery}${textQuery}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 lg:space-y-16 max-w-5xl mx-auto">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 flex-wrap">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to="/most-famous-tattoos" className="hover:text-white transition-colors">
          Most Famous Tattoos
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-purple-400 font-bold truncate max-w-[200px] sm:max-w-xs">
          {tattoo.title}
        </span>
      </nav>

      {/* 2. Hero Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-purple-400" />
            {tattoo.style}
          </span>

          {tattoo.person && (
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-950/80 border border-amber-800/60 text-amber-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              {tattoo.person}
            </span>
          )}

          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {tattoo.placement}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {tattoo.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {tattoo.shortDescription}
        </p>
      </div>

      {/* 3. Main Grid: Hero Image & Quick Facts Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Hero Box */}
        <div className="lg:col-span-7 glass-card rounded-3xl overflow-hidden border border-slate-800 bg-[#07090E] p-4 shadow-2xl">
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black">
            <TattooImageDisplay
              src={tattoo.image}
              alt={tattoo.altText}
              styleName={tattoo.style}
              tryPresetText={tattoo.presetText || tattoo.title}
            />
          </div>
        </div>

        {/* Quick Facts Compact Information Table */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
          <h3 className="font-extrabold text-base text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Info className="w-4 h-4 text-purple-400" />
            Quick Facts & Attributes
          </h3>

          <div className="divide-y divide-slate-800/80 text-xs">
            <div className="py-2.5 flex justify-between gap-4">
              <span className="font-bold text-slate-400">Tattoo Style:</span>
              <span className="font-semibold text-purple-300 text-right">{tattoo.style}</span>
            </div>

            <div className="py-2.5 flex justify-between gap-4">
              <span className="font-bold text-slate-400">Design Type:</span>
              <span className="font-semibold text-slate-200 text-right">{tattoo.type}</span>
            </div>

            <div className="py-2.5 flex justify-between gap-4">
              <span className="font-bold text-slate-400">Placement:</span>
              <span className="font-semibold text-slate-200 text-right">{tattoo.placement}</span>
            </div>

            {tattoo.person && (
              <div className="py-2.5 flex justify-between gap-4">
                <span className="font-bold text-slate-400">Associated With:</span>
                <span className="font-semibold text-amber-300 text-right">{tattoo.person}</span>
              </div>
            )}

            {tattoo.era && (
              <div className="py-2.5 flex justify-between gap-4">
                <span className="font-bold text-slate-400">Documented Era:</span>
                <span className="font-semibold text-slate-300 text-right">{tattoo.era}</span>
              </div>
            )}

            <div className="py-2.5 flex justify-between gap-4">
              <span className="font-bold text-slate-400">Main Elements:</span>
              <span className="font-semibold text-slate-300 text-right">
                {tattoo.mainElements.join(', ')}
              </span>
            </div>
          </div>

          <button
            onClick={handleOpenGenerator}
            className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 font-extrabold text-xs text-white shadow-lg transition-all flex items-center justify-center gap-2 pt-3"
          >
            <Type className="w-4 h-4" />
            Try Similar Lettering in Generator
          </button>
        </div>
      </div>

      {/* 4. What Makes This Tattoo Notable? */}
      <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            What Makes This Tattoo Notable?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {tattoo.notableReason}
        </p>
      </section>

      {/* 5. Meaning & Context (Separating Documented Meaning vs Common Interpretation) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tattoo.documentedMeaning && (
          <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Documented Meaning & Personal Context
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {tattoo.documentedMeaning}
            </p>
          </div>
        )}

        <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
            <Layers className="w-4 h-4 text-blue-400" />
            Common Interpretation & Cultural Symbolism
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {tattoo.commonInterpretation ||
              'Commonly associated meanings in tattoo culture emphasize personal milestone reflection, artistic resilience, and individual empowerment.'}
          </p>
        </div>
      </section>

      {/* 6. Generator CTA Banner */}
      <section className="bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-purple-700/50 p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Inspired by this design? Create your own tattoo lettering.
          </h3>
          <p className="text-xs sm:text-sm text-purple-200">
            Preview custom names, dates, or quotes across 100+ Script, Gothic, and Minimalist fonts.
          </p>
        </div>

        <button
          onClick={handleOpenGenerator}
          className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 font-extrabold text-xs text-purple-950 shadow-xl transition-all shrink-0 flex items-center gap-2"
        >
          <Type className="w-4 h-4 text-purple-700" />
          Open Tattoo Font Generator
        </button>
      </section>

      {/* 7. Similar Tattoo Ideas */}
      {similarTattoos.length > 0 && (
        <section className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Similar Tattoo Ideas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarTattoos.map((item) => (
              <Link
                key={item.id}
                to={`/most-famous-tattoos/${item.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-purple-600/60 transition-all space-y-3 block group"
              >
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
                  <TattooImageDisplay
                    src={item.image}
                    alt={item.altText}
                    styleName={item.style}
                    tryPresetText={item.title}
                  />
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-purple-300 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
