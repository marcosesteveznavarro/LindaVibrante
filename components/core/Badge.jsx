import React from 'react';

/**
 * Badge — small status/marketing label. e.g. "Novedad", "Top ventas", "Indiba".
 * Tones: accent (lemon), leaf, ink, neutral, success.
 */
export function Badge({ children, tone = 'accent', solid = false, dot = false, style = {} }) {
  const tones = {
    accent:  { soft: { background: 'var(--lemon-100)', color: 'var(--lemon-600)', border: '1px solid var(--lemon-300)' }, solid: { background: 'var(--lemon-500)', color: 'var(--ink-900)' }, dot: 'var(--lemon-500)' },
    leaf:    { soft: { background: 'var(--leaf-100)', color: 'var(--leaf-600)', border: '1px solid var(--leaf-300)' }, solid: { background: 'var(--leaf-600)', color: 'var(--cream-50)' }, dot: 'var(--leaf-500)' },
    ink:     { soft: { background: 'var(--cream-100)', color: 'var(--ink-900)', border: '1px solid var(--border-strong)' }, solid: { background: 'var(--ink-900)', color: 'var(--cream-50)' }, dot: 'var(--ink-700)' },
    neutral: { soft: { background: 'var(--sand-200)', color: 'var(--ink-700)', border: '1px solid transparent' }, solid: { background: 'var(--ink-300)', color: 'var(--cream-50)' }, dot: 'var(--ink-300)' },
    success: { soft: { background: 'var(--success-100)', color: 'var(--success-600)', border: '1px solid transparent' }, solid: { background: 'var(--success-600)', color: '#fff' }, dot: 'var(--success-600)' },
  };
  const t = tones[tone] || tones.accent;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 11px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
      letterSpacing: '0.02em', lineHeight: 1.3, whiteSpace: 'nowrap',
      ...(solid ? t.solid : t.soft), ...style,
    }}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: 999, background: solid ? 'currentColor' : t.dot }} /> : null}
      {children}
    </span>
  );
}
