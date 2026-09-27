import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'public', 'images', 'famous');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const famousItems = [
  {
    filename: 'angelina-khmer-yantra.png',
    title: 'Khmer Yantra',
    subtitle: 'Sacred Protection Script',
    accent: '#A855F7',
    lines: ['៛៛ ៛៛ ៛៛', '៛ ៛ ៛ ៛ ៛', '៛៛ ៛៛ ៛៛', '៛ ៛ ៛ ៛ ៛', '៛៛ ៛៛ ៛៛'],
    style: 'SACRED KHMER SCRIPT'
  },
  {
    filename: 'dwayne-johnson-polynesian.png',
    title: 'Samoan Pe’a',
    subtitle: 'Polynesian Chest Half-Sleeve',
    accent: '#3B82F6',
    lines: ['▲▼▲▼▲▼▲▼', '◄►◄►◄►◄►', '▲▼▲▼▲▼▲▼', 'MANA & ANCESTORS'],
    style: 'POLYNESIAN TRIBAL'
  },
  {
    filename: 'david-beckham-guardian-angel.png',
    title: 'Guardian Angel',
    subtitle: 'Gothic Back Piece',
    accent: '#EAB308',
    lines: ['† GUARDIAN †', 'WINGS OF FAITH', 'BECKHAM GOTHIC'],
    style: 'GOTHIC REALISM'
  },
  {
    filename: 'rihanna-isis-underbust.png',
    title: 'Goddess Isis',
    subtitle: 'Under-Bust Sternum Wings',
    accent: '#EC4899',
    lines: ['𓋹 GODDESS ISIS 𓋹', 'OUTSTRETCHED WINGS', 'CLARA TRIBUTE'],
    style: 'FINE LINE EGYPTIAN'
  },
  {
    filename: 'sailor-jerry-swallow.png',
    title: 'Nautical Swallow',
    subtitle: 'Sailor Jerry Homeward Banner',
    accent: '#EF4444',
    lines: ['⚓ HOMEWARD ⚓', 'SAILOR JERRY FLASH', '5,000 MILES'],
    style: 'AMERICAN TRADITIONAL'
  },
  {
    filename: 'chicano-family-first.png',
    title: 'Family First',
    subtitle: 'Chicano Fine-Line Script',
    accent: '#8B5CF6',
    lines: ['~ Family First ~', 'Fine Line Script', 'East LA Legacy'],
    style: 'CHICANO SCRIPT'
  },
  {
    filename: 'japanese-koi-irezumi.png',
    title: 'Japanese Koi',
    subtitle: 'Ascending Dragon Gate Irezumi',
    accent: '#F97316',
    lines: ['鯉 IREZUMI 鯉', 'PERSEVERANCE', 'CHERRY BLOSSOMS'],
    style: 'JAPANESE TRADITIONAL'
  },
  {
    filename: 'fine-line-roman-numerals.png',
    title: 'MMXXVI Date',
    subtitle: 'Minimalist Roman Numerals',
    accent: '#06B6D4',
    lines: ['X I V . V I I I . M M X X V I', 'FINE LINE WRIST', 'COMMEMORATIVE'],
    style: 'MINIMALIST FINE LINE'
  },
  {
    filename: 'sacred-lotus-unalome.png',
    title: 'Lotus & Unalome',
    subtitle: 'Sacred Geometry Spiral',
    accent: '#10B981',
    lines: ['🪷 LOTUS BLOOM 🪷', 'UNALOME SPIRAL', 'ENLIGHTENMENT'],
    style: 'SACRED GEOMETRY'
  },
  {
    filename: 'praying-hands-rosary.png',
    title: 'Praying Hands',
    subtitle: 'Dürer Rosary Memorial',
    accent: '#F59E0B',
    lines: ['🙏 DEVOTION 🙏', 'ALBRECHT DÜRER', 'FAITH & ROSARY'],
    style: 'BLACK & GREY REALISM'
  },
  {
    filename: 'gothic-surname-backpiece.png',
    title: 'Surname Arched',
    subtitle: 'Old English Blackletter Back',
    accent: '#8B5CF6',
    lines: ['𝔎𝔥𝔞𝔩𝔦𝔡', 'BLACKLETTER', 'FAMILY LEGACY'],
    style: 'OLD ENGLISH GOTHIC'
  },
  {
    filename: 'traditional-crawling-panther.png',
    title: 'Crawling Panther',
    subtitle: 'Classic Traditional Cover-Up',
    accent: '#14B8A6',
    lines: ['🐆 FIERCE PANTHER 🐆', 'TRADITIONAL FLASH', 'BOLD BLACK INK'],
    style: 'TRADITIONAL FLASH'
  },
  {
    filename: 'ouroboros-snake-circle.png',
    title: 'Ouroboros Snake',
    subtitle: 'Serpent Eternity Loop',
    accent: '#6366F1',
    lines: ['🐍 OUROBOROS 🐍', 'ETERNAL CYCLE', 'SELF RENEWAL'],
    style: 'FINE LINE ALCHEMY'
  },
  {
    filename: 'medusa-serpent-portrait.png',
    title: 'Medusa Portrait',
    subtitle: 'Serpent Hair Empowerment',
    accent: '#F43F5E',
    lines: ['🐍 MEDUSA 🐍', 'FINE LINE ARMOR', 'EMPOWERMENT'],
    style: 'REALISM FINE LINE'
  },
  {
    filename: 'sanskrit-om-mantra.png',
    title: 'Sanskrit Om',
    subtitle: 'Devanagari Peace Mantra',
    accent: '#8B5CF6',
    lines: ['ॐ शांतिः शांतिः शांतिः', 'PRIMORDIAL SOUND', 'SACRED MANTRA'],
    style: 'SANSKRIT CALLIGRAPHY'
  },
  {
    filename: 'roaring-lion-crown.png',
    title: 'Roaring Lion',
    subtitle: 'King & Royal Crown',
    accent: '#EAB308',
    lines: ['🦁 KING OF JUNGLE 🦁', 'ROYAL CROWN', 'COURAGE & FAITH'],
    style: 'BLACK & GREY REALISM'
  }
];

