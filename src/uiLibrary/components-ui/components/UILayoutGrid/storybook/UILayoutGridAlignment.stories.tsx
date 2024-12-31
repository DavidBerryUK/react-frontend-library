import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UILayoutGrid from "../UILayoutGrid";
import UIBoxAnimated from "../../UIBoxAnimated/UIBoxAnimated";
import UISegment from "../../UISegment/UISegment";
import OptionModel from "../../UISegment/models/OptionModel";
import EnumGridAlign from "../../../../enums/EnumGridAlign";
import FactorFormsLayoutLists from "../../../../storybook/factories/FactorFormsLayoutLists";

const meta = {
  title: "1 - UI/UILayoutGrid (Alignment)",
  component: UILayoutGrid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "UILayoutGrid, enables layout of controls in grids",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "800px", height: "800px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UILayoutGrid>;

export default meta;

/**
 * Basic 5 x 5 grid
 */
export const AlignmentDemo: React.FC = () => {
  const [alignmentOptions] = useState<Array<OptionModel<EnumGridAlign>>>(FactorFormsLayoutLists.GetAlignmentOptions());
  const [selectedAlignment, setSelectedAlignment] = useState<OptionModel<EnumGridAlign>>(
    FactorFormsLayoutLists.GetAlignmentOptions().filter((item) => item.data === EnumGridAlign.middleCenter)[0],
  );

  const handleOnSegmentChangedEvent = (value: OptionModel<EnumGridAlign>) => {
    setSelectedAlignment(value);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <UISegment success options={alignmentOptions} selected={selectedAlignment} onChange={handleOnSegmentChangedEvent} />
      </div>
      <UILayoutGrid columns5 colGap2 rowGap2 alignment={selectedAlignment.data!}>
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
        <UIBoxAnimated />
      </UILayoutGrid>
    </div>
  );
};
