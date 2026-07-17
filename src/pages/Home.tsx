import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { featuredFilms, byStatus, byKind, films, aiFilms } from '../data/films';
import { personByName } from '../data/people';
import { PORTRAIT } from '../types';
import { Hero } from '../components/Hero';
import { FilmRow } from '../components/FilmRow';
import { Top10Row } from '../components/Top10Row';
import { Reveal } from '../components/Reveal';
import { Backdrop } from '../components/Backdrop';
import { TrailerModal } from '../components/TrailerModal';
import { Laurels } from '../components/Laurels';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { useCountUp } from '../hooks/useCountUp';
import { Play, ArrowRight, Clapper, Layers, Camera, Award, Quote, Star, Sparkles } from '../components/Icons';

const rateHighlights = [
  { title: 'DP / Movie Gigs', price: '$975', note: 'Cinematography & DP for films and premium productions.' },
  { title: 'Commercial Videos', price: '$609.38', note: 'Brand films, product launches & social campaigns.' },
  { title: 'Animation', price: '$400', note: '2D/3D & AI-assisted animation, explainers & titles.' },
  { title: 'Event Videos', price: '$487.50', note: 'Launches, conferences & live experiences.' },
  { title: 'Music Videos', price: '$243.75', note: 'Performance & narrative promos, graded in-house.' },
  { title: 'Sport Videos', price: '$243.75', note: 'Match highlights & athlete films.' },
  { title: 'Photography', price: '$150', note: 'Portrait photography & photoshoots, studio or location.' },
  { title: 'Wedding Videos', price: '$390', note: 'Cinematic wedding films & highlight edits.' },
];

const stats = [
  { num: 24, suffix: '+', label: 'Projects delivered' },
  { num: 38, suffix: '', label: 'Festival selections' },
  { num: 9, suffix: '', label: 'Awards & nominations' },
  { num: 24, suffix: '', label: 'Countries streaming A3' },
];

const services = [
  { icon: Clapper, title: 'Original Films', to: '/films', copy: 'Bold, contemporary features made in Kenya for the world — from neo-noir thrillers to sweeping survival epics.' },
  { icon: Layers, title: 'Series & Documentaries', to: '/series', copy: 'Binge-worthy drama and unflinching non-fiction, built for streaming and shot with feature-film ambition.' },
  { icon: Camera, title: 'Commercial & Brand', to: '/commercial', copy: 'Launch films, brand documentaries and social suites for the continent’s biggest names — fast, cinematic, on-message.' },
  { icon: Award, title: 'Sport & Live', to: '/sport', copy: 'Multi-camera match coverage, live vision, athlete films and same-day highlight packages.' },
];

const collective = [
  { name: 'Pete Njagi', role: 'Studio Head · Director', accent: '#e50914' },
  { name: 'Hopeking Muchira', role: 'Head of Film', accent: '#b20710' },
  { name: 'Diana Gakuya', role: 'Head of Production', accent: '#7c3aed' },
  { name: 'Otieno Odhiambo', role: 'Head of Documentary', accent: '#0891b2' },
  { name: 'Sanaa Kariuki', role: 'Head of Series', accent: '#db2777' },
  { name: 'Tunda Omondi', role: 'Director of Photography', accent: '#ea580c' },
];

const clients = ['Safaricom', 'Equity Bank', 'Tusker', 'UNICEF', 'Gor Mahia FC', 'Kenya Sevens', 'Kenya Airways', 'Naivas'];

const press = [
  { text: 'A3 is quietly building the most exciting film studio on the continent.', source: 'The EastAfrican' },
  { text: 'World-class craft, unmistakably Kenyan stories.', source: 'Business Daily' },
  { text: 'The bar for African cinema just moved — and it moved to Nairobi.', source: 'OkayAfrica' },
];

