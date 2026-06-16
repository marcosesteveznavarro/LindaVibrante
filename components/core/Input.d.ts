import * as React from 'react';

/** Text field with label, optional leading icon, hint and error. */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
  /** @default "text" */
  type?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
