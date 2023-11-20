export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inline?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
