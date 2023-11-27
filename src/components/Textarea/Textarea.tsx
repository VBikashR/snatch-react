import React from "react";
import styled, { css } from "styled-components";
import { TextareaProps } from "./Textarea.types";
import Label from "../Label/Label";

export const StyledTextarea = styled.textarea<TextareaProps>`
  flex-grow: 1;
  box-sizing: border-box;
  min-height: 3.75rem;
  width: 100%;
  border-radius: 0.375rem;
  border: solid 1px
    ${(props) =>
      props.disabled
        ? "#e4e3ea"
        : props.error
        ? "#a9150b"
        : props.success
        ? "#067d68"
        : "#333"};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${(props) => (props.disabled ? "#f8f8f8" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#666" : "#333")};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  &:focus {
    border: solid 2px #353637;
    outline: none;
  }
`;

export const StyledTextareaComponentContainer = styled.div<TextareaProps>`
  display: ${(props) => (props.inline ? "flex" : "grid")};
  align-items: center;
  gap: 0.375rem;
`;

export const StyledTextareaText = styled.p<TextareaProps>`
  margin: 0px;
  padding-top: 0.25rem;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
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
        {error && (
          <StyledTextareaText error={error} id={`${id}-error`}>
            {errorMessage}
          </StyledTextareaText>
        )}
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
