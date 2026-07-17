import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Film } from '../types';
import { Poster } from './Poster';
import { Play, Info, Plus, Check, Sparkles } from './Icons';
import { inMyList, toggleMyList } from '../lib/mylist';

function StatusFlag({ film }: { film: Film }) {
  if (film.status === 'Now Streaming')
    return <span className="badge streaming card-flag"><span className="dot" />New</span>;
  if (film.status === 'Coming Soon')
    return <span className="badge soon card-flag">Soon</span>;
  return <span className="badge production card-flag">Filming</span>;
}

export function FilmCard({ film, onPlay }: { film: Film; onPlay?: (f: Film) => void }) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => inMyList(film.slug));
  return (
    <Link to={`/film/${film.slug}`} className="card" aria-label={film.title}>
      <div className="card-poster-wrap">
        <Poster film={film} />
        <span className="card-rating">{film.rating}</span>
        <StatusFlag film={film} />
        {film.ai && <span className="card-ai"><Sparkles /> AI</span>}

        {/* Netflix-style expanded preview shown on hover */}
        <div className="card-preview">
          <div className="card-preview-media">
            <Poster film={film} className="card-preview-img" />
            <span className="card-preview-trailer"><Play /> Trailer</span>
          </div>
          <div className="card-preview-body">
            <div className="card-preview-actions">
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
              <button
                className={`co-btn${saved ? ' saved' : ''}`}
                aria-label={saved ? `Remove ${film.title} from my list` : `Add ${film.title} to my list`}
                aria-pressed={saved}
                onClick={(e) => { e.preventDefault(); setSaved(toggleMyList(film.slug)); }}
              >
                {saved ? <Check /> : <Plus />}
              </button>
            </div>
            <div className="card-preview-title">{film.title}</div>
            <div className="card-preview-meta">
              <span className="tag">{film.year}</span>
              <span className="pip" />
              <span>{film.rating}</span>
              <span className="pip" />
              <span>{film.runtime}</span>
              <span className="pip" />
              <span className="card-hd">HD</span>
            </div>
            <div className="card-preview-genres">
              {film.genres.slice(0, 3).map((g) => (
                <span className="card-chip" key={g}>{g}</span>
              ))}
            </div>
            <p className="card-preview-logline">{film.logline}</p>
            <div className="card-preview-dir"><span>Dir.</span> {film.director}</div>
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
