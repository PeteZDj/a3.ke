import { Reveal } from './Reveal';

export interface GalleryImage { src: string; caption?: string; }

/** A cinematic photo gallery (first tile spans wide). */
export function StockGallery({
  kicker,
  title,
  images,
  note,
}: {
  kicker?: string;
  title?: string;
  images: GalleryImage[];
  note?: string;
}) {
  if (!images.length) return null;
  return (
    <section className="section-tight">
      <div className="container">
        {(kicker || title) && (
          <Reveal>
            <div className="section-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
              {kicker && <div className="kicker">{kicker}</div>}
              {title && <h2 style={{ fontSize: 'clamp(22px,3.2vw,34px)' }}>{title}</h2>}
            </div>
          </Reveal>
        )}
        <Reveal className="stock-gallery">
          {images.map((im, i) => (
            <figure className={`stock-item ${i === 0 ? 'stock-item--wide' : ''}`} key={im.src}>
              <img src={im.src} alt={im.caption ?? ''} loading="lazy" />
              {im.caption && <figcaption>{im.caption}</figcaption>}
            </figure>
          ))}
        </Reveal>
        {note && <p className="fd-bts-note" style={{ marginTop: 14 }}>{note}</p>}
      </div>
    </section>
  );
}
