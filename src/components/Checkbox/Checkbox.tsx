import React, { useState } from "react";
import styled, { css } from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
// Types
import { BaseInputprops } from "../Input/Input.types";
// Components
import Label from "../Label/Label";
import { StyledInputText } from "../Input";

type privateCheckboxProps = Omit<BaseInputprops, "onChange"> & {
  name?: string;
  /**Error Message to display*/
  errorMessage?: string;
  /** description*/
  description?: string;
  checked?: boolean;
  onChange?: (value: any) => void;
};

export const StyledCheckoutbox = styled.input<privateCheckboxProps>`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* remove default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  outline: none;
  border-radius: 0.125rem;
  border: solid 1px;
  border-color: ${(props) =>
    props.disabled
      ? "#e4e3ea"
      : props.error
      ? "#a9150b"
      : props.success
      ? "#067d68"
      : "#0284c7"};
  opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  cursor: pointer;
  background: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#ebcac8" : ""};

  &:focus {
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  &:checked {
    background-color: ${(props) =>
      props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#0284c7"};
    position: relative;
    outline: solid 2px;
    outline-color: ${(props) =>
      props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#0284c7"};
    outline-offset: 3px;
  }

  &:checked::before {
    content: "\u2714";
    font-size: 1rem;
    color: white;
    position: absolute;
    right: 1px;
    top: -5px;
  }
`;

export const StyledCheckboxContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  align-items: start;
`;

export const StyledLabelContainer = styled.div<privateCheckboxProps>`
  display: grid;
`;

export const StyledCheckboxContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledCheckboxDescription = styled.p`
  font-size: 0.875rem;
  line-height: 0;
  color: #64748b;
`;

const Checkbox = React.forwardRef<HTMLInputElement, privateCheckboxProps>(
  (
    {
      id,
      name,
      disabled,
      label,
      description,
      errorMessage,
      error,
      success,
      onChange,
      rules,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (value: any) => {
      setChecked(!checked);
      if (onChange) {
        onChange(value);
      }
    };
    return (
      <StyledCheckboxContainer>
        <StyledCheckboxContent>
          <StyledCheckoutbox
            id={id}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(event) => handleChange(event.target.value)}
            disabled={disabled}
            error={error}
            success={success}
            {...props}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-disabled={disabled}
          />
          <StyledLabelContainer>
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
            {description && (
              <StyledCheckboxDescription>
                {description}
              </StyledCheckboxDescription>
            )}
          </StyledLabelContainer>
        </StyledCheckboxContent>
        {error && (
          <StyledInputText error={error} id={`${id}-error`}>
            {errorMessage}
          </StyledInputText>
        )}
      </StyledCheckboxContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
