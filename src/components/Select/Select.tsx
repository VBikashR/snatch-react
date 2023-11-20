import React from "react";
import styled, { css } from "styled-components";
import { SelectProps } from "./Select.types";
import Label from "../Label/Label";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const StyledSelectComponentContainer = styled.div<SelectProps>`
  display: ${(props) => (props.inline ? "flex" : "block")};
  ${(props) =>
    props.inline &&
    css`
      align-items: center;
      gap: 1rem;
    `}
`;

const StyledSelectContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;

const StyledSelect = styled.select<SelectProps>`
  appearance: none;
  width: 100%;
  padding: 0.5rem 0.75rem;
  height: 2.5rem;
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

const StyledArrow = styled.span`
  position: absolute;
  right: 1%;
  top: 50%;
  pointer-events: none;
  z-index: 1;
  transform: translateY(-50%);
`;

const StyledMessage = styled.div<SelectProps>`
  font-size: 14px;
  color: "#a9150b";
  padding-top: 0.25rem;
`;

const StyledText = styled.p<SelectProps>`
  margin: 0px;
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
            <StyledArrow>
              <FontAwesomeIcon icon={faCaretDown} size={"xs"} />
            </StyledArrow>
          </StyledSelectContainer>
        </StyledSelectComponentContainer>
        {error && (
          <StyledMessage id={`${id}-error`}>
            <StyledText error={error}>{errorMessage}</StyledText>
          </StyledMessage>
        )}
      </>
    );
  }
);

Select.displayName = "Select";
export default Select;
