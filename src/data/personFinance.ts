import type { Person } from './people';
import { personFilmography } from './people';
import { getFunding, CREW_SHARE_PCT } from './funding';
import type { Film } from '../types';

// ============================================================================
//  Kuza-style contribution & earnings summary for a collective member.
//  Earnings are derived from each title's transparent revenue splits.
//  Personal earnings figures are treated as SENSITIVE and blurred in the UI.
// ============================================================================

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** This person's revenue-share % on a given title (from the funding splits). */
export function personShareOn(person: Person, film: Film): number {
  const f = getFunding(film);
  const hit = f.splits.find((s) => s.name === person.name);
  if (hit) return hit.pct;
  if (film.director === person.name) return f.splits[0]?.pct ?? 22;
  // supporting credit not in the headline split — a small deterministic share
  const s = hash(film.slug + person.slug);
  const pool = person.kind === 'Cinematographer' ? [6, 7, 8] : person.kind === 'Director' ? [10, 12, 14] : [4, 5, 6, 8];
  return pool[s % pool.length];
}

export interface Contribution {
  film: Film;
  role: string;          // their credited role on this title
  pct: number;           // their revenue share %
  earnings: number;      // KSh earned to date (0 if unreleased) — SENSITIVE
}

export interface PersonFinance {
  titles: number;
  released: number;
  upcoming: number;
  avgShare: number;              // average revenue-share %
  lifetimeEarnings: number;      // KSh across released titles — SENSITIVE (blur)
  pendingValue: number;          // KSh projected from in-progress titles — SENSITIVE (blur)
  topTitle?: Film;
  contributions: Contribution[]; // per-title breakdown (earnings blurred)
}

function creditRole(person: Person, film: Film): string {
  if (film.director === person.name) return 'Director';
  if (film.cast.includes(person.name)) return film.cast[0] === person.name ? 'Lead Cast' : 'Cast';
  return person.role;
}

export function personFinance(person: Person): PersonFinance {
  const films = personFilmography(person);
  const contributions: Contribution[] = films.map((film) => {
    const fund = getFunding(film);
    const pct = personShareOn(person, film);
    const released = film.status === 'Now Streaming';
    const earnings = released ? Math.round(fund.revenue * (pct / 100)) : 0;
    return { film, role: creditRole(person, film), pct, earnings };
  });

  const released = contributions.filter((c) => c.film.status === 'Now Streaming');
  const upcoming = contributions.filter((c) => c.film.status !== 'Now Streaming');
  const lifetimeEarnings = released.reduce((a, c) => a + c.earnings, 0);

  // projected value from titles still raising / in production
  const pendingValue = upcoming.reduce((a, c) => {
    const fund = getFunding(c.film);
    return a + Math.round(fund.fundingRaised * (CREW_SHARE_PCT / 100) * (c.pct / 100));
  }, 0);

  const avgShare = contributions.length
    ? Math.round((contributions.reduce((a, c) => a + c.pct, 0) / contributions.length) * 10) / 10
    : 0;

  const topTitle = [...released].sort((a, b) => b.earnings - a.earnings)[0]?.film;

  // most valuable title first for the breakdown table
  contributions.sort((a, b) => b.earnings - a.earnings || b.pct - a.pct);

  return {
    titles: contributions.length,
    released: released.length,
    upcoming: upcoming.length,
    avgShare,
    lifetimeEarnings,
    pendingValue,
    topTitle,
    contributions,
  };
}
