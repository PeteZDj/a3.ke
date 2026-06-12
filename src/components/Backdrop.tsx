import { useState } from 'react';
import type { Film } from '../types';
import { BACKDROP, POSTER } from '../types';

// Landscape backdrop. Tries the dedicated backdrop first, then the film's poster
// art (all art is 3:2 so it works as a backdrop too), then a cinematic gradient.
export function Backdrop({
  film,
  className,
  alt,
}: {
  film: Film;
  className?: string;
  alt?: string;
}) {
  const [step, setStep] = useState<0 | 1 | 2>(0);

  if (step === 2) {
    const c = film.accent;
    return (
      <div
        className="hero-fallback"
        style={{
          background: `radial-gradient(120% 130% at 18% 8%, ${c}aa, transparent 55%), linear-gradient(120deg, ${c}33, #08080a 70%)`,
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      className={className}
      src={step === 0 ? BACKDROP(film.slug) : POSTER(film.slug)}
      alt={alt ?? `${film.title} still`}
      onError={() => setStep((s) => (s === 0 ? 1 : 2))}
    />
  );
}
