import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Calander from "./Calander";
import Dropdown from "../Dropdown/Dropdown";

export default {
  title: "ReactComponentLibrary/Calander",
  component: Calander,
} as Meta<typeof Calander>;

const Template: StoryFn<typeof Calander> = (args) => <Calander {...args} />;

export const Calander1 = () => (
  <>
    <Dropdown triggerInfo={"DatePicker"}>
      <Template onSelect={() => {}} />
    </Dropdown>
  </>
);
