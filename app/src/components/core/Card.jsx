import React from 'react';

/**
 * Card — base surface container. White by default; `tint` (lemon wash),
 * `leaf`, or `ink` (dark immersive) variants. `interactive` adds hover lift.
 */
export function Card({ children, variant = 'plain', interactive = false, padding = 20, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    plain: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border)' },
    tint:  { background: 'var(--lemon-100)', color: 'var(--ink-900)', border: '1px solid var(--lemon-300)' },
    leaf:  { background: 'var(--leaf-100)', color: 'var(--ink-900)', border: '1px solid var(--leaf-300)' },
    ink:   { background: 'var(--ink-900)', color: 'var(--cream-50)', border: '1px solid transparent' },
  };
  const v = variants[variant] || variants.plain;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-lg)', padding,
        boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover && interactive ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...v, ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
