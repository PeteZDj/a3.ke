import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Close } from './Icons';

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.body.classList.toggle('announce-open', open);
    return () => document.body.classList.remove('announce-open');
  }, [open]);
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
