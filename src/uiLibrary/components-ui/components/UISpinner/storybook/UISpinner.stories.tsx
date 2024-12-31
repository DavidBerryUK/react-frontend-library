import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIButton from "../UISpinner";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UISpinner from "../UISpinner";
import UIText from "../../UIText/UIText";

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
      <UIText subHeading>Colour Variants</UIText>
      <UILayoutGrid columns7 topCenter>
        <div>Default</div>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Success</div>
        <div>Info</div>
        <div>Warning</div>
        <div>Danger</div>
        <UISpinner default />
        <UISpinner primary />
        <UISpinner secondary />
        <UISpinner success />
        <UISpinner info />
        <UISpinner warning />
        <UISpinner danger />
      </UILayoutGrid>
      <UIText subHeading>Size Variants</UIText>
      <UILayoutGrid columns3 topCenter>
        <div>Small</div>
        <div>Regular (default)</div>
        <div>Large</div>
        <UISpinner default small />
        <UISpinner default />
        <UISpinner default large />
      </UILayoutGrid>
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
