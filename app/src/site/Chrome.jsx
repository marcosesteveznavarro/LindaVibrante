/* Linda Vibrante — chrome for the single-page site. window.LVChrome
   Nav (compacting + smooth-scroll), MobileMenu, Footer, Photo, Reveal, scrollToId. */
import React from 'react';
import { Wordmark, IconButton, Button } from '../components/index.js';
import { LVIcons as I } from './Icons.jsx';
import { data as D } from './data.js';

const NAV = [['inicio', 'Inicio'], ['servicios', 'Servicios'], ['centro', 'El centro'], ['resenas', 'Reseñas'], ['contacto', 'Contacto']];
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 62;
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReduced() ? 'auto' : 'smooth' });
}

/* Scroll-reveal: fade + rise when entering the viewport. Respects reduced-motion.
   IntersectionObserver drives the effect; a timer safety-net guarantees content
   is never left hidden (e.g. in non-rendering/automation contexts). */
function Reveal({ children, delay = 0, y = 24, style = {} }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (prefersReduced()) { setSeen(true); return; }
    const el = ref.current;
    if (!el) { setSeen(true); return; }
    let done = false;
    const reveal = () => { if (!done) { done = true; setSeen(true); } };
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) reveal(); }); }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      io.observe(el);
    } else { reveal(); }
    const onScroll = () => { const r = el.getBoundingClientRect(); if (r.top < (window.innerHeight || 800) * 0.9 && r.bottom > 0) reveal(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const t = setTimeout(reveal, 1400); // safety net — never leave content hidden
    return () => { if (io) io.disconnect(); window.removeEventListener('scroll', onScroll); clearTimeout(t); };
  }, []);
  return (
    <div ref={ref} style={{ transform: seen ? 'none' : `translateY(${y}px)`, transition: `transform 0.6s var(--ease-out) ${delay}ms`, willChange: 'transform', ...style }}>
      {children}
    </div>
  );
}

/* Active-section + compacting state for the nav. */
function useChrome() {
  const [compact, setCompact] = React.useState(false);
  const [active, setActive] = React.useState('inicio');
  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);
  return { compact, active };
}

