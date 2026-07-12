import { useRef } from 'react';
import type { Film } from '../types';
import { Link } from 'react-router-dom';
import { Poster } from './Poster';
import { ChevronLeft, ChevronRight } from './Icons';

/** Netflix-style "Top 10" — big outlined rank numbers beside portrait posters. */
export function Top10Row({ title, films }: { title: string; films: Film[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const top = films.slice(0, 10);
  if (!top.length) return null;

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 900), behavior: 'smooth' });
  };

  return (
    <div className="row top10">
      <div className="container">
        <div className="section-head"><h2>{title}</h2></div>
      </div>
      <button className="row-arrow left" aria-label="Scroll left" onClick={() => scroll(-1)}>
        <ChevronLeft />
      </button>
      <div className="row-scroller top10-scroller" ref={ref}>
        {top.map((f, i) => (
          <Link to={`/film/${f.slug}`} className="top10-item" key={f.slug} aria-label={`#${i + 1} ${f.title}`}>
            <div className="top10-rank">
              <span className="top10-num">{i + 1}</span>
              <div className="top10-poster">
                <Poster film={f} />
                <span className="card-rating">{f.rating}</span>
              </div>
            </div>
            <div className="top10-info">
              <div className="top10-title">{f.title}</div>
              <div className="top10-meta">
                <span>{f.year}</span>
                <span className="pip" />
                <span>{f.runtime}</span>
              </div>
              <div className="top10-genres">{f.genres.slice(0, 2).join(' · ')}</div>
            </div>
          </Link>
        ))}
      </div>
      <button className="row-arrow right" aria-label="Scroll right" onClick={() => scroll(1)}>
        <ChevronRight />
      </button>
    </div>
  );
}
