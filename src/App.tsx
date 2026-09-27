import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SavedStencilsModal } from './components/SavedStencilsModal';
import { StencilPrintModal } from './components/StencilPrintModal';
import type { SortOption } from './components/ControlPanel';
import { TATTOO_FONTS } from './data/fonts';
import type { TattooFont, FontCategoryId } from './data/fonts';
import { SUPPORTED_LANGUAGES } from './data/multilingual';
import type { LanguageInfo, ScriptId } from './data/multilingual';

function ConditionalFooter({ onSelectCategory }: { onSelectCategory: (cat: FontCategoryId) => void }) {
  const location = useLocation();
  if (location.pathname !== '/about') {
    return null;
  }
  return (
    <div className="pt-24 sm:pt-32 lg:pt-44 bg-[#0B0E14] w-full">
      <Footer onSelectCategory={onSelectCategory} />
    </div>
  );
}

// Multi-Page Router Components
import { HomePage } from './pages/HomePage';
import { TattooFontsPage } from './pages/TattooFontsPage';
import { TattooLetteringPage } from './pages/TattooLetteringPage';
import { TattooIdeasPage } from './pages/TattooIdeasPage';
import { GuidesPage } from './pages/GuidesPage';
import { AboutPage } from './pages/AboutPage';
import { MultilingualPage } from './pages/MultilingualPage';
import { TattooStylesPage } from './pages/TattooStylesPage';
import { StyleDetailPage } from './pages/StyleDetailPage';
import { MostFamousTattoosPage } from './pages/MostFamousTattoosPage';
import { FamousTattooDetailPage } from './pages/FamousTattooDetailPage';
import { BeautifulTattoosPage } from './pages/BeautifulTattoosPage';
import { CoupleTattoosPage } from './pages/CoupleTattoosPage';
import { BottomBodyTattooPage } from './pages/BottomBodyTattooPage';

