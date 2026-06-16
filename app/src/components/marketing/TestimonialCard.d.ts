import * as React from 'react';

/** Customer review card — serif italic quote, stars, author with avatar. */
export interface TestimonialCardProps {
  quote: React.ReactNode;
  author: string;
  /** Secondary line, e.g. "Cliente · Google". */
  meta?: string;
  /** Stars to show. @default 5 */
  value?: number;
  avatarSrc?: string;
  /** @default "plain" */
  variant?: 'plain' | 'ink';
  style?: React.CSSProperties;
}

export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
