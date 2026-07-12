import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, Close, Sparkles } from './Icons';
import { Logo } from './Logo';

interface NavItem { to: string; label: string; end?: boolean; ai?: boolean }

const primary: NavItem[] = [
  { to: '/films', label: 'Films' },
  { to: '/ai-films', label: 'AI Originals', ai: true },
  { to: '/series', label: 'Series & Docs' },
  { to: '/commercial', label: 'Commercial' },
  { to: '/sport', label: 'Sport' },
  { to: '/people', label: 'People' },
  { to: '/about', label: 'Studio' },
];

// The drawer (mobile / tablet) lists everything.
const drawerLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  ...primary,
  { to: '/rates', label: 'Rates' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="brand" aria-label="A3 Studios home">
            <Logo />
          </Link>

          <nav className="nav-links">
            {primary.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav-link ${l.ai ? 'nav-link--ai' : ''} ${isActive ? 'active' : ''}`}
              >
                {l.ai && <Sparkles />}
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <Link to="/films" className="icon-btn desktop-only" aria-label="Browse films">
              <Search />
            </Link>
            <Link to="/rates" className="btn btn-ghost btn-sm desktop-only">Hire Us</Link>
            <Link to="/films" className="btn btn-gold btn-sm desktop-only">Watch Now</Link>
            <button className="icon-btn nav-toggle" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <aside className="drawer" role="dialog" aria-label="Menu">
            <div className="drawer-head">
              <Logo />
              <button className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
                <Close />
              </button>
            </div>
            {drawerLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `${l.ai ? 'drawer-ai' : ''} ${isActive ? 'active' : ''}`}
              >
                {l.ai && <Sparkles />} {l.label}
              </NavLink>
            ))}
            <Link to="/rates" className="btn btn-ghost" style={{ marginTop: 18 }}>Hire Us</Link>
            <Link to="/films" className="btn btn-gold" style={{ marginTop: 12 }}>Watch Now</Link>
          </aside>
        </>
      )}
    </>
  );
}
