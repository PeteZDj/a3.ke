import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories, postsByCategory, formatPostDate } from '../data/blog';
import { personByName } from '../data/people';
import { PORTRAIT } from '../types';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from '../components/Icons';

function AuthorBadge({ name, role, date, mins }: { name: string; role: string; date: string; mins: number }) {
  const p = personByName(name);
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('');
  return (
    <div className="post-by">
      <span className="post-avatar">
        {p ? <img src={PORTRAIT(p.slug)} alt={name} loading="lazy" /> : <span>{initials}</span>}
      </span>
      <span className="post-by-txt">
        <span className="post-by-name">{name}</span>
        <span className="post-by-meta">{role} · {formatPostDate(date)} · {mins} min read</span>
      </span>
    </div>
  );
}

export default function Blog() {
  const [cat, setCat] = useState<string>('All');

  useEffect(() => {
    document.title = 'Journal — A3 Studios';
  }, []);

  const featured = blogPosts[0];
  const list = useMemo(() => postsByCategory(cat).filter((p) => cat !== 'All' || p.slug !== featured.slug), [cat, featured.slug]);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <div className="kicker">The A3 Journal</div>
          <h1>Notes from the studio</h1>
          <p>Craft, AI experiments, on-set diaries and the business of making film in Kenya — written by the A3 collective.</p>
        </div>
      </header>

      {/* featured post */}
      <section className="section-tight" style={{ paddingTop: 'clamp(20px,3vw,32px)' }}>
        <div className="container">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="post-feature">
              <div className="post-feature-media">
                <img src={featured.cover} alt={featured.title} loading="eager" />
                <span className="post-cat">{featured.category}</span>
              </div>
              <div className="post-feature-body">
                <div className="kicker">Featured</div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <AuthorBadge name={featured.author} role={featured.authorRole} date={featured.date} mins={featured.readMins} />
                <span className="post-feature-more">Read the story <ArrowRight style={{ width: 17, height: 17 }} /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* category filter */}
      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="filters">
            {blogCategories.map((c) => (
              <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>

          <Reveal className="post-grid">
            {list.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card">
                <div className="post-card-media">
                  <img src={p.cover} alt={p.title} loading="lazy" />
                  <span className="post-cat">{p.category}</span>
                </div>
                <div className="post-card-body">
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <AuthorBadge name={p.author} role={p.authorRole} date={p.date} mins={p.readMins} />
                </div>
              </Link>
            ))}
          </Reveal>

          {list.length === 0 && (
            <div className="empty"><h3>No posts in this category yet</h3><p>Check back soon.</p></div>
          )}
        </div>
      </section>
    </>
  );
}
