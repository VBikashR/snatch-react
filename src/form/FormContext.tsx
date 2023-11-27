import React, { ReactNode, createContext, useState } from "react";
import { FormContextProp } from "./Form.types";

// Types
interface FormProviderProps {
  children: ReactNode;
}

// CONTEXT API
export const FormContext: any = createContext<FormContextProp | undefined>(
  undefined
);

// PROVIDER
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [isInvalid, setIsInvalid] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState<Record<string, string[]>>({});

  return (
    <FormContext.Provider
      value={{
        isInvalid,
        setIsInvalid,
        formError,
        setFormError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
