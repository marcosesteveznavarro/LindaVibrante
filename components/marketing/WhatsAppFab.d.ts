import * as React from 'react';

/** Permanent WhatsApp contact action — floating pill or inline. Links to wa.me. */
export interface WhatsAppFabProps {
  /** Number in international format, no "+". @default "34614501177" */
  phone?: string;
  /** Prefilled message. */
  message?: string;
  /** Visible label when expanded. @default "WhatsApp" */
  label?: string;
  /** Fixed bottom-right positioning. @default true */
  floating?: boolean;
  /** Show label (vs round icon-only). @default true */
  expanded?: boolean;
  style?: React.CSSProperties;
}

export function WhatsAppFab(props: WhatsAppFabProps): JSX.Element;
