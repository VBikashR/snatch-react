import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Datepicker from "./Datepicker";

export default {
  title: "ReactComponentLibrary/Datepicker",
  component: Datepicker,
} as Meta<typeof Datepicker>;

const Template: StoryFn<typeof Datepicker> = (args) => <Datepicker {...args} />;

export const Calander1 = () => (
  <div style={{ width: "fit-content" }}>
    <Template
      selectDateInRange={true}
      pastDateSelection={false}
      dateFormat="MMM dd, yyyy"
    />
  </div>
);
Calander1.storyName = "Standard Calander";
