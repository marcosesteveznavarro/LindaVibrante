import './Linda.css';
import duena from '../assets/np2/duena.webp';
import { CONTACT } from '../data/site.js';
import { ArrowRight, Instagram } from '../icons.jsx';

export default function Linda() {
  return (
    <section id="linda" className="section linda">
      <div className="container">
        <div id="lindaGrid" className="linda__grid">

          {/* LEFT — portrait */}
          <div className="linda__photo-wrap" data-reveal data-reveal-delay="60" data-parallax-scope>
            <div className="linda__photo-box">
              <img
                data-reveal-img
                src={duena}
                alt="Linda, al frente de Linda Vibrante"
                loading="lazy"
                decoding="async"
                className="linda__photo-img"
              />
              <span className="linda__chip">Linda · esteticista</span>
            </div>
          </div>

          {/* RIGHT — text */}
          <div className="linda__body">
            <span className="eyebrow" data-reveal>
              <span className="eyebrow__line" />
              Quién te cuida
            </span>

            <h2 className="display linda__heading">
              <span className="line">
                <span data-reveal="mask">Hola, soy <em>Linda</em></span>
              </span>
            </h2>

            <p className="linda__lead" data-reveal data-reveal-delay="100">
              Detrás de cada cita estoy yo. Me gusta tomarme el tiempo de escucharte, entender tu piel y aconsejarte de tú a tú —sin prisas y sin venderte de más. Para mí, cuidarte bien es lo primero.
            </p>

            <p className="linda__quote" data-reveal data-reveal-delay="160">
              «Quiero que salgas sintiéndote mejor de como entraste.»
            </p>

            <div className="linda__ctas" data-reveal data-reveal-delay="220">
              <a
                className="btn btn--lemon"
                data-magnetic
                href={CONTACT.booksy}
                target="_blank"
                rel="noopener"
              >
                Reservar con Linda <ArrowRight size={18} />
              </a>
              <a
                className="linda__ig-link"
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener"
              >
                <Instagram size={16} />
                @lindavibrante
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
