import { useEffect, useMemo, useState } from 'react';
import { byKind, animatedFilms } from '../data/films';
import { filmEpisodes } from '../data/filmMeta';
import type { Film } from '../types';
import { FilmCard } from '../components/FilmCard';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { StatsBar } from '../components/PageExtras';
import { PageHero } from '../components/PageHero';
import { Top10Row } from '../components/Top10Row';

export default function Series() {
  const [trailer, setTrailer] = useState<Film | null>(null);
  const series = byKind('Series');
  const docs = byKind('Documentary');
  const anime = useMemo(() => animatedFilms(), []);

  useEffect(() => {
    document.title = 'Series & Documentaries — A3 Studios';
  }, []);

  const featured = useMemo(() => series[0] ?? docs[0], [series, docs]);
  const top10 = useMemo(() => [...series, ...anime, ...docs], [series, anime, docs]);
  const totalEpisodes = useMemo(
    () => [...series, ...docs].reduce((n, f) => n + filmEpisodes(f).length, 0),
    [series, docs],
  );

  return (
    <>
      {featured && <PageHero film={featured} kicker="A3 Series & Documentaries" onPlay={setTrailer} />}

      <div className="section-tight" style={{ paddingTop: 'clamp(28px,4vw,44px)' }}>
        <Top10Row title="Top 10 series & docs" films={top10} />
      </div>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="kicker">Episodic & Non-fiction</div>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', margin: '10px 0 12px' }}>Series &amp; Documentaries</h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 640, fontSize: 17 }}>
              Stories with room to breathe — multi-part dramas and documentaries that go where the headlines stop.
              Fashion-world intrigue, the music reshaping a continent, and the lives behind the biggest moments.
            </p>
            <StatsBar
              items={[
                { value: `${series.length}`, label: 'Series' },
                { value: `${anime.length}`, label: 'Anime & animation' },
                { value: `${docs.length}`, label: 'Documentaries' },
                { value: `${totalEpisodes}`, label: 'Episodes' },
              ]}
            />
          </Reveal>

          {series.length > 0 && (
            <>
              <div className="section-head" style={{ marginTop: 34 }}><h2>Series</h2></div>
              <Reveal className="grid grid-stagger grid--center" key="series">
                {series.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
              </Reveal>
            </>
          )}

          {anime.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div className="section-head">
                <div>
                  <div className="kicker">A3 Anime & Animation Originals</div>
                  <h2 style={{ marginTop: 10 }}>Anime &amp; animation</h2>
                </div>
              </div>
              <p style={{ color: 'var(--ink-soft)', maxWidth: 640, fontSize: 16, margin: '2px 0 20px' }}>
                Feature-length animated originals and episodic anime — from the runaway comedy <em>Billionaire X</em> to
                Afro-cyberpunk action and family adventures, drawn and finished in the A3 studio.
              </p>
              <Reveal className="grid grid-stagger grid--center" key="anime">
                {anime.map((f) => <FilmCard key={f.slug} film={f} onPlay={setTrailer} />)}
              </Reveal>
            </div>
          )}

          {docs.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div className="section-head"><h2>Documentaries</h2></div>
              <Reveal className="grid grid-stagger grid--center" key="docs">
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
