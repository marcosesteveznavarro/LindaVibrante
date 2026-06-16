import React from 'react';

/* Linda Vibrante — UI kit icon set.
   SUBSTITUTION: no brand icon set was supplied, so these are Lucide line icons
   (24×24, 2px stroke, round caps/joins) — the closest editorial match. Flagged in README.
   Exposed on window.LVIcons for the other kit scripts. */
const _s = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
const mk = (children) => (props = {}) => {
  const { size, ...rest } = props;
  return React.createElement('svg', { ..._s, ...(size ? { width: size, height: size } : null), ...rest }, children);
};
const P = (d, key) => React.createElement('path', { d, key });
const C = (cx, cy, r, key) => React.createElement('circle', { cx, cy, r, key });
const L = (x1, y1, x2, y2, key) => React.createElement('line', { x1, y1, x2, y2, key });

const LVIcons = {
  MapPin: mk([P('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z', 'a'), C(12, 10, 3, 'b')]),
  Clock: mk([C(12, 12, 10, 'a'), React.createElement('polyline', { points: '12 6 12 12 16 14', key: 'b' })]),
  Phone: mk([P('M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z', 'a')]),
  Instagram: mk([React.createElement('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, key: 'a' }), P('M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z', 'b'), L(17.5, 6.5, 17.51, 6.5, 'c')]),
  Menu: mk([L(3, 6, 21, 6, 'a'), L(3, 12, 21, 12, 'b'), L(3, 18, 21, 18, 'c')]),
  X: mk([L(18, 6, 6, 18, 'a'), L(6, 6, 18, 18, 'b')]),
  ArrowRight: mk([L(5, 12, 19, 12, 'a'), React.createElement('polyline', { points: '13 6 19 12 13 18', key: 'b' })]),
  ArrowUpRight: mk([L(7, 17, 17, 7, 'a'), React.createElement('polyline', { points: '7 7 17 7 17 17', key: 'b' })]),
  Star: mk([P('M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z', 'a')]),
  Heart: mk([P('M20.8 8.6a5 5 0 0 0-8.8-3 5 5 0 0 0-8.8 3c0 4.6 8.8 9.9 8.8 9.9s8.8-5.3 8.8-9.9z', 'a')]),
  Check: mk([React.createElement('polyline', { points: '20 6 9 17 4 12', key: 'a' })]),
  ChevronRight: mk([React.createElement('polyline', { points: '9 18 15 12 9 6', key: 'a' })]),
  Calendar: mk([React.createElement('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2, key: 'a' }), L(16, 2, 16, 6, 'b'), L(8, 2, 8, 6, 'c'), L(3, 10, 21, 10, 'd')]),
  Sparkle: mk([P('M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z', 'a')]),
  Leaf: mk([P('M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-5 11-9 11', 'a'), P('M4 20c2-3 5-5 9-6', 'b')]),
  Quote: mk([P('M3 12c0-4 2-7 6-7v3c-2 0-3 1.5-3 4h3v5H3zM13 12c0-4 2-7 6-7v3c-2 0-3 1.5-3 4h3v5h-6z', 'a')]),
};
export { LVIcons };
