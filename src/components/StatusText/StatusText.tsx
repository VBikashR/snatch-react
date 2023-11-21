import React from "react";
import Text from "../Text/Text";
import styled from "styled-components";
import { StatusTextProps } from "./StatusText.types";

const StyledSpan = styled.span<StatusTextProps>`
  color: ${(props) =>
    props.danger
      ? "hsl(0, 73.7%, 41.8%)"
      : props.muted
      ? "hsl(215, 16%, 46%)"
      : props.notice
      ? "hsl(191.6, 91.4%, 36.5%)"
      : props.success
      ? "hsl(161.4, 93.5%, 30.4%)"
      : props.info
      ? "hsl(262.1, 83.3%, 57.8%)"
      : props.warning && "hsl(32.1, 94.6%, 43.7%)"};
`;
/** Display a string of classified text with colorful statuses. */
function StatusText({
  children,
  danger,
  info,
  muted,
  notice,
  success,
  warning,
  ...restProps
}: StatusTextProps) {
  return (
    <Text {...restProps}>
      <StyledSpan
        danger={danger}
        info={info}
        muted={muted}
        notice={notice}
        success={success}
        warning={warning}
      >
        {children}
      </StyledSpan>
    </Text>
  );
}

export default StatusText;
