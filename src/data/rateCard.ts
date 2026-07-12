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
  slug: string;
  title: string;
  /** Exact per-video rate in USD; null for pro bono. */
  priceUsd: number | null;
  priceLabel: string;
  description: string;
  accent: string;
  deliverables: string[];
  typicalScope: string;
  turnaround: string;
};

export const ANNUAL_REVENUE_USD = 23_400;
export const ANNUAL_VIDEO_COUNT = 30;
export const PRO_BONO_COUNT = 1;

/** Client-facing services â€” exact per-video rates. */
export const websiteServices: WebsiteService[] = [
  {
    id: 'dp-movies',
    slug: 'dp-movies',
    title: 'DP / Movie Gigs',
    priceUsd: 1_950,
    priceLabel: '$1,950',
    description:
      'Cinematography and director of photography services for films, documentaries, short films, and premium productions.',
    accent: '#e50914',
    deliverables: ['Shot & logged master footage', 'Camera & lighting plan', '1Ã— DIT handoff', 'On-set stills pack'],
    typicalScope: '3â€“5 shoot days per title; A-camera + B-camera when scripted; LUT preview on set.',
    turnaround: 'Dailies within 24h; project wrap within 5 business days of final shoot day.',
  },
  {
    id: 'commercial',
    slug: 'commercial',
    title: 'Commercial Videos',
    priceUsd: 1_218.75,
    priceLabel: '$1,218.75',
    description:
      'High-quality brand videos, product promos, launch videos, and social media campaigns designed to make your business look premium.',
    accent: '#3b82f6',
    deliverables: ['Hero film (60â€“90s)', '3Ã— social cut-downs', 'Clean & captioned masters', 'Thumbnail still'],
    typicalScope: 'Single-location or studio day; client on set; VO and music licencing quoted separately.',
    turnaround: 'Rough cut in 5 days; final delivery in 10 business days after picture lock.',
  },
  {
    id: 'ai-commercial',
    slug: 'ai-commercial',
    title: 'AI Commercials',
    priceUsd: 900,
    priceLabel: '$900',
    description:
      'AI-assisted brand films \u2014 generative concepts, synthetic scenes and rapid variations for launches and social. Cinematic results at a fraction of a full shoot.',
    accent: '#22d3ee',
    deliverables: ['AI hero film (30\u201360s)', '5\u00d7 platform variations', 'Generated + graded master', 'Concept board & prompt kit'],
    typicalScope: 'Concept-led; part generative, part live where needed. Ideal for tight timelines and big ideas on a lean budget.',
    turnaround: 'First look in 3 days; final delivery in 7 business days.',
  },
  {
    id: 'animation',
    slug: 'animation',
    title: 'Animation',
    priceUsd: 1_400,
    priceLabel: '$1,400',
    description:
      '2D, 3D and motion-graphics animation \u2014 explainers, title sequences, animated ads and short films from the A3 AI Lab and design team.',
    accent: '#a78bfa',
    deliverables: ['Animated film (up to 90s)', 'Storyboard & style frames', 'Source project + master', 'Looping social cutdowns'],
    typicalScope: 'Style-frame first; 2D/3D or hybrid AI animation. Music & VO licensing quoted separately.',
    turnaround: 'Storyboard in 4 days; final animation in 12\u201318 business days.',
  },
  {
    id: 'music-video',
    slug: 'music-videos',
    title: 'Music Videos',
    priceUsd: 487.5,
    priceLabel: '$487.50',
    description:
      'Creative, stylish, and performance-driven music videos for artists who want visuals that match their sound and image.',
    accent: '#db2777',
    deliverables: ['1Ã— master MV (3â€“4 min)', '1Ã— vertical social edit', 'Colour-graded ProRes master', 'Behind-the-scenes stills'],
    typicalScope: 'Half-day or full-day shoot; treatment supplied by A3 or artist team.',
    turnaround: 'Offline in 4 days; graded master in 8 business days.',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate Videos',
    priceUsd: 487.5,
    priceLabel: '$487.50',
    description:
      'Clean property walkthroughs, lifestyle reels, and cinematic real estate showcases for agents, developers, and property brands.',
    accent: '#16a34a',
    deliverables: ['Walk-through film (2â€“3 min)', 'Drone exteriors when permitted', 'Agent intro bumper', 'MLS-ready export'],
    typicalScope: 'Half-day on location; gimbal + drone combo where airspace allows.',
    turnaround: 'Draft in 3 days; final in 6 business days.',
  },
  {
    id: 'events',
    slug: 'events',
    title: 'Event Videos',
    priceUsd: 975,
    priceLabel: '$975',
    description:
      'Professional event coverage for launches, corporate events, private functions, and live experiences.',
    accent: '#ea580c',
    deliverables: ['Highlight reel (3â€“5 min)', 'Full ceremony archive', 'Speaker grab pack', 'Social snippets'],
    typicalScope: 'Up to 8 hours on site; 2â€“3 operators; live audio feed when available.',
    turnaround: 'Social clips in 48h; full highlight within 10 business days.',
  },
  {
    id: 'weddings',
    slug: 'weddings',
    title: 'Wedding Videos',
    priceUsd: 390,
    priceLabel: '$390',
    description:
      'Beautiful wedding films and highlight videos that capture the emotion, people, and story of your day.',
    accent: '#d97706',
    deliverables: ['Feature film (8â€“12 min)', 'Ceremony & vows edit', 'Teaser for social', 'Raw audio of vows'],
    typicalScope: 'Full-day coverage; 2 shooters; discreet cinema style.',
    turnaround: 'Teaser in 7 days; full film within 21 business days.',
  },
  {
    id: 'sport',
    slug: 'sport',
    title: 'Sport Videos',
    priceUsd: 487.5,
    priceLabel: '$487.50',
    description:
      'Fast-paced sports content for athletes, teams, gyms, tournaments, and sports brands.',
    accent: '#dc2626',
    deliverables: ['Match highlight (5â€“8 min)', 'Key-moment clips', 'Stats-aware chapter markers', 'Broadcast-safe master'],
    typicalScope: 'Single match or training camp day; 2â€“4 cam when budget allows.',
    turnaround: 'Same-week social clips; full package within 7 business days.',
  },
  {
    id: 'pro-bono',
    slug: 'community',
    title: 'Community / NGO',
    priceUsd: null,
    priceLabel: 'Pro bono slot',
    description:
      'Each year, we reserve space for selected community, youth, NGO, or impact-driven projects. Contact us with your story.',
    accent: '#6b7280',
    deliverables: ['Documentary short or awareness film', 'Youth-project coverage', 'Social-ready edits', 'Impact story consultation'],
    typicalScope: 'One selected initiative per calendar year; travel outside Nairobi billed at cost only.',
    turnaround: 'Timeline agreed with the selected partner at kickoff.',
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
    accent: '#e50914',
    summary: 'Director of Photography packages on narrative film â€” from prep through principal photography.',
    deliverables: ['Shot & logged master footage', 'Camera & lighting plan', '1Ã— DIT handoff', 'On-set stills pack'],
    typicalScope: '3â€“5 shoot days per title; A-camera + B-camera when scripted; LUT preview on set.',
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
    deliverables: ['Hero film (60â€“90s)', '3Ã— social cut-downs', 'Clean & captioned masters', 'Thumbnail still'],
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
    deliverables: ['1Ã— master MV (3â€“4 min)', '1Ã— vertical social edit', 'Colour-graded ProRes master', 'Behind-the-scenes stills'],
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
    deliverables: ['Walk-through film (2â€“3 min)', 'Drone exteriors when permitted', 'Agent intro bumper', 'MLS-ready export'],
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
    deliverables: ['Highlight reel (3â€“5 min)', 'Full ceremony archive', 'Speaker grab pack', 'Social snippets'],
    typicalScope: 'Up to 8 hours on site; 2â€“3 operators; live audio feed when available.',
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
    summary: 'Documentary-style wedding films â€” ceremony, reception and couple portraits woven into one story.',
    deliverables: ['Feature film (8â€“12 min)', 'Ceremony & vows edit', 'Teaser for social', 'Raw audio of vows'],
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
    deliverables: ['Match highlight (5â€“8 min)', 'Key-moment clips', 'Stats-aware chapter markers', 'Broadcast-safe master'],
    typicalScope: 'Single match or training camp day; 2â€“4 cam when budget allows.',
    turnaround: 'Same-week social clips; full package within 7 business days.',
  },
];

export const proBonoLine = {
  label: 'Pro bono',
  count: 1,
  summary:
    'One community or NGO slot per year â€” documentary short, awareness film or youth-project coverage. ' +
    'Selected by the studio; travel outside Nairobi billed at cost only.',
};

export const paidGigCount = rateLines.reduce((n, l) => n + l.count, 0);

export function servicePath(slug: string) {
  return `/rates/${slug}`;
}

export function getServiceBySlug(slug: string): WebsiteService | undefined {
  return websiteServices.find((s) => s.slug === slug);
}

export const rateFaqs = [
  {
    q: 'Are these fixed prices?',
    a: 'The prices shown are our published per-video guide rates. Final quotes depend on scope, locations, crew size and turnaround. Weâ€™ll confirm everything in a statement of work before you book.',
  },
  {
    q: 'Can we book a single video?',
    a: 'Yes. You donâ€™t need to book the full annual slate â€” pick the categories you need and weâ€™ll schedule around your dates.',
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
    q: 'Whatâ€™s included in a typical package?',
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
