import { ValidateRules } from "../../form/Form.types";

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//   id?: string;
//   type?: string;
//   label?: string;
//   error?: boolean;
//   errorMessage?: string;
//   success?: boolean;
//   disabled?: boolean;
//   placeholder?: string;
//   inline?: boolean;
//   rules?: ValidateRules;
//   onChange?: React.ChangeEventHandler<HTMLInputElement>;
// }

export type BaseInputprops = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  type?: string;
  label?: string;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inline?: boolean;
  rules?: ValidateRules;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (value: any) => void;
};
