import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIShowIfFalse from "../UIShowIfFalse";
import TestColorSwatch from "../../../../storybook/TestColorSwatch";

/**
 * Setup Story Documentation
 */
const meta = {
  title: "1 - UI/UIShowIfFalse",
  component: UIShowIfFalse,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          // eslint-disable-next-line no-useless-concat
          "Show If, shows or hides children depending on value" + "<ul>" + "<li>Consider converting to ShowIfTrue, and control for ShowIfFalse</li>" + "</ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIShowIfFalse>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    value: true,
    children: <TestColorSwatch />,
  },
};

export const Show: Story = {
  args: {
    value: true,
    children: <TestColorSwatch />,
  },
};

export const HideByDefault: Story = {
  args: {
    children: <TestColorSwatch />,
  },
};

export const HideByExplicitValue: Story = {
  args: {
    value: false,
    children: <TestColorSwatch />,
  },
};
