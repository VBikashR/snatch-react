import React from "react";
import MenuItem from "./MenuItem";
import MenuRow from "./MenuRow";
import styled from "styled-components";

export type MenuProps = {
  /** List of `Row`s, `Item`s, and `Separator`s to render in the menu. */
  children?: React.ReactNode;
  /** Accessibility label. */
  accessibilityLabel?: string;
  /** Maximum height of the menu before scrolling. */
  maxHeight?: number;
  /** Minimum width of the menu. */
  minWidth?: number;
  /** Accessibility role. */
  role?: string;
  /** Whether or not the menu has visible overflow. */
  overflow?: boolean;
};

const StyledMenuUl = styled.ul<MenuProps>`
  margin: 0;
  background-color: #fff;
  list-style: none;
  border: solid 1px #f8fafc;
  border-radius: 0.375rem;
  z-index: 50;
  padding: 0.25rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  /* Add more styles for direct child li elements as needed */
  & > li {
    position: relative;
  }
`;

/** An abstract menu for use within dropdowns, selects, autocompletes, and more. */
export default function Menu({
  accessibilityLabel,
  children,
  maxHeight,
  minWidth = 200,
  overflow,
  role = "menu",
}: MenuProps) {
  const scrollable = !!maxHeight && !overflow;

  return (
    <StyledMenuUl
      role={role}
      aria-label={accessibilityLabel}
      style={{
        maxHeight: scrollable ? "auto" : `${maxHeight}px`,
        overflowY: scrollable ? "auto" : "visible", // If there a overflow issue, this is the culprit
        minWidth: `${minWidth}px`,
      }}
    >
      {children}
    </StyledMenuUl>
  );
}

export { MenuItem, MenuRow };
