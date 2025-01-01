import React from "react";

import UILayoutGrid from "../../../../components-ui/components/UILayoutGrid/UILayoutGrid";
import type { Meta, StoryObj } from "@storybook/react";
import UIText from "../UIText";

const meta = {
  title: "1 - UI/UIText",
  component: UIText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This is a UIText component that provides a way of presenting a consistent style to the UI. Ideally the <b>Colours</b> and <b>Styles</b> should be used and occasionally weights and sizes. If Weights and Sizes are used often then another <b>Style</b> should be created to aid consistency.",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof UIText>;

export default meta;
type Story = StoryObj<typeof meta>;

//export const Gallery: Story = {
export const Gallery: React.FC = () => {
  return (
    <UILayoutGrid colGap4 rowGap5 columns1>
      <UIText subHeading>Colours</UIText>
      <UILayoutGrid columns7 colGap4 middleCenter>
        <UIText default>Default</UIText>
        <UIText primary>Primary</UIText>
        <UIText secondary>Secondary</UIText>
        <UIText success>Success</UIText>
        <UIText info>Information</UIText>
        <UIText warning>Warning</UIText>
        <UIText danger>Danger</UIText>
      </UILayoutGrid>

      <UIText subHeading>Styles</UIText>
      <UILayoutGrid columns5 colGap4 middleCenter>
        <UIText heading>Heading</UIText>
        <UIText subHeading>Sub Heading</UIText>
        <UIText body>Body</UIText>
        <UIText caption>Caption</UIText>
        <UIText smallCaption>Small Caption</UIText>
      </UILayoutGrid>

      <UIText subHeading>Weights</UIText>
      <UILayoutGrid columns8 colGap4 middleCenter>
        <UIText thin>Thin</UIText>
        <UIText extraLight>Extra-Light</UIText>
        <UIText light>Light</UIText>
        <UIText medium>Medium</UIText>
        <UIText semiBold>Semi-Bold</UIText>
        <UIText bold>Bold</UIText>
        <UIText extraBold>Extra-Bold</UIText>
        <UIText ultraBold>Ultra-Bold</UIText>
      </UILayoutGrid>

      <UIText subHeading>Sizes</UIText>
      <UILayoutGrid columns6 colGap4 middleCenter>
        <UIText small>Small</UIText>
        <UIText smaller>Smaller</UIText>
        <UIText>Regular</UIText>
        <UIText larger>Larger</UIText>
        <UIText large>Large</UIText>
        <UIText extraLarge>Extra Large</UIText>
      </UILayoutGrid>
    </UILayoutGrid>
  );
};
export const DefaultText: Story = {
  args: {
    children: "Default Text",
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    children: "Primary Colour",
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    children: "Secondary Colour",
  },
};

export const Success: Story = {
  args: {
    success: true,
    children: "Success Colour",
  },
};

export const Information: Story = {
  args: {
    info: true,
    children: "Information Colour",
  },
};

export const Warning: Story = {
  args: {
    warning: true,
    children: "Warning Colour",
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    children: "Danger Colour",
  },
};

export const Default: Story = {
  args: {
    default: true,
    children: "Default Text Style",
  },
};

export const StyleHeading: Story = {
  args: {
    heading: true,
    children: "Heading",
  },
};

export const StyleSubHeading: Story = {
  args: {
    subHeading: true,
    children: "Sub Heading",
  },
};

export const StyleBody: Story = {
  args: {
    body: true,
    children: "Body",
  },
};

export const StyleCaption: Story = {
  args: {
    caption: true,
    children: "Caption",
  },
};

export const StyleSmallCaption: Story = {
  args: {
    smallCaption: true,
    children: "Small Caption",
  },
};

export const SizeRegular: Story = {
  args: {
    children: "Size Regular",
  },
};

export const SizeSmall: Story = {
  args: {
    small: true,
    children: "Size Small",
  },
};

export const SizeSmaller: Story = {
  args: {
    smaller: true,
    children: "Size Smaller",
  },
};

export const SizeLarger: Story = {
  args: {
    larger: true,
    children: "Size Larger",
  },
};

export const SizeLarge: Story = {
  args: {
    large: true,
    children: "Size Large",
  },
};

export const WeightThin: Story = {
  args: {
    thin: true,
    children: "Weight Thin",
  },
};

export const WeightExtraLight: Story = {
  args: {
    extraLight: true,
    children: "Weight Extra-Light",
  },
};

export const WeightLight: Story = {
  args: {
    light: true,
    children: "Weight Light",
  },
};

export const WeightMedium: Story = {
  args: {
    medium: true,
    children: "Weight Medium",
  },
};

export const WeightSemiBold: Story = {
  args: {
    semiBold: true,
    children: "Weight Semi-Bold",
  },
};

export const WeightBold: Story = {
  args: {
    bold: true,
    children: "Weight Bold",
  },
};

export const WeightExtraBold: Story = {
  args: {
    extraBold: true,
    children: "Weight Extra-Bold",
  },
};

export const WeightUltraBold: Story = {
  args: {
    ultraBold: true,
    children: "Weight Ultra Bold",
  },
};
