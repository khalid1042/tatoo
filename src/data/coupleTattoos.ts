import type { FontCategoryId } from './fonts';

export interface CoupleTattoo {
  id: string;
  slug: string;
  title: string;
  category: 'Matching' | 'Complementary' | 'Connected' | 'Minimalist' | 'Name' | 'Initial' | 'Date' | 'Quote' | 'Symbol' | 'Cute';
  relationshipType: 'Couples' | 'Married' | 'Engaged' | 'Partners' | 'Long Distance' | 'Best Friends';
  style: 'Minimalist' | 'Fine Line' | 'Script' | 'Gothic' | 'Traditional' | 'Blackwork' | 'Geometric' | 'Botanical' | 'Watercolor';
  placement: 'Wrist' | 'Forearm' | 'Arm' | 'Hand' | 'Finger' | 'Shoulder' | 'Chest' | 'Back' | 'Ankle' | 'Leg' | 'Rib';
  size: 'Tiny' | 'Small' | 'Medium' | 'Large';
  colorType: 'Black' | 'Black & Grey' | 'Color';
  shortDescription: string;
  commonInterpretation: string;
  image: string;
  thumbnail: string;
  altText: string;
  source: string;
  creator: string;
  license: string;
  attributionRequired: boolean;
  generatorCategory?: FontCategoryId;
  presetText?: string;
  tags: string[];
}

export interface CoupleCategoryCard {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  altText: string;
}

