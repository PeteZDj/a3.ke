import type { Film, CrewMember, Episode, FilmAward } from '../types';

// ============================================================================
// A3 crew "collective" + deterministic detail derivation.
//
// Every title on a3.ke gets a full, believable cast & crew and production
// dossier. Where a Film object provides explicit fields (crew, awards, etc.)
// we use them; otherwise we derive stable, per-title values seeded by the slug
// so the same film always shows the same crew/details across renders.
// ============================================================================

const DPS = ['Tunda Omondi', 'Zawadi Mwangi', 'Kevin Otieno', 'Amara Njoroge', 'Brian Kiptoo'];
const WRITERS = ['Pete Njagi', 'Halima Hassan', 'Wanjiru Kamau', 'Baraka Kipchoge', 'Aisha Yusuf'];
const PRODUCERS = ['Imani Wekesa', 'Achieng Otieno', 'David Mburu', 'Grace Muthoni'];
const EDITORS = ['Sanaa Kariuki', 'Collins Barasa', 'Neema Achieng', 'Mercy Wairimu'];
const COMPOSERS = ['Otieno Odhiambo', 'Juma Ali', 'Faith Nasimiyu'];
const DESIGNERS = ['Lucy Wangeci', 'Peter Gitau', 'Salim Bakari'];
const COLOURISTS = ['Kelvin Maina', 'Aisha Yusuf'];
const SOUND = ['Daudi Kimani', 'Joseph Kariuki', 'Halima Hassan'];
const CASTING = ['Grace Muthoni', 'Wanjiru Kamau'];

const LOCATIONS = [
  'Nairobi CBD', 'Westlands', 'Industrial Area', 'Karura Forest', 'Maasai Mara',
  'Lake Magadi', "Hell's Gate", 'Lamu Old Town', 'Mombasa', 'Kisumu', 'Naivasha',
  'Great Rift Valley', 'Diani Beach', 'Eastlands', 'Mount Kenya', 'Lake Victoria', 'Nanyuki',
];

const FORMATS = [
  'Digital · ARRI Alexa Mini · 2.39:1',
  'Digital 4K · RED Komodo · 2.00:1',
  'Anamorphic · ARRI Alexa · 2.39:1',
  'Digital 6K · Sony Venice · 1.85:1',
  'Digital 4K · 16:9',
];
const SOUND_MIX = ['Dolby Atmos', '5.1 Surround', 'Dolby Digital 5.1', 'Stereo + 5.1 mix'];

const THEMES = [
  'Family & belonging', 'Ambition', 'Justice', 'Memory', 'Home', 'Identity',
  'Survival', 'Love', 'Power', 'Community', 'Tradition vs. modernity',
  'Redemption', 'Freedom', 'Legacy', 'Resilience',
];

const AWARD_POOL: FilmAward[] = [
  { label: 'Official Selection', event: 'FESPACO 2025' },
  { label: 'Best Feature', event: 'Kalasha Awards 2025' },
  { label: 'Audience Award', event: 'Durban Intl. 2024' },
  { label: 'In Competition', event: 'Cannes 2025' },
  { label: 'Best Cinematography', event: 'AMVCA 2025' },
  { label: 'Official Selection', event: 'Toronto 2025' },
  { label: 'Jury Prize', event: 'Zanzibar IFF 2024' },
  { label: 'Best East African Film', event: 'Kalasha 2024' },
];

const QUOTES = [
  { text: 'A bold, beautiful arrival for a new era of Kenyan cinema.', source: 'The EastAfrican' },
  { text: 'Gorgeously shot and impossible to look away from.', source: 'Film Africa' },
  { text: 'A3 keeps quietly raising the bar for the whole continent.', source: 'Business Daily' },
  { text: 'Electric, assured filmmaking with a heart the size of the Rift.', source: 'OkayAfrica' },
  { text: 'The kind of story the world has been waiting for from Africa.', source: 'Variety' },
  { text: 'Confident, cinematic and deeply felt.', source: 'The Continent' },
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function pickMany<T>(arr: T[], seed: number, count: number): T[] {
  const out: T[] = [];
  const used = new Set<number>();
  let s = seed;
  while (out.length < Math.min(count, arr.length)) {
    s = (s * 1103515245 + 12345) >>> 0;
    const idx = s % arr.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(arr[idx]);
    }
  }
  return out;
}

function without<T>(arr: T[], value: T): T[] {
  const f = arr.filter((x) => x !== value);
  return f.length ? f : arr;
}

