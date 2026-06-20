export type RateLine = {
  id: string;
  label: string;
  shortLabel: string;
  count: number;
  totalUsd: number;
  /** Published guide rate per deliverable (USD). */
  rateUsd: number;
  accent: string;
  summary: string;
  deliverables: string[];
  typicalScope: string;
  turnaround: string;
};

export type WebsiteService = {
  id: string;
  title: string;
  fromPrice: string;
  description: string;
  accent: string;
};

export const ANNUAL_REVENUE_USD = 23_400;
export const ANNUAL_VIDEO_COUNT = 30;
export const PRO_BONO_COUNT = 1;

/** Client-facing services — rounded “From” prices for the website. */
export const websiteServices: WebsiteService[] = [
  {
    id: 'commercial',
    title: 'Commercial Videos',
    fromPrice: 'From $1,250',
    description:
      'High-quality brand videos, product promos, launch videos, and social media campaigns designed to make your business look premium.',
    accent: '#3b82f6',
  },
  {
    id: 'music-video',
    title: 'Music Videos',
    fromPrice: 'From $500',
    description:
      'Creative, stylish, and performance-driven music videos for artists who want visuals that match their sound and image.',
    accent: '#db2777',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Videos',
    fromPrice: 'From $500',
    description:
      'Clean property walkthroughs, lifestyle reels, and cinematic real estate showcases for agents, developers, and property brands.',
    accent: '#16a34a',
  },
  {
    id: 'events',
    title: 'Events',
    fromPrice: 'From $1,000',
    description:
      'Professional event coverage for launches, corporate events, private functions, and live experiences.',
    accent: '#ea580c',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    fromPrice: 'From $400',
    description:
      'Beautiful wedding films and highlight videos that capture the emotion, people, and story of your day.',
    accent: '#d97706',
  },
  {
    id: 'sport',
    title: 'Sports Videos',
    fromPrice: 'From $500',
    description:
      'Fast-paced sports content for athletes, teams, gyms, tournaments, and sports brands.',
    accent: '#dc2626',
  },
  {
    id: 'dp-movies',
    title: 'DP / Film Work',
    fromPrice: 'From $1,950',
    description:
      'Cinematography and director of photography services for films, documentaries, short films, and premium productions.',
    accent: '#e8b23a',
  },
  {
    id: 'pro-bono',
    title: 'Community / NGO Slot',
    fromPrice: 'Pro Bono',
    description:
      'Each year, we reserve space for selected community, youth, NGO, or impact-driven projects. Contact us with your story.',
    accent: '#6b7280',
  },
];

