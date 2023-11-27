import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const dropdown1 = () => (
  <>
    <Template triggerInfo={"dropdown"}>
      <div>Hello</div>
    </Template>
  </>
);

dropdown1.storyName = "A simple dropdown";
