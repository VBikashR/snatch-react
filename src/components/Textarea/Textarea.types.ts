import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
}
