import { Link, useNavigate } from 'react-router-dom';
import type { Film } from '../types';
import { Poster } from './Poster';
import { Play, Info, Plus } from './Icons';

function StatusFlag({ film }: { film: Film }) {
  if (film.status === 'Now Streaming')
    return <span className="badge streaming card-flag"><span className="dot" />New</span>;
  if (film.status === 'Coming Soon')
    return <span className="badge soon card-flag">Coming Soon</span>;
  return <span className="badge production card-flag">In Production</span>;
}

export function FilmCard({ film, onPlay }: { film: Film; onPlay?: (f: Film) => void }) {
  const navigate = useNavigate();
  return (
    <Link to={`/film/${film.slug}`} className="card" aria-label={film.title}>
      <Poster film={film} />
      <StatusFlag film={film} />
      <span className="card-play" aria-hidden="true"><Play /></span>
      <div className="card-body">
        <div className="cb-title">{film.title}</div>
        <div className="cb-info">
          <div className="cb-meta">
            <span className="tag">{film.year}</span>
            <span>{film.rating}</span>
            <span>{film.genres.slice(0, 2).join(' · ')}</span>
          </div>
          <div className="co-actions">
          <button
            className="co-btn play"
            aria-label={`Watch ${film.title} trailer`}
            onClick={(e) => {
              e.preventDefault();
              onPlay?.(film);
            }}
          >
            <Play />
          </button>
          <button
            className="co-btn"
            aria-label={`More about ${film.title}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/film/${film.slug}`);
            }}
          >
            <Info />
          </button>
            <button className="co-btn" aria-label="Add to list" onClick={(e) => e.preventDefault()}>
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
