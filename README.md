# Linda Vibrante

Sitio web de **Linda Vibrante**, centro de estética y bienestar en pleno centro de Vigo, junto a Plaza de España. Una landing *one-page* editorial, mobile-first, pensada para convertir visitas en reservas (Booksy / WhatsApp).

## Identidad

Concepto *editorial citrus*: base crema luminosa, **burdeos** como color de marca y **limón dorado** como único acento vivo. Tipografía **Newsreader** (display serif) + **Hanken Grotesk** (texto). Motion sutil y con propósito — smooth scroll, revelados al scroll, fotografías en B/N→color, botones magnéticos y una luz cítrica que sigue al cursor en el hero — siempre respetando `prefers-reduced-motion` y puntero fino.

## Stack

- React 18 + Vite
- CSS con custom properties (design tokens)
- Fuentes: Newsreader + Hanken Grotesk (Google Fonts)

## Estructura

```
app/
├─ index.html
└─ src/
   ├─ main.jsx · App.jsx
   ├─ styles.css · styles/    tokens.css + base.css (tokens y utilidades)
   ├─ sections/               Hero, Servicios (+ modal), ElCentro, Linda,
   │                          PrimeraVisita, Footer, Nav, MobileMenu, TabBar…
   ├─ lib/effects.js          motion central (scroll, reveals, cursor, parallax…)
   ├─ data/site.js            servicios y datos de contacto
   ├─ icons.jsx
   └─ assets/                 fotografías y marca
```

## Desarrollo

```bash
cd app
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción → app/dist/
npm run preview   # sirve la build de producción
```

Despliegue 100% estático: subir el contenido de `app/dist/` a cualquier hosting (Netlify, Vercel, GitHub Pages…).
