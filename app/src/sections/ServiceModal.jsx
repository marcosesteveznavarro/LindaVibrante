import { CONTACT } from '../data/site.js';
import { ArrowRight, Close } from '../icons.jsx';
import './ServiceModal.css';

export default function ServiceModal() {
  return (
    <div id="svcModal" className="svc" role="dialog" aria-modal="true" aria-labelledby="svcTitle">
      <div id="svcScrim" className="svc__scrim" />
      <div id="svcPanel" className="svc__panel">
        <div className="svc__head">
          <div className="svc__heading">
            <span className="eyebrow svc__cat"><span className="eyebrow__line" /><span id="svcCatTxt">Cuerpo</span></span>
            <h3 id="svcTitle" className="display svc__title">Reafirma, alivia y modela</h3>
          </div>
          <button id="svcClose" className="svc__close" aria-label="Cerrar"><Close size={20} /></button>
        </div>
        <div id="svcBody" className="svc__body" />
        <div className="svc__foot">
          <span className="svc__note">Precios de Booksy · te asesoramos sin compromiso.</span>
          <a className="btn btn--lemon btn--sm svc__cta" data-magnetic href={CONTACT.booksy} target="_blank" rel="noopener">
            Reservar en Booksy <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
