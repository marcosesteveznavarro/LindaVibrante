/* Linda Vibrante — page sections for the single-page site. window.LVSections */
import * as SXLV from '../components/index.js';
import { Photo as SXPhoto, Reveal as SXReveal } from './Chrome.jsx';
import { LVIcons as SXI } from './Icons.jsx';
import { data as SXD } from './data.js';
import { ServiceList } from './ServiceList.jsx';
const SX_CW = 1180;

function Eyebrow({ children, theme }) {
  const onDark = theme === 'light';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', color: onDark ? 'var(--lemon-400)' : 'var(--leaf-600)' }}>
      <span style={{ width: 22, height: 1.5, background: 'var(--lemon-500)', display: 'inline-block' }} />
      {children}
    </span>
  );
}

/* ---------- HERO ---------- */
function Feature({ icon, title, sub, d }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: d ? '22px 0 0' : 0, borderTop: d ? '1px solid var(--border)' : 'none' }}>
      <span style={{ width: d ? 46 : 40, height: d ? 46 : 40, borderRadius: 13, background: 'var(--leaf-100)', color: 'var(--leaf-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <span style={{ fontWeight: 700, fontSize: d ? 16.5 : 14, color: 'var(--text-strong)', lineHeight: 1.2 }}>{title}</span>
      <span style={{ fontSize: d ? 14 : 12.5, color: 'var(--text-muted)', lineHeight: 1.35 }}>{sub}</span>
    </div>
  );
}

function Hero({ d }) {
  const trust = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 26, paddingTop: 22, borderTop: '1px solid var(--border)' }}>
      <SXLV.Rating value={SXD.contact.rating} count={SXD.contact.reviews} size={17} />
      <span style={{ width: 1, height: 18, background: 'var(--border-strong)' }} />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600, color: 'var(--text-body)' }}>
        <span style={{ color: 'var(--leaf-600)' }}><SXI.MapPin size={17} /></span> Junto a Plaza de España
      </span>
    </div>
  );
  const text = (
    <div style={{ minWidth: 0 }}>
      <Eyebrow>Estética &amp; bienestar · Vigo</Eyebrow>
      <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: d ? 'clamp(2.8rem, 4.4vw, 4rem)' : 'clamp(2.3rem, 11vw, 3.1rem)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
        Belleza que se<br /><em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--leaf-600)' }}>siente cuidada</em>
      </h1>
      <p style={{ margin: '22px 0 0', fontSize: d ? 18 : 16.5, lineHeight: 1.55, color: 'var(--text-body)', maxWidth: 420, textWrap: 'pretty' }}>
        Estética y bienestar de trato cercano, atendido de tú a tú por Linda. Resultados cuidados en pleno centro de Vigo, junto a Plaza de España.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
        <SXLV.Button variant="accent" size="lg" as="a" href={SXD.contact.booksy} iconRight={<SXI.ArrowRight size={18} />}>Reservar</SXLV.Button>
        <SXLV.WhatsAppFab floating={false} phone={SXD.contact.whatsapp} message="¡Hola! Me gustaría pedir información 🙂" />
      </div>
      {trust}
    </div>
  );
  const photo = (
    <div style={{ position: 'relative', height: '100%' }}>
      <SXPhoto src={SXD.photos.salaLimon} alt="Rincón del limón en la sala de tratamientos" tone="lemon" height="100%" radius={28} objectPosition="center 35%" parallax={d ? 60 : 36} />
      <div style={{ position: 'absolute', left: d ? -22 : 14, bottom: d ? 28 : -20, background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <SXLV.Rating value={SXD.contact.rating} size={16} />
        <span style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 500 }}>+{SXD.contact.reviews} reseñas de clientas</span>
      </div>
      <span style={{ position: 'absolute', top: 16, right: 16, whiteSpace: 'nowrap', background: 'var(--lemon-500)', color: 'var(--ink-900)', fontWeight: 700, fontSize: 12, padding: '6px 12px', borderRadius: 999, boxShadow: 'var(--shadow-sm)' }}>Vigo · centro</span>
    </div>
  );
  const features = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: d ? 28 : 12 }}>
      <Feature d={d} icon={<SXI.Leaf size={d ? 24 : 20} />} title="Trato cercano" sub="De tú a tú, sin prisas" />
      <Feature d={d} icon={<SXI.Sparkle size={d ? 24 : 20} />} title="Resultados cuidados" sub="Técnicas y aparatología" />
      <Feature d={d} icon={<SXI.Heart size={d ? 24 : 20} />} title="Como en casa" sub="Un espacio limpio y fresco" />
    </div>
  );
  if (d) {
    return (
      <section id="inicio" style={{ padding: '128px 40px 64px' }}>
        <div style={{ maxWidth: SX_CW, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 56, alignItems: 'center' }}>
            {text}
            <div style={{ height: 560 }}>{photo}</div>
          </div>
          <div style={{ marginTop: 56 }}>{features}</div>
        </div>
      </section>
    );
  }
  return (
    <section id="inicio" style={{ padding: '100px 18px 36px', position: 'relative' }}>
      {text}
      <div style={{ height: 320, marginTop: 28 }}>{photo}</div>
      <div style={{ marginTop: 34 }}>{features}</div>
    </section>
  );
}

