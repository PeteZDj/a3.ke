import { useEffect, useRef, useState } from 'react';
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
  const [overflowing, setOverflowing] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 8);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener('resize', check);
    return () => { ro.disconnect(); window.removeEventListener('resize', check); };
  }, [films]);

  if (!films.length) return null;

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 900), behavior: 'smooth' });
  };

  return (
    <div className="row">
      {(title || to) && (
        <div className="container">
          <div className="section-head">
            {title ? <h2>{title}</h2> : <span />}
            {to && (
              <Link className="link" to={to}>
                View all <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            )}
          </div>
        </div>
      )}
      {overflowing && (
        <button className="row-arrow left" aria-label="Scroll left" onClick={() => scroll(-1)}>
          <ChevronLeft />
        </button>
      )}
      <div className={`row-scroller ${overflowing ? '' : 'row-scroller--center'}`} ref={ref}>
        {films.map((f) => (
          <FilmCard key={f.slug} film={f} onPlay={onPlay} />
        ))}
      </div>
      {overflowing && (
        <button className="row-arrow right" aria-label="Scroll right" onClick={() => scroll(1)}>
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
