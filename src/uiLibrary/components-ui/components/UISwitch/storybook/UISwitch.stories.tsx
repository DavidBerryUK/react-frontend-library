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
  const [defaultChecked, setDefaultChecked] = useState<boolean>(true);
  const [primaryChecked, setPrimaryChecked] = useState<boolean>(true);
  const [secondaryChecked, setSecondaryChecked] = useState<boolean>(true);
  const [successChecked, setSuccessChecked] = useState<boolean>(true);
  const [infoChecked, setInfoChecked] = useState<boolean>(true);
  const [warningChecked, setWarningChecked] = useState<boolean>(true);
  const [dangerChecked, setDangerChecked] = useState<boolean>(true);

  const handleDefaultChange = (newValue: boolean) => setDefaultChecked(newValue);
  const handlePrimaryChange = (newValue: boolean) => setPrimaryChecked(newValue);
  const handleSecondaryChange = (newValue: boolean) => setSecondaryChecked(newValue);
  const handleSuccessChange = (newValue: boolean) => setSuccessChecked(newValue);
  const handleInfoChange = (newValue: boolean) => setInfoChecked(newValue);
  const handleWarningChange = (newValue: boolean) => setWarningChecked(newValue);
  const handleDangerChange = (newValue: boolean) => setDangerChecked(newValue);

  return (
    <div>
      <TestFlexGrid columns={7}>
        <TestGridSectionHeader title="Gallery" colspan={7} />
        <UISwitch value={defaultChecked} onChange={handleDefaultChange} />
        <UISwitch primary value={primaryChecked} onChange={handlePrimaryChange} />
        <UISwitch secondary value={secondaryChecked} onChange={handleSecondaryChange} />
        <UISwitch success value={successChecked} onChange={handleSuccessChange} />
        <UISwitch info value={infoChecked} onChange={handleInfoChange} />
        <UISwitch warning value={warningChecked} onChange={handleWarningChange} />
        <UISwitch danger value={dangerChecked} onChange={handleDangerChange} />
      </TestFlexGrid>
    </div>
  );
};
