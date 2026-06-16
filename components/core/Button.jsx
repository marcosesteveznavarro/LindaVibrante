import React from 'react';

/**
 * Button — Linda Vibrante's primary action.
 * Variants: primary (ink green), accent (lemon — reserve for the hero CTA like "Reservar"),
 * secondary (outline), ghost (text). Sizes: sm | md | lg. Mobile-first: min 44px tap target.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  as = 'button',
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '0 16px', height: 40, fontSize: 14, gap: 8, radius: 'var(--radius-pill)' },
    md: { padding: '0 22px', height: 48, fontSize: 15, gap: 9, radius: 'var(--radius-pill)' },
    lg: { padding: '0 30px', height: 56, fontSize: 16.5, gap: 11, radius: 'var(--radius-pill)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      base: { background: 'var(--primary)', color: 'var(--text-on-ink)', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
      hover: { background: 'var(--primary-hover)' },
      press: { background: 'var(--primary-press)' },
    },
    accent: {
      base: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid transparent', boxShadow: 'var(--shadow-accent)' },
      hover: { background: 'var(--accent-hover)' },
      press: { background: 'var(--accent-press)' },
    },
    secondary: {
      base: { background: 'transparent', color: 'var(--text-strong)', border: '1.5px solid var(--border-strong)' },
      hover: { background: 'var(--cream-100)', border: '1.5px solid var(--ink-300)' },
      press: { background: 'var(--sand-200)' },
    },
    ghost: {
      base: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid transparent' },
      hover: { background: 'var(--cream-100)' },
      press: { background: 'var(--sand-200)' },
    },
  };
  const v = variants[variant] || variants.primary;

  const composed = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: s.gap, height: s.height, minHeight: 'var(--tap-min)', padding: s.padding,
    fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: s.fontSize,
    letterSpacing: '0.01em', lineHeight: 1, borderRadius: s.radius,
    width: fullWidth ? '100%' : 'auto', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1, textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.press : null),
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      style={composed}
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
    >
      {icon ? <span style={{ display: 'inline-flex', fontSize: '1.15em' }}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', fontSize: '1.05em' }}>{iconRight}</span> : null}
    </Tag>
  );
}
