import * as React from 'react';

/**
 * Catalog row for a single service — photo, name, description, duration/price, Reservar link.
 * @startingPoint section="Marketing" subtitle="Service catalog list item" viewport="700x180"
 */
export interface ServiceCardProps {
  name: string;
  description?: string;
  /** e.g. "45 min". */
  duration?: string;
  /** e.g. "35 €". */
  price?: string;
  /** Prefix price with "desde". @default false */
  fromPrice?: boolean;
  /** Small flag, e.g. "Novedad". */
  badge?: string;
  /** Real photo URL of the centre/treatment. Falls back to a tint block. */
  media?: string;
  /** Booksy link. @default "#booksy" */
  bookHref?: string;
  onBook?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
