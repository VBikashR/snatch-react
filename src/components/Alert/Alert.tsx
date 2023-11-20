import * as React from "react";
import styled, { css } from "styled-components";
import { AlertProps } from "./Alert.types";

const StyledAlert = styled.div<AlertProps>`
  position: relative;
  width: 100%;
  border: solid 1px;
  border-radius: 0.375rem;
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-color: #cbd5e1;
  ${(props) =>
    props.variant === "default"
      ? css`
          background-color: #ffffff;
          color: #475569;
        `
      : css`
          background-color: #f8fafc;
          color: #b91c1c;
          border-color: #b91c1c;
        `};

  & > svg + div {
    transform: translateY(-3px);
  }

  & > svg {
    position: absolute;
    left: 1rem; /* Equivalent to left-4 in Tailwind */
    top: 1rem; /* Equivalent to top-4 in Tailwind */
    fill: #475569; /* Replace with your desired text color */
  }

  & > svg ~ * {
    padding-left: 1.75rem; /* Equivalent to pl-7 in Tailwind */
  }
`;

const StyledTitle = styled.h5`
  margin: 0;
  line-height: 1;
  margin-bottom: 0.25rem;
  letter-spacing: -0.025em;
`;

const StyledDescription = styled.div`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  & > p {
    line-height: 1.625;
  }
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "default", children, ...props }, ref) => (
    <StyledAlert ref={ref} role="alert" variant={variant} {...props}>
      {children}
    </StyledAlert>
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <StyledTitle ref={ref} {...props} />);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => <StyledDescription ref={ref} {...props} />);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
