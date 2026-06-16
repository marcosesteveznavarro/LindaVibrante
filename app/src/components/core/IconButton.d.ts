import * as React from 'react';

/** Square or round tappable icon button (nav, close, share, social links). */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Accessible label (required — icon-only). */
  label: string;
  /** @default "soft" */
  variant?: 'solid' | 'soft' | 'ghost' | 'accent';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Pill vs rounded-square. @default true */
  round?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
