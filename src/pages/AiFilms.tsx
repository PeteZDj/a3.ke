import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { aiFilms } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar, Capabilities } from '../components/PageExtras';
import { Backdrop } from '../components/Backdrop';
import { Sparkles, Play, Info, Layers, Camera, Film as FilmIcon } from '../components/Icons';

export default function AiFilms() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const films = aiFilms();
  const feature = films.find((f) => f.status === 'Now Streaming') ?? films[0];

  useEffect(() => {
    document.title = 'AI Originals — A3 Studios';
  }, []);

  return (
    <>
      <section className="ai-hero">
        <div className="page-hero-bg">
          {feature && <Backdrop film={feature} alt={`${feature.title} still`} />}
        </div>
        <div className="ai-hero-scrim" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="container ai-hero-inner">
          <div className="ai-badge-lg"><Sparkles /> A3 AI Lab</div>
          <h1>AI Originals</h1>
          <p className="ai-hero-lede">
            A new frontier for African storytelling. Our AI Lab uses generative tools to
            imagine films we couldn't make any other way — Afrofuturist worlds, animated
            myths and speculative documentaries, art-directed and finished frame-by-frame in Nairobi.
          </p>
          {feature && (
            <div className="hero-actions">
              <button className="btn btn-gold" onClick={() => setTrailer(feature)}><Play /> Watch a first look</button>
              <Link className="btn btn-ghost" to={`/film/${feature.slug}`}><Info /> {feature.title}</Link>
            </div>
          )}
          <div style={{ marginTop: 30 }}>
            <StatsBar
              items={[
                { value: `${films.length}`, label: 'AI Originals' },
                { value: '100%', label: 'Made in Nairobi' },
                { value: 'Frame-by-frame', label: 'Art direction' },
                { value: 'New', label: 'And growing' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 'clamp(30px,4vw,46px)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 18 }}>
            <div>
              <div className="kicker">The collection</div>
              <h2 style={{ marginTop: 10 }}>Generative films from the A3 AI Lab</h2>
            </div>
          </div>
          <Reveal className="grid grid-stagger">
            {films.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
          </Reveal>
        </div>
      </section>

      <Capabilities
        kicker="How we make them"
        title="Human-directed, AI-assisted"
        items={[
          { icon: Sparkles, title: 'Generative imagery', copy: 'Every frame is generated with the latest image and video models, then curated by our directors for tone and truth.' },
          { icon: Layers, title: 'Art direction first', copy: 'We lock a look — palette, world, character — before a single frame is made, so a whole film stays visually cohesive.' },
          { icon: Camera, title: 'Cinematic grammar', copy: 'Shot design, pacing and sound are handled the way we cut any A3 film. The tools are new; the craft isn\'t.' },
          { icon: FilmIcon, title: 'Kenyan stories', copy: 'AI lets us build worlds — floating Mombasa, neon savannahs — that put African imagination centre-frame.' },
        ]}
      />

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Reveal className="ai-cta">
            <Sparkles />
            <h2>Have an idea for an AI Original?</h2>
            <p>We collaborate with writers, artists and brands on generative films and campaigns.</p>
            <Link className="btn btn-gold" to="/contact">Pitch the A3 AI Lab</Link>
          </Reveal>
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
