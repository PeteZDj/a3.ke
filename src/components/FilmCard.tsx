import { Link, useNavigate } from 'react-router-dom';
import type { Film } from '../types';
import { Poster } from './Poster';
import { Play, Info, Plus } from './Icons';

function StatusFlag({ film }: { film: Film }) {
  if (film.status === 'Now Streaming')
    return <span className="badge streaming card-flag"><span className="dot" />New</span>;
  if (film.status === 'Coming Soon')
    return <span className="badge soon card-flag">Soon</span>;
  return <span className="badge production card-flag">Filming</span>;
}

export function FilmCard({ film, onPlay }: { film: Film; onPlay?: (f: Film) => void }) {
  const navigate = useNavigate();
  return (
    <Link to={`/film/${film.slug}`} className="card" aria-label={film.title}>
      <div className="card-poster-wrap">
        <Poster film={film} />
        <span className="card-rating">{film.rating}</span>
        <StatusFlag film={film} />
        <div className="card-hover">
          <div className="card-hover-actions">
            <button
              className="co-btn play"
              aria-label={`Watch ${film.title} trailer`}
              onClick={(e) => { e.preventDefault(); onPlay?.(film); }}
            >
              <Play />
            </button>
            <button
              className="co-btn"
              aria-label={`More about ${film.title}`}
              onClick={(e) => { e.preventDefault(); navigate(`/film/${film.slug}`); }}
            >
              <Info />
            </button>
            <button className="co-btn" aria-label="Add to my list" onClick={(e) => e.preventDefault()}>
              <Plus />
            </button>
          </div>
        </div>
      </div>

      <div className="card-info">
        <div className="card-info-title">{film.title}</div>
        <div className="card-info-meta">
          <span className="tag">{film.year}</span>
          <span className="pip" />
          <span>{film.rating}</span>
          <span className="pip" />
          <span>{film.runtime}</span>
        </div>
        <div className="card-info-genres">{film.genres.slice(0, 3).join(' · ')}</div>
        <div className="card-info-dir"><span>Dir.</span> {film.director}</div>
        <p className="card-info-logline">{film.logline}</p>
      </div>
    </Link>
  );
}
