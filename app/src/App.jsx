import { useEffect } from 'react';
import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Servicios from './sections/Servicios.jsx';
import ElCentro from './sections/ElCentro.jsx';
import Linda from './sections/Linda.jsx';
import PrimeraVisita from './sections/PrimeraVisita.jsx';
import Footer from './sections/Footer.jsx';
import ServiceModal from './sections/ServiceModal.jsx';
import MobileMenu from './sections/MobileMenu.jsx';
import StickyBooking from './sections/StickyBooking.jsx';
import TabBar from './sections/TabBar.jsx';
import GlobalFx from './sections/GlobalFx.jsx';
import { initSiteEffects } from './lib/effects.js';
import { SERVICES } from './data/site.js';

export default function App() {
  useEffect(() => initSiteEffects({ services: SERVICES }), []);

  return (
    <>
      <a href="#servicios" className="skip-link">Saltar al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Servicios />
        <ElCentro />
        <Linda />
        <PrimeraVisita />
      </main>
      <Footer />

      <ServiceModal />
      <MobileMenu />
      <StickyBooking />
      <TabBar />
      <GlobalFx />
    </>
  );
}
