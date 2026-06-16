import React from 'react';

/**
 * SectionHeading — editorial eyebrow + serif title (+ optional lead).
 * The eyebrow carries a lemon regleta. `align` left (default) or center.
 */
export function SectionHeading({ eyebrow, title, lead, align = 'left', theme = 'dark', style = {} }) {
  const onDark = theme === 'light';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 14,
      textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? '36rem' : 'none', marginInline: align === 'center' ? 'auto' : 0, ...style,
    }}>
      {eyebrow ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.22em',
          color: onDark ? 'var(--lemon-400)' : 'var(--leaf-600)',
        }}>
          <span style={{ width: 22, height: 1.5, background: 'var(--lemon-500)', display: 'inline-block' }} />
          {eyebrow}
        </span>
      ) : null}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'var(--text-h2)', lineHeight: 1.04, letterSpacing: '-0.015em',
        color: onDark ? 'var(--cream-50)' : 'var(--text-strong)', textWrap: 'pretty',
      }}>{title}</h2>
      {lead ? (
        <p style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead)',
          lineHeight: 1.55, fontWeight: 400,
          color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-body)', textWrap: 'pretty',
        }}>{lead}</p>
      ) : null}
    </div>
  );
}
