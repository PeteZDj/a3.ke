import type { Film } from '../types';

// A3 Studios catalogue. Original Kenyan cinema — bold, contemporary, rooted in place.
// Posters/backdrops: /public/images/<kind>/<slug>.webp (magi, compressed) with .svg build fallback.

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
    director: 'Hopeking Muchira',
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
    director: 'Diana Gakuya',
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
    director: 'Hopeking Muchira',
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
    director: 'Diana Gakuya',
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
    director: 'Hopeking Muchira', cast: ['Kenyan SME founders'], accent: '#b91c1c', trailerNote: 'Client reel excerpt.',
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
    director: 'Hopeking Muchira', cast: ['Gor Mahia FC'], accent: '#15803d', trailerNote: 'Club reel excerpt.',
  },
  {
    slug: 'kasarani-athletics-champs', title: 'Kasarani — National Athletics', year: 2025, kind: 'Sport',
    status: 'Now Streaming', rating: 'All ages', runtime: 'Live + 8m recap', language: 'English',
    genres: ['Athletics', 'Track & Field', 'Live'],
    logline: 'Track-side 4K, finish-line super-slo and same-day highlight packages.',
    synopsis: 'End-to-end athletics coverage at Kasarani with athlete interviews and same-night highlights.',
    director: 'Diana Gakuya', cast: ['National athletics team'], accent: '#7c3aed', trailerNote: 'Broadcast reel excerpt.',
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

  // A3 AI Originals — generative / AI-animated shorts made in the A3 AI Lab
  {
    slug: 'neon-savannah', title: 'Neon Savannah', year: 2025, kind: 'Film', ai: true,
    status: 'Now Streaming', rating: 'PG', runtime: '14 min', language: 'Swahili · English',
    genres: ['Animation', 'Afrofuturism', 'Adventure'],
    logline: 'A lone herder crosses a bioluminescent savannah guarded by a spirit lion of light.',
    synopsis: 'A3\'s first fully AI-animated short. In a savannah lit from within, a young herder follows a spirit lion made of light toward a promise left by the ancestors. Every frame was generated, art-directed and finished in the A3 AI Lab — a proof of what Kenyan storytelling can do with new tools.',
    director: 'Diana Gakuya', cast: ['Generative ensemble'], accent: '#22d3ee', trailerNote: 'An A3 AI Original — first look.',
  },
  {
    slug: 'digital-ancestors', title: 'Digital Ancestors', year: 2025, kind: 'Film', ai: true,
    status: 'Now Streaming', rating: 'PG', runtime: '17 min', language: 'English · Luo',
    genres: ['Animation', 'Documentary', 'Afrofuturism'],
    logline: 'A young archivist meets the holographic elders keeping a people\'s memory alive.',
    synopsis: 'An AI-generated speculative documentary. In a near-future Kisumu, a memory archivist converses with luminous holograms of elders — and learns that remembering is its own act of resistance. Made end-to-end in the A3 AI Lab.',
    director: 'Otieno Odhiambo', cast: ['Generative ensemble'], accent: '#38bdf8', trailerNote: 'An A3 AI Original — first look.',
  },
  {
    slug: 'mombasa-2140', title: 'Mombasa 2140', year: 2025, kind: 'Film', ai: true,
    status: 'Now Streaming', rating: 'PG-13', runtime: '20 min', language: 'Swahili · English',
    genres: ['Animation', 'Sci-Fi', 'Adventure'],
    logline: 'In a floating coastal megacity, a dhow pilot smuggles hope past the tide barons.',
    synopsis: 'A sweeping AI-animated sci-fi set in a Mombasa of dhow-shaped towers rising from a risen sea. A young pilot runs one last cargo — and finds the future is worth fighting for. Generated and graded in the A3 AI Lab.',
    director: 'Hopeking Muchira', cast: ['Generative ensemble'], accent: '#f59e0b', trailerNote: 'An A3 AI Original — first look.',
  },
  {
    slug: 'dreamscapes', title: 'Dreamscapes', year: 2026, kind: 'Film', ai: true,
    status: 'Coming Soon', rating: 'PG', runtime: '12 min', language: 'No dialogue',
    genres: ['Animation', 'Art Film', 'Fantasy'],
    logline: 'A sleeping child drifts through a Nairobi that dissolves into birds and gold.',
    synopsis: 'A wordless, painterly AI art-film — a child\'s dream where the city breathes, dissolves into flocks of birds and reassembles in gold light. An experiment in pure generative imagery from the A3 AI Lab.',
    director: 'Sanaa Kariuki', cast: ['Generative ensemble'], accent: '#e0a54b', trailerNote: 'An A3 AI Original — premieres 2026.',
  },
  {
    slug: 'the-signal', title: 'The Signal', year: 2025, kind: 'Film', ai: true,
    status: 'Now Streaming', rating: '13+', runtime: '16 min', language: 'Sheng · English',
    genres: ['Animation', 'Sci-Fi', 'Thriller'],
    logline: 'A rooftop hacker catches a transmission that could rewrite the city\'s code.',
    synopsis: 'A moody AI-animated thriller. On a rain-soaked Nairobi rooftop, a hacker intercepts a beam of light rising from the skyline — a signal that isn\'t supposed to exist. Made in the A3 AI Lab.',
    director: 'Pete Njagi', cast: ['Generative ensemble'], accent: '#2dd4bf', trailerNote: 'An A3 AI Original — first look.',
  },
  {
    slug: 'spirit-machine', title: 'Spirit Machine', year: 2026, kind: 'Film', ai: true,
    status: 'Coming Soon', rating: 'PG-13', runtime: '19 min', language: 'Swahili · English',
    genres: ['Animation', 'Fantasy', 'Adventure'],
    logline: 'A guardian woven from brass and prayer awakens to protect a sacred forest.',
    synopsis: 'An AI-animated myth for the machine age: a guardian built from brass, wood and African pattern stirs to life to defend a glowing sacred forest from those who would drain it. Generated in the A3 AI Lab.',
    director: 'Tunda Omondi', cast: ['Generative ensemble'], accent: '#eab308', trailerNote: 'An A3 AI Original — premieres 2026.',
  },

  // A3 Animation Originals — hand-crafted 2D/3D/CG animated features from the studio
  {
    slug: 'dj24-war-of-sound', title: 'DJ24: War of Sound', year: 2025, kind: 'Film', animation: true,
    status: 'Now Streaming', rating: 'PG', runtime: '1h 38m', language: 'English · Sheng',
    genres: ['Animation', 'Musical', 'Adventure'],
    logline: 'When the city\u2019s music is stolen, a young DJ must rebuild the beat and win the War of Sound.',
    synopsis: 'In a Nairobi built from speakers and light, twelve-year-old Deejay discovers that the city\u2019s music is being silenced note by note. Armed with an old turntable and a fearless crew, he sets out to rebuild the rhythm of his home \u2014 and finds that the loudest sound of all is a city that refuses to go quiet. A vibrant animated musical about family, courage and finding your own beat.',
    director: 'Pete Njagi', cast: ['Voice ensemble'], accent: '#6366f1', trailerNote: 'An A3 Animation Original — first look.',
  },
  {
    slug: 'factor-c', title: 'Factor C', year: 2025, kind: 'Film', animation: true,
    status: 'Now Streaming', rating: 'PG', runtime: '1h 42m', language: 'English · Swahili',
    genres: ['Animation', 'Sci-Fi', 'Adventure'],
    logline: 'A curious girl discovers a glowing element that could save \u2014 or unmake \u2014 her world.',
    synopsis: 'Ada is the youngest inventor in her town, and when she uncovers \u201cFactor C\u201d \u2014 a crystal humming with impossible energy \u2014 she becomes the only one who can protect it. Chased across the highlands by those who would misuse its power, Ada learns that the greatest force of all is the one inside her. A warm, wondrous animated adventure about discovery and doing what\u2019s right.',
    director: 'Diana Gakuya', cast: ['Voice ensemble'], accent: '#22d3ee', trailerNote: 'An A3 Animation Original — first look.',
  },
  {
    slug: 'billionaire-x', title: 'Billionaire X', year: 2025, kind: 'Film', animation: true,
    status: 'Now Streaming', rating: 'PG', runtime: '1h 45m', language: 'English · Sheng',
    genres: ['Animation', 'Comedy', 'Adventure'],
    logline: 'A broke market kid stumbles into a fortune \u2014 and the wildest, funniest day of his life.',
    synopsis: 'Ex hustles sodas at the busiest market in the city, dreaming big and owning nothing. Then one lost briefcase turns his ordinary morning into a laugh-out-loud chase across town, where he learns that being a real \u201cbillionaire\u201d has nothing to do with money. A fast, funny, big-hearted animated comedy for the whole family.',
    director: 'Hopeking Muchira', cast: ['Voice ensemble'], accent: '#f59e0b', trailerNote: 'An A3 Animation Original — first look.',
  },
  {
    slug: 'planet-infinite', title: 'Planet Infinite', year: 2026, kind: 'Film', animation: true,
    status: 'Coming Soon', rating: 'PG', runtime: '1h 40m', language: 'English',
    genres: ['Animation', 'Sci-Fi', 'Family'],
    logline: 'Two young explorers leap between endless worlds to find their way home.',
    synopsis: 'When a backyard experiment flings siblings Zola and Juma through a doorway to Planet Infinite \u2014 a universe of endless, ever-changing worlds \u2014 they must work together, world by world, to find the way back. A dazzling animated space adventure about wonder, siblinghood and the pull of home.',
    director: 'Sanaa Kariuki', cast: ['Voice ensemble'], accent: '#a78bfa', trailerNote: 'An A3 Animation Original — premieres 2026.',
  },
  {
    slug: 'chai-and-the-comet', title: 'Chai & the Comet', year: 2026, kind: 'Film', animation: true,
    status: 'Coming Soon', rating: 'G', runtime: '1h 30m', language: 'No dialogue · Score',
    genres: ['Animation', 'Fantasy', 'Family'],
    logline: 'A highland girl befriends a fallen comet and races to return it to the sky.',
    synopsis: 'High in the misty tea farms, a lonely girl named Chai finds a comet that has tumbled to earth \u2014 warm, glowing and very far from home. Together they journey across a hushed, painterly Kenya to send it back to the stars, and Chai learns that goodbyes can be the most beautiful part of a friendship. A wordless, tender animated fable told through image and score.',
    director: 'Sanaa Kariuki', cast: ['Voice ensemble'], accent: '#fb7185', trailerNote: 'An A3 Animation Original — premieres 2026.',
  },
  {
    slug: 'the-last-baobab', title: 'The Last Baobab', year: 2025, kind: 'Film', animation: true,
    status: 'Now Streaming', rating: 'G', runtime: '1h 34m', language: 'English · Swahili',
    genres: ['Animation', 'Adventure', 'Nature'],
    logline: 'The animals of the savannah unite to protect the oldest tree in the world.',
    synopsis: 'When the ancient baobab that shelters every creature on the plain begins to fade, an unlikely band of animals \u2014 led by a very small, very brave meerkat \u2014 sets out to save it. Across a golden-hour Serengeti, they discover that even the mightiest tree grows from the smallest act of courage. A sweeping, heartwarming animated adventure about home and the wild things worth protecting.',
    director: 'Tunda Omondi', cast: ['Voice ensemble'], accent: '#84cc16', trailerNote: 'An A3 Animation Original — first look.',
  },

  // A3 Anime — episodic animated series (shown in Series & Docs and Animation)
  {
    slug: 'billionaire-x-the-series', title: 'Billionaire X: The Series', year: 2026, kind: 'Series', animation: true,
    status: 'Now Streaming', rating: 'PG', runtime: '8-episode series', language: 'English · Sheng',
    genres: ['Anime', 'Comedy', 'Adventure'],
    logline: 'The hit animated comedy returns as a series — one broke market kid, a whole city of trouble.',
    synopsis: 'Fresh off the wildest day of his life, Ex is back — and now the whole city knows his name. Across eight fast, funny episodes, our favourite market hustler juggles new schemes, old friends and the growing legend of \u201cBillionaire X\u201d, learning again and again that real riches have nothing to do with money. A big-hearted anime comedy series for the whole family.',
    director: 'Hopeking Muchira', cast: ['Voice ensemble'], accent: '#f59e0b', trailerNote: 'An A3 Anime Original — new episodes monthly.',
  },
  {
    slug: 'neon-ronin', title: 'Neon Ronin', year: 2026, kind: 'Series', animation: true,
    status: 'Now Streaming', rating: '13+', runtime: '12-episode series', language: 'Swahili · English',
    genres: ['Anime', 'Action', 'Sci-Fi'],
    logline: 'A masterless swordswoman guards a rain-soaked Nairobi where memories are currency.',
    synopsis: 'In a neon megacity built on stolen memory, a wandering ronin sells her blade to those the system forgot. Twelve stylish, hard-edged episodes trade in honour, revenge and the price of remembering — A3\u2019s first action anime, drawn in the studio\u2019s signature Afro-cyberpunk style.',
    director: 'Diana Gakuya', cast: ['Voice ensemble'], accent: '#7c3aed', trailerNote: 'An A3 Anime Original — season one streaming.',
  },
  {
    slug: 'savannah-guardians', title: 'Savannah Guardians', year: 2026, kind: 'Series', animation: true,
    status: 'Coming Soon', rating: 'PG', runtime: '10-episode series', language: 'English · Swahili',
    genres: ['Anime', 'Adventure', 'Fantasy'],
    logline: 'Five kids and their spirit-animal partners defend the last wild places of the plains.',
    synopsis: 'When the ancient balance of the savannah begins to break, five young guardians awaken bonds with towering spirit animals \u2014 lion, elephant, crane, pangolin and cheetah. Ten sweeping episodes of teamwork, courage and wonder, drawn as a warm, cinematic anime for family audiences everywhere.',
    director: 'Tunda Omondi', cast: ['Voice ensemble'], accent: '#16a34a', trailerNote: 'An A3 Anime Original — premieres 2026.',
  },
];

