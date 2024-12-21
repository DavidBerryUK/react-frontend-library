import ContactDetailsViewModel from "./ContactDetailsViewModel";
import FieldModel from "../../models/fields/FieldModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIFormText from "../../components/UIFormText/UIFormText";
import UIButton from "../../../uiLibrary/components-ui/components/UIButton/UIButton";

const meta = {
  title: "Form Examples/ContactDetails",
  component: UIFormText,
  parameters: {
    layout: "",
    docs: {
      description: {
        component: "Very basic data entry form with simple validation",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "500px", height: "500px", border: "solid 2px blue;" }}>
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

  const handleOnContactFormChangeEvent = (field: FieldModel) => {
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
      <UIFormText value={contactDetails.forename} onChange={handleOnContactFormChangeEvent} />
      <UIFormText value={contactDetails.surname} onChange={handleOnContactFormChangeEvent} />
      <UIFormText value={contactDetails.emailAddress} onChange={handleOnContactFormChangeEvent} />
      <UIFormText value={contactDetails.message} onChange={handleOnContactFormChangeEvent} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UIButton secondary large text="Clear" onClick={handleOnClearEvent} />
        <UIButton success large text="Submit" onClick={handleOnSubmitEvent} />
      </div>
    </div>
  );
};
