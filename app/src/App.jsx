import React from 'react';
import { Nav, MobileMenu, Footer } from './site/Chrome.jsx';
import { Hero, Servicios, ElCentro, Resenas } from './site/Sections.jsx';
import { WhatsAppFab } from './components/index.js';
import { data as D } from './site/data.js';

function useIsDesktop() {
  const [d, setD] = React.useState(() => window.matchMedia('(min-width: 900px)').matches);
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const on = () => setD(mq.matches);
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on); };
  }, []);
  return d;
}

export default function App() {
  const [menu, setMenu] = React.useState(false);
  const d = useIsDesktop();
  return (
    <React.Fragment>
      <Nav d={d} onMenu={() => setMenu(true)} />
      <main>
        <Hero d={d} />
        <Servicios d={d} />
        <ElCentro d={d} />
        <Resenas d={d} />
      </main>
      <Footer d={d} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      <WhatsAppFab phone={D.contact.whatsapp} message="¡Hola! Me gustaría pedir información 🙂" expanded={d} style={{ position: 'fixed', right: d ? 24 : 16, bottom: d ? 24 : 16, zIndex: 50 }} />
    </React.Fragment>
  );
}
