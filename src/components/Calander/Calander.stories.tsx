import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Calander from "./Calander";

export default {
  title: "ReactComponentLibrary/Calander",
  component: Calander,
} as Meta<typeof Calander>;

const Template: StoryFn<typeof Calander> = (args) => <Calander {...args} />;

export const Calander1 = () => (
  <div style={{ width: "fit-content" }}>
    <Template onSelect={() => {}} />
  </div>
);
Calander1.storyName = "Standard Calander";

export const Calander2 = () => (
  <div style={{ width: "fit-content" }}>
    <Template
      onSelect={() => {}}
      numberOfMonths={1}
      pastDateSelection={false}
    />
  </div>
);
Calander2.storyName = "With disallowed past date selection";

export const Calander3 = () => (
  <div style={{ width: "fit-content" }}>
    <Template onSelect={() => {}} numberOfMonths={1} selectDateInRange={true} />
  </div>
);
Calander3.storyName = "With date selection in Range";

export const Calander4 = () => (
  <div style={{ width: "fit-content" }}>
    <Template onSelect={() => {}} numberOfMonths={2} selectDateInRange={true} />
  </div>
);
Calander4.storyName = "Display with multiple months";
