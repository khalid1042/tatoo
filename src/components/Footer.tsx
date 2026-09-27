import React from 'react';
import { Type } from 'lucide-react';
import type { FontCategoryId } from '../data/fonts';
import { Link } from 'react-router-dom';

interface FooterProps {
  onSelectCategory: (cat: FontCategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <div className="w-full pt-16 sm:pt-24 lg:pt-32 bg-[#0B0E14]">
      <footer className="border-t border-slate-800/80 bg-[#07090E] text-left pt-16 sm:pt-20 pb-12 px-6 sm:px-12 lg:px-20 w-full relative z-10">
      <div className="w-full max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
              <Type className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">TattooFontLab</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
            Free online Tattoo Font Generator to preview exact text in Script, Gothic, Cursive, Old English & Stencil tattoo lettering.
          </p>
          <span className="text-xs text-purple-400 font-mono font-bold bg-purple-950/60 border border-purple-800/50 px-3 py-1 rounded-lg inline-block">
            100% Client-Side • Privacy Protected
          </span>
        </div>

        {/* Col 2: Tool Links */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-200">
            Pages & Tools
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Tattoo Font Generator
              </Link>
            </li>
            <li>
              <Link to="/tattoo-styles" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Tattoo Styles Gallery
              </Link>
            </li>
            <li>
              <Link to="/beautiful-tattoos" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Beautiful Tattoos Hub
              </Link>
            </li>
            <li>
              <Link to="/couple-tattoos" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Couple Tattoos Hub
              </Link>
            </li>
            <li>
              <Link to="/tattoos-for-girls-bottom-body" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Girls' Bottom Body Tattoos
              </Link>
            </li>
            <li>
              <Link to="/most-famous-tattoos" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Most Famous Tattoos
              </Link>
            </li>
            <li>
              <Link to="/tattoo-fonts" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Tattoo Fonts Catalog
              </Link>
            </li>
            <li>
              <Link to="/multilingual" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Multilingual Tattoo Generator
              </Link>
            </li>
            <li>
              <Link to="/tattoo-lettering" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Tattoo Lettering
              </Link>
            </li>
            <li>
              <Link to="/tattoo-ideas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Tattoo Ideas & Placement
              </Link>
            </li>
            <li>
              <Link to="/guides" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 transition-colors font-medium">
                Guides & Advice
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources Links */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-200">
            Popular Categories
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            {([
              { id: 'script', label: 'Script Tattoo Fonts' },
              { id: 'gothic', label: 'Gothic & Blackletter' },
              { id: 'old-english', label: 'Old English Fonts' },
              { id: 'cursive', label: 'Cursive Tattoo Fonts' },
              { id: 'calligraphy', label: 'Calligraphy Lettering' },
              { id: 'minimalist', label: 'Minimalist Tattoo Fonts' },
            ] as const).map((cat) => (
              <li key={cat.id}>
                <Link
                  to="/tattoo-fonts"
                  onClick={() => {
                    onSelectCategory(cat.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-purple-300 transition-colors font-medium"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Company & Legal Links */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-200">
            Company & Legal
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 font-medium">
                About Us & Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 font-medium">
                Contact & Support
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 font-medium">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-300 font-medium">
                SIL OFL Font Licenses
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="w-full max-w-full mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} TattooFontLab. All rights reserved. Open-source font assets under SIL Open Font License.
        </div>
        <div className="font-mono text-purple-400">
          Built for Antigravity PRD Specification
        </div>
      </div>
    </footer>
    </div>
  );
};
