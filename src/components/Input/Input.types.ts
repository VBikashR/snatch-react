export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: string;
  label?: string;
  error?: "true" | "false";
  errorMessage?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inline?: "true" | "false";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
