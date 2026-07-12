import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilm, relatedFilms } from '../data/films';
import { filmCrew, filmDetails, filmEpisodes } from '../data/filmMeta';
import type { Film } from '../types';
import { Backdrop } from '../components/Backdrop';
import { FilmRow } from '../components/FilmRow';
import { TrailerModal } from '../components/TrailerModal';
import { Reveal } from '../components/Reveal';
import { Laurels } from '../components/Laurels';
import { Play, Plus, ArrowRight, Quote, Calendar, Globe, Volume, Camera, Pin, Ticket, Award } from '../components/Icons';

function StatusBadge({ film }: { film: Film }) {
  if (film.status === 'Now Streaming') return <span className="badge streaming"><span className="dot" />Now Streaming</span>;
  if (film.status === 'Coming Soon') return <span className="badge soon">Coming Soon</span>;
  return <span className="badge production">In Production</span>;
}

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0]).join('').toUpperCase();
}
function hue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}
function Avatar({ name }: { name: string }) {
  const h = hue(name);
  return (
    <span
      className="person-avatar"
      style={{ background: `linear-gradient(150deg, hsl(${h} 60% 42%), hsl(${(h + 40) % 360} 55% 22%))` }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}

export default function FilmDetail() {
  const { slug } = useParams();
  const film = slug ? getFilm(slug) : undefined;
  const [trailer, setTrailer] = useState<Film | null>(null);

  useEffect(() => {
    document.title = film ? `${film.title} — A3 Studios` : 'Not found — A3 Studios';
    window.scrollTo(0, 0);
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
  const crew = filmCrew(film);
  const details = filmDetails(film);
  const episodes = filmEpisodes(film);
  const kindLabel = film.kind === 'Film' ? 'Original Film' : film.kind;

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
                <div className="kicker" style={{ marginBottom: 12 }}>A3 {kindLabel}</div>
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
                <p className="detail-synopsis">{film.logline}</p>
                <div className="detail-actions">
                  <button className="btn btn-primary" onClick={() => setTrailer(film)}><Play /> Watch Trailer</button>
                  <button className="btn btn-ghost"><Plus /> Add to My List</button>
                </div>
                <div className="fd-credits-line">
                  <span><strong>Directed by</strong> {film.director}</span>
                  <span className="pip" />
                  <span><strong>Starring</strong> {film.cast.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {details.awards.length > 0 && (
        <div className="laurels-band">
          <div className="container">
            <span className="laurels-kicker">Festival honours &amp; selections</span>
            <Laurels items={details.awards.map((a) => ({ top: a.label, bottom: a.event }))} />
          </div>
        </div>
      )}

      <section className="section">
        <div className="container">
          <div className="fd-layout">
            {/* main column */}
            <div>
              <Reveal>
                <div className="kicker">The story</div>
                <h2 className="fd-h2">About {film.title}</h2>
                <p className="fd-prose">{film.synopsis}</p>
                <p className="fd-prose fd-prose-soft">{details.productionNote}</p>

                {film.themes || details.themes.length ? (
                  <div className="fd-themes">
                    {details.themes.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                ) : null}
              </Reveal>

              {details.quote && (
                <Reveal>
                  <blockquote className="fd-quote">
                    <Quote className="fd-quote-mark" />
                    <p>{details.quote.text}</p>
                    <cite>— {details.quote.source}</cite>
                  </blockquote>
                </Reveal>
              )}

              {/* Cast */}
              <Reveal>
                <div className="section-head fd-people-head">
                  <h3>Cast</h3>
                </div>
                <div className="fd-people">
                  {film.cast.map((c) => (
                    <div className="person" key={c}>
                      <Avatar name={c} />
                      <div className="person-txt">
                        <div className="person-name">{c}</div>
                        <div className="person-role">Cast</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Crew */}
              <Reveal>
                <div className="section-head fd-people-head">
                  <h3>Crew</h3>
                </div>
                <div className="fd-people">
                  {crew.map((m) => (
                    <div className="person" key={m.role}>
                      <Avatar name={m.name} />
                      <div className="person-txt">
                        <div className="person-name">{m.name}</div>
                        <div className="person-role">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Episodes */}
              {episodes.length > 0 && (
                <Reveal>
                  <div className="section-head fd-people-head">
                    <h3>{film.kind === 'Documentary' ? 'Episodes' : 'Episodes'} <span className="fd-count">{episodes.length}</span></h3>
                  </div>
                  <div className="fd-episodes">
                    {episodes.map((ep) => (
                      <div className="episode" key={ep.number}>
                        <div className="episode-no">{String(ep.number).padStart(2, '0')}</div>
                        <div className="episode-body">
                          <div className="episode-head">
                            <span className="episode-title">{ep.title}</span>
                            <span className="episode-time">{ep.runtime}</span>
                          </div>
                          <p className="episode-syn">{ep.synopsis}</p>
                        </div>
                        <button className="episode-play" aria-label={`Play episode ${ep.number}`} onClick={() => setTrailer(film)}><Play /></button>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {/* aside dossier */}
            <aside className="fd-aside">
              <Reveal className="fd-panel">
                <h4 className="fd-panel-title"><Ticket /> Details</h4>
                <ul className="fd-spec">
                  <li><span className="fd-spec-k"><Calendar /> Release</span><span className="fd-spec-v">{details.releaseLine}</span></li>
                  <li><span className="fd-spec-k"><Award /> Rating</span><span className="fd-spec-v">{film.rating}</span></li>
                  <li><span className="fd-spec-k"><Globe /> Language</span><span className="fd-spec-v">{film.language}</span></li>
                  <li><span className="fd-spec-k"><Camera /> Format</span><span className="fd-spec-v">{details.format}</span></li>
                  <li><span className="fd-spec-k"><Volume /> Sound</span><span className="fd-spec-v">{details.soundMix}</span></li>
                  <li><span className="fd-spec-k"><Pin /> Locations</span><span className="fd-spec-v">{details.locations.join(' · ')}</span></li>
                </ul>
                <div className="fd-panel-sub">Where to watch</div>
                <div className="fd-platforms">
                  {details.platforms.map((p) => <span className="badge" key={p}>{p}</span>)}
                </div>
                <button className="btn btn-gold fd-panel-btn" onClick={() => setTrailer(film)}>
                  <Play /> Watch Trailer
                </button>
                <Link className="btn btn-outline fd-panel-btn" to="/contact">Licensing &amp; press</Link>
              </Reveal>
            </aside>
          </div>
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
