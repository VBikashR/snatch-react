import React, { useContext } from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// Type
import { FormContextProp } from "../Form.types";
import { SelectProps } from "../../components/Select/Select.types";
// Context
import { FormContext } from "../FormContext";
// Components
import {
  StyledSelectArrow,
  StyledSelectComponentContainer,
  StyledSelectContainer,
  StyledSelect,
  StyledText,
} from "../../components/Select";
import Label from "../../components/Label/Label";

export type PrivateFormSelectProps = Omit<SelectProps, "errorMessage"> & {
  /**Text displayed when error is true*/
  errorMessage?: string[];
};

const FormSelect = React.forwardRef<HTMLSelectElement, PrivateFormSelectProps>(
  (
    {
      id,
      name,
      label,
      errorMessage,
      error,
      disabled,
      success,
      onChange,
      value,
      children,
      placeholder,
      inline = false,
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

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(event.currentTarget.value as any, event);
    };

    return (
      <>
        <StyledSelectComponentContainer inline={inline}>
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
          <StyledSelectContainer>
            <StyledSelect
              id={id}
              name={name}
              label={label}
              error={error}
              success={success}
              disabled={disabled}
              value={value}
              onChange={handleChange}
              {...props}
              ref={ref}
            >
              {placeholder && (
                <option value="" disabled selected>
                  {placeholder}
                </option>
              )}
              {children}
            </StyledSelect>
            <StyledSelectArrow>
              <FontAwesomeIcon icon={faCaretDown} size={"xs"} />
            </StyledSelectArrow>
          </StyledSelectContainer>
        </StyledSelectComponentContainer>
        {error &&
          errorMessage?.map((message, index) => (
            <StyledText error={error} id={`${id}-error`} key={index}>
              {message}
            </StyledText>
          ))}
      </>
    );
  }
);

FormSelect.displayName = "SFormElement";
export default FormSelect;
