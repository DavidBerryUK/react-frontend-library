import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import FieldModel from "../../../models/fields/FieldModel";
import FieldValidation from "../../../validation/models/FieldValidation";
import React, { useState } from "react";
import RuleMandatory from "../../../validation/rules/RuleMandatory";
import RuleMaxLength from "../../../validation/rules/RuleMaxLength";
import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../UIFormText";
import TestFlexGrid from "../../../../uiLibrary/storybook/TestFlexGrid";

const meta: Meta<typeof UIFormText> = {
  title: "3 - Form/UIFormText",
  component: UIFormText,
  parameters: {
    layout: "",
    docs: {
      description: {
        component: "Form Text - A component for rendering and validating text fields in a form.",
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
};

export default meta;

type Story = StoryObj<typeof UIFormText>;

/**
 * Simple interactive example
 */
export const Interactive: Story = {
  render: () => {
    const [forename, setForename] = useState<FieldModel>(FieldModel.create("forename", "Forename", EnumFieldDataType.string, ""));
    const [surname, setSurname] = useState<FieldModel>(FieldModel.create("surname", "Surname", EnumFieldDataType.string, ""));

    const handleOnForenameChangedEvent = (value: FieldModel) => {
      setForename(value);
    };

    const handleOnSurnameChangedEvent = (value: FieldModel) => {
      setSurname(value);
    };

    return (
      <div className="ui-form">
        <UIFormText value={forename} onChange={handleOnForenameChangedEvent} />
        <UIFormText value={surname} onChange={handleOnSurnameChangedEvent} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates a simple interactive form with two text fields for Forename and Surname.",
      },
    },
  },
};

/**
 * Example with mandatory fields
 */
export const Mandatory: Story = {
  render: () => {
    const [forename, setForename] = useState<FieldModel>(
      FieldModel.create("forename", "Forename", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
    );
    const [surname, setSurname] = useState<FieldModel>(
      FieldModel.create("surname", "Surname", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
    );

    const handleOnForenameChangedEvent = (value: FieldModel) => {
      setForename(value);
    };

    const handleOnSurnameChangedEvent = (value: FieldModel) => {
      setSurname(value);
    };

    return (
      <div className="ui-form">
        <UIFormText value={forename} onChange={handleOnForenameChangedEvent} />
        <UIFormText value={surname} onChange={handleOnSurnameChangedEvent} />
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

export const ColorGallery: Story = {
  render: () => {
    const [text, setText] = useState<FieldModel>(FieldModel.create("name", "Name", EnumFieldDataType.string, "Sample Text"));

    const handleOnChangedEvent = (value: FieldModel) => {
      setText(value);
    };

    return (
      <div className="ui-form">
        <TestFlexGrid columns={3}>
          <UIFormText default value={text} onChange={handleOnChangedEvent} />
          <UIFormText primary value={text} onChange={handleOnChangedEvent} />
          <UIFormText secondary value={text} onChange={handleOnChangedEvent} />
          <UIFormText success value={text} onChange={handleOnChangedEvent} />
          <UIFormText info value={text} onChange={handleOnChangedEvent} />
          <UIFormText warning value={text} onChange={handleOnChangedEvent} />
          <UIFormText danger value={text} onChange={handleOnChangedEvent} />
        </TestFlexGrid>
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

export const ReadOnlyGallery: Story = {
  render: () => {
    const [text] = useState<FieldModel>(FieldModel.create("fullName", "Full Name", EnumFieldDataType.string, "Brian Smith"));

    return (
      <div className="ui-form">
        <TestFlexGrid columns={3}>
          <UIFormText default value={text} readonly />
          <UIFormText primary value={text} readonly />
          <UIFormText secondary value={text} readonly />
          <UIFormText success value={text} readonly />
          <UIFormText info value={text} readonly />
          <UIFormText warning value={text} readonly />
          <UIFormText danger value={text} readonly />
        </TestFlexGrid>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Show read only fields in each themes available",
      },
    },
  },
};