function generateSvg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090B10"/>
      <stop offset="50%" stop-color="#111622"/>
      <stop offset="100%" stop-color="#07080D"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${item.accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="600" height="400" fill="url(#bg)"/>
  <circle cx="300" cy="200" r="220" fill="url(#glow)"/>

  <!-- Outer Border Frame -->
  <rect x="20" y="20" width="560" height="360" rx="16" fill="none" stroke="${item.accent}" stroke-opacity="0.3" stroke-width="2" stroke-dasharray="8 4"/>

  <!-- Style Tag -->
  <rect x="200" y="38" width="200" height="26" rx="13" fill="#1E1B4B" stroke="${item.accent}" stroke-opacity="0.6"/>
  <text x="300" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="${item.accent}" text-anchor="middle" letter-spacing="2">
    ${item.style}
  </text>

  <!-- Main Title -->
  <text x="300" y="115" font-family="'Cinzel', Georgia, serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">
    ${item.title}
  </text>

  <text x="300" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#94A3B8" text-anchor="middle">
    ${item.subtitle}
  </text>

  <!-- Decorative Tattoo Flash Box -->
  <rect x="80" y="165" width="440" height="150" rx="12" fill="#0B0E14" stroke="#334155" stroke-width="1.5"/>

  <!-- Tattoo Content Lines -->
  ${item.lines.map((line, idx) => `
    <text x="300" y="${205 + idx * 32}" font-family="Georgia, serif" font-size="${idx === 0 ? 20 : 14}" font-weight="${idx === 0 ? '700' : '600'}" fill="${idx === 0 ? '#FFFFFF' : item.accent}" text-anchor="middle" letter-spacing="1.5">
      ${line}
    </text>
  `).join('')}

  <!-- Footer Watermark -->
  <text x="300" y="355" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="2">
    TATTOO FONTLAB • FAMOUS DESIGNS ARCHIVE
  </text>
</svg>`;
}

famousItems.forEach((item) => {
  const svgContent = generateSvg(item);
  const svgPath = path.join(targetDir, item.filename.replace('.png', '.svg'));
  const pngPath = path.join(targetDir, item.filename);

  fs.writeFileSync(svgPath, svgContent, 'utf8');
  fs.writeFileSync(pngPath, svgContent, 'utf8');
});

console.log(`Successfully generated ${famousItems.length} SVG/PNG visual assets in public/images/famous/`);
