import type { Meta } from "@storybook/react";
import UIFormSelect from "../UIFormSelect";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";
import FactoryCarLists from "../../../storybook/factories/FactoryCarLists";

const meta = {
  title: "2 - Form/UIFormSelect",
  component: UIFormSelect,
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
} satisfies Meta<typeof UIFormSelect>;

export default meta;

export const Interactive: React.FC = () => {
  const [carMake, setCarMake] = useState<FieldModel>(
    FieldModel.create("make", "Car Make", EnumFieldDataType.string, "", undefined, FactoryCarLists.GetMakes()),
  );
  const [carModel, setCarModel] = useState<FieldModel>(FieldModel.create("model", "Car Model", EnumFieldDataType.string, "", undefined, []));
  const [carColor, setCarColor] = useState<FieldModel>(FieldModel.create("color", "Car Color", EnumFieldDataType.string, "", undefined, []));

  const handleOnMakeValueChangedEvent = (value: FieldModel) => {
    setCarMake(value);
    setCarModel(carModel.cloneWithOptions(FactoryCarLists.GetModelsForMake(Number(value.valueAsString))).cloneAndClear());
    setCarColor(carColor.cloneAndClear().cloneWithOptions([]));
  };

  const handleOnModelValueChangedEvent = (value: FieldModel) => {
    setCarModel(value);
    setCarColor(carColor.cloneAndClear().cloneWithOptions(FactoryCarLists.getColorsForModel(Number(value.valueAsString))));
  };
  const handleOnColorValueChangedEvent = (value: FieldModel) => {
    setCarColor(value);
  };

  return (
    <div className="ui-form">
      <UIFormSelect value={carMake} onChange={handleOnMakeValueChangedEvent} />
      <UIFormSelect value={carModel} onChange={handleOnModelValueChangedEvent} />
      <UIFormSelect value={carColor} onChange={handleOnColorValueChangedEvent} />
    </div>
  );
};
