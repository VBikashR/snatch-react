import React, { useEffect, useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "../Button/Button.types";
import Button from "../Button/Button";
import Text from "../Text/Text";

export type DropdownProps = ButtonProps & {
  /** Bottom offset. */
  bottom?: number | string;
  /** Content within the dropdown. */
  children: NonNullable<React.ReactNode>;
  /** info to display on the trigger*/
  triggerInfo?: any;
  /** Position the dropdown absolutely (default) or fixed. */
  fixed?: boolean;
  /** Left offset. */
  left?: number | string;
  /** Callback fired when dropdown is unfocused. */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  /** Callback fired when a click occurs inside the dropdown when `visible`. */
  onClickInside?: (event: MouseEvent) => void;
  /** Callback fired when a click occurs outside the dropdown when `visible`. */
  onClickOutside?: (event: MouseEvent) => void;
  /** Callback fired when dropdown is focused. */
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  /** Right offset. */
  right?: number | string;
  /** Tab index for focus management. */
  tabIndex?: number;
  /** Top offset. */
  top?: number | string;
  /** When the dropdown is visible, adds event listening for clicks outside of the dropdown. */
  visible?: boolean;
  /** Z-index of the dropdown. */
  zIndex?: number | "auto";
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  /**position of the dropdown menu*/
  alignment?: "left" | "center" | "right";
};

const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdownContent = styled.div<DropdownProps>`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "auto")};
  outline: none;

  ${(props) =>
    props.alignment === "right"
      ? css`
          right: 0;
        `
      : props.alignment === "left"
      ? css`
          left: 0;
        `
      : css`
          left: -50%;
        `}

  /* border: solid 1px #cbd5e1;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 1rem;
  min-width: 16rem;
  width: fit-content; */
  margin-top: 0.125rem;
`;

/** An abstract component for displaing menus and overlays over content. */
export default function Dropdown({
  children,
  variant,
  fixed,
  triggerInfo,
  onBlur,
  onFocus,
  tabIndex,
  zIndex,
  visible,
  beforeIcon,
  afterIcon,
  onClickInside,
  onClickOutside,
  ...props
}: DropdownProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const { current } = ref;

      if (current?.contains(event.target as Element)) {
        if (onClickInside) {
          onClickInside(event);
        }
        return;
      }

      if (onClickOutside) {
        onClickOutside(event);
      }
    },
    [ref, onClickInside, onClickOutside]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClick, true);
    } else {
      document.removeEventListener("click", handleClick, true);
    }

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [open, handleClick]);

  return (
    <StyledDropDown>
      <Button
        onClick={handleToggle}
        beforeIcon={beforeIcon}
        afterIcon={afterIcon}
        variant={variant}
        block
      >
        {triggerInfo}
      </Button>
      {open && (
        <StyledDropdownContent
          {...props}
          fixed={fixed}
          ref={ref}
          tabIndex={tabIndex}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {children}
        </StyledDropdownContent>
      )}
    </StyledDropDown>
  );
}
