import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Backdrop } from '../components/Backdrop';
import { featuredFilms } from '../data/films';
import { personByName } from '../data/people';
import { PORTRAIT } from '../types';
import { ArrowRight, Play } from '../components/Icons';
import { TrailerModal } from '../components/TrailerModal';
import { StockGallery } from '../components/StockGallery';
import type { Film } from '../types';

const studioGallery = [
  { src: '/images/studio/studio-01.webp', caption: 'The sound stage' },
  { src: '/images/studio/studio-02.webp', caption: 'The edit suite' },
  { src: '/images/studio/studio-04.webp', caption: 'The mix room' },
  { src: '/images/studio/studio-06.webp', caption: 'Broadcast gallery' },
];

const officeGallery = [
  { src: '/images/office/office-01.webp', caption: 'Reception & lounge' },
  { src: '/images/office/office-02.webp', caption: 'The writers\u2019 room' },
  { src: '/images/office/office-03.webp', caption: 'Open-plan studio floor' },
  { src: '/images/office/office-04.webp', caption: 'Meeting & pitch room' },
  { src: '/images/office/office-05.webp', caption: 'The creative lounge' },
  { src: '/images/office/office-06.webp', caption: 'Colour & grading bay' },
];

const team = [
  { name: 'Pete Njagi', role: 'Studio Head', accent: '#3b82f6' },
  { name: 'Hopeking Muchira', role: 'Head of Film', accent: '#f59e0b' },
  { name: 'Diana Gakuya', role: 'Head of Production', accent: '#d97706' },
  { name: 'Otieno Odhiambo', role: 'Head of Documentary', accent: '#ea580c' },
  { name: 'Sanaa Kariuki', role: 'Head of Series', accent: '#db2777' },
  { name: 'Tunda Omondi', role: 'Director of Photography', accent: '#dc2626' },
];

const timeline = [
  { year: '2019', text: 'A3 Studios is founded in a converted warehouse in Nairobi’s Industrial Area with a single camera and a big idea.' },
  { year: '2021', text: 'Our debut feature premieres to a sold-out crowd and earns A3 its first international festival selection.' },
  { year: '2023', text: 'A3 opens its own sound stage and post-production house — the first fully integrated studio of its kind in the region.' },
  { year: '2025', text: 'A3 titles stream in 24 countries, and the studio launches its own platform at a3.ke.' },
];

