import { useState } from 'react';
import type { Film } from '../types';
import { POSTER, POSTER_SVG } from '../types';
import { artworkDataUri } from '../lib/artwork';

// Renders a film poster; tries a photo asset first, then cinematic SVG artwork.
export function Poster({ film, className }: { film: Film; className?: string }) {
  const [src, setSrc] = useState(POSTER(film.slug));

  return (
    <img
      className={className ?? 'card-poster'}
      src={src}
      alt={`${film.title} poster`}
      loading="lazy"
      onError={() => {
        setSrc((current) => {
          if (current.endsWith('.webp')) return POSTER_SVG(film.slug);
          if (current.endsWith('.svg')) return artworkDataUri(film, 'poster');
          return current;
        });
      }}
    />
  );
}

export function FallbackPoster({ film, className }: { film: Film; className?: string }) {
  return (
    <img
      className={className ?? 'card-poster'}
      src={artworkDataUri(film, 'poster')}
      alt={`${film.title} poster`}
      loading="lazy"
    />
  );
}
