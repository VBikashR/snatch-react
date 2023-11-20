import React from "react";
import styled from "styled-components";
import { TextareaProps } from "./Textarea.types";

const StyledTextarea = styled.textarea<TextareaProps>`
  min-height: 3.75rem;
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
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#f8f8f8" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#666" : "#333")};

  &:focus {
    border: solid 2px #353637;
    outline: none;
  }
`;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { id, label, error, message, success, disabled, placeholder, ...props },
    ref
  ) => {
    return (
      <>
        <StyledTextarea
          label={label}
          error={error}
          message={message}
          success={success}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
