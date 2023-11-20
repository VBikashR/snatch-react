import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import ButtonOrLink from "../Private/ButtonOrLink";
import styled, { css } from "styled-components";

export type MenuItemProps = {
  /** Content within the menu item. */
  children: NonNullable<React.ReactNode>;
  /** Mark the button as disabled. */
  disabled?: boolean;
  /** Mark the item as highlighted. */
  highlighted?: boolean;
  /** Render an anchor link with a URL instead of a button. */
  href?: string;
  /** An icon to display before the item. */
  icon?: React.ReactNode;
  /** Pass an HTML element attribute id. */
  id?: string;
  /** Click handler. */
  onClick?: () => void;
  /** Opens links in a new window. */
  openInNewWindow?: boolean;
  /** Accessibility role. */
  role?: string;
  /** Increase padding. */
  spacious?: boolean;
  /** A sub-menu to display on hover. */
  submenu?: React.ReactNode;
  /** Tab index for the current menu. */
  tabIndex?: number;
  /** Tip to display after the item. */
  tip?: React.ReactNode;
  /** A tracking name to identify this component. */
  trackingName?: string;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
  /** Icon to display at the end the content. */
  afterIcon?: React.ReactNode;
  /** Icon to display at the start the content. */
  beforeIcon?: React.ReactNode;
};

const StyledDirectionIcon = styled.div`
  font-size: 14px;
`;

const StyledMenuitem = styled(ButtonOrLink)<MenuItemProps>`
  border: none;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  font-family: Times, serif;
  padding: ${(props) => (props.spacious ? "1rem" : "0.375rem 0.4rem")};
  outline: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: left;
  border-radius: 0.125rem;
  background-color: transparent;
  color: #000;
  opacity: ${(props) => (props.disabled ? "30%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    box-shadow: none;
  }

  /* ${(props) =>
    props.href
      ? css`
          display: block;
        `
      : css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `} */

  &:hover {
    background-color: #e2e8f0;
    color: #525252;
  }

  /** Style direct span child*/
  & > span {
    flex-grow: 1;
  }
  /** Style direct div child*/
  & > div {
    flex-grow: 0;
    margin: 0;
    &:first-child {
      margin-right: 0.375rem;
    }
    &:last-child {
      margin-left: 0.375rem;
    }
  }
`;

const StyledSubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 99%;
`;

/** An interactive item within a menu. */
function MenuItem({
  children,
  disabled,
  highlighted,
  href = "",
  icon,
  id,
  onClick,
  openInNewWindow,
  role = "menuitem",
  spacious,
  submenu,
  tabIndex = -1,
  tip,
  trackingName,
}: MenuItemProps) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    if (submenu) {
      setShowSubmenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (submenu) {
      setShowSubmenu(false);
    }
  };

  const after = submenu ? (
    <StyledDirectionIcon>
      {<FontAwesomeIcon icon={faCaretRight} size={"xs"} />}
    </StyledDirectionIcon>
  ) : (
    tip
  );

  return (
    <li
      role="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledMenuitem
        afterIcon={
          after ? (
            <>
              <small style={{ color: "#64748b", fontSize: "10px" }}>
                {after}
              </small>
            </>
          ) : null
        }
        aria-expanded={showSubmenu}
        aria-haspopup={!!submenu}
        beforeIcon={icon}
        disabled={disabled}
        href={href}
        id={id}
        spacious={spacious}
        highlighted={highlighted}
        openInNewWindow={openInNewWindow}
        role={role}
        tabIndex={tabIndex}
        trackingName={trackingName}
        onClick={onClick}
        style={{ backgroundColor: (showSubmenu || highlighted) && "#e2e8f0" }}
      >
        {children}
      </StyledMenuitem>

      {showSubmenu && <StyledSubMenu>{submenu}</StyledSubMenu>}
    </li>
  );
}

export default MenuItem;
