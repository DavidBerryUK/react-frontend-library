import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../../uiLibrary/components-forms/UIFormText/UIFormText";
import FieldModel from "../../uiLibrary/models/fields/FieldModel";
import EnumFieldDataType from "../../uiLibrary/enums/EnumFieldDataType";
import UIText from "../../uiLibrary/components-ui/components/UIText/UIText";
import EnumFieldInteractionMode from "../../uiLibrary/enums/EnumFieldInteractionMode";

const meta: Meta<typeof UIFormText> = {
  title: "4 - Form Formatting/Example Interaction Modes",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Demonstrate how to use different interaction modes, editable (default), readonly and hidden",
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
            <UIText heading>Editable</UIText>
            <UIFormText value={forename} interactionMode={EnumFieldInteractionMode.Editable} onChange={handleForenameUpdatedEvent} />
            <UIFormText value={surname} interactionMode={EnumFieldInteractionMode.Editable} onChange={handleSurnameUpdatedEvent} />
          </div>
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Read Only (using enumeration)</UIText>
            <UIFormText value={forename} interactionMode={EnumFieldInteractionMode.ReadOnly} />
            <UIFormText value={surname} interactionMode={EnumFieldInteractionMode.ReadOnly} />
          </div>
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Read Only (using keyword)</UIText>
            <UIFormText value={forename} readonly />
            <UIFormText value={surname} readonly />
          </div>
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Hidden (enumeration)</UIText>
            <UIFormText value={forename} interactionMode={EnumFieldInteractionMode.Hidden} />
            <UIFormText value={surname} interactionMode={EnumFieldInteractionMode.Hidden} />
          </div>
          <div style={{ marginBottom: 48 }}>
            <UIText heading>Hidden (using keyword)</UIText>
            <UIFormText value={forename} hidden />
            <UIFormText value={surname} hidden />
          </div>
        </div>
      </div>
    );
  },
};
