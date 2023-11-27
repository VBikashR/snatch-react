import React from "react";
import styled, { css } from "styled-components";
import { BaseAffixProps } from "./BaseAffix";

export type FieldAffixProps = BaseAffixProps;

const StyledDiv = styled.div<FieldAffixProps>`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  display: flex;
  align-items: center;
  border: solid 2px #b45309;
  border-radius: 0.375rem;
  background-color: #e2e8f0;
  padding-left: 1rem;
  padding-right: 1rem;

  ${(props) =>
    props.small
      ? css`
          font-size: 0.75rem; /* 12px */
          line-height: 1rem; /* 16px */
          padding-left: 0.624rem;
          padding-right: 0.625rem;
        `
      : props.large
      ? css`
          font-size: 1rem; /* 16px */
          line-height: 1.5rem; /* 24px */
          padding-left: 1.25rem; /* 20px */
          padding-right: 1.25rem; /* 20px */
        `
      : props.after
      ? css`
          border-left: none;
          border-top-left-radius: none;
          border-bottom-left-radius: none;
        `
      : props.before
      ? css`
          border-right: none;
          border-top-right-radius: none;
          border-bottom-left-radius: none;
        `
      : props.disabled &&
        css`
          opacity: 50%;
          user-select: none;
          cursor: not-allowed;
        `}

  ${(props) =>
    props.flex &&
    css`
      flex-shrink: 0;
      flex-grow: 0;
      margin-top: 0;
    `}
`;

function FieldAffix({
  after,
  before,
  children,
  flex,
  large,
  disabled,
  small,
}: FieldAffixProps) {
  return (
    <StyledDiv
      after={after}
      before={before}
      flex={flex}
      large={large}
      disabled={disabled}
      small={small}
    >
      {children}
    </StyledDiv>
  );
}

export default FieldAffix;
