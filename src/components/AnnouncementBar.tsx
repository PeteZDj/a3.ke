import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Close } from './Icons';

/** Promo band — rendered inline below the hero (not a fixed top bar). */
export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="announce">
      <Link to="/film/the-rift" className="announce-msg">
        <span className="announce-dot" />
        <strong>Now Streaming</strong>
        <span className="announce-sep">·</span>
        <span>The Rift — an epic new original from A3</span>
        <ArrowRight className="announce-arrow" />
      </Link>
      <button className="announce-close" aria-label="Dismiss" onClick={() => setOpen(false)}>
        <Close />
      </button>
    </div>
  );
}
