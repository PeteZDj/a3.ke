export type FilmStatus = 'Now Streaming' | 'Coming Soon' | 'In Production';

export type FilmKind = 'Film' | 'Series' | 'Documentary' | 'Commercial' | 'Sport';

export interface CrewMember {
  role: string;
  name: string;
}

export interface Episode {
  number: number;
  title: string;
  runtime: string;
  synopsis: string;
}

export interface FilmAward {
  label: string;   // e.g. "Official Selection", "Winner"
  event: string;   // e.g. "FESPACO 2025"
}

export interface Film {
  slug: string;
  title: string;
  year: number;
  kind: FilmKind;
  status: FilmStatus;
  rating: string;        // e.g. "16+", "PG-13", "TV-MA"
  runtime: string;       // e.g. "2h 04m" or "6 episodes"
  language: string;
  genres: string[];
  logline: string;       // one punchy sentence for the hero
  synopsis: string;      // longer paragraph for the detail page
  director: string;
  cast: string[];
  featured?: boolean;    // appears in the home hero rotation
  ai?: boolean;          // an "A3 AI Original" (generative film)
  animation?: boolean;   // an "A3 Animation Original" (2D/3D/CG animated film)
  accent: string;        // brand color used in gradient fallbacks (hex)
  trailerNote?: string;  // shown in the trailer modal

  // ---- optional rich metadata (falls back to derived defaults in filmMeta) ----
  tagline?: string;
  crew?: CrewMember[];
  awards?: FilmAward[];
  locations?: string[];
  themes?: string[];
  productionNote?: string;
  quote?: { text: string; source: string };
  episodes?: Episode[];
  format?: string;       // e.g. "Digital 4K · 2.39:1"
  soundMix?: string;     // e.g. "Dolby Atmos 5.1"
  releaseDate?: string;
  platforms?: string[];
}

export const POSTER = (slug: string) => `/images/posters/${slug}.webp`;
export const POSTER_SVG = (slug: string) => `/images/posters/${slug}.svg`;
export const BACKDROP = (slug: string) => `/images/backdrops/${slug}.webp`;
export const BACKDROP_SVG = (slug: string) => `/images/backdrops/${slug}.svg`;
export const PORTRAIT = (slug: string) => `/images/people/${slug}.webp`;
