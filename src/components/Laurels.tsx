// Festival laurel strip — the kind of credibility marks a world-class studio shows.
function Laurel({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="laurel">
      <svg viewBox="0 0 40 56" aria-hidden="true" className="laurel-leaf">
        <path d="M20 4 C8 14 8 40 18 52" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12 C9 14 7 18 7 22 C12 21 15 18 16 12 Z M14 20 C7 22 5 26 6 30 C11 28 13 25 14 20 Z M13 28 C7 31 6 35 7 39 C12 36 13 33 13 28 Z" fill="currentColor" opacity="0.85" />
      </svg>
      <div className="laurel-txt">
        <span className="laurel-top">{top}</span>
        <span className="laurel-bottom">{bottom}</span>
      </div>
      <svg viewBox="0 0 40 56" aria-hidden="true" className="laurel-leaf flip">
        <path d="M20 4 C8 14 8 40 18 52" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12 C9 14 7 18 7 22 C12 21 15 18 16 12 Z M14 20 C7 22 5 26 6 30 C11 28 13 25 14 20 Z M13 28 C7 31 6 35 7 39 C12 36 13 33 13 28 Z" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  );
}

const items = [
  { top: 'Official Selection', bottom: 'Toronto 2025' },
  { top: 'Best Feature', bottom: 'FESPACO' },
  { top: 'Audience Award', bottom: 'Durban Intl.' },
  { top: 'In Competition', bottom: 'Cannes 2025' },
  { top: 'Winner', bottom: 'Kalasha Awards' },
];

export function Laurels() {
  return (
    <div className="laurels">
      {items.map((i) => (
        <Laurel key={i.bottom} top={i.top} bottom={i.bottom} />
      ))}
    </div>
  );
}