function Nav({ d, onMenu }) {
  const { compact, active } = useChrome();
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
      background: compact ? 'color-mix(in srgb, var(--cream-50) 90%, transparent)' : 'transparent',
      backdropFilter: compact ? 'blur(12px)' : 'none',
      borderBottom: '1px solid ' + (compact ? 'var(--border)' : 'transparent'),
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: d ? (compact ? '12px 40px' : '20px 40px') : (compact ? '10px 18px' : '16px 18px'), transition: 'padding var(--dur-base) var(--ease-out)' }}>
        <a onClick={() => scrollToId('inicio')} style={{ cursor: 'pointer' }}><Wordmark size={d ? 24 : 21} /></a>
        {d ? (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            {NAV.map(([id, label]) => (
              <a key={id} onClick={() => scrollToId(id)} style={{
                cursor: 'pointer', fontSize: 15, fontWeight: 600,
                color: active === id ? 'var(--wine-700)' : 'var(--text-body)',
                paddingBottom: 3, borderBottom: '2px solid ' + (active === id ? 'var(--lemon-500)' : 'transparent'),
                transition: 'color var(--dur-fast) var(--ease-out)',
              }}>{label}</a>
            ))}
            <Button size="sm" variant="accent" as="a" href={D.contact.booksy}>Reservar</Button>
          </nav>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button size="sm" variant="accent" as="a" href={D.contact.booksy}>Reservar</Button>
            <IconButton label="Menú" variant="soft" onClick={onMenu}><I.Menu /></IconButton>
          </div>
        )}
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 80, pointerEvents: open ? 'auto' : 'none' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(20,8,12,0.45)', opacity: open ? 1 : 0, transition: 'opacity var(--dur-base) var(--ease-out)' }} />
      <nav style={{
        position: 'absolute', inset: 0, background: 'var(--wine-900)', padding: '20px 24px',
        display: 'flex', flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <Wordmark size={22} theme="light" />
          <IconButton label="Cerrar" variant="ghost" onClick={onClose} style={{ color: 'var(--cream-50)' }}><I.X /></IconButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {NAV.map(([id, label], i) => (
            <a key={id} onClick={() => { onClose(); setTimeout(() => scrollToId(id), 240); }} style={{
              cursor: 'pointer', padding: '16px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--cream-50)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(12px)',
              transition: `opacity var(--dur-base) var(--ease-out) ${open ? 120 + i * 50 : 0}ms, transform var(--dur-base) var(--ease-out) ${open ? 120 + i * 50 : 0}ms`,
            }}>
              {label}<span style={{ color: 'var(--lemon-400)' }}><I.ArrowUpRight size={22} /></span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button variant="accent" fullWidth as="a" href={D.contact.booksy} iconRight={<I.ArrowRight size={18} />}>Reservar en Booksy</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-on-ink-muted)', fontSize: 13 }}>
            <I.Instagram size={16} /> {D.contact.social}
          </div>
        </div>
      </nav>
    </div>
  );
}

/* Editorial photo — real image when `src` is given, else a tinted placeholder. */
function Photo({ src, alt = '', label = 'foto del centro', tone = 'leaf', radius = 16, height = '100%', objectPosition = 'center', parallax = 0, style = {} }) {
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (!parallax || prefersReduced()) return;
    let raf = 0;
    const onScroll = () => {
      raf = raf || requestAnimationFrame(() => {
        raf = 0;
        const el = imgRef.current; if (!el) return;
        const r = el.parentElement.getBoundingClientRect();
        const prog = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translateY(${(-prog * parallax).toFixed(1)}px) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);
  const bg = tone === 'lemon' ? 'var(--lemon-100)' : tone === 'rose' || tone === 'blush' ? 'var(--rose-100)' : 'var(--leaf-100)';
  const fg = tone === 'lemon' ? 'var(--lemon-600)' : tone === 'rose' || tone === 'blush' ? 'var(--wine-500)' : 'var(--leaf-600)';
  if (src) {
    return (
      <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden', background: bg, ...style }}>
        <img ref={imgRef} src={src} alt={alt || label} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition, display: 'block', transform: parallax ? 'scale(1.12)' : 'none' }} />
        <span style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px rgba(76,10,27,0.08)', borderRadius: radius, pointerEvents: 'none' }} />
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', height, borderRadius: radius, overflow: 'hidden', background: `repeating-linear-gradient(135deg, ${bg}, ${bg} 22px, transparent 22px, transparent 44px), ${bg}`, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: fg, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15 }}><I.Sparkle size={15} /> {label}</span>
    </div>
  );
}

function SocialLink({ icon, label }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-label={label}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', color: h ? 'var(--ink-900)' : 'var(--cream-50)', background: h ? 'var(--lemon-500)' : 'rgba(255,255,255,0.08)', transition: 'all var(--dur-fast) var(--ease-out)', transform: h ? 'translateY(-2px)' : 'none' }}>
      {icon}
    </a>
  );
}

function Footer({ d }) {
  return (
    <footer id="contacto" style={{ background: 'var(--ink-950)', color: 'var(--cream-50)', padding: d ? '80px 40px 32px' : '56px 22px 32px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: d ? 'grid' : 'block', gridTemplateColumns: d ? '1fr 1fr' : 'none', gap: 48, alignItems: 'stretch' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--lemon-400)' }}>
              <span style={{ width: 22, height: 1.5, background: 'var(--lemon-500)' }} /> Visítanos
            </span>
            <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: d ? '2.6rem' : '2rem', lineHeight: 1.04, color: 'var(--cream-50)' }}>
              Te esperamos en<br /><em style={{ fontStyle: 'italic', color: 'var(--lemon-400)' }}>el centro de Vigo</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: '24px 0', fontSize: 15, color: 'var(--text-on-ink-muted)' }}>
              <span style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--lemon-400)', flex: 'none' }}><I.MapPin size={19} /></span>{D.contact.address}</span>
              <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ color: 'var(--lemon-400)', flex: 'none' }}><I.Phone size={19} /></span>{D.contact.phones.join(' · ')}</span>
              <span style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--lemon-400)', flex: 'none' }}><I.Clock size={19} /></span>
                <span>L–V 10:00–14:00 · 16:00–20:00<br />Sábado 10:00–14:00 · Domingo cerrado</span>
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
              <SocialLink icon={<I.Instagram size={20} />} label="Instagram" />
              <SocialLink icon={<I.Heart size={20} />} label="Facebook" />
              <SocialLink icon={<I.Sparkle size={20} />} label="TikTok" />
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-on-ink-muted)' }}>{D.contact.social} · Instagram · Facebook · TikTok</span>
          </div>

          <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Linda Vibrante, ' + D.contact.address)} target="_blank" rel="noopener"
            style={{ position: 'relative', display: 'block', borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: d ? 'auto' : 220, textDecoration: 'none' }}>
            <Photo src={D.photos.escaparate} alt="Escaparate de Linda Vibrante en Rúa do Panamá 17" tone="rose" radius={0} height="100%" objectPosition="center 40%" style={{ position: 'absolute', inset: 0 }} />
            <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,8,12,0.55), rgba(20,8,12,0.05))' }} />
            <span style={{ position: 'absolute', left: 20, bottom: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', background: 'var(--lemon-500)', color: 'var(--ink-900)', fontWeight: 700, fontSize: 14, padding: '8px 14px', borderRadius: 999 }}><I.MapPin size={16} /> Rúa do Panamá 17</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', color: 'var(--cream-50)', fontWeight: 600, fontSize: 14 }}>Cómo llegar <I.ArrowUpRight size={16} /></span>
            </span>
          </a>
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '32px 0 18px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12.5, color: 'var(--text-on-ink-muted)' }}>
          <span>© 2026 Linda Vibrante · Centro de estética · Vigo</span>
          <Button size="sm" variant="accent" as="a" href={D.contact.booksy} iconRight={<I.ArrowRight size={16} />}>Reservar cita</Button>
        </div>
      </div>
    </footer>
  );
}

export { Nav, MobileMenu, Footer, Photo, Reveal, scrollToId };
