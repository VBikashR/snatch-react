import { TextareaHTMLAttributes } from "react";
import { ValidateRules } from "../../form/Form.types";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id?: string;
  value?: any;
  label?: string;
  inline?: boolean;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  rules?: ValidateRules;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
