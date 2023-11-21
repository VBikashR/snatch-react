import React from "react";
import styled, { css } from "styled-components";

export type BaseAffixProps = {
  /** @ignore */
  after?: boolean;
  /** @ignore */
  before?: boolean;
  /** Content within the affix. */
  children: NonNullable<React.ReactNode>;
  /** Align using flexbox. */
  flex?: boolean;
  /** Decrease font size and padding. */
  small?: boolean;
  /** Increase font size and padding. */
  large?: boolean;
  /** Mark the affix as disabled. */
  disabled?: boolean;
};

const StyledDiv = styled.div<BaseAffixProps>`
  display: inline-block;
  vertical-align: middle;
  margin-top: 0;
  padding-left: ${(props) => (props.after ? "0.3rem" : 0)};
  padding-right: ${(props) => (props.before ? "0.3rem" : 0)};

  ${(props) =>
    props.flex &&
    css`
      flex-shrink: 0;
      flex-grow: 0;
      margin-top: 0;
    `}
`;

function BaseAffix({ after, before, children, flex }: BaseAffixProps) {
  return (
    <StyledDiv after={after} before={before} flex={flex}>
      {children}
    </StyledDiv>
  );
}

export default BaseAffix;
