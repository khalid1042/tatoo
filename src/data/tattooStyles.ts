export interface TattooStyleItem {
  id: string;
  name: string;
  slug: string;
  type: 'style' | 'lettering' | 'name' | 'quote' | 'date' | 'multilingual';
  category: string;
  shortDescription: string;
  fullDescription: string;
  characteristics: string[];
  suitablePlacement: string[];
  relatedFontCategories: string[];
  imageUrl: string;
  altText: string;
  filename: string;
  licenseInfo: string;
  creator: string;
  tryPresetText: string;
  featured?: boolean;
  language?: string;
  script?: string;
}

export const TATTOO_STYLES: TattooStyleItem[] = [
  // 1. Blackwork Tattoo
  {
    id: 'blackwork',
    name: 'Blackwork Tattoo',
    slug: 'blackwork',
    type: 'style',
    category: 'Blackwork',
    shortDescription: 'Bold black shapes, heavy fills, and intense graphic contrast.',
    fullDescription: 'Blackwork tattooing uses solid black ink to build large graphic shapes, negative space patterns, and dense ornamentation. It is renowned for high durability and timeless visual impact.',
    characteristics: ['Solid black fills', 'Heavy contrast', 'Negative space patterns', 'High visual durability'],
    suitablePlacement: ['Forearm', 'Upper Arm', 'Chest', 'Calf', 'Full Sleeve'],
    relatedFontCategories: ['blackletter', 'gothic', 'old-english'],
    imageUrl: '/images/tattoos/blackwork-tattoo-style.svg',
    altText: 'Blackwork tattoo style illustration featuring bold graphic black fill ornamentation',
    filename: 'blackwork-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'DARKNESS & LIGHT',
    featured: true,
  },

  // 2. Fine Line Tattoo
  {
    id: 'fine-line',
    name: 'Fine Line Tattoo',
    slug: 'fine-line',
    type: 'style',
    category: 'Fine Line',
    shortDescription: 'Thin, delicate lines with precise minimal artwork and subtle shading.',
    fullDescription: 'Fine line tattoos rely on ultra-thin single needle techniques to produce soft, delicate micro details, intricate florals, and elegant thin script lettering.',
    characteristics: ['Single needle precision', 'Subtle micro detail', 'Soft aesthetics', 'Minimalist lines'],
    suitablePlacement: ['Wrist', 'Collarbone', 'Inner Bicep', 'Ribcage', 'Behind Ear'],
    relatedFontCategories: ['script', 'minimalist', 'serif'],
    imageUrl: '/images/tattoos/fine-line-tattoo-style.svg',
    altText: 'Fine line tattoo with delicate botanical branches and minimalist script lettering',
    filename: 'fine-line-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'Serendipity',
    featured: true,
  },

  // 3. Traditional Tattoo
  {
    id: 'traditional',
    name: 'Traditional Tattoo',
    slug: 'traditional',
    type: 'style',
    category: 'Traditional',
    shortDescription: 'Bold black outlines, vibrant primary color palettes, and classic nautical motifs.',
    fullDescription: 'American Traditional (Old School) tattoos feature heavy black outlines, solid black and primary color saturation, and iconic motifs such as anchors, eagles, roses, and banners.',
    characteristics: ['Heavy black outlines', 'Primary color saturation', 'Classic banner lettering', 'Iconic motifs'],
    suitablePlacement: ['Forearm', 'Bicep', 'Chest', 'Thigh', 'Shoulder'],
    relatedFontCategories: ['old-english', 'traditional', 'blackletter'],
    imageUrl: '/images/tattoos/traditional-tattoo-style.svg',
    altText: 'Traditional tattoo style art with bold banner lettering and rose anchor motifs',
    filename: 'traditional-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'HOLD FAST',
    featured: true,
  },

  // 4. Gothic Tattoo
  {
    id: 'gothic',
    name: 'Gothic Tattoo',
    slug: 'gothic',
    type: 'style',
    category: 'Gothic',
    shortDescription: 'Dark, dramatic lettering with sharp angular strokes and architectural flourishes.',
    fullDescription: 'Gothic tattoos feature dramatic blackletter typography inspired by medieval cathedral arches, sharp calligraphic strokes, and dark ceremonial imagery.',
    characteristics: ['Sharp angular strokes', 'Architectural drop caps', 'Dark dramatic mood', 'High pressure contrast'],
    suitablePlacement: ['Chest', 'Upper Back', 'Forearm', 'Ribcage', 'Stomach'],
    relatedFontCategories: ['gothic', 'blackletter', 'old-english'],
    imageUrl: '/images/tattoos/gothic-tattoo-style.svg',
    altText: 'Gothic tattoo lettering and ornamental dark architectural ornamentation',
    filename: 'gothic-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'KHALID',
    featured: true,
  },

  // 5. Old English Tattoo
  {
    id: 'old-english',
    name: 'Old English Tattoo',
    slug: 'old-english',
    type: 'style',
    category: 'Old English',
    shortDescription: 'Classic gangland and traditional biker blackletter typography.',
    fullDescription: 'Old English lettering is one of the most timeless styles in tattoo history, featuring heavy vertical stems, intricate spur flourishes, and bold capital initials.',
    characteristics: ['Spur flourishes', 'Heavy vertical stems', 'Classic street heritage', 'Bold capital letters'],
    suitablePlacement: ['Forearm', 'Chest', 'Abdomen', 'Neck', 'Knuckles'],
    relatedFontCategories: ['old-english', 'blackletter', 'gothic'],
    imageUrl: '/images/tattoos/old-english-tattoo-style.svg',
    altText: 'Old English tattoo lettering banner with classic blackletter numbers and words',
    filename: 'old-english-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'FAMILY FIRST',
    featured: true,
  },

  // 6. Japanese Tattoo (Irezumi)
  {
    id: 'japanese',
    name: 'Japanese Tattoo (Irezumi)',
    slug: 'japanese',
    type: 'style',
    category: 'Japanese',
    shortDescription: 'Large-scale compositions with dragons, waves, koi fish, and Kanji calligraphy.',
    fullDescription: 'Traditional Japanese Irezumi utilizes flowing wind bars, waves, cherry blossoms, and mythic creatures to create large body-suits and full sleeve compositions.',
    characteristics: ['Flowing background wind bars', 'Mythic Japanese motifs', 'Kanji calligraphy integration', 'Full sleeve harmony'],
    suitablePlacement: ['Full Sleeve', 'Backpiece', 'Chest & Arm', 'Thigh', 'Shoulder'],
    relatedFontCategories: ['calligraphy', 'brush', 'traditional'],
    imageUrl: '/images/tattoos/japanese-tattoo-style.svg',
    altText: 'Japanese tattoo artwork featuring dragon wave background and Kanji script calligraphy',
    filename: 'japanese-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: '永遠 (Forever)',
    featured: true,
  },

  // 7. Chicano Lettering Tattoo
  {
    id: 'chicano-lettering',
    name: 'Chicano Lettering Tattoo',
    slug: 'chicano-lettering',
    type: 'style',
    category: 'Chicano',
    shortDescription: 'Smooth custom script with extended swashes, shading, and street calligraphic style.',
    fullDescription: 'Chicano lettering originated in East Los Angeles and prison art culture, characterized by ultra-smooth cursive loops, subtle grey shading, and long artistic swashes.',
    characteristics: ['Extended cursive swashes', 'Soft grey gradient shading', 'Custom signature flourishes', 'High elegance'],
    suitablePlacement: ['Chest', 'Forearm', 'Neck', 'Ribs', 'Upper Back'],
    relatedFontCategories: ['script', 'cursive', 'calligraphy'],
    imageUrl: '/images/tattoos/chicano-tattoo-style.svg',
    altText: 'Chicano lettering tattoo script with long custom swashes and smooth grey shading',
    filename: 'chicano-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'Bendecida',
    featured: true,
  },

  // 8. Geometric Tattoo
  {
    id: 'geometric',
    name: 'Geometric Tattoo',
    slug: 'geometric',
    type: 'style',
    category: 'Geometric',
    shortDescription: 'Structured shapes, mandalas, sacred geometry, and clean line symmetry.',
    fullDescription: 'Geometric tattoos feature crisp mathematical shapes, interlocking triangles, concentric mandalas, and clean symmetrical patterns for a modern futuristic aesthetic.',
    characteristics: ['Mathematical symmetry', 'Mandala elements', 'Clean linework', 'Modern balance'],
    suitablePlacement: ['Forearm', 'Upper Back', 'Chest', 'Tricep', 'Shoulder Blade'],
    relatedFontCategories: ['minimalist', 'serif', 'stencil'],
    imageUrl: '/images/tattoos/geometric-tattoo-style.svg',
    altText: 'Geometric tattoo style mandala with crisp lines and symmetrical mathematical shapes',
    filename: 'geometric-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'BALANCE',
    featured: true,
  },

  // 9. Minimalist Tattoo
  {
    id: 'minimalist',
    name: 'Minimalist Tattoo',
    slug: 'minimalist',
    type: 'style',
    category: 'Minimalist',
    shortDescription: 'Restrained, simple line art and subtle micro typography.',
    fullDescription: 'Minimalist tattoos focus on clean simplicity, stripping away unnecessary shading to highlight delicate line shapes, small quotes, or meaningful single-word lettering.',
    characteristics: ['Uncluttered simplicity', 'Subtle micro scale', 'Restrained detail', 'Timeless elegance'],
    suitablePlacement: ['Wrist', 'Finger', 'Ankle', 'Behind Ear', 'Collarbone'],
    relatedFontCategories: ['minimalist', 'serif', 'script'],
    imageUrl: '/images/tattoos/minimalist-tattoo-style.svg',
    altText: 'Minimalist tattoo illustration with simple micro line heart and clean serif date',
    filename: 'minimalist-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'breathe.',
    featured: true,
  },

  // 10. Botanical Tattoo
  {
    id: 'botanical',
    name: 'Botanical Tattoo',
    slug: 'botanical',
    type: 'style',
    category: 'Botanical',
    shortDescription: 'Realistic and fine-line roses, leaves, wildflowers, and vines.',
    fullDescription: 'Botanical tattoos showcase organic floral illustrations, delicate stems, and blooming petals often intertwined with elegant name or quote lettering.',
    characteristics: ['Organic leaf flows', 'Delicate flower petals', 'Soft stippling', 'Natural elegance'],
    suitablePlacement: ['Forearm', 'Shoulder', 'Ribcage', 'Thigh', 'Wrist'],
    relatedFontCategories: ['script', 'cursive', 'serif'],
    imageUrl: '/images/tattoos/botanical-tattoo-style.svg',
    altText: 'Botanical tattoo with fine line rose branch wrapped around cursive name lettering',
    filename: 'botanical-tattoo-style.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'Wildflower',
    featured: true,
  },

  // 11. Script Tattoo Lettering (Lettering Specific)
  {
    id: 'script-lettering-gallery',
    name: 'Script Tattoo Lettering',
    slug: 'script-lettering',
    type: 'lettering',
    category: 'Lettering',
    shortDescription: 'Flowing handwritten and calligraphic strokes for names and quotes.',
    fullDescription: 'Script tattoo lettering brings fluid pen strokes and graceful loops to personal quotes, family names, and meaningful words.',
    characteristics: ['Flowing cursive loops', 'High legibility', 'Graceful ascenders', 'Personal touch'],
    suitablePlacement: ['Forearm', 'Wrist', 'Collarbone', 'Ribs'],
    relatedFontCategories: ['script', 'cursive', 'calligraphy'],
    imageUrl: '/images/tattoos/script-lettering-artwork.svg',
    altText: 'Script tattoo lettering artwork featuring flowing cursive word Amor Fati',
    filename: 'script-lettering-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'Amor Fati',
  },

  // 12. Urdu Calligraphy Tattoo (Multilingual Visual)
  {
    id: 'urdu-calligraphy-gallery',
    name: 'Urdu Naskh & Nastaliq Tattoo',
    slug: 'urdu-tattoo',
    type: 'multilingual',
    category: 'Multilingual',
    shortDescription: 'Authentic Urdu & Persian calligraphy with Nastaliq script flow.',
    fullDescription: 'Urdu tattoo lettering showcases authentic right-to-left Nastaliq and Naskh scripts, rendering names and spiritual quotes with traditional calligraphic balance.',
    characteristics: ['Nastaliq script flow', 'RTL direction accuracy', 'Elegant diacritics', 'Poetic heritage'],
    suitablePlacement: ['Forearm', 'Chest', 'Inner Arm', 'Ribcage'],
    relatedFontCategories: ['calligraphy', 'script'],
    imageUrl: '/images/tattoos/urdu-calligraphy-artwork.svg',
    altText: 'Urdu tattoo lettering artwork showing authentic Nastaliq script for Hamesha',
    filename: 'urdu-calligraphy-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'ہمیشہ (Forever)',
    language: 'Urdu',
    script: 'Nastaliq',
  },

  // 13. Arabic Kufic Tattoo (Multilingual Visual)
  {
    id: 'arabic-kufic-gallery',
    name: 'Arabic Calligraphy Tattoo',
    slug: 'arabic-tattoo',
    type: 'multilingual',
    category: 'Multilingual',
    shortDescription: 'Traditional Arabic Thuluth and Kufic lettering.',
    fullDescription: 'Arabic tattoo calligraphy ranges from geometric Kufic structures to flowing Thuluth and Diwani styles, creating striking spiritual and name tattoos.',
    characteristics: ['RTL direction', 'Geometric Kufic lines', 'Thuluth flourishes', 'Spiritual balance'],
    suitablePlacement: ['Forearm', 'Wrist', 'Shoulder Blade', 'Ribs'],
    relatedFontCategories: ['calligraphy', 'gothic'],
    imageUrl: '/images/tattoos/arabic-calligraphy-artwork.svg',
    altText: 'Arabic tattoo calligraphy artwork showing traditional Thuluth lettering for Ilal Abad',
    filename: 'arabic-calligraphy-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'إلى الأبد',
    language: 'Arabic',
    script: 'Arabic',
  },

  // 14. Hindi Devanagari Tattoo (Multilingual Visual)
  {
    id: 'hindi-devanagari-gallery',
    name: 'Hindi Devanagari Tattoo',
    slug: 'hindi-tattoo',
    type: 'multilingual',
    category: 'Multilingual',
    shortDescription: 'Devanagari script with traditional shirorekha top bar line.',
    fullDescription: 'Hindi Devanagari tattoos display distinct horizontal headline structures (shirorekha) and expressive curves for names, mantras, and Sanskrit shlokas.',
    characteristics: ['Shirorekha headline', 'Sacred Sanskrit aesthetic', 'Symmetrical balance', 'Mantra heritage'],
    suitablePlacement: ['Forearm', 'Wrist', 'Back of Neck', 'Chest'],
    relatedFontCategories: ['calligraphy', 'serif'],
    imageUrl: '/images/tattoos/hindi-devanagari-artwork.svg',
    altText: 'Hindi Devanagari tattoo lettering artwork with Sanskrit shirorekha headline for Hamesha',
    filename: 'hindi-devanagari-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'ہمیشہ / हमेशा',
    language: 'Hindi',
    script: 'Devanagari',
  },

  // 15. Roman Numeral Date Tattoo (Name & Date Gallery)
  {
    id: 'roman-numeral-date-gallery',
    name: 'Roman Numeral Date Tattoo',
    slug: 'roman-numeral-date',
    type: 'date',
    category: 'Date & Number',
    shortDescription: 'Birth dates, wedding anniversaries, and memorial years in clean Roman numerals.',
    fullDescription: 'Roman numeral date tattoos preserve significant life milestones in timeless, structured digits, offering clean elegance for wrists, collarbones, and ribs.',
    characteristics: ['Structured serif digits', 'Clean minimal aesthetic', 'Timeless milestone', 'High readability'],
    suitablePlacement: ['Wrist', 'Collarbone', 'Ribs', 'Forearm', 'Ankle'],
    relatedFontCategories: ['serif', 'minimalist', 'gothic'],
    imageUrl: '/images/tattoos/roman-numeral-date-artwork.svg',
    altText: 'Roman numeral date tattoo artwork displaying XIII.VI.MMXXVI in sharp serif digits',
    filename: 'roman-numeral-date-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'XIII.VI.MMXXVI',
  },

  // 16. Family Name Tattoo (Name Gallery)
  {
    id: 'family-name-gallery',
    name: 'Family Name Tattoo',
    slug: 'family-name-tattoo',
    type: 'name',
    category: 'Name Tattoo',
    shortDescription: 'Children and family names rendered in script or Old English with banners.',
    fullDescription: 'Family name tattoos celebrate heritage and love. They are often rendered in flowing script or bold Old English lettering accompanied by ribbon banners or dates.',
    characteristics: ['Ribbon banner options', 'Family heritage', 'High contrast lettering', 'Personal tribute'],
    suitablePlacement: ['Chest', 'Forearm', 'Upper Back', 'Ribcage'],
    relatedFontCategories: ['old-english', 'script', 'blackletter'],
    imageUrl: '/images/tattoos/family-name-tattoo-artwork.svg',
    altText: 'Family name tattoo artwork with banner ribbon and Old English lettering for Khalid',
    filename: 'family-name-tattoo-artwork.svg',
    licenseInfo: 'Creative Commons Open License (TattooFontLab Asset)',
    creator: 'TattooFontLab Design Team',
    tryPresetText: 'Khalid & Family',
  },
];
