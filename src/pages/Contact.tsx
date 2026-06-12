import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Mail, Phone, Pin, Globe } from '../components/Icons';

export default function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Contact — A3 Studios';
  }, []);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">Get in touch</div>
          <h1>Let’s make<br />something great</h1>
          <p>Pitches, partnerships, press or just hello — our doors in Nairobi are open.</p>
        </div>
      </header>

      <section className="section-tight" style={{ paddingBottom: 72 }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              {sent ? (
                <div className="form-success">
                  <strong>Asante sana!</strong> Your message is on its way to the A3 team.
                  We’ll be in touch shortly.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="topic">I’m reaching out about</label>
                    <select id="topic" defaultValue="General">
                      <option>General enquiry</option>
                      <option>Pitch / submit a script</option>
                      <option>Commercial / branded video</option>
                      <option>Sport coverage / live broadcast</option>
                      <option>Partnership</option>
                      <option>Press &amp; media</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="msg">Message</label>
                    <textarea id="msg" required placeholder="Tell us about your project…" />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    Send message
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal className="contact-info" delay={120}>
              <div className="ci-item">
                <Pin />
                <div>
                  <div className="ci-label">Studio</div>
                  <div className="ci-value">A3 Studios, Industrial Area<br />Nairobi, Kenya</div>
                </div>
              </div>
              <div className="ci-item">
                <Mail />
                <div>
                  <div className="ci-label">Email</div>
                  <a className="ci-value" href="mailto:hello@a3.ke">hello@a3.ke</a>
                </div>
              </div>
              <div className="ci-item">
                <Phone />
                <div>
                  <div className="ci-label">Phone</div>
                  <a className="ci-value" href="tel:+254700000000">+254 700 000 000</a>
                </div>
              </div>
              <div className="ci-item">
                <Globe />
                <div>
                  <div className="ci-label">Online</div>
                  <a className="ci-value" href="https://a3.ke">a3.ke</a>
                </div>
              </div>
              <p style={{ color: 'var(--ink-faint)', marginTop: 22, fontSize: 14 }}>
                Office hours: Mon–Fri, 9:00–18:00 EAT
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
