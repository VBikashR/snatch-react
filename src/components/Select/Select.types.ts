import { ValidateRules } from "../../form/Form.types";

export interface SelectProps {
  id?: string;
  label?: string;
  error?: boolean;
  /** Render the input and label inline to each other*/
  inline?: boolean;
  rules?: ValidateRules;
  /**Text displayed when error is true*/
  errorMessage?: string;
  success?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  name?: string;
  /**Empty and disable option to be use as placeholder*/
  placeholder?: string;
  value?: any;
  onChange?: (value: any, event: React.ChangeEvent<HTMLSelectElement>) => void;
}
