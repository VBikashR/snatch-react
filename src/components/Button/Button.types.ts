import { MouseEventHandler } from "react";
import { ButtonOrLinkProps } from "../Private/ButtonOrLink";

export type ButtonProps = ButtonOrLinkProps & {
  text?: string;
  /**true will disable the button*/
  disabled?: boolean;
  /**Change font size and paddings*/
  size?: "small" | "medium" | "large";
  /**Apply consistent style as per usage*/
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "tag";
  /**Callback fired when the element is clicked*/
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Render as a block with full width. */
  block?: boolean;
};
