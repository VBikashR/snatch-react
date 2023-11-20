import { MouseEventHandler } from "react";

export interface ButtonProps {
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
    | "link";
  /**Callback fired when the element is clicked*/
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
