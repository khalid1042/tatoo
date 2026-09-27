export type FontCategoryId =
  | 'all'
  | 'script'
  | 'cursive'
  | 'gothic'
  | 'blackletter'
  | 'old-english'
  | 'calligraphy'
  | 'handwritten'
  | 'serif'
  | 'minimalist'
  | 'brush'
  | 'stencil'
  | 'traditional';

export interface CategoryInfo {
  id: FontCategoryId;
  name: string;
  description: string;
}

export const FONT_CATEGORIES: CategoryInfo[] = [
  { id: 'all', name: 'All Styles', description: 'Complete collection of tattoo fonts' },
  { id: 'script', name: 'Script', description: 'Elegant flowing tattoo lettering' },
  { id: 'cursive', name: 'Cursive', description: 'Connected handwritten styles' },
  { id: 'gothic', name: 'Gothic', description: 'Dark, dramatic lettering' },
  { id: 'blackletter', name: 'Blackletter', description: 'Traditional blackletter-inspired styles' },
  { id: 'old-english', name: 'Old English', description: 'Classic tattoo lettering aesthetic' },
  { id: 'calligraphy', name: 'Calligraphy', description: 'Decorative and artistic lettering' },
  { id: 'handwritten', name: 'Handwritten', description: 'Natural handwriting-inspired styles' },
  { id: 'serif', name: 'Serif', description: 'Classic structured typography' },
  { id: 'minimalist', name: 'Minimalist', description: 'Simple clean lettering' },
  { id: 'brush', name: 'Brush', description: 'Expressive brush lettering' },
  { id: 'stencil', name: 'Stencil', description: 'Bold stencil-inspired lettering' },
  { id: 'traditional', name: 'Traditional', description: 'Bold traditional tattoo aesthetics' },
];

import type { ScriptId } from './multilingual';

export interface TattooFont {
  id: string;
  name: string;
  fontFamily: string;
  category: FontCategoryId;
  designer: string;
  license: string;
  description: string;
  isPopular?: boolean;
  isNew?: boolean;
  recommended?: boolean;
  supportedScripts?: ScriptId[];
  supportedLanguages?: string[];
  isRtl?: boolean;
}

