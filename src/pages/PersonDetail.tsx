import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPerson, personFilmography, personCreditCount, people } from '../data/people';
import { PORTRAIT } from '../types';
import { Reveal } from '../components/Reveal';
import { FilmCard } from '../components/FilmCard';
import { ArrowRight, Pin, Film as FilmIcon, Star } from '../components/Icons';

export default function PersonDetail() {
  const { slug } = useParams();
  const person = slug ? getPerson(slug) : undefined;

  useEffect(() => {
    document.title = person ? `${person.name} — A3 Studios` : 'Not found — A3 Studios';
    window.scrollTo(0, 0);
  }, [person]);

  if (!person) {
    return (
      <div className="empty" style={{ paddingTop: 'calc(var(--nav-h) + 120px)' }}>
        <h3>We couldn’t find that person</h3>
        <p style={{ marginBottom: 20 }}>They may have moved on to the next production.</p>
        <Link className="btn btn-gold" to="/people">Meet the collective</Link>
      </div>
    );
  }

  const films = personFilmography(person);
  const credits = personCreditCount(person);
  const others = people.filter((p) => p.slug !== person.slug && p.kind === person.kind).slice(0, 4);

  return (
    <>
      <section className="person-hero">
        <div className="person-hero-bg" style={{ background: `radial-gradient(90% 120% at 15% 0%, ${person.accent}44, transparent 60%)` }} />
        <div className="container person-hero-inner">
          <div className="person-portrait">
            <img src={PORTRAIT(person.slug)} alt={person.name} />
            <span className="person-portrait-accent" style={{ background: person.accent }} />
          </div>
          <div className="person-lead">
            <div className="kicker">{person.kind === 'Cinematographer' ? 'Cinematography' : person.kind} · A3 Collective</div>
            <h1>{person.name}</h1>
            <div className="person-role-lg">{person.role}</div>
            <div className="person-meta">
              <span><Pin /> {person.based}</span>
              <span className="pip" />
              <span><FilmIcon /> {films.length} A3 title{films.length === 1 ? '' : 's'}</span>
              {credits.directed > 0 && <><span className="pip" /><span><Star /> {credits.directed} directed</span></>}
            </div>
            <p className="person-bio">{person.bio}</p>
            <div className="person-tags">
              {person.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {films.length > 0 && (
        <section className="section-tight">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 18 }}>
              <h2>Filmography</h2>
              <Link className="link" to="/films">All titles <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
            <Reveal className="grid grid-stagger">
              {films.map((f) => <FilmCard key={f.slug} film={f} />)}
            </Reveal>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section-tight" style={{ paddingBottom: 64 }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: 18 }}><h2>More of the collective</h2></div>
            <Reveal className="people-grid">
              {others.map((p) => (
                <Link to={`/person/${p.slug}`} className="people-card" key={p.slug}>
                  <div className="people-photo">
                    <img src={PORTRAIT(p.slug)} alt={p.name} loading="lazy" />
                    <span className="people-accent" style={{ background: p.accent }} />
                  </div>
                  <div className="people-body">
                    <div className="people-name">{p.name}</div>
                    <div className="people-role">{p.role}</div>
                  </div>
                </Link>
              ))}
            </Reveal>
            <div className="container" style={{ marginTop: 18, padding: 0 }}>
              <Link className="btn btn-outline" to="/people">Meet the whole collective</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
