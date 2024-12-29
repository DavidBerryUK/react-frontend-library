import ContactDetailsViewModel from "./ContactDetailsViewModel";
import FieldModel from "../../../uiLibrary/models/fields/FieldModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIButton from "../../../uiLibrary/components-ui/components/UIButton/UIButton";
import UIFormText from "../../../uiLibrary/components-forms/UIFormText/UIFormText";

const meta = {
  title: "5 - Form Examples/ContactDetails",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Very basic data entry form with simple validation",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "500px", height: "500px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UIFormText>;

export default meta;

export const Interactive: React.FC = () => {
  const [contactDetails, setContactDetails] = useState<ContactDetailsViewModel>(ContactDetailsViewModel.CreateEmptyViewModel());

  const handleOnFormChangeEvent = (field: FieldModel) => {
    setContactDetails(contactDetails.cloneWithField(field));
  };

  const handleOnSubmitEvent = () => {
    setContactDetails(contactDetails.cloneWithValidateAll());
  };

  const handleOnClearEvent = () => {
    setContactDetails(contactDetails.cloneWithClearAll());
  };

  return (
    <div className="ui-form layoutColumn">
      <UIFormText value={contactDetails.forename} onChange={handleOnFormChangeEvent} />
      <UIFormText value={contactDetails.surname} onChange={handleOnFormChangeEvent} />
      <UIFormText value={contactDetails.emailAddress} onChange={handleOnFormChangeEvent} />
      <UIFormText value={contactDetails.message} onChange={handleOnFormChangeEvent} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UIButton secondary large text="Clear" onClick={handleOnClearEvent} />
        <UIButton success large text="Submit" onClick={handleOnSubmitEvent} />
      </div>
    </div>
  );
};
