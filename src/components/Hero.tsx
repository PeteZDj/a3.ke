import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { Backdrop } from './Backdrop';
import { Play, Info } from './Icons';

export function Hero({ films, onPlay }: { films: Film[]; onPlay: (f: Film) => void }) {
  const [i, setI] = useState(0);
  const count = films.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count]);

  if (!count) return null;
  const film = films[i];

  return (
    <section className="hero">
      {films.map((f, idx) => (
        <div className={`hero-slide ${idx === i ? 'active' : ''}`} key={f.slug} aria-hidden={idx !== i}>
          <Backdrop film={f} className="hero-img" alt={`${f.title} feature still`} />
        </div>
      ))}
      <div className="hero-scrim" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-inner">
        <div className="container">
          <div className="hero-body">
            <div className="kicker hero-kicker">A3 {film.kind === 'Film' ? 'Original Film' : film.kind}</div>
            <h1>{film.title}</h1>
            <div className="hero-meta">
              <span className="tag">{film.year}</span>
              <span className="pip" />
              <span>{film.rating}</span>
              <span className="pip" />
              <span>{film.runtime}</span>
              <span className="pip" />
              <span>{film.genres.join(' · ')}</span>
            </div>
            <p className="hero-logline">{film.logline}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onPlay(film)}>
                <Play /> Watch Trailer
              </button>
              <Link className="btn btn-ghost" to={`/film/${film.slug}`}>
                <Info /> More Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="hero-dots">
          {films.map((f, idx) => (
            <button
              key={f.slug}
              className={`hero-dot ${idx === i ? 'active' : ''}`}
              aria-label={`Show ${f.title}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      )}

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
