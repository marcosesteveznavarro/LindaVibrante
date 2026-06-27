/* Linda Vibrante — imperative motion + interactions (faithful port of the prototype).
   Layout/responsiveness lives in CSS; this module owns continuous motion and the
   modal/menu interactions. Call once on mount; the returned function tears it all down.
   Initial hidden states for reveals are set in CSS under html.motion (flash-free). */

const BOOKSY = 'https://booksy.com/es-es/140976_linda-vibrante_spa_68493_vigo';

export function initSiteEffects({ services } = {}) {
  const $ = (id) => document.getElementById(id);
  const qa = (s) => [].slice.call(document.querySelectorAll(s));
  const lerp = (a, b, t) => a + (b - a) * t;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.matchMedia('(min-width: 960px)').matches;
  const cleanup = [];
  const ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  const on = (el, ev, fn, opt) => { if (!el) return; el.addEventListener(ev, fn, opt); cleanup.push(() => el.removeEventListener(ev, fn, opt)); };

  /* ---------- focus management helpers (modal + menu a11y) ---------- */
  const FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
  const focusables = (root) => [].slice.call(root.querySelectorAll(FOCUSABLE))
    .filter((el) => el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  // Keep focus inside `panel` while the layer is open; Tab/Shift+Tab wrap around.
  const trapTab = (panel) => (e) => {
    if (e.key !== 'Tab') return;
    const f = focusables(panel);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  /* ---------- nav compact + sticky booking ---------- */
  const nav = $('nav'); const navText = qa('[data-navtext]');
  let compact = null;
  const setCompact = (c) => {
    if (c === compact || !nav) return; compact = c;
    nav.style.background = c ? 'rgba(251,246,239,.88)' : 'transparent';
    nav.style.backdropFilter = c ? 'blur(14px)' : 'none';
    nav.style.webkitBackdropFilter = c ? 'blur(14px)' : 'none';
    nav.style.borderBottomColor = c ? 'var(--border-1)' : 'transparent';
    navText.forEach((e) => { e.style.color = 'var(--ink)'; });
  };
  setCompact(false);

  const sticky = $('stickyBook');
  const showSticky = (s) => {
    if (!sticky) return;
    if (!isDesktop()) { sticky.style.opacity = '0'; sticky.style.transform = 'translateY(20px)'; sticky.style.pointerEvents = 'none'; sticky.style.visibility = 'hidden'; return; }
    sticky.style.visibility = s ? 'visible' : 'hidden';
    sticky.style.pointerEvents = s ? 'auto' : 'none';
    sticky.style.opacity = s ? '1' : '0';
    sticky.style.transform = s ? 'translateY(0)' : 'translateY(20px)';
  };

  const onScrollState = () => {
    const y = window.scrollY;
    setCompact(y > 40);
    showSticky(y > window.innerHeight * 0.85);
  };
  onScrollState();
  on(window, 'scroll', onScrollState, { passive: true });
  on(window, 'resize', onScrollState);

  /* ---------- smooth scroll (Lenis-lite, desktop + fine pointer) ---------- */
  const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  let smoothTo;
  if (canHover && !rm) {
    let target = window.scrollY, current = window.scrollY, raf = 0;
    const loop = () => {
      current = lerp(current, target, 0.12);
      if (Math.abs(target - current) < 0.5) { current = target; window.scrollTo(0, current); raf = 0; return; }
      window.scrollTo(0, current); raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!raf) raf = requestAnimationFrame(loop); };
    const onWheel = (e) => {
      if (e.ctrlKey) return;
      const mo = $('svcModal'); if (mo && mo.style.display === 'flex') return;
      const mm = $('mmenu'); if (mm && mm.style.pointerEvents === 'auto') return;
      e.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY)); start();
    };
    on(window, 'wheel', onWheel, { passive: false });
    on(window, 'scroll', () => { if (!raf) { target = window.scrollY; current = window.scrollY; } }, { passive: true });
    smoothTo = (y) => { target = Math.max(0, Math.min(maxScroll(), y)); start(); };
    cleanup.push(() => { if (raf) cancelAnimationFrame(raf); });
  } else {
    smoothTo = (y) => window.scrollTo({ top: y, behavior: rm ? 'auto' : 'smooth' });
  }

  /* ---------- mobile menu ---------- */
  const hamb = $('hamb');
  let menuTrap = null, menuOpen = false;
  // Closed state: panel is offscreen but its links must NOT be tabbable.
  const setMenuInert = (closed) => {
    const p = $('mmenuPanel'); if (!p) return;
    if (closed) { p.setAttribute('inert', ''); p.setAttribute('aria-hidden', 'true'); }
    else { p.removeAttribute('inert'); p.removeAttribute('aria-hidden'); }
  };
  setMenuInert(true);
  const openMenu = () => {
    const m = $('mmenu'), p = $('mmenuPanel'), s = $('mmenuScrim'); if (!m) return;
    menuOpen = true;
    m.style.pointerEvents = 'auto'; if (p) p.style.transform = 'translateY(0)'; if (s) s.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    if (hamb) hamb.setAttribute('aria-expanded', 'true');
    setMenuInert(false);
    if (p) { menuTrap = trapTab(p); p.addEventListener('keydown', menuTrap); }
    const close = $('mmenuClose'); if (close) requestAnimationFrame(() => close.focus());
  };
  const closeMenu = () => {
    const m = $('mmenu'), p = $('mmenuPanel'), s = $('mmenuScrim'); if (!m) return;
    m.style.pointerEvents = 'none'; if (p) p.style.transform = 'translateY(-100%)'; if (s) s.style.opacity = '0';
    document.body.style.overflow = '';
    if (p && menuTrap) { p.removeEventListener('keydown', menuTrap); menuTrap = null; }
    setMenuInert(true);
    if (hamb) hamb.setAttribute('aria-expanded', 'false');
    if (menuOpen && hamb) hamb.focus(); // return focus to the trigger
    menuOpen = false;
  };
  on(hamb, 'click', openMenu);
  on($('mmenuClose'), 'click', closeMenu);
  on($('mmenuScrim'), 'click', closeMenu);
  on(document, 'keydown', (e) => { if (e.key === 'Escape' && menuOpen) closeMenu(); });

  /* ---------- anchor navigation (smooth) ---------- */
  qa('a[data-nav]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;
    on(a, 'click', (e) => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      const isMenu = a.classList.contains('mlink');
      if (isMenu) closeMenu();
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      setTimeout(() => smoothTo(Math.max(0, y)), isMenu ? 240 : 0);
    });
  });

  /* ---------- film grain ---------- */
  if (!rm) {
    const noise = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.8'%20numOctaves='2'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='180'%20height='180'%20filter='url(%23n)'%20opacity='0.5'/%3E%3C/svg%3E";
    const g = $('grain'); if (g) { g.style.backgroundImage = 'url("' + noise + '")'; g.style.backgroundSize = '180px 180px'; g.style.animation = 'lvgrain 1.1s steps(5) infinite'; }
  }

  /* ---------- custom cursor ---------- */
  if (canHover && !rm) {
    const ring = $('cur'), dot = $('curDot');
    if (ring && dot) {
      let tx = innerWidth / 2, ty = innerHeight / 2, rx = tx, ry = ty, dx = tx, dy = ty, raf = 0, shown = false;
      const loop = () => {
        rx = lerp(rx, tx, .2); ry = lerp(ry, ty, .2); dx = lerp(dx, tx, .5); dy = lerp(dy, ty, .5);
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
        dot.style.transform = 'translate(' + dx + 'px,' + dy + 'px) translate(-50%,-50%)';
        raf = requestAnimationFrame(loop);
      };
      on(window, 'pointermove', (e) => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        tx = e.clientX; ty = e.clientY;
        if (!shown) { shown = true; ring.style.opacity = '1'; dot.style.opacity = '1'; }
        if (!raf) loop();
      });
      on(document, 'pointerover', (e) => {
        const t = e.target;
        const interactive = t && t.closest && t.closest('a,button,[data-magnetic],[data-bento-card]');
        ring.style.width = interactive ? '54px' : '34px';
        ring.style.height = interactive ? '54px' : '34px';
        ring.style.borderColor = interactive ? 'rgba(247,206,10,.9)' : 'rgba(106,11,35,.55)';
        ring.style.background = interactive ? 'rgba(247,206,10,.1)' : 'transparent';
      });
      on(document, 'mouseleave', () => { ring.style.opacity = '0'; dot.style.opacity = '0'; shown = false; });
      cleanup.push(() => { if (raf) cancelAnimationFrame(raf); });
    }
  }

  /* ---------- hero citrus light (follows cursor) ---------- */
  (() => {
    const sec = $('inicio'), glow = $('heroGlow');
    if (!sec || !glow || rm) return;
    if (!canHover) { glow.style.opacity = '.45'; return; }
    let tx = 50, ty = 45, cx = 50, cy = 45, raf = 0;
    const loop = () => {
      cx = lerp(cx, tx, .12); cy = lerp(cy, ty, .12);
      glow.style.background = 'radial-gradient(circle 360px at ' + cx.toFixed(1) + '% ' + cy.toFixed(1) + '%, rgba(247,206,10,.62), transparent 70%)';
      raf = (Math.abs(tx - cx) > .1 || Math.abs(ty - cy) > .1) ? requestAnimationFrame(loop) : 0;
    };
    on(sec, 'pointerenter', () => { glow.style.opacity = '1'; });
    on(sec, 'pointermove', (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const r = sec.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) loop();
    });
    on(sec, 'pointerleave', () => { glow.style.opacity = '0'; });
    cleanup.push(() => { if (raf) cancelAnimationFrame(raf); });
  })();

  /* ---------- kinetic hero headline ----------
     Handled in pure CSS (Hero.css → @keyframes lvHeroWord) so it is robust to
     HMR / init failures and never leaves the headline stuck hidden. */

  /* ---------- scroll reveal ---------- */
  (() => {
    const els = qa('[data-reveal], [data-reveal-img]');
    if (rm) return; // CSS already shows final state under reduced motion
    const reveal = (el) => {
      const d = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      if (el.hasAttribute('data-reveal')) { el.style.transition = 'transform 1s cubic-bezier(.16,1,.3,1) ' + d + 'ms, opacity .8s ease ' + d + 'ms'; el.style.transform = 'none'; el.style.opacity = '1'; }
      if (el.hasAttribute('data-reveal-img')) { el.style.transition = 'filter 1.2s ease ' + d + 'ms, transform .8s cubic-bezier(.16,1,.3,1)'; el.style.filter = 'grayscale(0) brightness(1)'; }
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
      els.forEach((el) => io.observe(el));
      cleanup.push(() => io.disconnect());
    } else { els.forEach(reveal); }
    const safety = setTimeout(() => els.forEach(reveal), 2200);
    cleanup.push(() => clearTimeout(safety));
  })();

  /* ---------- parallax ---------- */
  if (!rm) {
    const layers = qa('[data-parallax]').map((el) => ({ el, f: parseFloat(el.getAttribute('data-parallax')) || 0.08 }));
    if (layers.length) {
      let raf = 0;
      const upd = () => {
        raf = 0; const vh = window.innerHeight;
        layers.forEach((o) => {
          const r = o.el.getBoundingClientRect(); const center = r.top + r.height / 2; const prog = (center - vh / 2) / vh;
          o.el.style.transform = 'translateY(' + (-prog * o.f * 100).toFixed(1) + 'px)';
        });
      };
      const req = () => { if (!raf) raf = requestAnimationFrame(upd); };
      on(window, 'scroll', req, { passive: true }); on(window, 'resize', req); upd();
      cleanup.push(() => { if (raf) cancelAnimationFrame(raf); });
    }
  }

  /* ---------- magnetic buttons ---------- */
  if (canHover && !rm) {
    qa('[data-magnetic]').forEach((b) => {
      let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
      const loop = () => {
        x = lerp(x, tx, .2); y = lerp(y, ty, .2);
        b.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        if (Math.abs(tx - x) < .1 && Math.abs(ty - y) < .1 && tx === 0 && ty === 0) { b.style.transform = 'translate(0,0)'; raf = 0; return; }
        raf = requestAnimationFrame(loop);
      };
      on(b, 'pointermove', (e) => { const r = b.getBoundingClientRect(); tx = (e.clientX - (r.left + r.width / 2)) * .3; ty = (e.clientY - (r.top + r.height / 2)) * .45; if (!raf) loop(); });
      on(b, 'pointerleave', () => { tx = 0; ty = 0; if (!raf) loop(); });
    });
  }

  /* ---------- services modal ---------- */
  const svcModal = $('svcModal'), svcPanel = $('svcPanel'), svcScrim = $('svcScrim'), svcBody = $('svcBody');
  let svcTrap = null, svcReturn = null;
  if (svcModal) svcModal.setAttribute('aria-hidden', 'true'); // closed by default
  const closeSvc = () => {
    if (!svcModal) return;
    if (svcPanel) { svcPanel.style.opacity = '0'; svcPanel.style.transform = 'translateY(18px) scale(.98)'; }
    if (svcScrim) svcScrim.style.opacity = '0';
    if (svcPanel && svcTrap) { svcPanel.removeEventListener('keydown', svcTrap); svcTrap = null; }
    setTimeout(() => { svcModal.style.display = 'none'; }, 360);
    svcModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (svcReturn && svcReturn.focus) svcReturn.focus(); // return focus to the card that opened it
    svcReturn = null;
  };
  const openModal = (groupId) => {
    const g = services && services[groupId];
    if (!svcModal || !svcBody || !g) { window.open(BOOKSY, '_blank', 'noopener'); return; }
    svcReturn = document.activeElement;
    const ct = $('svcCatTxt'), tt = $('svcTitle');
    if (ct) ct.textContent = g.label; if (tt) tt.textContent = g.title;
    svcBody.replaceChildren();
    g.all.forEach((s) => {
      const row = document.createElement('div'); row.className = 'svc-row';
      const name = document.createElement('span'); name.className = 'svc-name'; name.textContent = s.n;
      if (s.tag) { name.appendChild(document.createTextNode(' ')); const t = document.createElement('span'); t.className = 'svc-tag'; t.textContent = s.tag; name.appendChild(t); }
      if (s.d) { const du = document.createElement('span'); du.className = 'svc-dur'; du.textContent = s.d; name.appendChild(du); }
      const price = document.createElement('span'); price.className = 'svc-price'; price.textContent = s.p;
      row.appendChild(name); row.appendChild(price);
      svcBody.appendChild(row);
    });
    svcBody.scrollTop = 0;
    svcModal.style.display = 'flex';
    svcModal.removeAttribute('aria-hidden');
    requestAnimationFrame(() => { if (svcScrim) svcScrim.style.opacity = '1'; if (svcPanel) { svcPanel.style.opacity = '1'; svcPanel.style.transform = 'translateY(0) scale(1)'; } });
    document.body.style.overflow = 'hidden';
    if (svcPanel) {
      svcTrap = trapTab(svcPanel); svcPanel.addEventListener('keydown', svcTrap);
      const closeBtn = $('svcClose'); if (closeBtn) requestAnimationFrame(() => closeBtn.focus());
    }
  };
  on($('svcClose'), 'click', closeSvc);
  on(svcScrim, 'click', closeSvc);
  on(document, 'keydown', (e) => { if (e.key === 'Escape' && svcModal && svcModal.style.display === 'flex') closeSvc(); });

  /* ---------- bento interactions ---------- */
  qa('[data-bento-card]').forEach((card) => {
    card.style.transition = 'transform .55s cubic-bezier(.16,1,.3,1), box-shadow .55s ease';
    const img = card.querySelector('[data-bento-img]');
    on(card, 'click', () => { const gp = card.getAttribute('data-group'); if (gp) openModal(gp); else window.open(BOOKSY, '_blank', 'noopener'); });
    on(card, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const gp = card.getAttribute('data-group'); if (gp) openModal(gp); } });
    if (canHover && !rm) {
      on(card, 'pointerenter', () => { card.style.transform = 'translateY(-6px)'; card.style.boxShadow = '0 44px 80px -38px rgba(74,10,27,.6)'; if (img) img.style.transform = 'scale(1.07)'; });
      on(card, 'pointerleave', () => { card.style.transform = ''; card.style.boxShadow = ''; if (img) img.style.transform = ''; });
    }
  });

  return () => { cleanup.forEach((fn) => { try { fn(); } catch (e) { /* noop */ } }); document.body.style.overflow = ''; };
}
