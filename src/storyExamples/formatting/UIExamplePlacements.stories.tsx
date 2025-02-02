import EnumFieldDataType from "../../uiLibrary/enums/EnumFieldDataType";
import FieldModel from "../../uiLibrary/models/fields/FieldModel";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../../uiLibrary/components-forms/UIFormText/UIFormText";
import UIText from "../../uiLibrary/components-ui/components/UIText/UIText";

const meta: Meta<typeof UIFormText> = {
  title: "4 - Form Formatting/Example Placement Options",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Demonstrate how to use different placement options, coloun (default) or  row",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ justifyContent: "center", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UIFormText>;

export const PlacementAndInteraction: Story = {
  render: () => {
    const [forename, setForename] = useState<FieldModel>(FieldModel.create("forename", "Forename", EnumFieldDataType.string, "Brian"));
    const [surname, setSurname] = useState<FieldModel>(FieldModel.create("surname", "Surname", EnumFieldDataType.string, "Smith"));

    const handleForenameUpdatedEvent = (value: FieldModel) => {
      setForename(value);
    };
    const handleSurnameUpdatedEvent = (value: FieldModel) => {
      setSurname(value);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div className="ui-form">
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Column (default)</UIText>
            <UIFormText value={forename} onChange={handleForenameUpdatedEvent} />
            <UIFormText value={surname} onChange={handleSurnameUpdatedEvent} />
          </div>
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Row </UIText>
            <UIFormText row value={forename} onChange={handleForenameUpdatedEvent} />
            <UIFormText row value={surname} onChange={handleForenameUpdatedEvent} />
          </div>
        </div>
      </div>
    );
  },
};
