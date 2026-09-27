export interface BottomBodyTattoo {
  id: string;
  name: string;
  placement: 'Lower Back' | 'Hip' | 'Side Waist' | 'Upper Thigh' | 'Outer Thigh' | 'Lower Abdomen';
  style: 'Fine Line' | 'Minimalist' | 'Floral' | 'Ornamental' | 'Script' | 'Geometric' | 'Blackwork' | 'Watercolor';
  size: 'Tiny' | 'Small' | 'Medium' | 'Large';
  designType: 'Flower' | 'Butterfly' | 'Animal' | 'Quote' | 'Name' | 'Symbol' | 'Abstract' | 'Mandala';
  description: string;
  svgVisual: string; // High quality inline vector SVG visual representation
  popularScore: number;
  featured: boolean;
  newest: boolean;
}

// Generate rich vector SVG visuals for each tattoo design
const createTattooSvg = (
  bgGradient: string,
  strokeColor: string,
  accentColor: string,
  pathElements: string,
  title: string
): string => {
  const encodedSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
      <defs>
        <linearGradient id="bg-${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgGradient.split(',')[0] || '#1E1B4B'}" />
          <stop offset="100%" stop-color="${bgGradient.split(',')[1] || '#0F172A'}" />
        </linearGradient>
        <radialGradient id="glow-${title.replace(/\s+/g, '')}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.25" />
          <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#bg-${title.replace(/\s+/g, '')})" rx="16" />
      <circle cx="200" cy="150" r="140" fill="url(#glow-${title.replace(/\s+/g, '')})" />
      
      <!-- Subtle Skin/Body Placement Silhouette Accent -->
      <path d="M40 260 Q 120 230, 200 240 T 360 260" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2" />
      
      <!-- Main Tattoo Art -->
      <g stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        ${pathElements}
      </g>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(encodedSvg)}`;
};

export const BOTTOM_BODY_TATTOOS: BottomBodyTattoo[] = [
  {
    id: 'bt-001',
    name: 'Celestial Crescent & Wild Rose',
    placement: 'Hip',
    style: 'Fine Line',
    size: 'Small',
    designType: 'Flower',
    description: 'An elegant fine-line crescent moon interwoven with delicate wild roses, tailored for subtle hip placement.',
    popularScore: 98,
    featured: true,
    newest: false,
    svgVisual: createTattooSvg(
      '#1E1B4B,#0F172A',
      '#E2E8F0',
      '#C084FC',
      `<path d="M 170 80 A 70 70 0 1 0 230 220 A 55 55 0 1 1 170 80 Z" fill="rgba(192,132,252,0.15)"/>
       <path d="M 190 130 C 170 150, 220 170, 210 190"/>
       <circle cx="210" cy="190" r="12" stroke="#F472B6"/>
       <path d="M 210 178 C 200 170, 190 190, 210 202 C 230 190, 220 170, 210 178 Z" fill="rgba(244,114,182,0.3)"/>
       <circle cx="160" cy="110" r="3" fill="#F8FAFC"/>
       <circle cx="240" cy="130" r="2" fill="#F8FAFC"/>
       <path d="M 180 90 L 184 100 L 194 104 L 184 108 L 180 118 L 176 108 L 166 104 L 176 100 Z" fill="#E2E8F0"/>`,
      'Celestial Crescent & Wild Rose'
    )
  },
  {
    id: 'bt-002',
    name: 'Ornamental Lotus Mandala',
    placement: 'Lower Back',
    style: 'Ornamental',
    size: 'Medium',
    designType: 'Mandala',
    description: 'Symmetrical lotus mandala with cascading lace teardrop chains designed for lower back contour harmony.',
    popularScore: 95,
    featured: true,
    newest: false,
    svgVisual: createTattooSvg(
      '#31103F,#0F172A',
      '#F8FAFC',
      '#E879F9',
      `<path d="M 200 90 C 180 130, 150 150, 130 160 C 160 170, 190 160, 200 210 C 210 160, 240 170, 270 160 C 250 150, 220 130, 200 90 Z" fill="rgba(232,121,249,0.15)"/>
       <path d="M 200 120 C 190 145, 175 155, 160 160 C 180 165, 195 160, 200 190 C 205 160, 220 165, 240 160 C 225 155, 210 145, 200 120 Z"/>
       <circle cx="200" cy="160" r="10" fill="#E879F9"/>
       <path d="M 200 210 Q 180 240, 200 260 Q 220 240, 200 210 Z" fill="rgba(248,250,252,0.4)"/>
       <circle cx="200" cy="270" r="3" fill="#F8FAFC"/>`,
      'Ornamental Lotus Mandala'
    )
  },
  {
    id: 'bt-003',
    name: 'Vertical Script Quote vine',
    placement: 'Side Waist',
    style: 'Script',
    size: 'Medium',
    designType: 'Quote',
    description: 'Flowing vertical cursive calligraphy with subtle botanical tendrils wrapping along the side waist ribcage line.',
    popularScore: 92,
    featured: true,
    newest: true,
    svgVisual: createTattooSvg(
      '#064E3B,#0F172A',
      '#6EE7B7',
      '#34D399',
      `<text x="200" y="80" font-family="serif" font-size="22" font-style="italic" fill="#6EE7B7" text-anchor="middle" transform="rotate(90, 200, 150)">Wild & Free</text>
       <path d="M 200 60 Q 220 110, 180 160 T 220 240" stroke="#34D399" stroke-width="1.5"/>
       <path d="M 195 90 C 180 85, 175 95, 190 100 Z" fill="#34D399"/>
       <path d="M 210 140 C 225 135, 230 145, 215 150 Z" fill="#34D399"/>
       <path d="M 185 190 C 170 185, 165 195, 180 200 Z" fill="#34D399"/>`,
      'Vertical Script Quote vine'
    )
  },
  {
    id: 'bt-004',
    name: 'Botanical Peony Crest',
    placement: 'Upper Thigh',
    style: 'Blackwork',
    size: 'Large',
    designType: 'Flower',
    description: 'Bold blackwork peony blossom with stippled shading and fern fronds sculpted for upper thigh placement.',
    popularScore: 96,
    featured: true,
    newest: false,
    svgVisual: createTattooSvg(
      '#1E293B,#0F172A',
      '#CBD5E1',
      '#94A3B8',
      `<circle cx="200" cy="150" r="45" fill="rgba(203,213,225,0.2)"/>
       <path d="M 200 105 C 170 120, 170 180, 200 195 C 230 180, 230 120, 200 105 Z" fill="rgba(148,163,184,0.3)"/>
       <path d="M 155 150 C 170 120, 230 120, 245 150 C 230 180, 170 180, 155 150 Z"/>
       <path d="M 140 110 Q 180 130, 200 150 T 260 190"/>
       <path d="M 260 110 Q 220 130, 200 150 T 140 190"/>`,
      'Botanical Peony Crest'
    )
  },
  {
    id: 'bt-005',
    name: 'Minimalist Twin Monarch Butterflies',
    placement: 'Lower Abdomen',
    style: 'Minimalist',
    size: 'Small',
    designType: 'Butterfly',
    description: 'Delicate fine-line twin butterflies in flight, subtly placed on the lower abdomen hip bone line.',
    popularScore: 94,
    featured: false,
    newest: true,
    svgVisual: createTattooSvg(
      '#451A03,#0F172A',
      '#FDBA74',
      '#FB923C',
      `<g transform="translate(-30, -20)">
         <path d="M 180 140 C 150 110, 130 150, 175 160 C 130 170, 160 200, 180 170 Z" fill="rgba(253,186,116,0.3)"/>
         <path d="M 180 140 C 210 110, 230 150, 185 160 C 230 170, 200 200, 180 170 Z" fill="rgba(253,186,116,0.3)"/>
         <line x1="180" y1="135" x2="180" y2="175" stroke="#FB923C" stroke-width="3"/>
       </g>
       <g transform="translate(40, 30) scale(0.75)">
         <path d="M 180 140 C 150 110, 130 150, 175 160 C 130 170, 160 200, 180 170 Z" fill="rgba(251,146,60,0.4)"/>
         <path d="M 180 140 C 210 110, 230 150, 185 160 C 230 170, 200 200, 180 170 Z" fill="rgba(251,146,60,0.4)"/>
         <line x1="180" y1="135" x2="180" y2="175" stroke="#FDBA74" stroke-width="3"/>
       </g>`,
      'Minimalist Twin Monarch Butterflies'
    )
  },
  {
    id: 'bt-006',
    name: 'Watercolor Wildflower Cluster',
    placement: 'Outer Thigh',
    style: 'Watercolor',
    size: 'Large',
    designType: 'Flower',
    description: 'Soft pastel watercolor splash background overlaid with fine-line botanical lavender and cornflower linework.',
    popularScore: 91,
    featured: true,
    newest: false,
    svgVisual: createTattooSvg(
      '#0284C7,#0F172A',
      '#38BDF8',
      '#818CF8',
      `<circle cx="180" cy="140" r="50" fill="rgba(56,189,248,0.3)" filter="blur(8px)"/>
       <circle cx="220" cy="170" r="40" fill="rgba(129,140,248,0.35)" filter="blur(8px)"/>
       <path d="M 170 70 Q 190 140, 175 230" stroke="#F8FAFC" stroke-width="2"/>
       <path d="M 210 90 Q 200 160, 220 240" stroke="#F8FAFC" stroke-width="2"/>
       <circle cx="170" cy="90" r="8" fill="#38BDF8"/>
       <circle cx="175" cy="120" r="7" fill="#818CF8"/>
       <circle cx="210" cy="110" r="9" fill="#C084FC"/>
       <circle cx="205" cy="140" r="8" fill="#F472B6"/>`,
      'Watercolor Wildflower Cluster'
    )
  },
  {
    id: 'bt-007',
    name: 'Geometric Snake & Flora',
    placement: 'Outer Thigh',
    style: 'Geometric',
    size: 'Large',
    designType: 'Animal',
    description: 'Minimalist geometric serpent coiled gracefully through geometric diamond framing and botanical leaves.',
    popularScore: 97,
    featured: false,
    newest: true,
    svgVisual: createTattooSvg(
      '#14532D,#0F172A',
      '#4ADE80',
      '#22C55E',
      `<polygon points="200,60 280,150 200,240 120,150" stroke="#4ADE80" stroke-width="2" fill="rgba(74,222,128,0.08)"/>
       <path d="M 150 80 Q 260 110, 160 160 T 250 220" stroke="#F8FAFC" stroke-width="4"/>
       <circle cx="150" cy="80" r="5" fill="#4ADE80"/>
       <path d="M 130 150 C 110 140, 110 160, 130 150 Z" fill="#22C55E"/>
       <path d="M 270 150 C 290 140, 290 160, 270 150 Z" fill="#22C55E"/>`,
      'Geometric Snake & Flora'
    )
  },
  {
    id: 'bt-008',
    name: 'Fine Line Zodiac Constellation',
    placement: 'Hip',
    style: 'Fine Line',
    size: 'Tiny',
    designType: 'Symbol',
    description: 'Subtle micro fine-line starry constellation design tailored for discrete hip bone placement.',
    popularScore: 89,
    featured: false,
    newest: true,
    svgVisual: createTattooSvg(
      '#1E1B4B,#0F172A',
      '#A7F3D0',
      '#6EE7B7',
      `<circle cx="120" cy="180" r="4" fill="#F8FAFC"/>
       <circle cx="170" cy="140" r="5" fill="#A7F3D0"/>
       <circle cx="230" cy="120" r="6" fill="#F8FAFC"/>
       <circle cx="280" cy="160" r="4" fill="#6EE7B7"/>
       <line x1="120" y1="180" x2="170" y2="140" stroke="rgba(248,250,252,0.6)" stroke-dasharray="3,3"/>
       <line x1="170" y1="140" x2="230" y2="120" stroke="rgba(248,250,252,0.6)"/>
       <line x1="230" y1="120" x2="280" y2="160" stroke="rgba(248,250,252,0.6)" stroke-dasharray="3,3"/>
       <path d="M 230 110 L 233 117 L 240 120 L 233 123 L 230 130 L 227 123 L 220 120 L 227 117 Z" fill="#F8FAFC"/>`,
      'Fine Line Zodiac Constellation'
    )
  },
  {
    id: 'bt-009',
    name: 'Ornamental Lace Wings',
    placement: 'Lower Back',
    style: 'Ornamental',
    size: 'Large',
    designType: 'Abstract',
    description: 'Classic early-2000s inspired symmetrical lower back wings updated with modern fine-line lace stippling.',
    popularScore: 93,
    featured: false,
    newest: false,
    svgVisual: createTattooSvg(
      '#4A044E,#0F172A',
      '#F472B6',
      '#E879F9',
      `<path d="M 200 150 Q 120 90, 60 140 Q 120 170, 200 150 Z" fill="rgba(244,114,182,0.2)"/>
       <path d="M 200 150 Q 280 90, 340 140 Q 280 170, 200 150 Z" fill="rgba(244,114,182,0.2)"/>
       <path d="M 200 150 Q 140 130, 90 180 Q 140 190, 200 150 Z" fill="rgba(232,121,249,0.15)"/>
       <path d="M 200 150 Q 260 130, 310 180 Q 260 190, 200 150 Z" fill="rgba(232,121,249,0.15)"/>
       <circle cx="200" cy="150" r="8" fill="#F8FAFC"/>`,
      'Ornamental Lace Wings'
    )
  },
  {
    id: 'bt-010',
    name: 'Minimalist Roman Numerals Date',
    placement: 'Side Waist',
    style: 'Script',
    size: 'Small',
    designType: 'Quote',
    description: 'Crisp, high-precision Roman numeral date lettering placed horizontally along the side waist beltline.',
    popularScore: 90,
    featured: false,
    newest: true,
    svgVisual: createTattooSvg(
      '#1F2937,#0F172A',
      '#9CA3AF',
      '#E5E7EB',
      `<text x="200" y="160" font-family="serif" font-size="24" font-weight="bold" letter-spacing="4" fill="#E5E7EB" text-anchor="middle">XII • V • MMXXIII</text>
       <line x1="80" y1="175" x2="320" y2="175" stroke="rgba(156,163,175,0.4)" stroke-width="1"/>`,
      'Minimalist Roman Numerals Date'
    )
  },
  {
    id: 'bt-011',
    name: 'Botanical Cherry Blossom Branch',
    placement: 'Upper Thigh',
    style: 'Watercolor',
    size: 'Medium',
    designType: 'Flower',
    description: 'Soft pink sakura cherry blossom branch with flowing petals wrapping along the upper thigh curve.',
    popularScore: 95,
    featured: true,
    newest: false,
    svgVisual: createTattooSvg(
      '#831843,#0F172A',
      '#F472B6',
      '#FB7185',
      `<path d="M 90 220 C 150 180, 220 150, 310 80" stroke="#78350F" stroke-width="4"/>
       <circle cx="160" cy="175" r="12" fill="#F472B6"/>
       <circle cx="210" cy="145" r="14" fill="#FB7185"/>
       <circle cx="260" cy="115" r="11" fill="#F472B6"/>
       <circle cx="160" cy="175" r="4" fill="#FEF08A"/>
       <circle cx="210" cy="145" r="4" fill="#FEF08A"/>
       <path d="M 280 150 C 290 170, 310 160, 300 140 Z" fill="#F472B6"/>`,
      'Botanical Cherry Blossom Branch'
    )
  },
  {
    id: 'bt-012',
    name: 'Minimal Sun & Wave Symbol',
    placement: 'Lower Abdomen',
    style: 'Minimalist',
    size: 'Tiny',
    designType: 'Symbol',
    description: 'Ultra-clean micro sun horizon and gentle ocean wave symbol for discrete lower abdomen placement.',
    popularScore: 88,
    featured: false,
    newest: false,
    svgVisual: createTattooSvg(
      '#075985,#0F172A',
      '#7DD3FC',
      '#38BDF8',
      `<path d="M 160 150 A 40 40 0 0 1 240 150 Z" fill="rgba(125,211,252,0.3)" stroke="#7DD3FC"/>
       <line x1="140" y1="150" x2="260" y2="150" stroke="#7DD3FC" stroke-width="2"/>
       <path d="M 140 165 Q 160 155, 180 165 T 220 165 T 260 165" fill="none" stroke="#38BDF8" stroke-width="2"/>
       <line x1="200" y1="95" x2="200" y2="105" stroke="#7DD3FC"/>
       <line x1="165" y1="110" x2="172" y2="117" stroke="#7DD3FC"/>
       <line x1="235" y1="110" x2="228" y2="117" stroke="#7DD3FC"/>`,
      'Minimal Sun & Wave Symbol'
    )
  }
];

export interface TattooFilterState {
  placement: string;
  style: string;
  size: string;
  designType: string;
  searchQuery: string;
  sortBy: 'featured' | 'newest' | 'popular' | 'smallest' | 'largest';
}
