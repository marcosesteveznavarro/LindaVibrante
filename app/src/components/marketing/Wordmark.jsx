import React from 'react';

/**
 * Wordmark — Linda Vibrante's typographic lockup, drawn from the real logo
 * (classical burgundy caps + a lemon-dot accent for the monogram's "&").
 * `theme="light"` for dark/burgundy backgrounds. For the full crest, use the
 * logo image at assets/logo.png.
 */
export function Wordmark({ size = 24, theme = 'dark', showTag = false, style = {} }) {
  const onDark = theme === 'light';
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: size * 0.18, lineHeight: 1, ...style }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, textTransform: 'uppercase',
        letterSpacing: '0.07em', display: 'inline-flex', alignItems: 'center', gap: size * 0.34,
        color: onDark ? 'var(--cream-50)' : 'var(--wine-700)',
      }}>
        Linda
        <span style={{ width: size * 0.2, height: size * 0.2, borderRadius: 999, background: 'var(--lemon-500)', display: 'inline-block', boxShadow: 'inset 0 0 0 1px rgba(217,180,0,0.5)' }} />
        Vibrante
      </span>
      {showTag ? (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: size * 0.3, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.26em',
          color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)',
        }}>Centro de estética · Vigo</span>
      ) : null}
    </span>
  );
}
