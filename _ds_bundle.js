/* @ds-bundle: {"format":3,"namespace":"LindaVibranteDesignSystem_9a98cd","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Rating","sourcePath":"components/marketing/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"WhatsAppFab","sourcePath":"components/marketing/WhatsAppFab.jsx"},{"name":"Wordmark","sourcePath":"components/marketing/Wordmark.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"080bda6a0c82","components/core/Badge.jsx":"149ddbeff49d","components/core/Button.jsx":"e06342a94d1d","components/core/Card.jsx":"034f439ddac9","components/core/Chip.jsx":"8a9906dcf037","components/core/IconButton.jsx":"f2591b85c48a","components/core/Input.jsx":"ae81260c84e0","components/marketing/Rating.jsx":"d4f98d963494","components/marketing/SectionHeading.jsx":"37f4030ac215","components/marketing/ServiceCard.jsx":"171d7cdc5005","components/marketing/TestimonialCard.jsx":"47e498df8c9e","components/marketing/WhatsAppFab.jsx":"4826141958aa","components/marketing/Wordmark.jsx":"36d72949d083","ui_kits/website/Chrome.jsx":"bea46802887f","ui_kits/website/Icons.jsx":"52966999ae2d","ui_kits/website/Sections.jsx":"2d3b194f8fdb","ui_kits/website/ServiceList.jsx":"0d916c2c72e2","ui_kits/website/data.js":"b391e4c03b76"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LindaVibranteDesignSystem_9a98cd = window.LindaVibranteDesignSystem_9a98cd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — circular image or initials. Used for team members & testimonials.
 * Falls back to initials on a warm tint when no `src`.
 */
function Avatar({
  src,
  name = '',
  size = 48,
  ring = false,
  style = {}
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--leaf-100)',
      color: 'var(--leaf-600)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.38,
      flex: 'none',
      border: ring ? '2px solid var(--white)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small status/marketing label. e.g. "Novedad", "Top ventas", "Indiba".
 * Tones: accent (lemon), leaf, ink, neutral, success.
 */
function Badge({
  children,
  tone = 'accent',
  solid = false,
  dot = false,
  style = {}
}) {
  const tones = {
    accent: {
      soft: {
        background: 'var(--lemon-100)',
        color: 'var(--lemon-600)',
        border: '1px solid var(--lemon-300)'
      },
      solid: {
        background: 'var(--lemon-500)',
        color: 'var(--ink-900)'
      },
      dot: 'var(--lemon-500)'
    },
    leaf: {
      soft: {
        background: 'var(--leaf-100)',
        color: 'var(--leaf-600)',
        border: '1px solid var(--leaf-300)'
      },
      solid: {
        background: 'var(--leaf-600)',
        color: 'var(--cream-50)'
      },
      dot: 'var(--leaf-500)'
    },
    ink: {
      soft: {
        background: 'var(--cream-100)',
        color: 'var(--ink-900)',
        border: '1px solid var(--border-strong)'
      },
      solid: {
        background: 'var(--ink-900)',
        color: 'var(--cream-50)'
      },
      dot: 'var(--ink-700)'
    },
    neutral: {
      soft: {
        background: 'var(--sand-200)',
        color: 'var(--ink-700)',
        border: '1px solid transparent'
      },
      solid: {
        background: 'var(--ink-300)',
        color: 'var(--cream-50)'
      },
      dot: 'var(--ink-300)'
    },
    success: {
      soft: {
        background: 'var(--success-100)',
        color: 'var(--success-600)',
        border: '1px solid transparent'
      },
      solid: {
        background: 'var(--success-600)',
        color: '#fff'
      },
      dot: 'var(--success-600)'
    }
  };
  const t = tones[tone] || tones.accent;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      ...(solid ? t.solid : t.soft),
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: solid ? 'currentColor' : t.dot
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Linda Vibrante's primary action.
 * Variants: primary (ink green), accent (lemon — reserve for the hero CTA like "Reservar"),
 * secondary (outline), ghost (text). Sizes: sm | md | lg. Mobile-first: min 44px tap target.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  iconRight = null,
  as = 'button',
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '0 16px',
      height: 40,
      fontSize: 14,
      gap: 8,
      radius: 'var(--radius-pill)'
    },
    md: {
      padding: '0 22px',
      height: 48,
      fontSize: 15,
      gap: 9,
      radius: 'var(--radius-pill)'
    },
    lg: {
      padding: '0 30px',
      height: 56,
      fontSize: 16.5,
      gap: 11,
      radius: 'var(--radius-pill)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      base: {
        background: 'var(--primary)',
        color: 'var(--text-on-ink)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-sm)'
      },
      hover: {
        background: 'var(--primary-hover)'
      },
      press: {
        background: 'var(--primary-press)'
      }
    },
    accent: {
      base: {
        background: 'var(--accent)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-accent)'
      },
      hover: {
        background: 'var(--accent-hover)'
      },
      press: {
        background: 'var(--accent-press)'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1.5px solid var(--border-strong)'
      },
      hover: {
        background: 'var(--cream-100)',
        border: '1.5px solid var(--ink-300)'
      },
      press: {
        background: 'var(--sand-200)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--cream-100)'
      },
      press: {
        background: 'var(--sand-200)'
      }
    }
  };
  const v = variants[variant] || variants.primary;
  const composed = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    minHeight: 'var(--tap-min)',
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: s.radius,
    width: fullWidth ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.press : null),
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: composed,
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.05em'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base surface container. White by default; `tint` (lemon wash),
 * `leaf`, or `ink` (dark immersive) variants. `interactive` adds hover lift.
 */
