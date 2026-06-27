/* Linda Vibrante — real site data. Do NOT invent contact details. */

export const CONTACT = {
  booksy: 'https://booksy.com/es-es/140976_linda-vibrante_spa_68493_vigo',
  whatsapp: 'https://wa.me/34614501177',
  instagram: 'https://www.instagram.com/lindavibrante',
  phoneTel: 'tel:+34614501177',
  phones: '614 501 177 · 886 640 280',
  address: 'Rúa do Panamá 17, Bajo · 36203 Vigo (Pontevedra)',
  addressShort: 'Rúa do Panamá 17',
  hours: ['Lun–Vie 10:00–14:00 · 16:00–20:00', 'Sábado 10:00–14:00 · Domingo cerrado'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Linda%20Vibrante%20R%C3%BAa%20do%20Panam%C3%A1%2017%20Vigo',
  social: '@lindavibrante',
  rating: '4,6',
  reviews: '+20 reseñas',
};

export const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#centro', label: 'El centro' },
  { href: '#primera', label: 'Primera visita' },
];

/* Bento cards (servicios). `img` maps to an imported asset in the Servicios component.
   `items` are the short teaser rows; the full list lives in SERVICES (modal source). */
export const BENTO = [
  {
    group: 'cuerpo', label: 'Cuerpo', title: 'Reafirma, alivia y modela',
    img: 'p2', objPos: 'center 42%', opacity: 0.82, feature: true, count: 13,
    items: [
      { n: 'INDIBA Corporal', meta: '1 h · 70 €', tag: 'TOP' },
      { n: 'Maderoterapia completa', meta: '1 h · 50 €' },
      { n: 'Masaje relajante', meta: '1 h · 40 €' },
      { n: 'Presoterapia', meta: '30 min · 20 €' },
    ],
  },
  {
    group: 'faciales', label: 'Faciales', title: 'Una piel que respira y luce',
    img: 'facial', objPos: 'center 30%', opacity: 0.72, count: 8,
    items: [
      { n: 'INDIBA Facial', meta: '1 h · 55 €' },
      { n: 'Limpieza facial profunda', meta: '47 €' },
      { n: 'Dermapen', meta: '60 €' },
    ],
  },
  {
    group: 'mirada', label: 'Cejas & pestañas', title: 'Una mirada despierta',
    img: 'cejas', objPos: 'center 40%', opacity: 0.8, count: 7,
    items: [
      { n: 'Laminado de cejas', meta: '1 h · 30 €' },
      { n: 'Lifting de pestañas + tinte', meta: '35 €' },
      { n: 'Diseño de cejas con hilo', meta: '20 €' },
    ],
  },
  {
    group: 'manos', label: 'Manos & pies', title: 'Manos y pies a punto',
    img: 'manospies', objPos: 'center 45%', opacity: 0.65, count: 18,
    items: [
      { n: 'Manicura semipermanente', meta: '1 h · 25 €' },
      { n: 'Pedicura semipermanente', meta: '35 €' },
      { n: 'Nivelación y refuerzo', meta: '32 €' },
    ],
  },
  {
    group: 'depilacion', label: 'Depilación', title: 'Precisa y cuidada',
    img: 'depilacion', objPos: 'center 50%', opacity: 0.8, count: 10,
    items: [
      { n: 'Ingles bikini · cera', meta: '18 €' },
      { n: 'Piernas · cera', meta: '28 €' },
      { n: 'Facial completa · hilo', meta: '30 €' },
    ],
  },
];

export const CENTRO_VALUES = [
  ['01', 'Cercanía', 'Te escuchamos y aconsejamos de tú a tú, sin venderte de más.'],
  ['02', 'Cuidado', 'Productos y aparatología cuidados, higiene y mimo en cada cita.'],
  ['03', 'Resultados', 'Trabajamos para que notes —y te guste— la diferencia.'],
];

export const PRIMERA_STEPS = [
  ['01', 'Reserva en un minuto', 'Elige tu tratamiento en Booksy o escríbenos por WhatsApp. Sin llamadas, a la hora que te venga bien.'],
  ['02', 'Te recibimos sin prisas', 'Te escuchamos y valoramos tu piel y tus objetivos, de tú a tú, en un ambiente tranquilo.'],
  ['03', 'Te asesoramos, sin compromiso', 'Te aconsejamos lo que de verdad necesitas —nunca de más— y resolvemos todas tus dudas.'],
  ['04', 'Disfrutas y sales renovada', 'Un rato para ti. Sales con la piel cuidada y esa sensación de luz que te acompaña.'],
];

