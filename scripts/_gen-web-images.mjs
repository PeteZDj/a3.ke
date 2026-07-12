/**
 * One-off: download photographic placeholder images from the open web
 * (Openverse — Creative Commons; picsum.photos fallback) and write them as
 * optimised WebP into public/images/{office,blog,services}. No AI art.
 *
 *   node scripts/_gen-web-images.mjs
 */
import { mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const pub = join(root, 'public/images');

const targets = [
  // ---- office (About / Studio) ------------------------------------------
  { out: 'office/office-01.webp', w: 1200, h: 800, q: 'modern office lobby interior', seed: 'a3-office-1' },
  { out: 'office/office-02.webp', w: 1200, h: 800, q: 'office meeting room table chairs', seed: 'a3-office-2' },
  { out: 'office/office-03.webp', w: 1200, h: 800, q: 'open plan office workspace desks', seed: 'a3-office-3' },
  { out: 'office/office-04.webp', w: 1200, h: 800, q: 'conference room table office', seed: 'a3-office-4' },
  { out: 'office/office-05.webp', w: 1200, h: 800, q: 'coworking space interior desks', seed: 'a3-office-5' },
  { out: 'office/office-06.webp', w: 1200, h: 800, q: 'recording studio mixing console', seed: 'a3-office-6' },
  // ---- blog covers -------------------------------------------------------
  { out: 'blog/blog-01.webp', w: 1200, h: 750, q: 'city street neon night lights', seed: 'a3-blog-1' },
  { out: 'blog/blog-02.webp', w: 1200, h: 750, q: 'abstract digital technology light', seed: 'a3-blog-2' },
  { out: 'blog/blog-03.webp', w: 1200, h: 750, q: 'cinema film clapperboard camera', seed: 'a3-blog-3' },
  { out: 'blog/blog-04.webp', w: 1200, h: 750, q: 'mountain valley landscape trekking', seed: 'a3-blog-4' },
  { out: 'blog/blog-05.webp', w: 1200, h: 750, q: 'fashion runway model catwalk', seed: 'a3-blog-5' },
  { out: 'blog/blog-06.webp', w: 1200, h: 750, q: 'music recording studio microphone', seed: 'a3-blog-6' },
  { out: 'blog/blog-07.webp', w: 1200, h: 750, q: 'rugby match sport stadium', seed: 'a3-blog-7' },
  { out: 'blog/blog-08.webp', w: 1200, h: 750, q: 'film crew camera team set', seed: 'a3-blog-8' },
  { out: 'blog/blog-09.webp', w: 1200, h: 750, q: 'savanna sunset africa golden', seed: 'a3-blog-9' },
  { out: 'blog/blog-10.webp', w: 1200, h: 750, q: 'camera operator filming training', seed: 'a3-blog-10' },
  { out: 'blog/blog-11.webp', w: 1200, h: 750, q: 'futuristic city architecture skyline', seed: 'a3-blog-11' },
  { out: 'blog/blog-12.webp', w: 1200, h: 750, q: 'wooden dhow boat ocean coast', seed: 'a3-blog-12' },
  // ---- new service heroes ------------------------------------------------
  { out: 'services/ai-commercial.webp', w: 1280, h: 720, q: 'artificial intelligence abstract technology', seed: 'a3-svc-ai' },
  { out: 'services/animation.webp', w: 1280, h: 720, q: 'colorful light painting long exposure', seed: 'a3-svc-anim' },
];

const BLOCK = /(clip ?art|logo|icon|coat of arms|drawing|cartoon|diagram|\bmap\b|screenshot|illustration|chart|flag|seal|svg)/i;
const UA = 'a3-studios-placeholder/1.0 (https://a3.ke; contact@a3.ke)';

// Wikimedia Commons search — thematic Creative Commons photos, no API key.
async function wikimedia(q) {
  const url = 'https://commons.wikimedia.org/w/api.php?' + new URLSearchParams({
    action: 'query', format: 'json', generator: 'search',
    gsrsearch: `filetype:bitmap ${q}`, gsrnamespace: '6', gsrlimit: '20',
    prop: 'imageinfo', iiprop: 'url|mime', iiurlwidth: '1400',
  });
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!res.ok) return [];
    const data = await res.json();
    const pages = data?.query?.pages ? Object.values(data.query.pages) : [];
    const urls = [];
    for (const p of pages) {
      if (BLOCK.test(p.title || '')) continue;
      const ii = p.imageinfo?.[0];
      if (!ii || !/jpeg|png/.test(ii.mime || '')) continue;
      if (ii.thumburl) urls.push(ii.thumburl);   // prefer scaled thumb
      if (ii.url) urls.push(ii.url);              // original as backup
    }
    return urls;
  } catch {
    return [];
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function toWebp(buf, t, outPath) {
  await sharp(buf)
    .resize(t.w, t.h, { fit: 'cover', position: 'attention' })
    .webp({ quality: 80 })
    .toFile(outPath);
}

async function tryUrls(urls, t, outPath) {
  for (const u of urls) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await fetch(u, { headers: { 'User-Agent': UA, Referer: 'https://a3.ke/' }, redirect: 'follow' });
        if (res.status === 429) { await sleep(1500); continue; }   // backoff & retry
        if (!res.ok) break;
        const ct = res.headers.get('content-type') || '';
        if (!/image\//.test(ct)) break;
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length < 3000) break;
        await toWebp(buf, t, outPath);
        return true;
      } catch { break; }
    }
  }
  return false;
}

let ok = 0, fell = 0;
for (const t of targets) {
  const outPath = join(pub, t.out);
  mkdirSync(dirname(outPath), { recursive: true });
  if (existsSync(outPath) && process.argv.includes('--skip-existing')) { ok++; continue; }

  const urls = await wikimedia(t.q);
  let done = await tryUrls(urls, t, outPath);
  let usedFallback = false;

  if (!done) {
    // reliable fallback — deterministic photographic placeholder
    const fb = `https://picsum.photos/seed/${t.seed}/${t.w}/${t.h}`;
    done = await tryUrls([fb], t, outPath);
    usedFallback = done;
    if (done) fell++;
  }

  if (done) { ok++; console.log(`✓ ${t.out}${usedFallback ? '  (picsum fallback)' : '  (wikimedia)'}`); }
  else console.error(`✗ FAILED ${t.out}`);
  await sleep(350);   // be polite to the API / CDN
}
console.log(`\nDone: ${ok}/${targets.length} images (${fell} via fallback).`);
