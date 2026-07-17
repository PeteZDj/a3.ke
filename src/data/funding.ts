import type { Film } from '../types';
import { filmCrew } from './filmMeta';

// ============================================================================
//  A3 × KUZA — FILM FINANCING & TRANSPARENCY SEED DATA
// ============================================================================
//
//  A3 lists the *financials* for every title on Kuza's transparent Film-Club
//  ledger (kuza.ke). This file holds the numbers we surface on a3.ke:
//    • how each title was funded (goal / raised / backers)
//    • the production journey (development → release)
//    • where the money goes (85% cast & crew · 15% platform)
//    • box-office / earnings once a title is streaming
//
//  HOW TO EDIT
//  -----------
//  • To hand-author a title, add an entry to `fundingSeed` keyed by film slug.
//    Any field you omit is filled in automatically by `getFunding()` using
//    stable, per-title derived values (seeded by the slug — same every render).
//  • All money is in Kenyan Shillings (KSh). USD is shown alongside using
//    KSH_PER_USD below.
//  • Splits (crew %) always add up to CREW_SHARE_PCT (85). The remaining
//    PLATFORM_FEE_PCT (15) is Kuza's flat platform fee.
//
// ============================================================================

// ---- The economic model (identical to Kuza's) ------------------------------
export const PLATFORM_FEE_PCT = 15;        // Kuza's flat platform fee
export const CREW_SHARE_PCT = 85;          // everything else goes to cast & crew
export const KSH_PER_USD = 130;            // display-only FX rate

// ---- Where this data lives (cross-links back to Kuza) -----------------------
export const KUZA_URL = 'https://kuza.ke';
export const KUZA_FILM_CLUB = 'https://kuza.ke/film-club';
export const KUZA_TRANSPARENCY = 'https://kuza.ke/transparency';
export const KUZA_HOW_IT_WORKS = 'https://kuza.ke/how-it-works';
/** Deep-link to a title's transparency page on Kuza (falls back to Film Club). */
export const kuzaFilmUrl = (slug: string) => `${KUZA_URL}/film-club?title=${encodeURIComponent(slug)}`;

// ---- Types -----------------------------------------------------------------
export type ProductionStage =
  | 'Development'
  | 'Pre-Production'
  | 'Principal Photography'
  | 'Post-Production'
  | 'Released';

export interface SplitEntry {
  role: string;
  name: string;
  pct: number;              // share of the CREW pool (all entries sum to 85)
}

export interface Milestone {
  phase: string;            // e.g. "Principal Photography"
  date: string;             // e.g. "Mar 2024"
  done: boolean;            // completed vs upcoming
  note: string;             // one-line description of the step
}

export interface BudgetBreakdown {
  preProduction: number;    // KSh
  production: number;       // KSh
  postProduction: number;   // KSh
}

export interface FundingProfile {
  budget: number;           // total production budget, KSh
  fundingGoal: number;      // amount the title set out to raise, KSh
  fundingRaised: number;    // amount raised so far, KSh
  backers: number;          // number of Film-Club backers
  stage: ProductionStage;
  revenue: number;          // gross ticket/licensing revenue to date, KSh (0 if unreleased)
  views: number;            // total views / plays (or campaign reach)
  budgetBreakdown: BudgetBreakdown;
  splits: SplitEntry[];     // cast & crew revenue shares (sum = 85)
  timeline: Milestone[];    // the production journey
}