/** Full crew for a title (director always first). */
export function filmCrew(film: Film): CrewMember[] {
  if (film.crew && film.crew.length) return film.crew;
  const s = hash(film.slug);

  if (film.kind === 'Sport') {
    return [
      { role: 'Broadcast Director', name: film.director },
      { role: 'Lead Camera', name: pick(without(DPS, film.director), s + 1) },
      { role: 'Broadcast Producer', name: pick(PRODUCERS, s + 2) },
      { role: 'Live Vision Mix', name: pick(EDITORS, s + 3) },
      { role: 'Highlights Editor', name: pick(without(EDITORS, film.director), s + 4) },
      { role: 'Audio Supervisor', name: pick(SOUND, s + 5) },
    ];
  }

  if (film.kind === 'Commercial') {
    return [
      { role: 'Director', name: film.director },
      { role: 'Director of Photography', name: pick(without(DPS, film.director), s + 1) },
      { role: 'Executive Producer', name: pick(PRODUCERS, s + 2) },
      { role: 'Editor', name: pick(EDITORS, s + 3) },
      { role: 'Colourist', name: pick(COLOURISTS, s + 4) },
      { role: 'Sound Design', name: pick(SOUND, s + 5) },
    ];
  }

  return [
    { role: 'Director', name: film.director },
    { role: 'Screenplay', name: pick(without(WRITERS, film.director), s + 1) },
    { role: 'Director of Photography', name: pick(without(DPS, film.director), s + 2) },
    { role: 'Producer', name: pick(PRODUCERS, s + 3) },
    { role: 'Editor', name: pick(EDITORS, s + 4) },
    { role: 'Original Score', name: pick(COMPOSERS, s + 5) },
    { role: 'Production Design', name: pick(DESIGNERS, s + 6) },
    { role: 'Colourist', name: pick(COLOURISTS, s + 7) },
    { role: 'Sound Design', name: pick(SOUND, s + 8) },
    { role: 'Casting', name: pick(CASTING, s + 9) },
  ];
}

export interface FilmDetails {
  locations: string[];
  format: string;
  soundMix: string;
  releaseLine: string;
  platforms: string[];
  themes: string[];
  awards: FilmAward[];
  productionNote: string;
  quote?: { text: string; source: string };
}

function episodeCount(runtime: string): number {
  const m = runtime.match(/(\d+)\s*(?:episode|-episode)/i);
  return m ? parseInt(m[1], 10) : 0;
}

/** Derived production dossier for a title. */
export function filmDetails(film: Film): FilmDetails {
  const s = hash(film.slug);
  const released = film.status === 'Now Streaming';

  const platforms =
    film.platforms ??
    (film.kind === 'Sport'
      ? ['A3 Live', 'Broadcast partners', 'a3.ke']
      : film.kind === 'Commercial'
        ? ['Client channels', 'A3 reel', 'Social suite']
        : released
          ? ['a3.ke', 'A3 mobile app']
          : ['a3.ke (soon)']);

  const releaseLine =
    film.releaseDate ??
    (released
      ? `Streaming now · ${MONTHS[s % 12]} ${film.year}`
      : film.status === 'Coming Soon'
        ? `Premieres ${film.year}`
        : `In production · ${film.year}`);

  const format =
    film.format ??
    (film.kind === 'Sport'
      ? 'Multi-camera broadcast · 1080p50'
      : film.kind === 'Commercial'
        ? 'Digital 4K · multi-format delivery'
        : pick(FORMATS, s));

  const locations = film.locations ?? pickMany(LOCATIONS, s, 3);
  const soundMix = film.soundMix ?? pick(SOUND_MIX, s);
  const themes = film.themes ?? pickMany(THEMES, s + 7, 4);
  const awards = film.awards ?? (released && film.year <= 2025 ? pickMany(AWARD_POOL, s, 3) : []);
  const quote = film.quote ?? (released ? pick(QUOTES, s) : undefined);

  const weeks = 5 + (s % 6);
  const productionNote =
    film.productionNote ??
    `${film.kind === 'Sport' ? 'Captured' : 'Shot'} over ${weeks} weeks on location across ${locations
      .slice(0, 2)
      .join(' and ')}, with a fully Kenyan crew and finished end-to-end at A3's sound stage and post facility in Nairobi's Industrial Area.`;

  return { locations, format, soundMix, releaseLine, platforms, themes, awards, productionNote, quote };
}

const EP_TITLES = [
  'Origins', 'The Turn', 'Pressure', 'Fault Lines', 'The Deal', 'Nightfall',
  'Homecoming', 'The Reckoning', 'Crossroads', 'Rising', 'The Cost', 'Full Circle',
];

/** Episode list for series / documentaries (derived from runtime if not explicit). */
export function filmEpisodes(film: Film): Episode[] {
  if (film.episodes && film.episodes.length) return film.episodes;
  const n = episodeCount(film.runtime);
  if (!n) return [];
  const s = hash(film.slug);
  return Array.from({ length: n }, (_, i) => ({
    number: i + 1,
    title: EP_TITLES[(s + i) % EP_TITLES.length],
    runtime: `${38 + ((s + i * 7) % 18)} min`,
    synopsis:
      i === 0
        ? `The premiere sets the stage — introducing the world of ${film.title} and the people at its heart.`
        : i === n - 1
          ? `Everything comes together in a finale that pays off the season's biggest questions.`
          : `The story deepens as new stakes, alliances and revelations reshape what came before.`,
  }));
}
