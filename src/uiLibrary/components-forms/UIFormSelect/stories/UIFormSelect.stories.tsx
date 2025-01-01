import type { Meta } from "@storybook/react";
import UIFormSelect from "../UIFormSelect";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";
import FactoryCarLists from "../../../../storyExamples/factories/FactoryCarLists";
import RuleMandatory from "../../../validation/rules/RuleMandatory";
import FieldValidation from "../../../validation/models/FieldValidation";

const meta = {
  title: "3 - Form/UIFormSelect",
  component: UIFormSelect,
  parameters: {
    docs: {
      description: {
        component: "Form Text",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "600px", minHeight: "100px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UIFormSelect>;

export default meta;

export const Interactive: React.FC = () => {
  const [carMake, setCarMake] = useState<FieldModel>(() => {
    return FieldModel.create("make", "Car Make", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory()]), FactoryCarLists.GetMakes());
  });

  const [carModel, setCarModel] = useState<FieldModel>(() => {
    return FieldModel.create("model", "Car Model", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory()]));
  });
  const [carColor, setCarColor] = useState<FieldModel>(() => {
    return FieldModel.create("color", "Car Color", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory()]));
  });

  const handleOnMakeValueChangedEvent = (value: FieldModel) => {
    setCarMake(value);
    setCarModel(carModel.cloneWithOptions(FactoryCarLists.GetModelsForMake(Number(value.valueAsString))).cloneAndReset());
    setCarColor(carColor.cloneAndReset().cloneWithOptions([]));
  };

  const handleOnModelValueChangedEvent = (value: FieldModel) => {
    setCarModel(value);
    setCarColor(carColor.cloneAndReset().cloneWithOptions(FactoryCarLists.getColorsForModel(Number(value.valueAsString))));
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