function Card({
  children,
  variant = 'plain',
  interactive = false,
  padding = 20,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    tint: {
      background: 'var(--lemon-100)',
      color: 'var(--ink-900)',
      border: '1px solid var(--lemon-300)'
    },
    leaf: {
      background: 'var(--leaf-100)',
      color: 'var(--ink-900)',
      border: '1px solid var(--leaf-300)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.plain;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover && interactive ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/**
 * Chip — selectable filter pill for service categories (Facial, Cuerpo, Pestañas…).
 * Controlled via `selected`. Tap toggles in the parent.
 */
function Chip({
  children,
  selected = false,
  icon = null,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 40,
      minHeight: 40,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1,
      transition: 'all var(--dur-fast) var(--ease-out)',
      background: selected ? 'var(--ink-900)' : hover ? 'var(--cream-100)' : 'var(--white)',
      color: selected ? 'var(--cream-50)' : 'var(--ink-700)',
      border: selected ? '1.5px solid var(--ink-900)' : '1.5px solid var(--border-strong)',
      boxShadow: selected ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.05em'
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/round tappable icon. Used for nav, close, share, social.
 * Variants: solid (ink), soft (cream tint), ghost, accent (lemon).
 */
function IconButton({
  children,
  label,
  variant = 'soft',
  size = 'md',
  round = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      base: {
        background: 'var(--ink-900)',
        color: 'var(--cream-50)'
      },
      hover: {
        background: 'var(--ink-700)'
      }
    },
    soft: {
      base: {
        background: 'var(--cream-100)',
        color: 'var(--ink-900)',
        border: '1px solid var(--border)'
      },
      hover: {
        background: 'var(--sand-200)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--ink-700)'
      },
      hover: {
        background: 'var(--cream-100)'
      }
    },
    accent: {
      base: {
        background: 'var(--lemon-500)',
        color: 'var(--ink-900)'
      },
      hover: {
        background: 'var(--lemon-400)'
      }
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      border: '1px solid transparent',
      cursor: 'pointer',
      fontSize: dim * 0.42,
      lineHeight: 0,
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: press ? 'scale(0.92)' : 'scale(1)',
      ...v.base,
      ...(hover ? v.hover : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon and hint/error.
 * Mobile-first sizing; calm cream-tinted fill, lemon focus ring.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  type = 'text',
  id,
  value,
  onChange,
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '0.01em'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 50,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      border: `1.5px solid ${error ? 'var(--danger-600)' : focus ? 'var(--lemon-500)' : 'var(--border-strong)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      fontSize: 18
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--danger-600)',
      fontWeight: 500
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Rating.jsx
try { (() => {
function Star({
  fill = 1,
  size = 16
}) {
  // fill: 1 full, 0 empty, 0..1 partial
  const id = 'st' + Math.random().toString(36).slice(2, 8);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id
  }, /*#__PURE__*/React.createElement("stop", {
    offset: `${fill * 100}%`,
    stopColor: "var(--lemon-500)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: `${fill * 100}%`,
    stopColor: "var(--sand-300)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 6.06 6.6.86-4.85 4.55 1.24 6.53L12 17.9l-5.89 3.06 1.24-6.53L2.5 9.42l6.6-.86z",
    fill: `url(#${id})`
  }));
}

/**
 * Rating — star row + numeric score + optional review count.
 * Used for the 4,6 social proof. `compact` hides the label text.
 */
function Rating({
  value = 4.6,
  count,
  size = 16,
  showValue = true,
  label,
  style = {}
}) {
  const stars = [0, 1, 2, 3, 4].map(i => Math.max(0, Math.min(1, value - i)));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, stars.map((f, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: f,
    size: size
  }))), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.92,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, value.toLocaleString('es-ES', {
    minimumFractionDigits: 1
  })) : null, count != null || label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, label || `(${count}+ reseñas)`) : null);
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Rating.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — editorial eyebrow + serif title (+ optional lead).
 * The eyebrow carries a lemon regleta. `align` left (default) or center.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  theme = 'dark',
  style = {}
}) {
  const onDark = theme === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? '36rem' : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: onDark ? 'var(--lemon-400)' : 'var(--leaf-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1.5,
      background: 'var(--lemon-500)',
      display: 'inline-block'
    }
  }), eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.04,
      letterSpacing: '-0.015em',
      color: onDark ? 'var(--cream-50)' : 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55,
      fontWeight: 400,
      color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/**
 * ServiceCard — a catalog item for the services list.
 * Name, short description, duration, price (optional "desde"), and a Reservar link.
 * `media` accepts an image URL (real photo of the centre). Falls back to a calm tint block.
 */
