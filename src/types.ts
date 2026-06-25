export type FilmStatus = 'Now Streaming' | 'Coming Soon' | 'In Production';

export type FilmKind = 'Film' | 'Series' | 'Documentary' | 'Commercial' | 'Sport';

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
  accent: string;        // brand color used in gradient fallbacks (hex)
  trailerNote?: string;  // shown in the trailer modal
}

export const POSTER = (slug: string) => `/images/posters/${slug}.svg`;
export const BACKDROP = (slug: string) => `/images/backdrops/${slug}.svg`;
