import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIButton from "../UISpinner";
import UISpinner from "../UISpinner";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";

const meta = {
  title: "1 - UI/UISpinner",
  component: UISpinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        // eslint-disable-next-line no-useless-concat
        component: "Application Spinner" + "<ul>" + "<li>Consider Extra Small</li>" + "</ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {},
};

//export const Gallery: Story = {
export const Gallery: React.FC = () => {
  return (
    <div>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Colour Variants" colspan={7} />

        <div>Default</div>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Success</div>
        <div>Info</div>
        <div>Warning</div>
        <div>Danger</div>
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <UISpinner default />
        <UISpinner primary />
        <UISpinner secondary />
        <UISpinner success />
        <UISpinner info />
        <UISpinner warning />
        <UISpinner danger />
      </TestFlexGrid>
      <TestFlexGrid columns={3}>
        <TestGridSectionHeader title="Size Variants" colspan={3} />
        <div>Small</div>
        <div>Regular (default)</div>
        <div>Large</div>
      </TestFlexGrid>
      <TestFlexGrid columns={3}>
        <UISpinner default small />
        <UISpinner default />
        <UISpinner default large />
      </TestFlexGrid>
    </div>
  );
};

export const SmallSmall: Story = {
  args: { small: true },
};

export const SizeRegular: Story = {
  args: { regular: true },
};

export const SizeLarge: Story = {
  args: { large: true },
};

export const Primary: Story = {
  args: { primary: true },
};

export const Secondary: Story = {
  args: { secondary: true },
};

export const Success: Story = {
  args: { success: true },
};

export const Info: Story = {
  args: { info: true },
};

export const Warning: Story = {
  args: { warning: true },
};

export const Danger: Story = {
  args: { danger: true },
};
