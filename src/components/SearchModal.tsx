import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { films } from '../data/films';
import { people } from '../data/people';
import { blogPosts } from '../data/blog';
import { PORTRAIT, POSTER } from '../types';
import { Search, Close, Play, User as UserIcon, Film as FilmIcon } from './Icons';

type Result =
  | { type: 'film'; slug: string; title: string; sub: string; img: string }
  | { type: 'person'; slug: string; title: string; sub: string; img: string }
  | { type: 'post'; slug: string; title: string; sub: string; img: string };

function search(q: string): Result[] {
  const n = q.trim().toLowerCase();
  if (!n) return [];
  const out: Result[] = [];

  for (const f of films) {
    if (`${f.title} ${f.genres.join(' ')} ${f.director} ${f.kind} ${f.cast.join(' ')}`.toLowerCase().includes(n)) {
      out.push({ type: 'film', slug: f.slug, title: f.title, sub: `${f.ai ? 'AI Original' : f.kind} · ${f.year}`, img: POSTER(f.slug) });
    }
  }
  for (const p of people) {
    if (`${p.name} ${p.role} ${p.tags.join(' ')} ${p.based}`.toLowerCase().includes(n)) {
      out.push({ type: 'person', slug: p.slug, title: p.name, sub: p.role, img: PORTRAIT(p.slug) });
    }
  }
  for (const b of blogPosts) {
    if (`${b.title} ${b.excerpt} ${b.tags.join(' ')} ${b.author} ${b.category}`.toLowerCase().includes(n)) {
      out.push({ type: 'post', slug: b.slug, title: b.title, sub: `Journal · ${b.category}`, img: b.cover });
    }
  }
  return out.slice(0, 12);
}

const hrefFor = (r: Result) =>
  r.type === 'film' ? `/film/${r.slug}` : r.type === 'person' ? `/person/${r.slug}` : `/blog/${r.slug}`;

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();
  const results = useMemo(() => search(q), [q]);

  useEffect(() => {
    if (!open) { setQ(''); return; }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; clearTimeout(t); };
  }, [open, onClose]);

  if (!open) return null;

  const pick = (r: Result) => { onClose(); nav(hrefFor(r)); };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) pick(results[0]);
  };

  const suggestions = ['Nairobi', 'AI', 'thriller', 'Pete Njagi', 'animation', 'funding'];

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Search A3">
        <form className="search-bar" onSubmit={submit}>
          <Search />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search films, people, journal…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search"
          />
          <button type="button" className="search-close" aria-label="Close search" onClick={onClose}><Close /></button>
        </form>

        <div className="search-results">
          {!q.trim() && (
            <div className="search-hint">
              <p>Try searching for a title, a filmmaker or a topic.</p>
              <div className="search-suggests">
                {suggestions.map((s) => (
                  <button key={s} className="chip" onClick={() => setQ(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {q.trim() && results.length === 0 && (
            <div className="search-empty">No matches for &ldquo;{q}&rdquo;. Try another term.</div>
          )}

          {results.map((r) => (
            <button className="search-result" key={`${r.type}-${r.slug}`} onClick={() => pick(r)}>
              <span className={`search-thumb search-thumb--${r.type}`}>
                <img
                  src={r.img}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.endsWith('.webp')) img.src = img.src.replace('.webp', '.svg');
                  }}
                />
              </span>
              <span className="search-result-txt">
                <span className="search-result-title">{r.title}</span>
                <span className="search-result-sub">{r.sub}</span>
              </span>
              <span className="search-result-ico">
                {r.type === 'film' ? <Play /> : r.type === 'person' ? <UserIcon /> : <FilmIcon />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
