import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  // <div style={{ maxWidth: "24rem" }}>
  <Input data-testid="Inputfield-id" {...args} />
  // </div>
);

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: "Label",
  type: "text",
  name: "text",
  id: "primary",
};
Primary.storyName = "A standard Text Field";

export const NoLabel = Template.bind({});
NoLabel.args = {
  type: "text",
  name: "text",
  id: "primary",
};
NoLabel.storyName = "A standard Text Field with no label";

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Label",
  type: "email",
  name: "email",
  placeholder: "Email Address",
  id: "success",
};
Success.storyName = "In a success state";

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  label: "Label",
  type: "text",
  name: "text",
  errorMessage: "This field is required",
  id: "error",
};
Error.storyName = "With an error message in an invalid state";

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  id: "disabled",
  type: "text",
  name: "text",
};
Disabled.storyName = "In a disabled state";

export const File = Template.bind({});
File.args = {
  type: "file",
  name: "file",
  label: "Label",
  id: "picture",
};
File.storyName = "As a file upload";

export const Inline = Template.bind({});
Inline.args = {
  type: "text",
  name: "text",
  label: "Label",
  id: "text",
  inline: true,
};
Inline.storyName = "Display with inline label";

export const PasswordInput = () => (
  <div style={{ width: 600 }}>
    <Template
      type="password"
      name="password"
      label="Password"
      id="Password"
      suffix={<FontAwesomeIcon icon={faEye} size={"sm"} />}
    />
    <br />
    <Template type="text" name="text" label="Text" id="text" />
  </div>
);
PasswordInput.storyName = "As password field";
