import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilm, relatedFilms } from '../data/films';
import { filmCrew, filmDetails, filmEpisodes, filmScore, filmAccess, filmBTS } from '../data/filmMeta';
import type { Film } from '../types';
import { Backdrop } from '../components/Backdrop';
import { FilmRow } from '../components/FilmRow';
import { TrailerModal } from '../components/TrailerModal';
import { WatchModal } from '../components/WatchModal';
import { FilmFinance } from '../components/FilmFinance';
import { PersonChip } from '../components/PersonAvatar';
import { Reveal } from '../components/Reveal';
import { Laurels } from '../components/Laurels';
import { downloadScript } from '../lib/script';
import { Play, ArrowRight, Quote, Calendar, Globe, Volume, Camera, Pin, Ticket, Award, Star, Download, Clapper } from '../components/Icons';

function StatusBadge({ film }: { film: Film }) {
  if (film.status === 'Now Streaming') return <span className="badge streaming"><span className="dot" />Now Streaming</span>;
  if (film.status === 'Coming Soon') return <span className="badge soon">Coming Soon</span>;
  return <span className="badge production">In Production</span>;
}

export default function FilmDetail() {
  const { slug } = useParams();
  const film = slug ? getFilm(slug) : undefined;
  const [trailer, setTrailer] = useState<Film | null>(null);
  const [watch, setWatch] = useState<Film | null>(null);

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
  const score = filmScore(film);
  const access = filmAccess(film);
  const bts = filmBTS(film);
  const kindLabel = film.ai ? 'AI Original' : film.kind === 'Film' ? 'Original Film' : film.kind;

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
                  <span className="detail-score"><Star /> {score.toFixed(1)}<span className="detail-score-max"> / 10</span></span>
                  <span className="pip" />
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
                  <button className="btn btn-gold" onClick={() => setWatch(film)}>
                    <Play /> {access.free ? (film.status === 'Now Streaming' ? 'Watch Free' : 'Notify Me') : `Rent · $${access.price?.toFixed(2)}`}
                  </button>
                  <button className="btn btn-primary" onClick={() => setTrailer(film)}><Play /> Watch Trailer</button>
                  <button className="btn btn-ghost" onClick={() => downloadScript(film)}><Download /> Script</button>
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

                {details.themes.length ? (
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
                    <PersonChip key={c} name={c} role="Cast" />
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
                    <PersonChip key={m.role} name={m.name} role={m.role} />
                  ))}
                </div>
              </Reveal>

              {/* Behind the scenes */}
              {bts.length > 0 && (
                <Reveal>
                  <div className="section-head fd-people-head">
                    <h3><Clapper style={{ width: 22, height: 22, verticalAlign: '-4px', marginRight: 8 }} />Behind the scenes</h3>
                  </div>
                  <div className="fd-bts">
                    {bts.map((shot) => (
                      <figure className="fd-bts-item" key={shot.src}>
                        <img src={shot.src} alt={shot.caption} loading="lazy" />
                        <figcaption>{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="fd-bts-note">Production stills. A3 titles are shot, finished and graded in-house in Nairobi.</p>
                </Reveal>
              )}

              {/* Episodes */}
              {episodes.length > 0 && (
                <Reveal>
                  <div className="section-head fd-people-head">
                    <h3>Episodes <span className="fd-count">{episodes.length}</span></h3>
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
                        <button className="episode-play" aria-label={`Play episode ${ep.number}`} onClick={() => setWatch(film)}><Play /></button>
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
                  <li><span className="fd-spec-k"><Star /> Rating</span><span className="fd-spec-v">{score.toFixed(1)} / 10</span></li>
                  <li><span className="fd-spec-k"><Calendar /> Release</span><span className="fd-spec-v">{details.releaseLine}</span></li>
                  <li><span className="fd-spec-k"><Award /> Certificate</span><span className="fd-spec-v">{film.rating}</span></li>
                  <li><span className="fd-spec-k"><Globe /> Language</span><span className="fd-spec-v">{film.language}</span></li>
                  <li><span className="fd-spec-k"><Camera /> Format</span><span className="fd-spec-v">{details.format}</span></li>
                  <li><span className="fd-spec-k"><Volume /> Sound</span><span className="fd-spec-v">{details.soundMix}</span></li>
                  <li><span className="fd-spec-k"><Pin /> Locations</span><span className="fd-spec-v">{details.locations.join(' · ')}</span></li>
                  <li><span className="fd-spec-k"><Ticket /> Access</span><span className="fd-spec-v">{access.free ? (film.status === 'Now Streaming' ? 'Free (email unlock)' : 'Coming soon') : `Rental · $${access.price?.toFixed(2)}`}</span></li>
                </ul>
                <div className="fd-panel-sub">Where to watch</div>
                <div className="fd-platforms">
                  {details.platforms.map((p) => <span className="badge" key={p}>{p}</span>)}
                </div>
                <button className="btn btn-gold fd-panel-btn" onClick={() => setWatch(film)}>
                  <Play /> {access.free ? (film.status === 'Now Streaming' ? 'Watch Free' : 'Notify Me') : `Rent · $${access.price?.toFixed(2)}`}
                </button>
                <button className="btn btn-outline fd-panel-btn" onClick={() => downloadScript(film)}>
                  <Download /> Download script excerpt
                </button>
                <Link className="btn btn-outline fd-panel-btn" to="/contact">Licensing &amp; press</Link>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {film.kind !== 'Sport' && <FilmFinance film={film} />}

      {related.length > 0 && (
        <section className="section-tight" style={{ paddingBottom: 40 }}>
          <FilmRow title={film.ai ? 'More A3 AI Originals' : 'More from A3'} films={related} to={film.ai ? '/ai-films' : '/films'} onPlay={setTrailer} />
          <div className="container" style={{ marginTop: 8 }}>
            <Link className="section-head link" to={film.ai ? '/ai-films' : '/films'}>Browse the full catalogue <ArrowRight style={{ width: 16, height: 16 }} /></Link>
          </div>
        </section>
      )}

      <TrailerModal film={trailer} onClose={() => setTrailer(null)} />
      <WatchModal film={watch} onClose={() => setWatch(null)} />
    </>
  );
}
