import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Instagram, Youtube, Twitter, Linkedin, ArrowRight, Pin } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();
  const [joined, setJoined] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        {/* newsletter band */}
        <div className="footer-news">
          <div>
            <h3>Never miss a premiere</h3>
            <p>Get first access to A3 originals, trailers and festival news — straight to your inbox.</p>
          </div>
          {joined ? (
            <div className="form-success" style={{ minWidth: 280 }}>You’re on the list. Karibu to A3.</div>
          ) : (
            <form className="news-form" onSubmit={(e) => { e.preventDefault(); setJoined(true); }}>
              <input type="email" required placeholder="you@example.com" aria-label="Email address" />
              <button type="submit" className="btn btn-gold">Subscribe <ArrowRight style={{ width: 17, height: 17 }} /></button>
            </form>
          )}
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              A3 Studios is a Nairobi-based production house — feature films, commercial
              video and live sport coverage — telling bold African stories for the world.
            </p>
            <div className="footer-addr"><Pin /> <span>Industrial Area, Nairobi, Kenya</span></div>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"><Twitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Work</h4>
            <Link to="/films">Films</Link>
            <Link to="/series">Series &amp; Docs</Link>
            <Link to="/commercial">Commercial &amp; Video</Link>
            <Link to="/sport">Sport Coverage</Link>
            <Link to="/rates">Rate Card</Link>
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <Link to="/about">About A3</Link>
            <Link to="/about">Our Team</Link>
            <Link to="/contact">Productions</Link>
            <Link to="/contact">Press</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Submit a Script</Link>
            <Link to="/contact">Partnerships</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} A3 Studios Ltd · Nairobi, Kenya</span>
          <div className="fb-links">
            <Link to="/about">Privacy</Link>
            <Link to="/about">Terms</Link>
            <a href="https://a3.ke">a3.ke</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
