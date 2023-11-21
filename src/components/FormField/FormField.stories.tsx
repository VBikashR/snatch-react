import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FormField from "./FormField";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";

export default {
  title: "ReactComponentLibrary/FormField",
  component: FormField,
  argTypes: { content: {} },
} as Meta<typeof FormField>;

const Template: StoryFn<typeof FormField> = (args) => <FormField {...args} />;

export const text1 = () => (
  <>
    <Select
      disabled
      name="disabled-select"
      label="Select"
      onChange={() => console.log("onChange")}
    >
      <option value="">Option</option>
    </Select>

    <Textarea
      disabled
      name="disabled-textarea"
      label="Textarea"
      onChange={() => console.log("onChange")}
    />
  </>
);
text1.storyName = "Supports a disabled state.";
