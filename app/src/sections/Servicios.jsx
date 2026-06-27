import './Servicios.css';
import p1 from '../assets/clean/p1.jpg';
import p2 from '../assets/clean/p2.jpg';
import p3 from '../assets/clean/p3.jpg';
import p5 from '../assets/clean/p5.jpg';
import p7 from '../assets/clean/p7.jpg';
import { BENTO } from '../data/site.js';
import { ArrowRight } from '../icons.jsx';

const imgMap = { p1, p2, p3, p5, p7 };

/* Reveal delays per card group (source order) */
const DELAYS = { cuerpo: null, faciales: 60, mirada: 40, manos: 80, depilacion: null };

export default function Servicios() {
  return (
    <section id="servicios" className="section servicios">
      <div className="container">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="servicios__header">
          <div className="servicios__heading-col">
            <span className="eyebrow" data-reveal>
              <span className="eyebrow__line" />
              Carta de servicios
            </span>
            <h2 className="display servicios__h2">
              <span className="line">
                <span data-reveal="mask">
                  Cuidados a tu <em>medida</em>
                </span>
              </span>
            </h2>
          </div>
          <p className="servicios__intro" data-reveal>
            Precios orientativos «desde». Cada tratamiento, pensado para tu piel y tu ritmo. Reserva el tuyo online.
          </p>
        </div>

        {/* ── Bento grid ─────────────────────────────────────────── */}
        <div id="bento">
          {BENTO.map((b) => {
            const delay = DELAYS[b.group];
            return (
              <article
                key={b.group}
                data-reveal
                {...(delay != null ? { 'data-reveal-delay': delay } : {})}
                data-bento
                data-bento-card
                data-group={b.group}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-label={`Ver servicios de ${b.label}`}
                className={`bento-card${b.feature ? ' bento-card--feature' : ''}`}
              >
                {/* Background photo */}
                <img
                  data-reveal-img
                  data-bento-img
                  src={imgMap[b.img]}
                  alt={`${b.label} en Linda Vibrante`}
                  loading="lazy"
                  decoding="async"
                  className="bento-card__img"
                  style={{ objectPosition: b.objPos, opacity: b.opacity }}
                />

                {/* Dark gradient overlay */}
                <div
                  className={`bento-card__overlay${b.feature ? ' bento-card__overlay--feature' : ''}`}
                  aria-hidden="true"
                />

                {/* Card content */}
                <div className="bento-card__body">
                  {/* Lemon eyebrow */}
                  <span className="bento-card__eyebrow">
                    <span className="bento-card__eyebrow-line" />
                    {b.label}
                  </span>

                  {/* Title */}
                  <h3 className={`display bento-card__title${b.feature ? ' bento-card__title--feature' : ''}`}>
                    {b.title}
                  </h3>

                  {/* Service rows */}
                  <div className={`bento-card__rows${b.feature ? ' bento-card__rows--feature' : ''}`}>
                    {b.items.map((item, i) => (
                      <span key={i} className={`bento-card__row${b.feature ? ' bento-card__row--feature' : ''}`}>
                        <span className="bento-card__row-name">
                          {item.n}
                          {item.tag && (
                            <span className="bento-card__tag">{item.tag}</span>
                          )}
                        </span>
                        <span className="bento-card__row-meta">{item.meta}</span>
                      </span>
                    ))}
                  </div>

                  {/* "Ver los N servicios" CTA */}
                  <span className="bento-card__cta">
                    Ver los {b.count} servicios <ArrowRight size={b.feature ? 16 : 15} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
