import React from "react";
import MenuItem from "./MenuItem";
import MenuRow from "./MenuRow";
import styled from "styled-components";

// Define the props for the Menu component
export type MenuProps = {
  children?: React.ReactNode;
  accessibilityLabel?: string;
  maxHeight?: number;
  minWidth?: number;
  role?: string;
  overflow?: boolean;
};

// Define the styled ul element
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

// Forward the ref to the ul element in the Menu component
const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    {
      accessibilityLabel,
      children,
      maxHeight,
      minWidth = 200,
      overflow,
      role = "menu",
    },
    ref
  ) => {
    const scrollable = !!maxHeight && !overflow;

    return (
      <StyledMenuUl
        role={role}
        aria-label={accessibilityLabel}
        style={{
          maxHeight: scrollable ? "auto" : `${maxHeight}px`,
          overflowY: scrollable ? "auto" : "visible",
          minWidth: `${minWidth}px`,
        }}
        ref={ref}
      >
        {children}
      </StyledMenuUl>
    );
  }
);

Menu.displayName = "Menu";

// Export MenuItem and MenuRow along with Menu
export { MenuItem, MenuRow, Menu };
