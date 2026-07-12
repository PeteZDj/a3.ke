import { useEffect, useMemo, useState } from 'react';
import { byKind, allGenres } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar, Capabilities } from '../components/PageExtras';
import { Search, Camera, Play, Award, Star } from '../components/Icons';

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
          <p>Match coverage, tournament recaps, athlete films and live vision — cinematic crew on the sideline. From HSBC Sevens to the KPL, we bring feature-film production values to the pitch, the track and the ring.</p>
          <StatsBar
            items={[
              { value: `${catalogue.length}`, label: 'Productions' },
              { value: '6-cam', label: 'Match rigs' },
              { value: '4K', label: 'Broadcast vision' },
              { value: 'Same-day', label: 'Highlight turnaround' },
            ]}
          />
        </div>
      </header>

      <Capabilities
        kicker="What we bring to the sideline"
        title="Broadcast-grade, cinematic sport"
        items={[
          { icon: Camera, title: 'Multi-camera coverage', copy: 'Up to six-camera match rigs with slo-mo, tunnel cams and finish-line super-slo for track and field.' },
          { icon: Play, title: 'Live vision & replay', copy: 'Live gallery, instant replay and clean/dirty feeds ready for broadcast or streaming partners.' },
          { icon: Star, title: 'Athlete & club films', copy: 'Season films, player profiles and narrated recaps that build the story around the scoreline.' },
          { icon: Award, title: 'Same-day highlights', copy: 'On-site ingest and overnight edits deliver highlight packages and social cutdowns before sunrise.' },
        ]}
      />

      <section className="section-tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 16 }}><h2>The coverage reel</h2></div>
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
