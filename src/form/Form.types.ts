import { ReactNode } from "react";
// types for html form validation
export interface ValidateRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

// CONTEXT API
export interface FormContextProp {
  isInvalid: Record<string, boolean>;
  setIsInvalid: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  formError: Record<string, string[]>;
  setFormError: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}

// FORM VALIDATOR PROPS
export interface FormValidatorProps {
  children: ReactNode;
  onSubmit: (data: FormData) => void;
  className: string;
  // ref: React.MutableRefObject<null>;
}

export interface FormDataObject {
  [key: string]: any;
}

export type DoctorAvailabilityProps = {
  day: string;
  slots: string[];
  recurring: number;
  date: string;
};
