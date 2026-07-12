import { films } from './films';
import type { Film } from '../types';

export type PersonKind = 'Director' | 'Actor' | 'Cinematographer';

export interface Person {
  slug: string;
  name: string;
  role: string;          // headline role at A3
  kind: PersonKind;
  based: string;
  bio: string;
  tags: string[];        // disciplines / specialities
  accent: string;
}

// Slugify a credited name to a person slug / portrait filename.
export function personSlug(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const people: Person[] = [
  {
    slug: 'pete-njagi', name: 'Pete Njagi', role: 'Founder & Studio Head', kind: 'Director', based: 'Nairobi',
    accent: '#3b82f6',
    bio: 'Pete founded A3 Studios in 2019 with a single camera and a conviction that the next era of world cinema would be written from the continent. A director first, he still sits in the edit on every A3 original — from neon-noir thrillers to the studio\'s first AI experiments.',
    tags: ['Directing', 'Story', 'Neo-noir', 'AI Lab'],
  },
  {
    slug: 'baraka-kipchoge', name: 'Baraka Kipchoge', role: 'Head of Film', kind: 'Director', based: 'Eldoret · Nairobi',
    accent: '#f59e0b',
    bio: 'Baraka leads A3\'s feature slate. Raised in the Rift Valley, he is drawn to landscape as character — survival epics, histories and the quiet drama of families under pressure. His films have travelled from FESPACO to Toronto.',
    tags: ['Directing', 'Epics', 'History', 'Location'],
  },
  {
    slug: 'imani-wekesa', name: 'Imani Wekesa', role: 'Head of Production', kind: 'Director', based: 'Nairobi',
    accent: '#d97706',
    bio: 'Imani keeps A3 moving — a producer-director who has run everything from wildlife adventures to Afrofuturist sci-fi. She built the studio\'s production pipeline and now steers its AI-animation lab.',
    tags: ['Producing', 'Directing', 'Sci-Fi', 'AI Lab'],
  },
  {
    slug: 'otieno-odhiambo', name: 'Otieno Odhiambo', role: 'Head of Documentary', kind: 'Director', based: 'Kisumu · Nairobi',
    accent: '#ea580c',
    bio: 'Otieno makes documentaries that move like music — observational, rhythmic and deeply local. A former sound recordist, he still cuts to the beat. He also composes original scores for A3 titles.',
    tags: ['Documentary', 'Music', 'Sound', 'Editing'],
  },
  {
    slug: 'sanaa-kariuki', name: 'Sanaa Kariuki', role: 'Head of Series', kind: 'Director', based: 'Nairobi',
    accent: '#db2777',
    bio: 'Sanaa runs A3\'s episodic slate and edits many of its features. Sharp, stylish and addictive — her series pull back the curtain on Nairobi\'s creative underworld, from fashion week to the recording booth.',
    tags: ['Showrunning', 'Editing', 'Series', 'Fashion'],
  },
  {
    slug: 'tunda-omondi', name: 'Tunda Omondi', role: 'Director of Photography', kind: 'Cinematographer', based: 'Nairobi',
    accent: '#dc2626',
    bio: 'Tunda is the eye behind A3\'s signature look — neon-soaked nights, golden savannah light and kinetic street energy. He directs too, with a run of turbo-charged comedies and coming-of-age stories.',
    tags: ['Cinematography', 'Lighting', 'Directing', 'Action'],
  },
  {
    slug: 'neema-achieng', name: 'Neema Achieng', role: 'Lead Actor', kind: 'Actor', based: 'Nairobi',
    accent: '#7c3aed',
    bio: 'One of the most recognisable faces in East African film, Neema anchors A3\'s biggest dramas. She moves from hard-boiled detective to soaring biopic lead without missing a beat.',
    tags: ['Lead roles', 'Drama', 'Biopic', 'Thriller'],
  },
  {
    slug: 'daudi-kimani', name: 'Daudi Kimani', role: 'Actor', kind: 'Actor', based: 'Nairobi',
    accent: '#0891b2',
    bio: 'Charismatic and quick, Daudi is A3\'s go-to leading man for action and comedy — and a surprising dramatic depth when the story turns. He came up in Nairobi\'s theatre scene.',
    tags: ['Lead roles', 'Action', 'Comedy', 'Theatre'],
  },
  {
    slug: 'halima-hassan', name: 'Halima Hassan', role: 'Actor & Director', kind: 'Actor', based: 'Lamu · Nairobi',
    accent: '#0284c7',
    bio: 'Halima acts and directs, bringing the Swahili coast to A3\'s slate. Her luminous coastal romance marked her feature directing debut; on screen she is a fearless character actor.',
    tags: ['Acting', 'Directing', 'Coast', 'Romance'],
  },
  {
    slug: 'jabari-mutua', name: 'Jabari Mutua', role: 'Actor', kind: 'Actor', based: 'Nairobi',
    accent: '#16a34a',
    bio: 'Jabari brings a coiled intensity to A3\'s survival epics and histories. A former athlete, he does much of his own physical work on location.',
    tags: ['Lead roles', 'Drama', 'Survival', 'Physical'],
  },
  {
    slug: 'zawadi-mwangi', name: 'Zawadi Mwangi', role: 'Actor', kind: 'Actor', based: 'Nairobi',
    accent: '#e11d48',
    bio: 'A breakout of A3\'s series slate, Zawadi is the face of a new generation — equally at home on the runway of a fashion drama and the streets of a coming-of-age story.',
    tags: ['Rising star', 'Series', 'Drama', 'Fashion'],
  },
];

const bySlug = new Map(people.map((p) => [p.slug, p]));
const byName = new Map(people.map((p) => [p.name, p]));

export const getPerson = (slug: string): Person | undefined => bySlug.get(slug);
export const personByName = (name: string): Person | undefined => byName.get(name);

/** Films where this person is credited as director or cast. */
export function personFilmography(p: Person): Film[] {
  return films.filter((f) => f.director === p.name || f.cast.includes(p.name));
}

/** A person's leading disciplines summarised from their credits. */
export function personCreditCount(p: Person): { directed: number; acted: number } {
  const directed = films.filter((f) => f.director === p.name).length;
  const acted = films.filter((f) => f.cast.includes(p.name)).length;
  return { directed, acted };
}
