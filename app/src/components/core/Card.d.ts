import * as React from 'react';

/** Base surface container with soft luminous shadow and brand variants. */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "plain" */
  variant?: 'plain' | 'tint' | 'leaf' | 'ink';
  /** Hover lift + stronger shadow. @default false */
  interactive?: boolean;
  /** Inner padding (px). @default 20 */
  padding?: number;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
