import { Link } from 'react-router-dom';
import { personByName } from '../data/people';
import { PORTRAIT } from '../types';

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0]).join('').toUpperCase();
}
function hue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}

export function PersonAvatar({ name, className }: { name: string; className?: string }) {
  const p = personByName(name);
  if (p) {
    return <img className={`person-avatar photo ${className ?? ''}`} src={PORTRAIT(p.slug)} alt={name} loading="lazy" />;
  }
  const h = hue(name);
  return (
    <span
      className={`person-avatar ${className ?? ''}`}
      style={{ background: `linear-gradient(150deg, hsl(${h} 60% 42%), hsl(${(h + 40) % 360} 55% 22%))` }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  );
}

/** A cast/crew chip that links to the person's page when we have one. */
export function PersonChip({ name, role }: { name: string; role: string }) {
  const p = personByName(name);
  const inner = (
    <>
      <PersonAvatar name={name} />
      <div className="person-txt">
        <div className="person-name">{name}</div>
        <div className="person-role">{role}</div>
      </div>
    </>
  );
  return p
    ? <Link to={`/person/${p.slug}`} className="person person-link">{inner}</Link>
    : <div className="person">{inner}</div>;
}
