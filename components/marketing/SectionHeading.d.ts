import * as React from 'react';

/** Editorial section header: letterspaced eyebrow (with lemon regleta) + serif title + optional lead. */
export interface SectionHeadingProps {
  /** Uppercase kicker, e.g. "Nuestros servicios". */
  eyebrow?: string;
  /** Serif headline (string or node). */
  title: React.ReactNode;
  /** Supporting paragraph. */
  lead?: string;
  /** @default "left" */
  align?: 'left' | 'center';
  /** "light" when on a dark/ink background. @default "dark" */
  theme?: 'dark' | 'light';
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
