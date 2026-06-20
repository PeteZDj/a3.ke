import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { featuredFilms, byStatus, byKind, films } from '../data/films';
import { Hero } from '../components/Hero';
import { FilmRow } from '../components/FilmRow';
import { Reveal } from '../components/Reveal';
import { Backdrop } from '../components/Backdrop';
import { TrailerModal } from '../components/TrailerModal';
import { Laurels } from '../components/Laurels';
import { useCountUp } from '../hooks/useCountUp';
import { Play, ArrowRight } from '../components/Icons';

const stats = [
  { num: 24, suffix: '+', label: 'Projects delivered' },
  { num: 38, suffix: '', label: 'Festival selections' },
  { num: 9, suffix: '', label: 'Awards & nominations' },
  { num: 24, suffix: '', label: 'Countries streaming A3' },
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

      <div className="section-tight" style={{ paddingTop: 'clamp(24px,4vw,44px)' }}>
        <FilmRow title="Now Streaming" films={byStatus('Now Streaming').filter((f) => f.kind === 'Film' || f.kind === 'Series' || f.kind === 'Documentary')} to="/films" onPlay={setTrailer} />
        <FilmRow title="A3 Originals" films={byKind('Film')} to="/films" onPlay={setTrailer} />
        <FilmRow title="Series & Documentaries" films={[...byKind('Series'), ...byKind('Documentary')]} to="/series" onPlay={setTrailer} />
        <FilmRow title="Commercial & Video" films={byKind('Commercial')} to="/commercial" onPlay={setTrailer} />
        <FilmRow title="Sport Coverage" films={byKind('Sport')} to="/sport" onPlay={setTrailer} />
      </div>

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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FilmRow title="Coming Soon" films={[...byStatus('Coming Soon'), ...byStatus('In Production')]} to="/films" onPlay={setTrailer} />

      {/* rate card teaser */}
      <section className="section-tight">
        <div className="container">
          <Reveal className="rate-teaser">
            <div>
              <div className="kicker">Video production</div>
              <h2 style={{ marginTop: 12, marginBottom: 10 }}>Premium video, transparent rates</h2>
              <p style={{ color: 'var(--ink-soft)', maxWidth: 520, margin: 0 }}>
                Commercials $1,218.75 · music videos $487.50 · weddings $390 · DP / film $1,950.
                Each service has its own page with scope and deliverables.
              </p>
            </div>
            <Link className="btn btn-gold" to="/rates">
              Hire Us <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
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

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
