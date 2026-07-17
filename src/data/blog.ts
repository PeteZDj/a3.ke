// ============================================================================
//  A3 JOURNAL — staff blog posts.
//  Images are photographic placeholders hosted locally in /images/blog
//  (downloaded from the open web / Openverse — no AI art). Each post links
//  to a real A3 collective member as its author.
// ============================================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;        // matches a name in data/people.ts where possible
  authorRole: string;
  date: string;          // ISO date
  readMins: number;
  category: string;
  cover: string;         // /images/blog/blog-XX.webp
  tags: string[];
  body: string[];        // paragraphs
  pullquote?: string;
}

export const blogCategories = [
  'All', 'Craft', 'AI Lab', 'On Set', 'Studio', 'Industry', 'Sport',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'nairobi-after-dark-neon-look',
    title: 'Lighting Nairobi after dark: building our neon-noir look',
    excerpt: 'How we turned Westlands rooftops and the Industrial Area into a rain-soaked neo-noir playground for A3\u2019s first thriller.',
    author: 'Tunda Omondi', authorRole: 'Director of Photography',
    date: '2025-06-18', readMins: 6, category: 'Craft', cover: '/images/blog/blog-01.webp',
    tags: ['Cinematography', 'Lighting', 'Neo-noir'],
    pullquote: 'The city already glows \u2014 our job was to shape that glow, not fight it.',
    body: [
      'When we set out to shoot Nairobi After Dark, the brief was simple and terrifying: make the city itself the co-star. Nairobi at night is a riot of colour \u2014 matatu strips, shopfront LEDs, the sodium wash of the highways \u2014 and we wanted every frame to feel like you could reach out and touch the wet tarmac.',
      'We built the look around practical light. Rather than flooding locations with our own units, we chased existing sources: neon signage, phone screens, the blue spill of a fridge in a late-night duka. Where we needed to add, we hid small RGB tubes just out of frame and dialled them to match the ambient colour temperature.',
      'The rain was the final ingredient. A modest rain tower and a lot of patience turned ordinary streets into mirrors, doubling every light source and giving the grade something to bite into. By the time we reached the edit, half the mood was already baked into the negative.',
      'The lesson, as always: the best cinematography on a Kenyan budget is observational. The city already glows \u2014 our job was to shape that glow, not fight it.',
    ],
  },
  {
    slug: 'inside-the-ai-lab',
    title: 'Inside the A3 AI Lab: how we made Neon Savannah',
    excerpt: 'A frame-by-frame look at our first fully AI-animated short \u2014 the pipeline, the pitfalls and why it still needs a director.',
    author: 'Diana Gakuya', authorRole: 'Head of Production',
    date: '2025-06-02', readMins: 8, category: 'AI Lab', cover: '/images/blog/blog-02.webp',
    tags: ['AI Lab', 'Animation', 'Pipeline'],
    pullquote: 'The tools generate images. Directors generate meaning.',
    body: [
      'Neon Savannah started as a single sentence: a lone herder crosses a bioluminescent savannah guarded by a spirit lion of light. Turning that into fourteen minutes of coherent, moving animation took a pipeline we\u2019d never built before.',
      'We treated the AI like a very fast, very literal concept artist. Every shot began with a written brief, a colour script and reference frames. Only then did we generate \u2014 in batches, throwing away far more than we kept. Consistency of character was the hardest problem; we solved it with tight prompts, seed control and a lot of hand-cleanup in post.',
      'What surprised us was how much traditional craft still mattered. Shot length, cutting rhythm, the placement of a horizon line \u2014 none of that comes from a model. The tools generate images. Directors generate meaning.',
      'We\u2019re releasing our internal checklist to the rest of the studio so every A3 filmmaker can experiment. The AI Lab isn\u2019t a replacement for our crews \u2014 it\u2019s a new camera in the kit.',
    ],
  },
  {
    slug: 'funding-a-film-on-kuza',
    title: 'How we funded a feature on Kuza \u2014 transparently',
    excerpt: 'Splitting revenue 85/15, publishing every shilling, and why radical transparency made our crews stronger.',
    author: 'Pete Njagi', authorRole: 'Founder & Studio Head',
    date: '2025-05-20', readMins: 7, category: 'Industry', cover: '/images/blog/blog-03.webp',
    tags: ['Funding', 'Kuza', 'Transparency'],
    pullquote: 'When everyone can see the ledger, everyone trusts the deal.',
    body: [
      'For years, the hardest conversation in African film wasn\u2019t about story \u2014 it was about money. Who put in what, who gets paid when, and why. We decided to make that conversation public.',
      'Every A3 title now lists its financials on Kuza\u2019s Film Club ledger: the funding goal, the amount raised, the budget breakdown and the cast-and-crew revenue splits. We pay out 85% to the people who make the film; Kuza keeps a flat 15% platform fee.',
      'The effect on morale was immediate. When everyone can see the ledger, everyone trusts the deal. Crews who once haggled over day rates now talk about upside \u2014 because they can watch their share grow with every view.',
      'Transparency isn\u2019t charity. It\u2019s the most efficient marketing we\u2019ve ever done. Audiences want to fund films whose makers they can see getting paid.',
    ],
  },
  {
    slug: 'shooting-the-rift-on-foot',
    title: 'Crossing the Rift on foot: the making of a survival epic',
    excerpt: 'Thirty-one days on the escarpment with a fully Kenyan crew, two brothers and one very stubborn camera cart.',
    author: 'Hopeking Muchira', authorRole: 'Head of Film',
    date: '2025-05-04', readMins: 9, category: 'On Set', cover: '/images/blog/blog-04.webp',
    tags: ['Location', 'Epics', 'Production'],
    body: [
      'The Rift is a film about two brothers walking across the Great Rift Valley. We decided, perhaps foolishly, to actually walk it.',
      'Shooting in sequence and on location meant our actors\u2019 exhaustion was real \u2014 you can\u2019t fake the way a body moves after a week on the escarpment. It also meant logistics became the whole game: water, power, dust management and a camera cart that fought us every step through Hell\u2019s Gate.',
      'We kept the unit tiny on purpose. A small, fast crew can chase the golden hour up a ridge; a big one cannot. Everyone carried gear, everyone problem-solved, and the film is better for the intimacy that forced on us.',
      'Would we do it again? Ask us after the next one.',
    ],
  },
  {
    slug: 'editing-maridadi-fashion-drama',
    title: 'Cutting Maridadi: rhythm, runway and the art of the reveal',
    excerpt: 'Eight episodes of Nairobi fashion week meant learning to edit like a stylist \u2014 fast, bold and never boring.',
    author: 'Sanaa Kariuki', authorRole: 'Head of Series',
    date: '2025-04-15', readMins: 5, category: 'Craft', cover: '/images/blog/blog-05.webp',
    tags: ['Editing', 'Series', 'Fashion'],
    body: [
      'A fashion drama lives or dies in the cut. Maridadi had glamour, secrets and a lot of very fast talking \u2014 my job was to make sure the audience never caught their breath.',
      'We built each episode around a reveal: a design, a betrayal, a look walking the runway. Everything before it is setup; everything after is fallout. Once you find that spine, the pacing writes itself.',
      'I cut the runway sequences to the music first, then hung the drama off the beats. It\u2019s the closest editing gets to choreography.',
    ],
  },
  {
    slug: 'documentary-sound-first',
    title: 'Sound-first documentary: how Ngoma found its rhythm',
    excerpt: 'Why we recorded the music before we shot a single frame \u2014 and let the beat lead the edit.',
    author: 'Otieno Odhiambo', authorRole: 'Head of Documentary',
    date: '2025-03-28', readMins: 6, category: 'Craft', cover: '/images/blog/blog-06.webp',
    tags: ['Documentary', 'Sound', 'Music'],
    body: [
      'Most documentaries are shot, then scored. We flipped it. For Ngoma \u2014 our series on the sounds reshaping the continent \u2014 the music came first.',
      'We spent weeks in studios and on street corners recording the artists, then built the visual grammar around what we\u2019d captured. When the beat drops, the cut drops. When a verse breathes, so does the picture.',
      'A former sound recordist never really stops being one. I still cut to the waveform.',
    ],
  },
  {
    slug: 'covering-safari-sevens',
    title: 'Six cameras, one weekend: covering Safari Sevens',
    excerpt: 'Behind the multi-cam broadcast package \u2014 tunnel cams, super slo-mo and a same-day tournament recap.',
    author: 'Tunda Omondi', authorRole: 'Director of Photography',
    date: '2025-03-10', readMins: 5, category: 'Sport', cover: '/images/blog/blog-07.webp',
    tags: ['Sport', 'Broadcast', 'Live'],
    body: [
      'Live sport is the one discipline where you cannot call cut. Safari Sevens threw everything at us: pace, weather and a crowd that would not sit still.',
      'We ran six cameras \u2014 wide, two long lenses, a tunnel cam, a roaming handheld and a super-slo. The gallery is where the film is really made, calling the cut in real time as the play develops.',
      'By the final whistle we had a twelve-minute recap ready to publish. Same-day turnaround is now standard on our sport slate.',
    ],
  },
  {
    slug: 'the-collective-model',
    title: 'Why A3 is built as a collective, not a hierarchy',
    excerpt: 'Directors who produce, actors who direct \u2014 how a flat, multi-skilled team makes better films faster.',
    author: 'Pete Njagi', authorRole: 'Founder & Studio Head',
    date: '2025-02-22', readMins: 7, category: 'Studio', cover: '/images/blog/blog-08.webp',
    tags: ['Studio', 'Team', 'Culture'],
    pullquote: 'The best idea in the room wins, whoever brought it.',
    body: [
      'A3 doesn\u2019t really have departments. Our head of documentary composes scores. Our DP directs comedies. An actor on one film is directing the next.',
      'That flexibility isn\u2019t an accident \u2014 it\u2019s the whole model. A collective of multi-skilled people can move faster, cover for each other and take creative risks a rigid hierarchy never would.',
      'The rule we live by: the best idea in the room wins, whoever brought it. It\u2019s messier than a chain of command. It\u2019s also why the work keeps getting better.',
    ],
  },
  {
    slug: 'colour-grading-savannah',
    title: 'Grading golden hour: the colour of Savannah',
    excerpt: 'Chasing the Mara\u2019s impossible light \u2014 and rebuilding it in the grade when the sun refused to cooperate.',
    author: 'Sanaa Kariuki', authorRole: 'Head of Series',
    date: '2025-02-05', readMins: 5, category: 'Craft', cover: '/images/blog/blog-09.webp',
    tags: ['Colour', 'Grading', 'Nature'],
    body: [
      'Savannah is a film bathed in golden light. The problem with golden hour is that it lasts about forty minutes and does whatever it wants.',
      'We shot flat and protected our highlights, knowing we\u2019d build the warmth back in the grade. The savannah\u2019s real palette \u2014 ochre, dust, that particular green after rain \u2014 became our reference for every shot.',
      'A good grade is invisible. If you noticed the colour, we did it wrong.',
    ],
  },
  {
    slug: 'training-the-next-generation',
    title: 'The A3 attachment programme: training the next crew',
    excerpt: 'How we bring young Kenyan filmmakers onto real sets \u2014 paid, mentored and credited from day one.',
    author: 'Diana Gakuya', authorRole: 'Head of Production',
    date: '2025-01-18', readMins: 6, category: 'Studio', cover: '/images/blog/blog-10.webp',
    tags: ['Training', 'Community', 'Careers'],
    body: [
      'The single biggest constraint on Kenyan film isn\u2019t cameras or money \u2014 it\u2019s experienced crew. So we decided to build our own.',
      'Every A3 production carries paid attachments: young ADs, camera assistants, sound trainees and edit apprentices who shadow our leads and take on real responsibility. They\u2019re credited on the film, because a credit is a career.',
      'Some of our best full-time crew started as attachments two years ago. That pipeline is now one of the studio\u2019s proudest assets.',
    ],
  },
  {
    slug: 'writing-afrofuturism-kanju',
    title: 'Writing Afrofuturism: the world of Kanju',
    excerpt: 'Building a solar-powered Nairobi of 2099 that feels hopeful, specific and unmistakably Kenyan.',
    author: 'Diana Gakuya', authorRole: 'Head of Production',
    date: '2024-12-20', readMins: 7, category: 'Craft', cover: '/images/blog/blog-11.webp',
    tags: ['Writing', 'Sci-Fi', 'Afrofuturism'],
    body: [
      'Most screen sci-fi imagines Africa\u2019s future as either a disaster or a blank. Kanju refuses both. We wanted a gleaming, solar-powered Nairobi of 2099 that grew out of the city we actually live in.',
      'That meant grounding every futuristic idea in something real: matatu culture becomes autonomous transit art, harambee becomes crowd-powered infrastructure, Sheng becomes the language of the code.',
      'Optimism is harder to write than dystopia. It\u2019s also more useful.',
    ],
  },
  {
    slug: 'from-lamu-with-love',
    title: 'From Lamu with love: shooting a coastal romance',
    excerpt: 'Monsoon winds, dhow captains and Swahili cuisine \u2014 how Pwani captured the light of the coast.',
    author: 'Halima Hassan', authorRole: 'Actor & Director',
    date: '2024-12-02', readMins: 6, category: 'On Set', cover: '/images/blog/blog-12.webp',
    tags: ['Coast', 'Romance', 'Directing'],
    pullquote: 'Lamu doesn\u2019t need a set dresser. You just have to be ready when the light arrives.',
    body: [
      'Pwani was my feature directing debut, and there was only one place to shoot it: home. Lamu\u2019s old town, its dhows and its kaskazi winds are characters in the film, not backdrops.',
      'We worked to the rhythm of the coast \u2014 shooting around the tide and the call to prayer, eating what our locations cooked, letting the pace of the island set the pace of the shoot.',
      'Lamu doesn\u2019t need a set dresser. You just have to be ready when the light arrives.',
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const postsByCategory = (cat: string): BlogPost[] =>
  cat === 'All' ? blogPosts : blogPosts.filter((p) => p.category === cat);

export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.p);
}

export const formatPostDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
