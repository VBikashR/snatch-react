import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Autocomplete from "./Autocomplete";

const items = [
  { value: "red", name: "Red" },
  { value: "black", name: "Black" },
  { value: "blue", name: "Blue" },
  { value: "green", name: "Green" },
];

export default {
  title: "ReactComponentLibrary/Autocomplete",
  component: Autocomplete,
} as Meta<typeof Autocomplete>;

const Template: StoryFn<typeof Autocomplete> = (args) => (
  <div
    style={{
      width: 800,
    }}
  >
    <Autocomplete data-testId="InputField-id" {...args} Options={items} />
  </div>
);

export const AC1 = Template.bind({});
AC1.args = {
  accessibilityLabel: "Search",
  placeholder: "Search here",
};
AC1.storyName = "Standard Autocomplete used for searching";

export const AC2 = () => (
  <div
    style={{
      display: "flex",
    }}
  >
    <Autocomplete
      data-testId="InputField-id"
      accessibilityLabel="error search"
      Options={[]}
      placeholder="Search here"
    />
  </div>
);
AC2.storyName = "With Error Message in invalid State";

export const AC3 = Template.bind({});
AC3.args = {
  accessibilityLabel: "Search with label",
  placeholder: "Search here",
  label: "Label",
};
AC3.storyName = "Standard Autocomplete with Label";
