import type { Meta } from "@storybook/react";
import UIFormNumber from "../UIFormNumber";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";

const meta = {
  title: "Form/UIFormNumber",
  component: UIFormNumber,
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
} satisfies Meta<typeof UIFormNumber>;

export default meta;

export const Interactive: React.FC = () => {
  const [quantity, setQuantity] = useState<FieldModel>(FieldModel.create("qty", "Quantity", EnumFieldDataType.number, ""));

  const handleOnValueChangedEvent = (value: FieldModel) => {
    setQuantity(value);
  };

  return (
    <div className="ui-form">
      <UIFormNumber value={quantity} onChange={handleOnValueChangedEvent} />
    </div>
  );
};