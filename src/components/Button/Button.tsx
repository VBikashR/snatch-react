import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";
import ButtonOrLink from "../Private/ButtonOrLink";
import Loader from "../Loader/Loader";

const StyledButton = styled(ButtonOrLink)<ButtonProps>`
  border: ${(props) => (props.variant === "outline" ? "solid 1px" : 0)};
  line-height: 1.2rem;
  white-space: nowrap;
  box-shadow: none;
  font-size: 0.875rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0.375rem;
  outline: none;
  box-sizing: border-box;
  border-color: ${(props) =>
    props.variant === "outline" ? "#343536" : "#ffffff"};
  display: inline-block;
  color: #000000;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  /** Variant*/
  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: #000000;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      color: #ffffff;
    `}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #f1f5f9;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    `}
    ${(props) =>
    props.variant === "destructive" &&
    css`
      background-color: #dc2626;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      color: #ffffff;
    `}
    ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    `}
    ${(props) =>
    props.variant === "ghost" &&
    css`
      background-color: transparent;
    `}

    ${(props) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
      color: #1d4ed8;
    `}

    ${(props) =>
    props.variant === "tag" &&
    css`
      width: 280px;
      font-weight: 400;
      background-color: #ffffff;
      border: solid 1px;
      border-color: #e5e7eb;
    `}
    
    
  /** Size*/
  ${(props) =>
    props.size === "small" &&
    css`
      height: 2rem;
      padding: 0 0.75rem;
      font-size: 0.75rem;
      line-height: 1rem;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      padding: 0.5rem 1rem;
    `}
    ${(props) =>
    props.size === "large" &&
    css`
      height: 2.5rem;
      padding: 0 2rem;
    `}
    &:hover {
    background-color: ${(props) =>
      props.variant === "default"
        ? "rgba(0, 0, 0, 0.8)"
        : props.variant === "destructive"
        ? "rgba(253, 164, 175, 0.8)"
        : props.variant === "secondary"
        ? "rgba(241,245,249,0.5)"
        : props.variant === "outline"
        ? "rgba(241,245,249,0.8)"
        : props.variant === "ghost"
        ? " rgba(241,245,249, 0.8)"
        : props.variant === "tag"
        ? "rgba(241,245,249,0.5)"
        : ""};
    text-decoration: ${(props) =>
      props.variant === "link" ? "underline" : "none"};
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
      white-space: normal;
      overflow: hidden;
    `}
`;

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "default",
  disabled,
  children,
  text,
  loading,
  inverted,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      loading={loading}
      size={size}
      {...props}
      // ref={ref}
    >
      {loading ? <Loader inline inverted={!inverted} /> : children}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
