import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// Types
import { privateInputProps } from "../Input/Input";
import styled from "styled-components";
import { Disable } from "../Label/Label.stories";

export type BaseSwitchProps<T extends string = string> = privateInputProps & {
  /** Whether the switch is checked. */
  checked?: boolean;
  /** Unique identifier. */
  id: string;
  /** Callback fired when the value changes. */
  onChange: (
    checked: boolean,
    value: T,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const StyledSwitchLabel = styled.label`
  padding: 0;
  margin: 0;
  display: inline-block;
  position: relative;
  line-height: 0;
  width: 50px;
  height: 25px;
`;

const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 25px;
  transition: background-color 0.2s ease;

  &:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${ToggleInput}:checked + & {
    background-color: #0f172a;

    &:before {
      transform: translateX(25px);
    }
  }
`;
const Switch = ({ id, onChange, disabled, checked }: BaseSwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(
      event.currentTarget.checked,
      event.currentTarget.value as any,
      event
    );
  };
  return (
    <>
      <StyledSwitchLabel htmlFor={id}>
        <ToggleInput
          id={id}
          onChange={handleChange}
          disabled={disabled}
          checked={checked}
        />
        <ToggleSlider />
      </StyledSwitchLabel>
    </>
  );
};

export default Switch;
