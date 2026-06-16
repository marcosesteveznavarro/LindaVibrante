import React from 'react';

function Star({ fill = 1, size = 16 }) {
  // fill: 1 full, 0 empty, 0..1 partial
  const id = 'st' + Math.random().toString(36).slice(2, 8);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="var(--lemon-500)" />
          <stop offset={`${fill * 100}%`} stopColor="var(--sand-300)" />
        </linearGradient>
      </defs>
      <path d="M12 2.5l2.9 6.06 6.6.86-4.85 4.55 1.24 6.53L12 17.9l-5.89 3.06 1.24-6.53L2.5 9.42l6.6-.86z"
        fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Rating — star row + numeric score + optional review count.
 * Used for the 4,6 social proof. `compact` hides the label text.
 */
export function Rating({ value = 4.6, count, size = 16, showValue = true, label, style = {} }) {
  const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, value - i)));
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ display: 'inline-flex', gap: 2 }}>
        {stars.map((f, i) => <Star key={i} fill={f} size={size} />)}
      </span>
      {showValue ? (
        <span style={{ fontSize: size * 0.92, fontWeight: 700, color: 'var(--text-strong)' }}>
          {value.toLocaleString('es-ES', { minimumFractionDigits: 1 })}
        </span>
      ) : null}
      {(count != null || label) ? (
        <span style={{ fontSize: size * 0.82, color: 'var(--text-muted)', fontWeight: 500 }}>
          {label || `(${count}+ reseñas)`}
        </span>
      ) : null}
    </span>
  );
}
