import React from 'react';
import { Rating } from './Rating.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * TestimonialCard — a real review with quote, stars and author.
 * `variant="ink"` for dark immersive sections.
 */
export function TestimonialCard({ quote, author, meta, value = 5, avatarSrc, variant = 'plain', style = {} }) {
  const onDark = variant === 'ink';
  return (
    <figure style={{
      margin: 0, display: 'flex', flexDirection: 'column', gap: 16,
      background: onDark ? 'var(--ink-900)' : 'var(--surface-card)',
      border: onDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: 24,
      boxShadow: onDark ? 'none' : 'var(--shadow-sm)', ...style,
    }}>
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 0.5, height: 22, color: 'var(--lemon-500)' }}>“</span>
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontStyle: 'italic',
        fontSize: 21, lineHeight: 1.35, letterSpacing: '-0.01em',
        color: onDark ? 'var(--cream-50)' : 'var(--text-strong)', textWrap: 'pretty',
      }}>{quote}</blockquote>
      <Rating value={value} size={15} showValue={false} />
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 2 }}>
        <Avatar src={avatarSrc} name={author} size={42} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3, minWidth: 0 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14.5, color: onDark ? 'var(--cream-50)' : 'var(--text-strong)', whiteSpace: 'nowrap' }}>{author}</span>
          {meta ? <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)' }}>{meta}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
