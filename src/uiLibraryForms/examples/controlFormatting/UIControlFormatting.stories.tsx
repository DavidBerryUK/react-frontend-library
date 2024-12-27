import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../../../uiLibrary/components-forms/UIFormText/UIFormText";
import FieldModel from "../../../uiLibrary/models/fields/FieldModel";
import EnumFieldDataType from "../../../uiLibrary/enums/EnumFieldDataType";
import FieldValidation from "../../../uiLibrary/validation/models/FieldValidation";
import RuleMandatory from "../../../uiLibrary/validation/rules/RuleMandatory";
import RuleMaxLength from "../../../uiLibrary/validation/rules/RuleMaxLength";
import OptionModel from "../../../uiLibrary/components-ui/components/UISegment/models/OptionModel";
import FactorFormsLayoutLists from "../../../uiLibrary/storybook/factories/FactorFormsLayoutLists";
import EnumFieldInteractionMode from "../../../uiLibrary/enums/EnumFieldInteractionMode";
import EnumFieldLabelPlacement from "../../../uiLibrary/enums/EnumFieldLabelPlacement";
import UISegment from "../../../uiLibrary/components-ui/components/UISegment/UISegment";
import UIText from "../../../uiLibrary/components-ui/components/UIText/UIText";
import IPropLabelPlacementMode from "../../../uiLibrary/interfaces/properties/IPropLabelPlacementMode";

const meta: Meta<typeof UIFormText> = {
  title: "3 - Form Examples/Control Formatting",
  component: UIFormText,
  parameters: {
    layout: "",
    docs: {
      description: {
        component: "Formatting of controls, including label placement and interaction modes",
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

/**
 * Example with mandatory fields
 */
export const Mandatory: Story = {
  render: () => {
    const [placementList] = useState<Array<OptionModel<EnumFieldLabelPlacement>>>(FactorFormsLayoutLists.GetFieldLabelPlacment());
    const [InteractionModesList] = useState<Array<OptionModel<EnumFieldInteractionMode>>>(FactorFormsLayoutLists.GetFieldInteractiveModes());

    const [selectedPlacement, setSelectedPlacement] = useState<OptionModel<EnumFieldLabelPlacement>>(FactorFormsLayoutLists.GetFieldLabelPlacment()[0]);
    const [selectedInteractionMode, setSelectedInteractionMode] = useState<OptionModel<EnumFieldInteractionMode>>(
      FactorFormsLayoutLists.GetFieldInteractiveModes()[0],
    );

    const [forename, setForename] = useState<FieldModel>(
      FieldModel.create("forename", "Forename", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
    );
    const [surname, setSurname] = useState<FieldModel>(
      FieldModel.create("surname", "Surname", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
    );

    const handleOnPlacementChangedEvent = (value: OptionModel<EnumFieldLabelPlacement>) => {
      setSelectedPlacement(value);
    };

    const handleOnInteractionModeChangedEvent = (value: OptionModel<EnumFieldInteractionMode>) => {
      setSelectedInteractionMode(value);
    };

    const handleOnForenameChangedEvent = (value: FieldModel) => {
      setForename(value);
    };

    const handleOnSurnameChangedEvent = (value: FieldModel) => {
      setSurname(value);
    };

    var props: IPropLabelPlacementMode = {};

    if (selectedPlacement.data! === EnumFieldLabelPlacement.column) {
      props.column = true;
    }
    if (selectedPlacement.data! === EnumFieldLabelPlacement.row) {
      props.row = true;
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 16 }}>
          <div>
            <UIText caption>Placement</UIText>
            <UISegment primary options={placementList} selected={selectedPlacement} onChange={handleOnPlacementChangedEvent} />
          </div>
          <div>
            <UIText caption>Interaction Mode</UIText>
            <UISegment primary options={InteractionModesList} selected={selectedInteractionMode} onChange={handleOnInteractionModeChangedEvent} />
          </div>
        </div>
        <div className="ui-form">
          <UIFormText value={forename} onChange={handleOnForenameChangedEvent} {...props} />
          <UIFormText value={surname} onChange={handleOnSurnameChangedEvent} {...props} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "This example includes mandatory validation rules for both Forename and Surname fields, ensuring user input meets the required criteria.",
      },
    },
  },
};
