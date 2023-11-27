import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Popover from "./Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Popover",
  component: Popover,
  argTypes: { content: {} },
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

export const text1 = () => (
  <div style={{ width: 700 }}>
    <Template suffix={<FontAwesomeIcon icon={faCalendar} />} />
  </div>
);
text1.storyName = "Supports a disabled state.";