/* ---------- SERVICIOS ---------- */
function Servicios({ d }) {
  return (
    <section id="servicios" style={{ padding: d ? '88px 40px' : '56px 18px', background: 'var(--surface-raised)' }}>
      <div style={{ maxWidth: SX_CW, margin: '0 auto' }}>
        <SXReveal>
          <div style={{ display: d ? 'flex' : 'block', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: d ? 40 : 26 }}>
            <div style={{ flex: '1 1 auto', minWidth: 0, maxWidth: 620 }}>
              <Eyebrow>Carta de servicios</Eyebrow>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: d ? 'clamp(2.4rem, 4vw, 3.4rem)' : 'clamp(2rem, 9vw, 2.5rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
                Cuidados a tu <em style={{ fontStyle: 'italic', color: 'var(--leaf-600)' }}>medida</em>
              </h2>
            </div>
            <p style={{ flex: 'none', margin: d ? 0 : '14px 0 0', fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', maxWidth: 360 }}>
              Precios orientativos «desde». {d ? 'Pasa el cursor para ver cada tratamiento. ' : ''}Reserva el tuyo en Booksy.
            </p>
          </div>
        </SXReveal>
        <SXReveal delay={80}><ServiceList d={d} /></SXReveal>
      </div>
    </section>
  );
}

/* ---------- EL CENTRO (immersive) ---------- */
function Collage({ d }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: d ? '250px 180px' : '150px 110px', gap: d ? 14 : 10 }}>
      <div style={{ gridRow: '1 / span 2' }}><SXPhoto src={SXD.photos.salaEspejo} label="sala de tratamientos" tone="leaf" height="100%" objectPosition="center 50%" /></div>
      <SXPhoto src={SXD.photos.salaLimon} label="rincón del limón" tone="lemon" height="100%" objectPosition="center 40%" />
      <SXPhoto src={SXD.photos.escaparate} label="nuestro escaparate" tone="rose" height="100%" objectPosition="center 35%" />
    </div>
  );
}

