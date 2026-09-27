import type { FontCategoryId } from './fonts';

export interface BeautifulTattoo {
  id: string;
  slug: string;
  title: string;
  category: 'Floral' | 'Animal' | 'Nature' | 'Symbol' | 'Lettering' | 'Geometric' | 'Minimal' | 'Portrait';
  style: 'Fine Line' | 'Minimalist' | 'Blackwork' | 'Traditional' | 'Realism' | 'Black & Grey' | 'Watercolor' | 'Geometric' | 'Botanical' | 'Lettering' | 'Gothic' | 'Ornamental' | 'Chicano';
  placement: 'Arm' | 'Forearm' | 'Wrist' | 'Hand' | 'Finger' | 'Shoulder' | 'Chest' | 'Back' | 'Neck' | 'Rib' | 'Leg' | 'Thigh' | 'Ankle' | 'Foot' | 'Calf' | 'Sternum';
  size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Sleeve';
  colorType: 'Black & Grey' | 'Black' | 'Color';
  shortDescription: string;
  documentedMeaning?: string;
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
  relatedStyles: string[];
  relatedTags: string[];
  targetAudience?: 'women' | 'men' | 'unisex';
}

export interface BeautifulStyleCard {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  altText: string;
  targetLink: string;
}

export interface BeautifulPlacementCard {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  altText: string;
}

