import { RsvpFormViewModel } from "./RsvpFormViewModel";
import FieldModel from "../../../uiLibrary/models/fields/FieldModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIButton from "../../../uiLibrary/components-ui/components/UIButton/UIButton";
import UIFormSwitch from "../../../uiLibrary/components-forms/UIFormSwitch/UIFormSwitch";
import UIFormText from "../../../uiLibrary/components-forms/UIFormText/UIFormText";

const meta = {
  title: "5 - Form Examples/RSVP",
  component: UIFormText,
  parameters: {
    layout: "",
    docs: {
      description: {
        component: "Very basic data entry form with simple validation and optional field",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "40px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "500px", height: "450px", border: "solid 2px blue;" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UIFormText>;

export default meta;

export const Interactive: React.FC = () => {
  const [rsvpDetails, setRsvpDetails] = useState<RsvpFormViewModel>(RsvpFormViewModel.CreateEmptyViewModel());

  const handleOnFormChangeEvent = (field: FieldModel) => {
    setRsvpDetails(rsvpDetails.cloneWithField(field));
  };

  const handleOnSubmitEvent = () => {
    setRsvpDetails(rsvpDetails.cloneWithValidateAll());
  };

  const handleOnClearEvent = () => {
    setRsvpDetails(rsvpDetails.cloneWithClearAll());
  };

  return (
    <div className="ui-form layoutColumn">
      <UIFormText value={rsvpDetails.guestName} onChange={handleOnFormChangeEvent} />
      <UIFormSwitch value={rsvpDetails.attending} onChange={handleOnFormChangeEvent} />
      <UIFormText value={rsvpDetails.numberOfGuests} onChange={handleOnFormChangeEvent} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UIButton secondary large text="Clear" onClick={handleOnClearEvent} />
        <UIButton primary large text="Submit" onClick={handleOnSubmitEvent} />
      </div>
    </div>
  );
};
