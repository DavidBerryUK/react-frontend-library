import type { Meta } from "@storybook/react";
import UIFormPassword from "../UIFormPassword";
import FieldModel from "../../../models/fields/FieldModel";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import React, { useState } from "react";
import FieldValidation from "../../../validation/models/FieldValidation";
import RuleMandatory from "../../../validation/rules/RuleMandatory";
import RuleMinLength from "../../../validation/rules/RuleMinLength";
import RuleMaxLength from "../../../validation/rules/RuleMaxLength";

const meta = {
  title: "3 - Form/UIFormPassword",
  component: UIFormPassword,
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
} satisfies Meta<typeof UIFormPassword>;

export default meta;

export const Interactive: React.FC = () => {
  const [password, setPassword] = useState<FieldModel>(
    FieldModel.create(
      "password",
      "Password",
      EnumFieldDataType.string,
      "",
      new FieldValidation([new RuleMandatory(), new RuleMinLength(8), new RuleMaxLength(12)]),
    ),
  );

  const handleOnValueChangedEvent = (value: FieldModel) => {
    setPassword(value);
  };

  return (
    <div className="ui-form">
      <UIFormPassword value={password} onChange={handleOnValueChangedEvent} />
    </div>
  );
};