// ============================================================================
//  HAND-AUTHORED SEED  (one flagship per format — the rest are derived)
//  Anything omitted here is generated deterministically by getFunding().
// ============================================================================
export const fundingSeed: Record<string, Partial<FundingProfile>> = {
  'nairobi-after-dark': {
    budget: 18_400_000,
    fundingGoal: 18_400_000,
    fundingRaised: 18_400_000,
    backers: 1_284,
    stage: 'Released',
    revenue: 26_900_000,
    views: 41_500,
    budgetBreakdown: { preProduction: 3_800_000, production: 9_200_000, postProduction: 5_400_000 },
    splits: [
      { role: 'Director', name: 'Pete Njagi', pct: 22 },
      { role: 'Lead Cast', name: 'Neema Achieng', pct: 16 },
      { role: 'Screenplay', name: 'Halima Hassan', pct: 12 },
      { role: 'Producer', name: 'Diana Gakuya', pct: 9 },
      { role: 'Cinematographer', name: 'Tunda Omondi', pct: 8 },
      { role: 'Editor', name: 'Sanaa Kariuki', pct: 7 },
      { role: 'Supporting Cast', name: 'Otieno Odhiambo', pct: 6 },
      { role: 'Cast & Production Team', name: 'A3 ensemble', pct: 5 },
    ],
    timeline: [
      { phase: 'Development & Funding', date: 'Jan 2024', done: true, note: 'Script locked; funded on Kuza Film Club in 26 days.' },
      { phase: 'Pre-Production', date: 'Mar 2024', done: true, note: 'Casting, locations scouted across Westlands & Industrial Area.' },
      { phase: 'Principal Photography', date: 'May 2024', done: true, note: '31-day night shoot, ARRI Alexa Mini, anamorphic.' },
      { phase: 'Post-Production', date: 'Aug 2024', done: true, note: 'Edit, grade, Dolby Atmos mix — finished in-house.' },
      { phase: 'Release & Distribution', date: 'Feb 2025', done: true, note: 'Premiered on a3.ke; splits paid to crew wallets.' },
    ],
  },

  'the-rift': {
    budget: 21_600_000,
    fundingGoal: 21_600_000,
    fundingRaised: 21_600_000,
    backers: 1_502,
    stage: 'Released',
    revenue: 24_100_000,
    views: 37_800,
  },

  'maridadi': {
    budget: 28_500_000,
    fundingGoal: 28_500_000,
    fundingRaised: 28_500_000,
    backers: 1_910,
    stage: 'Released',
    revenue: 33_200_000,
    views: 58_400,
  },

  // A flagship AI Original — small budget, community-funded
  'neon-savannah': {
    budget: 2_400_000,
    fundingGoal: 2_400_000,
    fundingRaised: 2_400_000,
    backers: 640,
    stage: 'Released',
    revenue: 3_100_000,
    views: 22_700,
  },

  // A flagship commercial — client-funded, "revenue" = client value
  'safaricom-5g-launch': {
    budget: 6_800_000,
    fundingGoal: 6_800_000,
    fundingRaised: 6_800_000,
    backers: 1,
    stage: 'Released',
    revenue: 9_200_000,
    views: 2_400_000, // media reach
  },

  // A title still raising / in production
  'harambee': {
    budget: 32_000_000,
    fundingGoal: 32_000_000,
    fundingRaised: 24_600_000,
    backers: 2_140,
    stage: 'Post-Production',
    revenue: 0,
    views: 0,
  },
  'ziwa': {
    budget: 19_500_000,
    fundingGoal: 19_500_000,
    fundingRaised: 8_900_000,
    backers: 760,
    stage: 'Principal Photography',
    revenue: 0,
    views: 0,
  },
};

// ============================================================================
//  DERIVATION — fills in whatever the seed doesn't specify.
//  Deterministic: the same slug always yields the same numbers.
// ============================================================================

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
// pseudo-random float in [0,1) from a seed
const rnd = (seed: number) => ((seed * 1103515245 + 12345) >>> 0) / 4294967296;
const money = (n: number) => Math.round(n / 100_000) * 100_000; // round to nearest 100k

// Typical production budget (KSh) by format.
function baseBudget(film: Film, r: number): number {
  const ranges: Record<Film['kind'], [number, number]> = {
    Film: [8_000_000, 24_000_000],
    Series: [14_000_000, 34_000_000],
    Documentary: [4_000_000, 11_000_000],
    Commercial: [1_800_000, 7_500_000],
    Sport: [1_200_000, 4_500_000],
  };
  const [lo, hi] = ranges[film.kind];
  const b = film.ai ? 1_000_000 + r * 2_500_000 : lo + r * (hi - lo);
  return money(b);
}

/** Cast & crew splits (sum to CREW_SHARE_PCT = 85). */
function deriveSplits(film: Film): SplitEntry[] {
  const crew = filmCrew(film);
  const lead = film.cast.find((c) =>
    c !== film.director &&
    !/featuring|ensemble|team|founders?|athlete|artist|talent|crew|brand|performer|educator|leader|communit|generative|roster/i.test(c));

  const people: { role: string; name: string }[] = [
    { role: crew[0]?.role ?? 'Director', name: film.director },
  ];
  if (lead) people.push({ role: 'Lead Cast', name: lead });
  for (const c of crew.slice(1, 5)) people.push({ role: c.role, name: c.name });
  people.push({ role: 'Cast & Production Team', name: 'A3 ensemble' });

  // descending weights, normalised to 85
  const weights = [24, 17, 12, 10, 8, 7, 7].slice(0, people.length);
  const total = weights.reduce((a, b) => a + b, 0);
  const scaled = weights.map((w) => Math.round((w / total) * CREW_SHARE_PCT));
  // fix rounding drift on the last entry
  const drift = CREW_SHARE_PCT - scaled.reduce((a, b) => a + b, 0);
  scaled[scaled.length - 1] += drift;

  return people.map((p, i) => ({ ...p, pct: scaled[i] }));
}

