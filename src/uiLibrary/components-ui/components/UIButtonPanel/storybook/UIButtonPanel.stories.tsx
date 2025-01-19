import React from "react";
import type { Meta } from "@storybook/react";
import UIButtonPanel from "../UIButtonPanel";
import UILayoutGrid from "../../UILayoutGrid/UILayoutGrid";
import UIText from "../../UIText/UIText";
import EnumPanelButtonAnchor from "../enums/EnumPanelButtonAnchor";
import EnumPanelButtonState from "../enums/EnumPanelButtonState";

const meta = {
  title: "1 - UI/UIButtonPanel",
  component: UIButtonPanel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Panel button, used to open and close panels at the side of the screen`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIButtonPanel>;

export default meta;

//export const Gallery: Story = {
export const Gallery: React.FC = () => {
  return (
    <div>
      <UILayoutGrid columns6 colGap4 rowGap4 topCenter>
        <UIText>Left Closed</UIText>
        <UIText>Left Partial Open</UIText>
        <UIText>Left Open</UIText>
        <UIText>Right Closed</UIText>
        <UIText>Right Partial Open</UIText>
        <UIText>Right Open</UIText>
      </UILayoutGrid>
      <UILayoutGrid columns6 colGap4 rowGap4>
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.left} state={EnumPanelButtonState.closed} />
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.left} state={EnumPanelButtonState.partiallyOnly} />
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.left} state={EnumPanelButtonState.open} />
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.right} state={EnumPanelButtonState.closed} />
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.right} state={EnumPanelButtonState.partiallyOnly} />
        <UIButtonPanel outlined anchor={EnumPanelButtonAnchor.right} state={EnumPanelButtonState.open} />
      </UILayoutGrid>
    </div>
  );
};
