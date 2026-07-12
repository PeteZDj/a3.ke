import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { Backdrop } from './Backdrop';
import { Play, Info, ChevronLeft, ChevronRight, Star } from './Icons';
import { filmScore } from '../data/filmMeta';

export function Hero({ films, onPlay }: { films: Film[]; onPlay: (f: Film) => void }) {
  const [i, setI] = useState(0);
  const count = films.length;
  const timer = useRef<number | undefined>(undefined);

  const stop = () => { if (timer.current) window.clearInterval(timer.current); };
  const start = () => {
    stop();
    if (count > 1) timer.current = window.setInterval(() => setI((p) => (p + 1) % count), 7000);
  };
  useEffect(() => { start(); return stop; }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

  const go = (dir: -1 | 1) => { setI((p) => (p + dir + count) % count); start(); };
  const jump = (idx: number) => { setI(idx); start(); };

  if (!count) return null;
  const film = films[i];
  const score = filmScore(film);
  const kind = film.ai ? 'AI Original' : film.kind === 'Film' ? 'Original Film' : film.kind;

  return (
    <section className="hero">
      {films.map((f, idx) => (
        <div className={`hero-slide ${idx === i ? 'active' : ''}`} key={f.slug} aria-hidden={idx !== i}>
          <Backdrop film={f} className="hero-img" alt={`${f.title} feature still`} loading={idx === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="hero-scrim" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-inner">
        <div className="container">
          <div className="hero-body" key={film.slug}>
            <div className="hero-kicker-row">
              <span className="kicker hero-kicker">A3 {kind}</span>
              <span className="hero-score" aria-label={`Rated ${score.toFixed(1)} out of 10`}>
                <Star /> <b>{score.toFixed(1)}</b><span className="hero-score-max">/ 10</span>
              </span>
            </div>
            <h1>{film.title}</h1>
            <div className="hero-meta">
              <span className="tag">{film.year}</span>
              <span className="pip" />
              <span>{film.rating}</span>
              <span className="pip" />
              <span>{film.runtime}</span>
              <span className="pip hide-sm" />
              <span className="hide-sm">{film.genres.join(' · ')}</span>
            </div>
            <p className="hero-logline">{film.logline}</p>
            <div className="hero-actions">
              <button className="hero-play" onClick={() => onPlay(film)} aria-label={`Watch the ${film.title} trailer`}>
                <span className="hero-play-btn"><Play /></span>
                <span className="hero-play-label">Watch the Trailer</span>
              </button>
              <Link className="btn btn-gold hero-watchnow" to={`/film/${film.slug}`}>
                <Play /> Watch Now
              </Link>
              <Link className="btn btn-ghost hide-sm" to={`/film/${film.slug}`}>
                <Info /> More Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="hero-controls">
          <div className="container hero-controls-inner">
            <div className="hero-index" role="tablist" aria-label="Featured titles">
              {films.map((f, idx) => (
                <button
                  key={f.slug}
                  className={`hero-num ${idx === i ? 'active' : ''}`}
                  aria-label={`Show ${f.title}`}
                  aria-selected={idx === i}
                  onClick={() => jump(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="hero-arrows">
              <button className="hero-arrow" aria-label="Previous" onClick={() => go(-1)}><ChevronLeft /></button>
              <button className="hero-arrow" aria-label="Next" onClick={() => go(1)}><ChevronRight /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
