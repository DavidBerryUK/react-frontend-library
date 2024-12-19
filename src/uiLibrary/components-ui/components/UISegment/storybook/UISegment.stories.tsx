// some styling from here.
// https://preline.co/docs/button-group.html
//
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UISegment from "../UISegment";
import OptionModel from "../models/OptionModel";
import TestGridSectionHeader from "../../../../storybook/TestGridSectionHeader";
import TestFlexGrid from "../../../../storybook/TestFlexGrid";

const meta = {
  title: "UI/UISegment",
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
  const options = [new OptionModel("Years"), new OptionModel("Months"), new OptionModel("Days")];
  const [selected, setSelected] = useState<OptionModel>(options[0]);

  const handleOnOptionChangedEvent = (option: OptionModel) => {
    setSelected(option);
  };

  return <UISegment primary options={options} selected={selected} onChange={handleOnOptionChangedEvent} />;
};

//export const Gallery: Story = {
export const Gallery: React.FC = () => {
  const options = [new OptionModel("Years"), new OptionModel("Months"), new OptionModel("Days")];
  const [selected, setSelected] = useState<OptionModel>(options[0]);

  const handleOnOptionChangedEvent = (option: OptionModel) => {
    setSelected(option);
  };

  return (
    <div>
      <TestFlexGrid columns={1}>
        <TestGridSectionHeader title="Default" colspan={1} />
        <div className="contents">
          <UISegment default options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="Primary" colspan={1} />
        <div className="contents">
          <UISegment primary options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="Secondary" colspan={1} />
        <div className="contents">
          <UISegment secondary options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="Success" colspan={1} />
        <div className="contents">
          <UISegment success options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="Information" colspan={1} />
        <div className="contents">
          <UISegment info options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="Warning" colspan={1} />
        <div className="contents">
          <UISegment warning options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
        <TestGridSectionHeader title="danger" colspan={1} />
        <div className="contents">
          <UISegment danger options={options} selected={selected} onChange={handleOnOptionChangedEvent} />
        </div>
      </TestFlexGrid>
    </div>
  );
};
