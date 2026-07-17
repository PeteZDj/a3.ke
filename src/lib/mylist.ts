// Lightweight "My List" (wishlist) persistence in localStorage.
// Kept intentionally dependency-free and synchronous so toggling from a card
// never blocks the main thread or triggers app-wide re-renders.

const KEY = 'a3-mylist';
const EVENT = 'a3-mylist-change';

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === 'string') : [];
  } catch {
    return [];
  }
}

function write(list: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable — ignore */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { list } }));
  }
}

export function getMyList(): string[] {
  return read();
}

export function inMyList(slug: string): boolean {
  return read().includes(slug);
}

/** Adds or removes a slug. Returns the new membership state. */
export function toggleMyList(slug: string): boolean {
  const list = read();
  const idx = list.indexOf(slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    write(list);
    return false;
  }
  list.push(slug);
  write(list);
  return true;
}

export function onMyListChange(cb: () => void): () => void {
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}
