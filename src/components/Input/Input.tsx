import React from "react";
import styled, { css } from "styled-components";
import { InputProps } from "./Input.types";
import Label from "../Label/Label";

const StyledInput = styled.input<InputProps>`
  height: 2.25rem;
  width: 100%;
  border-radius: 0.375rem;
  border: solid 1px;
  border-color: ${(props) =>
    props.disabled
      ? "#e4e3ea"
      : props.error
      ? "#a9150b"
      : props.success
      ? "#067d68"
      : "#a"};
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${(props) =>
    props.type === "file" ? "transparent" : "#ffffff"};
  opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  /* Styles specific to file input type */
  ${(props) =>
    props.type === "file" &&
    css`
      &::file-selector-button {
        border-radius: 0.25rem;
        padding: 0 0.75rem;
        height: 40px;
        cursor: pointer;
        background-color: white;
        border: none;
        margin-right: 16px;
        transition: background-color 200ms;

        /* Hover state */
        &:hover {
          background-color: #f3f4f6;
        }

        /* Active state */
        &:active {
          background-color: #e5e7eb;
        }
      }
    `}

  &:focus-visible {
    border: none;
    outline: solid #57a0ea;
  }
`;

const StyledText = styled.span<InputProps>`
  margin: 0px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 0.375rem;
`;

const StyledInnerContainer = styled.div<InputProps>`
  display: ${(props) => (props.inline ? "flex" : "grid")};
  align-items: center;
  gap: 0.375rem;
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type,
      disabled,
      label,
      errorMessage,
      error,
      success,
      inline,
      onChange,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <StyledContainer>
        <StyledInnerContainer inline={inline}>
          <Label
            htmlFor={id}
            id={`${id}-label`}
            error={error}
            disabled={disabled}
          >
            {label}
          </Label>
          <StyledInput
            id={id}
            type={type}
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
        </StyledInnerContainer>
        {error && (
          <StyledText error={error} id={`${id}-error`}>
            {errorMessage}
          </StyledText>
        )}
      </StyledContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
