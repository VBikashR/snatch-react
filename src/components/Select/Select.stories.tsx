import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "./Select";

export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => (
  <Select data-testId="InputField-id" {...args}>
    <option value="foo">Foo</option>
    <option disabled value="bar">
      Bar
    </option>
    <option value="baz">Baz</option>
  </Select>
);

export const Primary = Template.bind({});
Primary.args = {
  id: "standard-select",
  // label: "Label",
  name: "standard-select",
};

Primary.storyName = "A standard select field";

export const Error = Template.bind({});
Error.args = {
  id: "error-select",
  name: "error-select",
  label: "Label",
  error: true,
  errorMessage: "This field is required",
};
Error.storyName = "With an error message in an invalid state";

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled-select",
  name: "disabled-select",
  label: "Label",
  disabled: true,
};
Disabled.storyName = "With a label and in disabled state";

export const Placeholder = Template.bind({});
Placeholder.args = {
  id: "placeholder-select",
  name: "placeholder-select",
  // label: "Label",
  placeholder: "Select an option",
};
Placeholder.storyName = "With no label and a placeholder";

export const Inline = Template.bind({});
Inline.args = {
  id: "placeholder-select",
  name: "placeholder-select",
  label: "Label",
  placeholder: "Select an option",
  inline: true,
};
Inline.storyName = "Display with Inline Labels";
