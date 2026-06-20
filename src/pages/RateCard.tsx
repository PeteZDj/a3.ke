import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/Icons';
import {
  ANNUAL_REVENUE_USD,
  ANNUAL_VIDEO_COUNT,
  PRO_BONO_COUNT,
  formatUsd,
  paidGigCount,
  proBonoLine,
  rateFaqs,
  rateLines,
  websiteServices,
} from '../data/rateCard';

export default function RateCard() {
  const totalCheck = useMemo(
    () => rateLines.reduce((sum, l) => sum + l.totalUsd, 0),
    [],
  );

  useEffect(() => {
    document.title = 'Rates — A3 Studios';
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">Production · Hire A3</div>
          <h1>Video Production That Looks Premium</h1>
          <p>
            At A3, we create cinematic videos for brands, artists, events, real estate, weddings,
            sports, and film projects. Whether you need a clean commercial, a high-energy music video,
            a polished property showcase, or full event coverage, we help you turn your idea into a
            professional visual story.
          </p>
        </div>
      </header>

      {/* client-facing rates — top of page */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 28 }}>
              <div>
                <div className="kicker">Our video services</div>
                <h2 style={{ marginTop: 12 }}>Rates per video</h2>
              </div>
              <p style={{ color: 'var(--ink-soft)', maxWidth: 420, fontSize: 15, margin: 0 }}>
                Published guide rates — final quotes depend on scope, crew and turnaround.
              </p>
            </div>
          </Reveal>
          <div className="rate-services-grid">
            {websiteServices.map((svc, i) => (
              <Reveal key={svc.id} className="rate-service-card" delay={i * 40}>
                <div className="rate-service-accent" style={{ background: svc.accent }} aria-hidden />
                <div className="rate-service-body">
                  <div className="rate-service-head">
                    <h3>{svc.title}</h3>
                    <span className={`rate-service-price${svc.id === 'pro-bono' ? ' rate-service-price--probono' : ''}`}>
                      {svc.fromPrice}
                    </span>
                  </div>
                  <p>{svc.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="rate-services-cta" delay={80}>
            <Link className="btn btn-gold" to="/contact">
              Get a quote <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* quick reference table */}
      <section className="strip section-tight">
        <div className="container">
          <Reveal className="rate-table-wrap">
            <div className="kicker" style={{ marginBottom: 16 }}>At a glance</div>
            <table className="rate-table rate-table--simple">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col" className="num">Website rate</th>
                </tr>
              </thead>
              <tbody>
                {websiteServices.map((svc) => (
                  <tr key={svc.id}>
                    <td>
                      <span className="rate-dot" style={{ background: svc.accent }} aria-hidden />
                      <strong>{svc.title}</strong>
                    </td>
                    <td className="num rate-total">{svc.fromPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* annual slate — studio planning detail */}
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="rate-hero-grid">
              <div className="rate-hero-card rate-hero-card--primary">
                <div className="rate-hero-label">Annual production slate</div>
                <div className="rate-hero-num">{formatUsd(ANNUAL_REVENUE_USD)}</div>
                <p className="rate-hero-note">Revenue-only model across {ANNUAL_VIDEO_COUNT} deliverables per year</p>
              </div>
              <div className="rate-hero-card">
                <div className="rate-hero-label">Videos per year</div>
                <div className="rate-hero-num">{ANNUAL_VIDEO_COUNT}</div>
                <p className="rate-hero-note">{paidGigCount} paid deliverables + {PRO_BONO_COUNT} pro bono</p>
              </div>
              <div className="rate-hero-card">
                <div className="rate-hero-label">Categories</div>
                <div className="rate-hero-num">{rateLines.length}</div>
                <p className="rate-hero-note">Film · commercial · music · property · events · weddings · sport</p>
              </div>
              <div className="rate-hero-card">
                <div className="rate-hero-label">Avg. per paid gig</div>
                <div className="rate-hero-num">{formatUsd(Math.round(ANNUAL_REVENUE_USD / paidGigCount))}</div>
                <p className="rate-hero-note">Blended across the {paidGigCount}-gig paid slate</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="rate-slate">
            <div className="kicker" style={{ marginBottom: 16 }}>Annual slate at a glance</div>
            <ul className="rate-slate-list">
              <li><strong>4</strong> DP gigs (movies) — <strong>$7,800</strong> total · <strong>$1,950</strong> per video</li>
              <li><strong>4</strong> Commercial — <strong>$4,875</strong> total · <strong>$1,218.75</strong> per video</li>
              <li><strong>8</strong> Music videos — <strong>$3,900</strong> total · <strong>$487.50</strong> per video</li>
              <li><strong>4</strong> Real estate videos — <strong>$1,950</strong> total · <strong>$487.50</strong> per video</li>
              <li><strong>2</strong> Events — <strong>$1,950</strong> total · <strong>$975</strong> per video</li>
              <li><strong>5</strong> Weddings — <strong>$1,950</strong> total · <strong>$390</strong> per video</li>
              <li><strong>2</strong> Sport videos — <strong>$975</strong> total · <strong>$487.50</strong> per video</li>
              <li><strong>1</strong> Pro bono — community / NGO slot</li>
            </ul>
            <p className="rate-slate-foot">
              <strong>= 30 gigs per year</strong> · <strong>{formatUsd(ANNUAL_REVENUE_USD)}</strong> revenue only
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Full breakdown</div>
              <h2 style={{ marginTop: 12 }}>30 gigs per year</h2>
            </div>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 420, fontSize: 15 }}>
              Every line below sums to {formatUsd(ANNUAL_REVENUE_USD)}. Per-deliverable rates are the category
              total divided by count.
            </p>
          </div>

          <Reveal className="rate-table-wrap">
            <table className="rate-table">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col" className="num">Qty</th>
                  <th scope="col" className="num">Per video</th>
                  <th scope="col" className="num">Line total</th>
                  <th scope="col" className="num">Share</th>
                </tr>
              </thead>
              <tbody>
                {rateLines.map((line) => (
                  <tr key={line.id}>
                    <td>
                      <span className="rate-dot" style={{ background: line.accent }} aria-hidden />
                      <span>
                        <strong>{line.shortLabel}</strong>
                        <span className="rate-table-sub">{line.label}</span>
                      </span>
                    </td>
                    <td className="num">{line.count}</td>
                    <td className="num">{formatUsd(line.rateUsd)}</td>
                    <td className="num rate-total">{formatUsd(line.totalUsd)}</td>
                    <td className="num">{Math.round((line.totalUsd / ANNUAL_REVENUE_USD) * 100)}%</td>
                  </tr>
                ))}
                <tr className="rate-row-probono">
                  <td>
                    <span className="rate-dot" style={{ background: '#6b7280' }} aria-hidden />
                    <span>
                      <strong>Pro bono</strong>
                      <span className="rate-table-sub">Community / NGO slot</span>
                    </span>
                  </td>
                  <td className="num">{proBonoLine.count}</td>
                  <td className="num">—</td>
                  <td className="num">$0</td>
                  <td className="num">—</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Total</strong></td>
                  <td className="num"><strong>{ANNUAL_VIDEO_COUNT}</strong></td>
                  <td className="num" />
                  <td className="num rate-grand"><strong>{formatUsd(totalCheck)}</strong></td>
                  <td className="num"><strong>100%</strong></td>
                </tr>
              </tfoot>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Scope &amp; deliverables</div>
              <h2 style={{ marginTop: 12 }}>What each slot includes</h2>
            </div>
          </div>
          <div className="rate-detail-grid">
            {rateLines.map((line, i) => (
              <Reveal key={line.id} className="rate-detail-card" delay={i * 40}>
                <div className="rate-detail-head" style={{ borderColor: line.accent }}>
                  <div>
                    <div className="rate-detail-kicker">{line.shortLabel}</div>
                    <h3>{line.label}</h3>
                  </div>
                  <div className="rate-detail-price">
                    <span className="rate-detail-count">{line.count}×</span>
                    <span className="rate-detail-unit">{formatUsd(line.rateUsd)}</span>
                    <span className="rate-detail-line">{formatUsd(line.totalUsd)} total</span>
                  </div>
                </div>
                <p className="rate-detail-summary">{line.summary}</p>
                <ul className="rate-detail-list">
                  {line.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <dl className="rate-detail-meta">
                  <div>
                    <dt>Typical scope</dt>
                    <dd>{line.typicalScope}</dd>
                  </div>
                  <div>
                    <dt>Turnaround</dt>
                    <dd>{line.turnaround}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
            <Reveal className="rate-detail-card rate-detail-card--probono" delay={rateLines.length * 40}>
              <div className="rate-detail-head" style={{ borderColor: '#6b7280' }}>
                <div>
                  <div className="rate-detail-kicker">Pro bono</div>
                  <h3>{proBonoLine.label}</h3>
                </div>
                <div className="rate-detail-price">
                  <span className="rate-detail-count">{proBonoLine.count}×</span>
                  <span className="rate-detail-unit">Community</span>
                  <span className="rate-detail-line">$0 · goodwill</span>
                </div>
              </div>
              <p className="rate-detail-summary">{proBonoLine.summary}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="strip section">
        <div className="container">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 24 }}>How to book</div>
            <div className="rate-steps">
              <div className="rate-step">
                <div className="rate-step-num">01</div>
                <h3>Pick your categories</h3>
                <p>Choose the services you need — one video or a full-year slate across multiple categories.</p>
              </div>
              <div className="rate-step">
                <div className="rate-step-num">02</div>
                <h3>Sign a statement of work</h3>
                <p>We lock dates, deliverables, payment milestones and any pass-on costs (travel, talent, music rights).</p>
              </div>
              <div className="rate-step">
                <div className="rate-step-num">03</div>
                <h3>50% to hold dates</h3>
                <p>Retainer clients pay 50% upfront to reserve crew; balance on delivery. Net-14 for approved accounts.</p>
              </div>
              <div className="rate-step">
                <div className="rate-step-num">04</div>
                <h3>Shoot &amp; deliver</h3>
                <p>In-house edit, grade and sound at A3 Industrial Area — or your preferred finishing house by arrangement.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">FAQ</div>
              <h2 style={{ marginTop: 12 }}>Common questions</h2>
            </div>
          </div>
          <Reveal className="rate-faq">
            {rateFaqs.map((item) => (
              <details key={item.q} className="rate-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 72 }}>
        <div className="container">
          <Reveal className="rate-cta">
            <div>
              <h2>Ready to hire A3?</h2>
              <p>
                Tell us what you need — we’ll send a tailored quote with dates, scope and milestones.
              </p>
            </div>
            <Link className="btn btn-gold" to="/contact">
              Request a quote <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
