import './Footer.css';
import escaparate from '../assets/clean/escaparate.webp';
import { CONTACT } from '../data/site.js';
import { MapPin, Phone, Clock, Instagram, ArrowRight, ArrowUpRight } from '../icons.jsx';

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">

        {/* ── Main grid ── */}
        <div id="footGrid" className="footer__grid">

          {/* Left column */}
          <div className="footer__left">
            <span className="eyebrow eyebrow--light" data-reveal>
              <span className="eyebrow__line" />
              Visítanos
            </span>

            <h2 className="footer__heading display">
              <span className="line">
                <span data-reveal="mask">Te esperamos en</span>
              </span>
              <span className="line">
                <span data-reveal="mask" data-reveal-delay="70" className="footer__heading-italic">
                  el centro de Vigo
                </span>
              </span>
            </h2>

            <ul className="footer__contact">
              <li data-reveal>
                <span className="footer__icon" aria-hidden="true"><MapPin size={19} /></span>
                {CONTACT.address}
              </li>
              <li>
                <a
                  href={CONTACT.phoneTel}
                  data-reveal
                  className="footer__contact-link"
                >
                  <span className="footer__icon" aria-hidden="true"><Phone size={19} /></span>
                  {CONTACT.phones}
                </a>
              </li>
              <li data-reveal>
                <span className="footer__icon" aria-hidden="true"><Clock size={19} /></span>
                <span>
                  {CONTACT.hours[0]}
                  <br />
                  {CONTACT.hours[1]}
                </span>
              </li>
            </ul>

            <div className="footer__social">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener"
                className="footer__ig-pill"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={16} />
                @lindavibrante
              </a>
              <span className="footer__social-muted">Instagram · Facebook · TikTok</span>
            </div>
          </div>

          {/* Right column — map card */}
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener"
            data-reveal
            className="footer__map"
            aria-label="Ver Linda Vibrante en Google Maps — Rúa do Panamá 17, Vigo"
          >
            <img
              data-reveal-img
              src={escaparate}
              alt="Escaparate de Linda Vibrante en Rúa do Panamá 17, Vigo"
              loading="lazy"
              decoding="async"
              className="footer__map-img"
            />
            <span className="footer__map-overlay" aria-hidden="true" />
            <span className="footer__map-bottom">
              <span className="footer__map-chip">
                <MapPin size={16} sw={2.2} />
                Rúa do Panamá 17
              </span>
              <span className="footer__map-dir">
                Cómo llegar <ArrowUpRight size={16} sw={2.2} />
              </span>
            </span>
          </a>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__divider" aria-hidden="true" />
        <div className="footer__bar">
          <span className="footer__copy">
            © 2026 Linda Vibrante · Centro de estética · Vigo
          </span>
          <a
            href={CONTACT.booksy}
            target="_blank"
            rel="noopener"
            data-magnetic
            className="btn btn--lemon btn--sm footer__book-btn"
          >
            Reservar cita <ArrowRight size={16} sw={2.2} />
          </a>
        </div>

      </div>
    </footer>
  );
}
