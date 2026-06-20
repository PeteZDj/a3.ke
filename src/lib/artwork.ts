import type { Film } from '../types';

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function wrapTitle(title: string, maxLen: number) {
  const words = title.split(' ');
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

/** Cinematic SVG artwork — used when no photo asset exists in /public/images. */
export function artworkDataUri(film: Film, variant: 'poster' | 'backdrop'): string {
  const w = variant === 'poster' ? 600 : 1920;
  const h = variant === 'poster' ? 900 : 1080;
  const c = film.accent;
  const lines = wrapTitle(film.title, variant === 'poster' ? 14 : 22);
  const titleSize = variant === 'poster' ? 52 : 88;
  const lineHeight = variant === 'poster' ? 58 : 96;
  const titleY = variant === 'poster' ? h - 120 - (lines.length - 1) * lineHeight : h * 0.62;
  const titleX = variant === 'poster' ? 36 : 96;
  const kindY = titleY - 36;
  const titleSpans = lines
    .map(
      (line, i) =>
        `<tspan x="${titleX}" dy="${i === 0 ? 0 : lineHeight}">${esc(line)}</tspan>`,
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c}"/>
      <stop offset="38%" stop-color="${c}99"/>
      <stop offset="72%" stop-color="#141418"/>
      <stop offset="100%" stop-color="#08080a"/>
    </linearGradient>
    <radialGradient id="glow" cx="${variant === 'poster' ? '78%' : '72%'}" cy="${variant === 'poster' ? '18%' : '28%'}" r="55%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.28)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <linearGradient id="beam" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${c}44"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0.07"/></feComponentTransfer>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <rect width="${w}" height="${h}" fill="url(#beam)" opacity="0.55"/>
  <circle cx="${w * 0.82}" cy="${h * 0.22}" r="${variant === 'poster' ? 120 : 220}" fill="${c}" opacity="0.18"/>
  <circle cx="${w * 0.12}" cy="${h * 0.78}" r="${variant === 'poster' ? 80 : 160}" fill="${c}" opacity="0.12"/>
  <rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.35"/>
  <text x="${titleX}" y="${kindY}" fill="rgba(255,255,255,0.62)" font-family="system-ui,sans-serif" font-size="${variant === 'poster' ? 11 : 14}" letter-spacing="0.28em" font-weight="600">${esc(film.kind.toUpperCase())}</text>
  <text x="${titleX}" y="${titleY}" fill="#ffffff" font-family="Georgia,serif" font-size="${titleSize}" font-weight="700" letter-spacing="-0.02em">${titleSpans}</text>
  <text x="${titleX}" y="${h - (variant === 'poster' ? 36 : 56)}" fill="rgba(255,255,255,0.45)" font-family="system-ui,sans-serif" font-size="${variant === 'poster' ? 12 : 16}" letter-spacing="0.12em">A3 STUDIOS · ${film.year}</text>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