export const TATTOO_FONTS: TattooFont[] = [
  // Script
  {
    id: 'great-vibes',
    name: 'Great Vibes',
    fontFamily: "'Great Vibes', cursive",
    category: 'script',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Beautifully looped flowing script font perfect for names and romantic quotes.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'alex-brush',
    name: 'Alex Brush',
    fontFamily: "'Alex Brush', cursive",
    category: 'script',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Quick-flowing brush script with legibility and soft swashes.',
    isPopular: true,
    isNew: true,
  },
  {
    id: 'allura',
    name: 'Allura Script',
    fontFamily: "'Allura', cursive",
    category: 'script',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Smooth calligraphic cursive lettering with high precision curves.',
    recommended: true,
  },
  {
    id: 'dancing-script',
    name: 'Dancing Script',
    fontFamily: "'Dancing Script', cursive",
    category: 'script',
    designer: 'Impallari Type',
    license: 'SIL Open Font License',
    description: 'Casual script lettering with dynamic height variations.',
  },

  // Cursive
  {
    id: 'tangerine',
    name: 'Tangerine Cursive',
    fontFamily: "'Tangerine', cursive",
    category: 'cursive',
    designer: 'Japanese Type Design',
    license: 'SIL Open Font License',
    description: 'Ultra-thin elegant cursive with long ascending loops.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'satisfy',
    name: 'Satisfy Signature',
    fontFamily: "'Satisfy', cursive",
    category: 'cursive',
    designer: 'Sideshow',
    license: 'SIL Open Font License',
    description: 'Fluid handwritten signature font with a classic vintage tattoo aesthetic.',
    isNew: true,
  },
  {
    id: 'caveat',
    name: 'Caveat Hand',
    fontFamily: "'Caveat', cursive",
    category: 'cursive',
    designer: 'Pablo Impallari',
    license: 'SIL Open Font License',
    description: 'Natural hand-drawn stroke lettering with warm organic feel.',
  },

  // Gothic
  {
    id: 'pirata-one',
    name: 'Pirata One Gothic',
    fontFamily: "'Pirata One', display",
    category: 'gothic',
    designer: 'Rodrigo Araya',
    license: 'SIL Open Font License',
    description: 'Gothic blackletter display font tailored for chest and back tattoos.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'cinzel-decorative-gothic',
    name: 'Cinzel Dark Gothic',
    fontFamily: "'Cinzel Decorative', serif",
    category: 'gothic',
    designer: 'Natanael Gama',
    license: 'SIL Open Font License',
    description: 'Ornate Roman-Gothic fusion lettering with sharp capital serifs.',
  },

  // Blackletter
  {
    id: 'unifraktur-maguntia',
    name: 'Unifraktur Maguntia',
    fontFamily: "'UnifrakturMaguntia', serif",
    category: 'blackletter',
    designer: 'J. Mach Wust',
    license: 'SIL Open Font License',
    description: 'Authentic 19th century blackletter font with sharp diamond points.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'unifraktur-cook',
    name: 'Unifraktur Cook',
    fontFamily: "'UnifrakturCook', serif",
    category: 'blackletter',
    designer: 'J. Mach Wust',
    license: 'SIL Open Font License',
    description: 'Condensed blackletter with heavy vertical strokes.',
    isNew: true,
  },

  // Old English
  {
    id: 'medieval-sharp',
    name: 'Medieval Sharp Old English',
    fontFamily: "'MedievalSharp', cursive",
    category: 'old-english',
    designer: 'Wojciech Kalinowski',
    license: 'SIL Open Font License',
    description: 'Authentic medieval lettering with traditional Old English drop caps.',
    isPopular: true,
    recommended: true,
  },

  // Calligraphy
  {
    id: 'italianno',
    name: 'Italianno Calligraphy',
    fontFamily: "'Italianno', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'High-speed calligraphic script with sweeping drop caps.',
    isPopular: true,
  },
  {
    id: 'rochester',
    name: 'Rochester',
    fontFamily: "'Rochester', cursive",
    category: 'calligraphy',
    designer: 'Sideshow',
    license: 'SIL Open Font License',
    description: 'Formal victorian calligraphy script for delicate wrist tattoos.',
  },
  {
    id: 'yesteryear',
    name: 'Yesteryear',
    fontFamily: "'Yesteryear', cursive",
    category: 'calligraphy',
    designer: 'Astigmatic',
    license: 'SIL Open Font License',
    description: 'Flat nib calligraphy style with subtle retro flourish.',
  },

  // Handwritten
  {
    id: 'rock-salt',
    name: 'Rock Salt Handwritten',
    fontFamily: "'Rock Salt', cursive",
    category: 'handwritten',
    designer: 'Sideshow',
    license: 'SIL Open Font License',
    description: 'Aggressive felt-tip marker style for rough artist handwriting.',
    isPopular: true,
    recommended: true,
  },

  // Serif
  {
    id: 'cinzel-serif',
    name: 'Cinzel Roman Serif',
    fontFamily: "'Cinzel', serif",
    category: 'serif',
    designer: 'Natanael Gama',
    license: 'SIL Open Font License',
    description: 'Proportional Roman inscription typography for Latin quotes.',
    isPopular: true,
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    fontFamily: "'Playfair Display', serif",
    category: 'serif',
    designer: 'Claus Eggers Sørensen',
    license: 'SIL Open Font License',
    description: 'Classic editorial serif with high contrast lines.',
  },

  // Minimalist
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Fine Minimalist',
    fontFamily: "'Cormorant Garamond', serif",
    category: 'minimalist',
    designer: 'Christian Thalmann',
    license: 'SIL Open Font License',
    description: 'Ultra-thin serif typography for micro quote tattoos.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'montserrat-thin',
    name: 'Montserrat Minimal',
    fontFamily: "'Montserrat', sans-serif",
    category: 'minimalist',
    designer: 'Julieta Ulanovsky',
    license: 'SIL Open Font License',
    description: 'Clean geometric sans-serif for minimal modern lettering.',
  },

  // Brush
  {
    id: 'permanent-marker',
    name: 'Permanent Marker Brush',
    fontFamily: "'Permanent Marker', cursive",
    category: 'brush',
    designer: 'Font Diner',
    license: 'SIL Open Font License',
    description: 'Bold expressive marker pen strokes with heavy impact.',
    isPopular: true,
  },
  {
    id: 'kaushan-script',
    name: 'Kaushan Script Brush',
    fontFamily: "'Kaushan Script', cursive",
    category: 'brush',
    designer: 'Impallari Type',
    license: 'SIL Open Font License',
    description: 'Artistic brush script with unpolished energy.',
  },

  // Stencil
  {
    id: 'allerta-stencil',
    name: 'Allerta Stencil',
    fontFamily: "'Allerta Stencil', sans-serif",
    category: 'stencil',
    designer: 'Matt McInerney',
    license: 'SIL Open Font License',
    description: 'Minimalist stencil lettering engineered for transfer paper.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'black-ops-one',
    name: 'Black Ops Stencil',
    fontFamily: "'Black Ops One', display",
    category: 'stencil',
    designer: 'James Grieshaber',
    license: 'SIL Open Font License',
    description: 'Heavy tactical stencil letters with precision cuts.',
  },

  // Traditional
  {
    id: 'abril-fatface',
    name: 'Abril Traditional',
    fontFamily: "'Abril Fatface', display",
    category: 'traditional',
    designer: 'TypeTogether',
    license: 'SIL Open Font License',
    description: 'Heavy high-contrast traditional sailor tattoo display style.',
    isPopular: true,
    supportedScripts: ['latin', 'cyrillic'],
  },

  // Arabic / Urdu / Persian Fonts
  {
    id: 'amiri-arabic',
    name: 'Amiri Arabic Calligraphy',
    fontFamily: "'Amiri', serif",
    category: 'calligraphy',
    designer: 'Khaled Hosny',
    license: 'SIL Open Font License',
    description: 'Classical flowing Arabic Naskh script font perfect for elegant Arabic & Persian tattoo lettering.',
    isPopular: true,
    recommended: true,
    supportedScripts: ['arabic', 'latin'],
    supportedLanguages: ['Arabic', 'Urdu', 'Persian'],
    isRtl: true,
  },
  {
    id: 'noto-nastaliq-urdu',
    name: 'Nastaliq Urdu Calligraphy',
    fontFamily: "'Noto Nastaliq Urdu', 'Amiri', serif",
    category: 'calligraphy',
    designer: 'Google Fonts',
    license: 'SIL Open Font License',
    description: 'Authentic flowing Nastaliq script for Urdu poetry, names, and spiritual tattoo art.',
    isPopular: true,
    recommended: true,
    supportedScripts: ['arabic', 'latin'],
    supportedLanguages: ['Urdu', 'Arabic', 'Persian'],
    isRtl: true,
  },
  {
    id: 'reem-kufi-arabic',
    name: 'Reem Kufi Geometric',
    fontFamily: "'Reem Kufi', sans-serif",
    category: 'gothic',
    designer: 'Khaled Hosny',
    license: 'SIL Open Font License',
    description: 'Bold structured Kufic Arabic calligraphy for chest and forearm lettering.',
    supportedScripts: ['arabic', 'latin'],
    supportedLanguages: ['Arabic', 'Urdu', 'Persian'],
    isRtl: true,
  },
  {
    id: 'aref-ruqaa-arabic',
    name: 'Aref Ruqaa Classical',
    fontFamily: "'Aref Ruqaa', serif",
    category: 'traditional',
    designer: 'Abdullah Aref',
    license: 'SIL Open Font License',
    description: 'Traditional Ruqah Arabic pen strokes designed for fast legibility and strong ink flow.',
    supportedScripts: ['arabic', 'latin'],
    supportedLanguages: ['Arabic', 'Urdu', 'Persian'],
    isRtl: true,
  },

  // Devanagari (Hindi / Sanskrit) Fonts
  {
    id: 'rozha-one-hindi',
    name: 'Rozha Devanagari Calligraphy',
    fontFamily: "'Rozha One', serif",
    category: 'calligraphy',
    designer: 'Indian Type Foundry',
    license: 'SIL Open Font License',
    description: 'High-contrast bold Devanagari calligraphy for Hindi, Sanskrit, and Marathi tattoos.',
    isPopular: true,
    recommended: true,
    supportedScripts: ['devanagari', 'latin'],
    supportedLanguages: ['Hindi', 'Sanskrit', 'Marathi'],
  },
  {
    id: 'yatra-one-hindi',
    name: 'Yatra Devanagari Brush',
    fontFamily: "'Yatra One', display",
    category: 'brush',
    designer: 'Catherine Leigh Schmidt',
    license: 'SIL Open Font License',
    description: 'Expressive Indian railway & street brush lettering style for Devanagari quotes.',
    supportedScripts: ['devanagari', 'latin'],
    supportedLanguages: ['Hindi', 'Sanskrit'],
  },

  // Hebrew Fonts
  {
    id: 'frank-ruhl-hebrew',
    name: 'Frank Ruhl Hebrew Serif',
    fontFamily: "'Frank Ruhl Libre', serif",
    category: 'serif',
    designer: 'Yanek Iontef',
    license: 'SIL Open Font License',
    description: 'Classic Hebrew typography designed for precise scripture and initial tattoos.',
    isPopular: true,
    recommended: true,
    supportedScripts: ['hebrew', 'latin'],
    supportedLanguages: ['Hebrew'],
    isRtl: true,
  },

  // Greek / Cyrillic Fonts
  {
    id: 'marcellus-greek',
    name: 'Marcellus Classical Greek',
    fontFamily: "'Marcellus', serif",
    category: 'serif',
    designer: 'Astigmatic',
    license: 'SIL Open Font License',
    description: 'Classical Greek and Cyrillic stone inscription lettering.',
    supportedScripts: ['greek', 'cyrillic', 'latin'],
    supportedLanguages: ['Greek', 'Russian', 'Ukrainian'],
  },

  // CJK (Japanese / Chinese / Korean) Fonts
  {
    id: 'noto-serif-jp',
    name: 'Noto Kanji Calligraphy',
    fontFamily: "'Noto Serif JP', serif",
    category: 'calligraphy',
    designer: 'Google / Adobe',
    license: 'SIL Open Font License',
    description: 'Traditional Japanese Kanji, Hiragana & Katakana calligraphy brush lettering.',
    isPopular: true,
    recommended: true,
    supportedScripts: ['japanese', 'chinese', 'latin'],
    supportedLanguages: ['Japanese', 'Chinese'],
  },
  {
    id: 'ma-shan-zheng-cn',
    name: 'Ma Shan Zheng Chinese Brush',
    fontFamily: "'Ma Shan Zheng', cursive",
    category: 'brush',
    designer: 'Ma Shan Zheng',
    license: 'SIL Open Font License',
    description: 'Dynamic flowing Chinese brush calligraphy for Han character tattoos.',
    isPopular: true,
    supportedScripts: ['chinese', 'japanese', 'latin'],
    supportedLanguages: ['Chinese', 'Japanese'],
  },
  {
    id: 'nanum-myeongjo-ko',
    name: 'Nanum Hangul Calligraphy',
    fontFamily: "'Nanum Myeongjo', serif",
    category: 'calligraphy',
    designer: 'Naver',
    license: 'SIL Open Font License',
    description: 'Classic Korean Hangul typography for name and phrase tattoos.',
    isPopular: true,
    supportedScripts: ['korean', 'latin'],
    supportedLanguages: ['Korean'],
  },

  // Thai Fonts
  {
    id: 'sarabun-thai',
    name: 'Sarabun Thai Typography',
    fontFamily: "'Sarabun', sans-serif",
    category: 'minimalist',
    designer: 'Suppakit Chalermlarp',
    license: 'SIL Open Font License',
    description: 'Clean Thai lettering for delicate wrist and ribcage tattoos.',
    supportedScripts: ['thai', 'latin'],
    supportedLanguages: ['Thai'],
  },

  // --- ADDITIONAL 50+ TATTOO STYLING FONTS ---
  // Script & Cursive Expansion
  {
    id: 'pinyon-script',
    name: 'Pinyon Script',
    fontFamily: "'Pinyon Script', cursive",
    category: 'script',
    designer: 'Nicole Fally',
    license: 'SIL Open Font License',
    description: 'High-society romantic calligraphic script with delicate slants and high legibility.',
    isPopular: true,
  },
  {
    id: 'parisienne',
    name: 'Parisienne Cursive',
    fontFamily: "'Parisienne', cursive",
    category: 'script',
    designer: 'Astigmatic',
    license: 'SIL Open Font License',
    description: 'Casual yet refined Parisian script font for name tattoos and romantic quotes.',
    recommended: true,
  },
  {
    id: 'mr-de-haviland',
    name: 'Mr De Haviland',
    fontFamily: "'Mr De Haviland', cursive",
    category: 'script',
    designer: 'Sudtipos',
    license: 'SIL Open Font License',
    description: 'Vintage 19th century copperplate calligraphic lettering with sweeping flourish strokes.',
    isNew: true,
  },
  {
    id: 'herr-von-muellerhoff',
    name: 'Herr Von Muellerhoff',
    fontFamily: "'Herr Von Muellerhoff', cursive",
    category: 'script',
    designer: 'Sudtipos',
    license: 'SIL Open Font License',
    description: 'Ornate formal script with dramatic ascenders and sweeping capital loops.',
  },
  {
    id: 'monsieur-la-doulaise',
    name: 'Monsieur La Doulaise',
    fontFamily: "'Monsieur La Doulaise', cursive",
    category: 'script',
    designer: 'Sudtipos',
    license: 'SIL Open Font License',
    description: 'Elaborate calligraphic lettering with extreme loops for chest and back script tattoos.',
    isPopular: true,
  },
  {
    id: 'rouge-script',
    name: 'Rouge Script',
    fontFamily: "'Rouge Script', cursive",
    category: 'script',
    designer: 'Sabrina Lopez',
    license: 'SIL Open Font License',
    description: 'Soft romantic script with gentle curves for delicate collarbone lettering.',
  },
  {
    id: 'style-script',
    name: 'Style Script',
    fontFamily: "'Style Script', cursive",
    category: 'script',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Mid-century sign-painting script with retro tattoo charm.',
  },
  {
    id: 'windsong',
    name: 'WindSong Cursive',
    fontFamily: "'WindSong', cursive",
    category: 'cursive',
    designer: 'Bright Ideas',
    license: 'SIL Open Font License',
    description: 'Ultra-thin, wispy cursive script that mimics delicate hand-drawn pen ink.',
    recommended: true,
  },
  {
    id: 'petit-formal-script',
    name: 'Petit Formal Script',
    fontFamily: "'Petit Formal Script', cursive",
    category: 'cursive',
    designer: 'Impallari Type',
    license: 'SIL Open Font License',
    description: 'Formal cursive lettering engineered for high legibility on small wrist tattoos.',
  },
  {
    id: 'niconne',
    name: 'Niconne Script',
    fontFamily: "'Niconne', cursive",
    category: 'cursive',
    designer: 'Vernon Adams',
    license: 'SIL Open Font License',
    description: 'Rhythmic vintage script font based on 1920s calligraphic designs.',
  },
  {
    id: 'clicker-script',
    name: 'Clicker Script',
    fontFamily: "'Clicker Script', cursive",
    category: 'cursive',
    designer: 'Astigmatic',
    license: 'SIL Open Font License',
    description: 'Bouncy lightweight cursive script font for cheerful name tattoos.',
  },
  {
    id: 'euphoria-script',
    name: 'Euphoria Script',
    fontFamily: "'Euphoria Script', cursive",
    category: 'cursive',
    designer: 'Sabrina Lopez',
    license: 'SIL Open Font License',
    description: 'Playful hand-lettered cursive font with relaxed disconnect loops.',
  },

  // Gothic & Blackletter Expansion
  {
    id: 'grenze-gotisch',
    name: 'Grenze Gotisch',
    fontFamily: "'Grenze Gotisch', display",
    category: 'gothic',
    designer: 'Omnibus-Type',
    license: 'SIL Open Font License',
    description: 'Heavy German Gothic blackletter display font with dark, sharp angular strokes.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'new-rocker',
    name: 'New Rocker Gothic',
    fontFamily: "'New Rocker', display",
    category: 'gothic',
    designer: 'Impallari Type',
    license: 'SIL Open Font License',
    description: 'Aggressive heavy metal rock gothic font for dark art tattoos.',
    isNew: true,
  },
  {
    id: 'metal-mania',
    name: 'Metal Mania Gothic',
    fontFamily: "'Metal Mania', display",
    category: 'gothic',
    designer: 'Viktoriya Grabowska',
    license: 'SIL Open Font License',
    description: 'Spiked black metal typography with razor-sharp serifs.',
  },
  {
    id: 'eater-gothic',
    name: 'Eater Spooky Gothic',
    fontFamily: "'Eater', display",
    category: 'gothic',
    designer: 'Typomundo',
    license: 'SIL Open Font License',
    description: 'Distressed gothic display lettering for dark fantasy and horror tattoo concepts.',
  },
  {
    id: 'frijole-gothic',
    name: 'Frijole Dark Ink',
    fontFamily: "'Frijole', display",
    category: 'gothic',
    designer: 'Sideshow',
    license: 'SIL Open Font License',
    description: 'Splattered heavy ink block gothic font for raw street art lettering.',
  },
  {
    id: 'chathura-condensed',
    name: 'Chathura Dark Gothic',
    fontFamily: "'Chathura', sans-serif",
    category: 'blackletter',
    designer: 'Modular',
    license: 'SIL Open Font License',
    description: 'Condensed vertical blackletter aesthetic with sharp geometry.',
  },
  {
    id: 'almendra-display',
    name: 'Almendra Fantasy Blackletter',
    fontFamily: "'Almendra Display', display",
    category: 'blackletter',
    designer: 'Ana Sanfelippo',
    license: 'SIL Open Font License',
    description: 'Calligraphic fantasy blackletter font inspired by medieval manuscripts.',
    recommended: true,
  },
  {
    id: 'germania-one',
    name: 'Germania Hybrid Blackletter',
    fontFamily: "'Germania One', display",
    category: 'blackletter',
    designer: 'John Vargas Beltrán',
    license: 'SIL Open Font License',
    description: 'Hybrid font fusing German blackletter with classic Roman typography.',
    isPopular: true,
  },
  {
    id: 'diplomata',
    name: 'Diplomata Victorian Blackletter',
    fontFamily: "'Diplomata', display",
    category: 'blackletter',
    designer: 'Eduardo Tunni',
    license: 'SIL Open Font License',
    description: 'Ornate Victorian blackletter lettering tailored for wide chest backpieces.',
  },
  {
    id: 'diplomata-sc',
    name: 'Diplomata Small Caps',
    fontFamily: "'Diplomata SC', display",
    category: 'blackletter',
    designer: 'Eduardo Tunni',
    license: 'SIL Open Font License',
    description: 'Structured Victorian blackletter small-caps typography.',
  },

  // Old English & Medieval Expansion
  {
    id: 'jacquard-12',
    name: 'Jacquard 12 Medieval',
    fontFamily: "'Jacquard 12', display",
    category: 'old-english',
    designer: 'Google Fonts',
    license: 'SIL Open Font License',
    description: 'Intricate medieval woven tapestry Old English style.',
    isNew: true,
  },
  {
    id: 'jacquard-24',
    name: 'Jacquard 24 Deluxe Old English',
    fontFamily: "'Jacquard 24', display",
    category: 'old-english',
    designer: 'Google Fonts',
    license: 'SIL Open Font License',
    description: 'Heavy ornate medieval drop-cap Old English font for initial tattoos.',
    recommended: true,
  },

  // Calligraphy Expansion
  {
    id: 'ruthie-calligraphy',
    name: 'Ruthie Fine Calligraphy',
    fontFamily: "'Ruthie', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Feather-light calligraphic script with sweeping drop tails.',
  },
  {
    id: 'arizonia-calligraphy',
    name: 'Arizonia Sign Calligraphy',
    fontFamily: "'Arizonia', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Sign-painting calligraphic script with dramatic thick-thin stroke contrast.',
    isPopular: true,
  },
  {
    id: 'tapestry-calligraphy',
    name: 'Tapestry Brush Calligraphy',
    fontFamily: "'Tapestry', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Textured calligraphic brush script with vintage flair.',
  },
  {
    id: 'qwigley-calligraphy',
    name: 'Qwigley Flourished Calligraphy',
    fontFamily: "'Qwigley', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Ultra-flourished calligraphic script for stylized decorative tattoos.',
  },
  {
    id: 'bilbo-swash',
    name: 'Bilbo Swash Calligraphy',
    fontFamily: "'Bilbo Swash Caps', cursive",
    category: 'calligraphy',
    designer: 'TypeSETit',
    license: 'SIL Open Font License',
    description: 'Decorative swash capital calligraphic script for name initial tattoos.',
  },

  // Handwritten Expansion
  {
    id: 'shadows-into-light',
    name: 'Shadows Into Light',
    fontFamily: "'Shadows Into Light', cursive",
    category: 'handwritten',
    designer: 'Kimberly Geswein',
    license: 'SIL Open Font License',
    description: 'Clean, rounded handwritten pen lettering with personal warmth.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'indie-flower',
    name: 'Indie Flower Hand',
    fontFamily: "'Indie Flower', cursive",
    category: 'handwritten',
    designer: 'Kimberly Geswein',
    license: 'SIL Open Font License',
    description: 'Carefree hand-drawn lettering with smooth bubbly edges.',
  },
  {
    id: 'amatic-sc',
    name: 'Amatic SC Minimal Hand',
    fontFamily: "'Amatic SC', cursive",
    category: 'handwritten',
    designer: 'Vernon Adams',
    license: 'SIL Open Font License',
    description: 'Condensed tall hand-drawn capital letters for micro quote tattoos.',
  },
  {
    id: 'covered-by-grace',
    name: 'Covered By Your Grace',
    fontFamily: "'Covered By Your Grace', cursive",
    category: 'handwritten',
    designer: 'Kimberly Geswein',
    license: 'SIL Open Font License',
    description: 'Quick marker pen handwriting with natural stroke variations.',
  },
  {
    id: 'nothing-you-could-do',
    name: 'Nothing You Could Do',
    fontFamily: "'Nothing You Could Do', cursive",
    category: 'handwritten',
    designer: 'Kimberly Geswein',
    license: 'SIL Open Font License',
    description: 'Raw, organic handwriting mimicking quick notebook sketches.',
  },
  {
    id: 'reenie-beanie',
    name: 'Reenie Beanie Ballpoint',
    fontFamily: "'Reenie Beanie', cursive",
    category: 'handwritten',
    designer: 'James Grieshaber',
    license: 'SIL Open Font License',
    description: 'Fine-line ballpoint pen handwriting style.',
  },

  // Serif Expansion
  {
    id: 'bodoni-moda',
    name: 'Bodoni Moda Fashion Serif',
    fontFamily: "'Bodoni Moda', serif",
    category: 'serif',
    designer: 'Owen Earl',
    license: 'SIL Open Font License',
    description: 'Ultra-high contrast fashion serif typography for elegant Latin proverbs.',
    recommended: true,
  },
  {
    id: 'prata-serif',
    name: 'Prata Teardrop Serif',
    fontFamily: "'Prata', serif",
    category: 'serif',
    designer: 'Cyreal',
    license: 'SIL Open Font License',
    description: 'Didone-style serif with teardrop terminals for crisp tattoo stencils.',
  },
  {
    id: 'vollkorn-serif',
    name: 'Vollkorn Classic Serif',
    fontFamily: "'Vollkorn', serif",
    category: 'serif',
    designer: 'Friedrich Althausen',
    license: 'SIL Open Font License',
    description: 'Sturdy historical serif with dark, well-defined stroke weight.',
  },

  // Minimalist Expansion
  {
    id: 'josefin-sans',
    name: 'Josefin Sans Minimalist',
    fontFamily: "'Josefin Sans', sans-serif",
    category: 'minimalist',
    designer: 'Santiago Orozco',
    license: 'SIL Open Font License',
    description: 'Vintage 1930s geometric sans-serif for minimal line tattoos.',
    isPopular: true,
  },
  {
    id: 'quicksand-minimal',
    name: 'Quicksand Minimalist',
    fontFamily: "'Quicksand', sans-serif",
    category: 'minimalist',
    designer: 'Andrew Paglinawan',
    license: 'SIL Open Font License',
    description: 'Soft rounded geometric sans for subtle date and coordinate tattoos.',
  },
  {
    id: 'space-mono-typewriter',
    name: 'Space Mono Typewriter',
    fontFamily: "'Space Mono', monospace",
    category: 'minimalist',
    designer: 'Colophon Foundry',
    license: 'SIL Open Font License',
    description: 'Futuristic monospaced typewriter lettering for minimal tech tattoos.',
    isNew: true,
  },

  // Brush Expansion
  {
    id: 'caveat-brush',
    name: 'Caveat Heavy Brush',
    fontFamily: "'Caveat Brush', cursive",
    category: 'brush',
    designer: 'Pablo Impallari',
    license: 'SIL Open Font License',
    description: 'Heavy ink brush strokes with warm handwritten energy.',
    isPopular: true,
  },
  {
    id: 'gochi-hand',
    name: 'Gochi Hand Brush',
    fontFamily: "'Gochi Hand', cursive",
    category: 'brush',
    designer: 'Huerta Tipográfica',
    license: 'SIL Open Font License',
    description: 'Smooth ink stroke handwriting inspired by teen script art.',
  },
  {
    id: 'nanum-brush',
    name: 'Nanum Brush Oriental',
    fontFamily: "'Nanum Brush Script', cursive",
    category: 'brush',
    designer: 'Naver',
    license: 'SIL Open Font License',
    description: 'Flowing Asian ink brush lettering for oriental motif tattoos.',
    recommended: true,
  },

  // Stencil Expansion
  {
    id: 'sirin-stencil',
    name: 'Sirin Fine Stencil',
    fontFamily: "'Sirin Stencil', display",
    category: 'stencil',
    designer: 'Cyreal',
    license: 'SIL Open Font License',
    description: 'Delicate thin-stroke stencil font engineered for precise thermal transfer.',
  },
  {
    id: 'stardos-stencil',
    name: 'Stardos Tactical Stencil',
    fontFamily: "'Stardos Stencil', display",
    category: 'stencil',
    designer: 'Vernon Adams',
    license: 'SIL Open Font License',
    description: 'Military antique stencil lettering with heavy corner cuts.',
    isPopular: true,
  },
  {
    id: 'emblema-one',
    name: 'Emblema Badge Stencil',
    fontFamily: "'Emblema One', display",
    category: 'stencil',
    designer: 'Riccardo De Franceschi',
    license: 'SIL Open Font License',
    description: 'Vintage heavy badge stencil style for bold arm bands.',
  },

  // Traditional Western Tattoo Expansion
  {
    id: 'rye-traditional',
    name: 'Rye Wild West Traditional',
    fontFamily: "'Rye', display",
    category: 'traditional',
    designer: 'Nicole Fally',
    license: 'SIL Open Font License',
    description: 'Classic American Western slab-serif tailored for traditional sailor tattoos.',
    isPopular: true,
    recommended: true,
  },
  {
    id: 'sancreek-traditional',
    name: 'Sancreek Western Traditional',
    fontFamily: "'Sancreek', display",
    category: 'traditional',
    designer: 'Vernon Adams',
    license: 'SIL Open Font License',
    description: 'Ornate split-serif Western display font for old-school tattoo banners.',
  },
  {
    id: 'smokum-traditional',
    name: 'Smokum Heavy Slab Traditional',
    fontFamily: "'Smokum', display",
    category: 'traditional',
    designer: 'Astigmatic',
    license: 'SIL Open Font License',
    description: 'Heavy slab-serif traditional tattoo font with weathered character.',
  },
  {
    id: 'vast-shadow',
    name: 'Vast Shadow Traditional',
    fontFamily: "'Vast Shadow', display",
    category: 'traditional',
    designer: 'Nicole Fally',
    license: 'SIL Open Font License',
    description: 'Victorian drop-shadowed display font for classic tattoo flash lettering.',
  },
];

