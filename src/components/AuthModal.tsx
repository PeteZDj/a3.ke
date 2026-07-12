import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Close, Mail, Lock, User as UserIcon, Check, Sparkles } from './Icons';

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export function AuthModal() {
  const { authOpen, authMode, closeAuth, signUp, signIn } = useAuth();
  const [mode, setMode] = useState(authMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (authOpen) { setMode(authMode); setErr(''); setBusy(false); setName(''); setEmail(''); setPass(''); }
  }, [authOpen, authMode]);

  useEffect(() => {
    if (!authOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeAuth();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup' && name.trim().length < 2) { setErr('Please enter your name.'); return; }
    if (!validEmail(email)) { setErr('Please enter a valid email.'); return; }
    if (pass.length < 6) { setErr('Password must be at least 6 characters.'); return; }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      if (mode === 'signup') signUp(name.trim(), email.trim());
      else signIn(email.trim());
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={closeAuth}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeAuth}><Close /></button>

        <div className="auth-head">
          <div className="auth-badge"><Sparkles /></div>
          <h3>{mode === 'signup' ? 'Create your A3 account' : 'Welcome back'}</h3>
          <p>{mode === 'signup'
            ? 'Save your list, unlock free titles and get notified about premieres & Film-Club drops.'
            : 'Sign in to pick up where you left off.'}</p>
        </div>

        <form className="auth-form" onSubmit={submit}>
          {mode === 'signup' && (
            <label className="watch-field">
              <UserIcon />
              <input placeholder="Full name" value={name}
                onChange={(e) => { setName(e.target.value); setErr(''); }} autoFocus />
            </label>
          )}
          <label className="watch-field">
            <Mail />
            <input type="email" placeholder="you@email.com" value={email}
              onChange={(e) => { setEmail(e.target.value); setErr(''); }} autoFocus={mode === 'signin'} />
          </label>
          <label className="watch-field">
            <Lock />
            <input type="password" placeholder="Password" value={pass}
              onChange={(e) => { setPass(e.target.value); setErr(''); }} />
          </label>
          {err && <div className="watch-err">{err}</div>}
          <button className="btn btn-gold auth-cta" disabled={busy} type="submit">
            {busy ? 'One sec…' : mode === 'signup' ? <><Check /> Create account</> : <><Check /> Sign in</>}
          </button>
        </form>

        <div className="auth-alt">
          {mode === 'signup' ? (
            <>Already have an account?{' '}
              <button className="linkish" onClick={() => { setMode('signin'); setErr(''); }}>Sign in</button></>
          ) : (
            <>New to A3?{' '}
              <button className="linkish" onClick={() => { setMode('signup'); setErr(''); }}>Create an account</button></>
          )}
        </div>
        <div className="auth-fine">Demo accounts are stored only in your browser. No password is ever sent anywhere.</div>
      </div>
    </div>
  );
}
