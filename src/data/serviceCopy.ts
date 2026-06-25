export type ServiceSection = { title: string; paragraphs: string[] };

export type ServiceLongCopy = {
  slug: string;
  tagline: string;
  sections: ServiceSection[];
  benefits: string[];
  idealFor: string[];
  process: { step: string; detail: string }[];
};

export const serviceCopy: ServiceLongCopy[] = [
  {
    slug: 'dp-movies',
    tagline: 'Cinematography and director of photography for films that demand a world-class image — crafted in Nairobi, finished for festival and stream.',
    sections: [
      {
        title: 'What A3 brings to your film',
        paragraphs: [
          'When you hire A3 for director of photography and cinematography on a feature, short, or premium documentary, you are not booking a camera operator — you are bringing a visual department into your project. Studio Head Pete Njagi leads the cinematography practice at A3 with the same rigour he applies to the studio\'s own narrative slate: motivated light, intentional composition, and a colour philosophy that survives the journey from set to grade. Whether your story unfolds in a Nairobi apartment block at dawn or across sweeping Rift Valley landscapes, the A3 DP team designs an image that serves character, pace, and theme rather than chasing trends.',
          'Our DP packages cover the full camera department: lens selection, lighting design, camera movement, and on-set collaboration with directors, production designers, and gaffers. We arrive with a shot list informed by pre-production, a lighting plan that respects your schedule and locations, and the flexibility to respond when the best moment on set is the one nobody scripted. A-camera and B-camera configurations are standard on scripted work; documentary and hybrid projects are scoped to match your coverage needs without inflating the crew beyond what the day requires.',
          'Clients choose A3 because we speak the language of narrative filmmaking fluently — coverage ratios, eyelines, continuity, and the quiet discipline of protecting performances while still capturing the frame. We have shot festival-selected features, intimate character studies, and high-concept shorts for Kenyan and international producers who need a DP partner who understands both local logistics and global delivery standards. The result is footage that editors love: clean, well-exposed, thoughtfully composed, and logged with the metadata your post team expects.',
        ],
      },
      {
        title: 'Pre-production at Industrial Area',
        paragraphs: [
          'Every A3 DP engagement begins in our Industrial Area facility, where prep is treated as seriously as principal photography. Pete Njagi and the cinematography team review the script or treatment, break down scenes for lighting and camera requirements, and build a look bible that aligns with the director\'s vision. We scout locations when permitted, assess power and rigging constraints, and flag practical solutions before you are on set with a cast waiting. This is where lens tests happen, where we dial in LUT previews that give the director a honest sense of the final image, and where we confirm kit lists against your insurance and carnet requirements.',
          'For productions travelling into Kenya or shooting across multiple counties, A3 coordinates with local fixers, location managers, and department heads to ensure the camera plan is achievable on Kenyan timelines and budgets. We document sun paths, ambient noise, and access windows — the details that separate a smooth shoot from a costly overrun. When your production designer or art department needs to understand how a set will read on camera, we join those conversations early, because the best cinematography is collaborative, not imposed.',
          'Pre-production deliverables typically include a camera and lighting plan, a shot list or coverage map, equipment manifest, and a schedule-aware lighting approach for each location. For international co-productions, we provide technical specifications compatible with post houses in London, Los Angeles, Johannesburg, or Mumbai. Everything is prepared so that when you step onto set, the department is aligned and the only variable left is performance.',
        ],
      },
      {
        title: 'Principal photography — on set with A3',
        paragraphs: [
          'On shoot days, the A3 camera department operates with the calm efficiency of a crew that has worked together for years. Pete Njagi directs the visual execution while mentoring junior operators and focus pullers — part of A3\'s commitment to growing Kenyan cinematography talent. We maintain LUT preview on set where the pipeline allows, so directors and clients can make informed decisions about exposure and contrast before the day ends. Dailies are uploaded within twenty-four hours when connectivity permits, giving your post supervisor immediate visibility into what was captured.',
          'Our kit philosophy balances cinema-quality acquisition with the realities of East African production. We deploy bodies and glass appropriate to your delivery spec — from streaming features to theatrical windows — and supplement with specialist equipment when the story demands it: crane, gimbal, underwater housings, or drone support coordinated through licensed operators. Lighting packages are scaled to location: lean and fast for documentary, full and sculpted for narrative interiors. We respect set etiquette, protect the actor\'s process, and communicate clearly with AD and production so that creative requests do not become schedule chaos.',
          'Multi-day shoots are logged meticulously. A-camera and B-camera footage is synced, labelled, and handed off to DIT with the reports your editor needs. On-set stills are captured for publicity and continuity when requested. When the final shoot day wraps, the camera department delivers a complete handoff — not a hard drive full of mystery files, but an organised archive ready for the edit suite back at Industrial Area or at your post partner of choice.',
        ],
      },
      {
        title: 'Post, grade, and delivery',
        paragraphs: [
          'A3\'s integrated post facility in Nairobi\'s Industrial Area means your cinematography team stays connected to the image through colour grade and final delivery. Pete Njagi collaborates with colourists to ensure the intent established in prep and on set survives the DI process — skin tones, contrast ratios, and the subtle colour keys that define your film\'s world. We support round-tripping with external post houses when your distribution deal requires it, supplying camera originals, CDLs, and detailed notes that prevent the dreaded "why does this look different from dailies?" conversation.',
          'Project wrap typically completes within five business days of the final shoot day for standard DP packages: consolidated drives, camera reports, and a DIT handoff that meets broadcast and festival submission specs. For features with longer post timelines, we remain available for reshoot consultation, pick-up day planning, and VFX supervision liaison when visual effects depend on how plates were exposed and tracked.',
          'The business impact of strong cinematography is measurable: faster edits because coverage is usable, fewer reshoots because exposure and continuity were protected, and a final image that positions your film competitively on festival screens and streaming platforms worldwide. A3\'s DP work is Kenyan-rooted — we know how Nairobi light behaves in March versus July — but our standard is global. Your film should look like it belongs in any international lineup, and that is the promise we bring to every frame.',
        ],
      },
      {
        title: 'Who this service is for',
        paragraphs: [
          'A3 DP and movie packages are built for independent feature directors, short-film producers, documentary filmmakers, and production companies mounting narrative or premium non-fiction work in Kenya and East Africa. If you are a Kenyan producer shooting your first feature and need a DP who understands both craft and local infrastructure, we are your department. If you are an international producer looking for a Nairobi-based cinematography partner who can deliver to Netflix, Amazon, or festival specs without flying in an entire camera team from abroad, we are built for that too.',
          'We also serve commercial and music clients whose projects demand true cinema quality — not a watered-down "film look" but the real discipline of lens choice, lighting, and movement. When your brand film or artist documentary needs to sit beside theatrical work on a reel, hire the team that shoots theatrical work every day.',
          'Budget-conscious projects are welcome when scope is honest: a short with three locations and two shoot days receives the same care as a five-day feature, but the prep and kit reflect what the story actually needs. We would rather design a tight, achievable plan than over-promise and under-deliver. Tell us your script, your window, and your delivery target — we will tell you what world-class cinematography looks like within that frame.',
        ],
      },
      {
        title: 'Why producers return to A3',
        paragraphs: [
          'Repeat clients cite three things: reliability, image quality, and communication. Reliability means we show up with tested kit, a crew that knows the plan, and the professionalism that keeps set running on time. Image quality is the Pete Njagi standard — motivated, story-driven, and grade-ready. Communication means producers always know where the camera department stands, what was shot, and what is needed tomorrow.',
          'A3 is not a rental house with a freelancer attached. We are a production house with a sound stage, post suites, and a roster of department heads who work together regularly. That integration reduces friction: the person who lit your scene can sit in the grade; the editor who cuts your trailer understands how the footage was captured. For filmmakers building a body of work in Kenya, that continuity is invaluable.',
          'Your film deserves cinematography that honours the story you wrote and the audience you are trying to reach — whether they watch in a Nairobi cinema, on a phone in Lagos, or on a festival screen in Berlin. A3 Studios exists to make that image possible, from the first scout in Industrial Area to the final export that leaves our building ready for the world.',
        ],
      },
    ],
    benefits: [
      'Director of photography leadership from Studio Head Pete Njagi',
      'Full camera department: prep, shoot, DIT handoff, and grade collaboration',
      'A-camera and B-camera packages for scripted coverage',
      'LUT preview on set and dailies within 24 hours',
      'Integrated post and colour at Industrial Area, Nairobi',
      'Local expertise with international delivery standards',
    ],
    idealFor: [
      'Feature and short-film producers',
      'Documentary and premium non-fiction directors',
      'International co-productions shooting in Kenya',
      'Commercial and music projects requiring true cinema quality',
      'First-time filmmakers seeking a mentor-led camera department',
    ],
    process: [
      { step: 'Brief & script review', detail: 'We read your script or treatment, confirm delivery specs, and align on visual references with the director.' },
      { step: 'Scout & look bible', detail: 'Location assessments, lens tests, and a lighting plan built at our Industrial Area prep rooms.' },
      { step: 'Principal photography', detail: 'Shoot days with full camera department, on-set LUT preview, and logged dailies.' },
      { step: 'DIT handoff', detail: 'Organised drives, camera reports, and synced A/B footage within five business days of wrap.' },
      { step: 'Grade support', detail: 'Pete Njagi collaborates with A3 colourists or your external DI house to protect the intended look.' },
    ],
  },
  {
    slug: 'commercial',
    tagline: 'Brand films and commercial video that look premium on every screen — from boardroom presentations to social feeds.',
    sections: [
      {
        title: 'Commercial production, cinema discipline',
        paragraphs: [
          'A3 Studios makes commercial video with the same craft we bring to our film slate — because your brand deserves better than generic corporate footage. Based in Nairobi\'s Industrial Area, we produce launch films, product stories, corporate profiles, employer-brand pieces, and social campaigns for Kenyan companies and international brands operating in East Africa. Every commercial begins with a strategic question: what should the viewer feel, remember, and do after watching? The answer shapes script, casting, locations, and the visual language of the film.',
          'Our commercial work sits in the premium tier of the market without the inflated overhead of flying in a European crew for a single-day shoot. You get cinema-quality lenses, considered lighting, professional sound, and an edit that respects pacing and platform. Whether you need a sixty-second hero film for a product launch or a suite of cut-downs for Instagram, TikTok, and LinkedIn, A3 delivers a cohesive visual system — not one great master and three awkward crops.',
          'Clients come to us when they have outgrown template videography: when the CEO is ready to stand in front of camera without looking stiff, when the product needs to feel aspirational rather than catalogued, and when the board expects a film that holds up beside international competitors. We make Kenyan brands look global and help global brands look authentically present in Kenya.',
          'From Westlands boardrooms to Mombasa port logistics yards, we have filmed brands at every scale — and we know that the best commercial is the one your team actually uses. That means deliverables shaped for your channels, not ours: horizontal masters for YouTube pre-roll, vertical variants for Reels, clean versions for embed on your site, and captioned cuts for silent autoplay. One shoot day, many assets — that is how A3 protects your marketing budget while raising your visual ceiling.',
        ],
      },
      {
        title: 'Strategy and pre-production',
        paragraphs: [
          'Commercial success is won in prep. At A3\'s Industrial Area studio, we develop creative treatments, scripts, and shot lists aligned with your marketing objectives and media plan. Our producers work with your brand team or agency to clarify key messages, mandatory supers, legal disclaimers, and approval chains before camera rolls. We cast talent from our network of Kenyan actors, presenters, and real-customer advocates — always matching face and voice to the audience you are trying to reach.',
          'Location scouting covers your office, a client site, a lifestyle environment, or our own sound stage when controlled lighting and product hero shots matter. We plan for wardrobe, props, and brand guidelines: correct logo usage, colour palette fidelity, and packaging that reads on camera. When voiceover or motion graphics are required, we scope studio time and design handoffs early so post is not a surprise line item.',
          'For product-focused commercials, we build tabletop and macro setups in-house — clean backgrounds, repeatable lighting, and the detail shots e-commerce and retail teams need alongside the hero film. Pre-production concludes with a production schedule, call sheet, and a clear statement of deliverables: master length, social variants, captioned versions, and thumbnail stills for paid media.',
          'Agency partners appreciate A3 because we slot into existing workflows: we attend PPMs, respect brand bibles, and deliver to agency post specs when required. Direct clients appreciate us because we translate marketing goals into visual language without jargon. Either way, prep ends with everyone looking at the same document — what we are making, where we are shooting, who is on camera, and what success looks like on delivery day.',
        ],
      },
      {
        title: 'Shoot day — efficient, on-brand, cinematic',
        paragraphs: [
          'Commercial shoots at A3 are structured for efficiency without sacrificing quality. A typical scope is a single-location or studio day with client representation on set for real-time approval. Our director and DP collaborate to keep talent comfortable, product looking its best, and the schedule honest. We capture the master film plus intentional coverage for cut-downs — alternate intros, vertical framing options, and B-roll that gives editors flexibility.',
          'Sound is recorded cleanly on set; where ambient Nairobi noise is part of the story we embrace it, where it is not we control it. Interview-led corporate films receive the documentary treatment: flattering light, discreet lenses, and questions that draw authentic answers rather than scripted stiffness. Product and lifestyle shoots receive the commercial treatment: precise exposure, hero angles, and movement that feels premium rather than frantic.',
          'When Pete Njagi oversees cinematography on larger brand films, the visual ambition rises accordingly — crane moves, sculpted interiors, and a colour palette designed for grade. Smaller social-first campaigns still benefit from A3\'s baseline standard: sharp, well-lit, and edited with platform-native pacing. You leave set knowing what was captured and when the first cut arrives.',
          'Safety, insurance, and location courtesy are non-negotiable on commercial shoots. We arrive with permits where required, respect building management rules, and wrap locations cleaner than we found them. Your brand\'s reputation extends to how production behaves on site — A3 crews represent you as professionally as the final film will.',
        ],
      },
      {
        title: 'Edit, grade, and platform delivery',
        paragraphs: [
          'Post-production happens in our Industrial Area suites, where editors assemble rough cuts within five business days and final delivery typically lands ten business days after picture lock. We grade every commercial for consistency across deliverables — your hero film and social cut-downs should feel like one campaign, not unrelated clips. Captions, supers, and end cards are applied to spec; thumbnail stills are exported for YouTube and paid social.',
          'Music and sound design are scoped separately because licensing matters: we can work with your existing brand tracks, commission original score from Kenyan composers in our network, or source library music with clear usage rights. We deliver clean masters and captioned versions, plus vertical edits when the brief requires them. Revision rounds are structured so feedback is consolidated — protecting your timeline and our ability to polish.',
          'The creative and business impact of strong commercial video is direct: higher engagement on paid social, stronger conversion on landing pages, sales teams armed with something they are proud to send, and recruitment films that attract talent who take you seriously. A3 commercials are investments in perception — and in a crowded market, perception is often the first product you sell.',
          'We archive project files for agreed periods so seasonal campaigns can be refreshed — new supers, updated pricing, alternate CTAs — without reshooting entire scenes when only the offer changed. That forward-thinking post workflow saves marketing teams money across the financial year and keeps your content library alive.',
        ],
      },
      {
        title: 'Ideal clients and use cases',
        paragraphs: [
          'Our commercial service is ideal for brands, startups, NGOs with fundraising mandates, hospitality groups, fintech and telco companies, and agencies that need a reliable Nairobi production partner. If you are launching in Kenya for the first time, we help you show up visually credible. If you are a Kenyan champion expanding regionally, we give you films that travel beyond borders.',
          'We also produce internal communications, training films, and event recap cut-downs when the brief demands clarity over glamour — always with A3\'s baseline production value. Retail, real estate developers, and automotive brands feature in our commercial portfolio alongside tech and consumer goods.',
          'Budget transparency is part of the relationship: our published guide rate covers a defined scope — hero film, social cut-downs, grade, and delivery. Voiceover, talent fees, music licensing, extra shoot days, and extended revisions are quoted clearly before you commit. No invoice surprises, no scope creep without conversation.',
          'Seasonal campaigns — Christmas retail, back-to-school, election-year corporate messaging — benefit from A3\'s ability to turn around polished work on Kenyan timelines. We know when the market gets noisy and when your film needs to land early. Planning ahead with our producers secures dates on the sound stage and crew before the December rush.',
        ],
      },
      {
        title: 'The A3 difference for brands',
        paragraphs: [
          'What separates A3 from a generalist videographer is integration. We are a studio with writers, directors, DPs, editors, and colourists under one roof in Industrial Area — not a lone operator juggling everything. That means your commercial benefits from real specialisation: someone who directs talent well, someone who lights product beautifully, someone who cuts for retention on social.',
          'We understand Kenyan audiences without being parochial. Humour, pace, casting, and music choices reflect local culture when the brand requires it, and international polish when the campaign targets export markets or regional HQ review. Our films have supported board presentations in London and shop-floor training in Mombasa — same studio, calibrated delivery.',
          'When you are ready to stop looking like everyone else\'s stock footage and start looking like a brand with a story, A3 Studios is ready to shoot. Tell us what you are launching, who must be convinced, and where the film will live — we will design a commercial package that earns its place in your marketing mix.',
          'Long-term brand relationships with A3 mean consistent visual identity across quarters — same grade philosophy, same production standards, faster prep because we already know your team. Many clients start with one launch film and return for employer brand, CSR documentary, and event highlight work because the first project proved that premium production is achievable in Nairobi without flying crews from abroad.',
        ],
      },
    ],
    benefits: [
      'Hero films and social cut-downs from a single cohesive shoot',
      'Cinema-quality lighting, lenses, and sound on every project',
      'In-house edit, grade, and caption delivery at Industrial Area',
      'Clear scope and guide pricing with transparent add-ons',
      'Kenyan casting and locations with global production standards',
      'Optional DP leadership from Pete Njagi on premium brand films',
    ],
    idealFor: [
      'Brands and startups launching products or campaigns',
      'Corporate comms, HR, and employer-brand teams',
      'Agencies needing a trusted Nairobi production partner',
      'NGOs and social enterprises with fundraising films',
      'Hospitality, retail, fintech, and consumer goods marketers',
    ],
    process: [
      { step: 'Creative brief', detail: 'Align on audience, key messages, platforms, and deliverables with your marketing or agency team.' },
      { step: 'Treatment & script', detail: 'Develop the concept, shot list, cast, and locations from our Industrial Area prep process.' },
      { step: 'Production day', detail: 'Shoot hero film and social coverage on location or in the A3 sound stage with client on set.' },
      { step: 'Edit & grade', detail: 'Rough cut in five days; revisions and final grade within ten business days of picture lock.' },
      { step: 'Delivery', detail: 'Master files, captioned versions, vertical edits, and thumbnail stills ready for paid and organic media.' },
    ],
  },
  {
    slug: 'music-videos',
    tagline: 'Music videos that match the energy of your sound — bold visuals for Kenyan and East African artists who refuse to blend in.',
    sections: [
      {
        title: 'Visuals that honour the track',
        paragraphs: [
          'A music video is not a short film with a song pasted on — it is a parallel artwork that amplifies mood, lyrics, and artist identity. A3 Studios produces performance, narrative, and hybrid music videos for Kenyan and East African artists across genres: gengetone, afrobeats, R&B, gospel, hip-hop, alt, and the experimental spaces in between. We treat every release as a career moment, because for many artists the video is the first impression streaming platforms and fans receive.',
          'Our music video team combines directors who understand performance coverage with DPs who make Nairobi look iconic — neon night exteriors, golden-hour rooftops, warehouse interiors in Industrial Area, and rural landscapes when the song demands scale. We work from treatments supplied by your creative team or develop concepts in collaboration with the artist and label. The goal is always coherence: colour, wardrobe, choreography, and cut rhythm in service of the track.',
          'Artists choose A3 because we deliver broadcast-quality results at a rate structure that respects independent musicians and indie labels. You are not paying for bloated crew; you are investing in idea, execution, and a graded master that holds up on YouTube, Vevo, Trace, and the festival screens that still matter for breakthrough acts.',
          'The Kenyan music landscape is visually competitive — fans compare your video to international references on the same feed. A3 closes that gap without pretending Nairobi is Los Angeles. We lean into what makes the city distinctive: matatu colour palettes at dusk, concrete brutalism in Industrial Area, lush Ngong Hills backdrops, and the fashion culture artists already bring to set. Authenticity and aspiration can coexist when the concept is honest and the craft is sharp.',
        ],
      },
      {
        title: 'Concept, treatment, and prep',
        paragraphs: [
          'Pre-production for music videos moves fast — release windows wait for no one. At A3 we compress prep without skipping essentials: treatment sign-off, shot list, location permits, wardrobe and styling coordination, and playback planning for performance sections. Our Industrial Area office becomes command central for casting extras, securing vehicles and props, and rehearsing choreography when the concept requires movement.',
          'Label and artist approvals are time-boxed in writing so creative disagreements resolve before shoot day, not on set when hourly costs climb. We document signed-off treatments because music video lore is full of brilliant ideas that changed mid-shoot — A3 prefers clarity over chaos.',
          'We scout locations that match the song\'s world — from club interiors and street corners to studio sets built in our warehouse space. Artists and managers review mood boards and reference stills before shoot day so expectations align. When labels require product integration or brand partnerships, we weave those elements into the visual language rather than bolting them on awkwardly.',
          'Technical prep covers camera package, lighting plan, and playback sync for lip-sync performance. We confirm deliverables upfront: master MV length, vertical social edit, behind-the-scenes stills, and ProRes graded master for label archives. Half-day and full-day shoot scopes are designed around realistic coverage — we would rather nail one strong concept than spread the crew too thin across three mediocre setups.',
          'Styling and wardrobe consultations happen during prep so artist identity reads on camera — brand collaborations, designer loans, and street looks all require continuity across setups. We document look continuity with reference stills between scenes so the edit never jumps between mismatched eras unless that is the concept. Music videos fail when the artist looks like a guest in their own visual world; prep prevents that.',
        ],
      },
      {
        title: 'Shoot day energy',
        paragraphs: [
          'Music video shoots are high-energy environments. A3 directors keep talent focused and comfortable while the camera department captures performance from angles that cut together dynamically. Multiple takes are standard; we protect the artist\'s voice and stamina while ensuring we have coverage for the edit. B-roll, detail shots, and atmospheric inserts are captured intentionally — the cut should breathe, not only intercut close-ups.',
          'Lighting sets the tone: hard contrast for aggressive tracks, soft wrap for intimate ballads, coloured practicals for club scenes, and natural light when authenticity beats artifice. Pete Njagi occasionally oversees cinematography on flagship artist projects where visual ambition matches chart ambition — bringing feature-film lensing to a three-minute promo. Even standard A3 music video packages benefit from cinema glass and disciplined exposure.',
          'We respect the culture around Kenyan music production: call times that acknowledge Nairobi traffic, catering on set, and security when locations are public. Crew conduct is professional; artist entourage space is understood. The shoot ends with confirmed coverage and drives heading to offline edit the same week.',
          'Performance direction matters as much as camera work. A3 directors coach eyeline, mic proximity, and energy across takes so lip-sync feels believable and stage presence reads on a phone screen. Featured artists and backup dancers receive blocking that serves the edit — not chaos that post must fix. When the concept includes narrative beats, we capture story coverage with the same discipline as performance.',
        ],
      },
      {
        title: 'Edit, grade, and release masters',
        paragraphs: [
          'Offline edit typically delivers within four business days; graded ProRes master within eight business days after picture lock. Editors cut to the track\'s rhythm — respecting drops, bridges, and vocal moments — while VFX, title cards, and beauty work are applied when the treatment calls for them. Colour grade is where the video\'s mood locks in: teal-orange night streets, warm skin on golden hour, or desaturated minimalism for alt releases.',
          'Vertical social edits are reframed with intention, not crude centre crops. Labels receive masters suitable for platform upload and broadcast submission where applicable. Behind-the-scenes stills support press and fan social during release week. We coordinate delivery timing with your distributor or direct-to-platform upload schedule when requested.',
          'A strong music video extends the life of a single: playlist pitches, press coverage, fan shares, and booking agents watching. A3 videos are built for that ecosystem — memorable hooks in the first three seconds, screenshot-worthy frames, and a rewatch factor that algorithms notice.',
          'Lyric overlays, parental advisories, and platform-specific safe zones are handled in post when labels require them. We deliver both explicit and clean masters where applicable. Artist and label approval rounds are time-boxed so release dates hold — because a video that drops late misses the momentum the track built on radio and streaming.',
        ],
      },
      {
        title: 'Who we work with',
        paragraphs: [
          'Our music video service is ideal for emerging and established artists, indie labels, managers planning rollout, and brands sponsoring artist content. First-time video artists receive patient direction; veterans receive speed and respect for their process. Groups, duos, and solo acts are all in scope — we scale crew to performance complexity.',
          'Cross-border collaborations welcome East African features and diaspora artists shooting in Nairobi. We handle local logistics; you bring the track and the vision. Gospel and conscious acts receive the same creative seriousness as club records — tone changes, standard does not.',
          'When budget is tight, honesty wins: we recommend one location and one strong concept over scattered ideas. When budget allows, we layer narrative threads, multiple setups, and specialist gear. Every artist leaves with a video they are proud to pin to their profile.',
          'Collaborations between artists — features, duets, crew shout-outs — are storyboarded so screen time feels fair and the edit supports everyone\'s brand. Managers appreciate clear communication on set day: shot progress, remaining setups, and when the artist can wrap. Transparency reduces friction when entourages are large and timelines are tight.',
        ],
      },
      {
        title: 'Why artists trust A3',
        paragraphs: [
          'Kenya\'s music scene moves quickly. A3 moves with it — reliable crew, fair quotes, and a reel that proves we understand what artists need in 2025 and beyond. We are not outsiders mimicking music culture; we are a Nairobi studio embedded in the same city as the clubs, studios, and street corners your fans know.',
          'Integration with A3\'s wider facility means optional add-ons: studio performance capture on our sound stage, documentary-style behind-the-scenes for YouTube series, and commercial tie-ins when brands partner with artists. One relationship, multiple visual assets.',
          'Your sound already says something. The video should say it louder, clearer, and in a frame worth sharing. A3 Studios exists to make that happen — from treatment approval in Industrial Area to the graded master that drops with your single.',
          'Artists who return to A3 often cite trust: we protect unreleased tracks, we do not leak setups to gossip pages, and we show up when the industry is busiest — December releases, festival season, album rollouts. In a scene where reliability is as rare as budget, that consistency builds careers alongside visuals.',
          'Release strategy consultation is informal but valuable: we advise on thumbnail frames, teaser length, and vertical drop timing when managers want coordinated multi-platform launches. The video is one piece of rollout — A3 respects that by delivering masters in formats each platform accepts without re-encoding artifacts that hurt quality on first play.',
        ],
      },
    ],
    benefits: [
      'Performance, narrative, and hybrid concepts tailored to genre',
      'Fast prep and turnaround aligned with release windows',
      'Cinema lenses, disciplined lighting, and rhythm-driven editing',
      'Master MV plus vertical social edit and BTS stills',
      'ProRes graded delivery for labels and platforms',
      'Nairobi locations and Industrial Area studio sets',
    ],
    idealFor: [
      'Kenyan and East African recording artists',
      'Indie labels and artist managers',
      'Gospel, hip-hop, afrobeats, R&B, and alt acts',
      'Brand-sponsored artist collaborations',
      'Diaspora artists shooting visuals in Nairobi',
    ],
    process: [
      { step: 'Listen & concept', detail: 'We review the track, discuss references, and agree on treatment — supplied or co-written.' },
      { step: 'Prep & scout', detail: 'Locations, wardrobe, cast, and shot list locked at Industrial Area before shoot day.' },
      { step: 'Shoot', detail: 'Half-day or full-day performance and narrative coverage with playback and B-roll.' },
      { step: 'Offline edit', detail: 'Cut to the track within four business days for artist and label review.' },
      { step: 'Grade & delivery', detail: 'Final colour and ProRes master within eight business days of picture lock.' },
    ],
  },
  {
    slug: 'real-estate',
    tagline: 'Property films that sell space, light, and lifestyle — cinematic real estate video for developments, agents, and hospitality brands.',
    sections: [
      {
        title: 'More than a walkthrough',
        paragraphs: [
          'Real estate video has evolved beyond shaky phone tours. Buyers, tenants, and investors decide whether to visit in person based on what they see online — and A3 Studios produces property films that compete with international listing standards while staying rooted in Kenyan market realities. We serve estate agents, developers, hospitality venues, co-working operators, and property brands who need walk-through films, lifestyle reels, and drone exteriors that show space honestly and aspirationally.',
          'Our approach treats every property as a story about light, flow, and context. A Karen family home reads differently from a Kilimani apartment, a Mombasa beachfront villa, or a commercial floor plate in Westlands. We design camera paths — gimbal, slider, and drone where permitted — that reveal room scale, ceiling height, finishes, and views without disorienting the viewer. Agents appear on camera when personal brand matters; voiceover and music carry the film when the architecture should speak alone.',
          'Off-plan and under-construction properties present unique challenges — dust, incomplete landscaping, workers on site. A3 schedules shoots at fit-out stages that show progress without exposing unfinished defects, and we coordinate with site managers so safety gear and access routes meet construction regulations. The goal is investor confidence, not misleading completion — honesty in property film builds long-term trust with buyers who will eventually walk the real space.',
          'Developers use A3 films for off-plan marketing, investor decks, and launch events. Agents use them for premium listings that justify commission. Hospitality brands use them for booking conversion. The common thread is quality: stable exposure, straight verticals, clean colour, and pacing that respects the viewer\'s time.',
          'Kenyan property buyers increasingly research on mobile before calling an agent. A film that loads quickly, reads clearly without sound, and shows honest square footage builds trust faster than twenty static photos. A3 optimises exports for WhatsApp forwarding — still the primary sharing channel in the local market — without sacrificing bitrate for larger screen presentations at developer launches.',
        ],
      },
      {
        title: 'Pre-production and property prep',
        paragraphs: [
          'Before we arrive, A3 provides a property prep checklist: declutter surfaces, open blinds, turn on all lights, hide bins and personal items, and stage key rooms if styling is available. For developments still under construction, we coordinate with site managers for safe access, clean paths, and the best time of day for natural light in shell spaces. Drone flights require airspace checks — we work with licensed operators and respect KCAA regulations.',
          'Occupied homes with tenants or owners present receive minimal disruption scheduling — often a single morning pass — because we respect that people live in the spaces we film. Pets, children, and household staff are acknowledged in prep so shoot day feels organised rather than invasive.',
          'Scouting happens virtually or on site: we confirm parking for crew, power access, neighbour notifications for drone work, and the shot sequence that minimises disruption for occupied homes. Agent intros and end slates are scripted in prep so branding — logo, phone, email — meets brokerage guidelines. Multiple listings for the same agency can be batch-scheduled for efficient production weeks.',
          'Pre-production at our Industrial Area office includes delivery spec confirmation: MLS-ready exports, website embed formats, social vertical cuts, and aspect ratios for property portals popular in Kenya and abroad. Half-day on-location scope is standard for most residential properties; larger estates and commercial sites receive custom schedules.',
          'We maintain template packages for repeat agency clients — consistent intro/outro slates, music beds, and lower-third styles — so a portfolio of fifty listings feels like one cohesive brand channel. New agents receive onboarding on how to present on camera: where to stand, how to walk a intro path, and how to deliver a call-to-action without sounding like a hard sell.',
        ],
      },
      {
        title: 'On-location cinematography',
        paragraphs: [
          'Shoot day is a choreographed walk — smooth gimbal movement through interiors, detail shots of finishes and fixtures, exterior establishing frames, and drone exteriors when airspace allows. We expose for windows without blowing highlights; HDR-conscious capture and grade recover exterior views where possible. Kitchens, master suites, and outdoor entertaining areas receive hero treatment because those rooms drive decisions.',
          'For luxury listings, Pete Njagi\'s cinematography standards elevate the image further — slower moves, wider glass, and grade that feels editorial rather than catalog. Standard packages still deliver professional results: no warp-stabiliser jello, no vertical drift, no amateur zooms. Occupied homes are treated with respect; we work quietly and quickly, often within a morning.',
          'Commercial property and hospitality shoots add lobby, amenity, and neighbourhood context — the café downstairs, the gym, the parking ratio, the view from the rooftop. Developers receive coverage that helps buyers imagine completion. Hotels receive films that sell experience, not just rooms.',
          'Twilight exteriors and golden-hour facades are scheduled when the brief demands emotional pull — particularly for high-end listings in Runda, Muthaiga, and coastal developments where the outdoor lifestyle is the product. We balance drone altitude and neighbour privacy, because a beautiful aerial is worthless if it creates complaints. Every exterior shot is planned with both marketing impact and community respect in mind.',
        ],
      },
      {
        title: 'Edit, grade, and listing delivery',
        paragraphs: [
          'Draft delivery typically arrives within three business days; final within six business days after feedback. Editors structure films with logical room progression, on-screen room labels when requested, and music that supports without overpowering. Agent bumpers and brand end cards are integrated cleanly. Drone sequences open or close the film depending on what sells the property best.',
          'Grade corrects white balance across mixed lighting — tungsten interiors, daylight windows — and ensures lawns, pools, and sky look inviting without unrealistic saturation. We export web-optimised files for portals and high-bitrate masters for presentation screens at launch events. Vertical cuts serve Instagram and WhatsApp sharing — critical for Kenyan agent marketing.',
          'The business impact is measurable: faster enquiries, fewer wasted viewings, higher perceived listing value, and agent personal brands strengthened by association with quality media. In a market where every agent competes on phone photos, a cinematic property film is differentiation you can quantify.',
          'Developers report shorter time-on-market for phased launches when video sits above the fold on project microsites. Agents track enquiry quality — fewer tyre-kickers, more serious viewings — when film sets accurate expectations before a site visit. A3 delivers analytics-friendly file names and chapter-friendly edits when portals support them, because discoverability matters as much as aesthetics.',
        ],
      },
      {
        title: 'Clients we serve',
        paragraphs: [
          'Ideal A3 real estate clients include boutique and franchise agencies, residential developers, commercial brokers, short-term rental operators, architects showcasing completed work, and interior designers documenting projects. Diaspora sellers marketing Kenyan property from abroad benefit especially — buyers expect video before they fly home to view.',
          'Hospitality — boutique hotels, safari lodges, Airbnb portfolio managers — uses our walk-through and lifestyle approach for booking pages and OTA listings. Corporate landlords marketing grade-A office space receive films suitable for investor roadshows.',
          'Volume clients scheduling multiple shoots per month receive consistent look and efficient turnaround — your brand looks the same across every listing film. One-off premium properties receive bespoke scheduling and optional twilight exteriors when the brief demands drama.',
          'Architects and interior designers use A3 films to document completed work for awards submissions and client referrals — static photography captures detail, but video captures flow. Safari lodge operators pair property tours with experience montages: game drives, dining, spa — the full reason guests book, not just the thread count.',
        ],
      },
      {
        title: 'Why property professionals choose A3',
        paragraphs: [
          'Real estate video is a repeat business. A3 earns repeat bookings through reliability: we arrive on time, deliver on schedule, and make agents look good on camera. Our Industrial Area post team turns around drafts quickly because we know listings have expiry dates and launch windows.',
          'We understand Nairobi\'s neighbourhoods and what buyers in each segment respond to — family space in gated communities, convenience in apartment towers, prestige in legacy suburbs. That local knowledge informs shot choice without stereotyping.',
          'When your listing deserves more than a phone pan across the living room, A3 Studios delivers property cinema — honest, beautiful, and built to convert browsers into buyers.',
          'Property is cyclical; relationships are not. A3 builds long-term agency partnerships with quarterly rate clarity, priority scheduling during hot markets, and refresh edits when a listing price drops or staging improves. Your film library becomes a competitive asset — proof that your brokerage invests in presentation at every price point, not only at the top of the market.',
          'New developments launching multiple units benefit from unit-type templates — two-bed versus three-bed, penthouse versus garden — that accelerate turnaround when an entire phase releases simultaneously. We batch shoot and edit efficiently while customising views and finishes per unit, giving developers consistent brand presentation across a portfolio without waiting weeks between each delivery.',
        ],
      },
    ],
    benefits: [
      'Smooth gimbal interiors and licensed drone exteriors',
      'Agent intro bumpers and MLS-ready exports',
      'Half-day on-location scope for most residential properties',
      'Draft in three days, final in six business days',
      'Vertical cuts for social and WhatsApp marketing',
      'Property prep checklist and batch scheduling for agencies',
    ],
    idealFor: [
      'Estate agents and brokerage marketing teams',
      'Residential and commercial developers',
      'Hospitality, hotels, and short-term rental operators',
      'Architects and interior designers',
      'Diaspora sellers and premium independent listings',
    ],
    process: [
      { step: 'Brief & prep list', detail: 'Confirm property details, branding, and send our staging checklist to the owner or agent.' },
      { step: 'Site scout', detail: 'Assess light, drone feasibility, and shot sequence; schedule half-day or custom shoot.' },
      { step: 'Shoot', detail: 'Gimbal walk-through, detail shots, agent piece, and drone exteriors where permitted.' },
      { step: 'Edit', detail: 'Draft cut with music and optional room labels within three business days.' },
      { step: 'Final delivery', detail: 'Graded master, web exports, and vertical social edit within six business days.' },
    ],
  },
  {
    slug: 'events',
    tagline: 'Event films that capture the energy of the room — professional coverage for launches, conferences, galas, and live experiences.',
    sections: [
      {
        title: 'Your event, on film',
        paragraphs: [
          'Events are ephemeral — the stage lighting, the applause, the speaker\'s exact turn of phrase exist once unless captured well. A3 Studios provides professional event video coverage for product launches, corporate conferences, gala dinners, cultural nights, award ceremonies, and private functions across Nairobi and Kenya. We deliver highlight reels that distil hours into minutes, full ceremony archives for compliance and memory, speaker grab packs for comms teams, and social snippets within forty-eight hours when the news cycle demands speed.',
          'Our event team scales to scope: two operators for intimate launches, three or more for multi-room conferences with parallel sessions. We integrate live audio feeds when venues provide them, deploy backup audio when they do not, and coordinate with event producers so camera positions respect sightlines and guest experience. Discreet, professional crew — not obtrusive robots blocking aisles.',
          'Photo walls, sponsor activations, and experiential zones receive dedicated B-roll passes during event downtime so highlight edits feel rich rather than speech-heavy. Brands investing in staging deserve footage that proves activation ROI — foot traffic, engagement moments, product interaction — not only the CEO at the podium.',
          'Clients hire A3 when the event matters to brand reputation: a fintech unveiling investors will watch online, an NGO gala donors will replay, a corporate AGM shareholders will scrutinise. The film must reflect the production value of the event itself — not undercut it with amateur coverage.',
          'Kenyan corporate culture increasingly expects video proof of execution — not for vanity, but for stakeholders who were not in the room. A launch film becomes the asset your sales team sends to regional offices; a gala highlight becomes the opener at next year\'s fundraiser. A3 structures coverage so those downstream uses are planned, not improvised in post.',
        ],
      },
      {
        title: 'Pre-event planning',
        paragraphs: [
          'Event video fails when treated as an afterthought. A3 joins prep calls with your producer or agency: run of show, key moments, VIP arrivals, stage layouts, and lighting conditions. We request floor plans, brand guidelines for any graphics in post, and speaker names spelled correctly for lower thirds. Permits and venue access are confirmed in advance — Industrial Area prep rooms become logistics HQ for kit prep and crew briefing.',
          'We plan camera positions for speeches, panel discussions, audience reactions, branding opportunities, and B-roll of venue decor. Multi-cam setups receive a live switch plan or post-sync strategy depending on budget. Drone exteriors and arrival coverage are added when venues and regulations allow. Backup batteries, media, and audio recorders are standard — events do not get second takes.',
          'Rehearsals and walk-throughs are encouraged for high-stakes keynotes — not to over-produce spontaneity, but to confirm lighting, slide aspect ratios, and camera sightlines before guests arrive. Thirty minutes of rehearsal prevents thirty seconds of embarrassment on the permanent record.',
          'Deliverables are locked before the event: highlight length, number of social clips, archive requirements, caption languages, and turnaround deadlines. Up to eight hours on site is typical scope; extended galas and multi-day conferences receive custom crew rotations.',
          'We align with your stage manager and AV vendor on signal flow — HDMI program feeds, mult box audio, presentation slide capture — so post is not rebuilding slides from blurry audience footage. For outdoor events, weather contingencies and tent lighting shifts are discussed in prep because Nairobi skies change quickly and your highlight should not look like two different events spliced together.',
        ],
      },
      {
        title: 'Live coverage on the day',
        paragraphs: [
          'On event day, A3 crew arrives early for sound checks, white balance on stage lighting, and coordination with AV teams. Speeches are captured with clean audio and stable framing; cutaways of audience engagement prevent highlight edits from feeling static. Performances — music, dance, fashion — receive coverage that respects artistry and timing. Product demos and panel Q&A are logged for post extraction.',
          'We work across Nairobi\'s event ecosystem: hotel ballrooms, outdoor gardens, warehouse venues in Industrial Area, convention centres, and private estates. Low-light galas receive appropriate glass and exposure strategy; daylight conferences receive balanced windows-and-stage treatment. Crew conduct aligns with dress codes and client hospitality standards.',
          'When same-day or next-day social clips are required, a dedicated editor can begin pulling moments on site or immediately after wrap — announcements, applause lines, ribbon cuts — so your comms team posts while attendance is still trending.',
          'VIP and executive arrivals receive tasteful coverage without paparazzi energy — useful for internal comms and year-in-review reels. Panel discussions are filmed with audience context so edits feel energetic, not like isolated talking heads. Fashion walks, cultural performances, and product demos each receive timing-aware operators who know when to hold a wide and when to punch in for detail.',
        ],
      },
      {
        title: 'Post-event edit and delivery',
        paragraphs: [
          'Social snippets typically deliver within forty-eight hours of the event. Full highlight reels — three to five minutes of best moments — arrive within ten business days, including music, graphics, and brand end slates. Full ceremony archives are exported for internal use, YouTube unlisted hosting, or compliance storage. Speaker grab packs isolate individual talks for email follow-ups and LinkedIn posting.',
          'Edit happens at A3\'s Industrial Area suites, where colourists match stage lighting across cameras and audio mixers clean podium mics alongside room ambience. Lower thirds, logos, and sponsor slates are applied to brand spec. Revision rounds consolidate feedback from marketing, legal, and executives — we understand corporate approval chains.',
          'Sensitive content — unreleased product, embargoed announcements — is handled with secure review links and NDAs when required. Event films leak easily; A3 treats pre-release masters with the same care as commercial work under strict launch timelines.',
          'The business and creative impact extends beyond the room: sales teams reuse launch footage, HR showcases culture at recruitment fairs, donors relive gala emotion, and media teams feed journalists b-roll. One event becomes months of content when captured and cut professionally.',
          'Multilingual lower thirds and subtitle tracks are available for organisations serving diverse audiences — English, Swahili, and additional languages scoped at prep. Archive masters are delivered with descriptive filenames and time-coded notes so comms teams can find the CEO quote at minute four without rewatching six hours of raw footage.',
        ],
      },
      {
        title: 'Who books event coverage',
        paragraphs: [
          'A3 event video serves corporate marketing and comms teams, event agencies, PR firms, NGOs hosting fundraisers, government and diplomatic functions requiring archival quality, fashion and entertainment promoters, and brands activating experiential campaigns. Planners who already trust A3 for commercial work often bundle event coverage into annual content relationships.',
          'Hybrid and virtual-event components — speaker ISO feeds, slide capture, stream-quality masters — are scoped when your event reaches audiences beyond the venue. We coordinate with stream technicians rather than competing with them.',
          'When budget requires a lean package, we prioritise highlight reel and key speaker grabs over exhaustive archive — honest scoping protects quality. When budget allows, multi-cam, drone, and same-day social expand reach.',
          'Annual conferences benefit from visual continuity year over year — same bumper style, same grade philosophy — so your event brand compounds. A3 maintains client style guides for repeat bookings, reducing prep time and strengthening recognisability for delegates who attend every edition.',
        ],
      },
      {
        title: 'The A3 event advantage',
        paragraphs: [
          'Events are stressful; your video vendor should not add to that. A3 brings calm crew, tested backup plans, and producers who speak event language — load-in, strike, cue, run of show. Our Nairobi base means rapid response for last-minute corporate bookings and familiarity with local venues\' quirks.',
          'Integration with A3\'s commercial and documentary teams means your highlight can match campaign visual standards — same grade, same graphics package, same quality bar as your brand films. Consistency across touchpoints reinforces professionalism.',
          'The room will empty. The lights will go down. What remains is the film — make it one worth sending to the board, the donors, and the clients who missed it. A3 Studios captures events with the permanence they deserve.',
          'From Industrial Area prep to final export, event coverage at A3 is treated as storytelling, not surveillance. We edit for narrative arc — opening energy, substantive middle, emotional close — even in a three-minute highlight. Your event was designed with intention; the film should reflect that design.',
          'Multi-day conferences receive daily social pulls — day-one keynote clips, day-two panel highlights — keeping remote audiences engaged before the full highlight delivers. Organisers use these micro-assets for app notifications, delegate emails, and sponsor reports showing real-time reach. A3 structures contracts to support that rhythm without treating each day as a separate production.',
        ],
      },
    ],
    benefits: [
      'Highlight reels, full archives, and speaker grab packs',
      'Social snippets within 48 hours of the event',
      'Two to three operators standard; scaled for multi-room conferences',
      'Live audio integration and backup recording',
      'Brand graphics, lower thirds, and sponsor slates in post',
      'Up to eight hours on site with Kenya-wide travel available',
    ],
    idealFor: [
      'Corporate launches, AGMs, and conferences',
      'Gala dinners, award nights, and fundraisers',
      'NGO and diplomatic events requiring archival quality',
      'Event agencies and PR firms',
      'Cultural nights, fashion shows, and experiential brand activations',
    ],
    process: [
      { step: 'Run-of-show review', detail: 'Align on key moments, venue access, AV integration, and deliverables before event day.' },
      { step: 'Site & logistics', detail: 'Confirm camera positions, crew call times, and backup plans from Industrial Area prep.' },
      { step: 'Event coverage', detail: 'Multi-cam capture with clean audio for speeches, performances, and audience reaction.' },
      { step: 'Social pull', detail: 'First clips within 48 hours for comms teams and live posting.' },
      { step: 'Highlight & archive', detail: 'Full highlight reel and ceremony archive within ten business days.' },
    ],
  },
  {
    slug: 'weddings',
    tagline: 'Wedding films that feel like cinema, not coverage — documentary-style storytelling for your day.',
    sections: [
      {
        title: 'The film you will rewatch forever',
        paragraphs: [
          'A wedding day passes in a blur of emotion, logistics, and fleeting moments. A3 Studios produces wedding films and highlight videos that preserve the story with cinema discipline — not endless uncut footage, not cheesy montages set to stock music, but a crafted narrative you will rewatch on anniversaries and show your children. Based in Nairobi, we serve couples across Kenya who want documentary-style coverage: ceremony, reception, portraits, and the unscripted moments in between woven into one coherent film.',
          'Our wedding team shoots discreetly — two cinematographers standard for full-day coverage — capturing vows, reactions, speeches, dance floor energy, and detail shots of rings, decor, and cultural rituals without staging fake moments. Kenyan weddings embrace diverse traditions: civil ceremonies, church services, Hindu mandaps, Muslim nikah, Ruracio, and multi-day celebrations. We prepare in pre-production to understand your order of events, family sensitivities, and the moments you cannot miss.',
          'Getting-ready coverage is scoped to your comfort — some couples want full prep documented, others prefer the film to begin at ceremony. We discuss wardrobe details, gift exchanges, and private family moments that should stay off camera. Discretion is a skill; our cinematographers know when to hold back and when to lean in for a tearful hug that defines the story.',
          'Couples choose A3 when they value quality over quantity of vendors — one studio trusted for image, sound, and edit rather than a fragmented chain of freelancers. Our Industrial Area post team grades wedding films with the same care we bring to narrative work: skin tones honoured, low-light reception handled gracefully, audio of vows clean and present.',
          'Wedding film is heirlooms, not content. We edit with future audiences in mind — children who will watch parents young, grandparents who will hear vows again after they are gone. That long horizon changes every decision: music licensing for personal archive, respectful coverage of elders, and restraint in effects that will date quickly. Your film should feel timeless before it feels trendy.',
        ],
      },
      {
        title: 'Pre-wedding planning',
        paragraphs: [
          'Every wedding film begins with a conversation — in person or video call — about your day\'s timeline, venues, guest count, and creative preferences. We ask which speeches matter, whether drone exteriors are desired, and how you feel about being on camera during getting-ready moments. A shot list of cultural rituals is built collaboratively so nothing sacred is missed or disrespected.',
          'We coordinate with photographers, planners, and DJs where possible to avoid cross-traffic and align on key timings: procession, ring exchange, first dance, cake cut. Venue scouting covers light in your specific church, garden, or hotel ballroom — Nairobi weather and golden hour windows included. Full-day coverage scope is confirmed upfront: arrival, ceremony, portraits, reception, and exit.',
          'Parent and wedding party interviews — short, optional, heartfelt — can be recorded during portrait windows when couples want generational context in the film. Grandparents speaking about the family, siblings roasting gently in toasts we capture on camera: these layers deepen the story when requested without turning the edit into a talking-head documentary.',
          'Deliverables are clear before you book: feature film eight to twelve minutes, ceremony and vows edit, social teaser, and raw audio of vows for memory. Turnaround expectations — teaser in seven days, full film within twenty-one business days — help you plan sharing with family abroad.',
          'Family dynamics matter in Kenyan weddings — blended families, multiple parental figures, sensitive seating arrangements. We discuss who must appear in the film and who prefers privacy before shoot day. Planners and MCs receive our contact for timeline updates because weddings rarely run to schedule; flexibility with communication prevents missed moments.',
        ],
      },
      {
        title: 'Wedding day cinematography',
        paragraphs: [
          'On the day, A3 cinematographers dress appropriately, arrive early for detail and getting-ready coverage, and position for ceremony angles agreed in prep — respecting officiant rules and guest sightlines. Wireless audio captures vows even when PA systems fail. Reactions are filmed as events unfold, not recreated. Portrait sessions receive guided but natural direction — couple moments that feel intimate, not stiff.',
          'Reception coverage includes speeches, cultural performances, parent dances, and dance floor atmosphere without blinding guests with constant flash-style video lights. We use available light and discreet supplementation where needed. Second shooters cover simultaneous moments — bride entrance and groom\'s reaction — so the edit has emotional cross-cut options.',
          'Kenyan weddings often span long hours; crew rotation and media management are planned so nothing stops when the party does. Drives are backed up before celebration ends where logistics allow. You focus on the day; we focus on the film.',
          'Cultural rituals — dowry processions, blessings, church liturgy in multiple languages — receive dedicated coverage angles discussed in prep. We film respectfully in houses of worship, following officiant guidance on where cameras may go. Drone exteriors of venues are captured when permitted, giving destination-style scale to gardens, estates, and coastal properties without interrupting the ceremony.',
        ],
      },
      {
        title: 'Edit, grade, and delivery',
        paragraphs: [
          'Teaser edits land within seven business days — perfect for Instagram and WhatsApp while guests still talk about the wedding. Full feature films assemble within twenty-one business days after picture lock, telling a chronological or thematic story with music licensed for personal use. Ceremony and vows edits provide a longer archival cut focused on liturgy and promises.',
          'Editing at Industrial Area means colour consistency across church daylight, golden-hour portraits, and tungsten reception halls. Audio mix balances vows, speeches, ambient celebration, and music choices you approve. Revision rounds are structured — consolidated notes from both partners — so the final film reflects your voice, not an editor\'s generic template.',
          'Same-sex, interfaith, and culturally blended ceremonies receive the same narrative care as traditional formats — our editors avoid template assumptions about who walks first or which rituals define the climax. Your film follows your day\'s truth.',
          'The creative impact is lifelong: grandparents who could not travel see the ceremony; friends relive speeches; you notice glances you missed in the moment. The business impact for planners and venues is referral — couples who show an A3 film at brunch bookings follow.',
          'Music selection is collaborative — we guide licensing for personal-use scores and avoid tracks that block sharing on private family channels. Optional chapter markers help diaspora relatives jump to ceremony, speeches, or first dance. Secure private links protect your film until you are ready for wider sharing on social.',
        ],
      },
      {
        title: 'Couples we serve',
        paragraphs: [
          'A3 wedding films suit couples who want cinematic quality without Hollywood pretension — modern Kenyans, diaspora weddings hosted in Nairobi, destination guests marrying in Naivasha or Diani with local production support, and families valuing cultural documentation alongside aesthetic film.',
          'We are not the right fit for couples seeking raw uncut footage only or surveillance-style multi-camera dumps. We are the right fit when you want a story.',
          'Micro-weddings and full-scale celebrations both qualify — scope scales with hours and deliverables. Elopements receive intimate treatment; large receptions receive crew scaled to coverage needs. Ask honestly about budget; we respond honestly about what we can deliver beautifully.',
          'Second-day events — brunches, family gatherings, traditional follow-ups — can be added to coverage when your celebration spans a weekend. We treat multi-day bookings as one story with natural chapter breaks rather than disconnected clips, preserving narrative continuity for families who invest in extended festivities.',
        ],
      },
      {
        title: 'Why couples trust A3',
        paragraphs: [
          'Wedding video is an trust exercise. You cannot reshoot the day. A3 brings event experience, narrative editing skill, and the reliability of an established Nairobi studio — not a hobbyist with one camera and no backup media.',
          'Our wedding work shares DNA with our documentary and event slates: observe honestly, edit with restraint, let emotion lead. Pete Njagi\'s cinematography influence appears in flagship wedding commissions where couples want feature-film imagery for their portrait sessions and golden-hour sequences.',
          'Years from now, the flowers will be gone and the cake forgotten. The film remains. A3 Studios treats that responsibility with the seriousness your day deserves — from first prep call in Industrial Area to the final export you keep forever.',
          'Couples recommend us when guests ask who filmed — the ultimate referral in a market saturated with vendors. We honour that trust with contracts that specify deliverables clearly, backup media discipline on the day, and editors who listen when you say a moment mattered. Wedding film is personal; our process respects that.',
          'Rain plans and venue contingencies are discussed in prep — Nairobi weather is unpredictable and outdoor vows sometimes move indoors. Our crew adapts lighting and positioning quickly without panic, because the emotion of a sudden downpour or a moved ceremony can become the story if captured with calm professionalism rather than missed while scrambling for gear.',
        ],
      },
    ],
    benefits: [
      'Documentary-style feature film (8–12 minutes)',
      'Ceremony and vows edit plus social teaser',
      'Two-shooter full-day coverage standard',
      'Clean vow audio and graceful low-light reception grade',
      'Teaser in 7 days; full film within 21 business days',
      'Cultural and multi-faith ceremony experience',
    ],
    idealFor: [
      'Couples wanting cinematic wedding films in Kenya',
      'Diaspora and destination weddings hosted in Nairobi',
      'Multi-day and multi-faith celebrations',
      'Couples who value story over raw footage dumps',
      'Planners recommending premium video partners',
    ],
    process: [
      { step: 'Consultation', detail: 'Timeline, traditions, venues, and deliverables agreed before booking.' },
      { step: 'Pre-wedding prep', detail: 'Shot list of rituals, coordinator alignment, and venue light assessment.' },
      { step: 'Wedding day', detail: 'Discreet two-shooter coverage from prep through reception.' },
      { step: 'Teaser', detail: 'Social edit within seven business days for immediate sharing.' },
      { step: 'Feature film', detail: 'Graded narrative film and vows edit within twenty-one business days.' },
    ],
  },
  {
    slug: 'sport',
    tagline: 'Sport video with pace, clarity, and drama — match highlights, tournament recaps, and athlete profiles for Kenyan sport.',
    sections: [
      {
        title: 'Sport deserves broadcast discipline',
        paragraphs: [
          'Sport moves fast. A3 Studios produces sport video for athletes, teams, gyms, tournaments, federations, and sports brands who need coverage that matches the pace of the game — not shaky sideline clips that miss the decisive moment. Based in Nairobi, we cover football, rugby, boxing, athletics, basketball, motorsport, fitness, and emerging disciplines with multi-camera awareness, clean audio where commentary matters, and edits structured for both broadcast-safe masters and social virality.',
          'Our sport packages include match highlights five to eight minutes long, key-moment clips for immediate posting, stats-aware chapter markers when data feeds are available, and athlete profile films that support sponsorship and recruitment. We understand Kenyan sport\'s ecosystem: local league pride, national team moments, gym culture in Nairobi estates, and the brands trying to reach young fans on phones first.',
          'Women\'s sport, para-sport, and youth leagues receive equal production respect — not afterthought coverage because budgets are smaller. Storytelling in these spaces often carries the most untapped narrative power, and A3 approaches each commission with the same timestamp logging, audio discipline, and edit rhythm as a top-tier derby.',
          'Clients hire A3 when footage must hold up on federation channels, sponsor decks, and athlete social feeds simultaneously — one shoot, multiple deliverables, consistent grade. Sport coverage is not an afterthought at A3; it is a headline service alongside our film and commercial work.',
          'Kenyan sport fans consume highlights on phones before they read match reports. Vertical-first moments — goals, knockouts, sprint finishes — are captured with framing that survives crop, because that is how federations grow younger audiences. Long-form highlights still matter for YouTube and broadcast, but A3 plans both at capture, not as an afterthought in post.',
        ],
      },
      {
        title: 'Pre-event and venue planning',
        paragraphs: [
          'Sport video prep starts with understanding the sport\'s rhythm: halves, rounds, sets, or laps. We confirm venue access, sideline positions, lighting for indoor arenas, and whether drone or elevated coverage is permitted. Federation and league media accreditation are handled by the client where required; we provide kit lists and insurance documentation promptly.',
          'For tournaments, we build run sheets across pitches or courts — which matches receive full multi-cam, which receive single-operator highlights. Athlete profile shoots add interview setups, training B-roll, and gym environments scheduled around practice windows. Industrial Area prep coordinates battery charging, media formatting, and crew roles so kickoff is the only countdown that matters.',
          'Rights and clearance are clarified in prep — league logos, player likeness, music in stadiums — so highlights publish without takedown scares. Federations receive guidance on what athletes may repost personally versus official channel exclusives, because modern sport media is as much about governance as it is about goals.',
          'Audio planning separates sport types: ring announcer and corner audio for boxing, referee whistle and crowd for football, ambient gym for fitness brands. Backup recorders capture what venue PA misses.',
          'Weather and floodlight flicker affect outdoor night fixtures — we set shutter and white balance appropriately so post is not fighting banding across ninety minutes of footage. Indoor arenas with mixed LED and tungsten receive the same prep discipline. For multi-day tournaments, media wrangling and nightly backup protect against the nightmare scenario of a lost card on finals day.',
        ],
      },
      {
        title: 'Coverage on match day',
        paragraphs: [
          'On match or event day, A3 operators deploy with long lenses for pitch or court coverage, wide safety cameras when budget allows, and sideline mobility for celebrations and coaching reactions. We log key timestamps — goals, tries, knockdowns, finish lines — to accelerate post. Same-week social clips are prioritised when federations or clubs need immediate engagement.',
          'Half-time and interval windows are used for quick interview grabs and fan reaction when broadcast schedules allow — content that extends engagement beyond the final whistle and feeds club social channels before full highlights land.',
          'Training camp and gym shoots emphasise athlete personality and work ethic — slow-motion when appropriate, handheld energy when authenticity beats gloss. Pete Njagi\'s cinematography elevates flagship athlete films and brand campaigns where sport intersects with premium commercial visual standards.',
          'Recovery sessions, gym floor work, and off-pitch community initiatives — school visits, charity runs — extend athlete profiles beyond highlight reels. Sponsors increasingly want proof of character and community presence; A3 captures those moments with the same craft as match-day action so brand partnerships feel substantiated, not cosmetic.',
          'Safety and respect for officials, coaches, and players are non-negotiable. We stay in designated media areas, respond to referee instructions, and protect minors with appropriate consent processes when filming youth sport.',
          'Locker-room and tunnel access — when granted — is filmed with editorial restraint and clearance from team management. Sponsor visibility is documented for activation reports: logo clarity on kits, boards, and interview backdrops. Athletes receive usable clips for personal channels within agreed windows so clubs and federations maintain release coordination.',
        ],
      },
      {
        title: 'Edit, grade, and distribution',
        paragraphs: [
          'Sport edits demand rhythm — build-up, peak action, reaction, consequence. A3 editors structure highlights so casual fans understand the story and die-hards get every crucial moment. Stats-aware chapter markers help YouTube navigation when datasets are supplied. Broadcast-safe masters meet technical specs for regional sports broadcasters when required.',
          'Grade unifies footage across cameras with different white balances — outdoor noon, floodlit night, indoor gym — into one cohesive package. Sponsor slates, league logos, and athlete end cards integrate in post. Vertical key moments export for TikTok, Instagram Reels, and WhatsApp fan groups — the distribution reality of Kenyan sport marketing.',
          'Historical archive value grows with each season — clubs that invest in consistent highlight packages build a visual history recruits and fans browse years later. A3 filenames and metadata make searching past fixtures practical, not archaeological.',
          'Turnaround: same-week social clips standard; full match package within seven business days for typical scope. Tournament contracts align delivery to league schedules — finals footage before press conferences when possible.',
          'Commentary beds, crowd ambience, and interview pull quotes can be integrated when federations supply assets or when we record post-match mixed zones. Clean international masters without commentary are available for broadcast partners who supply their own voice track. Either way, audio levels meet technical spec — sport sound is half the excitement.',
        ],
      },
      {
        title: 'Who we film for',
        paragraphs: [
          'Ideal clients include club marketing teams, national and regional federations, tournament organisers, boxing promoters, fitness chains, athlete managers, sports betting and apparel brands activating in Kenya, and schools documenting programmes for alumni and donors.',
          'Individual athletes building personal brands receive profile packages scaled to budget — interview, training, and competition B-roll cut for sponsor outreach. Gyms and coaches receive facility tours and class energy reels for membership drives.',
          'Combat sports — boxing, MMA, kickboxing — receive round-aware logging and corner audio integration because the narrative lives in exchanges, not only knockdowns. A3 has covered Kenyan boxing cards where the story is resilience as much as victory.',
          'When access is limited — phone-synced secondary angles, single-camera lower leagues — we scope honestly. When access is full — multi-cam, pitchside, locker room — we deliver broadcast ambition.',
          'Schools and universities documenting fixtures for alumni engagement and recruitment benefit from season packages — consistent look across terms, highlight reels for prize-giving, and archival value that compounds year over year. Fitness influencers and gym brands receive content that feels athletic, not advertorial, because authenticity drives membership more than hype.',
        ],
      },
      {
        title: 'Why sport organisations choose A3',
        paragraphs: [
          'Kenyan sport is rich in story and uneven in media infrastructure. A3 bridges that gap with professional crew, Nairobi-based turnaround, and understanding of local fan culture. We do not treat sport as lesser than film — we apply the same backup media discipline, same grade standards, same respect for deadline.',
          'Our Industrial Area post suites handle high-volume tournament deliveries without outsourcing to editors who do not know offside from knockout. Integration with A3 commercial team means sponsor integrations look branded, not bolted on.',
          'The next highlight reel should feel as exciting as the match itself. A3 Studios captures sport with the speed and clarity fans deserve — and the polish sponsors require.',
          'From Kasarani to community pitches in Embakasi, we meet sport where it lives — not only at flagship fixtures. That ground-level respect builds trust with clubs who have been burned by vendors who disappear after the derby. A3 shows up for league matches with the same media discipline as cup finals, because every game matters to someone.',
          'Season-long retainer packages help clubs and federations budget predictably — agreed number of fixtures, standard deliverables, priority turnaround on derbies and playoffs. Post-production stays at Industrial Area so visual identity remains consistent from matchday one through trophy presentation, building a season archive that compounds in value for fans and sponsors alike.',
        ],
      },
    ],
    benefits: [
      'Match highlights (5–8 min) and immediate key-moment clips',
      'Multi-camera coverage when budget and access allow',
      'Stats-aware chapter markers and broadcast-safe masters',
      'Same-week social clips; full package within 7 business days',
      'Athlete profiles, gym reels, and tournament recaps',
      'Experience across football, rugby, boxing, athletics, and fitness',
    ],
    idealFor: [
      'Clubs, federations, and tournament organisers',
      'Boxing promoters and combat sport events',
      'Athletes building sponsorship and personal brands',
      'Gyms, coaches, and fitness brands',
      'Sports apparel and betting brand activations',
    ],
    process: [
      { step: 'Scope & access', detail: 'Confirm sport format, venue media rules, deliverables, and turnaround deadlines.' },
      { step: 'Venue prep', detail: 'Camera positions, audio plan, and crew briefing from Industrial Area.' },
      { step: 'Event coverage', detail: 'Multi-cam or single-operator capture with timestamp logging.' },
      { step: 'Social pull', detail: 'Key moments clipped and graded for same-week posting.' },
      { step: 'Full package', detail: 'Highlight reel, chapter markers, and broadcast master within seven business days.' },
    ],
  },
  {
    slug: 'community',
    tagline: 'One pro bono film per year for impact — documentary storytelling for NGOs, schools, and community initiatives that deserve a voice.',
    sections: [
      {
        title: 'Impact storytelling, pro bono',
        paragraphs: [
          'A3 Studios reserves one production slot per calendar year for a registered NGO, school, youth programme, or community initiative — documentary short, awareness film, or project coverage delivered pro bono. This is not leftover capacity dressed as charity; it is a deliberate commitment from a Nairobi production house that believes African stories include the activists, educators, and organisers doing essential work without marketing budgets. Studio Head Pete Njagi and the documentary leadership team select the annual partner through an application process announced each January.',
          'The pro bono slot covers pre-production, shoot, edit, colour grade, and social-ready deliverables — the same pipeline paying clients receive. Travel outside Nairobi is billed at cost only, keeping the benefit focused on production craft rather than inflated expenses. Selected partners receive impact story consultation: how to structure narrative for donors, volunteers, and policy audiences without sensationalising the communities served.',
          'Previous pro bono partners have screened films at community halls, parliament outreach sessions, and international NGO conferences — proof that a single well-made documentary can travel further than the organisation\'s usual comms budget allows. A3 designs deliverables with those audiences in mind from day one, not as an afterthought when the master is already locked.',
          'Community projects choose A3 when they need cinema-quality documentary discipline — not a volunteer with a DSLR — to honour subjects with dignity, clarity, and emotional truth. Our films support fundraising galas, grant applications, awareness campaigns, and archival memory for programmes that change lives.',
          'Impact film is advocacy. A well-crafted documentary short can unlock board decisions, donor pledges, and volunteer sign-ups in ways PDFs cannot — but only if the story centres community voice and resists poverty tourism. A3\'s documentary team trains on ethical representation because the wrong frame can harm the people you exist to serve.',
        ],
      },
      {
        title: 'Application and selection',
        paragraphs: [
          'Organisations apply via the A3 contact form with a brief: mission, proposed film subject, timeline, and intended use. Selection weighs impact potential, story readiness, organisational legitimacy, and alignment with A3 values — Kenyan-rooted, globally legible, respectful of subjects. We prioritise initiatives underrepresented in mainstream media: youth STEM programmes, community health workers, environmental stewardship, arts education, disability inclusion, and women-led enterprise.',
          'Due diligence confirms registration status, safeguarding policies for filming minors, and consent processes for vulnerable subjects. Selected partners attend a kickoff workshop at our Industrial Area facility — treatment development, interview strategy, and realistic scope for one pro bono production. Not every applicant is chosen; transparency about capacity is part of respect for the sector.',
          'Partners who are not selected receive guidance where possible — shorter referrals, advice on briefs — because the need exceeds one slot. The pro bono programme is a flagship, not the only way A3 supports impact; discounted commercial rates occasionally apply for aligned NGOs when schedule allows.',
          'Applications are reviewed by a small panel including documentary leadership and Pete Njagi — ensuring visual and ethical standards align with studio values. We announce selected partners publicly each year not for publicity alone, but to signal that Kenyan impact stories deserve cinema attention and to invite other funders to notice the work.',
        ],
      },
      {
        title: 'Documentary prep and ethics',
        paragraphs: [
          'Impact filmmaking demands ethical rigour. A3\'s documentary head collaborates with partner organisations on informed consent, translation for non-English speakers, and narrative framing that centres community voice over saviour tropes. Pre-production includes interview question design, location access for schools and clinics, and scheduling that minimises disruption to programme delivery.',
          'Programme beneficiaries review interview questions when appropriate — not for censorship, but for dignity. We ask what they want the world to understand, not only what donors want to hear. That inversion produces films that communities endorse because they recognise themselves on screen.',
          'Industrial Area prep rooms host mood board sessions, shot listing for observational B-roll, and planning for graphics or subtitles when multilingual audiences matter. We coordinate with programme staff so filming days feel collaborative — staff are not props; beneficiaries are not exploited for emotion.',
          'When Pete Njagi oversees cinematography on pro bono documentary work, visual quality rises to feature standard — because underserved stories should not look underserved. Lighting, composition, and audio treat every interview subject with the dignity of a premium documentary portrait.',
          'Translation, subtitles, and accessibility are planned in prep — deaf viewers, non-English speakers, and policy audiences who need clear on-screen context. We avoid exploitative B-roll of suffering without purpose; every frame must advance understanding or emotion tied to the programme\'s mission, not shock for shares.',
        ],
      },
      {
        title: 'Production and post for partners',
        paragraphs: [
          'Shoot days deploy small, respectful crews — director, DP, sound, producer — scaled to environment. Classroom, clinic, field, and community hall setups receive appropriate light and audio without over-engineering. Observational moments complement interviews: a teacher preparing lessons, a health worker on rounds, youth building something together.',
          'Community members occasionally participate as fixers or translators — paid fairly when roles exceed casual help — because local knowledge prevents miscommunication and builds trust on sensitive sites. A3 credits those contributions because good impact film is always collaborative.',
          'Post-production at Industrial Area delivers documentary short or awareness film masters, social cut-downs for campaigns, and consultation on deployment — YouTube, gala screens, donor emails, parliamentary submissions. Timeline is agreed at kickoff; pro bono does not mean indefinite. Partners participate in edit feedback with clear revision boundaries.',
          'Deliverables remain partner property for mission use; A3 requests credit and limited reel usage unless subjects require anonymity. Sensitive stories receive export controls — private links, watermarked review copies — until release is approved.',
          'Partners receive a deployment consultation session: how to cut the film for a ten-minute gala slot, which thirty-second pull works for Instagram, and how to brief spokespeople for media interviews after release. Film is not the finish line — it is the start of a communications push A3 helps you plan even though we are not a PR agency.',
        ],
      },
      {
        title: 'Who should apply',
        paragraphs: [
          'Registered NGOs, community-based organisations, public schools with governing boards, youth sports and arts programmes, faith-based charities with transparent governance, and social enterprises with documented impact metrics are ideal applicants. Political campaign content, for-profit marketing disguised as impact, and organisations without safeguarding policies are out of scope.',
          'Successful applicants have a specific story ready — not a vague wish for "a video about our work." They commit staff time for access, fact-checking, and launch support. They understand film is one tool in a broader communications strategy.',
          'Measuring impact after release — views, donor responses, volunteer uptick — helps partners and A3 learn together. We encourage simple before-and-after metrics so the pro bono slot delivers accountability, not just art.',
          'Geographic focus is Kenya-first; East African initiatives considered when travel-at-cost is feasible. Urban and rural projects both qualify — A3 has shot across Nairobi counties and beyond.',
          'Collaborative partnerships — where two NGOs share a story arc — are considered when joint application strengthens narrative and avoids duplicate outreach. Schools with active media clubs sometimes co-host student observers on shoot days, turning the pro bono slot into informal training for the next generation of Kenyan documentarians.',
        ],
      },
      {
        title: 'Why this programme exists',
        paragraphs: [
          'A3 Studios was founded in a converted Industrial Area warehouse with a big idea: Kenyan stories for the world. Community impact stories are part of that idea — not side content. The pro bono slot trains emerging documentary crew, keeps the studio connected to ground truth beyond commercial briefs, and returns craft to sectors that need it most.',
          'Business impact for partners translates to donor confidence, volunteer recruitment, policy visibility, and community pride. Creative impact is human: subjects see themselves represented honestly; audiences connect beyond statistics.',
          'If your organisation serves Kenya and needs one film that says what reports cannot, apply when applications open. One slot per year is limited; the standard is not. A3 Studios will treat your story with the same seriousness we bring to festival screens — because impact deserves nothing less.',
          'The pro bono programme also keeps A3 honest — reminding a commercial studio why stories matter beyond invoice value. Crew who work on the annual impact film carry that ethic back to paid sets: respect for subjects, patience in interviews, and belief that Kenyan voices belong on every screen, not only in charity reels.',
          'Alumni of the programme often return as paying clients when their organisations secure funding — not because we expect it, but because trust built during pro bono work translates into long-term partnerships. Impact storytelling and commercial production share the same craft at A3; only the invoice changes.',
        ],
      },
    ],
    benefits: [
      'Full documentary production pipeline at pro bono rates',
      'Impact story consultation for donors and campaigns',
      'Ethical consent and safeguarding-first approach',
      'Social-ready edits alongside master documentary',
      'Travel outside Nairobi billed at cost only',
      'Cinematography leadership from Pete Njagi on selected projects',
    ],
    idealFor: [
      'Registered NGOs and community-based organisations',
      'Public schools and youth programmes',
      'Health, education, environment, and arts initiatives',
      'Women-led and disability-inclusion projects',
      'Organisations with a specific story and launch plan',
    ],
    process: [
      { step: 'Apply', detail: 'Submit brief via contact form when annual applications open each January.' },
      { step: 'Selection & kickoff', detail: 'Selected partner joins treatment workshop at Industrial Area.' },
      { step: 'Ethical prep', detail: 'Consent, safeguarding, interview plan, and shoot schedule co-designed.' },
      { step: 'Production', detail: 'Respectful small-crew shoot with observational and interview coverage.' },
      { step: 'Delivery', detail: 'Master film, social edits, and deployment consultation on agreed timeline.' },
    ],
  },
];

export const serviceCopyMap: Record<string, ServiceLongCopy> = Object.fromEntries(
  serviceCopy.map((entry) => [entry.slug, entry]),
);

export function getServiceCopy(slug: string): ServiceLongCopy | undefined {
  return serviceCopyMap[slug];
}
