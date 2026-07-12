import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Person } from '../data/people';
import { personFinance } from '../data/personFinance';
import { kshUsd, CREW_SHARE_PCT, KUZA_TRANSPARENCY } from '../data/funding';
import { Reveal } from './Reveal';
import { Wallet, TrendingUp, Film as FilmIcon, PieChart, Lock, ArrowRight } from './Icons';

/**
 * Kuza-style contributions & earnings for a collective member.
 * Contribution stats (titles, revenue share) are public; personal earnings
 * are treated as sensitive and shown blurred behind a privacy toggle.
 */
export function PersonFinance({ person }: { person: Person }) {
  const fin = personFinance(person);
  const [reveal, setReveal] = useState(false);
  if (!fin.titles) return null;

  return (
    <section className="section-tight pfin">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ marginBottom: 18 }}>
            <div>
              <div className="kicker">Contributions &amp; earnings</div>
              <h2 style={{ marginTop: 10 }}>Tracked on Kuza</h2>
            </div>
            <a className="link" href={KUZA_TRANSPARENCY} target="_blank" rel="noopener noreferrer">
              View on Kuza <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </Reveal>

        {/* public contribution stats */}
        <Reveal className="pfin-stats">
          <div className="pfin-stat"><FilmIcon /><div><b>{fin.titles}</b><span>A3 titles</span></div></div>
          <div className="pfin-stat"><TrendingUp /><div><b>{fin.released}</b><span>Released</span></div></div>
          <div className="pfin-stat"><PieChart /><div><b>{fin.avgShare}%</b><span>Avg. revenue share</span></div></div>
          <div className="pfin-stat"><Wallet /><div><b>{CREW_SHARE_PCT}%</b><span>To cast &amp; crew</span></div></div>
        </Reveal>

        {/* sensitive personal earnings — blurred by default */}
        <Reveal className="pfin-earn">
          <div className="pfin-earn-head">
            <div>
              <div className="pfin-earn-label"><Lock /> Personal earnings · private</div>
              <p>Only {person.name.split(' ')[0]} can see these figures. Shown blurred for privacy.</p>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => setReveal((r) => !r)}>
              {reveal ? 'Hide' : 'Preview'}
            </button>
          </div>
          <div className="pfin-earn-grid">
            <div className="pfin-earn-card">
              <span className="pfin-earn-k">Lifetime earnings</span>
              <span className={`pfin-earn-v sensitive ${reveal ? 'shown' : ''}`}>{kshUsd(fin.lifetimeEarnings)}</span>
            </div>
            <div className="pfin-earn-card">
              <span className="pfin-earn-k">Projected (in production)</span>
              <span className={`pfin-earn-v sensitive ${reveal ? 'shown' : ''}`}>{kshUsd(fin.pendingValue)}</span>
            </div>
          </div>
        </Reveal>

        {/* per-title breakdown */}
        <Reveal className="pfin-table-wrap">
          <table className="pfin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Role</th>
                <th className="num">Share</th>
                <th className="num">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {fin.contributions.map((c) => (
                <tr key={c.film.slug}>
                  <td><Link to={`/film/${c.film.slug}`} className="pfin-title">{c.film.title}</Link><span className="pfin-year">{c.film.year}</span></td>
                  <td>{c.role}</td>
                  <td className="num">{c.pct}%</td>
                  <td className="num">
                    {c.film.status === 'Now Streaming'
                      ? <span className={`sensitive ${reveal ? 'shown' : ''}`}>{kshUsd(c.earnings)}</span>
                      : <span className="pfin-muted">{c.film.status}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="fin-note" style={{ marginTop: 14 }}>
          Revenue shares are published per title on Kuza&rsquo;s transparent ledger. Individual earnings are private to each member.
        </p>
      </div>
    </section>
  );
}
