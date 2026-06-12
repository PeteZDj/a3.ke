// A3 Studios brand logo. A hexagonal "film frame" mark with a play glyph,
// paired with the A3 wordmark. variant="mark" renders just the icon.
export function Logo({
  variant = 'full',
  className,
}: {
  variant?: 'full' | 'mark';
  className?: string;
}) {
  return (
    <span className={`logo ${className ?? ''}`} aria-label="A3 Studios">
      <svg className="logo-mark" viewBox="0 0 48 48" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="a3logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5CD6B" />
            <stop offset="1" stopColor="#D4202E" />
          </linearGradient>
        </defs>
        <path
          d="M44 24 L34 41.32 L14 41.32 L4 24 L14 6.68 L34 6.68 Z"
          fill="none"
          stroke="url(#a3logo)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M20 16.5 L33 24 L20 31.5 Z" fill="url(#a3logo)" />
      </svg>
      <span className="logo-type">
        <span className="logo-a3">A3</span>
        {variant === 'full' && <span className="logo-word">Studios</span>}
      </span>
    </span>
  );
}
