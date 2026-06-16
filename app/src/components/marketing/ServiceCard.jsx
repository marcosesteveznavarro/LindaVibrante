import React from 'react';
import { Badge } from '../core/Badge.jsx';

/**
 * ServiceCard — a catalog item for the services list.
 * Name, short description, duration, price (optional "desde"), and a Reservar link.
 * `media` accepts an image URL (real photo of the centre). Falls back to a calm tint block.
 */
export function ServiceCard({
  name, description, duration, price, fromPrice = false,
  badge, media, bookHref = '#booksy', onBook, style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 14, alignItems: 'stretch',
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: 12,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        transform: hover ? 'translateY(-2px)' : 'none', ...style,
      }}
    >
      <div style={{
        width: 92, flex: 'none', borderRadius: 'var(--radius-md)', overflow: 'hidden',
        background: 'var(--leaf-100)', position: 'relative',
        backgroundImage: media ? `url(${media})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        {!media ? (
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--leaf-300)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13 }}>foto</span>
        ) : null}
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 8, padding: '4px 2px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, justifyContent: 'space-between' }}>
            <h3 style={{ flex: 1, minWidth: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700, color: 'var(--text-strong)', lineHeight: 1.2 }}>{name}</h3>
            {badge ? <Badge tone="accent">{badge}</Badge> : null}
          </div>
          {description ? (
            <p style={{ margin: '5px 0 0', fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.45, color: 'var(--text-body)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
            {duration ? <span>{duration}</span> : null}
            {price ? (
              <span style={{ color: 'var(--text-strong)', fontWeight: 700 }}>
                {fromPrice ? <span style={{ fontWeight: 500, color: 'var(--text-muted)', fontSize: 12 }}>desde </span> : null}{price}
              </span>
            ) : null}
          </span>
          <a
            href={bookHref} onClick={onBook}
            style={{
              flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              height: 34, padding: '0 16px', borderRadius: 'var(--radius-pill)',
              background: hover ? 'var(--lemon-500)' : 'var(--cream-100)',
              color: 'var(--ink-900)', border: '1px solid ' + (hover ? 'var(--lemon-500)' : 'var(--border-strong)'),
              fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 700, textDecoration: 'none',
              transition: 'all var(--dur-fast) var(--ease-out)',
            }}
          >Reservar</a>
        </div>
      </div>
    </article>
  );
}