/* Full service catalogue (Booksy). Source of truth for the service modal. */
export const SERVICES = {
  cuerpo: {
    label: 'Cuerpo', title: 'Reafirma, alivia y modela',
    all: [
      { n: 'INDIBA Corporal', d: '1 h', p: '70 €', tag: 'Top' },
      { n: 'INDIBA + Maderoterapia', d: '1 h', p: '63 €' },
      { n: 'INDIBA corporal · zonas pequeñas', d: '40 min', p: '57 €' },
      { n: 'Maderoterapia completa', d: '1 h', p: '50 €' },
      { n: 'Maderoterapia · 1 zona pequeña', d: '30 min', p: '30 €' },
      { n: 'Masaje relajante completo', d: '1 h', p: '40 €' },
      { n: 'Masaje descontracturante por zonas', d: '30 min', p: '30 €' },
      { n: 'Masaje reductor o reafirmante', d: '30 min', p: '30 €' },
      { n: 'Masaje drenante', d: '30 min', p: '30 €' },
      { n: 'Presoterapia', d: '30 min', p: '20 €' },
      { n: 'Bono maderoterapia · 5 sesiones', d: '', p: '230 €', tag: 'Pack' },
      { n: 'Bono masaje', d: '', p: 'Consultar', tag: 'Pack' },
      { n: 'Diagnóstico corporal', d: '30 min', p: 'Gratis' },
    ],
  },
  faciales: {
    label: 'Faciales', title: 'Una piel que respira y luce',
    all: [
      { n: 'INDIBA Facial', d: '1 h', p: '55 €', tag: 'Top' },
      { n: 'Limpieza facial profunda', d: '1 h 5 min', p: '47 €' },
      { n: 'Limpieza facial · piel madura', d: '1 h 30 min', p: '55 €' },
      { n: 'Dermapen · textura y cicatrices', d: '1 h', p: '60 €' },
      { n: 'Tratamiento facial específico', d: '1 h', p: '57 €' },
      { n: 'Masaje o drenaje facial', d: '1 h', p: '30 €' },
      { n: 'Bono INDIBA facial · 3 sesiones', d: '', p: '150 €', tag: 'Pack' },
      { n: 'Diagnóstico facial', d: '30 min', p: 'Gratis' },
    ],
  },
  mirada: {
    label: 'Cejas & pestañas', title: 'Una mirada despierta',
    all: [
      { n: 'Laminado de cejas', d: '1 h', p: '30 €', tag: 'Top' },
      { n: 'Lifting de pestañas + tinte', d: '1 h', p: '35 €' },
      { n: 'Diseño de cejas con hilo', d: '30 min', p: '20 €' },
      { n: 'Depilación de cejas con hilo', d: '20 min', p: '12 €' },
      { n: 'Tinte o henna de cejas', d: '30 min', p: '15 €' },
      { n: 'Depilación de cejas con pinza', d: '20 min', p: '10 €' },
      { n: 'Depilación de cejas con cera', d: '20 min', p: '10 €' },
    ],
  },
  manos: {
    label: 'Manos & pies', title: 'Manos y pies a punto',
    all: [
      { n: 'Manicura con nivelación y refuerzo', d: '1 h 30 min', p: '32 €' },
      { n: 'Manicura completa · semipermanente', d: '1 h', p: '25 €', tag: 'Top' },
      { n: 'Manicura completa · tradicional', d: '1 h', p: '20 €' },
      { n: 'Manicura completa · sin esmaltado', d: '50 min', p: '17 €' },
      { n: 'Limar + esmaltado semipermanente', d: '35 min', p: '17 €' },
      { n: 'Limar + esmaltado tradicional', d: '35 min', p: '15 €' },
      { n: 'Pedicura completa · semipermanente', d: '1 h', p: '35 €' },
      { n: 'Pedicura completa · tradicional', d: '1 h', p: '30 €' },
      { n: 'Pedicura sin esmaltado', d: '45 min', p: '25 €' },
      { n: 'Pedicura · limar + semipermanente', d: '45 min', p: '25 €' },
      { n: 'Pedicura · limar + tradicional', d: '35 min', p: '20 €' },
      { n: 'Retirado de semipermanente', d: '15 min', p: '5 €' },
      { n: 'Retirado de gel o acrílico', d: '30 min', p: '15 €' },
      { n: 'Reconstrucción de una uña', d: '15 min', p: '5 €' },
      { n: 'Decoración francesa', d: '', p: '3 €' },
      { n: 'Decoración · 5 uñas o más', d: '', p: '5 €' },
      { n: 'Refuerzo de gel o base rubber', d: '', p: '3 €' },
      { n: 'Aceite de cutículas', d: '5 min', p: '1 €' },
    ],
  },
  depilacion: {
    label: 'Depilación', title: 'Precisa y cuidada',
    all: [
      { n: 'Piernas · cera', d: '40 min', p: '28 €' },
      { n: 'Ingle integral · cera', d: '40 min', p: '28 €' },
      { n: 'Espalda o pecho · cera', d: '30 min', p: '20 €' },
      { n: 'Ingles bikini · cera', d: '40 min', p: '18 €', tag: 'Top' },
      { n: 'Brazos · cera', d: '30 min', p: '17 €' },
      { n: 'Axilas · cera', d: '30 min', p: '10 €' },
      { n: 'Labio o mentón · cera', d: '15 min', p: '6 €' },
      { n: 'Facial completa · hilo', d: '35 min', p: '30 €' },
      { n: 'Labio o mentón · hilo', d: '15 min', p: '8 €' },
      { n: 'Zonas pequeñas · hilo', d: '15 min', p: '5 €' },
    ],
  },
};
