import type { Film } from '../types';
import {
  getFunding, fundedPct, kshUsd, ksh, compact,
  PLATFORM_FEE_PCT, CREW_SHARE_PCT, kuzaFilmUrl, KUZA_TRANSPARENCY,
} from '../data/funding';
import { Reveal } from './Reveal';
import {
  Wallet, TrendingUp, PieChart, Users, CircleCheck, CircleDot, ArrowRight, Ticket,
} from './Icons';

/**
 * Kuza-style film-financing panel: funding journey, where-the-money-goes,
 * cast & crew splits, box office / earnings and the production timeline.
 * Rendered on every title's detail page (except live Sport).
 */
export function FilmFinance({ film }: { film: Film }) {
  const f = getFunding(film);
  const pct = fundedPct(f);
  const released = film.status === 'Now Streaming';
  const isCommercial = film.kind === 'Commercial';
  const kuza = kuzaFilmUrl(film.slug);

  // crew pool = 85% of gross; platform keeps 15%
  const crewPool = Math.round(f.revenue * (CREW_SHARE_PCT / 100));

  // box-office style figures derived from gross revenue
  const openingWeekend = Math.round(f.revenue * 0.32);
  const worldwide = Math.round(f.revenue * 1.7);
  const clientValue = Math.round(f.budget * 1.35);

  const budgetRows = [
    { label: 'Pre-Production', value: f.budgetBreakdown.preProduction },
    { label: 'Production', value: f.budgetBreakdown.production },
    { label: 'Post-Production', value: f.budgetBreakdown.postProduction },
  ];
  const budgetMax = Math.max(...budgetRows.map((b) => b.value));

  return (
    <section className="section fin">
      <div className="container">
        {/* Kuza attribution banner */}
        <Reveal className="fin-kuza">
          <div className="fin-kuza-badge"><Wallet /></div>
          <div className="fin-kuza-body">
            <div className="kicker">Financing &amp; transparency</div>
            <h2>Funded &amp; tracked on Kuza</h2>
            <p>
              {film.title}&rsquo;s full financials — funding, budget, cast &amp; crew revenue
              splits and payouts — live on Kuza&rsquo;s transparent Film-Club ledger.
              A3 pays out <strong>{CREW_SHARE_PCT}% to cast &amp; crew</strong>; Kuza keeps a flat{' '}
              <strong>{PLATFORM_FEE_PCT}%</strong> platform fee.
            </p>
          </div>
          <a className="btn btn-gold fin-kuza-cta" href={kuza} target="_blank" rel="noopener noreferrer">
            View on Kuza <ArrowRight style={{ width: 17, height: 17 }} />
          </a>
        </Reveal>

        <div className="fin-grid">
          {/* Funding progress */}
          <Reveal className="fin-card fin-card--funding">
            <div className="fin-card-head">
              <h3><TrendingUp /> Funding progress</h3>
              <span className={`fin-stage fin-stage--${f.stage.toLowerCase().split(/[ -]/)[0]}`}>{f.stage}</span>
            </div>
            <div className="fin-fund-amt">
              <strong>{ksh(f.fundingRaised)}</strong>
              <span>of {ksh(f.fundingGoal)} goal</span>
            </div>
            <div className="fin-bar">
              <span className="fin-bar-fill fin-bar-fill--green" style={{ width: `${pct}%` }} />
            </div>
            <div className="fin-fund-meta">
              <span><strong>{pct}%</strong> funded</span>
              <span className="pip" />
              <span><Users style={{ width: 15, height: 15, verticalAlign: '-3px' }} /> {isCommercial ? 'Client-funded' : `${f.backers.toLocaleString()} backers`}</span>
            </div>
          </Reveal>

          {/* Where the money goes — 85 / 15 */}
          <Reveal className="fin-card">
            <div className="fin-card-head">
              <h3><PieChart /> Where the money goes</h3>
            </div>
            <div className="fin-split-stack">
              <span className="fin-split-crew" style={{ width: `${CREW_SHARE_PCT}%` }}>{CREW_SHARE_PCT}%</span>
              <span className="fin-split-fee" style={{ width: `${PLATFORM_FEE_PCT}%` }}>{PLATFORM_FEE_PCT}%</span>
            </div>
            <ul className="fin-legend">
              <li><span className="dot dot-crew" /> Cast &amp; crew <b>{CREW_SHARE_PCT}%</b></li>
              <li><span className="dot dot-fee" /> Kuza platform fee <b>{PLATFORM_FEE_PCT}%</b></li>
            </ul>
            <p className="fin-note">Every shilling is auditable. Splits pay out instantly to crew wallets on release.</p>
          </Reveal>
        </div>

        {/* Cast & crew splits */}
        <Reveal className="fin-card">
          <div className="fin-card-head">
            <h3><Users /> Cast &amp; crew revenue split</h3>
            <span className="fin-sub">Share of the {CREW_SHARE_PCT}% creator pool</span>
          </div>
          <div className="fin-splits">
            {f.splits.map((s) => (
              <div className="fin-split-row" key={s.role + s.name}>
                <div className="fin-split-label">
                  <span className="fin-split-role">{s.role}</span>
                  <span className="fin-split-name">{s.name}</span>
                </div>
                <div className="fin-split-track">
                  <span className="fin-split-bar" style={{ width: `${(s.pct / CREW_SHARE_PCT) * 100}%` }} />
                </div>
                <span className="fin-split-pct">{s.pct}%</span>
              </div>
            ))}
          </div>
          <p className="fin-note">Illustrative shares agreed per title and published on Kuza. Actual splits vary by production.</p>
        </Reveal>

        {/* Box office / campaign performance */}
        <Reveal className="fin-card">
          <div className="fin-card-head">
            <h3><Ticket /> {isCommercial ? 'Budget & campaign' : 'Box office & earnings'}</h3>
            {released && <span className="fin-sub">To date</span>}
          </div>
          {released ? (
            <div className="fin-stats">
              <Stat label={isCommercial ? 'Production budget' : 'Budget'} value={kshUsd(f.budget)} />
              {isCommercial ? (
                <>
                  <Stat label="Client value" value={kshUsd(clientValue)} accent />
                  <Stat label="Media reach" value={compact(f.views)} />
                  <Stat label="Paid to crew" value={kshUsd(crewPool)} accent />
                </>
              ) : (
                <>
                  <Stat label="Opening weekend" value={kshUsd(openingWeekend)} />
                  <Stat label="Gross (Kenya)" value={kshUsd(f.revenue)} accent />
                  <Stat label="Cumulative worldwide" value={kshUsd(worldwide)} />
                  <Stat label="Total views" value={compact(f.views)} />
                  <Stat label="Paid to cast & crew" value={kshUsd(crewPool)} accent />
                </>
              )}
            </div>
          ) : (
            <div className="fin-stats">
              <Stat label="Budget" value={kshUsd(f.budget)} />
              <Stat label="Raised so far" value={kshUsd(f.fundingRaised)} accent />
              <Stat label="Backers" value={isCommercial ? 'Client-funded' : f.backers.toLocaleString()} />
              <Stat label="Status" value={f.stage} />
            </div>
          )}
        </Reveal>

        <div className="fin-grid">
          {/* Budget breakdown */}
          <Reveal className="fin-card">
            <div className="fin-card-head">
              <h3><Wallet /> Budget breakdown</h3>
            </div>
            <div className="fin-budget">
              {budgetRows.map((b) => (
                <div className="fin-budget-row" key={b.label}>
                  <div className="fin-budget-top">
                    <span>{b.label}</span>
                    <b>{kshUsd(b.value)}</b>
                  </div>
                  <div className="fin-bar sm">
                    <span className="fin-bar-fill fin-bar-fill--amber" style={{ width: `${(b.value / budgetMax) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Production journey */}
          <Reveal className="fin-card">
            <div className="fin-card-head">
              <h3><CircleCheck /> Production journey</h3>
            </div>
            <ol className="fin-timeline">
              {f.timeline.map((m) => (
                <li className={`fin-tl-item ${m.done ? 'done' : 'upcoming'}`} key={m.phase}>
                  <span className="fin-tl-ico">{m.done ? <CircleCheck /> : <CircleDot />}</span>
                  <div className="fin-tl-body">
                    <div className="fin-tl-head">
                      <span className="fin-tl-phase">{m.phase}</span>
                      <span className="fin-tl-date">{m.done ? m.date : 'Upcoming'}</span>
                    </div>
                    <p>{m.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="fin-foot">
          <span>Financials published transparently on Kuza Film Club.</span>
          <a href={KUZA_TRANSPARENCY} target="_blank" rel="noopener noreferrer" className="link">
            See Kuza&rsquo;s transparency ledger <ArrowRight style={{ width: 15, height: 15 }} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`fin-stat ${accent ? 'accent' : ''}`}>
      <div className="fin-stat-v">{value}</div>
      <div className="fin-stat-k">{label}</div>
    </div>
  );
}
