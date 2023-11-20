import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "ReactComponentLibrary/Loader",
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => (
  <div style={{ maxWidth: "24rem" }}>
    <Loader data-testId="InputField-id" {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.storyName = "A standard Loader";
