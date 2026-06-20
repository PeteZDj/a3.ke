import { useState } from 'react';
import type { Film } from '../types';
import { POSTER } from '../types';
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
        setSrc((current) => (current.endsWith('.jpg') ? artworkDataUri(film, 'poster') : current));
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
