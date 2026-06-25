import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/Icons';
import { getServiceCopy } from '../data/serviceCopy';
import { getServiceBySlug, servicePath, websiteServices } from '../data/rateCard';
import { SERVICE_IMAGE, serviceArtworkUri } from '../lib/artwork';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const copy = slug ? getServiceCopy(slug) : undefined;
  const [heroSrc, setHeroSrc] = useState(service ? SERVICE_IMAGE(service.slug) : '');

  useEffect(() => {
    document.title = service
      ? `${service.title} — A3 Studios`
      : 'Service not found — A3 Studios';
  }, [service]);

  useEffect(() => {
    if (service) setHeroSrc(SERVICE_IMAGE(service.slug));
  }, [service]);

  if (!service) {
    return (
      <div className="empty" style={{ paddingTop: 'calc(var(--nav-h) + 120px)' }}>
        <h3>Service not found</h3>
        <p style={{ marginBottom: 20 }}>That production category doesn’t exist yet.</p>
        <Link className="btn btn-gold" to="/rates">View all rates</Link>
      </div>
    );
  }

  const others = websiteServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="service-hero service-hero--image">
        <img
          className="service-hero-img"
          src={heroSrc}
          alt=""
          aria-hidden
          onError={() => setHeroSrc(serviceArtworkUri(service.title, 'A3 Production', service.accent))}
        />
        <div className="service-hero-scrim" />
        <div className="container service-hero-inner">
          <Link className="service-back link" to="/rates">
            ← All rates
          </Link>
          <div className="kicker" style={{ marginTop: 20 }}>A3 Production</div>
          <h1>{service.title}</h1>
          {copy && <p className="service-tagline">{copy.tagline}</p>}
          <div className="service-price-block">
            <span className="service-price-label">Price per video</span>
            <span className={`service-price${service.priceUsd === null ? ' service-price--probono' : ''}`}>
              {service.priceLabel}
            </span>
          </div>
          <p className="service-lead">{service.description}</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/contact">
              {service.priceUsd === null ? 'Apply for pro bono' : 'Book this service'}{' '}
              <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
            <Link className="btn btn-ghost" to="/rates">Compare all rates</Link>
          </div>
        </div>
      </section>

      {copy && (
        <section className="section-tight">
          <div className="container service-prose-wrap">
            {copy.sections.map((section, i) => (
              <Reveal key={section.title} className="service-prose-block" delay={i * 30}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </Reveal>
            ))}

            <Reveal className="service-prose-block" delay={120}>
              <h2>Key benefits</h2>
              <ul className="service-benefits">
                {copy.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="service-prose-block" delay={150}>
              <h2>Who this is for</h2>
              <ul className="service-ideal">
                {copy.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="service-prose-block" delay={180}>
              <h2>Our process</h2>
              <div className="rate-steps">
                {copy.process.map((step, idx) => (
                  <div className="rate-step" key={step.step}>
                    <div className="rate-step-num">{String(idx + 1).padStart(2, '0')}</div>
                    <h3>{step.step}</h3>
                    <p>{step.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container">
          <div className="service-detail-grid">
            <Reveal className="service-panel">
              <div className="kicker">What you get</div>
              <h2 style={{ marginTop: 12, marginBottom: 16 }}>Deliverables</h2>
              <ul className="rate-detail-list">
                {service.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="service-panel" delay={40}>
              <div className="kicker">Production</div>
              <h2 style={{ marginTop: 12, marginBottom: 16 }}>Scope &amp; timeline</h2>
              <dl className="rate-detail-meta">
                <div>
                  <dt>Typical scope</dt>
                  <dd>{service.typicalScope}</dd>
                </div>
                <div>
                  <dt>Turnaround</dt>
                  <dd>{service.turnaround}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="strip section-tight">
        <div className="container">
          <Reveal className="rate-cta">
            <div>
              <h2>Ready to hire A3 for {service.title.toLowerCase()}?</h2>
              <p>
                Tell us your brief — we’ll confirm scope, dates and a tailored quote.
                {service.priceUsd !== null && (
                  <> Guide rate: <strong>{service.priceLabel}</strong> per video.</>
                )}
              </p>
            </div>
            <Link className="btn btn-gold" to="/contact">
              Get a quote <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: 72 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Other services</div>
              <h2 style={{ marginTop: 12 }}>Explore more</h2>
            </div>
          </div>
          <div className="rate-services-grid">
            {others.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 30}>
                <Link to={servicePath(svc.slug)} className="rate-service-card rate-service-card--link">
                  <div className="rate-service-accent" style={{ background: svc.accent }} aria-hidden />
                  <div className="rate-service-body">
                    <div className="rate-service-head">
                      <h3>{svc.title}</h3>
                      <span className={`rate-service-price${svc.priceUsd === null ? ' rate-service-price--probono' : ''}`}>
                        {svc.priceLabel}
                      </span>
                    </div>
                    <p>{svc.description}</p>
                    <span className="rate-service-more">View details →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
