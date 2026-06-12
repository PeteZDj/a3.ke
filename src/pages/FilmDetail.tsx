import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilm, relatedFilms } from '../data/films';
import type { Film } from '../types';
import { Backdrop } from '../components/Backdrop';
import { FilmRow } from '../components/FilmRow';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { Play, Plus, ArrowRight } from '../components/Icons';

function StatusBadge({ film }: { film: Film }) {
  if (film.status === 'Now Streaming') return <span className="badge streaming"><span className="dot" />Now Streaming</span>;
  if (film.status === 'Coming Soon') return <span className="badge soon">Coming Soon</span>;
  return <span className="badge production">In Production</span>;
}

export default function FilmDetail() {
  const { slug } = useParams();
  const film = slug ? getFilm(slug) : undefined;
  const [trailer, setTrailer] = useState<Film | null>(null);

  useEffect(() => {
    document.title = film ? `${film.title} — A3 Studios` : 'Not found — A3 Studios';
  }, [film]);

  if (!film) {
    return (
      <div className="empty" style={{ paddingTop: 'calc(var(--nav-h) + 120px)' }}>
        <h3>We couldn’t find that title</h3>
        <p style={{ marginBottom: 20 }}>It may have moved or isn’t released yet.</p>
        <Link className="btn btn-gold" to="/films">Browse the catalogue</Link>
      </div>
    );
  }

  const related = relatedFilms(film);

  return (
    <>
      <section className="detail-hero">
        <div className="detail-bg blurred">
          <Backdrop film={film} alt={`${film.title} backdrop`} />
        </div>
        <div className="detail-scrim" />
        <div className="detail-inner">
          <div className="container">
            <div className="detail-layout">
              <div className="detail-main">
                <div style={{ marginBottom: 14 }}><StatusBadge film={film} /></div>
                <div className="kicker" style={{ marginBottom: 12 }}>A3 {film.kind === 'Film' ? 'Original Film' : film.kind}</div>
                <h1>{film.title}</h1>
                <div className="detail-meta">
                  <span className="text-grad" style={{ fontWeight: 700 }}>{film.year}</span>
                  <span className="pip" /> <span>{film.rating}</span>
                  <span className="pip" /> <span>{film.runtime}</span>
                  <span className="pip" /> <span>{film.language}</span>
                </div>
                <div className="detail-genres">
                  {film.genres.map((g) => <span className="badge" key={g}>{g}</span>)}
                </div>
                <p className="detail-synopsis">{film.synopsis}</p>
                <div className="detail-actions">
                  <button className="btn btn-primary" onClick={() => setTrailer(film)}><Play /> Watch Trailer</button>
                  <button className="btn btn-ghost"><Plus /> Add to My List</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-facts section-tight">
        <div className="container">
          <Reveal className="facts-grid">
            <div className="fact">
              <div className="fact-label">Director</div>
              <div className="fact-value">{film.director}</div>
            </div>
            <div className="fact">
              <div className="fact-label">Cast</div>
              <div className="fact-value cast-list">
                {film.cast.map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
            <div className="fact">
              <div className="fact-label">Genres</div>
              <div className="fact-value">{film.genres.join(', ')}</div>
            </div>
            <div className="fact">
              <div className="fact-label">Language</div>
              <div className="fact-value">{film.language}</div>
            </div>
            <div className="fact">
              <div className="fact-label">Release</div>
              <div className="fact-value">{film.status} · {film.year}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-tight" style={{ paddingBottom: 40 }}>
          <FilmRow title="More from A3" films={related} to="/films" onPlay={setTrailer} />
          <div className="container" style={{ marginTop: 8 }}>
            <Link className="section-head link" to="/films">Browse the full catalogue <ArrowRight style={{ width: 16, height: 16 }} /></Link>
          </div>
        </section>
      )}

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
    </>
  );
}
