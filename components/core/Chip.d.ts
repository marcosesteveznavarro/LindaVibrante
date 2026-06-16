import * as React from 'react';

/** Selectable filter pill for service categories. Controlled by `selected`. */
export interface ChipProps {
  children?: React.ReactNode;
  /** @default false */
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Chip(props: ChipProps): JSX.Element;
