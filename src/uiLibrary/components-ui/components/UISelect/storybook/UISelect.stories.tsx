import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UISelect from "../UISelect";

import FactoryOptionLists from "../../../../storybook/factories/FactoryOptionLists";
import OptionModel from "../../UISegment/models/OptionModel";

const meta = {
  title: "UI/UISelect",
  component: UISelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        // eslint-disable-next-line no-useless-concat
        component:
          "UISelect, allows from a number of values" +
          "<ul>" +
          "<li>Add id as property</li>" +
          "<li>Add sizes</li>" +
          "<li>Export UISelectButton to separate control</li>" +
          "<li>style for disabled</li>" +
          "<li>Export Property</li>" +
          "</ul>",
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

  return <UISelect primary options={options} selected={selected} onChange={handleOnOptionChangedEvent} />;
};
