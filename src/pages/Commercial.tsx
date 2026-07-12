import { useEffect, useMemo, useState } from 'react';
import { byKind, allGenres } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar, Capabilities } from '../components/PageExtras';
import { Search, Clapper, Camera, Layers, Volume } from '../components/Icons';

export default function Commercial() {
  const [genre, setGenre] = useState('All');
  const [q, setQ] = useState('');
  const [trailer, setTrailer] = useState<Film | null>(null);
  const catalogue = byKind('Commercial');

  useEffect(() => {
    document.title = 'Commercial & Video — A3 Studios';
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
          <div className="kicker">Brands · NGOs · Events</div>
          <h1>Commercial &amp; video</h1>
          <p>Launch films, corporate stories, music videos and social suites — shot and finished in Nairobi for the continent’s biggest brands, broadcasters and non-profits. Fast, cinematic and always on-message.</p>
          <StatsBar
            items={[
              { value: `${catalogue.length}+`, label: 'Campaigns delivered' },
              { value: '48h', label: 'Fastest turnaround' },
              { value: 'Multi', label: 'Format delivery' },
              { value: 'In-house', label: 'Shoot & post' },
            ]}
          />
        </div>
      </header>

      <Capabilities
        kicker="What we produce"
        title="From 30-second spot to brand documentary"
        items={[
          { icon: Clapper, title: 'Launch & brand films', copy: 'Hero campaigns with drone, product hero shots and street energy — 60s hero plus social cutdowns.' },
          { icon: Camera, title: 'Documentary-style', copy: 'Founder and impact stories shot vérité — real people, real places, cinematic finish.' },
          { icon: Volume, title: 'Music videos', copy: 'Performance and narrative promos cut to the track, with grade and VFX in-house.' },
          { icon: Layers, title: 'Social suites & cutdowns', copy: 'Vertical edits, 30s/15s cutdowns and stills — one shoot, every channel.' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 16 }}><h2>Selected work</h2></div>
          <div className="filters">
            <div className="search-box" style={{ flex: 1, maxWidth: 420 }}>
              <Search />
              <input type="search" placeholder="Search campaigns…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search commercial work" />
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
            <div className="empty"><h3>No campaigns match</h3><p>Try another genre or clear your search.</p></div>
          )}
        </div>
      </section>
      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
