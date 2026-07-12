import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { people, personCreditCount } from '../data/people';
import { PORTRAIT } from '../types';
import { Reveal } from '../components/Reveal';
import { StatsBar } from '../components/PageExtras';

const groups: { kind: string; label: string }[] = [
  { kind: 'Director', label: 'Directors & studio leads' },
  { kind: 'Cinematographer', label: 'Camera' },
  { kind: 'Actor', label: 'Cast' },
];

export default function People() {
  useEffect(() => {
    document.title = 'The Collective — A3 Studios';
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">The people</div>
          <h1>The A3 collective</h1>
          <p>The directors, cinematographers and actors behind A3 Studios — a home-grown ensemble telling African stories for the world. Meet the faces in front of and behind the camera.</p>
          <StatsBar
            items={[
              { value: `${people.length}`, label: 'Core collective' },
              { value: `${people.filter((p) => p.kind === 'Director').length}`, label: 'Directors' },
              { value: `${people.filter((p) => p.kind === 'Actor').length}`, label: 'Lead cast' },
              { value: '100%', label: 'Kenyan talent' },
            ]}
          />
        </div>
      </header>

      {groups.map(({ kind, label }) => {
        const list = people.filter((p) => p.kind === kind);
        if (!list.length) return null;
        return (
          <section className="section-tight" key={kind}>
            <div className="container">
              <div className="section-head" style={{ marginBottom: 18 }}><h2>{label}</h2></div>
              <Reveal className="people-grid">
                {list.map((p) => {
                  const c = personCreditCount(p);
                  return (
                    <Link to={`/person/${p.slug}`} className="people-card" key={p.slug}>
                      <div className="people-photo">
                        <img src={PORTRAIT(p.slug)} alt={p.name} loading="lazy" />
                        <span className="people-accent" style={{ background: p.accent }} />
                      </div>
                      <div className="people-body">
                        <div className="people-name">{p.name}</div>
                        <div className="people-role">{p.role}</div>
                        <div className="people-credits">
                          {c.directed > 0 && <span>{c.directed} directed</span>}
                          {c.directed > 0 && c.acted > 0 && <span className="pip" />}
                          {c.acted > 0 && <span>{c.acted} on screen</span>}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
