import { useState } from 'react';
import type { Film } from '../types';
import { POSTER } from '../types';

// Renders a film poster; if the image is missing/broken it falls back to a
// tasteful gradient panel with the title, so the catalogue always looks intentional.
export function Poster({ film, className }: { film: Film; className?: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) return <FallbackPoster film={film} className={className} />;
  return (
    <img
      className={className ?? 'card-poster'}
      src={POSTER(film.slug)}
      alt={`${film.title} poster`}
      loading="lazy"
      onError={() => setBroken(true)}
    />
  );
}

export function FallbackPoster({ film, className }: { film: Film; className?: string }) {
  const c = film.accent;
  return (
    <div
      className={className ? `poster-fallback ${className}` : 'poster-fallback'}
      style={{
        background: `linear-gradient(155deg, ${c}cc 0%, ${c}55 42%, #0a0a0b 100%)`,
      }}
    >
      <div className="pf-kind">{film.kind}</div>
      <div className="pf-title">{film.title}</div>
    </div>
  );
}
