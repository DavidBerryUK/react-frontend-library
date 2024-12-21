import type { Meta } from "@storybook/react";
import UISwitch from "../UISwitch";
import React, { useState } from "react";

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
    console.log(`change value to :${newValue}`);
    setIsChecked(newValue);
  };

  return (
    <div>
      <UISwitch value={isChecked} onChange={handleOnChangedEvent} />
    </div>
  );
};
