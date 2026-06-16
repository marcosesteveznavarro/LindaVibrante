import * as React from 'react';

/** Star rating row with numeric score — for the 4,6 social proof. */
export interface RatingProps {
  /** 0–5, supports decimals (partial stars). @default 4.6 */
  value?: number;
  /** Review count → renders "(N+ reseñas)". */
  count?: number;
  /** Star pixel size. @default 16 */
  size?: number;
  /** Show the numeric score. @default true */
  showValue?: boolean;
  /** Custom trailing label (overrides count text). */
  label?: string;
  style?: React.CSSProperties;
}

export function Rating(props: RatingProps): JSX.Element;
