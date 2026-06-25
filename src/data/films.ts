import type { Film } from '../types';

// A3 Studios catalogue. Original Kenyan cinema — bold, contemporary, rooted in place.
// Posters live in /public/images/posters/<slug>.svg (generated at build), backdrops in /public/images/backdrops/<slug>.svg.
// Real photos can replace SVGs at the same path. Missing files fall back to inline artwork in the UI.

export const films: Film[] = [
  {
    slug: 'nairobi-after-dark',
    title: 'Nairobi After Dark',
    year: 2025,
    kind: 'Film',
    status: 'Now Streaming',
    rating: '16+',
    runtime: '2h 04m',
    language: 'English · Swahili',
    genres: ['Crime', 'Thriller', 'Neo-Noir'],
    logline:
      'A burnt-out detective chases a ghost through the neon underbelly of a city that never sleeps.',
    synopsis:
      'When a string of impossible heists rattles the capital, Detective Asha Mwangi is pulled back into a world she swore she had left behind. Across one feverish week — from the rooftop bars of Westlands to the cargo yards of the Industrial Area — she trails a thief who seems to know her every move. A slick, rain-soaked neo-noir about debt, loyalty and the price of a clean conscience.',
    director: 'Pete Njagi',
    cast: ['Neema Achieng', 'Otieno Odhiambo', 'Daudi Kimani', 'Halima Hassan'],
    featured: true,
    accent: '#3b82f6',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'the-rift',
    title: 'The Rift',
    year: 2025,
    kind: 'Film',
    status: 'Now Streaming',
    rating: 'PG-13',
    runtime: '2h 18m',
    language: 'Swahili · English',
    genres: ['Survival', 'Drama', 'Adventure'],
    logline:
      'Two estranged brothers must cross the Great Rift Valley on foot — or lose everything they love.',
    synopsis:
      'After a failed land deal threatens their family ranch, brothers Baraka and Juma set out across the escarpment to reach the one man who can save them. What begins as a journey of necessity becomes a reckoning with the wild beauty of the valley and the fault lines running through their own blood. Shot on location across Lake Magadi and Hell\'s Gate.',
    director: 'Baraka Kipchoge',
    cast: ['Jabari Mutua', 'Daudi Kimani', 'Zawadi Mwangi'],
    featured: true,
    accent: '#f59e0b',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'savannah',
    title: 'Savannah',
    year: 2024,
    kind: 'Film',
    status: 'Now Streaming',
    rating: 'PG',
    runtime: '1h 56m',
    language: 'English · Maa',
    genres: ['Adventure', 'Drama', 'Nature'],
    logline:
      'A young ranger and an orphaned elephant calf become each other\'s last hope in the Mara.',
    synopsis:
      'On the edge of the Maasai Mara, trainee ranger Imani forms an unlikely bond with a calf separated from its herd by poachers. As the dry season tightens its grip, she must outwit the syndicate hunting them and lead the calf home. A sweeping, golden-hour epic about guardianship and the wild things worth fighting for.',
    director: 'Imani Wekesa',
    cast: ['Sanaa Kariuki', 'Tunda Omondi', 'Neema Achieng'],
    featured: true,
    accent: '#d97706',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'matatu',
    title: 'Matatu',
    year: 2024,
    kind: 'Film',
    status: 'Now Streaming',
    rating: '13+',
    runtime: '1h 47m',
    language: 'Sheng · Swahili',
    genres: ['Action', 'Comedy'],
    logline:
      'One driver. One pimped-out matatu. One very bad day on the streets of Nairobi.',
    synopsis:
      'Kevo just wanted to make rent. Instead, the flashiest matatu on Route 58 lands him in the middle of a citywide chase, a missing duffel bag, and a rivalry that turns the morning commute into a demolition derby. A turbo-charged, horn-blasting love letter to Nairobi\'s most chaotic art form.',
    director: 'Tunda Omondi',
    cast: ['Daudi Kimani', 'Halima Hassan', 'Jabari Mutua'],
    accent: '#dc2626',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'pwani',
    title: 'Pwani',
    year: 2024,
    kind: 'Film',
    status: 'Now Streaming',
    rating: '16+',
    runtime: '2h 02m',
    language: 'Swahili · English',
    genres: ['Romance', 'Drama'],
    logline:
      'On the old streets of Lamu, a chef and a sailor fall in love against the turning of the monsoon.',
    synopsis:
      'Returning to the coast to settle her late grandmother\'s spice shop, Zuhura meets Salim, a dhow captain with one season left before he leaves for good. As the kaskazi winds shift, the two must decide whether to follow the tide or build something that lasts. A luminous, sun-drenched romance steeped in Swahili culture and coastal cuisine.',
    director: 'Halima Hassan',
    cast: ['Sanaa Kariuki', 'Otieno Odhiambo', 'Zawadi Mwangi'],
    accent: '#0891b2',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'mama-africa',
    title: 'Mama Africa',
    year: 2023,
    kind: 'Film',
    status: 'Now Streaming',
    rating: 'PG-13',
    runtime: '2h 11m',
    language: 'English · Swahili',
    genres: ['Biography', 'Drama', 'Music'],
    logline:
      'The untold story of the woman whose voice carried a movement across a continent.',
    synopsis:
      'From a tin-roof church choir to sold-out halls in three continents, Mama Africa traces the rise of a singer who turned her songs into a rallying cry. A stirring, music-filled portrait of art as resistance — and the cost of becoming a symbol.',
    director: 'Pete Njagi',
    cast: ['Neema Achieng', 'Sanaa Kariuki', 'Jabari Mutua'],
    accent: '#7c3aed',
    trailerNote: 'Official trailer premieres soon on A3.',
  },
  {
    slug: 'harambee',
    title: 'Harambee',
    year: 2026,
    kind: 'Film',
    status: 'Coming Soon',
    rating: 'PG-13',
    runtime: '2h 25m',
    language: 'Swahili · English',
    genres: ['History', 'Drama'],
    logline:
      'In the final days before independence, a small village must decide what freedom is worth.',
    synopsis:
      'Spanning the charged months of 1963, Harambee follows three families in a highland village as the country holds its breath on the edge of a new era. An epic, intimate drama about hope, sacrifice and the meaning of "pulling together."',
    director: 'Baraka Kipchoge',
    cast: ['Jabari Mutua', 'Neema Achieng', 'Daudi Kimani', 'Halima Hassan'],
    accent: '#16a34a',
    trailerNote: 'Premieres 2026. First-look trailer coming soon.',
  },
  {
    slug: 'kanju',
    title: 'Kanju',
    year: 2026,
    kind: 'Film',
    status: 'Coming Soon',
    rating: '13+',
    runtime: '2h 09m',
    language: 'English · Sheng',
    genres: ['Sci-Fi', 'Adventure'],
    logline:
      'In a solar-powered Nairobi of 2099, a teenage hacker uncovers a secret buried in the city\'s code.',
    synopsis:
      'Kanju imagines a gleaming, Afrofuturist capital where opportunity flows like current — until a glitch reveals who really controls the grid. A dazzling, hopeful sci-fi adventure about ingenuity, community and the future Africa is building for itself.',
    director: 'Imani Wekesa',
    cast: ['Tunda Omondi', 'Sanaa Kariuki', 'Otieno Odhiambo'],
    accent: '#06b6d4',
    trailerNote: 'Premieres 2026. First-look trailer coming soon.',
  },
  {
    slug: 'ziwa',
    title: 'Ziwa',
    year: 2026,
    kind: 'Film',
    status: 'In Production',
    rating: '16+',
    runtime: 'In production',
    language: 'Swahili · Luo',
    genres: ['Mystery', 'Supernatural'],
    logline:
      'When the fishermen of Lake Victoria start disappearing, one widow refuses to look away.',
    synopsis:
      'A haunting mystery set among the islands of Lake Victoria, where old stories and new griefs rise to the surface. As night falls over the water, the line between the living and the lost grows dangerously thin.',
    director: 'Pete Njagi',
    cast: ['Halima Hassan', 'Jabari Mutua', 'Zawadi Mwangi'],
    accent: '#4338ca',
    trailerNote: 'Currently in production.',
  },
  {
    slug: 'maridadi',
    title: 'Maridadi',
    year: 2025,
    kind: 'Series',
    status: 'Now Streaming',
    rating: '16+',
    runtime: '8 episodes',
    language: 'English · Swahili',
    genres: ['Drama', 'Fashion'],
    logline:
      'Behind the runways of Nairobi\'s fashion week, ambition is the only thing in style.',
    synopsis:
      'Maridadi follows a fearless young designer clawing her way into Nairobi\'s cutthroat fashion scene, where every seam hides a secret and every show is a battlefield. Glamorous, sharp and addictive — a series about reinvention and the price of the spotlight.',
    director: 'Sanaa Kariuki',
    cast: ['Zawadi Mwangi', 'Neema Achieng', 'Tunda Omondi'],
    accent: '#db2777',
    trailerNote: 'All 8 episodes now streaming on A3.',
  },
  {
    slug: 'ngoma',
    title: 'Ngoma',
    year: 2024,
    kind: 'Documentary',
    status: 'Now Streaming',
    rating: 'PG',
    runtime: '6 episodes',
    language: 'Swahili · English',
    genres: ['Documentary', 'Music'],
    logline:
      'A pulse-pounding journey through the sounds reshaping a continent — beat by beat.',
    synopsis:
      'From benga to gengetone, Ngoma travels through studios, street corners and stadiums to map the music driving a new African generation. A vibrant docuseries about rhythm, identity and the artists turning the volume all the way up.',
    director: 'Otieno Odhiambo',
    cast: ['Featuring artists across East Africa'],
    accent: '#ea580c',
    trailerNote: 'All 6 episodes now streaming on A3.',
  },
  {
    slug: 'sheng',
    title: 'Sheng',
    year: 2025,
    kind: 'Film',
    status: 'Now Streaming',
    rating: '16+',
    runtime: '1h 52m',
    language: 'Sheng · Swahili',
    genres: ['Drama', 'Coming of Age'],
    logline:
      'Four friends in Eastlands have one summer to chase a dream bigger than their neighbourhood.',
    synopsis:
      'In the crowded, electric streets of Nairobi\'s Eastlands, four teenagers form a crew with nothing but talent and nerve. As a talent competition offers a way out, friendship, family and loyalty are all put to the test. A heartfelt, kinetic coming-of-age story told in the language of the streets.',
    director: 'Tunda Omondi',
    cast: ['Daudi Kimani', 'Sanaa Kariuki', 'Jabari Mutua', 'Halima Hassan'],
    accent: '#65a30d',
    trailerNote: 'Now streaming on A3.',
  },

  // Commercial & branded video
  {
    slug: 'safaricom-5g-launch', title: 'Safaricom 5G — City Pulse', year: 2025, kind: 'Commercial',
    status: 'Now Streaming', rating: 'All ages', runtime: '60s · 90s · 30s cuts', language: 'English · Swahili',
    genres: ['Brand Film', 'Tech', 'Launch'],
    logline: 'A kinetic launch film for Kenya’s widest 5G rollout — neon streets, real Nairobi.',
    synopsis: 'Multi-format campaign: 60s hero, 90s extended and social cutdowns. Drone sweeps, handheld street energy and product hero shots across Westlands and the Industrial Area.',
    director: 'Pete Njagi', cast: ['Brand talent · A3 crew'], accent: '#16a34a', trailerNote: 'Client reel excerpt.',
  },
  {
    slug: 'equity-bank-sme', title: 'Equity Bank — Built Here', year: 2024, kind: 'Commercial',
    status: 'Now Streaming', rating: 'All ages', runtime: '2m 15s', language: 'English · Swahili',
    genres: ['Corporate', 'Documentary-style'],
    logline: 'Real SME founders. One bank. A film about building from the ground up.',
    synopsis: 'Documentary-style brand film following three Kenyan entrepreneurs from workshop to storefront.',
    director: 'Baraka Kipchoge', cast: ['Kenyan SME founders'], accent: '#b91c1c', trailerNote: 'Client reel excerpt.',
  },
  {
    slug: 'tusker-music-festival', title: 'Tusker — Festival Anthem', year: 2024, kind: 'Commercial',
    status: 'Now Streaming', rating: 'All ages', runtime: '45s', language: 'English · Sheng',
    genres: ['Music Video', 'Live Event'],
    logline: 'Crowd, colour, bass — a festival spot cut in under 48 hours from live footage.',
    synopsis: 'Same-day ingest, overnight edit, delivery before sunrise for a major beer-brand festival spot.',
    director: 'Tunda Omondi', cast: ['Festival performers'], accent: '#ca8a04', trailerNote: 'Client reel excerpt.',
  },
  {
    slug: 'unicef-education-campaign', title: 'UNICEF — Every Child Learns', year: 2023, kind: 'Commercial',
    status: 'Now Streaming', rating: 'All ages', runtime: '90s · social suite', language: 'English · Swahili',
    genres: ['NGO', 'Social impact'],
    logline: 'A multi-language PSA suite for regional broadcast.',
    synopsis: 'Hero film plus 30s/15s cutdowns, vertical social edits and stills. Shot in Nairobi, Mombasa and Kisumu.',
    director: 'Otieno Odhiambo', cast: ['Educators · community leaders'], accent: '#0284c7', trailerNote: 'Client reel excerpt.',
  },

  // Sport coverage
  {
    slug: 'kenya-rugby-safari-sevens', title: 'Safari Sevens — Full Coverage', year: 2025, kind: 'Sport',
    status: 'Now Streaming', rating: 'All ages', runtime: 'Matchday broadcast package', language: 'English',
    genres: ['Rugby', 'HSBC Sevens', 'Broadcast'],
    logline: 'Multi-cam match coverage and post-match interviews for Kenya’s home Sevens.',
    synopsis: 'Six-camera match coverage, slo-mo replays, tunnel cams and a 12-minute tournament recap.',
    director: 'Tunda Omondi', cast: ['Kenya Sevens'], featured: true, accent: '#dc2626', trailerNote: 'Broadcast reel excerpt.',
  },
  {
    slug: 'gor-mahia-kpl-highlights', title: 'Gor Mahia — Season Highlights', year: 2024, kind: 'Sport',
    status: 'Now Streaming', rating: 'All ages', runtime: '22m season film', language: 'Swahili · English',
    genres: ['Football', 'KPL', 'Highlights'],
    logline: 'A season-long football film — goals, derbies and locker-room moments.',
    synopsis: 'Embedded with Gor Mahia for a full KPL season: highlights, tunnel access and a narrated season review.',
    director: 'Baraka Kipchoge', cast: ['Gor Mahia FC'], accent: '#15803d', trailerNote: 'Club reel excerpt.',
  },
  {
    slug: 'kasarani-athletics-champs', title: 'Kasarani — National Athletics', year: 2025, kind: 'Sport',
    status: 'Now Streaming', rating: 'All ages', runtime: 'Live + 8m recap', language: 'English',
    genres: ['Athletics', 'Track & Field', 'Live'],
    logline: 'Track-side 4K, finish-line super-slo and same-day highlight packages.',
    synopsis: 'End-to-end athletics coverage at Kasarani with athlete interviews and same-night highlights.',
    director: 'Imani Wekesa', cast: ['National athletics team'], accent: '#7c3aed', trailerNote: 'Broadcast reel excerpt.',
  },
  {
    slug: 'junior-hoops-nairobi', title: 'Junior Hoops — Nairobi League', year: 2024, kind: 'Sport',
    status: 'Now Streaming', rating: 'All ages', runtime: '10-episode series', language: 'English · Sheng',
    genres: ['Basketball', 'Youth', 'Series'],
    logline: 'A youth basketball league filmed like a docuseries.',
    synopsis: 'Ten short episodes following neighbourhood teams through a Nairobi junior league.',
    director: 'Sanaa Kariuki', cast: ['Junior league athletes'], accent: '#f97316', trailerNote: 'Series trailer on request.',
  },
  {
    slug: 'boxing-night-kenya', title: 'Fight Night Kenya — Main Card', year: 2025, kind: 'Sport',
    status: 'Coming Soon', rating: '16+', runtime: 'PPV broadcast package', language: 'English',
    genres: ['Boxing', 'Combat', 'Live'],
    logline: 'Ring cams, corner audio and walkout films for a Nairobi arena boxing card.',
    synopsis: 'Full fight-night production: walkout films, five-camera ring coverage and post-fight interviews.',
    director: 'Pete Njagi', cast: ['Kenyan boxing roster'], accent: '#991b1b', trailerNote: 'Premieres on the next fight card.',
  },
];

export const getFilm = (slug: string): Film | undefined =>
  films.find((f) => f.slug === slug);

export const featuredFilms = (): Film[] => films.filter((f) => f.featured);

export const byStatus = (status: Film['status']): Film[] =>
  films.filter((f) => f.status === status);

export const byKind = (kind: Film['kind']): Film[] =>
  films.filter((f) => f.kind === kind);

export const relatedFilms = (film: Film, count = 6): Film[] => {
  const scored = films
    .filter((f) => f.slug !== film.slug)
    .map((f) => ({
      f,
      score: f.genres.filter((g) => film.genres.includes(g)).length,
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.f);
};

export const allGenres = (): string[] =>
  Array.from(new Set(films.flatMap((f) => f.genres))).sort();
