export type TextProps = {
  /** Render the text inline instead of block. */
  baseline?: boolean;
  /** Apply bold emphasis. */
  bold?: boolean;
  /** Align the text to the center. */
  centerAlign?: boolean;
  /** The text to render. */
  children?: React.ReactNode;
  /** Mark the text as disabled. */
  disabled?: boolean;
  /** Align the text to the end. */
  endAlign?: boolean;
  /** Render the text inline-block instead of block. */
  inline?: boolean;
  /** Invert text colors. */
  inverted?: boolean;
  /** Increase font size to large. */
  large?: boolean;
  /** Apply light emphasis. */
  light?: boolean;
  /** Decrease font size to small. */
  micro?: boolean;
  /** Mark the text as muted. */
  muted?: boolean;
  /** Disable text and white space wrapping. */
  noWrap?: boolean;
  /** Preserve whitespace at the beginning and end of children. */
  preserveWhitespace?: boolean;
  /** Decrease font size to small. */
  small?: boolean;
  /** Align the text to the start. */
  startAlign?: boolean;
  /** Truncate the text with an ellipsis. */
  truncated?: boolean;
  /** Uppercase all text. */
  uppercased?: boolean;
};
