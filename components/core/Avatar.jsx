import React from 'react';

/**
 * Avatar — circular image or initials. Used for team members & testimonials.
 * Falls back to initials on a warm tint when no `src`.
 */
export function Avatar({ src, name = '', size = 48, ring = false, style = {} }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: 'var(--radius-pill)', overflow: 'hidden',
      background: 'var(--leaf-100)', color: 'var(--leaf-600)',
      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: size * 0.38, flex: 'none',
      border: ring ? '2px solid var(--white)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none', ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (initials || '·')}
    </span>
  );
}
