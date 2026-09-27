import React, { useState, useRef, useEffect } from 'react';
import { 
  Type, 
  ChevronDown, 
  Bookmark, 
  Sparkles, 
  Heart, 
  Award, 
  Languages, 
  PenTool, 
  Grid, 
  BookOpen, 
  Info, 
  Compass,
  Layers,
  Menu
} from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  savedCount: number;
  onOpenSavedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSavedModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Tattoo Font Generator', path: '/', icon: Sparkles, desc: 'Create custom font stencils instantly', badge: 'Generator' },
    { label: 'Tattoo Styles', path: '/tattoo-styles', icon: Layers, desc: 'Explore script, gothic, lettering & traditional' },
    { label: 'Beautiful Tattoos', path: '/beautiful-tattoos', icon: Heart, desc: 'Curated aesthetic design inspiration', badge: 'Trending' },
    { label: 'Couple Tattoos', path: '/couple-tattoos', icon: Compass, desc: 'Matching & meaningful couple ideas' },
    { label: "Girls' Bottom Body Tattoos", path: '/tattoos-for-girls-bottom-body', icon: Sparkles, desc: 'Lower back, hip, waist & thigh designs', badge: 'New Gallery' },
    { label: 'Most Famous Tattoos', path: '/most-famous-tattoos', icon: Award, desc: 'Iconic tattoos & cultural classics', badge: 'Famous' },
    { label: 'Multilingual AI', path: '/multilingual', icon: Languages, desc: 'Translate text to foreign script tattoos' },
    { label: 'Tattoo Fonts', path: '/tattoo-fonts', icon: Type, desc: 'Browse 80+ tattoo typography styles' },
    { label: 'Tattoo Lettering', path: '/tattoo-lettering', icon: PenTool, desc: 'Custom lettering and calligraphy ideas' },
    { label: 'Tattoo Ideas', path: '/tattoo-ideas', icon: Grid, desc: 'Creative ideas for men & women placement' },
    { label: 'Guides', path: '/guides', icon: BookOpen, desc: 'Placement, sizing & tattoo care tips' },
    { label: 'About', path: '/about', icon: Info, desc: 'About TattooFontLab platform' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Find active item label if any
  const currentNav = navItems.find((item) => item.path === location.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B0E14]/95 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 lg:px-12 py-3.5 transition-all shadow-xl shadow-black/50">
      <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-purple-950/50 group-hover:bg-purple-500 transition-colors">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              TattooFontLab
            </span>
          </div>
        </div>

        {/* Right Section: Favorites Button & Rightmost Dropdown Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSavedModal}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-sm"
            title="View saved favorite fonts"
          >
            <Bookmark className="w-4 h-4 text-rose-400" />
            <span className="hidden sm:inline">Favorites</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 bg-purple-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                {savedCount}
              </span>
            )}
          </button>

          {/* Rightmost Consolidated Dropdown Navigation Button (Wide & Prominent) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold min-w-[180px] sm:min-w-[250px] md:min-w-[280px] transition-all duration-200 border ${
                menuOpen
                  ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-950/50'
                  : 'bg-slate-900/90 text-slate-200 hover:text-white border-slate-700/80 hover:border-slate-600 hover:bg-slate-800'
              }`}
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Menu className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate text-left font-bold">
                  {currentNav ? currentNav.label : 'Explore All Pages'}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  menuOpen ? 'rotate-180 text-white' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Dropdown Popover Menu (Right Aligned) */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-[320px] sm:w-[480px] md:w-[600px] bg-[#0F131C] border border-slate-800 rounded-2xl shadow-2xl p-3 sm:p-4 z-50 animate-fade-in backdrop-blur-xl">
                <div className="flex items-center justify-between pb-3 px-2 mb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Select Destination
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">11 Categories & Tools</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[70vh] overflow-y-auto pr-1">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={() => {
                          setMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                          isActive
                            ? 'bg-purple-950/70 border border-purple-800/60 text-white'
                            : 'hover:bg-slate-800/60 border border-transparent text-slate-300 hover:text-white'
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg mt-0.5 shrink-0 transition-colors ${
                            isActive
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-900 group-hover:bg-purple-900/40 text-purple-400 group-hover:text-purple-300'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className={`text-xs font-bold truncate ${isActive ? 'text-purple-300' : 'text-slate-200 group-hover:text-white'}`}>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/40 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

