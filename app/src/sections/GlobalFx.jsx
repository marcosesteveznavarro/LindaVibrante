/* Global visual effects layer: film grain overlay + custom cursor nodes.
   All behaviour is wired imperatively in lib/effects.js; styling lives in base.css.
   These are inert (and hidden) under touch / reduced-motion. */
export default function GlobalFx() {
  return (
    <>
      <div id="grain" aria-hidden="true" />
      <span id="cur" aria-hidden="true" />
      <span id="curDot" aria-hidden="true" />
    </>
  );
}
