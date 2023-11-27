import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Label from "./Label";

export default {
  title: "ReactComponentLibrary/Label",
  component: Label,
  tags: ["autodocs"],
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a label",
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  children: "This is a label",
  disabled: false,
  error: "true",
};

export const Disable = Template.bind({});
Disable.args = {
  children: "This is a label",
  disabled: true,
};
