import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, type AppNotification } from '../context/AuthContext';
import { Bell, LogOut, Check, Sparkles, Ticket, Wallet } from './Icons';

function timeAgo(t: number): string {
  const s = Math.round((Date.now() - t) / 1000);
  if (s < 60) return 'just now';
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.round(h / 24);
  return d === 1 ? 'yesterday' : `${d}d ago`;
}

const kindIcon: Record<AppNotification['kind'], React.ComponentType<{ className?: string }>> = {
  welcome: Sparkles, premiere: Ticket, funding: Wallet, account: Check, receipt: Ticket, system: Bell,
};

export function NotificationsBell() {
  const { notifications, unread, markAllRead, dismiss, user, openAuth } = useAuth();
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && unread) setTimeout(markAllRead, 1200);
  };

  const goto = (n: AppNotification) => {
    setOpen(false);
    if (n.href) nav(n.href);
  };

  return (
    <div className="nav-pop-wrap">
      <button className="icon-btn nav-bell" aria-label="Notifications" onClick={toggle}>
        <Bell />
        {unread > 0 && <span className="nav-bell-dot">{unread > 9 ? '9+' : unread}</span>}
      </button>

      {open && (
        <>
          <div className="nav-pop-veil" onClick={() => setOpen(false)} />
          <div className="nav-pop" role="dialog" aria-label="Notifications">
            <div className="nav-pop-head">
              <strong>Notifications</strong>
              {notifications.length > 0 && <button className="linkish" onClick={markAllRead}>Mark all read</button>}
            </div>

            {notifications.length === 0 ? (
              <div className="nav-pop-empty">
                <Bell />
                <p>{user ? 'You\u2019re all caught up.' : 'Sign up to get premiere & Film-Club alerts.'}</p>
                {!user && <button className="btn btn-gold btn-sm" onClick={() => { setOpen(false); openAuth('signup'); }}>Create account</button>}
              </div>
            ) : (
              <ul className="nav-pop-list">
                {notifications.map((n) => {
                  const Ico = kindIcon[n.kind] ?? Bell;
                  return (
                    <li key={n.id} className={`nav-notif ${n.read ? '' : 'unread'}`}>
                      <button className="nav-notif-main" onClick={() => goto(n)}>
                        <span className={`nav-notif-ico k-${n.kind}`}><Ico /></span>
                        <span className="nav-notif-txt">
                          <span className="nav-notif-title">{n.title}</span>
                          <span className="nav-notif-body">{n.body}</span>
                          <span className="nav-notif-time">{timeAgo(n.time)}</span>
                        </span>
                      </button>
                      <button className="nav-notif-x" aria-label="Dismiss" onClick={() => dismiss(n.id)}>×</button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function AccountButton() {
  const { user, signOut, openAuth } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <>
        <button className="btn btn-ghost btn-sm desktop-only" onClick={() => openAuth('signin')}>Sign in</button>
        <button className="btn btn-gold btn-sm desktop-only" onClick={() => openAuth('signup')}>Sign up</button>
      </>
    );
  }

  const initials = user.name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className="nav-pop-wrap">
      <button className="nav-avatar" aria-label="Account" onClick={() => setOpen((o) => !o)}>{initials}</button>
      {open && (
        <>
          <div className="nav-pop-veil" onClick={() => setOpen(false)} />
          <div className="nav-pop nav-pop--sm" role="dialog" aria-label="Account">
            <div className="nav-acct">
              <div className="nav-avatar lg">{initials}</div>
              <div className="nav-acct-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>
            </div>
            <div className="nav-acct-note">Member since {new Date(user.joined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
            <button className="nav-acct-btn" onClick={() => { setOpen(false); signOut(); }}><LogOut /> Sign out</button>
          </div>
        </>
      )}
    </div>
  );
}
