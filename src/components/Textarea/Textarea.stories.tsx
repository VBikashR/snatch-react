import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "ReactComponentLibrary/Textarea",
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => (
  <Textarea data-testId="TextareaField-id" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Primary",
  placeholder: "Comments..",
  inline: true,
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Primary",
  placeholder: "Comments..",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Primary",
  placeholder: "Comments..",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  success: false,
  disabled: false,
  label: "Primary",
  placeholder: "Comments..",
  errorMessage: "This field is required",
};
