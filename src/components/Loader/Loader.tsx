import React from "react";
import styled, { css, keyframes } from "styled-components";
import "./Loader.styles.css";

export type LoaderProps = {
  /** Display inline instead of absolutely positioned. */
  inline?: boolean;
  /** Invert colors. */
  inverted?: boolean;
  /** Increase the dot size. */
  large?: boolean;
  /** Position statically instead of absolutely. */
  isStatic?: boolean;
};

const StyledLoaderContainer = styled.div<LoaderProps>`
  margin: 0 auto;
  text-align: center;

  ${(props) =>
    props.inline &&
    css`
      display: inline-block;
    `}

  ${(props) =>
    !props.isStatic &&
    !props.inline &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

const fade = keyframes`
  0%, 80%, 100% {
    opacity: 0;
  }
  30%, 50% {
    opacity: 1;
  }
`;

const StyledDot = styled.span<LoaderProps>`
  width: 0.375rem;
  height: 0.375rem;
  margin-right: 0.25rem;
  border-radius: 100%;
  display: inline-block;
  animation-name: ${fade};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  vertical-align: middle;
  background-color: ${(props) => (props.inverted ? "#f1f5f9" : "#71717a")};
  ${(props) =>
    props.large &&
    css`
      width: 0.75rem;
      height: 0.75rem;
      margin: 0.5rem;
    `}

  &:last-child {
    margin-right: 0;
  }
`;

/** A small 3-dot loading indicator. */
export default function Loader({
  inline,
  inverted,
  large,
  isStatic,
}: LoaderProps) {
  return (
    <StyledLoaderContainer
      inline={inline}
      inverted={inverted}
      large={large}
      isStatic={isStatic}
    >
      {[1, 2, 3].map((no) => (
        <StyledDot
          large={large}
          inverted={inverted}
          key={no}
          className={`dot_${no}`}
        />
      ))}
    </StyledLoaderContainer>
  );
}
