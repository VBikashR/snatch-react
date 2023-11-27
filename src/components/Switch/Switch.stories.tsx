import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "ReactComponentLibrary/Switch",
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => (
  // <div style={{ maxWidth: "24rem" }}>
  <Switch data-testid="Inputfield-id" {...args} />
  // </div>
);

export const Primary = () => (
  <div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Standard Switch</label>
      <Template id={"primary"} onChange={() => {}} checked />
    </div>
    <br />
    <br />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Disabled Switch</label>
      <Template id={"disabled"} onChange={() => {}} disabled />
    </div>
  </div>
);
Primary.storyName = "A standard Text Field";
