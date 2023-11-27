import React, { useContext } from "react";
// Types
import { FormContextProp } from "../Form.types";
import { TextareaProps } from "../../components/Textarea/Textarea.types";
// Context
import { FormContext } from "../FormContext";
// Components
import Label from "../../components/Label/Label";
import {
  StyledTextarea,
  StyledTextareaText,
  StyledTextareaComponentContainer,
} from "../../components/Textarea";

export type PrivateFormTextareaProps = Omit<TextareaProps, "errorMessage"> & {
  errorMessage?: string[];
};
const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  PrivateFormTextareaProps
>(
  (
    {
      id,
      label,
      name,
      inline = false,
      error,
      errorMessage,
      success,
      rules,
      disabled,
      placeholder,
      onChange,
      ...props
    },
    ref
  ) => {
    const { isInvalid, formError } = useContext<FormContextProp>(FormContext);

    // get the respective key value of the input from context
    for (let key in isInvalid) {
      if (key === name) {
        error = isInvalid[key];
        errorMessage = formError[key];
      }
    }
    return (
      <>
        <StyledTextareaComponentContainer inline={inline}>
          {label && (
            <Label
              htmlFor={id}
              id={`${id}-label`}
              error={error}
              disabled={disabled}
            >
              {label}
            </Label>
          )}
          <StyledTextarea
            error={error}
            success={success}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            ref={ref}
          />
        </StyledTextareaComponentContainer>
        {error &&
          errorMessage?.map((message, index) => (
            <StyledTextareaText error={error} id={`${id}-error`} key={index}>
              {message}
            </StyledTextareaText>
          ))}
      </>
    );
  }
);

FormTextarea.displayName = "SFormElement";

export default FormTextarea;
