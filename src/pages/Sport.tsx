import { useEffect, useMemo, useState } from 'react';
import { byKind, allGenres } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { Search } from '../components/Icons';

export default function Sport() {
  const [genre, setGenre] = useState('All');
  const [q, setQ] = useState('');
  const [trailer, setTrailer] = useState<Film | null>(null);
  const catalogue = byKind('Sport');

  useEffect(() => {
    document.title = 'Sport Coverage — A3 Studios';
  }, []);

  const genres = useMemo(
    () => ['All', ...allGenres().filter((g) => catalogue.some((f) => f.genres.includes(g)))],
    [catalogue],
  );

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return catalogue.filter((f) => {
      if (genre !== 'All' && !f.genres.includes(genre)) return false;
      if (needle && !(`${f.title} ${f.genres.join(' ')} ${f.director}`.toLowerCase().includes(needle))) return false;
      return true;
    });
  }, [catalogue, genre, q]);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">Live · Broadcast · Highlights</div>
          <h1>Sport coverage</h1>
          <p>Match coverage, tournament recaps, athlete films and live vision — cinematic crew on the sideline.</p>
        </div>
      </header>
      <section className="section-tight">
        <div className="container">
          <div className="filters">
            <div className="search-box" style={{ flex: 1, maxWidth: 420 }}>
              <Search />
              <input type="search" placeholder="Search sports, leagues…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search sport coverage" />
            </div>
          </div>
          <div className="filters" style={{ marginTop: 10 }}>
            {genres.map((g) => (
              <button key={g} className={`chip ${genre === g ? 'active' : ''}`} onClick={() => setGenre(g)}>{g}</button>
            ))}
          </div>
          {results.length ? (
            <Reveal className="grid">{results.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}</Reveal>
          ) : (
            <div className="empty"><h3>No coverage matches</h3><p>Try another sport or clear your search.</p></div>
          )}
        </div>
      </section>
      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