function ServiceCard({
  name,
  description,
  duration,
  price,
  fromPrice = false,
  badge,
  media,
  bookHref = '#booksy',
  onBook,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'stretch',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 12,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--leaf-100)',
      position: 'relative',
      backgroundImage: media ? `url(${media})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, !media ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--leaf-300)',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 13
    }
  }, "foto") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 8,
      padding: '4px 2px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      minWidth: 0,
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, name), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, badge) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      lineHeight: 1.45,
      color: 'var(--text-body)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, duration ? /*#__PURE__*/React.createElement("span", null, duration) : null, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700
    }
  }, fromPrice ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "desde ") : null, price) : null), /*#__PURE__*/React.createElement("a", {
    href: bookHref,
    onClick: onBook,
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--lemon-500)' : 'var(--cream-100)',
      color: 'var(--ink-900)',
      border: '1px solid ' + (hover ? 'var(--lemon-500)' : 'var(--border-strong)'),
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 700,
      textDecoration: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, "Reservar"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
/**
 * TestimonialCard — a real review with quote, stars and author.
 * `variant="ink"` for dark immersive sections.
 */
function TestimonialCard({
  quote,
  author,
  meta,
  value = 5,
  avatarSrc,
  variant = 'plain',
  style = {}
}) {
  const onDark = variant === 'ink';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      background: onDark ? 'var(--ink-900)' : 'var(--surface-card)',
      border: onDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      boxShadow: onDark ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 0.5,
      height: 22,
      color: 'var(--lemon-500)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 21,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      color: onDark ? 'var(--cream-50)' : 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, quote), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: value,
    size: 15,
    showValue: false
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: author,
    size: 42
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14.5,
      color: onDark ? 'var(--cream-50)' : 'var(--text-strong)',
      whiteSpace: 'nowrap'
    }
  }, author), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, meta) : null)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/WhatsAppFab.jsx
try { (() => {
const WA_PATH = 'M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z';

/**
 * WhatsAppFab — the permanent WhatsApp contact action.
 * `floating` = fixed bottom-right pill (default for mobile views).
 * Always links to wa.me. Keep the WhatsApp green for recognizability.
 */
function WhatsAppFab({
  phone = '34614501177',
  message = 'Hola, me gustaría pedir información 🙂',
  label = 'WhatsApp',
  floating = true,
  expanded = true,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Escr\xEDbenos por WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 56,
      padding: expanded ? '0 22px 0 18px' : 0,
      width: expanded ? 'auto' : 56,
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--whatsapp-press)' : 'var(--whatsapp)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15.5,
      textDecoration: 'none',
      boxShadow: '0 12px 28px -8px rgba(37,211,102,0.5)',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...(floating ? {
        position: 'fixed',
        right: 18,
        bottom: 18,
        zIndex: 60
      } : null),
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: WA_PATH
  })), expanded ? label : null);
}
Object.assign(__ds_scope, { WhatsAppFab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/WhatsAppFab.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Wordmark.jsx
try { (() => {
/**
 * Wordmark — Linda Vibrante's typographic lockup, drawn from the real logo
 * (classical burgundy caps + a lemon-dot accent for the monogram's "&").
 * `theme="light"` for dark/burgundy backgrounds. For the full crest, use the
 * logo image at assets/logo.png.
 */
function Wordmark({
  size = 24,
  theme = 'dark',
  showTag = false,
  style = {}
}) {
  const onDark = theme === 'light';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.18,
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.34,
      color: onDark ? 'var(--cream-50)' : 'var(--wine-700)'
    }
  }, "Linda", /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.2,
      height: size * 0.2,
      borderRadius: 999,
      background: 'var(--lemon-500)',
      display: 'inline-block',
      boxShadow: 'inset 0 0 0 1px rgba(217,180,0,0.5)'
    }
  }), "Vibrante"), showTag ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size * 0.3,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.26em',
      color: onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, "Centro de est\xE9tica \xB7 Vigo") : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Wordmark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Linda Vibrante — chrome for the single-page site. window.LVChrome
   Nav (compacting + smooth-scroll), MobileMenu, Footer, Photo, Reveal, scrollToId. */
const {
  Wordmark,
  IconButton,
  Button
} = window.LindaVibranteDesignSystem_9a98cd;
const I = window.LVIcons;
const D = window.LVData;
const NAV = [['inicio', 'Inicio'], ['servicios', 'Servicios'], ['centro', 'El centro'], ['resenas', 'Reseñas'], ['contacto', 'Contacto']];
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 62;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced() ? 'auto' : 'smooth'
  });
}

/* Scroll-reveal: fade + rise when entering the viewport. Respects reduced-motion.
   IntersectionObserver drives the effect; a timer safety-net guarantees content
   is never left hidden (e.g. in non-rendering/automation contexts). */
function Reveal({
  children,
  delay = 0,
  y = 24,
  style = {}
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (prefersReduced()) {
      setSeen(true);
      return;
    }
    const el = ref.current;
    if (!el) {
      setSeen(true);
      return;
    }
    let done = false;
    const reveal = () => {
      if (!done) {
        done = true;
        setSeen(true);
      }
    };
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) reveal();
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -6% 0px'
      });
      io.observe(el);
    } else {
      reveal();
    }
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 0.9 && r.bottom > 0) reveal();
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    const t = setTimeout(reveal, 1400); // safety net — never leave content hidden
    return () => {
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      transform: seen ? 'none' : `translateY(${y}px)`,
      transition: `transform 0.6s var(--ease-out) ${delay}ms`,
      willChange: 'transform',
      ...style
    }
  }, children);
}

/* Active-section + compacting state for the nav. */
function useChrome() {
  const [compact, setCompact] = React.useState(false);
  const [active, setActive] = React.useState('inicio');
  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: '-45% 0px -50% 0px'
    });
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);
  return {
    compact,
    active
  };
}
function Nav({
  d,
  onMenu
}) {
  const {
    compact,
    active
  } = useChrome();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: compact ? 'color-mix(in srgb, var(--cream-50) 90%, transparent)' : 'transparent',
      backdropFilter: compact ? 'blur(12px)' : 'none',
      borderBottom: '1px solid ' + (compact ? 'var(--border)' : 'transparent'),
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: d ? compact ? '12px 40px' : '20px 40px' : compact ? '10px 18px' : '16px 18px',
      transition: 'padding var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => scrollToId('inicio'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: d ? 24 : 21
  })), d ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => scrollToId(id),
    style: {
      cursor: 'pointer',
      fontSize: 15,
      fontWeight: 600,
      color: active === id ? 'var(--wine-700)' : 'var(--text-body)',
      paddingBottom: 3,
      borderBottom: '2px solid ' + (active === id ? 'var(--lemon-500)' : 'transparent'),
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    as: "a",
    href: D.contact.booksy
  }, "Reservar")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    as: "a",
    href: D.contact.booksy
  }, "Reservar"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Men\xFA",
    variant: "soft",
    onClick: onMenu
  }, /*#__PURE__*/React.createElement(I.Menu, null)))));
}
function MobileMenu({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,8,12,0.45)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--wine-900)',
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22,
    theme: "light"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cerrar",
    variant: "ghost",
    onClick: onClose,
    style: {
      color: 'var(--cream-50)'
    }
  }, /*#__PURE__*/React.createElement(I.X, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map(([id, label], i) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => {
      onClose();
      setTimeout(() => scrollToId(id), 240);
    },
    style: {
      cursor: 'pointer',
      padding: '16px 4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: 'var(--cream-50)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      opacity: open ? 1 : 0,
      transform: open ? 'none' : 'translateY(12px)',
      transition: `opacity var(--dur-base) var(--ease-out) ${open ? 120 + i * 50 : 0}ms, transform var(--dur-base) var(--ease-out) ${open ? 120 + i * 50 : 0}ms`
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lemon-400)'
    }
  }, /*#__PURE__*/React.createElement(I.ArrowUpRight, {
    size: 22
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    as: "a",
    href: D.contact.booksy,
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 18
    })
  }, "Reservar en Booksy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-on-ink-muted)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(I.Instagram, {
    size: 16
  }), " ", D.contact.social))));
}

/* Editorial photo — real image when `src` is given, else a tinted placeholder. */
function Photo({
  src,
  alt = '',
  label = 'foto del centro',
  tone = 'leaf',
  radius = 16,
  height = '100%',
  objectPosition = 'center',
  parallax = 0,
  style = {}
}) {
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (!parallax || prefersReduced()) return;
    let raf = 0;
    const onScroll = () => {
      raf = raf || requestAnimationFrame(() => {
        raf = 0;
        const el = imgRef.current;
        if (!el) return;
        const r = el.parentElement.getBoundingClientRect();
        const prog = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translateY(${(-prog * parallax).toFixed(1)}px) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);
  const bg = tone === 'lemon' ? 'var(--lemon-100)' : tone === 'rose' || tone === 'blush' ? 'var(--rose-100)' : 'var(--leaf-100)';
  const fg = tone === 'lemon' ? 'var(--lemon-600)' : tone === 'rose' || tone === 'blush' ? 'var(--wine-500)' : 'var(--leaf-600)';
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height,
        borderRadius: radius,
        overflow: 'hidden',
        background: bg,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      ref: imgRef,
      src: src,
      alt: alt || label,
      loading: "lazy",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        display: 'block',
        transform: parallax ? 'scale(1.12)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        boxShadow: 'inset 0 0 0 1px rgba(76,10,27,0.08)',
        borderRadius: radius,
        pointerEvents: 'none'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${bg}, ${bg} 22px, transparent 22px, transparent 44px), ${bg}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(I.Sparkle, {
    size: 15
  }), " ", label));
}
function SocialLink({
  icon,
  label
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      color: h ? 'var(--ink-900)' : 'var(--cream-50)',
      background: h ? 'var(--lemon-500)' : 'rgba(255,255,255,0.08)',
      transition: 'all var(--dur-fast) var(--ease-out)',
      transform: h ? 'translateY(-2px)' : 'none'
    }
  }, icon);
}
function Footer({
  d
}) {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contacto",
    style: {
      background: 'var(--ink-950)',
      color: 'var(--cream-50)',
      padding: d ? '80px 40px 32px' : '56px 22px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: d ? 'grid' : 'block',
      gridTemplateColumns: d ? '1fr 1fr' : 'none',
      gap: 48,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: 'var(--lemon-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1.5,
      background: 'var(--lemon-500)'
    }
  }), " Vis\xEDtanos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d ? '2.6rem' : '2rem',
      lineHeight: 1.04,
      color: 'var(--cream-50)'
    }
  }, "Te esperamos en", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--lemon-400)'
    }
  }, "el centro de Vigo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      margin: '24px 0',
      fontSize: 15,
      color: 'var(--text-on-ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lemon-400)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 19
  })), D.contact.address), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lemon-400)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.Phone, {
    size: 19
  })), D.contact.phones.join(' · ')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lemon-400)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.Clock, {
    size: 19
  })), /*#__PURE__*/React.createElement("span", null, "L\u2013V 10:00\u201314:00 \xB7 16:00\u201320:00", /*#__PURE__*/React.createElement("br", null), "S\xE1bado 10:00\u201314:00 \xB7 Domingo cerrado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SocialLink, {
    icon: /*#__PURE__*/React.createElement(I.Instagram, {
      size: 20
    }),
    label: "Instagram"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: /*#__PURE__*/React.createElement(I.Heart, {
      size: 20
    }),
    label: "Facebook"
  }), /*#__PURE__*/React.createElement(SocialLink, {
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 20
    }),
    label: "TikTok"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-ink-muted)'
    }
  }, D.contact.social, " \xB7 Instagram \xB7 Facebook \xB7 TikTok")), /*#__PURE__*/React.createElement("a", {
    href: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Linda Vibrante, ' + D.contact.address),
    target: "_blank",
    rel: "noopener",
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      minHeight: d ? 'auto' : 220,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: D.photos.escaparate,
    alt: "Escaparate de Linda Vibrante en R\xFAa do Panam\xE1 17",
    tone: "rose",
    radius: 0,
    height: "100%",
    objectPosition: "center 40%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,8,12,0.55), rgba(20,8,12,0.05))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 20,
      right: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      background: 'var(--lemon-500)',
      color: 'var(--ink-900)',
      fontWeight: 700,
      fontSize: 14,
      padding: '8px 14px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 16
  }), " R\xFAa do Panam\xE1 17"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      color: 'var(--cream-50)',
      fontWeight: 600,
      fontSize: 14
    }
  }, "C\xF3mo llegar ", /*#__PURE__*/React.createElement(I.ArrowUpRight, {
    size: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.1)',
      margin: '32px 0 18px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 12.5,
      color: 'var(--text-on-ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Linda Vibrante \xB7 Centro de est\xE9tica \xB7 Vigo"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    as: "a",
    href: D.contact.booksy,
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 16
    })
  }, "Reservar cita"))));
}
window.LVChrome = {
  Nav,
  MobileMenu,
  Footer,
  Photo,
  Reveal,
  scrollToId
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
/* Linda Vibrante — UI kit icon set.
   SUBSTITUTION: no brand icon set was supplied, so these are Lucide line icons
   (24×24, 2px stroke, round caps/joins) — the closest editorial match. Flagged in README.
   Exposed on window.LVIcons for the other kit scripts. */
const _s = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
const mk = children => (props = {}) => {
  const {
    size,
    ...rest
  } = props;
  return React.createElement('svg', {
    ..._s,
    ...(size ? {
      width: size,
      height: size
    } : null),
    ...rest
  }, children);
};
const P = (d, key) => React.createElement('path', {
  d,
  key
});
const C = (cx, cy, r, key) => React.createElement('circle', {
  cx,
  cy,
  r,
  key
});
const L = (x1, y1, x2, y2, key) => React.createElement('line', {
  x1,
  y1,
  x2,
  y2,
  key
});
const LVIcons = {
  MapPin: mk([P('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z', 'a'), C(12, 10, 3, 'b')]),
  Clock: mk([C(12, 12, 10, 'a'), React.createElement('polyline', {
    points: '12 6 12 12 16 14',
    key: 'b'
  })]),
  Phone: mk([P('M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z', 'a')]),
  Instagram: mk([React.createElement('rect', {
    x: 2,
    y: 2,
    width: 20,
    height: 20,
    rx: 5,
    key: 'a'
  }), P('M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z', 'b'), L(17.5, 6.5, 17.51, 6.5, 'c')]),
  Menu: mk([L(3, 6, 21, 6, 'a'), L(3, 12, 21, 12, 'b'), L(3, 18, 21, 18, 'c')]),
  X: mk([L(18, 6, 6, 18, 'a'), L(6, 6, 18, 18, 'b')]),
  ArrowRight: mk([L(5, 12, 19, 12, 'a'), React.createElement('polyline', {
    points: '13 6 19 12 13 18',
    key: 'b'
  })]),
  ArrowUpRight: mk([L(7, 17, 17, 7, 'a'), React.createElement('polyline', {
    points: '7 7 17 7 17 17',
    key: 'b'
  })]),
  Star: mk([P('M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z', 'a')]),
  Heart: mk([P('M20.8 8.6a5 5 0 0 0-8.8-3 5 5 0 0 0-8.8 3c0 4.6 8.8 9.9 8.8 9.9s8.8-5.3 8.8-9.9z', 'a')]),
  Check: mk([React.createElement('polyline', {
    points: '20 6 9 17 4 12',
    key: 'a'
  })]),
  ChevronRight: mk([React.createElement('polyline', {
    points: '9 18 15 12 9 6',
    key: 'a'
  })]),
  Calendar: mk([React.createElement('rect', {
    x: 3,
    y: 4,
    width: 18,
    height: 18,
    rx: 2,
    key: 'a'
  }), L(16, 2, 16, 6, 'b'), L(8, 2, 8, 6, 'c'), L(3, 10, 21, 10, 'd')]),
  Sparkle: mk([P('M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z', 'a')]),
  Leaf: mk([P('M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-5 11-9 11', 'a'), P('M4 20c2-3 5-5 9-6', 'b')]),
  Quote: mk([P('M3 12c0-4 2-7 6-7v3c-2 0-3 1.5-3 4h3v5H3zM13 12c0-4 2-7 6-7v3c-2 0-3 1.5-3 4h3v5h-6z', 'a')])
};
window.LVIcons = LVIcons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Linda Vibrante — page sections for the single-page site. window.LVSections */
const SXLV = window.LindaVibranteDesignSystem_9a98cd;
const {
  Photo: SXPhoto,
  Reveal: SXReveal
} = window.LVChrome;
const SXI = window.LVIcons;
const SXD = window.LVData;
const SX_CW = 1180;
function Eyebrow({
  children,
  theme
}) {
  const onDark = theme === 'light';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: onDark ? 'var(--lemon-400)' : 'var(--leaf-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1.5,
      background: 'var(--lemon-500)',
      display: 'inline-block'
    }
  }), children);
}

/* ---------- HERO ---------- */
function Feature({
  icon,
  title,
  sub,
  d
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: d ? '22px 0 0' : 0,
      borderTop: d ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d ? 46 : 40,
      height: d ? 46 : 40,
      borderRadius: 13,
      background: 'var(--leaf-100)',
      color: 'var(--leaf-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: d ? 16.5 : 14,
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: d ? 14 : 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.35
    }
  }, sub));
}
function Hero({
  d
}) {
  const trust = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 26,
      paddingTop: 22,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(SXLV.Rating, {
    value: SXD.contact.rating,
    count: SXD.contact.reviews,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--leaf-600)'
    }
  }, /*#__PURE__*/React.createElement(SXI.MapPin, {
    size: 17
  })), " Junto a Plaza de Espa\xF1a"));
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Est\xE9tica & bienestar \xB7 Vigo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d ? 'clamp(2.8rem, 4.4vw, 4rem)' : 'clamp(2.3rem, 11vw, 3.1rem)',
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Belleza que se", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 500,
      color: 'var(--leaf-600)'
    }
  }, "siente cuidada")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: d ? 18 : 16.5,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: 420,
      textWrap: 'pretty'
    }
  }, "Est\xE9tica y bienestar de trato cercano, atendido de t\xFA a t\xFA por Linda. Resultados cuidados en pleno centro de Vigo, junto a Plaza de Espa\xF1a."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SXLV.Button, {
    variant: "accent",
    size: "lg",
    as: "a",
    href: SXD.contact.booksy,
    iconRight: /*#__PURE__*/React.createElement(SXI.ArrowRight, {
      size: 18
    })
  }, "Reservar"), /*#__PURE__*/React.createElement(SXLV.WhatsAppFab, {
    floating: false,
    phone: SXD.contact.whatsapp,
    message: "\xA1Hola! Me gustar\xEDa pedir informaci\xF3n \uD83D\uDE42"
  })), trust);
  const photo = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(SXPhoto, {
    src: SXD.photos.salaLimon,
    alt: "Rinc\xF3n del lim\xF3n en la sala de tratamientos",
    tone: "lemon",
    height: "100%",
    radius: 28,
    objectPosition: "center 35%",
    parallax: d ? 60 : 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: d ? -22 : 14,
      bottom: d ? 28 : -20,
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(SXLV.Rating, {
    value: SXD.contact.rating,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, "+", SXD.contact.reviews, " rese\xF1as de clientas")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      whiteSpace: 'nowrap',
      background: 'var(--lemon-500)',
      color: 'var(--ink-900)',
      fontWeight: 700,
      fontSize: 12,
      padding: '6px 12px',
      borderRadius: 999,
      boxShadow: 'var(--shadow-sm)'
    }
  }, "Vigo \xB7 centro"));
  const features = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: d ? 28 : 12
    }
  }, /*#__PURE__*/React.createElement(Feature, {
    d: d,
    icon: /*#__PURE__*/React.createElement(SXI.Leaf, {
      size: d ? 24 : 20
    }),
    title: "Trato cercano",
    sub: "De t\xFA a t\xFA, sin prisas"
  }), /*#__PURE__*/React.createElement(Feature, {
    d: d,
    icon: /*#__PURE__*/React.createElement(SXI.Sparkle, {
      size: d ? 24 : 20
    }),
    title: "Resultados cuidados",
    sub: "T\xE9cnicas y aparatolog\xEDa"
  }), /*#__PURE__*/React.createElement(Feature, {
    d: d,
    icon: /*#__PURE__*/React.createElement(SXI.Heart, {
      size: d ? 24 : 20
    }),
    title: "Como en casa",
    sub: "Un espacio limpio y fresco"
  }));
  if (d) {
    return /*#__PURE__*/React.createElement("section", {
      id: "inicio",
      style: {
        padding: '128px 40px 64px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: SX_CW,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.02fr 0.98fr',
        gap: 56,
        alignItems: 'center'
      }
    }, text, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 560
      }
    }, photo)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56
      }
    }, features)));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    style: {
      padding: '100px 18px 36px',
      position: 'relative'
    }
  }, text, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      marginTop: 28
    }
  }, photo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, features));
}

/* ---------- SERVICIOS ---------- */
function Servicios({
  d
}) {
  const ServiceList = window.LVServiceList;
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      padding: d ? '88px 40px' : '56px 18px',
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: SX_CW,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SXReveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: d ? 'flex' : 'block',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      marginBottom: d ? 40 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Carta de servicios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d ? 'clamp(2.4rem, 4vw, 3.4rem)' : 'clamp(2rem, 9vw, 2.5rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Cuidados a tu ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--leaf-600)'
    }
  }, "medida"))), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 'none',
      margin: d ? 0 : '14px 0 0',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: 360
    }
  }, "Precios orientativos \xABdesde\xBB. ", d ? 'Pasa el cursor para ver cada tratamiento. ' : '', "Reserva el tuyo en Booksy."))), /*#__PURE__*/React.createElement(SXReveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(ServiceList, {
    d: d
  }))));
}

/* ---------- EL CENTRO (immersive) ---------- */
function Collage({
  d
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gridTemplateRows: d ? '250px 180px' : '150px 110px',
      gap: d ? 14 : 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: '1 / span 2'
    }
  }, /*#__PURE__*/React.createElement(SXPhoto, {
    src: SXD.photos.salaEspejo,
    label: "sala de tratamientos",
    tone: "leaf",
    height: "100%",
    objectPosition: "center 50%"
  })), /*#__PURE__*/React.createElement(SXPhoto, {
    src: SXD.photos.salaLimon,
    label: "rinc\xF3n del lim\xF3n",
    tone: "lemon",
    height: "100%",
    objectPosition: "center 40%"
  }), /*#__PURE__*/React.createElement(SXPhoto, {
    src: SXD.photos.escaparate,
    label: "nuestro escaparate",
    tone: "rose",
    height: "100%",
    objectPosition: "center 35%"
  }));
}
function ElCentro({
  d
}) {
  const values = [['Cercanía', 'Te escuchamos y te aconsejamos de tú a tú, sin venderte de más.'], ['Cuidado', 'Productos y aparatología cuidados, higiene y mimo en cada cita.'], ['Resultados', 'Trabajamos para que notes — y te guste — la diferencia.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "centro",
    style: {
      padding: d ? '96px 40px' : '64px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: SX_CW,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SXReveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: d ? 'grid' : 'block',
      gridTemplateColumns: d ? '1fr 1.05fr' : 'none',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "El centro"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d ? 'clamp(2.4rem, 3.6vw, 3.2rem)' : 'clamp(2rem, 9vw, 2.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Un espacio", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--leaf-600)'
    }
  }, "luminoso"), " en Vigo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: d ? 17 : 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 440,
      textWrap: 'pretty'
    }
  }, "En Linda Vibrante cuidamos de tu est\xE9tica y tu bienestar con cercan\xEDa. Un lugar limpio y fresco, pensado para que desconectes y te sientas como en casa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: d ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement(Collage, {
    d: d
  })))), /*#__PURE__*/React.createElement(SXReveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: d ? '1fr 1fr 1fr' : '1fr',
      gap: d ? 28 : 0,
      marginTop: d ? 64 : 36
    }
  }, values.map(([t, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      padding: d ? '24px 0 0' : '18px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 26,
      color: 'var(--lemon-600)',
      width: 34,
      flex: 'none'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, desc)))))), /*#__PURE__*/React.createElement(SXReveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: d ? 72 : 44,
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-xl)',
      color: 'var(--cream-50)',
      overflow: 'hidden',
      display: d ? 'grid' : 'block',
      gridTemplateColumns: d ? '1.1fr 0.9fr' : 'none',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: d ? '56px 52px' : '32px 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    theme: "light"
  }, "Nuestra se\xF1a"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: d ? 34 : 27,
      lineHeight: 1.22,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, "Frescura, luz y vitalidad. El ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lemon-400)',
      fontStyle: 'italic'
    }
  }, "lim\xF3n"), " nos recuerda lo que somos: un espacio limpio y luminoso donde cuidarte bien.")), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: d ? 'auto' : 180
    }
  }, /*#__PURE__*/React.createElement(SXPhoto, {
    src: SXD.photos.salaEspejo,
    alt: "Detalle del local",
    tone: "lemon",
    height: "100%",
    radius: 0,
    objectPosition: "center 45%"
  }))))));
}

/* ---------- RESEÑAS ---------- */
function Resenas({
  d
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "resenas",
    style: {
      padding: d ? '88px 40px' : '56px 18px',
      background: 'var(--leaf-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: SX_CW,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SXReveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: d ? 'flex' : 'block',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      marginBottom: d ? 40 : 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Lo que dicen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: d ? 'clamp(2.4rem, 3.6vw, 3.2rem)' : 'clamp(2rem, 9vw, 2.5rem)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Clientas que ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--leaf-600)'
    }
  }, "vuelven"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: d ? 0 : 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--wine-700)'
    }
  }, "4,6"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SXLV.Rating, {
    value: SXD.contact.rating,
    showValue: false,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13.5,
      color: 'var(--text-body)',
      marginTop: 4,
      fontWeight: 500
    }
  }, "+", SXD.contact.reviews, " rese\xF1as"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: d ? '1fr 1fr' : '1fr',
      gap: d ? 20 : 14
    }
  }, SXD.reviews.map((r, i) => /*#__PURE__*/React.createElement(SXReveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(SXLV.TestimonialCard, {
    quote: r.quote,
    author: r.author,
    meta: r.meta,
    value: r.value
  }))))));
}
window.LVSections = {
  Hero,
  Servicios,
  ElCentro,
  Resenas
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceList.jsx
try { (() => {
/* Linda Vibrante — Lista de servicios con imagen al hover. window.LVServiceList
   Desktop: lista tipográfica a la izquierda + panel de imagen FIJO a la derecha
   que cambia según el servicio señalado (no tapa el texto). Móvil: miniatura por ítem. */
const SLLV = window.LindaVibranteDesignSystem_9a98cd;
const SLI = window.LVIcons;
const SLD = window.LVData;
function ServiceRowDesktop({
  s,
  photo,
  onEnter,
  active
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: SLD.contact.booksy,
    target: "_blank",
    rel: "noopener",
    onMouseEnter: () => onEnter(photo, s.name),
    onFocus: () => onEnter(photo, s.name),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 20,
      textDecoration: 'none',
      padding: '16px 8px 16px 0',
      borderTop: '1px solid var(--border)',
      position: 'relative',
      paddingLeft: active ? 16 : 0,
      transition: 'padding-left var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: active ? 7 : 0,
      height: 7,
      borderRadius: 999,
      background: 'var(--lemon-500)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(1.4rem, 1.9vw, 1.85rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: active ? 'var(--wine-700)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, s.name), s.badge ? /*#__PURE__*/React.createElement(SLLV.Badge, {
    tone: "accent"
  }, s.badge) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flex: 'none',
      color: 'var(--text-muted)',
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, s.duration), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700
    }
  }, s.from ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "desde ") : null, s.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? 'var(--wine-700)' : 'var(--ink-200)',
      transform: active ? 'translateX(0)' : 'translateX(-6px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(SLI.ArrowUpRight, {
    size: 18
  }))));
}
function ServiceRowMobile({
  s,
  photo
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: SLD.contact.booksy,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none',
      padding: '12px 0',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--leaf-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: s.name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, s.name), s.badge ? /*#__PURE__*/React.createElement(SLLV.Badge, {
    tone: "accent"
  }, s.badge) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, s.duration, " \xB7 ", s.from ? 'desde ' : '', s.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wine-600)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(SLI.ArrowUpRight, {
    size: 20
  })));
}
function List({
  d,
  onEnter,
  active
}) {
  const cats = SLD.categories.filter(c => c.id !== 'todos');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: d ? 32 : 28
    }
  }, cats.map(cat => {
    const items = SLD.services.filter(s => s.cat === cat.id);
    const photo = SLD.catPhoto[cat.id];
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 4px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--leaf-600)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 1.5,
        background: 'var(--lemon-500)'
      }
    }), cat.label), /*#__PURE__*/React.createElement("div", null, items.map(s => d ? /*#__PURE__*/React.createElement(ServiceRowDesktop, {
      key: s.id,
      s: s,
      photo: photo,
      onEnter: onEnter,
      active: active === s.name
    }) : /*#__PURE__*/React.createElement(ServiceRowMobile, {
      key: s.id,
      s: s,
      photo: photo
    }))));
  }));
}
function ServiceList({
  d
}) {
  const first = SLD.services[0];
  const [cur, setCur] = React.useState({
    src: SLD.catPhoto[first.cat],
    name: first.name
  });
  const onEnter = (src, name) => setCur({
    src,
    name
  });
  if (!d) return /*#__PURE__*/React.createElement(List, {
    d: d
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.08fr 0.92fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(List, {
    d: d,
    onEnter: onEnter,
    active: cur.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--leaf-100)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    key: cur.src,
    src: cur.src,
    alt: cur.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(76,10,27,0.55), rgba(76,10,27,0) 45%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 18,
      right: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 22,
      color: 'var(--cream-50)'
    }
  }, cur.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      background: 'var(--lemon-500)',
      color: 'var(--ink-900)',
      fontWeight: 700,
      fontSize: 12,
      padding: '5px 11px',
      borderRadius: 999
    }
  }, "Reserva en Booksy"))));
}
window.LVServiceList = ServiceList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Linda Vibrante — kit content. Real contact data; do NOT invent.
   Photos are placeholders (no real photos uploaded yet). Exposed on window.LVData. */
window.LVData = {
  contact: {
    address: 'Rúa do Panamá 17, Bajo · 36203 Vigo',
    phones: ['614 501 177', '886 640 280'],
    hours: [{
      d: 'Lunes a viernes',
      h: '10:00–14:00 · 16:00–20:00'
    }, {
      d: 'Sábado',
      h: '10:00–14:00'
    }, {
      d: 'Domingo',
      h: 'Cerrado'
    }],
    social: '@lindavibrante',
    booksy: 'https://booksy.com/es-es/140976_linda-vibrante_spa_68493_vigo',
    whatsapp: '34614501177',
    rating: 4.6,
    reviews: 20
  },
  photos: {
    salaLimon: '../../assets/photos/sala-limon.png',
    salaEspejo: '../../assets/photos/sala-espejo.png',
    escaparate: '../../assets/photos/escaparate.png',
    logo: '../../assets/logo.png'
  },
  /* Imagen asociada por categoría para el hover de la lista de servicios.
     TODO: sustituir por una foto real por tratamiento cuando estén disponibles. */
  catPhoto: {
    corporales: '../../assets/photos/sala-espejo.png',
    faciales: '../../assets/photos/sala-limon.png',
    mirada: '../../assets/photos/sala-limon.png',
    unas: '../../assets/photos/sala-espejo.png',
    depilacion: '../../assets/photos/escaparate.png'
  },
  categories: [{
    id: 'todos',
    label: 'Todos'
  }, {
    id: 'corporales',
    label: 'Corporales'
  }, {
    id: 'faciales',
    label: 'Faciales'
  }, {
    id: 'mirada',
    label: 'Cejas & pestañas'
  }, {
    id: 'unas',
    label: 'Manos & pies'
  }, {
    id: 'depilacion',
    label: 'Depilación'
  }],
  services: [{
    id: 1,
    cat: 'corporales',
    name: 'Radiofrecuencia Indiba',
    desc: 'Diatermia que reafirma, activa la circulación y aporta luminosidad a la piel.',
    duration: '45 min',
    price: '40 €',
    from: true,
    badge: 'Top'
  }, {
    id: 2,
    cat: 'corporales',
    name: 'Masaje descontracturante',
    desc: 'Trabajo profundo sobre la tensión muscular de espalda, cuello y hombros.',
    duration: '50 min',
    price: '38 €',
    from: true
  }, {
    id: 3,
    cat: 'corporales',
    name: 'Masaje relajante',
    desc: 'Maniobras suaves y envolventes para desconectar de verdad.',
    duration: '50 min',
    price: '35 €',
    from: true
  }, {
    id: 4,
    cat: 'corporales',
    name: 'Maderoterapia',
    desc: 'Modelado corporal con rodillos de madera para activar y reafirmar.',
    duration: '45 min',
    price: '32 €',
    from: true
  }, {
    id: 5,
    cat: 'corporales',
    name: 'Presoterapia',
    desc: 'Drenaje por presión que alivia las piernas cansadas y la retención.',
    duration: '30 min',
    price: '25 €',
    from: true
  }, {
    id: 6,
    cat: 'faciales',
    name: 'Limpieza facial',
    desc: 'Higiene profunda, exfoliación e hidratación para una piel que respira.',
    duration: '60 min',
    price: '40 €',
    from: true,
    badge: 'Favorito'
  }, {
    id: 7,
    cat: 'faciales',
    name: 'Dermapen',
    desc: 'Microneedling para mejorar textura, marcas y firmeza del rostro.',
    duration: '60 min',
    price: '60 €',
    from: true
  }, {
    id: 8,
    cat: 'mirada',
    name: 'Laminado de cejas',
    desc: 'Cejas peinadas y fijadas con efecto natural durante semanas.',
    duration: '40 min',
    price: '30 €'
  }, {
    id: 9,
    cat: 'mirada',
    name: 'Tinte con henna',
    desc: 'Color y definición de cejas con henna, de acabado natural.',
    duration: '30 min',
    price: '18 €'
  }, {
    id: 10,
    cat: 'mirada',
    name: 'Lifting de pestañas',
    desc: 'Curvatura y tinte para una mirada despierta sin extensiones.',
    duration: '45 min',
    price: '35 €'
  }, {
    id: 11,
    cat: 'mirada',
    name: 'Extensiones de pestañas',
    desc: 'Volumen a medida, pelo a pelo, con acabado natural o intenso.',
    duration: '90 min',
    price: '45 €',
    from: true
  }, {
    id: 12,
    cat: 'unas',
    name: 'Manicura',
    desc: 'Manos cuidadas con esmaltado semipermanente de larga duración.',
    duration: '45 min',
    price: '20 €',
    from: true
  }, {
    id: 13,
    cat: 'unas',
    name: 'Pedicura',
    desc: 'Pies sanos y bonitos, con tratamiento e hidratación.',
    duration: '50 min',
    price: '25 €',
    from: true
  }, {
    id: 14,
    cat: 'depilacion',
    name: 'Depilación con hilo',
    desc: 'Diseño preciso de cejas y facial con técnica de hilo.',
    duration: '20 min',
    price: '10 €',
    from: true
  }, {
    id: 15,
    cat: 'depilacion',
    name: 'Depilación con cera',
    desc: 'Facial y corporal, con cera de baja temperatura.',
    duration: '30 min',
    price: '12 €',
    from: true
  }],
  reviews: [{
    quote: 'Excelente lugar. Profesionales en todo.',
    author: 'Cliente de Google',
    meta: 'Reseña verificada',
    value: 5
  }, {
    quote: 'Es perfecto, me encantó, ¡volveré!',
    author: 'Cliente de Google',
    meta: 'Reseña verificada',
    value: 5
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.WhatsAppFab = __ds_scope.WhatsAppFab;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
