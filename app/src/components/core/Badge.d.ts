import * as React from 'react';

/** Small status / marketing label — "Novedad", "Top ventas", category tags. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "accent" */
  tone?: 'accent' | 'leaf' | 'ink' | 'neutral' | 'success';
  /** Filled vs soft tint. @default false */
  solid?: boolean;
  /** Leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
