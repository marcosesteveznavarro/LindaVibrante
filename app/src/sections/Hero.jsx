import heroImg from '../assets/clean/p4.jpg';
import { CONTACT } from '../data/site.js';
import { ArrowRight, Whatsapp, Star, MapPin } from '../icons.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <img
        id="heroBlend"
        className="hero__img"
        src={heroImg}
        alt="Masaje en cabina en Linda Vibrante, Vigo"
        fetchpriority="high"
        decoding="async"
      />
      <div id="heroGlow" className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__inner">
          <span className="eyebrow"><span className="eyebrow__line" />Estética &amp; bienestar · Vigo</span>

          <h1 id="heroTitle" className="hero__title display">
            <span className="line"><span className="kw">Belleza que</span></span>
            <span className="line"><span className="kw">se siente <em>cuidada</em></span></span>
          </h1>

          <p className="hero__lead">
            Trato cercano, atendido de tú a tú por Linda. Resultados cuidados en pleno centro de Vigo, junto a Plaza de España.
          </p>

          <div className="hero__cta">
            <a className="btn btn--lemon" data-magnetic href={CONTACT.booksy} target="_blank" rel="noopener">
              Reservar cita <ArrowRight size={18} />
            </a>
            <a className="btn btn--outline" href={CONTACT.whatsapp} target="_blank" rel="noopener">
              <Whatsapp size={17} /> WhatsApp
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__rating">
              <span className="hero__stars">
                <Star size={15} /><Star size={15} /><Star size={15} /><Star size={15} /><Star size={15} />
              </span>
              <b>{CONTACT.rating}</b>
            </span>
            <span className="hero__sep" />
            <span className="hero__muted">{CONTACT.reviews}</span>
            <span className="hero__sep" />
            <span className="hero__loc"><MapPin size={16} /> {CONTACT.addressShort} · Vigo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
