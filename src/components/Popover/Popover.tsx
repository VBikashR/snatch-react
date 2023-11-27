import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { privateInputProps } from "../Input/Input";
import { FormFieldProps } from "../FormField/FormField";
import styled from "styled-components";

const StyledPopoverTrigger = styled.input<privateInputProps>`
  box-sizing: border-box;
  height: 2.25rem;
  width: 100%;
  border-radius: 0.375rem 0 0 0.375rem;
  border: solid 1px;
  border-right: none;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const StyledContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: center;
  flex-grow: 1;
  border: none;

  &:focus-within {
    outline: solid 2px #0e7490;
    outline-offset: 1px;
    border-radius: 0.375rem;
  }
`;

const StyledAffix = styled.div`
  box-sizing: border-box;
  border: solid 1px;
  height: 2.25rem;
  border-left: none;
  padding: 0.25rem 0.75rem;
  flex-grow: 0;
  display: flex;
  align-items: center;
  border-radius: 0 0.375rem 0.375rem 0;
`;

const StyledAnchor = styled.div`
  flex-grow: 1;
`;

type InputProps = Omit<privateInputProps, "id"> & {
  /** Content to display before the input field. */
  prefix?: React.ReactNode;
  /** Decrease label font size and spacing. */
  small?: boolean;
  /** Content to display after the input field. */
  suffix?: React.ReactNode;
};

const Popover = ({ prefix, suffix }: InputProps) => {
  return (
    <>
      <StyledContent>
        <StyledAnchor>
          <StyledPopoverTrigger />
        </StyledAnchor>

        {suffix && <StyledAffix>{suffix}</StyledAffix>}
      </StyledContent>
    </>
  );
};

export default Popover;
