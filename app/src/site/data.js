/* Linda Vibrante — kit content. Real contact data; do NOT invent.
   Photos are placeholders (no real photos uploaded yet). Exposed as the `data` module export. */
import logo from '../assets/logo.png';
import salaLimon from '../assets/photos/sala-limon.png';
import salaEspejo from '../assets/photos/sala-espejo.png';
import escaparate from '../assets/photos/escaparate.png';

export const data = {
  contact: {
    address: 'Rúa do Panamá 17, Bajo · 36203 Vigo',
    phones: ['614 501 177', '886 640 280'],
    hours: [
      { d: 'Lunes a viernes', h: '10:00–14:00 · 16:00–20:00' },
      { d: 'Sábado', h: '10:00–14:00' },
      { d: 'Domingo', h: 'Cerrado' },
    ],
    social: '@lindavibrante',
    booksy: 'https://booksy.com/es-es/140976_linda-vibrante_spa_68493_vigo',
    whatsapp: '34614501177',
    rating: 4.6,
    reviews: 20,
  },
  photos: { salaLimon, salaEspejo, escaparate, logo },
  /* Imagen asociada por categoría para el hover de la lista de servicios.
     TODO: sustituir por una foto real por tratamiento cuando estén disponibles. */
  catPhoto: {
    corporales: salaEspejo,
    faciales: salaLimon,
    mirada: salaLimon,
    unas: salaEspejo,
    depilacion: escaparate,
  },
  categories: [
    { id: 'todos', label: 'Todos' },
    { id: 'corporales', label: 'Corporales' },
    { id: 'faciales', label: 'Faciales' },
    { id: 'mirada', label: 'Cejas & pestañas' },
    { id: 'unas', label: 'Manos & pies' },
    { id: 'depilacion', label: 'Depilación' },
  ],
  services: [
    { id: 1, cat: 'corporales', name: 'Radiofrecuencia Indiba', desc: 'Diatermia que reafirma, activa la circulación y aporta luminosidad a la piel.', duration: '45 min', price: '40 €', from: true, badge: 'Top' },
    { id: 2, cat: 'corporales', name: 'Masaje descontracturante', desc: 'Trabajo profundo sobre la tensión muscular de espalda, cuello y hombros.', duration: '50 min', price: '38 €', from: true },
    { id: 3, cat: 'corporales', name: 'Masaje relajante', desc: 'Maniobras suaves y envolventes para desconectar de verdad.', duration: '50 min', price: '35 €', from: true },
    { id: 4, cat: 'corporales', name: 'Maderoterapia', desc: 'Modelado corporal con rodillos de madera para activar y reafirmar.', duration: '45 min', price: '32 €', from: true },
    { id: 5, cat: 'corporales', name: 'Presoterapia', desc: 'Drenaje por presión que alivia las piernas cansadas y la retención.', duration: '30 min', price: '25 €', from: true },
    { id: 6, cat: 'faciales', name: 'Limpieza facial', desc: 'Higiene profunda, exfoliación e hidratación para una piel que respira.', duration: '60 min', price: '40 €', from: true, badge: 'Favorito' },
    { id: 7, cat: 'faciales', name: 'Dermapen', desc: 'Microneedling para mejorar textura, marcas y firmeza del rostro.', duration: '60 min', price: '60 €', from: true },
    { id: 8, cat: 'mirada', name: 'Laminado de cejas', desc: 'Cejas peinadas y fijadas con efecto natural durante semanas.', duration: '40 min', price: '30 €' },
    { id: 9, cat: 'mirada', name: 'Tinte con henna', desc: 'Color y definición de cejas con henna, de acabado natural.', duration: '30 min', price: '18 €' },
    { id: 10, cat: 'mirada', name: 'Lifting de pestañas', desc: 'Curvatura y tinte para una mirada despierta sin extensiones.', duration: '45 min', price: '35 €' },
    { id: 11, cat: 'mirada', name: 'Extensiones de pestañas', desc: 'Volumen a medida, pelo a pelo, con acabado natural o intenso.', duration: '90 min', price: '45 €', from: true },
    { id: 12, cat: 'unas', name: 'Manicura', desc: 'Manos cuidadas con esmaltado semipermanente de larga duración.', duration: '45 min', price: '20 €', from: true },
    { id: 13, cat: 'unas', name: 'Pedicura', desc: 'Pies sanos y bonitos, con tratamiento e hidratación.', duration: '50 min', price: '25 €', from: true },
    { id: 14, cat: 'depilacion', name: 'Depilación con hilo', desc: 'Diseño preciso de cejas y facial con técnica de hilo.', duration: '20 min', price: '10 €', from: true },
    { id: 15, cat: 'depilacion', name: 'Depilación con cera', desc: 'Facial y corporal, con cera de baja temperatura.', duration: '30 min', price: '12 €', from: true },
  ],
  reviews: [
    { quote: 'Excelente lugar. Profesionales en todo.', author: 'Cliente de Google', meta: 'Reseña verificada', value: 5 },
    { quote: 'Es perfecto, me encantó, ¡volveré!', author: 'Cliente de Google', meta: 'Reseña verificada', value: 5 },
  ],
};
