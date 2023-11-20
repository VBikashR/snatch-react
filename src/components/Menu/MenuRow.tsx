import React from "react";
import styled from "styled-components";

export type MenuRowProps = {
  /** Content to display in the row. */
  children: NonNullable<React.ReactNode>;
  /** Double the padding and spacing. */
  spacious?: boolean;
};

const StyledRow = styled.div<MenuRowProps>`
  display: block;
  width: 100%;
  padding: ${(props) => (props.spacious ? "0.5rem" : "0.25rem")};
  border: 0;
  text-align: left;
`;

/** A non-interactive row within a menu. */
export default function MenuRow({ children, spacious }: MenuRowProps) {
  return (
    <li role="none">
      <StyledRow spacious={spacious}>{children}</StyledRow>
    </li>
  );
}
