import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CreateAccount from "./CreateAccount";

const meta: Meta<typeof CreateAccount> = {
  component: CreateAccount,
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const EmptyForm: Story = {};
