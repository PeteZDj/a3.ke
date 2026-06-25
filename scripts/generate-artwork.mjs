/**
 * Pre-build: writes cinematic SVG posters, backdrops and service heroes to public/images/.
 * Run automatically before `vite build` so IIS serves real image files (not 404 → JS fallback).
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const filmsTs = readFileSync(join(root, 'src/data/films.ts'), 'utf8');

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function wrapTitle(title, maxLen) {
  const words = title.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function buildSvg({ title, subtitle, accent, year, variant }) {
  const w = variant === 'poster' ? 600 : 1920;
  const h = variant === 'poster' ? 900 : variant === 'service' ? 720 : 1080;
  const lines = wrapTitle(title, variant === 'poster' ? 14 : 24);
  const titleSize = variant === 'poster' ? 48 : variant === 'service' ? 64 : 84;
  const lineHeight = variant === 'poster' ? 54 : variant === 'service' ? 72 : 92;
  const titleY = variant === 'poster' ? h - 130 - (lines.length - 1) * lineHeight : h * 0.58;
  const titleX = variant === 'poster' ? 36 : 96;
  const kindY = titleY - 40;
  const titleSpans = lines
    .map((line, i) => `<tspan x="${titleX}" dy="${i === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`)
    .join('');
  const footer = year ? `A3 STUDIOS · ${year}` : 'A3 STUDIOS · NAIROBI';
  const perforations = Array.from({ length: variant === 'poster' ? 8 : 14 }, (_, i) => {
    const y = (h / 14) * i + 24;
    return `<rect x="12" y="${y}" width="8" height="14" rx="2" fill="rgba(255,255,255,0.06)"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="32%" stop-color="${accent}bb"/>
      <stop offset="68%" stop-color="#121218"/>
      <stop offset="100%" stop-color="#060608"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="22%" r="60%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="55%" stop-color="${accent}44"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <linearGradient id="beam" x1="0%" y1="100%" x2="85%" y2="0%">
      <stop offset="0%" stop-color="${accent}66"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
    <linearGradient id="floor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.75)"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0.09"/></feComponentTransfer>
    </filter>
    <filter id="blur"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <ellipse cx="${w * 0.78}" cy="${h * 0.2}" rx="${variant === 'poster' ? 180 : 320}" ry="${variant === 'poster' ? 140 : 240}" fill="${accent}" opacity="0.22" filter="url(#blur)"/>
  <ellipse cx="${w * 0.15}" cy="${h * 0.75}" rx="${variant === 'poster' ? 120 : 200}" ry="${variant === 'poster' ? 100 : 160}" fill="${accent}" opacity="0.14" filter="url(#blur)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <rect width="${w}" height="${h}" fill="url(#beam)" opacity="0.5"/>
  ${perforations}
  <line x1="${titleX}" y1="${kindY - 28}" x2="${titleX + 48}" y2="${kindY - 28}" stroke="${accent}" stroke-width="3" opacity="0.9"/>
  <rect width="${w}" height="${h}" fill="url(#floor)"/>
  <rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.4"/>
  <text x="${titleX}" y="${kindY}" fill="rgba(255,255,255,0.7)" font-family="system-ui,sans-serif" font-size="${variant === 'poster' ? 11 : 13}" letter-spacing="0.32em" font-weight="600">${esc(subtitle.toUpperCase())}</text>
  <text x="${titleX}" y="${titleY}" fill="#ffffff" font-family="Georgia,serif" font-size="${titleSize}" font-weight="700" letter-spacing="-0.025em">${titleSpans}</text>
  <text x="${titleX}" y="${h - (variant === 'poster' ? 40 : 52)}" fill="rgba(255,255,255,0.5)" font-family="system-ui,sans-serif" font-size="${variant === 'poster' ? 11 : 14}" letter-spacing="0.14em">${footer}</text>
</svg>`;
}

// Parse film entries from films.ts
const films = [];
const blockRe = /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?year:\s*(\d+)[\s\S]*?kind:\s*'([^']+)'[\s\S]*?accent:\s*'([^']+)'/g;
let m;
while ((m = blockRe.exec(filmsTs)) !== null) {
  films.push({ slug: m[1], title: m[2], year: Number(m[3]), kind: m[4], accent: m[5] });
}

const services = [
  { slug: 'dp-movies', title: 'DP / Movie Gigs', accent: '#e8b23a' },
  { slug: 'commercial', title: 'Commercial Videos', accent: '#3b82f6' },
  { slug: 'music-videos', title: 'Music Videos', accent: '#db2777' },
  { slug: 'real-estate', title: 'Real Estate Videos', accent: '#16a34a' },
  { slug: 'events', title: 'Event Videos', accent: '#ea580c' },
  { slug: 'weddings', title: 'Wedding Videos', accent: '#d97706' },
  { slug: 'sport', title: 'Sport Videos', accent: '#dc2626' },
  { slug: 'community', title: 'Community / NGO', accent: '#6b7280' },
];

const postersDir = join(root, 'public/images/posters');
const backdropsDir = join(root, 'public/images/backdrops');
const servicesDir = join(root, 'public/images/services');
mkdirSync(postersDir, { recursive: true });
mkdirSync(backdropsDir, { recursive: true });
mkdirSync(servicesDir, { recursive: true });

let count = 0;
for (const f of films) {
  writeFileSync(join(postersDir, `${f.slug}.svg`), buildSvg({ title: f.title, subtitle: f.kind, accent: f.accent, year: f.year, variant: 'poster' }));
  writeFileSync(join(backdropsDir, `${f.slug}.svg`), buildSvg({ title: f.title, subtitle: f.kind, accent: f.accent, year: f.year, variant: 'backdrop' }));
  count += 2;
}
for (const s of services) {
  writeFileSync(join(servicesDir, `${s.slug}.svg`), buildSvg({ title: s.title, subtitle: 'A3 Production', accent: s.accent, variant: 'service' }));
  count += 1;
}
console.log(`Generated ${count} artwork files (${films.length} films + ${services.length} services).`);
