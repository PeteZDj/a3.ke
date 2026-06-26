import { useState } from 'react';
import type { Film } from '../types';
import { BACKDROP, BACKDROP_SVG, POSTER, POSTER_SVG } from '../types';
import { artworkDataUri } from '../lib/artwork';

// Landscape backdrop. Tries photo assets first, then cinematic SVG artwork.
export function Backdrop({
  film,
  className,
  alt,
}: {
  film: Film;
  className?: string;
  alt?: string;
}) {
  const [src, setSrc] = useState(BACKDROP(film.slug));

  return (
    <img
      className={className}
      src={src}
      alt={alt ?? `${film.title} still`}
      onError={() => {
        setSrc((current) => {
          if (current.endsWith('.webp') && current.includes('/images/backdrops/')) {
            return BACKDROP_SVG(film.slug);
          }
          if (current.endsWith('.svg') && current.includes('/images/backdrops/')) {
            return POSTER(film.slug);
          }
          if (current.endsWith('.webp') && current.includes('/images/posters/')) {
            return POSTER_SVG(film.slug);
          }
          if (current.endsWith('.svg') && current.includes('/images/posters/')) {
            return artworkDataUri(film, 'backdrop');
          }
          return current;
        });
      }}
    />
  );
}
