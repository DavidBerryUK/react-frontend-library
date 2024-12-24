import type { Meta } from "@storybook/react";
import UIFormPercent from "../UIFormPercent";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";

const meta = {
  title: "2 - Form/UIFormPercent",
  component: UIFormPercent,
  parameters: {
    layout: "",
    docs: {
      description: {
        component: "Form Text",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "600px", minHeight: "100px", border: "solid 2px blue;" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UIFormPercent>;

export default meta;

export const Interactive: React.FC = () => {
  const [percent, setPercent] = useState<FieldModel>(FieldModel.create("discount", "Percent Discount", EnumFieldDataType.number, ""));

  const handleOnValueChangedEvent = (value: FieldModel) => {
    setPercent(value);
  };

  return (
    <div className="ui-form">
      <UIFormPercent value={percent} onChange={handleOnValueChangedEvent} />
    </div>
  );
};