export function App() {
  // Read URL State parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const initialText = urlParams.get('text') || 'Khalid';
  const initialCat = (urlParams.get('category') as FontCategoryId) || 'all';

  // Generator Shared State
  const [inputText, setInputText] = useState(initialText);
  const [selectedCategory, setSelectedCategory] = useState<FontCategoryId>(initialCat);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageInfo>(SUPPORTED_LANGUAGES[0]); // English default
  const [filterCompatibleOnly, setFilterCompatibleOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('popular');

  // Customization Controls State
  const [fontSize, setFontSize] = useState(44);
  const [letterSpacing, setLetterSpacing] = useState(2);
  const [lineHeight, setLineHeight] = useState(1.25);
  const [textAlignment, setTextAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [textTransform, setTextTransform] = useState<'none' | 'uppercase' | 'lowercase'>('none');
  const [textColor, setTextColor] = useState('#0F172A');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [curvedOption, setCurvedOption] = useState<'none' | 'slight' | 'medium' | 'strong'>('none');
  const [rotation, setRotation] = useState(0);

  // LocalStorage Favorited Fonts
  const [savedFonts, setSavedFonts] = useState<TattooFont[]>(() => {
    try {
      const saved = localStorage.getItem('tattoo_fav_fonts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [placementFont, setPlacementFont] = useState<TattooFont | null>(null);
  const [printFont, setPrintFont] = useState<TattooFont | null>(null);

  // Sync favorites to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('tattoo_fav_fonts', JSON.stringify(savedFonts));
    } catch {
      // safe fallback
    }
  }, [savedFonts]);

  // Sync URL State
  useEffect(() => {
    const params = new URLSearchParams();
    if (inputText) params.set('text', inputText);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [inputText, selectedCategory]);

  // Reset controls
  const resetAllControls = () => {
    setFontSize(44);
    setLetterSpacing(2);
    setLineHeight(1.25);
    setTextAlignment('center');
    setTextTransform('none');
    setTextColor('#0F172A');
    setBackgroundColor('transparent');
    setCurvedOption('none');
    setRotation(0);
  };

  // Toggle Save Font
  const toggleSaveFont = (font: TattooFont) => {
    setSavedFonts((prev) => {
      const exists = prev.some((f) => f.id === font.id);
      if (exists) {
        return prev.filter((f) => f.id !== font.id);
      }
      return [...prev, font];
    });
  };

  // Filter & Sort Font List with Script Compatibility Filter
  const filteredFonts = useMemo(() => {
    let result = TATTOO_FONTS.filter((font) => {
      const matchesCategory = selectedCategory === 'all' || font.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        font.name.toLowerCase().includes(q) ||
        font.designer.toLowerCase().includes(q) ||
        font.category.toLowerCase().includes(q) ||
        font.description.toLowerCase().includes(q);

      // Script compatibility check
      let matchesScript = true;
      if (filterCompatibleOnly && selectedLanguage) {
        const supportedScripts: ScriptId[] = font.supportedScripts || ['latin'];
        matchesScript = supportedScripts.includes(selectedLanguage.scriptId);
      }

      return matchesCategory && matchesSearch && matchesScript;
    });

    if (sortOption === 'popular') {
      result = result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    } else if (sortOption === 'recommended') {
      result = result.sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));
    } else if (sortOption === 'new') {
      result = result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortOption === 'a-z') {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption, filterCompatibleOnly, selectedLanguage]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0B0E14] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
        
        {/* Header */}
        <Navbar
          savedCount={savedFonts.length}
          onOpenSavedModal={() => setIsSavedModalOpen(true)}
        />

        {/* Main Route Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 mb-20 lg:mb-32">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  inputText={inputText}
                  setInputText={setInputText}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  filterCompatibleOnly={filterCompatibleOnly}
                  setFilterCompatibleOnly={setFilterCompatibleOnly}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                  letterSpacing={letterSpacing}
                  setLetterSpacing={setLetterSpacing}
                  lineHeight={lineHeight}
                  setLineHeight={setLineHeight}
                  textAlignment={textAlignment}
                  setTextAlignment={setTextAlignment}
                  textTransform={textTransform}
                  setTextTransform={setTextTransform}
                  textColor={textColor}
                  setTextColor={setTextColor}
                  backgroundColor={backgroundColor}
                  setBackgroundColor={setBackgroundColor}
                  curvedOption={curvedOption}
                  setCurvedOption={setCurvedOption}
                  rotation={rotation}
                  setRotation={setRotation}
                  resetAllControls={resetAllControls}
                  filteredFonts={filteredFonts}
                  savedFonts={savedFonts}
                  toggleSaveFont={toggleSaveFont}
                  placementFont={placementFont}
                  setPlacementFont={setPlacementFont}
                  onOpenPrintModal={(f) => setPrintFont(f)}
                />
              }
            />

            <Route
              path="/multilingual"
              element={
                <MultilingualPage
                  inputText={inputText}
                  setInputText={setInputText}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  filterCompatibleOnly={filterCompatibleOnly}
                  setFilterCompatibleOnly={setFilterCompatibleOnly}
                  fontSize={fontSize}
                  letterSpacing={letterSpacing}
                  lineHeight={lineHeight}
                  textAlignment={textAlignment}
                  textTransform={textTransform}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  curvedOption={curvedOption}
                  rotation={rotation}
                  filteredFonts={filteredFonts}
                  savedFonts={savedFonts}
                  toggleSaveFont={toggleSaveFont}
                  setPlacementFont={setPlacementFont}
                />
              }
            />

            <Route
              path="/tattoo-fonts"
              element={
                <TattooFontsPage
                  inputText={inputText}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  fontSize={fontSize}
                  letterSpacing={letterSpacing}
                  lineHeight={lineHeight}
                  textAlignment={textAlignment}
                  textTransform={textTransform}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  curvedOption={curvedOption}
                  rotation={rotation}
                  savedFonts={savedFonts}
                  toggleSaveFont={toggleSaveFont}
                  setPlacementFont={setPlacementFont}
                />
              }
            />

            <Route
              path="/tattoo-lettering"
              element={
                <TattooLetteringPage setInputText={setInputText} />
              }
            />

            <Route
              path="/tattoo-ideas"
              element={
                <TattooIdeasPage setInputText={setInputText} />
              }
            />

            <Route
              path="/guides"
              element={
                <GuidesPage />
              }
            />

            <Route
              path="/tattoo-styles"
              element={
                <TattooStylesPage
                  setInputText={setInputText}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/tattoo-styles/:slug"
              element={
                <StyleDetailPage
                  inputText={inputText}
                  setInputText={setInputText}
                  setSelectedCategory={setSelectedCategory}
                  fontSize={fontSize}
                  letterSpacing={letterSpacing}
                  lineHeight={lineHeight}
                  textAlignment={textAlignment}
                  textTransform={textTransform}
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  curvedOption={curvedOption}
                  rotation={rotation}
                  savedFonts={savedFonts}
                  toggleSaveFont={toggleSaveFont}
                  setPlacementFont={setPlacementFont}
                />
              }
            />

            <Route
              path="/most-famous-tattoos"
              element={
                <MostFamousTattoosPage
                  onSelectCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/most-famous-tattoos/:slug"
              element={
                <FamousTattooDetailPage
                  onSelectCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/beautiful-tattoos"
              element={
                <BeautifulTattoosPage
                  onSelectCategory={(cat: string) => setSelectedCategory(cat as FontCategoryId)}
                />
              }
            />

            <Route
              path="/couple-tattoos"
              element={
                <CoupleTattoosPage
                  onSelectCategory={(cat: string) => setSelectedCategory(cat as FontCategoryId)}
                />
              }
            />

            <Route
              path="/tattoos-for-girls-bottom-body"
              element={
                <BottomBodyTattooPage
                  onSelectCategory={(cat: string) => setSelectedCategory(cat as FontCategoryId)}
                />
              }
            />

            <Route
              path="/about"
              element={
                <AboutPage />
              }
            />
          </Routes>
        </main>

        {/* Favorites Modal */}
        <SavedStencilsModal
          isOpen={isSavedModalOpen}
          onClose={() => setIsSavedModalOpen(false)}
          savedFonts={savedFonts}
          onRemoveFont={toggleSaveFont}
          onClearAll={() => setSavedFonts([])}
          inputText={inputText}
        />

        {/* Thermal Transfer Stencil Studio Modal */}
        <StencilPrintModal
          isOpen={!!printFont}
          onClose={() => setPrintFont(null)}
          font={printFont}
          inputText={inputText}
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          lineHeight={lineHeight}
          textAlignment={textAlignment}
          textTransform={textTransform}
          curvedOption={curvedOption}
          rotation={rotation}
        />

        {/* Footer (Rendered only on the last page: /about) */}
        <ConditionalFooter onSelectCategory={setSelectedCategory} />

      </div>
    </BrowserRouter>
  );
}

export default App;
