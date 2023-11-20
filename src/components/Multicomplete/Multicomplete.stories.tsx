import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Multicomplete from "./Multicomplete";

const items = [
  { value: "red", name: "Red" },
  { value: "black", name: "Black" },
  { value: "blue", name: "Blue" },
  { value: "green", name: "Green" },
];

export default {
  title: "ReactComponentLibrary/Multicomplete",
  component: Multicomplete,
} as Meta<typeof Multicomplete>;

const Template: StoryFn<typeof Multicomplete> = (args) => (
  <div
    style={{
      display: "flex",
    }}
  >
    <Multicomplete data-testId="InputField-id" {...args} Options={items} />
  </div>
);

export const AC1 = Template.bind({});
AC1.args = {
  accessibilityLabel: "Search",
  placeholder: "Search here",
};
AC1.storyName = "WIP (incomplete functionality)";
