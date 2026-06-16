import * as React from 'react';

/**
 * Typographic wordmark lockup (placeholder pending the real logo file).
 * @startingPoint section="Brand" subtitle="Linda Vibrante wordmark lockup" viewport="700x140"
 */
export interface WordmarkProps {
  /** Font size of the name in px. @default 28 */
  size?: number;
  /** "dark" on light bg, "light" on dark bg. @default "dark" */
  theme?: 'dark' | 'light';
  /** Show the "Estética & bienestar · Vigo" tagline. @default false */
  showTag?: boolean;
  style?: React.CSSProperties;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
