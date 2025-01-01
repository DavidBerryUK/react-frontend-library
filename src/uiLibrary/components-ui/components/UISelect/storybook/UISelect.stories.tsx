import FactoryCarLists from "../../../../../storyExamples/factories/FactoryCarLists";
import FactoryOptionLists from "../../../../../storyExamples//factories/FactoryOptionLists";
import OptionModel from "../../UISegment/models/OptionModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UISelect from "../UISelect";
import UIText from "../../UIText/UIText";

const meta = {
  title: "1 - UI/UISelect",
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
  const [selected, setSelected] = useState<OptionModel<string> | undefined>(options[0]);

  const handleOnOptionChangedEvent = (option: OptionModel<string> | undefined) => {
    setSelected(option);
  };

  return <UISelect default options={options} selected={selected} onChange={handleOnOptionChangedEvent} />;
};

export const Gallery: React.FC = () => {
  const options: Array<OptionModel<string>> = FactoryOptionLists.GetMonthsOfYearList();

  // State variables for each UISelect
  const [defaultSelected, setDefaultSelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [primarySelected, setPrimarySelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [secondarySelected, setSecondarySelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [successSelected, setSuccessSelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [infoSelected, setInfoSelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [warningSelected, setWarningSelected] = useState<OptionModel<string> | undefined>(options[0]);
  const [dangerSelected, setDangerSelected] = useState<OptionModel<string> | undefined>(options[0]);

  // Event handlers for each UISelect
  const handleDefaultChange = (newValue: OptionModel<string> | undefined) => setDefaultSelected(newValue);
  const handlePrimaryChange = (newValue: OptionModel<string> | undefined) => setPrimarySelected(newValue);
  const handleSecondaryChange = (newValue: OptionModel<string> | undefined) => setSecondarySelected(newValue);
  const handleSuccessChange = (newValue: OptionModel<string> | undefined) => setSuccessSelected(newValue);
  const handleInfoChange = (newValue: OptionModel<string> | undefined) => setInfoSelected(newValue);
  const handleWarningChange = (newValue: OptionModel<string> | undefined) => setWarningSelected(newValue);
  const handleDangerChange = (newValue: OptionModel<string> | undefined) => setDangerSelected(newValue);

  return (
    <div>
      <UILayoutGrid columns1 rowGap4>
        <UIText subHeading>Default</UIText>
        <UISelect default options={options} selected={defaultSelected} onChange={handleDefaultChange} />
        <UIText subHeading>Primary</UIText>
        <UISelect primary options={options} selected={primarySelected} onChange={handlePrimaryChange} />
        <UIText subHeading>Secondary</UIText>
        <UISelect secondary options={options} selected={secondarySelected} onChange={handleSecondaryChange} />
        <UIText subHeading>Success</UIText>
        <UISelect success options={options} selected={successSelected} onChange={handleSuccessChange} />
        <UIText subHeading>Information</UIText>
        <UISelect info options={options} selected={infoSelected} onChange={handleInfoChange} />
        <UIText subHeading>Warning</UIText>
        <UISelect warning options={options} selected={warningSelected} onChange={handleWarningChange} />
        <UIText subHeading>Danger</UIText>
        <UISelect danger options={options} selected={dangerSelected} onChange={handleDangerChange} />
      </UILayoutGrid>
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

  const handleMakeSelectedEvent = (value: OptionModel<number> | undefined) => {
    if (value === undefined) {
      value = new OptionModel<number>("", "");
    }
    setSelectedMake(value);
    setModels(FactoryCarLists.GetModelsForMake(value.data!));
    setSelectedModel(new OptionModel<number>("", ""));
    setSelectedColor(new OptionModel<number>("", ""));
  };

  const handleModelSelectedEvent = (value: OptionModel<number> | undefined) => {
    if (value === undefined) {
      value = new OptionModel<number>("", "");
    }
    setSelectedModel(value);
    setColors(FactoryCarLists.getColorsForModel(value.data!));
    setSelectedColor(new OptionModel<number>("", ""));
  };

  const handleColorSelectedEvent = (value: OptionModel<number> | undefined) => {
    if (value === undefined) {
      value = new OptionModel<number>("", "");
    }
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
