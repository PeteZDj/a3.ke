import { useEffect } from 'react';
import type { Film } from '../types';
import { Backdrop } from './Backdrop';
import { Play, Close } from './Icons';

export function TrailerModal({ film, onClose }: { film: Film | null; onClose: () => void }) {
  useEffect(() => {
    if (!film) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-bg">
          <Backdrop film={film} />
        </div>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <Close />
        </button>
        <div className="modal-body">
          <button className="modal-play" aria-label="Play trailer">
            <Play />
          </button>
          <h3>{film.title}</h3>
          <p>{film.trailerNote ?? 'Official trailer premieres soon on A3.'}</p>
        </div>
      </div>
    </div>
  );
}
