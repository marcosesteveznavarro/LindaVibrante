import * as React from 'react';

/** Circular avatar — image or initials fallback. For team & testimonials. */
export interface AvatarProps {
  src?: string;
  /** Used for initials fallback and alt text. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** White ring + shadow (for overlapping stacks). @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