export const rateLines: RateLine[] = [
  {
    id: 'dp-movies',
    label: 'DP gigs (feature & short film)',
    shortLabel: 'DP / Movies',
    count: 4,
    totalUsd: 7_800,
    rateUsd: 1_950,
    accent: '#e8b23a',
    summary: 'Director of Photography packages on narrative film — from prep through principal photography.',
    deliverables: ['Shot & logged master footage', 'Camera & lighting plan', '1× DIT handoff', 'On-set stills pack'],
    typicalScope: '3–5 shoot days per title; A-camera + B-camera when scripted; LUT preview on set.',
    turnaround: 'Dailies within 24h; project wrap within 5 business days of final shoot day.',
  },
  {
    id: 'commercial',
    label: 'Commercial & branded video',
    shortLabel: 'Commercial',
    count: 4,
    totalUsd: 4_875,
    rateUsd: 1_218.75,
    accent: '#3b82f6',
    summary: 'Launch films, product stories, corporate profiles and social cut-downs for brands and NGOs.',
    deliverables: ['Hero film (60–90s)', '3× social cut-downs', 'Clean & captioned masters', 'Thumbnail still'],
    typicalScope: 'Single-location or studio day; client on set; VO and music licencing quoted separately.',
    turnaround: 'Rough cut in 5 days; final delivery in 10 business days after picture lock.',
  },
  {
    id: 'music-video',
    label: 'Music video',
    shortLabel: 'Music video',
    count: 8,
    totalUsd: 3_900,
    rateUsd: 487.5,
    accent: '#db2777',
    summary: 'Performance, narrative and hybrid promos for Kenyan and East African artists.',
    deliverables: ['1× master MV (3–4 min)', '1× vertical social edit', 'Colour-graded ProRes master', 'Behind-the-scenes stills'],
    typicalScope: 'Half-day or full-day shoot; treatment supplied by A3 or artist team.',
    turnaround: 'Offline in 4 days; graded master in 8 business days.',
  },
  {
    id: 'real-estate',
    label: 'Real estate video',
    shortLabel: 'Real estate',
    count: 4,
    totalUsd: 1_950,
    rateUsd: 487.5,
    accent: '#16a34a',
    summary: 'Cinematic property tours for developments, agents and hospitality venues.',
    deliverables: ['Walk-through film (2–3 min)', 'Drone exteriors when permitted', 'Agent intro bumper', 'MLS-ready export'],
    typicalScope: 'Half-day on location; gimbal + drone combo where airspace allows.',
    turnaround: 'Draft in 3 days; final in 6 business days.',
  },
  {
    id: 'events',
    label: 'Events coverage',
    shortLabel: 'Events',
    count: 2,
    totalUsd: 1_950,
    rateUsd: 975,
    accent: '#ea580c',
    summary: 'Multi-cam recap films for conferences, galas, launches and cultural nights.',
    deliverables: ['Highlight reel (3–5 min)', 'Full ceremony archive', 'Speaker grab pack', 'Social snippets'],
    typicalScope: 'Up to 8 hours on site; 2–3 operators; live audio feed when available.',
    turnaround: 'Social clips in 48h; full highlight within 10 business days.',
  },
  {
    id: 'weddings',
    label: 'Wedding films',
    shortLabel: 'Weddings',
    count: 5,
    totalUsd: 1_950,
    rateUsd: 390,
    accent: '#d97706',
    summary: 'Documentary-style wedding films — ceremony, reception and couple portraits woven into one story.',
    deliverables: ['Feature film (8–12 min)', 'Ceremony & vows edit', 'Teaser for social', 'Raw audio of vows'],
    typicalScope: 'Full-day coverage; 2 shooters; discreet cinema style.',
    turnaround: 'Teaser in 7 days; full film within 21 business days.',
  },
  {
    id: 'sport',
    label: 'Sport coverage',
    shortLabel: 'Sport',
    count: 2,
    totalUsd: 975,
    rateUsd: 487.5,
    accent: '#dc2626',
    summary: 'Match packages, tournament recaps and athlete profile films for federations and clubs.',
    deliverables: ['Match highlight (5–8 min)', 'Key-moment clips', 'Stats-aware chapter markers', 'Broadcast-safe master'],
    typicalScope: 'Single match or training camp day; 2–4 cam when budget allows.',
    turnaround: 'Same-week social clips; full package within 7 business days.',
  },
];

export const proBonoLine = {
  label: 'Pro bono',
  count: 1,
  summary:
    'One community or NGO slot per year — documentary short, awareness film or youth-project coverage. ' +
    'Selected by the studio; travel outside Nairobi billed at cost only.',
};

export const paidGigCount = rateLines.reduce((n, l) => n + l.count, 0);

export const rateFaqs = [
  {
    q: 'Are these fixed prices?',
    a: 'The “From” prices are our published guide rates per video. Final quotes depend on scope, locations, crew size and turnaround. We’ll confirm everything in a statement of work before you book.',
  },
  {
    q: 'Can we book a single video?',
    a: 'Yes. You don’t need to book the full annual slate — pick the categories you need and we’ll schedule around your dates.',
  },
  {
    q: 'How does the pro bono slot work?',
    a: 'One gig per calendar year is reserved for a registered NGO, school or community initiative. Apply via the contact form with your brief; selection is announced each January.',
  },
  {
    q: 'Do you travel outside Nairobi?',
    a: 'Yes. Kenya-wide is standard; East Africa on quote. Travel, per diem and carnet costs are added to the line item, not the base rate.',
  },
  {
    q: 'What currency do you invoice in?',
    a: 'USD for international clients; KES equivalent at Central Bank of Kenya mid-rate on invoice date for local brands.',
  },
  {
    q: 'What’s included in a typical package?',
    a: 'Pre-production, shoot day(s), edit, colour grade and a delivery master. Music rights, talent, VO and extra revisions are quoted separately.',
  },
];

export function formatUsd(n: number, opts?: { compact?: boolean }) {
  if (opts?.compact && n >= 1000) {
    return `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: n % 1 ? 2 : 0,
  }).format(n);
}
