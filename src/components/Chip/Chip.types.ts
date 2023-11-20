export type ButtonOrLinkTypes = HTMLAnchorElement | HTMLButtonElement;

export type ChipProps = {
  /** Renders with a primary background and white text. */
  active?: boolean;
  /** Icon to render to the right of the primary content.*/
  afterIcon?: React.ReactNode;
  /** Icon to render to the left of the primary content. */
  beforeIcon?: React.ReactNode;
  /** Primary chip content*/
  children: NonNullable<React.ReactNode>;
  /** Disabled/gray. */
  disabled?: boolean;
  /** Pass an HTML element attribute id.*/
  id?: string;
  /** Callback fired when the icon is clicked. ( requires an icon). */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** flag to enable right icon as button*/
  hasOnIconClick?: boolean;
};
