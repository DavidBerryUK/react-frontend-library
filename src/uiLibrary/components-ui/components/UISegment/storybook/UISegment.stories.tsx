import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UISegment from "../UISegment";
import OptionModel from "../models/OptionModel";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import FactoryOptionLists from "../../../../storybook/factories/FactoryOptionLists";

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
      <TestFlexGrid columns={1}>
        <TestGridSectionHeader title="Default" colspan={1} />
        <UISegment default options={options} selected={defaultSelected} onChange={handleDefaultChange} />
        <TestGridSectionHeader title="Primary" colspan={1} />
        <UISegment primary options={options} selected={primarySelected} onChange={handlePrimaryChange} />
        <TestGridSectionHeader title="Secondary" colspan={1} />
        <UISegment secondary options={options} selected={secondarySelected} onChange={handleSecondaryChange} />
        <TestGridSectionHeader title="Success" colspan={1} />
        <UISegment success options={options} selected={successSelected} onChange={handleSuccessChange} />
        <TestGridSectionHeader title="Information" colspan={1} />
        <UISegment info options={options} selected={infoSelected} onChange={handleInfoChange} />
        <TestGridSectionHeader title="Warning" colspan={1} />
        <UISegment warning options={options} selected={warningSelected} onChange={handleWarningChange} />
        <TestGridSectionHeader title="Danger" colspan={1} />
        <UISegment danger options={options} selected={dangerSelected} onChange={handleDangerChange} />
      </TestFlexGrid>
    </div>
  );
};
