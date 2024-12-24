import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UISearchField from "../UISearchField";

const meta = {
  title: "1 - UI/UISearchField",
  component: UISearchField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This is a UISearchField component that allows users to input text to search for items. <br><b>Currently in development.</b>  It does not use composed controls, have any feedback or parameters. Also the icon is hard coded",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UISearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextField: Story = {
  args: {},
};