export const getFilm = (slug: string): Film | undefined =>
  films.find((f) => f.slug === slug);

export const featuredFilms = (): Film[] => films.filter((f) => f.featured);

/** A3 AI Originals (generative). */
export const aiFilms = (): Film[] => films.filter((f) => f.ai);

/** A3 Animation Originals (2D/3D/CG animated films). */
export const animatedFilms = (): Film[] => films.filter((f) => f.animation);

/** Everything in the standard catalogue — excludes AI + Animation Originals (dedicated pages). */
export const standardFilms = (): Film[] => films.filter((f) => !f.ai && !f.animation);

// Standard catalogue selectors exclude AI + Animation Originals (they have dedicated pages).
export const byStatus = (status: Film['status']): Film[] =>
  films.filter((f) => f.status === status && !f.ai && !f.animation);

export const byKind = (kind: Film['kind']): Film[] =>
  films.filter((f) => f.kind === kind && !f.ai && !f.animation);

const filmGroup = (f: Film): 'ai' | 'animation' | 'standard' =>
  f.ai ? 'ai' : f.animation ? 'animation' : 'standard';

export const relatedFilms = (film: Film, count = 6): Film[] => {
  const scored = films
    .filter((f) => f.slug !== film.slug && filmGroup(f) === filmGroup(film))
    .map((f) => ({
      f,
      score: f.genres.filter((g) => film.genres.includes(g)).length,
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.f);
};

export const allGenres = (): string[] =>
  Array.from(new Set(films.filter((f) => !f.ai).flatMap((f) => f.genres))).sort();
