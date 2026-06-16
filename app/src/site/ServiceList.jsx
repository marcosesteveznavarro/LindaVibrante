/* Linda Vibrante — Lista de servicios con imagen al hover. window.LVServiceList
   Desktop: lista tipográfica a la izquierda + panel de imagen FIJO a la derecha
   que cambia según el servicio señalado (no tapa el texto). Móvil: miniatura por ítem. */
import React from 'react';
import * as SLLV from '../components/index.js';
import { LVIcons as SLI } from './Icons.jsx';
import { data as SLD } from './data.js';

function ServiceRowDesktop({ s, photo, onEnter, active }) {
  return (
    <a href={SLD.contact.booksy} target="_blank" rel="noopener"
      onMouseEnter={() => onEnter(photo, s.name)}
      onFocus={() => onEnter(photo, s.name)}
      style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20,
        textDecoration: 'none', padding: '16px 8px 16px 0', borderTop: '1px solid var(--border)',
        position: 'relative', paddingLeft: active ? 16 : 0, transition: 'padding-left var(--dur-base) var(--ease-out)',
      }}>
      <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: active ? 7 : 0, height: 7, borderRadius: 999, background: 'var(--lemon-500)', transition: 'width var(--dur-base) var(--ease-out)' }} />
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 12, minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.4rem, 1.9vw, 1.85rem)', lineHeight: 1.12, letterSpacing: '-0.01em', color: active ? 'var(--wine-700)' : 'var(--text-strong)', transition: 'color var(--dur-fast) var(--ease-out)' }}>{s.name}</span>
        {s.badge ? <SLLV.Badge tone="accent">{s.badge}</SLLV.Badge> : null}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 'none', color: 'var(--text-muted)', fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap' }}>
        <span>{s.duration}</span>
        <span style={{ color: 'var(--text-strong)', fontWeight: 700 }}>{s.from ? <span style={{ fontWeight: 500, color: 'var(--text-muted)', fontSize: 12 }}>desde </span> : null}{s.price}</span>
        <span style={{ color: active ? 'var(--wine-700)' : 'var(--ink-200)', transform: active ? 'translateX(0)' : 'translateX(-6px)', transition: 'all var(--dur-base) var(--ease-out)' }}><SLI.ArrowUpRight size={18} /></span>
      </span>
    </a>
  );
}

function ServiceRowMobile({ s, photo }) {
  return (
    <a href={SLD.contact.booksy} target="_blank" rel="noopener"
      style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', padding: '12px 0', borderTop: '1px solid var(--border)' }}>
      <span style={{ width: 64, height: 64, flex: 'none', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--leaf-100)' }}>
        <img src={photo} alt={s.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>{s.name}</span>
          {s.badge ? <SLLV.Badge tone="accent">{s.badge}</SLLV.Badge> : null}
        </span>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>{s.duration} · {s.from ? 'desde ' : ''}{s.price}</span>
      </span>
      <span style={{ color: 'var(--wine-600)', flex: 'none' }}><SLI.ArrowUpRight size={20} /></span>
    </a>
  );
}

function List({ d, onEnter, active }) {
  const cats = SLD.categories.filter(c => c.id !== 'todos');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: d ? 32 : 28 }}>
      {cats.map(cat => {
        const items = SLD.services.filter(s => s.cat === cat.id);
        const photo = SLD.catPhoto[cat.id];
        return (
          <div key={cat.id}>
            <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--leaf-600)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 1.5, background: 'var(--lemon-500)' }} />{cat.label}
            </h3>
            <div>
              {items.map(s => d
                ? <ServiceRowDesktop key={s.id} s={s} photo={photo} onEnter={onEnter} active={active === s.name} />
                : <ServiceRowMobile key={s.id} s={s} photo={photo} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceList({ d }) {
  const first = SLD.services[0];
  const [cur, setCur] = React.useState({ src: SLD.catPhoto[first.cat], name: first.name });
  const onEnter = (src, name) => setCur({ src, name });

  if (!d) return <List d={d} />;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 48, alignItems: 'start' }}>
      <List d={d} onEnter={onEnter} active={cur.name} />
      <div style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
        <div style={{ position: 'relative', height: 520, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--leaf-100)', boxShadow: 'var(--shadow-md)' }}>
          <img key={cur.src} src={cur.src} alt={cur.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(76,10,27,0.55), rgba(76,10,27,0) 45%)' }} />
          <span style={{ position: 'absolute', left: 20, bottom: 18, right: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 22, color: 'var(--cream-50)' }}>{cur.name}</span>
          </span>
          <span style={{ position: 'absolute', top: 14, right: 14, background: 'var(--lemon-500)', color: 'var(--ink-900)', fontWeight: 700, fontSize: 12, padding: '5px 11px', borderRadius: 999 }}>Reserva en Booksy</span>
        </div>
      </div>
    </div>
  );
}

export { ServiceList };