export interface ColorSwatch {
  name: string;
  value: string;
}

export interface BackgroundSwatch {
  name: string;
  value: string;
  label: string;
}

export const COLOR_SWATCHES: ColorSwatch[] = [
  { name: 'Ink Black', value: '#0F172A' },
  { name: 'Soft Charcoal', value: '#334155' },
  { name: 'Crimson Ink', value: '#991B1B' },
  { name: 'Deep Navy', value: '#1E3A8A' },
  { name: 'Emerald Ink', value: '#065F46' },
  { name: 'White Ink', value: '#FFFFFF' },
];

export const BACKGROUND_SWATCHES: BackgroundSwatch[] = [
  { name: 'Transparent', value: 'transparent', label: 'Transparent' },
  { name: 'Clean White', value: '#FFFFFF', label: 'White' },
  { name: 'Dark Slate', value: '#0B0E14', label: 'Dark Slate' },
  { name: 'Fair Skin', value: '#FFDBAC', label: 'Fair Skin' },
  { name: 'Warm Skin', value: '#F1C27D', label: 'Warm Skin' },
  { name: 'Tan Skin', value: '#E0AC69', label: 'Tan Skin' },
  { name: 'Dark Skin', value: '#8D5524', label: 'Dark Skin' },
];

export interface BodyTemplate {
  id: string;
  name: string;
  bodyPart: string;
}

export const BODY_TEMPLATES: BodyTemplate[] = [
  { id: 'forearm', name: 'Inner Forearm', bodyPart: 'Forearm' },
  { id: 'wrist', name: 'Wrist & Hand', bodyPart: 'Wrist' },
  { id: 'bicep', name: 'Outer Bicep', bodyPart: 'Upper Arm' },
  { id: 'collarbone', name: 'Collarbone / Chest', bodyPart: 'Chest' },
  { id: 'upper-back', name: 'Upper Back / Nape', bodyPart: 'Back' },
  { id: 'ribcage', name: 'Ribcage / Side', bodyPart: 'Ribs' },
];
