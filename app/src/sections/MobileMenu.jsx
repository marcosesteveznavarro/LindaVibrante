import logoBadge from '../assets/brand/logo_badge.webp';
import { CONTACT, NAV } from '../data/site.js';
import { Close, ArrowRight, ArrowUpRight } from '../icons.jsx';
import './MobileMenu.css';

export default function MobileMenu() {
  return (
    <div id="mmenu" className="mmenu">
      <div id="mmenuScrim" className="mmenu__scrim" />
      <nav id="mmenuPanel" className="mmenu__panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">
        <div className="mmenu__head">
          <span className="mmenu__brand">
            <img src={logoBadge} alt="Linda Vibrante" width="44" height="44" />
            Linda Vibrante
          </span>
          <button id="mmenuClose" className="mmenu__close" aria-label="Cerrar menú"><Close size={26} /></button>
        </div>
        <div className="mmenu__links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} data-nav className="mlink">
              {n.label}<span className="mlink__arrow"><ArrowUpRight size={20} /></span>
            </a>
          ))}
        </div>
        <div className="mmenu__foot">
          <a className="mmenu__cta" href={CONTACT.booksy} target="_blank" rel="noopener">Reservar en Booksy <ArrowRight size={18} /></a>
          <span className="mmenu__meta">Rúa do Panamá 17 · @lindavibrante</span>
        </div>
      </nav>
    </div>
  );
}
