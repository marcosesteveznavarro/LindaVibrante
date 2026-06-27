import { CONTACT } from '../data/site.js';
import { Home, ListIcon, Calendar, Whatsapp } from '../icons.jsx';
import './TabBar.css';

export default function TabBar() {
  return (
    <nav id="tabbar" className="tabbar" aria-label="Acciones rápidas">
      <div className="tabbar__row">
        <a href="#inicio" data-nav className="tabbar__item"><Home size={22} />Inicio</a>
        <a href="#servicios" data-nav className="tabbar__item"><ListIcon size={22} />Servicios</a>
        <a href={CONTACT.booksy} target="_blank" rel="noopener" className="tabbar__item tabbar__item--cta"><Calendar size={22} />Reservar</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="tabbar__item"><Whatsapp size={22} />WhatsApp</a>
      </div>
    </nav>
  );
}
