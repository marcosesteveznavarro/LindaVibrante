import centro1 from '../assets/clean/centro1.jpg';
import centro2 from '../assets/clean/centro2.jpg';
import centro3 from '../assets/clean/centro3.jpg';
import centro4 from '../assets/clean/centro4.jpg';
import petCrop from '../assets/brand/pet_crop.jpg';
import { CENTRO_VALUES } from '../data/site.js';
import './ElCentro.css';

export default function ElCentro() {
  return (
    <section id="centro" className="section elcentro">
      <div className="container">

        {/* Two-column grid */}
        <div id="centroGrid" className="elcentro__grid">

          {/* Left column — text */}
          <div className="elcentro__text">
            <span className="eyebrow" data-reveal>
              <span className="eyebrow__line" />
              El centro
            </span>

            <h2 className="display elcentro__h2">
              <span className="line">
                <span data-reveal="mask">Un espacio <em>luminoso</em></span>
              </span>
              <span className="line">
                <span data-reveal="mask" data-reveal-delay="70">en el centro de Vigo</span>
              </span>
            </h2>

            <p className="elcentro__lead" data-reveal data-reveal-delay="120">
              En Linda Vibrante cuidamos de tu estética y tu bienestar con cercanía. Un lugar limpio y fresco, pensado para que desconectes y te sientas como en casa.
            </p>

            <div className="elcentro__values">
              {CENTRO_VALUES.map(([num, title, desc], i) => (
                <div
                  key={num}
                  className="elcentro__value"
                  data-reveal
                  data-reveal-delay={i === 0 ? undefined : i === 1 ? '60' : '120'}
                >
                  <span className="elcentro__value-num">{num}</span>
                  <div>
                    <h3 className="elcentro__value-title">{title}</h3>
                    <p className="elcentro__value-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — collage */}
          <div id="centroCollage" className="elcentro__collage" data-parallax-scope>

            {/* Tall left photo */}
            <div className="elcentro__col-tall" data-reveal data-parallax="0.05">
              <img
                data-reveal-img
                src={centro1}
                alt="Escaparate de Linda Vibrante en Rúa do Panamá, Vigo"
                loading="lazy"
                decoding="async"
                className="elcentro__photo elcentro__photo--tall"
              />
              <span className="elcentro__chip">
                <span className="elcentro__chip-dot" />
                En el centro de Vigo
              </span>
            </div>

            {/* Right sub-column */}
            <div className="elcentro__col-right">
              <div className="elcentro__photo-wrap elcentro__photo-wrap--top" data-reveal data-reveal-delay="80">
                <img
                  data-reveal-img
                  src={centro2}
                  alt="Cabina luminosa de tratamientos en Linda Vibrante"
                  loading="lazy"
                  decoding="async"
                  className="elcentro__photo"
                />
              </div>
              <div className="elcentro__bottom-row">
                <div className="elcentro__photo-wrap elcentro__photo-wrap--sm" data-reveal data-reveal-delay="140">
                  <img
                    data-reveal-img
                    src={centro3}
                    alt="Utensilios de maderoterapia en Linda Vibrante"
                    loading="lazy"
                    decoding="async"
                    className="elcentro__photo elcentro__photo--c3"
                  />
                </div>
                <div className="elcentro__photo-wrap elcentro__photo-wrap--sm" data-reveal data-reveal-delay="200" data-parallax="0.1">
                  <img
                    data-reveal-img
                    src={centro4}
                    alt="Productos profesionales INDIBA"
                    loading="lazy"
                    decoding="async"
                    className="elcentro__photo"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Lemon moment block */}
        <div className="elcentro__lemon" data-reveal>
          <div className="elcentro__lemon-glow" aria-hidden="true" />
          <div className="elcentro__lemon-inner">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" />
              Nuestra seña
            </span>
            <p className="elcentro__lemon-phrase">
              Frescura, luz y vitalidad. El{' '}
              <span className="elcentro__lemon-word">limón</span>{' '}
              nos recuerda lo que somos: un espacio limpio y luminoso donde cuidarte bien.
            </p>
          </div>
        </div>

        {/* Pet friendly card */}
        <div id="petCard" className="elcentro__pet" data-reveal>
          <div className="elcentro__pet-img-wrap">
            <img
              data-reveal-img
              src={petCrop}
              alt="Mascota bienvenida en Linda Vibrante, junto a un cojín de limones"
              loading="lazy"
              decoding="async"
              className="elcentro__pet-img"
            />
          </div>
          <div className="elcentro__pet-text">
            <span className="elcentro__pet-eyebrow">
              <span className="elcentro__pet-line" />
              Pet friendly
            </span>
            <p className="elcentro__pet-copy">
              Tu mascota también es bienvenida.{' '}
              <span className="elcentro__pet-muted">Ven con ella y que disfrute del momento contigo.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
