import React, { useState } from "react";
import styled, { css } from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// Types
import { BaseInputprops } from "./Input.types";
// Components
import Label from "../Label/Label";

export type privateInputProps = BaseInputprops & {
  name?: string;
  /**Error Message to display*/
  errorMessage?: string;
  //TODO -> prefix is not built in. suffix and prefix needs to be div with input in center
  //TODO -> similar change on FormInput component
  /** Content to display before the input field. */
  prefix?: React.ReactNode;
  /** Content to display after the input field. */
  suffix?: React.ReactNode;
};

export const StyledInput = styled.input<privateInputProps>`
  box-sizing: border-box;
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
      : "#333"};
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
        padding: 0.357rem 0.75rem;
        /* height: 40px; */
        cursor: pointer;
        background-color: #f3f4f6;
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

export const StyledInputText = styled.p<privateInputProps>`
  margin: 0px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;

export const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 0.375rem;
`;

export const StyledInnerInputContainer = styled.div<privateInputProps>`
  display: ${(props) => (props.inline ? "flex" : "grid")};
  align-items: center;
  gap: 0.375rem;
`;

export const StyledInputContent = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
`;

export const StyledInputAffix = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  flex-grow: 0;
`;
export const StyledInputAnchor = styled.div`
  flex-grow: 1;
`;

const Input = React.forwardRef<HTMLInputElement, privateInputProps>(
  (
    {
      id,
      type,
      name,
      disabled,
      label,
      errorMessage,
      error,
      success,
      inline = false,
      onChange,
      placeholder,
      rules,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    // Password eye toggler
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <StyledInputContainer>
        <StyledInnerInputContainer inline={inline}>
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
          <StyledInputContent>
            {/* {prefix && <StyledAffix>{prefix}</StyledAffix>} */}
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
        {error && (
          <StyledInputText error={error} id={`${id}-error`}>
            {errorMessage}
          </StyledInputText>
        )}
      </StyledInputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
