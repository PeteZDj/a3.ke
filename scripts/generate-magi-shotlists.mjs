/**
 * Build magi shot lists for all films (posters + backdrops).
 * Reads src/data/films.ts and writes scripts/magi-shotlist-*.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const filmsSrc = readFileSync(join(root, 'src/data/films.ts'), 'utf8');

const match = filmsSrc.match(/export const films[^=]*=\s*(\[[\s\S]*?\n\]);/);
if (!match) {
  console.error('Could not parse films array from src/data/films.ts');
  process.exit(1);
}

// eslint-disable-next-line no-eval
const films = eval(match[1]);

function posterPrompt(film) {
  const genre = film.genres.slice(0, 3).join(', ');
  const kindHint =
    film.kind === 'Commercial'
      ? 'Brand film key visual, polished advertising aesthetic'
      : film.kind === 'Sport'
        ? 'Dynamic sports broadcast key art, arena energy, motion and crowd'
        : film.kind === 'Documentary'
          ? 'Documentary series poster, authentic and editorial'
          : film.kind === 'Series'
            ? 'Prestige streaming series key art poster'
            : 'Cinematic movie poster key art';

  return [
    `${kindHint}, portrait 2:3 composition.`,
    `For "${film.title}" — ${film.logline}`,
    `${genre}. Kenyan / East African setting and cast.`,
    'Dramatic hero framing, single strong focal subject, no text, no titles, no logos, no watermarks.',
  ].join(' ');
}

function backdropPrompt(film) {
  const genre = film.genres.slice(0, 3).join(', ');
  const kindHint =
    film.kind === 'Commercial'
      ? 'Brand film hero frame, widescreen campaign still'
      : film.kind === 'Sport'
        ? 'Epic widescreen sports arena or stadium atmosphere'
        : film.kind === 'Documentary'
          ? 'Documentary establishing shot, observational cinema verité'
          : 'Cinematic widescreen film backdrop, 16:9 landscape establishing shot';

  return [
    `${kindHint}.`,
    `Environmental scene from "${film.title}" — ${film.logline}`,
    `${genre}. Kenya / East Africa, authentic locations and atmosphere.`,
    'Sweeping depth, layered foreground and background, no text, no titles, no logos, no watermarks.',
  ].join(' ');
}

const posters = films.map((f) => ({ name: f.slug, prompt: posterPrompt(f) }));
const backdrops = films.map((f) => ({ name: f.slug, prompt: backdropPrompt(f) }));

const outPosters = join(root, 'scripts/magi-shotlist-posters.json');
const outBackdrops = join(root, 'scripts/magi-shotlist-backdrops.json');

writeFileSync(outPosters, JSON.stringify(posters, null, 2) + '\n');
writeFileSync(outBackdrops, JSON.stringify(backdrops, null, 2) + '\n');

console.log(`Wrote ${posters.length} poster prompts -> ${outPosters}`);
console.log(`Wrote ${backdrops.length} backdrop prompts -> ${outBackdrops}`);
