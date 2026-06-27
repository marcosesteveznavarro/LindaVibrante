import { CONTACT } from '../data/site.js';
import { ArrowRight } from '../icons.jsx';
import './StickyBooking.css';

export default function StickyBooking() {
  return (
    <a id="stickyBook" className="sticky-book" data-magnetic href={CONTACT.booksy} target="_blank" rel="noopener">
      Reservar cita <ArrowRight size={17} />
    </a>
  );
}
