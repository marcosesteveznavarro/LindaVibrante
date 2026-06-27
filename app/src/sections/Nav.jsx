import logoBadge from '../assets/brand/logo_badge.jpg';
import { CONTACT, NAV } from '../data/site.js';
import { Menu } from '../icons.jsx';
import './Nav.css';

export default function Nav() {
  return (
    <header id="nav" className="nav">
      <div className="nav__inner">
        <a href="#inicio" data-nav data-navtext className="nav__brand">
          <img src={logoBadge} alt="Linda Vibrante" width="46" height="46" className="nav__badge" />
          Linda Vibrante
        </a>
        <nav className="nav__links" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} data-nav data-navtext className="navlink">{n.label}</a>
          ))}
          <a className="btn btn--lemon btn--sm nav__cta" data-magnetic href={CONTACT.booksy} target="_blank" rel="noopener">Reservar</a>
        </nav>
        <button id="hamb" className="nav__hamb" data-navtext aria-label="Abrir menú" aria-haspopup="dialog" aria-expanded="false" aria-controls="mmenuPanel">
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}
