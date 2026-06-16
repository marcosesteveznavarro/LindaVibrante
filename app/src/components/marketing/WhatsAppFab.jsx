import React from 'react';

const WA_PATH = 'M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z';

/**
 * WhatsAppFab — the permanent WhatsApp contact action.
 * `floating` = fixed bottom-right pill (default for mobile views).
 * Always links to wa.me. Keep the WhatsApp green for recognizability.
 */
export function WhatsAppFab({ phone = '34614501177', message = 'Hola, me gustaría pedir información 🙂', label = 'WhatsApp', floating = true, expanded = true, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        height: 56, padding: expanded ? '0 22px 0 18px' : 0, width: expanded ? 'auto' : 56,
        justifyContent: 'center', borderRadius: 'var(--radius-pill)',
        background: hover ? 'var(--whatsapp-press)' : 'var(--whatsapp)', color: '#fff',
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15.5, textDecoration: 'none',
        boxShadow: '0 12px 28px -8px rgba(37,211,102,0.5)',
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        transform: hover ? 'translateY(-2px)' : 'none',
        ...(floating ? { position: 'fixed', right: 18, bottom: 18, zIndex: 60 } : null),
        ...style,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" style={{ flex: 'none' }}><path d={WA_PATH} /></svg>
      {expanded ? label : null}
    </a>
  );
}
