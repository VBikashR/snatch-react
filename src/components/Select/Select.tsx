import React from "react";
import styled, { css } from "styled-components";
import { SelectProps } from "./Select.types";
import Label from "../Label/Label";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const StyledSelectComponentContainer = styled.div<SelectProps>`
  display: ${(props) => (props.inline ? "flex" : "grid")};
  align-items: center;
  gap: 0.375rem;
`;

export const StyledSelectContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

export const StyledSelect = styled.select<SelectProps>`
  appearance: none;
  width: 100%;
  padding: 0.5rem 0.75rem;
  height: 2.25rem;
  border: solid 1px;
  border-radius: 0.375rem;
  border-color: ${(props) =>
    props.disabled
      ? "#e4e3ea"
      : props.error
      ? "#a9150b"
      : props.success
      ? "#067d68"
      : "#353637"};
  cursor: pointer;
  outline: none;

  &:focus-visible {
    border: none;
    outline: solid #57a0ea;
  }
`;

export const StyledSelectArrow = styled.span`
  position: absolute;
  right: 1%;
  top: 50%;
  pointer-events: none;
  z-index: 1;
  transform: translateY(-50%);
  margin-right: 0.125rem;
`;

export const StyledText = styled.p<SelectProps>`
  margin: 0px;
  padding-top: 0.25rem;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
      rules,
      value,
      children,
      placeholder,
      inline = false,
      ...props
    },
    ref
  ) => {
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
        {error && (
          <StyledText error={error} id={`${id}-error`}>
            {errorMessage}
          </StyledText>
        )}
      </>
    );
  }
);

Select.displayName = "Select";
export default Select;
