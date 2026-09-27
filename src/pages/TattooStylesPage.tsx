import React from 'react';
import { TattooStyleGallery } from '../components/TattooStyleGallery';
import { TattooNameQuoteGallery } from '../components/TattooNameQuoteGallery';
import { Sparkles } from 'lucide-react';

interface TattooStylesPageProps {
  setInputText: (text: string) => void;
  setSelectedCategory: (cat: any) => void;
}

export const TattooStylesPage: React.FC<TattooStylesPageProps> = ({
  setInputText,
  setSelectedCategory,
}) => {
  return (
    <div className="space-y-16">
      {/* Page Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Complete Visual Tattoo Inspiration Directory
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Tattoo Styles & Visual Inspiration Gallery
        </h1>
        <p className="text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore realistic tattoo artwork across Blackwork, Fine Line, Traditional, Gothic, Japanese, Geometric, and Multilingual Calligraphy before selecting your custom lettering.
        </p>
      </div>

      {/* Main Tattoo Style Gallery Component */}
      <TattooStyleGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Name, Quote & Date Gallery Component */}
      <TattooNameQuoteGallery
        setInputText={setInputText}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};
