import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { Backdrop } from './Backdrop';
import { Play, Info } from './Icons';

/** Full-bleed featured banner for listing pages (Films, Series). */
export function PageHero({
  film,
  kicker,
  onPlay,
}: {
  film: Film;
  kicker: string;
  onPlay: (f: Film) => void;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <Backdrop film={film} alt={`${film.title} feature still`} />
      </div>
      <div className="page-hero-scrim" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="container page-hero-inner">
        <div className="kicker">{kicker}</div>
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
        <p className="page-hero-logline">{film.logline}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onPlay(film)}>
            <Play /> Watch Trailer
          </button>
          <Link className="btn btn-ghost" to={`/film/${film.slug}`}>
            <Info /> More Info
          </Link>
        </div>
      </div>
    </section>
  );
}
