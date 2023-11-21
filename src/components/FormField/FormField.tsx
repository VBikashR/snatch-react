import React from "react";
import Prefix from "./Prefix";
import Suffix from "./Suffix";
import StatusText from "../StatusText/StatusText";
import styled from "styled-components";
import Text from "../Text/Text";
import { Alert, AlertDescription } from "../Alert";

export type FormFieldProps = {
  /** @ignore Decrease bottom margin of the field. (Internal use only) */
  compactSpacing?: boolean;
  /** Mark the field as disabled. */
  disabled?: boolean;
  /** Error message to display under the input when invalid. */
  errorMessage?: string;
  /** @ignore Passed from final form. */
  field?: object;
  /** Visually hide the label. */
  hideLabel?: boolean;
  /** @ignore Hide optional label. (Internal use only) */
  hideOptionalLabel?: boolean;
  /** Render the input and label inline to each other. */
  inline?: boolean;
  /** Mark the field as invalid. */
  invalid?: boolean;
  /** Descriptive label that appears above the input. */
  label?: NonNullable<React.ReactNode>;
  /** Small description to display under the label. */
  labelDescription?: React.ReactNode;
  /** Increase label font size and spacing. */
  large?: boolean;
  /** Remove bottom margin from field. */
  noSpacing?: boolean;
  /** Mark the field as optional. */
  optional?: boolean;
  /** Content to display before the input field. */
  prefix?: React.ReactNode;
  /** Decrease label font size and spacing. */
  small?: boolean;
  /** Content to display after the input field. */
  suffix?: React.ReactNode;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

export type PrivateProps = FormFieldProps & {
  /** Input field to wrap. */
  children: NonNullable<React.ReactNode>;
  /** Unique ID of the field. */
  id?: string;
  /** @ignore Render the input field before the label. */
  renderBeforeLabel?: boolean;
  /** @ignore Render the input field as 100% width. */
  renderFullWidth?: boolean;
  /** @ignore Render the labels with large text. Should only be used for nested components, like through controllers. */
  renderLargeLabel?: boolean;
  /** @ignore Stretches the label to 100%. */
  stretchLabel?: boolean;
  /** @ignore Top align. (Internal use only) */
  topAlign?: boolean;
  /** @ignore Middle align content. */
  middleAlign?: boolean;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

const StyledContent = styled.div<PrivateProps>`
  display: flex;
  position: relative;
  flex-grow: 1;
  margin-right: ${(props) =>
    props.inline && props.renderBeforeLabel && "0.125rem"};
  margin-left: ${(props) =>
    props.inline && !props.renderBeforeLabel && "0.125rem"};
  margin: ${(props) => props.hideLabel && "0"};
  width: ${(props) => props.renderFullWidth && "100%"};
`;

const StyledAffix = styled.div`
  flex-grow: 0;
`;
const StyledAnchor = styled.div`
  flex-grow: 1;
`;

const StyledSection = styled.section<PrivateProps>`
  margin-bottom: ${(props) =>
    (props.compactSpacing || props.small) && !props.noSpacing
      ? "0.187rem"
      : props.noSpacing
      ? "0"
      : "0.375rem"};
  &:last-child &:only-child {
    margin-bottom: 0;
  }
`;

const StyledSectionDiv = styled.div<PrivateProps>`
  display: flex;
  align-items: ${(props) =>
    props.inline ? "center" : props.topAlign && "flex-start"};
`;

const StyledLabel = styled.label<PrivateProps>`
  margin: 0;
  margin-bottom: 0.125rem;
  display: block;
  flex-grow: 0;
  flex-basis: ${(props) => props.stretchLabel && "100%"};
  display: ${(props) => props.hideLabel && "none"};
  margin: ${(props) => (props.inline || props.renderBeforeLabel) && 0};
`;

const StyledSpan = styled.span<PrivateProps>`
  margin-left: 0.124rem;
  display: inline-block;
`;

function FormField({
  children,
  compactSpacing,
  disabled,
  errorMessage,
  hideLabel,
  hideOptionalLabel,
  id,
  inline,
  invalid,
  label,
  labelDescription,
  large,
  noSpacing,
  optional,
  renderBeforeLabel,
  renderFullWidth,
  renderLargeLabel,
  stretchLabel,
  prefix,
  small,
  suffix,
  middleAlign,
  styleSheet,
  topAlign,
}: PrivateProps) {
  const content = (
    <StyledContent
      inline={inline}
      renderBeforeLabel={renderBeforeLabel}
      hideLabel={hideLabel}
      renderFullWidth={renderFullWidth}
    >
      {prefix && <StyledAffix>{prefix}</StyledAffix>}

      <StyledAnchor>{children}</StyledAnchor>

      {suffix && <StyledAffix>{suffix}</StyledAffix>}
    </StyledContent>
  );

  return (
    <StyledSection compactSpacing={compactSpacing} noSpacing={noSpacing}>
      <StyledSectionDiv>
        {renderBeforeLabel && content}

        <StyledLabel
          htmlFor={id}
          stretchLabel={stretchLabel}
          hideLabel={hideLabel}
          inline={inline}
          renderBeforeLabel={renderBeforeLabel}
        >
          <StatusText
            danger={invalid}
            muted={disabled}
            small={small}
            large={large}
            bold={!renderLargeLabel}
          >
            {label}

            {optional && !hideOptionalLabel && (
              <StyledSpan>
                <Text inline small muted>
                  optional
                </Text>
              </StyledSpan>
            )}
          </StatusText>

          {labelDescription && <Text small>{labelDescription}</Text>}
        </StyledLabel>

        {!renderBeforeLabel && content}
      </StyledSectionDiv>

      {invalid && (
        <Alert variant={"destructive"} border={false}>
          <AlertDescription></AlertDescription>
          {errorMessage}
        </Alert>
      )}
    </StyledSection>
  );
}

export { Prefix, Suffix };

export default FormField;
