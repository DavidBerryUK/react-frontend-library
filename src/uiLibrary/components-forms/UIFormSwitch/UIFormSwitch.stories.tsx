import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import UIFormSwitch from "./UIFormSwitch";
import FieldModel from "../../models/fields/FieldModel";
import EnumFieldDataType from "../../enums/EnumFieldDataType";
import TestFlexGrid from "../../../uiLibrary/storybook/TestFlexGrid";
import UILayoutGrid from "../../components-ui/components/UILayoutGrid/UILayoutGrid";

const meta: Meta<typeof UIFormSwitch> = {
  title: "3 - Form/UIFormSwitch",
  component: UIFormSwitch,
  parameters: {
    docs: {
      description: {
        component: "Form Segment - A component for rendering and validating switch field in a form.",
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
};

export default meta;

type Story = StoryObj<typeof UIFormSwitch>;

/**
 * Simple interactive example
 */
export const Interactive: Story = {
  render: () => {
    const [documentProvided, setDocumentProvided] = useState<FieldModel>(
      FieldModel.create("isDocProvided", "Has Document Been Provided", EnumFieldDataType.boolean, true),
    );

    const handleOnSurnameChangedEvent = (value: FieldModel) => {
      setDocumentProvided(value);
    };

    return (
      <div className="ui-form">
        <UIFormSwitch success value={documentProvided} onChange={handleOnSurnameChangedEvent} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates a simple interactive form with a switch field.",
      },
    },
  },
};

export const ColorGallery: Story = {
  render: () => {
    const [defaultSwitch, setDefaultSwitch] = useState<FieldModel>(FieldModel.create("defaultSwitch", "Default Switch", EnumFieldDataType.boolean, true));
    const [primarySwitch, setPrimarySwitch] = useState<FieldModel>(FieldModel.create("primarySwitch", "Primary Switch", EnumFieldDataType.boolean, true));
    const [secondarySwitch, setSecondarySwitch] = useState<FieldModel>(
      FieldModel.create("secondarySwitch", "Secondary Switch", EnumFieldDataType.boolean, true),
    );
    const [successSwitch, setSuccessSwitch] = useState<FieldModel>(FieldModel.create("successSwitch", "Success Switch", EnumFieldDataType.boolean, true));
    const [infoSwitch, setInfoSwitch] = useState<FieldModel>(FieldModel.create("infoSwitch", "Info Switch", EnumFieldDataType.boolean, true));
    const [warningSwitch, setWarningSwitch] = useState<FieldModel>(FieldModel.create("warningSwitch", "Warning Switch", EnumFieldDataType.boolean, true));
    const [dangerSwitch, setDangerSwitch] = useState<FieldModel>(FieldModel.create("dangerSwitch", "Danger Switch", EnumFieldDataType.boolean, true));

    const handleDefaultChange = (newValue: FieldModel) => setDefaultSwitch(newValue);
    const handlePrimaryChange = (newValue: FieldModel) => setPrimarySwitch(newValue);
    const handleSecondaryChange = (newValue: FieldModel) => setSecondarySwitch(newValue);
    const handleSuccessChange = (newValue: FieldModel) => setSuccessSwitch(newValue);
    const handleInfoChange = (newValue: FieldModel) => setInfoSwitch(newValue);
    const handleWarningChange = (newValue: FieldModel) => setWarningSwitch(newValue);
    const handleDangerChange = (newValue: FieldModel) => setDangerSwitch(newValue);

    return (
      <div className="ui-form">
        <UILayoutGrid rowGap4>
          <UIFormSwitch default value={defaultSwitch} onChange={handleDefaultChange} />
          <UIFormSwitch primary value={primarySwitch} onChange={handlePrimaryChange} />
          <UIFormSwitch secondary value={secondarySwitch} onChange={handleSecondaryChange} />
          <UIFormSwitch success value={successSwitch} onChange={handleSuccessChange} />
          <UIFormSwitch info value={infoSwitch} onChange={handleInfoChange} />
          <UIFormSwitch warning value={warningSwitch} onChange={handleWarningChange} />
          <UIFormSwitch danger value={dangerSwitch} onChange={handleDangerChange} />
        </UILayoutGrid>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Show different color themes available",
      },
    },
  },
};
