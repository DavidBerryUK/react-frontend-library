import React from "react";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import type { Meta, StoryObj } from "@storybook/react";
import UIAlert from "../UIAlert";
import IAlertProperties from "../../../interfaces/controls/IAlertProperties";

const meta = {
  title: "UI/UIAlert",
  component: UIAlert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Application Alert,<br/> <b>under development</b><ul></ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDefault: Story = {
  args: {
    default: true,
    children: "Sample Default Alert Control",
  },
};

type IGallery = IAlertProperties & {
  variantTitle: string;
};

const Gallery: React.FC<IGallery> = (props) => {
  return (
    <>
      <TestGridSectionHeader title={props.variantTitle} colspan={4} />
      <UIAlert {...props} default>
        {props.variantTitle} Alert
      </UIAlert>
      <UIAlert {...props} bordered>
        {props.variantTitle} Alert with Border
      </UIAlert>
      <UIAlert {...props} borderedLeft>
        {props.variantTitle} Alert with Border Accent
      </UIAlert>
      <UIAlert {...props} borderedRight>
        {props.variantTitle} Alert with Left Border Accent
      </UIAlert>
      <UIAlert {...props} borderedTop>
        {props.variantTitle} Alert with Border Accent
      </UIAlert>
      <UIAlert {...props} borderedBottom>
        {props.variantTitle} Alert with Left Border Accent
      </UIAlert>
    </>
  );
};

export const GalleryLight: React.FC = () => {
  return (
    <div>
      <TestFlexGrid columns={4}>
        <Gallery variantTitle="Default" default lighter />
        <Gallery variantTitle="Primary" primary lighter />
        <Gallery variantTitle="Secondary" secondary lighter />
        <Gallery variantTitle="Success" success lighter />
        <Gallery variantTitle="Success" success lighter />
        <Gallery variantTitle="Information" info lighter />
        <Gallery variantTitle="Warning" warning lighter />
        <Gallery variantTitle="Danger" danger lighter />
      </TestFlexGrid>
    </div>
  );
};

export const GalleryRegular: React.FC = () => {
  return (
    <div>
      <TestFlexGrid columns={4}>
        <Gallery variantTitle="Default" default />
        <Gallery variantTitle="Primary" primary />
        <Gallery variantTitle="Secondary" secondary />
        <Gallery variantTitle="Success" success />
        <Gallery variantTitle="Success" success />
        <Gallery variantTitle="Information" info />
        <Gallery variantTitle="Warning" warning />
        <Gallery variantTitle="Danger" danger />
      </TestFlexGrid>
    </div>
  );
};

export const GalleryDarker: React.FC = () => {
  return (
    <div>
      <TestFlexGrid columns={4}>
        <Gallery variantTitle="Default" default darker />
        <Gallery variantTitle="Primary" primary darker />
        <Gallery variantTitle="Secondary" secondary darker />
        <Gallery variantTitle="Success" success darker />
        <Gallery variantTitle="Success" success darker />
        <Gallery variantTitle="Information" info darker />
        <Gallery variantTitle="Warning" warning darker />
        <Gallery variantTitle="Danger" danger darker />
      </TestFlexGrid>
    </div>
  );
};

export const AlertWithBorder: Story = {
  args: {
    info: true,
    bordered: true,
    children: "Sample Alert Information Alert Control with border",
  },
};

export const AlertWithAccentBorder: Story = {
  args: {
    info: true,
    bordered: true,
    children: "Sample Alert Information Alert Control with accent border",
  },
};

export const AlertWithBorderLeft: Story = {
  args: {
    info: true,
    borderedLeft: true,
    children: "Sample Alert Information Alert Control with left border",
  },
};

export const AlertWithBorderRight: Story = {
  args: {
    info: true,
    borderedRight: true,
    children: "Sample Alert Information Alert Control with right border",
  },
};

export const AlertWithBorderTop: Story = {
  args: {
    info: true,
    borderedTop: true,
    children: "Sample Alert Information Alert Control with border top",
  },
};

export const AlertWithBorderBottom: Story = {
  args: {
    info: true,
    borderedBottom: true,
    children: "Sample Alert Information Alert Control with border bottom",
  },
};

export const AlertSizeSmall: Story = {
  args: {
    info: true,
    small: true,
    children: "Sample Alert Information Alert Control - small",
  },
};

export const AlertSizeRegular: Story = {
  args: {
    info: true,
    children: "Sample Alert Information Alert Control - small",
  },
};

export const AlertSizeLarge: Story = {
  args: {
    info: true,
    large: true,
    children: "Sample Alert Information Alert Control - large",
  },
};

export const ShadeLighter: Story = {
  args: {
    info: true,
    lighter: true,
    children: "Sample Alert Information Alert Control - Shade-Lighter",
  },
};

export const ShadeRegular: Story = {
  args: {
    info: true,
    children: "Sample Alert Information Alert Control - Shade-Regular",
  },
};

export const ShadeDarker: Story = {
  args: {
    info: true,
    darker: true,
    children: "Sample Alert Information Alert Control - Shade-Darker",
  },
};
