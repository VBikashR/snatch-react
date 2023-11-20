import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <div style={{ maxWidth: "24rem" }}>
    <Input data-testId="InputField-id" {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: "Label",
  type: "text",
  id: "primary",
};
Primary.storyName = "A standard Text Field";

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Label",
  type: "email",
  placeholder: "Email Address",
  id: "success",
};
Success.storyName = "In a success state";

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  label: "Label",
  errorMessage: "This field is required",
  id: "error",
};
Error.storyName = "With an error message in an invalid state";

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  id: "disabled",
};
Disabled.storyName = "In a disabled state";

export const File = Template.bind({});
File.args = {
  type: "file",
  label: "Label",
  id: "picture",
};
File.storyName = "As a file upload";

export const Inline = Template.bind({});
Inline.args = {
  type: "text",
  label: "Label",
  id: "text",
  inline: true,
};
Inline.storyName = "Display with inline label";
