import { TextProps } from "../Text/Text.types";

export type StatusTextProps = TextProps & {
  /** The text to render. */
  children: NonNullable<React.ReactNode>;
  /** Dangerous/failure status (red). */
  danger?: boolean;
  /** Informational status (blue). */
  info?: boolean;
  /** Muted/disabled status (gray). */
  muted?: boolean;
  /** Notice status. */
  notice?: boolean;
  /** Successful status (green). */
  success?: boolean;
  /** Warning status (yellow). */
  warning?: boolean;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};
