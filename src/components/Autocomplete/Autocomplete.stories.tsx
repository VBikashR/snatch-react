import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Autocomplete from "./Autocomplete";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent } from "rollup";

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
      display: "flex",
    }}
  >
    <Autocomplete data-testId="InputField-id" {...args} />
  </div>
);

export const Chip1 = Template.bind({});
Chip1.args = {};
Chip1.storyName = "Standard Autocomplete";
