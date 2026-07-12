import type { ComponentType, SVGProps } from 'react';
import { Reveal } from './Reveal';

export interface StatItem {
  value: string;
  label: string;
}

export function StatsBar({ items }: { items: StatItem[] }) {
  return (
    <Reveal className="pstats">
      {items.map((s) => (
        <div className="pstat" key={s.label}>
          <div className="pstat-num">{s.value}</div>
          <div className="pstat-label">{s.label}</div>
        </div>
      ))}
    </Reveal>
  );
}

export interface Capability {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  copy: string;
}

export function Capabilities({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: Capability[];
}) {
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal>
          <div className="section-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div className="kicker">{kicker}</div>
            <h2 style={{ fontSize: 'clamp(22px,3.2vw,34px)' }}>{title}</h2>
          </div>
        </Reveal>
        <Reveal className="cap-grid">
          {items.map((c) => (
            <div className="cap-card" key={c.title}>
              <span className="cap-ico"><c.icon /></span>
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
