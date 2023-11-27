import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.375rem;
  padding: 1.5rem;
`;

const StyledTitle = styled.h3`
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  margin: 0;
  padding-bottom: 5px;
`;

const StyledCardDescription = styled.p`
  font-size: 0.75rem; /* 12px */
  line-height: 1; /* 16px */
  padding: 0;
  margin: 0;
  color: #94a3b8;
  word-wrap: break-word;
`;

const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  padding-top: 0;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;

const Card: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <StyledCard className={`${className}`} {...props} />;
};

const CardHeader: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <StyledHeader className={className} {...props} />;
};

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledTitle className={className} {...props}>
      {children}
    </StyledTitle>
  );
};

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledCardDescription className={className} {...props}>
      {children}
    </StyledCardDescription>
  );
};

const CardContent: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <StyledContent className={className} {...props} />;
};

const CardFooter: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <StyledFooter className={className} {...props} />;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