function StatItem({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { ref, val } = useCountUp<HTMLDivElement>(num);
  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">{val}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const featured = featuredFilms();
  const spotlight = featured[1] ?? films[0];
  const top10 = Array.from(
    new Map([...featured, ...byStatus('Now Streaming')].map((f) => [f.slug, f])).values(),
  );

  useEffect(() => {
    document.title = 'A3 Studios — Film, commercial video & sport coverage';
  }, []);

  return (
    <>
      <Hero films={featured} onPlay={setTrailer} />

      <div className="laurels-band">
        <div className="container">
          <span className="laurels-kicker">Award-winning original cinema</span>
          <Laurels />
        </div>
      </div>

      <AnnouncementBar />

      <div className="section-tight" style={{ paddingTop: 'clamp(24px,4vw,44px)' }}>
        <FilmRow title="Now Streaming" films={byStatus('Now Streaming').filter((f) => f.kind === 'Film' || f.kind === 'Series' || f.kind === 'Documentary')} to="/films" onPlay={setTrailer} />
        <Top10Row title="Top 10 in Kenya today" films={top10} />
        <FilmRow title="A3 Originals" films={byKind('Film')} to="/films" onPlay={setTrailer} />
        <FilmRow title="Series & Documentaries" films={[...byKind('Series'), ...byKind('Documentary')]} to="/series" onPlay={setTrailer} />
        <FilmRow title="Commercial & Video" films={byKind('Commercial')} to="/commercial" onPlay={setTrailer} />
        <FilmRow title="Sport Coverage" films={byKind('Sport')} to="/sport" onPlay={setTrailer} />
      </div>

      {/* AI Originals band */}
      <section className="ai-band">
        <div className="container">
          <Reveal>
            <div className="section-head ai-band-head">
              <div>
                <div className="kicker ai-band-kicker"><Sparkles /> New from the A3 AI Lab</div>
                <h2 style={{ marginTop: 10 }}>A3 AI Originals</h2>
              </div>
              <Link className="link" to="/ai-films">Explore AI Originals <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
          </Reveal>
        </div>
        <FilmRow title="" films={aiFilms()} onPlay={setTrailer} />
      </section>

      {/* what we do */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
              <div className="kicker">What we do</div>
              <h2 style={{ fontSize: 'clamp(24px,3.6vw,40px)' }}>One studio. Every format.</h2>
            </div>
          </Reveal>
          <Reveal className="svc-grid">
            {services.map((s) => (
              <Link className="svc-card" to={s.to} key={s.title}>
                <span className="svc-ico"><s.icon /></span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <span className="svc-more">Explore <ArrowRight style={{ width: 16, height: 16 }} /></span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* spotlight feature */}
      <section className="section">
        <div className="container">
          <Reveal className="feature">
            <div className="feature-media">
              <Backdrop film={spotlight} alt={`${spotlight.title} still`} />
              <button className="play-fab" aria-label={`Watch ${spotlight.title}`} onClick={() => setTrailer(spotlight)}>
                <Play />
              </button>
            </div>
            <div>
              <div className="kicker">In the spotlight</div>
              <h2>{spotlight.title}</h2>
              <p>{spotlight.synopsis}</p>
              <div className="hero-actions">
                <Link className="btn btn-gold" to={`/film/${spotlight.slug}`}>
                  Explore the film <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
                <button className="btn btn-outline" onClick={() => setTrailer(spotlight)}><Play /> Trailer</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FilmRow title="Coming Soon" films={[...byStatus('Coming Soon'), ...byStatus('In Production')]} to="/films" onPlay={setTrailer} />

      {/* the collective */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="kicker">The A3 collective</div>
                <h2 style={{ marginTop: 12 }}>The people behind the frame</h2>
              </div>
              <Link className="link" to="/about">Meet the studio <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
          </Reveal>
          <Reveal className="collective-grid">
            {collective.map((m) => {
              const p = personByName(m.name);
              const inner = (
                <>
                  <div className="collective-photo">
                    {p ? (
                      <img src={PORTRAIT(p.slug)} alt={m.name} loading="lazy" />
                    ) : (
                      <span style={{ background: `linear-gradient(150deg, ${m.accent}dd, ${m.accent}22 60%, #0a0a0b)` }}>
                        {m.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="collective-name">{m.name}</div>
                  <div className="collective-role">{m.role}</div>
                </>
              );
              return p
                ? <Link className="collective-card collective-link" to={`/person/${p.slug}`} key={m.name}>{inner}</Link>
                : <div className="collective-card" key={m.name}>{inner}</div>;
            })}
          </Reveal>
        </div>
      </section>

      {/* rate card — shown on the homepage */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="kicker">Video production · Transparent rates</div>
                <h2 style={{ marginTop: 12 }}>Premium video, published prices</h2>
              </div>
              <Link className="link" to="/rates">Full rate card <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
          </Reveal>
          <Reveal className="rate-home-grid">
            {rateHighlights.map((r) => (
              <Link className="rate-home-card" to="/rates" key={r.title}>
                <div className="rate-home-price">{r.price}</div>
                <div className="rate-home-title">{r.title}</div>
                <p className="rate-home-note">{r.note}</p>
                <span className="rate-home-more">View scope <ArrowRight style={{ width: 15, height: 15 }} /></span>
              </Link>
            ))}
          </Reveal>
          <Reveal className="rate-home-cta">
            <p>Book a single video or a full annual slate — Kenya-wide, East Africa on quote. One pro-bono community slot reserved each year.</p>
            <Link className="btn btn-gold" to="/contact">Hire Us <ArrowRight style={{ width: 18, height: 18 }} /></Link>
          </Reveal>
        </div>
      </section>

      {/* trusted by */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="trusted-kicker">Trusted by brands, broadcasters &amp; teams</div>
            <div className="trusted-row">
              {clients.map((c) => <span className="trusted-logo" key={c}>{c}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* press quotes */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="kicker">The word on A3</div>
              <h2 style={{ fontSize: 'clamp(22px,3.4vw,34px)' }}>Critics are watching</h2>
            </div>
          </Reveal>
          <Reveal className="press-grid">
            {press.map((p) => (
              <blockquote className="press-card" key={p.source}>
                <Quote className="press-mark" />
                <p>{p.text}</p>
                <cite>— {p.source}</cite>
              </blockquote>
            ))}
          </Reveal>
        </div>
      </section>

      {/* studio stats strip */}
      <section className="strip section">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
              <div className="kicker">Made in Nairobi · Seen everywhere</div>
              <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', maxWidth: 720 }}>
                Film, commercial video &amp; <span className="text-grad">sport coverage</span>
              </h2>
            </div>
            <div className="stats-grid">
              {stats.map((s) => (
                <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* final CTA */}
      <section className="section-tight" style={{ paddingBottom: 'clamp(48px,7vw,88px)' }}>
        <div className="container">
          <Reveal className="cta-band">
            <div className="cta-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <h2>Have a story worth telling?</h2>
            <p>From a 30-second spot to a feature film, A3 is a full-service studio built to make it — script to screen, in-house, in Kenya.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link className="btn btn-gold" to="/contact">Start a project <ArrowRight style={{ width: 18, height: 18 }} /></Link>
              <Link className="btn btn-outline" to="/rates">View rate card</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
