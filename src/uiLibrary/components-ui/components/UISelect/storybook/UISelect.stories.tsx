import FactoryOptionLists from "../../../../storybook/factories/FactoryOptionLists";
import FactoryCarLists from "../../../../storybook/factories/FactoryCarLists";
import React, { useState } from "react";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import type { Meta } from "@storybook/react";
import UISelect from "../UISelect";
import OptionModel from "../../UISegment/models/OptionModel";

const meta = {
  title: "UI/UISelect",
  component: UISelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        // eslint-disable-next-line no-useless-concat
        component: "UISelect, allow selection from a list" + "<ul>" + "<li>Add id as property</li>" + "<li>Add sizes</li>" + "</ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UISelect>;

export default meta;

//
// Simple Story
//
export const Select: React.FC = () => {
  const options: Array<OptionModel<string>> = FactoryOptionLists.GetMonthsOfYearList();
  const [selected, setSelected] = useState<OptionModel<string>>(options[0]);

  const handleOnOptionChangedEvent = (option: OptionModel<string>) => {
    setSelected(option);
  };

  return <UISelect default options={options} selected={selected} onChange={handleOnOptionChangedEvent} />;
};

export const Gallery: React.FC = () => {
  const options: Array<OptionModel<string>> = FactoryOptionLists.GetMonthsOfYearList();

  // State variables for each UISelect
  const [defaultSelected, setDefaultSelected] = useState<OptionModel<string>>(options[0]);
  const [primarySelected, setPrimarySelected] = useState<OptionModel<string>>(options[0]);
  const [secondarySelected, setSecondarySelected] = useState<OptionModel<string>>(options[0]);
  const [successSelected, setSuccessSelected] = useState<OptionModel<string>>(options[0]);
  const [infoSelected, setInfoSelected] = useState<OptionModel<string>>(options[0]);
  const [warningSelected, setWarningSelected] = useState<OptionModel<string>>(options[0]);
  const [dangerSelected, setDangerSelected] = useState<OptionModel<string>>(options[0]);

  // Event handlers for each UISelect
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
        <UISelect default options={options} selected={defaultSelected} onChange={handleDefaultChange} />
        <TestGridSectionHeader title="Primary" colspan={1} />
        <UISelect primary options={options} selected={primarySelected} onChange={handlePrimaryChange} />
        <TestGridSectionHeader title="Secondary" colspan={1} />
        <UISelect secondary options={options} selected={secondarySelected} onChange={handleSecondaryChange} />
        <TestGridSectionHeader title="Success" colspan={1} />
        <UISelect success options={options} selected={successSelected} onChange={handleSuccessChange} />
        <TestGridSectionHeader title="Information" colspan={1} />
        <UISelect info options={options} selected={infoSelected} onChange={handleInfoChange} />
        <TestGridSectionHeader title="Warning" colspan={1} />
        <UISelect warning options={options} selected={warningSelected} onChange={handleWarningChange} />
        <TestGridSectionHeader title="Danger" colspan={1} />
        <UISelect danger options={options} selected={dangerSelected} onChange={handleDangerChange} />
      </TestFlexGrid>
    </div>
  );
};

export const CarMultiSelect: React.FC = () => {
  // State variables for each UISelect
  const [makes] = useState<Array<OptionModel<number>>>(FactoryCarLists.GetMakes());
  const [models, setModels] = useState<Array<OptionModel<number>>>(new Array<OptionModel<number>>());
  const [colors, setColors] = useState<Array<OptionModel<number>>>(new Array<OptionModel<number>>());
  const [selectedMake, setSelectedMake] = useState<OptionModel<number>>(new OptionModel<number>("", ""));
  const [selectedModel, setSelectedModel] = useState<OptionModel<number>>(new OptionModel<number>("", ""));
  const [selectedColor, setSelectedColor] = useState<OptionModel<number>>(new OptionModel<number>("", ""));

  const handleMakeSelectedEvent = (value: OptionModel<number>) => {
    setSelectedMake(value);
    setModels(FactoryCarLists.GetModelsForMake(value.data!));
    setSelectedModel(new OptionModel<number>("", ""));
    setSelectedColor(new OptionModel<number>("", ""));
  };

  const handleModelSelectedEvent = (value: OptionModel<number>) => {
    setSelectedModel(value);
    setColors(FactoryCarLists.getColorsForModel(value.data!));
    setSelectedColor(new OptionModel<number>("", ""));
  };

  const handleColorSelectedEvent = (value: OptionModel<number>) => {
    setSelectedColor(value);
  };

  return (
    <div style={{ display: "flex", columnGap: 8, width: 800 }}>
      <UISelect default options={makes} selected={selectedMake} onChange={handleMakeSelectedEvent} />
      <UISelect default options={models} selected={selectedModel} onChange={handleModelSelectedEvent} />
      <UISelect default options={colors} selected={selectedColor} onChange={handleColorSelectedEvent} />
    </div>
  );
};
