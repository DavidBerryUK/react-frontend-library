import type { Meta } from "@storybook/react";
import UIFormCurrency from "../UIFormCurrency";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";

const meta = {
  title: "Form/UIFormCurrency",
  component: UIFormCurrency,
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
} satisfies Meta<typeof UIFormCurrency>;

export default meta;

export const Interactive: React.FC = () => {
  const [currency, setCurrency] = useState<FieldModel>(FieldModel.create("price", "Price", EnumFieldDataType.number, ""));

  const handleOnValueChangedEvent = (value: FieldModel) => {
    setCurrency(value);
  };

  return (
    <div className="ui-form">
      <UIFormCurrency value={currency} onChange={handleOnValueChangedEvent} />
    </div>
  );
};
