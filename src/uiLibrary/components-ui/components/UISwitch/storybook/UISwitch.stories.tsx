import React, { useState } from "react";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import type { Meta } from "@storybook/react";
import UISwitch from "../UISwitch";

const meta = {
  title: "UI/UISwitch",
  component: UISwitch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Switch Control.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UISwitch>;

export default meta;

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnChangedEvent = (newValue: boolean) => {
    setIsChecked(newValue);
  };

  return (
    <div>
      <UISwitch value={isChecked} onChange={handleOnChangedEvent} />
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleOnChangedEvent = (newValue: boolean) => {
    setIsChecked(newValue);
  };

  return (
    <div>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Gallery" colspan={7} />
        <UISwitch default value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch primary value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch secondary value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch success value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch info value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch warning value={isChecked} onChange={handleOnChangedEvent} />
        <UISwitch danger value={isChecked} onChange={handleOnChangedEvent} />
      </TestFlexGrid>
    </div>
  );
};
