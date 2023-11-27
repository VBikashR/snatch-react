import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Text from "./Text";

export default {
  title: "ReactComponentLibrary/Text",
  component: Text,
  argTypes: { content: {} },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const text1 = () => (
  <Template>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora saepe
    qui eum amet, consectetur explicabo harum incidunt accusantium autem
    voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
  </Template>
);
text1.storyName = "A basic string of text.";

export const text2 = () => (
  <>
    <Template light>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template bold>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template uppercased>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
  </>
);
text2.storyName = "With light, bold, and uppercased emphasis.";

export const text3 = () => (
  <>
    <Template micro>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template small>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template large>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
  </>
);
text3.storyName =
  "With different sizing: micro, small, regular (default), and large.";

export const text4 = () => (
  <>
    <Template muted>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template disabled>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
  </>
);
text4.storyName = "With different states: muted, disabled";

export const text5 = () => (
  <>
    <Template uppercased>truncated text</Template>
    <Template truncated>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
    <br />
    <Template>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tempora
      saepe qui eum amet, consectetur explicabo harum incidunt accusantium autem
      voluptatum omnis, nulla rerum at perspiciatis nisi dolore quaerat illum?
    </Template>
  </>
);
text5.storyName = "With truncated";

export const text6 = () => (
  <>
    <div style={{ textAlign: "center" }}>
      <Template>
        <Template bold>Parent alignment</Template> Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
      </Template>
      <br />
      <Template startAlign>
        <Text bold>Start align</Text> Lorem ipsum, dolor sit amet consectetur
        adipisicing elit.
      </Template>
      <br />
      <Template centerAlign>
        <Template bold>Center align</Template> Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
      </Template>
      <br />
      <Template endAlign>
        <Template bold>End align</Template> Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
      </Template>
    </div>
  </>
);
text6.storyName = "With truncated";
