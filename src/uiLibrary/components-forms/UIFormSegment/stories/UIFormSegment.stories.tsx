import type { Meta } from "@storybook/react";
import UIFormSegment from "../UIFormSegment";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";
import RuleMandatory from "../../../validation/rules/RuleMandatory";
import FieldValidation from "../../../validation/models/FieldValidation";
import UIButton from "../../../components-ui/components/UIButton/UIButton";
import FactoryCarLists from "../../../../storyExamples/factories/FactoryCarLists";

const meta = {
  title: "3 - Form/UIFormSegment",
  component: UIFormSegment,
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
} satisfies Meta<typeof UIFormSegment>;

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

  const handleOnSubmitClickEvent = () => {
    setCarMake(carMake.cloneWithUpdatedValidation());
    setCarModel(carModel.cloneWithUpdatedValidation());
    setCarColor(carColor.cloneWithUpdatedValidation());
  };
  return (
    <div className="ui-form">
      <UIFormSegment primary value={carMake} onChange={handleOnMakeValueChangedEvent} />
      <UIFormSegment primary value={carModel} onChange={handleOnModelValueChangedEvent} />
      <UIFormSegment primary value={carColor} onChange={handleOnColorValueChangedEvent} />

      <UIButton text="Submit" large onClick={handleOnSubmitClickEvent} />
    </div>
  );
};
