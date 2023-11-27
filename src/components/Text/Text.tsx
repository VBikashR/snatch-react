import React from "react";
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const StyledTag = styled.div.attrs<TextProps>(({ inline, micro, large }) => ({
  as: inline ? "span" : micro ? "small" : large ? "h4" : "div",
}))<TextProps>`
  font-size: ${(props) =>
    props.small
      ? css`
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
        `
      : props.large
      ? css`
          font-size: 1.125rem; /* 18px */
          line-height: 1.75rem; /* 28px */
        `
      : props.micro
      ? css`
          font-size: 0.75rem; /* 12px */
          line-height: 1rem; /* 16px */
        `
      : css`
          font-size: 1rem; /* 16px */
          line-height: 1.5rem; /* 24px */
        `};
  line-height: 1.5rem; /* 24px */
  color: ${(props) =>
    props.muted
      ? "hsl(215.4 16.3% 46.9%)"
      : props.light
      ? "hsl(0 0% 100%)"
      : "hsl(222.2 47.4% 11.2%)"};
  font-weight: ${(props) => props.bold && 700};
  display: ${(props) =>
    props.inline ? "inline-block" : props.baseline && "inline"};
  text-align: ${(props) =>
    props.centerAlign
      ? "center"
      : props.endAlign
      ? "right"
      : props.startAlign && "left"};
  white-space: ${(props) =>
    props.preserveWhitespace ? "pre-wrap" : props.noWrap && "nowrap"};
  text-transform: ${(props) => props.uppercased && "uppercase"};
  ${(props) =>
    props.truncated &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 50%;
      user-select: none;
    `}
`;

/** Display a string of text with pre-defined sizing, emphasis, and state styling. */
const Text = ({
  baseline,
  bold,
  centerAlign,
  children,
  disabled,
  endAlign,
  inline,
  large,
  light,
  micro,
  muted,
  noWrap,
  preserveWhitespace,
  small,
  startAlign,
  truncated,
  uppercased,
}: TextProps) => {
  return (
    <StyledTag
      baseline={baseline}
      bold={bold}
      centerAlign={centerAlign}
      disabled={disabled}
      endAlign={endAlign}
      inline={inline}
      large={large}
      light={light}
      micro={micro}
      muted={muted}
      noWrap={noWrap}
      preserveWhitespace={preserveWhitespace}
      small={small}
      startAlign={startAlign}
      truncated={truncated}
      uppercased={uppercased}
    >
      {children}
    </StyledTag>
  );
};

export default Text;
