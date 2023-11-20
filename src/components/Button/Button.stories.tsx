import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const btn1 = Template.bind({});
btn1.args = {
  text: "Button",
};
btn1.storyName = "Standard button";

export const AllSizes = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Template text="Button" size="small" variant="default" />
    <Template text="Button" size="medium" variant="default" />
    <Template text="Button" size="large" variant="default" />
  </div>
);
AllSizes.storyName = "With different sizes: small, medium (default) and large";

export const btn2 = Template.bind({});
btn2.args = {
  text: "Button",
  size: "medium",
  variant: "default",
  disabled: true,
};
btn2.storyName = "Disabled button";

export const AllVariant = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Template text="Default Button" size="medium" variant="default" />
    <Template text="Secondary Button" size="medium" variant="secondary" />
    <Template text="Destructive Button" size="medium" variant="destructive" />
    <Template text="Outline Button" size="medium" variant="outline" />
    <Template text="Ghost Button" size="medium" variant="ghost" />
    <Template text="Link Button" size="medium" variant="link" />
  </div>
);
AllVariant.storyName = "With all Variant types";
