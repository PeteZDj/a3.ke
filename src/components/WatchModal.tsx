import { useEffect, useState } from 'react';
import type { Film } from '../types';
import { Backdrop } from './Backdrop';
import { Play, Close, Mail, Lock, Check } from './Icons';
import { filmAccess } from '../data/filmMeta';

const KEY = 'a3-unlocked';
function getUnlocked(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
function addUnlocked(slug: string) {
  const s = new Set(getUnlocked());
  s.add(slug);
  localStorage.setItem(KEY, JSON.stringify([...s]));
}
const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

type Step = 'gate' | 'pay' | 'unlocked' | 'notified';

export function WatchModal({ film, onClose }: { film: Film | null; onClose: () => void }) {
  const [step, setStep] = useState<Step>('gate');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!film) return;
    setErr(''); setBusy(false); setEmail('');
    setStep(getUnlocked().includes(film.slug) ? 'unlocked' : 'gate');
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [film, onClose]);

  if (!film) return null;
  const access = filmAccess(film);
  const released = film.status === 'Now Streaming';

  const unlock = () => { addUnlocked(film.slug); setStep('unlocked'); };

  const submitFree = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail(email)) { setErr('Please enter a valid email.'); return; }
    setBusy(true);
    setTimeout(() => { setBusy(false); released ? unlock() : setStep('notified'); }, 650);
  };
  const submitPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail(email)) { setErr('Please enter a valid email for your receipt.'); return; }
    setBusy(true);
    setTimeout(() => { setBusy(false); unlock(); }, 900);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="watch-modal" onClick={(e) => e.stopPropagation()}>
        <div className="watch-media">
          <Backdrop film={film} alt={`${film.title}`} />
          <div className="watch-media-scrim" />
          <button className="modal-close" aria-label="Close" onClick={onClose}><Close /></button>
          <div className="watch-media-cap">
            <div className="kicker">{film.ai ? 'A3 AI Original' : `A3 ${film.kind}`}</div>
            <h3>{film.title}</h3>
            <div className="watch-media-meta">
              <span>{film.year}</span><span className="pip" />
              <span>{film.rating}</span><span className="pip" />
              <span>{film.runtime}</span>
            </div>
          </div>
        </div>

        <div className="watch-body">
          {step === 'gate' && access.free && (
            <form onSubmit={submitFree} className="watch-form">
              <h4>{released ? 'Watch free' : 'Get notified'}</h4>
              <p className="watch-sub">
                {released
                  ? 'This title streams free on A3. Enter your email and start watching — no card required.'
                  : `${film.title} isn't out yet. Leave your email and we'll tell you the moment it drops.`}
              </p>
              <label className="watch-field">
                <Mail />
                <input type="email" placeholder="you@email.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); setErr(''); }} autoFocus />
              </label>
              {err && <div className="watch-err">{err}</div>}
              <button className="btn btn-gold watch-cta" disabled={busy} type="submit">
                {busy ? 'One sec…' : released ? <><Play /> Watch now — free</> : <><Mail /> Notify me</>}
              </button>
              <div className="watch-fine">We'll only email you about A3 titles. Unsubscribe anytime.</div>
            </form>
          )}

          {step === 'gate' && !access.free && (
            <div className="watch-form">
              <h4>Rent {film.title}</h4>
              <p className="watch-sub">Stream in HD for 48 hours. One-off rental — yours to watch as many times as you like in the window.</p>
              <div className="watch-price">
                <span className="watch-price-amt">${access.price?.toFixed(2)}</span>
                <span className="watch-price-note">48-hour HD rental</span>
              </div>
              <button className="btn btn-gold watch-cta" onClick={() => setStep('pay')}>
                <Lock /> Continue to checkout
              </button>
              <div className="watch-fine">Secure checkout. Cancel anytime before you press play.</div>
            </div>
          )}

          {step === 'pay' && (
            <form onSubmit={submitPay} className="watch-form">
              <h4>Checkout · ${access.price?.toFixed(2)}</h4>
              <label className="watch-field">
                <Mail />
                <input type="email" placeholder="Email for receipt" value={email}
                  onChange={(e) => { setEmail(e.target.value); setErr(''); }} autoFocus />
              </label>
              <label className="watch-field">
                <span className="watch-ico">💳</span>
                <input inputMode="numeric" placeholder="Card number" defaultValue="4242 4242 4242 4242" />
              </label>
              <div className="watch-row2">
                <label className="watch-field"><input placeholder="MM / YY" defaultValue="12 / 29" /></label>
                <label className="watch-field"><input placeholder="CVC" defaultValue="123" /></label>
              </div>
              {err && <div className="watch-err">{err}</div>}
              <button className="btn btn-gold watch-cta" disabled={busy} type="submit">
                {busy ? 'Processing…' : <><Lock /> Pay ${access.price?.toFixed(2)} &amp; watch</>}
              </button>
              <div className="watch-fine">Demo checkout — no card is charged.</div>
            </form>
          )}

          {step === 'unlocked' && (
            <div className="watch-player">
              <button className="watch-play" aria-label={`Play ${film.title}`}><Play /></button>
              <div className="watch-player-txt">
                <div className="watch-badge"><Check /> {access.free ? 'Unlocked' : 'Rental active'}</div>
                <h4>Now playing</h4>
                <p className="watch-sub">{film.trailerNote ?? 'Enjoy the film. Full streaming playback is enabled on the A3 apps.'}</p>
              </div>
            </div>
          )}

          {step === 'notified' && (
            <div className="watch-player">
              <div className="watch-badge big"><Check /></div>
              <div className="watch-player-txt">
                <h4>You're on the list</h4>
                <p className="watch-sub">We'll email {email} the moment {film.title} premieres on A3.</p>
                <button className="btn btn-outline" onClick={onClose}>Done</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