export const BEAUTIFUL_TATTOOS: BeautifulTattoo[] = [
  {
    id: 'beautiful-wildflower-bouquet-fineline',
    slug: 'beautiful-wildflower-bouquet-fineline',
    title: 'Delicate Fine-Line Wildflower Bouquet',
    category: 'Floral',
    style: 'Fine Line',
    placement: 'Forearm',
    size: 'Medium',
    colorType: 'Black & Grey',
    shortDescription: 'Elegant hand-drawn wildflower stems featuring lavender, daisies, and delicate botanical leaves with single-needle line precision.',
    commonInterpretation: 'Wildflowers are commonly associated with freedom, natural beauty, resilience, and personal growth.',
    image: '/images/beautiful/wildflower-bouquet-fineline.svg',
    thumbnail: '/images/beautiful/wildflower-bouquet-fineline.svg',
    altText: 'Delicate fine line wildflower bouquet tattoo design on inner forearm',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'BLOOM',
    relatedStyles: ['fine-line', 'botanical'],
    relatedTags: ['Wildflowers', 'Fine Line', 'Forearm', 'Botanical', 'Floral', 'Delicate'],
    targetAudience: 'women'
  },
  {
    id: 'beautiful-monarch-butterfly-transformation',
    slug: 'beautiful-monarch-butterfly-transformation',
    title: 'Minimalist Monarch Butterfly & Star Dots',
    category: 'Animal',
    style: 'Minimalist',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Crisp micro-line monarch butterfly silhouette with subtle dotwork stippling and twinkling sparkle accents.',
    commonInterpretation: 'Butterflies are widely recognized as enduring symbols of transformation, new beginnings, and freedom.',
    image: '/images/beautiful/monarch-butterfly-minimalist.svg',
    thumbnail: '/images/beautiful/monarch-butterfly-minimalist.svg',
    altText: 'Minimalist monarch butterfly tattoo design on wrist skin',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'REBIRTH',
    relatedStyles: ['minimalist', 'fine-line'],
    relatedTags: ['Butterfly', 'Minimalist', 'Wrist', 'Transformation', 'Small Tattoo'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-chicano-script-family',
    slug: 'beautiful-chicano-script-family',
    title: 'Sweeping Chicano Calligraphy "Family Loyalty"',
    category: 'Lettering',
    style: 'Lettering',
    placement: 'Arm',
    size: 'Large',
    colorType: 'Black & Grey',
    shortDescription: 'High-contrast Chicano calligraphy script with elaborate flourishes, drop shadows, and delicate filigree swirls.',
    commonInterpretation: 'Lettering tattoos turn meaningful words into visual statements representing ancestral pride and devotion.',
    image: '/images/beautiful/chicano-script-family.svg',
    thumbnail: '/images/beautiful/chicano-script-family.svg',
    altText: 'Sweeping Chicano lettering tattoo reading Family Loyalty on arm',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'FAMILY LOYALTY',
    relatedStyles: ['script', 'cursive', 'gothic'],
    relatedTags: ['Chicano', 'Script', 'Lettering', 'Family', 'Arm Tattoo'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-sacred-geometry-compass',
    slug: 'beautiful-sacred-geometry-compass',
    title: 'Geometric Sun & Arrow Compass Mandala',
    category: 'Geometric',
    style: 'Geometric',
    placement: 'Back',
    size: 'Large',
    colorType: 'Black',
    shortDescription: 'Symmetrical sacred geometry compass featuring stippled sun rays, concentric rings, and fine directional arrows.',
    commonInterpretation: 'Compass and sun symbols commonly represent guidance, finding one’s direction, and internal light.',
    image: '/images/beautiful/sacred-geometry-compass.svg',
    thumbnail: '/images/beautiful/sacred-geometry-compass.svg',
    altText: 'Sacred geometry compass tattoo design on upper back',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'NORTH STAR',
    relatedStyles: ['geometric', 'fine-line'],
    relatedTags: ['Geometric', 'Compass', 'Back', 'Sun', 'Sacred Geometry', 'Guidance'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-blackwork-crawling-panther',
    slug: 'beautiful-blackwork-crawling-panther',
    title: 'Bold Blackwork Panther & Botanical Leaves',
    category: 'Animal',
    style: 'Blackwork',
    placement: 'Leg',
    size: 'Large',
    colorType: 'Black',
    shortDescription: 'Heavy-contrast blackwork crawling panther framed by high-contrast palm fronds and crisp skin breaks.',
    commonInterpretation: 'Blackwork panthers traditionally embody strength, stealth, raw power, and courage under pressure.',
    image: '/images/beautiful/blackwork-panther-botanical.svg',
    thumbnail: '/images/beautiful/blackwork-panther-botanical.svg',
    altText: 'Bold blackwork panther tattoo design on calf leg',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'stencil',
    presetText: 'POWER',
    relatedStyles: ['blackwork', 'traditional'],
    relatedTags: ['Panther', 'Blackwork', 'Leg', 'Calf', 'Power', 'Animal'],
    targetAudience: 'men'
  },
  {
    id: 'beautiful-crescent-moon-lotus-unalome',
    slug: 'beautiful-crescent-moon-lotus-unalome',
    title: 'Celestial Crescent Moon & Lotus Unalome',
    category: 'Symbol',
    style: 'Fine Line',
    placement: 'Sternum',
    size: 'Small',
    colorType: 'Black & Grey',
    shortDescription: 'Ornate fine-line crescent moon enveloping a sacred lotus flower with dangling dotwork Unalome beads.',
    commonInterpretation: 'The moon and lotus together symbolize intuition, spiritual growth, harmony, and grace.',
    image: '/images/beautiful/moon-lotus-unalome.svg',
    thumbnail: '/images/beautiful/moon-lotus-unalome.svg',
    altText: 'Celestial crescent moon and lotus unalome tattoo on chest sternum',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'calligraphy',
    presetText: 'HARMONY',
    relatedStyles: ['fine-line', 'ornamental'],
    relatedTags: ['Moon', 'Lotus', 'Unalome', 'Sternum', 'Fine Line', 'Celestial'],
    targetAudience: 'women'
  },
  {
    id: 'beautiful-old-english-surname',
    slug: 'beautiful-old-english-surname',
    title: 'Gothic Old English Shoulder Arch',
    category: 'Lettering',
    style: 'Gothic',
    placement: 'Shoulder',
    size: 'Medium',
    colorType: 'Black',
    shortDescription: 'Deep black Old English gothic typography arched cleanly over the shoulder blade with diamond serifs.',
    commonInterpretation: 'Old English letterforms carry historic medieval gravity representing lineage, honor, and strength.',
    image: '/images/beautiful/gothic-old-english-shoulder.svg',
    thumbnail: '/images/beautiful/gothic-old-english-shoulder.svg',
    altText: 'Gothic Old English arched tattoo lettering on shoulder blade',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'old-english',
    presetText: 'HERITAGE',
    relatedStyles: ['gothic', 'old-english'],
    relatedTags: ['Old English', 'Gothic', 'Lettering', 'Shoulder', 'Name Tattoo'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-watercolor-hummingbird',
    slug: 'beautiful-watercolor-hummingbird',
    title: 'Vibrant Watercolor Hummingbird & Nectar Flower',
    category: 'Animal',
    style: 'Watercolor',
    placement: 'Rib',
    size: 'Medium',
    colorType: 'Color',
    shortDescription: 'A delicate hummingbird with energetic splashes of teal, magenta, and gold watercolor paint effects.',
    commonInterpretation: 'Hummingbirds represent joy, lightness of heart, resilience, and savoring every moment of life.',
    image: '/images/beautiful/watercolor-hummingbird.svg',
    thumbnail: '/images/beautiful/watercolor-hummingbird.svg',
    altText: 'Colorful watercolor hummingbird tattoo design on rib cage',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'cursive',
    presetText: 'JOYFUL',
    relatedStyles: ['watercolor', 'fine-line'],
    relatedTags: ['Hummingbird', 'Watercolor', 'Rib Tattoo', 'Color', 'Joy'],
    targetAudience: 'women'
  },
  {
    id: 'beautiful-japanese-dragon-sleeve',
    slug: 'beautiful-japanese-dragon-sleeve',
    title: 'Japanese Irezumi Cloud Dragon Half-Sleeve',
    category: 'Portrait',
    style: 'Realism',
    placement: 'Arm',
    size: 'Sleeve',
    colorType: 'Black & Grey',
    shortDescription: 'Classic Japanese Irezumi dragon coiling through traditional wind bars, clouds, and sakura blooms.',
    commonInterpretation: 'Dragons in East Asian traditions symbolize wisdom, protective power, good fortune, and majesty.',
    image: '/images/beautiful/japanese-dragon-sleeve.svg',
    thumbnail: '/images/beautiful/japanese-dragon-sleeve.svg',
    altText: 'Japanese Irezumi dragon tattoo half sleeve on arm',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'gothic',
    presetText: 'WISDOM',
    relatedStyles: ['realism', 'blackwork'],
    relatedTags: ['Japanese', 'Dragon', 'Irezumi', 'Arm Sleeve', 'Wisdom'],
    targetAudience: 'men'
  },
  {
    id: 'beautiful-arabic-calligraphy-peace',
    slug: 'beautiful-arabic-calligraphy-peace',
    title: 'Arabic Thuluth Calligraphy "Salam" (Peace)',
    category: 'Lettering',
    style: 'Lettering',
    placement: 'Wrist',
    size: 'Small',
    colorType: 'Black',
    shortDescription: 'Flowing Thuluth script Arabic calligraphy rendering the word Salam with proper right-to-left glyph shaping.',
    commonInterpretation: 'Arabic script tattoos offer poetic aesthetic beauty while carrying messages of tranquility and devotion.',
    image: '/images/beautiful/arabic-calligraphy-salam.svg',
    thumbnail: '/images/beautiful/arabic-calligraphy-salam.svg',
    altText: 'Arabic Thuluth calligraphy tattoo design reading Salam on inner wrist',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'calligraphy',
    presetText: 'سلام',
    relatedStyles: ['calligraphy', 'script'],
    relatedTags: ['Arabic', 'Calligraphy', 'Salam', 'Peace', 'Multilingual', 'Wrist'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-mountain-pine-forest',
    slug: 'beautiful-mountain-pine-forest',
    title: 'Minimalist Mountain Range & Pine Forest Band',
    category: 'Nature',
    style: 'Minimalist',
    placement: 'Forearm',
    size: 'Medium',
    colorType: 'Black & Grey',
    shortDescription: 'Panoramic mountain peaks framed by silhouette pine trees and a circular setting sun.',
    commonInterpretation: 'Mountains and pine forests represent stability, love for adventure, endurance, and quiet strength.',
    image: '/images/beautiful/mountain-pine-forest.svg',
    thumbnail: '/images/beautiful/mountain-pine-forest.svg',
    altText: 'Minimalist mountain peaks and pine forest armband tattoo on forearm',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'minimalist',
    presetText: 'EXPLORE',
    relatedStyles: ['minimalist', 'fine-line'],
    relatedTags: ['Mountain', 'Nature', 'Forest', 'Forearm', 'Minimalist', 'Adventure'],
    targetAudience: 'unisex'
  },
  {
    id: 'beautiful-fine-line-rose-compass',
    slug: 'beautiful-fine-line-rose-compass',
    title: 'Fine-Line Botanical Rose & Vintage Compass',
    category: 'Floral',
    style: 'Fine Line',
    placement: 'Thigh',
    size: 'Large',
    colorType: 'Black & Grey',
    shortDescription: 'Intricate blooming rose layered over a vintage navigation compass with soft stippled shading.',
    commonInterpretation: 'Combining a rose with a compass signifies navigating love, life passion, and staying true to one’s journey.',
    image: '/images/beautiful/fineline-rose-compass.svg',
    thumbnail: '/images/beautiful/fineline-rose-compass.svg',
    altText: 'Fine line botanical rose and vintage compass tattoo on thigh',
    source: 'TattooFontLab Original Design',
    creator: 'TattooFontLab Studio',
    license: 'Royalty-Free Visual Inspiration',
    attributionRequired: false,
    generatorCategory: 'script',
    presetText: 'PASSION',
    relatedStyles: ['fine-line', 'botanical'],
    relatedTags: ['Rose', 'Compass', 'Fine Line', 'Thigh', 'Floral', 'Love'],
    targetAudience: 'women'
  }
];

export const BEAUTIFUL_STYLES_CARDS: BeautifulStyleCard[] = [
  {
    slug: 'fine-line',
    name: 'Fine Line Tattoos',
    shortDescription: 'Delicate, micro-needle designs created with clean lines and subtle visual detail.',
    image: '/images/beautiful/wildflower-bouquet-fineline.svg',
    altText: 'Fine line tattoo example',
    targetLink: '/tattoo-styles/fine-line'
  },
  {
    slug: 'minimalist',
    name: 'Minimalist Tattoos',
    shortDescription: 'Clean, understated concepts using limited elements, negative space, and elegant shapes.',
    image: '/images/beautiful/monarch-butterfly-minimalist.svg',
    altText: 'Minimalist tattoo example',
    targetLink: '/tattoo-styles/minimalist'
  },
  {
    slug: 'blackwork',
    name: 'Blackwork Tattoos',
    shortDescription: 'Bold black ink fills, high-contrast geometry, and intense graphic visual statement.',
    image: '/images/beautiful/blackwork-panther-botanical.svg',
    altText: 'Blackwork tattoo example',
    targetLink: '/tattoo-styles/blackwork'
  },
  {
    slug: 'gothic',
    name: 'Gothic & Old English',
    shortDescription: 'Dramatic medieval lettering, diamond serifs, and bold historical blackletter typography.',
    image: '/images/beautiful/gothic-old-english-shoulder.svg',
    altText: 'Gothic Old English lettering example',
    targetLink: '/tattoo-styles/gothic'
  },
  {
    slug: 'japanese',
    name: 'Japanese Irezumi',
    shortDescription: 'Rich oriental motifs featuring dragons, koi, waves, and traditional Japanese folklore.',
    image: '/images/beautiful/japanese-dragon-sleeve.svg',
    altText: 'Japanese Irezumi tattoo example',
    targetLink: '/tattoo-styles/japanese'
  },
  {
    slug: 'geometric',
    name: 'Geometric & Mandalas',
    shortDescription: 'Symmetrical patterns, sacred geometry, dotwork stippling, and structured shapes.',
    image: '/images/beautiful/sacred-geometry-compass.svg',
    altText: 'Geometric mandala tattoo example',
    targetLink: '/tattoo-styles/geometric'
  }
];

export const BEAUTIFUL_PLACEMENTS_CARDS: BeautifulPlacementCard[] = [
  { slug: 'arm', name: 'Arm Tattoos', shortDescription: 'Versatile canvas ideal for half-sleeves, lettering, and medium-to-large pieces.', image: '/images/beautiful/japanese-dragon-sleeve.svg', altText: 'Arm tattoo placement' },
  { slug: 'forearm', name: 'Forearm Tattoos', shortDescription: 'Highly visible placement perfect for script, wildflowers, and fine-line art.', image: '/images/beautiful/wildflower-bouquet-fineline.svg', altText: 'Forearm tattoo placement' },
  { slug: 'wrist', name: 'Wrist Tattoos', shortDescription: 'Delicate, intimate spot great for micro symbols, dates, and small butterflies.', image: '/images/beautiful/monarch-butterfly-minimalist.svg', altText: 'Wrist tattoo placement' },
  { slug: 'shoulder', name: 'Shoulder Tattoos', shortDescription: 'Flat upper back area suitable for arched gothic lettering and botanical floral curves.', image: '/images/beautiful/gothic-old-english-shoulder.svg', altText: 'Shoulder tattoo placement' },
  { slug: 'back', name: 'Back Tattoos', shortDescription: 'Expansive placement ideal for sacred geometry mandalas, angels, and large motifs.', image: '/images/beautiful/sacred-geometry-compass.svg', altText: 'Back tattoo placement' },
  { slug: 'rib', name: 'Rib & Sternum Tattoos', shortDescription: 'Flowing anatomical placement perfect for watercolor art, moons, and under-bust wings.', image: '/images/beautiful/watercolor-hummingbird.svg', altText: 'Rib tattoo placement' },
];
