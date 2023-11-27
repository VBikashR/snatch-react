import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: "#080808";
  margin: 0;
  padding: 0;
`;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ ...props }, ref) => {
    return (
      <>
        <StyledLabel {...props} ref={ref} />
      </>
    );
  }
);

Label.displayName = "Label";

export default Label;
