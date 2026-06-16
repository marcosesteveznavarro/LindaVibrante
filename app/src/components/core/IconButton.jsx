import React from 'react';

/**
 * IconButton — square/round tappable icon. Used for nav, close, share, social.
 * Variants: solid (ink), soft (cream tint), ghost, accent (lemon).
 */
export function IconButton({
  children,
  label,
  variant = 'soft',
  size = 'md',
  round = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = { sm: 36, md: 44, lg: 52 };
  const dim = sizes[size] || sizes.md;

  const variants = {
    solid: { base: { background: 'var(--ink-900)', color: 'var(--cream-50)' }, hover: { background: 'var(--ink-700)' } },
    soft:  { base: { background: 'var(--cream-100)', color: 'var(--ink-900)', border: '1px solid var(--border)' }, hover: { background: 'var(--sand-200)' } },
    ghost: { base: { background: 'transparent', color: 'var(--ink-700)' }, hover: { background: 'var(--cream-100)' } },
    accent:{ base: { background: 'var(--lemon-500)', color: 'var(--ink-900)' }, hover: { background: 'var(--lemon-400)' } },
  };
  const v = variants[variant] || variants.soft;

  return (
    <button
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)', border: '1px solid transparent',
        cursor: 'pointer', fontSize: dim * 0.42, lineHeight: 0, padding: 0,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        transform: press ? 'scale(0.92)' : 'scale(1)',
        ...v.base, ...(hover ? v.hover : null), ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
