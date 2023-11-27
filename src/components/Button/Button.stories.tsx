import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import Loader from "../Loader/Loader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const btn1 = Template.bind({});
btn1.args = {
  children: "Button",
};
btn1.storyName = "Standard button";

export const AllSizes = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Template size="small" variant="default">
      Button
    </Template>
    <Template size="medium" variant="default">
      Button
    </Template>
    <Template size="large" variant="default">
      Button
    </Template>
  </div>
);
AllSizes.storyName = "With different sizes: small, medium (default) and large";

export const btn2 = Template.bind({});
btn2.args = {
  size: "medium",
  variant: "default",
  disabled: true,
  children: "Disabled Button",
};
btn2.storyName = "Disabled button";

export const AllVariant = () => (
  <>
    <div style={{ display: "flex", gap: "8px" }}>
      <Template size="medium" variant="default">
        Default Button
      </Template>
      <Template size="medium" variant="secondary">
        Secondary Button
      </Template>
      <Template size="medium" variant="destructive">
        Destructive Button
      </Template>
      <Template size="medium" variant="outline">
        Outline Button
      </Template>
      <Template size="medium" variant="ghost">
        Ghost Button
      </Template>
      <Template size="medium" variant="link">
        Link Button
      </Template>
    </div>
    <div style={{ marginTop: "2rem" }}>
      <Template size="medium" variant="tag">
        Tag Button
      </Template>
    </div>
  </>
);
AllVariant.storyName = "With all Variant types";

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Template
      variant="default"
      beforeIcon={<FontAwesomeIcon icon={faGoogle} />}
    >
      Button
    </Template>
    <Template
      variant="default"
      afterIcon={<FontAwesomeIcon icon={faGooglePlay} />}
    >
      Button
    </Template>
    <Template
      variant="default"
      afterIcon={<FontAwesomeIcon icon={faGooglePlay} />}
      loading
    >
      Button
    </Template>
    <Template variant="tag" afterIcon={<FontAwesomeIcon icon={faCalendar} />}>
      Tag Button
    </Template>
  </div>
);
WithIcons.storyName = "With Icons";
