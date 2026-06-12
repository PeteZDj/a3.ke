import { useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../types';
import { FilmCard } from './FilmCard';
import { ChevronLeft, ChevronRight, ArrowRight } from './Icons';

export function FilmRow({
  title,
  films,
  to,
  onPlay,
}: {
  title: string;
  films: Film[];
  to?: string;
  onPlay?: (f: Film) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  if (!films.length) return null;

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 900), behavior: 'smooth' });
  };

  return (
    <div className="row">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          {to && (
            <Link className="link" to={to}>
              View all <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          )}
        </div>
      </div>
      <button className="row-arrow left" aria-label="Scroll left" onClick={() => scroll(-1)}>
        <ChevronLeft />
      </button>
      <div className="row-scroller" ref={ref}>
        {films.map((f) => (
          <FilmCard key={f.slug} film={f} onPlay={onPlay} />
        ))}
      </div>
      <button className="row-arrow right" aria-label="Scroll right" onClick={() => scroll(1)}>
        <ChevronRight />
      </button>
    </div>
  );
}
