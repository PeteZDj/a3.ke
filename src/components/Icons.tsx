// Lightweight inline icon set — no external dependency.
import type { SVGProps } from 'react';

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const Play = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M7 5.5v13a1 1 0 0 0 1.52.86l10.5-6.5a1 1 0 0 0 0-1.72L8.52 4.64A1 1 0 0 0 7 5.5Z" /></svg>
);
export const Info = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 7.5h.01" /></svg>
);
export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Search = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>
);
export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
);
export const Youtube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></svg>
);
export const Twitter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 4l7 9.5L4.5 20H7l5-5.5L16 20h4l-7.4-10L19.5 4H17l-4.6 5L9 4H4Z" fill="currentColor" stroke="none" /></svg>
);
export const Linkedin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 12v5" /></svg>
);
export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19l1-5.8L3.5 9.2l5.9-.9L12 3Z" /></svg>
);
export const Camera = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="3.5" /></svg>
);
export const Film = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" /></svg>
);
export const Award = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" /></svg>
);
export const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 20a5.5 5.5 0 0 0-3-4.9" /></svg>
);
export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" /></svg>
);
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7" /></svg>
);
export const Clapper = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" /><path d="M4 9 5.4 4.6l3.4.9-1.4 3.5M8.8 5.5l3.4.9-1.4 3.5M12.2 6.4l3.4.9-1.4 3.5M15.6 7.3l3.4.9L20 9" /></svg>
);
export const Volume = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" /></svg>
);
export const Layers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5M3 17l9 5 9-5" /></svg>
);
export const Quote = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M9 6c-3 1.2-5 4-5 7.5V19h6v-6H6.6C7 10.6 8.2 8.9 10 8L9 6Zm10 0c-3 1.2-5 4-5 7.5V19h6v-6h-3.4c.4-2.4 1.6-4.1 3.4-5L19 6Z" /></svg>
);
export const Ticket = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a2 2 0 0 0 0 4v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a2 2 0 0 0 0-4V7Z" /><path d="M14 6v12" strokeDasharray="2 2" /></svg>
);
export const Download = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 4v11M8 11l4 4 4-4M5 20h14" /></svg>
);
export const Lock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);
export const Sparkles = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2.5 13.7 8 19 9.7 13.7 11.4 12 17l-1.7-5.6L5 9.7 10.3 8 12 2.5Z" /><path d="M19 14l.8 2.6L22 17.5l-2.2.9L19 21l-.8-2.6L16 17.5l2.2-.9L19 14Z" /><path d="M5.5 13l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6.6-2Z" /></svg>
);
