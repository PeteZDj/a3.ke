import { useEffect, useState } from 'react';
import { byKind } from '../data/films';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';

export default function Series() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const series = byKind('Series');
  const docs = byKind('Documentary');

  useEffect(() => {
    document.title = 'Series & Documentaries — A3 Studios';
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">Episodic & Non-fiction</div>
          <h1>Series &amp; Documentaries</h1>
          <p>Stories with room to breathe — multi-part dramas and documentaries that go where the headlines stop.</p>
        </div>
      </header>

      <section className="section-tight">
        <div className="container">
          {series.length > 0 && (
            <>
              <div className="section-head"><h2>Series</h2></div>
              <Reveal className="grid" key="series">
                {series.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
              </Reveal>
            </>
          )}

          {docs.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div className="section-head"><h2>Documentaries</h2></div>
              <Reveal className="grid" key="docs">
                {docs.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
