import FactoryOptionLists from "../../../../storybook/factories/FactoryOptionLists";
import OptionModel from "../models/OptionModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UISegment from "../UISegment";
import UIText from "../../UIText/UIText";

const meta = {
  title: "1 - UI/UISegment",
  component: UISegment,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        // eslint-disable-next-line no-useless-concat
        component:
          "UISegment, allows from a number of values" +
          "<ul>" +
          "<li>Add id as property</li>" +
          "<li>Add sizes</li>" +
          "<li>Export UISegmentButton to separate control</li>" +
          "<li>style for disabled</li>" +
          "<li>Export Property</li>" +
          "</ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UISegment>;

export default meta;

//
// Simple Story
//
export const Field: React.FC = () => {
  const options: Array<OptionModel<string>> = FactoryOptionLists.GetYearMonthDayList();
  const [selected, setSelected] = useState<OptionModel<string>>(options[0]);

  const handleOnOptionChangedEvent = (option: OptionModel<string>) => {
    setSelected(option);
  };

  return <UISegment primary options={options} selected={selected} onChange={handleOnOptionChangedEvent} />;
};

export const Gallery: React.FC = () => {
  const options: Array<OptionModel<string>> = FactoryOptionLists.GetYearMonthDayList();

  // State variables for each UISegment
  const [defaultSelected, setDefaultSelected] = useState<OptionModel<string>>(options[0]);
  const [primarySelected, setPrimarySelected] = useState<OptionModel<string>>(options[0]);
  const [secondarySelected, setSecondarySelected] = useState<OptionModel<string>>(options[0]);
  const [successSelected, setSuccessSelected] = useState<OptionModel<string>>(options[0]);
  const [infoSelected, setInfoSelected] = useState<OptionModel<string>>(options[0]);
  const [warningSelected, setWarningSelected] = useState<OptionModel<string>>(options[0]);
  const [dangerSelected, setDangerSelected] = useState<OptionModel<string>>(options[0]);

  // Event handlers for each UISegment
  const handleDefaultChange = (newValue: OptionModel<string>) => setDefaultSelected(newValue);
  const handlePrimaryChange = (newValue: OptionModel<string>) => setPrimarySelected(newValue);
  const handleSecondaryChange = (newValue: OptionModel<string>) => setSecondarySelected(newValue);
  const handleSuccessChange = (newValue: OptionModel<string>) => setSuccessSelected(newValue);
  const handleInfoChange = (newValue: OptionModel<string>) => setInfoSelected(newValue);
  const handleWarningChange = (newValue: OptionModel<string>) => setWarningSelected(newValue);
  const handleDangerChange = (newValue: OptionModel<string>) => setDangerSelected(newValue);

  return (
    <div>
      <UILayoutGrid columns1 rowGap4>
        <UIText subHeading>Default</UIText>
        <UISegment default options={options} selected={defaultSelected} onChange={handleDefaultChange} />
        <UIText subHeading>Primary</UIText>
        <UISegment primary options={options} selected={primarySelected} onChange={handlePrimaryChange} />
        <UIText subHeading>Secondary</UIText>
        <UISegment secondary options={options} selected={secondarySelected} onChange={handleSecondaryChange} />
        <UIText subHeading>Success</UIText>
        <UISegment success options={options} selected={successSelected} onChange={handleSuccessChange} />
        <UIText subHeading>Information</UIText>
        <UISegment info options={options} selected={infoSelected} onChange={handleInfoChange} />
        <UIText subHeading>Warning</UIText>
        <UISegment warning options={options} selected={warningSelected} onChange={handleWarningChange} />
        <UIText subHeading>Danger</UIText>
        <UISegment danger options={options} selected={dangerSelected} onChange={handleDangerChange} />
      </UILayoutGrid>
    </div>
  );
};
