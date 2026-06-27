/* Linda Vibrante — inline SVG icon set (Lucide/Feather family). */
function Svg({ size = 24, sw = 2, fill = 'none', children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === 'none' ? 'currentColor' : 'none'}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

export const ArrowRight = (p) => <Svg sw={2.2} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Svg>;
export const ArrowUpRight = (p) => <Svg sw={2} {...p}><path d="M7 17 17 7M8 7h9v9" /></Svg>;
export const Whatsapp = (p) => <Svg {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></Svg>;
export const Star = (p) => <Svg fill="currentColor" {...p}><path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 18.6 6.1 20.8l1.3-6.6L2.5 9l6.6-.8z" /></Svg>;
export const MapPin = (p) => <Svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Svg>;
export const Phone = (p) => <Svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></Svg>;
export const Clock = (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>;
export const Instagram = (p) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" /></Svg>;
export const Menu = (p) => <Svg {...p}><path d="M3 6h18M3 12h18M3 18h18" /></Svg>;
export const Close = (p) => <Svg {...p}><path d="M6 6l12 12M18 6 6 18" /></Svg>;
export const Home = (p) => <Svg sw={1.8} {...p}><path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></Svg>;
export const ListIcon = (p) => <Svg sw={1.8} {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></Svg>;
export const Calendar = (p) => <Svg sw={1.9} {...p}><rect x="3" y="4.5" width="18" height="17" rx="3" /><path d="M3 9h18M8 2v4M16 2v4" /></Svg>;
