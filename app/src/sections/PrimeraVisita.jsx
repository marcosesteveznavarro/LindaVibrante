import './PrimeraVisita.css';
import primeraImg from '../assets/clean/primera.jpg';
import { CONTACT, PRIMERA_STEPS } from '../data/site.js';
import { ArrowRight } from '../icons.jsx';

export default function PrimeraVisita() {
  return (
    <section id="primera" className="section primera">
      <div className="container">

        {/* Header */}
        <div className="primera__header">
          <span className="eyebrow" data-reveal>
            <span className="eyebrow__line" />Primera visita
          </span>

          <h2 className="primera__title display">
            <span className="line">
              <span data-reveal="mask">¿Primera vez? <em>Tranquila.</em></span>
            </span>
          </h2>

          <p className="primera__intro" data-reveal data-reveal-delay="100">
            Reservar no tiene que dar pereza. Esto es exactamente lo que te espera cuando vienes a vernos.
          </p>
        </div>

        {/* Grid */}
        <div className="primera__grid" id="primeraGrid">

          {/* Left: steps */}
          <div className="primera__steps">
            {PRIMERA_STEPS.map(([num, title, body], i) => (
              <div
                key={num}
                className={`primera__step${i === PRIMERA_STEPS.length - 1 ? ' primera__step--last' : ''}`}
                data-reveal
                data-reveal-delay={i * 60}
              >
                <span className="primera__num" aria-hidden="true">{num}</span>
                <div className="primera__step-body">
                  <h3 className="primera__step-title">{title}</h3>
                  <p className="primera__step-text">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: image */}
          <div
            className="primera__img-wrap"
            data-reveal
            data-reveal-delay="100"
            data-parallax-scope
          >
            <img
              src={primeraImg}
              alt="Cabina cálida de Linda Vibrante, lista para tu primera visita"
              className="primera__img"
              loading="lazy"
              decoding="async"
              data-reveal-img
              data-parallax="0.05"
            />
            <div className="primera__overlay" aria-hidden="true" />
            <div className="primera__img-cta">
              <a
                className="btn btn--lemon"
                href={CONTACT.booksy}
                target="_blank"
                rel="noopener"
                data-magnetic
              >
                Reservar mi primera cita <ArrowRight size={17} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