export default function About() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const feature = featuredFilms()[0];

  useEffect(() => {
    document.title = 'The Studio — A3 Studios';
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">The Studio</div>
          <h1>We make African<br />stories for the world</h1>
        </div>
      </header>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <p className="lede">
              A3 Studios is a Nairobi-based production house built on a simple belief:
              that <em>the next era of world cinema</em> will be written from the
              continent — and we make the films, commercial videos and sport coverage that prove it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="feature">
            <div className="feature-media">
              <Backdrop film={feature} alt="A3 on set" />
              <button className="play-fab" aria-label="Watch the studio reel" onClick={() => setTrailer(feature)}>
                <Play />
              </button>
            </div>
            <div className="prose">
              <div className="kicker">Our craft</div>
              <h2 style={{ fontSize: 'clamp(24px,3.4vw,38px)', margin: '14px 0 18px' }}>Cinema, made at home</h2>
              <p>
                From script to screen, every A3 production is developed, shot and
                finished in Kenya by Kenyan talent. We invest in the people behind
                the camera as much as the faces in front of it — training a new
                generation of writers, cinematographers, editors and composers.
              </p>
              <p>
                Our stories are rooted in place but built for the world: bold,
                contemporary, and unafraid. From neon-soaked thrillers to
                sweeping survival epics, we make the films we always wanted to see.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="strip section">
        <div className="container">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 30 }}>Milestones</div>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="tl-item" key={t.year}>
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-text">{t.text}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">The people</div>
              <h2 style={{ marginTop: 12 }}>Leadership</h2>
            </div>
          </div>
          <Reveal className="team-grid">
            {team.map((m) => {
              const p = personByName(m.name);
              const body = (
                <>
                  <div className="member-photo">
                    {p ? (
                      <img src={PORTRAIT(p.slug)} alt={m.name} loading="lazy" />
                    ) : (
                      <span style={{ background: `linear-gradient(150deg, ${m.accent}cc, ${m.accent}33 60%, #0a0a0b)` }}>
                        {m.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="member-body">
                    <div className="m-name">{m.name}</div>
                    <div className="m-role">{m.role}</div>
                  </div>
                </>
              );
              return p
                ? <Link className="member member-link" key={m.name} to={`/person/${p.slug}`}>{body}</Link>
                : <div className="member" key={m.name}>{body}</div>;
            })}
          </Reveal>
          <div style={{ marginTop: 22 }}>
            <Link className="btn btn-outline" to="/people">Meet the full collective <ArrowRight style={{ width: 16, height: 16 }} /></Link>
          </div>
        </div>
      </section>

      <StockGallery
        kicker="The facility"
        title="One roof, script to screen"
        images={studioGallery}
        note="A3's sound stage and post-production house in Nairobi's Industrial Area."
      />

      <StockGallery
        kicker="Our office"
        title="Come say karibu"
        images={officeGallery}
        note="Our home base at Kisima Apartments, Pangani — where the writing, pitching and planning happen."
      />

      {/* Visit us — map + address */}
      <section className="section-tight">
        <div className="container">
          <Reveal className="visit">
            <div className="visit-info">
              <div className="kicker">Visit us</div>
              <h2 style={{ fontSize: 'clamp(24px,3.4vw,38px)', margin: '12px 0 16px' }}>A3 Studios HQ</h2>
              <p className="visit-addr">
                <strong>Kisima Apartments</strong><br />
                Pangani, Nairobi<br />
                Kenya
              </p>
              <p style={{ color: 'var(--ink-soft)', marginBottom: 20 }}>
                Drop in for a coffee and a pitch. We&rsquo;re a short hop from the CBD — parking on site,
                and the edit suites are always running.
              </p>
              <div className="visit-actions">
                <a
                  className="btn btn-gold"
                  href="https://www.google.com/maps/search/?api=1&query=Kisima+Apartments+Pangani+Nairobi"
                  target="_blank" rel="noopener noreferrer"
                >
                  Get directions <ArrowRight style={{ width: 17, height: 17 }} />
                </a>
                <Link className="btn btn-outline" to="/contact">Contact the studio</Link>
              </div>
            </div>
            <div className="visit-map">
              <iframe
                title="A3 Studios — Kisima Apartments, Pangani, Nairobi"
                src="https://www.google.com/maps?q=Kisima%20Apartments%2C%20Pangani%2C%20Nairobi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="feature">
            <div className="feature-media">
              <Backdrop film={featuredFilms()[1] ?? feature} alt="A3 crew on location" />
            </div>
            <div className="prose">
              <div className="kicker">On location</div>
              <h2 style={{ fontSize: 'clamp(24px,3.4vw,38px)', margin: '14px 0 18px' }}>Kenya is our backlot</h2>
              <p>
                From the neon of Westlands to the escarpments of the Rift, we shoot
                where our stories live. A3 crews have worked across seventeen counties —
                and every frame is finished back home in Nairobi.
              </p>
              <Link className="btn btn-outline" to="/films">See where we shot <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Reveal>
            <div className="feature-media" style={{ aspectRatio: '21/7', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
              <Backdrop film={featuredFilms()[2] ?? feature} alt="" />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,10,0.62)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: 24 }}>
                <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', marginBottom: 16 }}>Have a story to tell?</h2>
                <p style={{ color: 'var(--ink-soft)', maxWidth: 520, margin: '0 auto 22px' }}>
                  We’re always looking for bold new voices, partners and collaborators.
                </p>
                <Link className="btn btn-gold" to="/contact">Work with A3 <ArrowRight style={{ width: 18, height: 18 }} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
