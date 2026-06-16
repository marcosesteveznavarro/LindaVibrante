import React from 'react';

/**
 * Chip — selectable filter pill for service categories (Facial, Cuerpo, Pestañas…).
 * Controlled via `selected`. Tap toggles in the parent.
 */
export function Chip({ children, selected = false, icon = null, onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        height: 40, minHeight: 40, padding: '0 16px',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, lineHeight: 1,
        transition: 'all var(--dur-fast) var(--ease-out)',
        background: selected ? 'var(--ink-900)' : (hover ? 'var(--cream-100)' : 'var(--white)'),
        color: selected ? 'var(--cream-50)' : 'var(--ink-700)',
        border: selected ? '1.5px solid var(--ink-900)' : '1.5px solid var(--border-strong)',
        boxShadow: selected ? 'var(--shadow-sm)' : 'none',
        ...style,
      }}
    >
      {icon ? <span style={{ display: 'inline-flex', fontSize: '1.05em' }}>{icon}</span> : null}
      {children}
    </button>
  );
}
