import React from "react";
import styled, { css } from "styled-components";
import { ChipProps } from "./Chip.types";
import ButtonOrLink from "../Private/ButtonOrLink";

const StyledChip = styled.div<ChipProps>`
  border: solid 1px;
  border-radius: 0.725rem;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  justify-content: center;
  margin: 0 0.25rem;
  padding: ${(props) =>
    props.afterIcon
      ? "0.125rem 0.2rem 0.125rem 0.5rem"
      : "0.125rem 0.5rem 0.125rem 0.5rem"};
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  gap: 0.25rem;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  ${(props) =>
    props.disabled &&
    css`
      user-select: none;
      opacity: 50%;
    `};
`;

const StyledIconDiv = styled.div<ChipProps>`
  padding: 0;
  margin-top: 0.1rem;
`;

const StyledIconButton = styled(ButtonOrLink)<ChipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: transparent;

  &:hover {
    color: grey;
  }
  &:focus {
    outline: none;
  }
`;

const Chip = ({
  active = false,
  afterIcon,
  beforeIcon,
  children,
  disabled,
  id,
  onIconClick,
  hasOnIconClick,
  ...props
}: ChipProps) => {
  return (
    <>
      <StyledChip
        active={active}
        id={id}
        {...props}
        afterIcon={afterIcon}
        disabled={disabled}
        hasOnIconClick={hasOnIconClick}
      >
        {beforeIcon && <StyledIconDiv>{beforeIcon}</StyledIconDiv>}
        {children}
        {afterIcon && (
          <div>
            {hasOnIconClick ? (
              <StyledIconButton
                active={active}
                onClick={onIconClick}
                disabled={disabled}
              >
                {afterIcon}
              </StyledIconButton>
            ) : (
              <StyledIconDiv>{afterIcon}</StyledIconDiv>
            )}
          </div>
        )}
      </StyledChip>
    </>
  );
};

export default Chip;
