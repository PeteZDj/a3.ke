import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost, relatedPosts, formatPostDate } from '../data/blog';
import { personByName } from '../data/people';
import { PORTRAIT } from '../types';
import { Reveal } from '../components/Reveal';
import { ArrowRight, Quote } from '../components/Icons';

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  useEffect(() => {
    document.title = post ? `${post.title} — A3 Journal` : 'Not found — A3 Studios';
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="empty" style={{ paddingTop: 'calc(var(--nav-h) + 120px)' }}>
        <h3>We couldn&rsquo;t find that story</h3>
        <p style={{ marginBottom: 20 }}>It may have moved or been unpublished.</p>
        <Link className="btn btn-gold" to="/blog">Back to the Journal</Link>
      </div>
    );
  }

  const author = personByName(post.author);
  const related = relatedPosts(post);
  const initials = post.author.split(' ').map((n) => n[0]).slice(0, 2).join('');

  return (
    <>
      <article className="article">
        <header className="article-hero">
          <div className="container article-hero-inner">
            <Link to="/blog" className="article-back">← The Journal</Link>
            <span className="post-cat article-cat">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lede">{post.excerpt}</p>
            <div className="post-by article-by">
              <span className="post-avatar">
                {author ? <img src={PORTRAIT(author.slug)} alt={post.author} /> : <span>{initials}</span>}
              </span>
              <span className="post-by-txt">
                {author
                  ? <Link className="post-by-name" to={`/person/${author.slug}`}>{post.author}</Link>
                  : <span className="post-by-name">{post.author}</span>}
                <span className="post-by-meta">{post.authorRole} · {formatPostDate(post.date)} · {post.readMins} min read</span>
              </span>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="article-cover">
            <img src={post.cover} alt={post.title} />
          </div>
        </div>

        <div className="container">
          <div className="article-body">
            {post.body.map((para, i) => (
              <div key={i}>
                <Reveal as="p">{para}</Reveal>
                {post.pullquote && i === 1 && (
                  <Reveal as="blockquote" className="article-quote">
                    <Quote className="article-quote-mark" />
                    <span>{post.pullquote}</span>
                  </Reveal>
                )}
              </div>
            ))}

            <div className="article-tags">
              {post.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-tight" style={{ paddingBottom: 64 }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: 18 }}>
              <h2>More from the Journal</h2>
              <Link className="link" to="/blog">All posts <ArrowRight style={{ width: 16, height: 16 }} /></Link>
            </div>
            <Reveal className="post-grid">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card">
                  <div className="post-card-media">
                    <img src={p.cover} alt={p.title} loading="lazy" />
                    <span className="post-cat">{p.category}</span>
                  </div>
                  <div className="post-card-body">
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
