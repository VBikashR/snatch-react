import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Chip from "./Chip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Chip",
  component: Chip,
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <h3>Default</h3>
      <h3>Active</h3>
      <h3>Disabled</h3>
    </div>
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <Chip data-testId="InputField-id" {...args}>
        Foo
      </Chip>
      <Chip data-testId="InputField-id" {...args} active={true}>
        Barr
      </Chip>
      <Chip data-testId="InputField-id" {...args} disabled={true}>
        Baz
      </Chip>
    </div>
  </div>
);

export const Chip1 = Template.bind({});
Chip1.args = {
  id: "chip1",
};
Chip1.storyName = "Standard Chip";

export const Chip2 = Template.bind({});
Chip2.args = {
  id: "chip1",
  beforeIcon: <FontAwesomeIcon icon={faCalendar} />,
  afterIcon: <FontAwesomeIcon icon={faCircleXmark} size={"lg"} />,
};
Chip2.storyName = "With icons before and/or after";

export const Chip3 = Template.bind({});
Chip3.args = {
  id: "chip1",
  //   beforeIcon: <FontAwesomeIcon icon={faPlus} />,
  afterIcon: <FontAwesomeIcon icon={faCircleXmark} size={"lg"} />,
  hasOnIconClick: true,
};
Chip3.storyName = "With an icon button (only right icon can be button)";

export const Chip4 = Template.bind({});
Chip4.args = {
  id: "chip1",
  beforeIcon: <FontAwesomeIcon icon={faCalendar} />,
};
Chip4.storyName = "With left icon only";

export const Chip5 = Template.bind({});
Chip5.args = {
  id: "chip1",
  afterIcon: <FontAwesomeIcon icon={faCalendar} />,
};
Chip5.storyName = "With right icon only";
