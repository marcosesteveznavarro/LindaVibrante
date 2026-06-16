# Linda Vibrante

Design system y sitio web de **Linda Vibrante**, centro de estética y bienestar en pleno centro de Vigo, junto a Plaza de España.

## Sobre el proyecto

Dos piezas que comparten una misma identidad:

- **Design system** — tokens de diseño (color, tipografía, espaciado) y una librería de componentes en React, con fichas-espécimen que documentan su uso.
- **Sitio web** (`app/`) — una landing *one-page* responsive y mobile-first construida con ese design system.

## Identidad

Concepto *editorial citrus*: base crema luminosa, **burdeos** como color de marca, **rosa empolvado** secundario, **limón dorado** como acento puntual y **verde hoja** para los detalles. Tipografía **Cormorant Garamond** (display) + **Hanken Grotesk** (texto).

## Stack

- React 18
- Vite
- CSS con custom properties (design tokens)

## Estructura

```
app/            Sitio web (Vite + React) — lo que se despliega
components/     Componentes del design system (core + marketing)
tokens/         Design tokens (color, tipografía, espaciado, fuentes)
guidelines/     Fichas-espécimen del design system
assets/         Logo y fotografías
styles.css      Punto de entrada de estilos (importa los tokens)
```

## Desarrollo

El sitio vive en `app/`:

```bash
cd app
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción → app/dist/
npm run preview   # sirve la build de producción
```

El despliegue es estático: basta con subir el contenido de `app/dist/` a cualquier hosting.
