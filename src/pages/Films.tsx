import { useEffect, useMemo, useState } from 'react';
import { byKind, allGenres } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { Search } from '../components/Icons';

const statusFilters = ['All', 'Now Streaming', 'Coming Soon', 'In Production'] as const;

export default function Films() {
  const [status, setStatus] = useState<string>('All');
  const [genre, setGenre] = useState<string>('All');
  const [q, setQ] = useState('');
  const [trailer, setTrailer] = useState<Film | null>(null);

  useEffect(() => {
    document.title = 'Films — A3 Studios';
  }, []);

  const allFilms = useMemo(() => byKind('Film'), []);
  const genres = useMemo(() => ['All', ...allGenres()], []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allFilms.filter((f) => {
      if (status !== 'All' && f.status !== status) return false;
      if (genre !== 'All' && !f.genres.includes(genre)) return false;
      if (needle && !(`${f.title} ${f.genres.join(' ')} ${f.director}`.toLowerCase().includes(needle))) return false;
      return true;
    });
  }, [allFilms, status, genre, q]);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">The A3 Catalogue</div>
          <h1>Every story we tell</h1>
          <p>Bold originals, binge-worthy series and unflinching documentaries — all made in Kenya, for the world.</p>
        </div>
      </header>

      <section className="section-tight">
        <div className="container">
          <div className="filters">
            {statusFilters.map((s) => (
              <button key={s} className={`chip ${status === s ? 'active' : ''}`} onClick={() => setStatus(s)}>
                {s}
              </button>
            ))}
            <div className="search-box">
              <Search />
              <input
                type="search"
                placeholder="Search titles, genres…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search films"
              />
            </div>
          </div>

          <div className="filters" style={{ marginTop: 10 }}>
            {genres.map((g) => (
              <button key={g} className={`chip ${genre === g ? 'active' : ''}`} onClick={() => setGenre(g)}>
                {g}
              </button>
            ))}
          </div>

          {results.length ? (
            <Reveal className="grid">
              {results.map((f) => (
                <FilmCard key={f.slug} film={f} onPlay={setTrailer} />
              ))}
            </Reveal>
          ) : (
            <div className="empty">
              <h3>No titles match that yet</h3>
              <p>Try a different genre or clear your search.</p>
            </div>
          )}
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
