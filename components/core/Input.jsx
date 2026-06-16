import React from 'react';

/**
 * Input — text field with optional label, leading icon and hint/error.
 * Mobile-first sizing; calm cream-tinted fill, lemon focus ring.
 */
export function Input({
  label, hint, error, icon = null, type = 'text', id,
  value, onChange, placeholder, style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {label ? (
        <label htmlFor={fid} style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '0.01em' }}>{label}</label>
      ) : null}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: 50, padding: '0 16px', borderRadius: 'var(--radius-md)',
        background: 'var(--white)',
        border: `1.5px solid ${error ? 'var(--danger-600)' : (focus ? 'var(--lemon-500)' : 'var(--border-strong)')}`,
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {icon ? <span style={{ display: 'inline-flex', color: 'var(--text-muted)', fontSize: 18 }}>{icon}</span> : null}
        <input
          id={fid} type={type} value={value} onChange={onChange} placeholder={placeholder}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500, color: 'var(--text-strong)',
            minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {error ? (
        <span style={{ fontSize: 12.5, color: 'var(--danger-600)', fontWeight: 500 }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
