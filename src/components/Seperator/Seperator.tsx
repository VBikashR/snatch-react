import React from "react";
import styled from "styled-components";

export type SeparatorProps = {
  orientation?: "vertical" | "horizontal";
};

const StyledHr = styled.hr<SeparatorProps>`
  padding: 0;
  margin: 0;
  background-color: #64748b;
  /* height: ${(props) => (props.orientation === "vertical" ? "100%" : "1px")};
  width: ${(props) => (props.orientation === "vertical" ? "1px" : "100%")}; */
  flex-shrink: 0;
`;

/** A separator between menu items. */
export default function Seperator({ orientation }: SeparatorProps) {
  return <StyledHr orientation={orientation} role="separator" />;
}
