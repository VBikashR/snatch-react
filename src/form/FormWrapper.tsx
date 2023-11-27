import React from "react";
// Type
import { FormValidatorProps } from "./Form.types";
// utils
import { FormProvider } from "./FormContext";
import FormValidator from "./FormValidator";

const FormWrapper: React.FC<FormValidatorProps> = ({
  children,
  onSubmit,
  className,
  ...props
}) => {
  return (
    <FormProvider>
      <FormValidator onSubmit={onSubmit} className={className} {...props}>
        {children}
      </FormValidator>
    </FormProvider>
  );
};

export default FormWrapper;
