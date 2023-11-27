import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //   label: "Label",
};
Primary.storyName = "A standard checkbox Field";

export const NoLabel = Template.bind({});
NoLabel.args = {
  name: "text",
  id: "primary",
};
NoLabel.storyName = "A standard checkbox Field with no label";

export const Success = Template.bind({});
Success.args = {
  label: "Label",
  description: "This is a description text",
  name: "Label",
  id: "success",
};
Success.storyName = "A standard checkbox Field with label and description";

export const Error = () => (
  <>
    <Template
      error={true}
      label="Human"
      description="You identify as human"
      id="human"
      name="human"
      errorMessage="This field is required"
    />
    <br />
    <br />

    <Template
      error={true}
      label="Human"
      id="human"
      name="human"
      errorMessage="This field is required"
    />
  </>
);
Error.storyName = "With an error message in an invalid state";

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
  id: "disabled",
  name: "text",
};
Disabled.storyName = "In a disabled state";