/** Production-journey milestones with done/upcoming state from film status. */
function deriveTimeline(film: Film, year: number): Milestone[] {
  // how many phases are complete, by status
  const doneCount =
    film.status === 'Now Streaming' ? 5 : film.status === 'Coming Soon' ? 4 : 3;
  const M = ['Jan', 'Mar', 'May', 'Aug', 'Nov'];
  const y0 = year - 1;
  const phases: Omit<Milestone, 'done'>[] = [
    { phase: 'Development & Funding', date: `${M[0]} ${y0}`, note: `Script locked and funded on Kuza Film Club.` },
    { phase: 'Pre-Production', date: `${M[1]} ${y0}`, note: 'Casting, crewing and location scouting.' },
    { phase: film.kind === 'Sport' ? 'Capture' : 'Principal Photography', date: `${M[2]} ${y0}`, note: film.kind === 'Sport' ? 'Multi-camera capture on the day.' : 'Shoot completed with a fully Kenyan crew.' },
    { phase: 'Post-Production', date: `${M[3]} ${y0}`, note: 'Edit, sound, grade and mastering in-house.' },
    { phase: 'Release & Distribution', date: `${M[4]} ${year}`, note: 'Streaming on a3.ke; crew splits paid out.' },
  ];
  return phases.map((p, i) => ({ ...p, done: i < doneCount }));
}

/** Full funding profile for any title (seed values win; the rest are derived). */
export function getFunding(film: Film): FundingProfile {
  const seed = fundingSeed[film.slug] ?? {};
  const s = hash(film.slug + 'fund');
  const r = rnd(s);

  const budget = seed.budget ?? baseBudget(film, r);
  const fundingGoal = seed.fundingGoal ?? budget;

  // raised depends on status: released/soon are (near) fully funded
  const raisedPct =
    film.status === 'Now Streaming' ? 1
      : film.status === 'Coming Soon' ? 0.62 + rnd(s + 1) * 0.33
        : 0.28 + rnd(s + 2) * 0.42;
  const fundingRaised = seed.fundingRaised ?? money(fundingGoal * raisedPct);

  // ~3,500 KSh average pledge (client-funded commercials have few "backers")
  const backers = seed.backers ?? (film.kind === 'Commercial' ? 1 : Math.max(60, Math.round(fundingRaised / 3500)));

  const stage: ProductionStage =
    seed.stage ??
    (film.status === 'Now Streaming' ? 'Released'
      : film.status === 'Coming Soon' ? 'Post-Production'
        : 'Principal Photography');

  const released = film.status === 'Now Streaming';
  // gross revenue for released titles: budget × a healthy multiple
  const revenue = seed.revenue ?? (released ? money(budget * (0.9 + rnd(s + 3) * 0.9)) : 0);

  const views =
    seed.views ??
    (released
      ? film.kind === 'Commercial'
        ? Math.round((300_000 + rnd(s + 4) * 2_400_000)) // media reach
        : Math.round(12_000 + rnd(s + 4) * 55_000)
      : 0);

  const budgetBreakdown =
    seed.budgetBreakdown ??
    {
      preProduction: money(budget * 0.22),
      production: money(budget * 0.48),
      postProduction: money(budget - money(budget * 0.22) - money(budget * 0.48)),
    };

  const splits = seed.splits ?? deriveSplits(film);
  const timeline = seed.timeline ?? deriveTimeline(film, film.year);

  return { budget, fundingGoal, fundingRaised, backers, stage, revenue, views, budgetBreakdown, splits, timeline };
}

// ---- Display helpers -------------------------------------------------------
/** Compact number: 1_240_000 → "1.24M", 41_500 → "41.5K". */
export function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2)}M`.replace('.0M', 'M');
  if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 100_000 ? 0 : 1)}K`.replace('.0K', 'K');
  return `${n}`;
}
/** "KSh 18,400,000" */
export const ksh = (n: number) => `KSh ${Math.round(n).toLocaleString('en-US')}`;
/** "KSh 18.4M" */
export const kshShort = (n: number) => `KSh ${compact(n)}`;
/** "$142K" */
export const usd = (n: number) => `$${compact(Math.round(n / KSH_PER_USD))}`;
/** "KSh 18.4M ($142K)" — the primary money format across the finance UI. */
export const kshUsd = (n: number) => `${kshShort(n)} (${usd(n)})`;

/** % of goal raised (0–100, capped). */
export const fundedPct = (p: FundingProfile) =>
  Math.min(100, Math.round((p.fundingRaised / p.fundingGoal) * 100));
