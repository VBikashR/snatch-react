import React, { useContext, useState } from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// Types
import { FormContextProp } from "../Form.types";
import { BaseInputprops } from "../../components/Input/Input.types";
// Context
import { FormContext } from "../FormContext";
// Components
import Label from "../../components/Label/Label";
import {
  StyledInput,
  StyledInnerInputContainer,
  StyledInputAffix,
  StyledInputAnchor,
  StyledInputContainer,
  StyledInputContent,
  StyledInputText,
} from "../../components";

export type privateFormInputProps = BaseInputprops & {
  name?: string;
  /**Error Message to display*/
  errorMessage?: String[];
  /** Content to display after the input field. */
  suffix?: React.ReactNode;
};

const FormInput = React.forwardRef<HTMLInputElement, privateFormInputProps>(
  (
    {
      id,
      type,
      name,
      disabled,
      label,
      errorMessage,
      error = false,
      success,
      inline = false,
      onChange,
      placeholder,
      rules,
      suffix,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const { isInvalid, formError } = useContext<FormContextProp>(FormContext);

    // get the respective key value of the input from context
    for (let key in isInvalid) {
      if (key === name) {
        error = isInvalid[key];
        errorMessage = formError[key];
      }
    }

    // Password eye toggler
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <StyledInputContainer>
        <StyledInnerInputContainer inline={inline}>
          <Label
            htmlFor={id}
            id={`${id}-label`}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
          <StyledInputContent>
            <StyledInputAnchor>
              <StyledInput
                id={id}
                type={showPassword === true ? "text" : type}
                name={name}
                onChange={onChange}
                disabled={disabled}
                error={error}
                success={success}
                placeholder={placeholder}
                {...props}
                ref={ref}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${id}-error` : undefined}
                aria-disabled={disabled}
              />
            </StyledInputAnchor>
            {name?.toLowerCase() === "password" && (
              <StyledInputAffix onClick={() => togglePassword()}>
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} size={"sm"} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} size={"sm"} />
                )}
              </StyledInputAffix>
            )}
          </StyledInputContent>
        </StyledInnerInputContainer>
        {error &&
          errorMessage?.map((message, index) => (
            <StyledInputText error={error} id={`${id}-error`} key={index}>
              {message}
            </StyledInputText>
          ))}
      </StyledInputContainer>
    );
  }
);

FormInput.displayName = "SFormElement";

export default FormInput;
