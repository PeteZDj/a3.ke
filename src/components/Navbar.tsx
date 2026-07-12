import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, Close, Sparkles, LogOut } from './Icons';
import { Logo } from './Logo';
import { NotificationsBell, AccountButton } from './NavAccount';
import { SearchModal } from './SearchModal';
import { useAuth } from '../context/AuthContext';

interface NavItem { to: string; label: string; end?: boolean; ai?: boolean }

const primary: NavItem[] = [
  { to: '/films', label: 'Films' },
  { to: '/animation', label: 'Animation', ai: true },
  { to: '/series', label: 'Series & Docs' },
  { to: '/commercial', label: 'Commercial' },
  { to: '/sport', label: 'Sport' },
  { to: '/about', label: 'Studio' },
  { to: '/blog', label: 'Journal' },
];

// The drawer (mobile / tablet) lists everything.
const drawerLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/films', label: 'Films' },
  { to: '/animation', label: 'Animation', ai: true },
  { to: '/ai-films', label: 'AI Originals', ai: true },
  { to: '/series', label: 'Series & Docs' },
  { to: '/commercial', label: 'Commercial' },
  { to: '/sport', label: 'Sport' },
  { to: '/people', label: 'People' },
  { to: '/about', label: 'Studio' },
  { to: '/blog', label: 'Journal' },
  { to: '/rates', label: 'Rates' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const loc = useLocation();
  const { user, signOut, openAuth } = useAuth();

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
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search />
            </button>
            <NotificationsBell />
            <Link to="/rates" className="btn btn-gold btn-sm desktop-only">Hire Us</Link>
            <AccountButton />
            <button className="icon-btn nav-toggle" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

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
            <button className="btn btn-outline" style={{ marginTop: 18 }} onClick={() => { setOpen(false); setSearchOpen(true); }}>
              <Search style={{ width: 16, height: 16 }} /> Search
            </button>
            <Link to="/rates" className="btn btn-gold" style={{ marginTop: 12 }}>Hire Us</Link>
            {user ? (
              <div className="drawer-acct">
                <div className="nav-avatar">{user.name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()}</div>
                <div className="drawer-acct-info">
                  <strong>{user.name}</strong>
                  <button className="linkish" onClick={() => { setOpen(false); signOut(); }}><LogOut style={{ width: 14, height: 14, verticalAlign: '-2px' }} /> Sign out</button>
                </div>
              </div>
            ) : (
              <button className="btn btn-outline" style={{ marginTop: 12 }} onClick={() => { setOpen(false); openAuth('signin'); }}>Sign in</button>
            )}
          </aside>
        </>
      )}
    </>
  );
}
