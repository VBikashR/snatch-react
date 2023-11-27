import React from "react";
import styled from "styled-components";

export type SeparatorProps = {
  orientation?: "vertical" | "horizontal";
};

const StyledHr = styled.hr<SeparatorProps>`
  padding: 0;
  margin: 0;
  border: none;
  background-color: #e2e8f0;
  height: ${(props) => (props.orientation === "vertical" ? "100%" : "1px")};
  width: ${(props) => (props.orientation === "vertical" ? "1px" : "100%")};
  flex-shrink: 0;
`;

/** A separator between menu items. */
export default function Seperator({ orientation }: SeparatorProps) {
  return <StyledHr orientation={orientation} role="separator" />;
}
