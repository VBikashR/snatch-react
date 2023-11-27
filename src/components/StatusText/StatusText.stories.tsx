import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StatusText from "./StatusText";

export default {
  title: "ReactComponentLibrary/StatusText",
  component: StatusText,
  argTypes: { content: {} },
} as Meta<typeof StatusText>;

const Template: StoryFn<typeof StatusText> = (args) => <StatusText {...args} />;

export const text1 = () => (
  <>
    <Template>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template notice>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template info>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template success>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template warning>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template danger>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template muted>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
  </>
);
text1.storyName = "Default and status classified text.";

export const text2 = () => (
  <>
    <Template notice micro>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template info small>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template success large>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template warning disabled>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template danger light>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
    <Template muted bold>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </Template>
  </>
);
text2.storyName = "Can pass props to the underlying component.";
