/**
 * Finalise the 6 animation originals:
 *  - composite a clean, correctly-spelled title + kicker onto each poster
 *  - convert posters (portrait) and backdrops (landscape) to WebP
 *  - remove the source PNGs
 *
 * Run after magi has written the PNGs into public/images/{posters,backdrops}.
 */
import sharp from 'sharp';
import { existsSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const postersDir = join(root, 'public/images/posters');
const backdropsDir = join(root, 'public/images/backdrops');

const FILMS = [
  { slug: 'dj24-war-of-sound', title: 'DJ24: War of Sound', accent: '#818cf8' },
  { slug: 'factor-c', title: 'Factor C', accent: '#22d3ee' },
  { slug: 'billionaire-x', title: 'Billionaire X', accent: '#fbbf24' },
  { slug: 'planet-infinite', title: 'Planet Infinite', accent: '#a78bfa' },
  { slug: 'chai-and-the-comet', title: 'Chai & the Comet', accent: '#fb7185' },
  { slug: 'the-last-baobab', title: 'The Last Baobab', accent: '#a3e635' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const PW = 800, PH = 1200;

function posterOverlay(title, accent) {
  const t = esc(title);
  // fit the title to width
  const size = Math.max(46, Math.min(92, Math.floor((PW - 96) / (title.length * 0.52))));
  return Buffer.from(`
<svg width="${PW}" height="${PH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#06070C" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#06070C" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#06070C" stop-opacity="0.96"/>
    </linearGradient>
  </defs>
  <rect x="0" y="${PH * 0.5}" width="${PW}" height="${PH * 0.5}" fill="url(#scrim)"/>
  <g font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
    <text x="${PW / 2}" y="${PH - 168}" fill="${accent}" font-size="26" font-weight="700"
          letter-spacing="6">A3 ANIMATION ORIGINAL</text>
    <text x="${PW / 2}" y="${PH - 96}" fill="#ffffff" font-size="${size}" font-weight="800"
          style="paint-order:stroke;stroke:#06070C;stroke-width:2px;">${t}</text>
    <rect x="${PW / 2 - 44}" y="${PH - 66}" width="88" height="6" rx="3" fill="${accent}"/>
  </g>
</svg>`);
}

let done = 0;
for (const f of FILMS) {
  const posterPng = join(postersDir, `${f.slug}.png`);
  const posterWebp = join(postersDir, `${f.slug}.webp`);
  if (existsSync(posterPng)) {
    await sharp(posterPng)
      .resize(PW, PH, { fit: 'cover', position: 'attention' })
      .composite([{ input: posterOverlay(f.title, f.accent), top: 0, left: 0 }])
      .webp({ quality: 84, effort: 6, smartSubsample: true })
      .toFile(posterWebp);
    unlinkSync(posterPng);
    done++;
  }

  const backPng = join(backdropsDir, `${f.slug}.png`);
  const backWebp = join(backdropsDir, `${f.slug}.webp`);
  if (existsSync(backPng)) {
    await sharp(backPng)
      .resize(1600, 900, { fit: 'cover', position: 'attention' })
      .webp({ quality: 80, effort: 6, smartSubsample: true })
      .toFile(backWebp);
    unlinkSync(backPng);
    done++;
  }
}

console.log(`Finalised ${done} animation artwork files (${FILMS.length} posters + backdrops).`);
