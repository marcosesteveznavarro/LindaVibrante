import * as React from 'react';

/**
 * Linda Vibrante's primary action button.
 * Use `accent` (lemon) only for the single most important CTA on a view — usually "Reservar".
 * Everything else is `primary` (ink green), `secondary` (outline) or `ghost`.
 *
 * @startingPoint section="Core" subtitle="Primary / accent / secondary / ghost button" viewport="700x160"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width (common on mobile). @default false */
  fullWidth?: boolean;
  /** Leading icon node (SVG / glyph). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
