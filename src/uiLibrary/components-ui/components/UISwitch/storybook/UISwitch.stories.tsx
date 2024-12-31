import React, { useState } from "react";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UIText from "../../UIText/UIText";
import type { Meta } from "@storybook/react";
import UISwitch from "../UISwitch";

const meta = {
  title: "1 - UI/UISwitch",
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
      <UIText subHeading>Gallery</UIText>
      <UILayoutGrid columns7 colGap4>
        <UISwitch value={defaultChecked} onChange={handleDefaultChange} />
        <UISwitch primary value={primaryChecked} onChange={handlePrimaryChange} />
        <UISwitch secondary value={secondaryChecked} onChange={handleSecondaryChange} />
        <UISwitch success value={successChecked} onChange={handleSuccessChange} />
        <UISwitch info value={infoChecked} onChange={handleInfoChange} />
        <UISwitch warning value={warningChecked} onChange={handleWarningChange} />
        <UISwitch danger value={dangerChecked} onChange={handleDangerChange} />
      </UILayoutGrid>
    </div>
  );
};
