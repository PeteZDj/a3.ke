import { useEffect, useMemo, useState } from 'react';
import { byKind, allGenres } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar } from '../components/PageExtras';
import { PageHero } from '../components/PageHero';
import { Top10Row } from '../components/Top10Row';
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
  const streamingCount = useMemo(() => allFilms.filter((f) => f.status === 'Now Streaming').length, [allFilms]);
  const upcomingCount = useMemo(() => allFilms.filter((f) => f.status !== 'Now Streaming').length, [allFilms]);
  const featured = useMemo(() => allFilms.find((f) => f.featured) ?? allFilms[0], [allFilms]);
  const top10 = useMemo(
    () => [...allFilms.filter((f) => f.status === 'Now Streaming'), ...allFilms.filter((f) => f.status !== 'Now Streaming')],
    [allFilms],
  );

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
      {featured && <PageHero film={featured} kicker="A3 Original Films" onPlay={setTrailer} />}

      <div className="section-tight" style={{ paddingTop: 'clamp(28px,4vw,44px)' }}>
        <Top10Row title="Top 10 films this week" films={top10} />
      </div>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="kicker">The A3 Catalogue</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', margin: '10px 0 12px' }}>Every story we tell</h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 640, fontSize: 17 }}>
              Bold originals, binge-worthy series and unflinching documentaries — all developed, shot and finished in
              Kenya, for the world. Rich neo-noir, sweeping survival epics, coming-of-age drama and Afrofuturist adventure.
            </p>
            <StatsBar
              items={[
                { value: `${allFilms.length}`, label: 'Original films' },
                { value: `${streamingCount}`, label: 'Now streaming' },
                { value: `${upcomingCount}`, label: 'Coming soon' },
                { value: `${genres.length - 1}`, label: 'Genres' },
              ]}
            />
          </Reveal>

          <div className="filters" style={{ marginTop: 30 }}>
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
            <Reveal className="grid grid-stagger">
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
