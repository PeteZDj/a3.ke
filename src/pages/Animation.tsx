import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { aiFilms } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar, Capabilities } from '../components/PageExtras';
import { Backdrop } from '../components/Backdrop';
import { getServiceBySlug } from '../data/rateCard';
import { Sparkles, Play, Layers, Camera, Film as FilmIcon, ArrowRight } from '../components/Icons';

const animationRates = ['animation', 'ai-commercial']
  .map((slug) => getServiceBySlug(slug))
  .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

export default function Animation() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const films = aiFilms();
  const feature = films.find((f) => f.status === 'Now Streaming') ?? films[0];

  useEffect(() => {
    document.title = 'Animation & AI — A3 Studios';
  }, []);

  return (
    <>
      <section className="ai-hero anim-hero">
        <div className="page-hero-bg">
          {feature && <Backdrop film={feature} alt={`${feature.title} still`} />}
        </div>
        <div className="ai-hero-scrim" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="anim-orbs" aria-hidden="true"><span /><span /><span /></div>
        <div className="container ai-hero-inner">
          <div className="ai-badge-lg"><Sparkles /> Animation & Motion</div>
          <h1>Animation, made in Nairobi</h1>
          <p className="ai-hero-lede">
            2D, 3D, motion graphics and a fast-growing AI-animation practice. From title
            sequences and animated ads to fully generative short films, A3 builds worlds
            you can&rsquo;t shoot with a camera — art-directed frame by frame.
          </p>
          {feature && (
            <div className="hero-actions">
              <button className="hero-play" onClick={() => setTrailer(feature)} aria-label={`Watch ${feature.title}`}>
                <span className="hero-play-btn"><Play /></span>
                <span className="hero-play-label">Watch the reel</span>
              </button>
              <Link className="btn btn-gold" to="/rates">Animation rates <ArrowRight style={{ width: 17, height: 17 }} /></Link>
            </div>
          )}
          <div style={{ marginTop: 30 }}>
            <StatsBar
              items={[
                { value: `${films.length}`, label: 'Animated films' },
                { value: '2D · 3D · AI', label: 'Techniques' },
                { value: 'Frame-by-frame', label: 'Art direction' },
                { value: '100%', label: 'Made in Kenya' },
              ]}
            />
          </div>
        </div>
      </section>

      <Capabilities
        kicker="What we animate"
        title="Every style, one studio"
        items={[
          { icon: Layers, title: '2D & motion graphics', copy: 'Explainers, title sequences, animated logos and social ads — crisp, on-brand and built to move.' },
          { icon: Camera, title: '3D & CG', copy: 'Product visualisation, environments and character work rendered with a cinematic eye.' },
          { icon: Sparkles, title: 'AI animation', copy: 'Generative shorts and campaigns from the A3 AI Lab — new worlds at a fraction of the cost.' },
          { icon: FilmIcon, title: 'Hybrid films', copy: 'We blend live action, animation and AI into one seamless piece when the story calls for it.' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 18 }}>
            <div>
              <div className="kicker">The showreel</div>
              <h2 style={{ marginTop: 10 }}>Animated &amp; AI originals</h2>
            </div>
            <Link className="link" to="/ai-films">All AI Originals <ArrowRight style={{ width: 16, height: 16 }} /></Link>
          </div>
          <Reveal className="grid grid-stagger">
            {films.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
          </Reveal>
        </div>
      </section>

      {/* animation & AI rates teaser */}
      <section className="section-tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 18 }}>
            <div>
              <div className="kicker">Hire the animation team</div>
              <h2 style={{ marginTop: 10 }}>Animation &amp; AI rates</h2>
            </div>
            <Link className="link" to="/rates">Full rate card <ArrowRight style={{ width: 16, height: 16 }} /></Link>
          </div>
          <div className="anim-rates">
            {animationRates.map((svc) => (
              <Link key={svc.id} to={`/rates/${svc.slug}`} className="anim-rate-card" style={{ ['--accent' as any]: svc.accent }}>
                <div className="anim-rate-top">
                  <h3>{svc.title}</h3>
                  <span className="anim-rate-price">{svc.priceLabel}</span>
                </div>
                <p>{svc.description}</p>
                <span className="anim-rate-more">View details <ArrowRight style={{ width: 15, height: 15 }} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Reveal className="ai-cta">
            <Sparkles />
            <h2>Have something to animate?</h2>
            <p>From a 15-second animated ad to a fully generative short film, the A3 animation team can make it.</p>
            <Link className="btn btn-gold" to="/contact">Start an animation project</Link>
          </Reveal>
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
