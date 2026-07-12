import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

// ============================================================================
//  Lightweight client-side accounts + notifications for a3.ke.
//  No backend — everything persists in localStorage. This powers site sign-up,
//  the notifications bell, and content alerts (premieres, funding, receipts).
// ============================================================================

export type NotificationKind = 'welcome' | 'premiere' | 'funding' | 'account' | 'receipt' | 'system';

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  time: number;       // epoch ms
  read: boolean;
  kind: NotificationKind;
  href?: string;      // optional in-app link
}

export interface User {
  name: string;
  email: string;
  joined: number;
}

type AuthMode = 'signup' | 'signin';

interface AuthValue {
  user: User | null;
  notifications: AppNotification[];
  unread: number;
  signUp: (name: string, email: string) => void;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
  notify: (n: Omit<AppNotification, 'id' | 'time' | 'read'> & { read?: boolean }) => void;
  markAllRead: () => void;
  dismiss: (id: string) => void;
  clearAll: () => void;
  // modal control
  authOpen: boolean;
  authMode: AuthMode;
  openAuth: (mode?: AuthMode) => void;
  closeAuth: () => void;
}

const USER_KEY = 'a3_user';
const NOTIF_KEY = 'a3_notifications';

const AuthContext = createContext<AuthValue | null>(null);

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
}
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

/** Content alerts seeded when a visitor first signs up. */
function welcomePack(name: string): AppNotification[] {
  const now = Date.now();
  const first = name.split(' ')[0] || 'there';
  return [
    { id: uid(), time: now, read: false, kind: 'welcome',
      title: `Welcome to A3, ${first}!`,
      body: 'Your account is ready — you now get first access to premieres, trailers and Film-Club drops.' },
    { id: uid(), time: now - 3_600_000, read: false, kind: 'premiere', href: '/film/neon-savannah',
      title: 'New AI Original: Neon Savannah',
      body: 'A3\u2019s first fully AI-animated short is now streaming.' },
    { id: uid(), time: now - 86_400_000, read: false, kind: 'funding', href: '/film/harambee',
      title: 'Harambee is closing in on its funding goal',
      body: 'The 1963 independence epic is 77% funded on Kuza Film Club.' },
  ];
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => load<User | null>(USER_KEY, null));
  const [notifications, setNotifications] = useState<AppNotification[]>(() => load<AppNotification[]>(NOTIF_KEY, []));
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('signup');

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  useEffect(() => {
    localStorage.setItem(NOTIF_KEY, JSON.stringify(notifications.slice(0, 40)));
  }, [notifications]);

  const notify: AuthValue['notify'] = (n) =>
    setNotifications((prev) => [{ id: uid(), time: Date.now(), read: n.read ?? false, ...n }, ...prev].slice(0, 40));

  const signUp: AuthValue['signUp'] = (name, email) => {
    setUser({ name, email, joined: Date.now() });
    setNotifications((prev) => (prev.length ? prev : welcomePack(name)));
    setAuthOpen(false);
  };

  const signIn: AuthValue['signIn'] = (email, name) => {
    const display = name || email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    setUser({ name: display, email, joined: Date.now() });
    setNotifications((prev) => (prev.length ? prev : welcomePack(display)));
    setAuthOpen(false);
  };

  const signOut = () => { setUser(null); };
  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const dismiss = (id: string) => setNotifications((prev) => prev.filter((n) => n.id !== id));
  const clearAll = () => setNotifications([]);
  const openAuth = (mode: AuthMode = 'signup') => { setAuthMode(mode); setAuthOpen(true); };
  const closeAuth = () => setAuthOpen(false);

  const unread = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const value: AuthValue = {
    user, notifications, unread,
    signUp, signIn, signOut, notify, markAllRead, dismiss, clearAll,
    authOpen, authMode, openAuth, closeAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