function ElCentro({ d }) {
  const values = [
    ['Cercanía', 'Te escuchamos y te aconsejamos de tú a tú, sin venderte de más.'],
    ['Cuidado', 'Productos y aparatología cuidados, higiene y mimo en cada cita.'],
    ['Resultados', 'Trabajamos para que notes — y te guste — la diferencia.'],
  ];
  return (
    <section id="centro" style={{ padding: d ? '96px 40px' : '64px 18px' }}>
      <div style={{ maxWidth: SX_CW, margin: '0 auto' }}>
        <SXReveal>
          <div style={{ display: d ? 'grid' : 'block', gridTemplateColumns: d ? '1fr 1.05fr' : 'none', gap: 56, alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <Eyebrow>El centro</Eyebrow>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: d ? 'clamp(2.4rem, 3.6vw, 3.2rem)' : 'clamp(2rem, 9vw, 2.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
                Un espacio<br /><em style={{ fontStyle: 'italic', color: 'var(--leaf-600)' }}>luminoso</em> en Vigo
              </h2>
              <p style={{ margin: '18px 0 0', fontSize: d ? 17 : 16, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 440, textWrap: 'pretty' }}>
                En Linda Vibrante cuidamos de tu estética y tu bienestar con cercanía. Un lugar limpio y fresco, pensado para que desconectes y te sientas como en casa.
              </p>
            </div>
            <div style={{ marginTop: d ? 0 : 24 }}><Collage d={d} /></div>
          </div>
        </SXReveal>

        <SXReveal delay={80}>
          <div style={{ display: 'grid', gridTemplateColumns: d ? '1fr 1fr 1fr' : '1fr', gap: d ? 28 : 0, marginTop: d ? 64 : 36 }}>
            {values.map(([t, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: d ? '24px 0 0' : '18px 0', borderTop: '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 26, color: 'var(--lemon-600)', width: 34, flex: 'none' }}>0{i + 1}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--text-strong)' }}>{t}</h3>
                  <p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SXReveal>

        {/* lemon statement — la seña */}
        <SXReveal delay={120}>
          <div style={{ marginTop: d ? 72 : 44, background: 'var(--ink-900)', borderRadius: 'var(--radius-xl)', color: 'var(--cream-50)', overflow: 'hidden', display: d ? 'grid' : 'block', gridTemplateColumns: d ? '1.1fr 0.9fr' : 'none', alignItems: 'stretch' }}>
            <div style={{ padding: d ? '56px 52px' : '32px 24px' }}>
              <Eyebrow theme="light">Nuestra seña</Eyebrow>
              <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: d ? 34 : 27, lineHeight: 1.22, letterSpacing: '-0.01em', textWrap: 'pretty' }}>
                Frescura, luz y vitalidad. El <span style={{ color: 'var(--lemon-400)', fontStyle: 'italic' }}>limón</span> nos recuerda lo que somos: un espacio limpio y luminoso donde cuidarte bien.
              </p>
            </div>
            <div style={{ minHeight: d ? 'auto' : 180 }}>
              <SXPhoto src={SXD.photos.salaEspejo} alt="Detalle del local" tone="lemon" height="100%" radius={0} objectPosition="center 45%" />
            </div>
          </div>
        </SXReveal>
      </div>
    </section>
  );
}

/* ---------- RESEÑAS ---------- */
function Resenas({ d }) {
  return (
    <section id="resenas" style={{ padding: d ? '88px 40px' : '56px 18px', background: 'var(--leaf-100)' }}>
      <div style={{ maxWidth: SX_CW, margin: '0 auto' }}>
        <SXReveal>
          <div style={{ display: d ? 'flex' : 'block', justifyContent: 'space-between', alignItems: 'center', gap: 32, marginBottom: d ? 40 : 26 }}>
            <div style={{ flex: '1 1 auto', minWidth: 0 }}>
              <Eyebrow>Lo que dicen</Eyebrow>
              <h2 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: d ? 'clamp(2.4rem, 3.6vw, 3.2rem)' : 'clamp(2rem, 9vw, 2.5rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
                Clientas que <em style={{ fontStyle: 'italic', color: 'var(--leaf-600)' }}>vuelven</em>
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: d ? 0 : 18, flex: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 56, lineHeight: 1, color: 'var(--wine-700)' }}>4,6</span>
              <div>
                <SXLV.Rating value={SXD.contact.rating} showValue={false} size={18} />
                <span style={{ display: 'block', fontSize: 13.5, color: 'var(--text-body)', marginTop: 4, fontWeight: 500 }}>+{SXD.contact.reviews} reseñas</span>
              </div>
            </div>
          </div>
        </SXReveal>
        <div style={{ display: 'grid', gridTemplateColumns: d ? '1fr 1fr' : '1fr', gap: d ? 20 : 14 }}>
          {SXD.reviews.map((r, i) => (
            <SXReveal key={i} delay={i * 90}><SXLV.TestimonialCard quote={r.quote} author={r.author} meta={r.meta} value={r.value} /></SXReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Hero, Servicios, ElCentro, Resenas };