export const COUPLE_TATTOOS: CoupleTattoo[] = [
  {
    id: 'couple-sun-and-moon-minimalist',
    slug: 'couple-sun-and-moon-minimalist',
    title: 'Complementary Sun & Crescent Moon',
    category: 'Complementary',
    relationshipType: 'Couples',
    style: 'Minimalist',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Paired fine-line tattoos featuring a glowing radiant sun for one partner and a serene crescent moon for the other.',
    commonInterpretation: 'The sun and moon represent opposite yet complementary energies that form a complete whole together.',
    image: '/images/couples/sun-moon-minimalist.svg',
    thumbnail: '/images/couples/sun-moon-minimalist.svg',
    altText: 'Complementary sun and moon minimalist wrist tattoos for couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'ALWAYS',
    tags: ['Sun', 'Moon', 'Complementary', 'Wrist', 'Minimalist', 'Couples']
  },
  {
    id: 'couple-lock-and-key-vintage',
    slug: 'couple-lock-and-key-vintage',
    title: 'Vintage Ornate Lock & Skeleton Key',
    category: 'Connected',
    relationshipType: 'Married',
    style: 'Fine Line',
    placement: 'Forearm',
    size: 'Medium',
    colorType: 'Black & Grey',
    shortDescription: 'Detailed fine-line heart-shaped padlock for one partner and a matching ornate skeleton key for the other.',
    commonInterpretation: 'The lock and key represent mutual trust, holding the key to one another’s heart, and exclusive bond.',
    image: '/images/couples/lock-and-key-vintage.svg',
    thumbnail: '/images/couples/lock-and-key-vintage.svg',
    altText: 'Ornate lock and key forearm tattoos for married couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'UNLOCKED',
    tags: ['Lock', 'Key', 'Married', 'Forearm', 'Fine Line', 'Connected']
  },
  {
    id: 'couple-king-queen-crowns',
    slug: 'couple-king-queen-crowns',
    title: 'Minimalist King & Queen Crowns',
    category: 'Matching',
    relationshipType: 'Engaged',
    style: 'Minimalist',
    placement: 'Finger',
    size: 'Tiny',
    colorType: 'Black',
    shortDescription: 'Micro-line royal king crown and queen tiara silhouettes placed on the ring finger or inner wrist.',
    commonInterpretation: 'Crown tattoos symbolize mutual respect, royal partnership, and building an empire together.',
    image: '/images/couples/king-queen-crowns.svg',
    thumbnail: '/images/couples/king-queen-crowns.svg',
    altText: 'Minimalist King and Queen crown ring finger tattoos for engaged couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'old-english',
    presetText: 'K & Q',
    tags: ['Crowns', 'King Queen', 'Finger', 'Ring Finger', 'Tiny', 'Engaged']
  },
  {
    id: 'couple-matching-initials-heart',
    slug: 'couple-matching-initials-heart',
    title: 'Interlocking Initials "A ♡ B" Script',
    category: 'Initial',
    relationshipType: 'Couples',
    style: 'Script',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Sweeping calligraphic script joining partner initials with a delicate central micro heart.',
    commonInterpretation: 'Initials commemorate the unique connection between two individuals bound in affection.',
    image: '/images/couples/interlocking-initials-heart.svg',
    thumbnail: '/images/couples/interlocking-initials-heart.svg',
    altText: 'Interlocking script initial tattoo A and B with heart for couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'A ♡ B',
    tags: ['Initials', 'Script', 'Wrist', 'Names', 'Heart', 'Couples']
  },
  {
    id: 'couple-anniversary-roman-numerals',
    slug: 'couple-anniversary-roman-numerals',
    title: 'Matching Roman Numeral Anniversary Date',
    category: 'Date',
    relationshipType: 'Married',
    style: 'Fine Line',
    placement: 'Arm',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Clean, architectural Roman numerals immortalizing a wedding or first meeting date (e.g. XII.VIII.MMXXVI).',
    commonInterpretation: 'Roman numeral date tattoos preserve milestone moments in time with timeless elegance.',
    image: '/images/couples/roman-numeral-date.svg',
    thumbnail: '/images/couples/roman-numeral-date.svg',
    altText: 'Matching Roman numeral anniversary date tattoo on forearm for couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'XII.VIII.MMXXVI',
    tags: ['Roman Numerals', 'Date', 'Anniversary', 'Arm', 'Fine Line', 'Married']
  },
  {
    id: 'couple-connected-puzzle-pieces',
    slug: 'couple-connected-puzzle-pieces',
    title: 'Interlocking Geometric Puzzle Pieces',
    category: 'Connected',
    relationshipType: 'Partners',
    style: 'Geometric',
    placement: 'Ankle',
    size: 'Small',
    colorType: 'Black & Grey',
    shortDescription: 'Two complementary puzzle piece outlines that visually lock together when standing side by side.',
    commonInterpretation: 'Puzzle pieces represent finding the missing piece that makes life feel complete.',
    image: '/images/couples/connected-puzzle-pieces.svg',
    thumbnail: '/images/couples/connected-puzzle-pieces.svg',
    altText: 'Matching interlocking puzzle piece ankle tattoos for partners',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'MATCH',
    tags: ['Puzzle', 'Geometric', 'Ankle', 'Connected', 'Partners']
  },
  {
    id: 'couple-split-quote-lettering',
    slug: 'couple-split-quote-lettering',
    title: 'Split Phrase "To Infinity..." & "...And Beyond"',
    category: 'Quote',
    relationshipType: 'Couples',
    style: 'Script',
    placement: 'Forearm',
    size: 'Medium',
    colorType: 'Black',
    shortDescription: 'A two-part phrase split between partners, completing a meaningful sentence when held together.',
    commonInterpretation: 'Split quotes emphasize that each partner carries a half of a shared narrative.',
    image: '/images/couples/split-quote-lettering.svg',
    thumbnail: '/images/couples/split-quote-lettering.svg',
    altText: 'Split quote lettering tattoo for couples on forearms',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'cursive',
    presetText: 'TO INFINITY...',
    tags: ['Quote', 'Split Quote', 'Script', 'Forearm', 'Lettering', 'Couples']
  },
  {
    id: 'couple-pinky-promise-linework',
    slug: 'couple-pinky-promise-linework',
    title: 'Single-Line Pinky Promise Hands',
    category: 'Cute',
    relationshipType: 'Best Friends',
    style: 'Fine Line',
    placement: 'Arm',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Delicate single-line illustration of two pinky fingers hooked in a timeless promise gesture.',
    commonInterpretation: 'Pinky promises symbolize unshakeable trust, secret pacts, and enduring companionship.',
    image: '/images/couples/pinky-promise-linework.svg',
    thumbnail: '/images/couples/pinky-promise-linework.svg',
    altText: 'Single line pinky promise hands tattoo for partners and best friends',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'PROMISE',
    tags: ['Pinky Promise', 'Linework', 'Fine Line', 'Cute', 'Best Friends']
  },
  {
    id: 'couple-latitude-longitude-coordinates',
    slug: 'couple-latitude-longitude-coordinates',
    title: 'Minimalist Coordinates of Special Meeting Place',
    category: 'Symbol',
    relationshipType: 'Long Distance',
    style: 'Minimalist',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Precise GPS latitude and longitude numbers marking the exact spot where a couple first met or married.',
    commonInterpretation: 'Coordinates ground memories into permanent geographical anchors across distance.',
    image: '/images/couples/coordinates-meeting-place.svg',
    thumbnail: '/images/couples/coordinates-meeting-place.svg',
    altText: 'GPS coordinates tattoo on wrist for long distance couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: '40.7128° N, 74.0060° W',
    tags: ['Coordinates', 'Long Distance', 'Wrist', 'Minimalist', 'Place']
  },
  {
    id: 'couple-matching-nautical-anchors',
    slug: 'couple-matching-nautical-anchors',
    title: 'Matching Fine Line Nautical Anchors',
    category: 'Matching',
    relationshipType: 'Married',
    style: 'Traditional',
    placement: 'Shoulder',
    size: 'Small',
    colorType: 'Black & Grey',
    shortDescription: 'Crisp twin anchors with delicate rope filigree placed on the shoulder or inner forearm.',
    commonInterpretation: 'Anchors symbolize stability, grounding one another during turbulent waters, and hope.',
    image: '/images/couples/matching-nautical-anchors.svg',
    thumbnail: '/images/couples/matching-nautical-anchors.svg',
    altText: 'Matching nautical anchor tattoos for married couples',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'calligraphy',
    presetText: 'ANCHORED',
    tags: ['Anchor', 'Nautical', 'Married', 'Shoulder', 'Traditional']
  },
  {
    id: 'couple-infinity-loop-names',
    slug: 'couple-infinity-loop-names',
    title: 'Infinity Loop Woven with Partner Names',
    category: 'Name',
    relationshipType: 'Couples',
    style: 'Script',
    placement: 'Forearm',
    size: 'Medium',
    colorType: 'Black',
    shortDescription: 'Continuous mathematical infinity symbol seamlessly integrating calligraphic partner names into the lines.',
    commonInterpretation: 'Infinity loops interwoven with names represent boundless love without end.',
    image: '/images/couples/infinity-loop-names.svg',
    thumbnail: '/images/couples/infinity-loop-names.svg',
    altText: 'Infinity symbol tattoo woven with partner names in script',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'FOREVER',
    tags: ['Infinity', 'Names', 'Script', 'Forearm', 'Name Tattoo']
  },
  {
    id: 'couple-wave-and-mountain',
    slug: 'couple-wave-and-mountain',
    title: 'Complementary Ocean Wave & Mountain Peak',
    category: 'Complementary',
    relationshipType: 'Partners',
    style: 'Minimalist',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Geometric circular wave for one partner and matching mountain peak outline for the other.',
    commonInterpretation: 'Waves and mountains symbolize the union of earth and water, stability and movement.',
    image: '/images/couples/wave-and-mountain.svg',
    thumbnail: '/images/couples/wave-and-mountain.svg',
    altText: 'Complementary wave and mountain minimalist tattoos for partners',
    source: 'TattooFontLab Studio Original',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'ELEMENTS',
    tags: ['Wave', 'Mountain', 'Complementary', 'Wrist', 'Nature', 'Partners']
  }
];

