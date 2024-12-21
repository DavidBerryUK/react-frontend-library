import { action } from "@storybook/addon-actions";
import React from "react";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import type { Meta, StoryObj } from "@storybook/react";
import UIButton from "../UIButton";

const meta = {
  title: "UI/UIButton",
  component: UIButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Application button,<br/> <b>under development</b><ul><li>Disabled outline buttons need to be styled</li><li>Consider standards widths</li></ul>`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    default: true,
    text: "button",
    onClick: action("button-click"),
  },
};

//export const Gallery: Story = {
export const Gallery: React.FC = () => {
  const handleOnClickEvent = () => {
    action("button-click")();
  };

  return (
    <div>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Standard" colspan={7} />
        <UIButton default text="Default" onClick={handleOnClickEvent} />
        <UIButton primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton success text="Success" onClick={handleOnClickEvent} />
        <UIButton info text="Info" onClick={handleOnClickEvent} />
        <UIButton warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Disabled" colspan={7} />
        <UIButton disabled default text="Default" onClick={handleOnClickEvent} />
        <UIButton disabled primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton disabled secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton disabled success text="Success" onClick={handleOnClickEvent} />
        <UIButton disabled info text="Info" onClick={handleOnClickEvent} />
        <UIButton disabled warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton disabled danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Outlined" colspan={7} />
        <UIButton outlined default text="Default" onClick={handleOnClickEvent} />
        <UIButton outlined primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton outlined secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton outlined success text="Success" onClick={handleOnClickEvent} />
        <UIButton outlined info text="Info" onClick={handleOnClickEvent} />
        <UIButton outlined warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton outlined danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Outlined Disabled" colspan={7} />
        <UIButton disabled outlined default text="Default" onClick={handleOnClickEvent} />
        <UIButton disabled outlined primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton disabled outlined secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton disabled outlined success text="Success" onClick={handleOnClickEvent} />
        <UIButton disabled outlined info text="Info" onClick={handleOnClickEvent} />
        <UIButton disabled outlined warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton disabled outlined danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Small" colspan={7} />
        <UIButton small default text="Default" onClick={handleOnClickEvent} />
        <UIButton small primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton small secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton small success text="Success" onClick={handleOnClickEvent} />
        <UIButton small info text="Info" onClick={handleOnClickEvent} />
        <UIButton small warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton small danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Large" colspan={7} />
        <UIButton large default text="large" onClick={handleOnClickEvent} />
        <UIButton large primary text="large" onClick={handleOnClickEvent} />
        <UIButton large secondary text="large" onClick={handleOnClickEvent} />
        <UIButton large success text="large" onClick={handleOnClickEvent} />
        <UIButton large info text="large" onClick={handleOnClickEvent} />
        <UIButton large warning text="large" onClick={handleOnClickEvent} />
        <UIButton large danger text="large" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Small Outlined" colspan={7} />
        <UIButton outlined small default text="Default" onClick={handleOnClickEvent} />
        <UIButton outlined small primary text="Primary" onClick={handleOnClickEvent} />
        <UIButton outlined small secondary text="Secondary" onClick={handleOnClickEvent} />
        <UIButton outlined small success text="Success" onClick={handleOnClickEvent} />
        <UIButton outlined small info text="Info" onClick={handleOnClickEvent} />
        <UIButton outlined small warning text="Warning" onClick={handleOnClickEvent} />
        <UIButton outlined small danger text="Danger" onClick={handleOnClickEvent} />
      </TestFlexGrid>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Large Outlined" colspan={7} />
        <UIButton outlined large default text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large primary text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large secondary text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large success text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large info text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large warning text="large" onClick={handleOnClickEvent} />
        <UIButton outlined large danger text="large" onClick={handleOnClickEvent} />
      </TestFlexGrid>
    </div>
  );
};

export const Primary: Story = {
  args: {
    primary: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const Success: Story = {
  args: {
    success: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const Information: Story = {
  args: {
    info: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const Warning: Story = {
  args: {
    warning: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const SizeSmall: Story = {
  args: {
    primary: true,
    small: true,
    text: "small",
    onClick: action("button-click"),
  },
};

export const SizeRegular: Story = {
  args: {
    primary: true,
    text: "regular",
    onClick: action("button-click"),
  },
};

export const SizeLarge: Story = {
  args: {
    primary: true,
    large: true,
    text: "large",
    onClick: action("button-click"),
  },
};

export const DefaultOutlined: Story = {
  args: {
    default: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const PrimaryOutlined: Story = {
  args: {
    primary: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const SecondaryOutlined: Story = {
  args: {
    secondary: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const SuccessOutlined: Story = {
  args: {
    success: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const InformationOutlined: Story = {
  args: {
    info: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const WarningOutlined: Story = {
  args: {
    warning: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};

export const DangerOutlined: Story = {
  args: {
    danger: true,
    outlined: true,
    text: "button",
    onClick: action("button-click"),
  },
};