export const COUPLE_RELATIONSHIP_TYPES: CoupleCategoryCard[] = [
  { slug: 'married', name: 'Husband & Wife Tattoos', shortDescription: 'Marriage milestones, wedding dates, ring finger initials, and life partnership designs.', image: '/images/couples/roman-numeral-date.svg', altText: 'Husband and Wife tattoos' },
  { slug: 'couples', name: 'Boyfriend & Girlfriend', shortDescription: 'Cute matching symbols, interlocking initials, and complementary fine line art.', image: '/images/couples/sun-moon-minimalist.svg', altText: 'Boyfriend and Girlfriend tattoos' },
  { slug: 'engaged', name: 'Engaged Couple Tattoos', shortDescription: 'Engagement date commemorations, crowns, and matching promise symbols.', image: '/images/couples/king-queen-crowns.svg', altText: 'Engaged couple tattoos' },
  { slug: 'long-distance', name: 'Long-Distance Couples', shortDescription: 'GPS coordinates, split compasses, and connected wave lines across distance.', image: '/images/couples/coordinates-meeting-place.svg', altText: 'Long distance couple tattoos' },
  { slug: 'best-friends', name: 'Best Friend & Companions', shortDescription: 'Pinky promises, puzzle pieces, and shared memory symbols.', image: '/images/couples/pinky-promise-linework.svg', altText: 'Best friend couple style tattoos' },
  { slug: 'partners', name: 'Partners & Companions', shortDescription: 'General matching and complementary designs for all partner combinations.', image: '/images/couples/wave-and-mountain.svg', altText: 'Partner matching tattoos' },
];
