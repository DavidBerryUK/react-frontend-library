import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UIFormText from "../../uiLibrary/components-forms/UIFormText/UIFormText";
import UILayoutGrid from "../../uiLibrary/components-ui/components/UILayoutGrid/UILayoutGrid";
import UIFormCurrency from "../../uiLibrary/components-forms/UIFormCurrency/UIFormCurrency";
import UIFormNumber from "../../uiLibrary/components-forms/UIFormNumber/UIFormNumber";
import UIFormPercent from "../../uiLibrary/components-forms/UIFormPercent/UIFormPercent";
import useLayoutExampleViewController from "./hooks/UseLayoutExampleViewController";

const meta: Meta<typeof UIFormText> = {
  title: "4 - Form Formatting/Layout Examples",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Testing layouts with form controls",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ justifyContent: "center", padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UIFormText>;

export const PlacementAndInteraction: Story = {
  render: () => {
    const { state, handlers } = useLayoutExampleViewController();

    return (
      <div className="ui-form">
        <UILayoutGrid columns4 colGap4 rowGap6>
          <UIFormText value={state.forename} onChange={handlers.forname} />
          <UIFormText value={state.surname} onChange={handlers.surname} />
          <UIFormText value={state.phone} onChange={handlers.phone} />
          <UIFormText value={state.email} onChange={handlers.email} />
          <UIFormCurrency value={state.price} onChange={handlers.price} />
          <UIFormNumber value={state.quantity} onChange={handlers.quantity} />
          <UIFormPercent value={state.discount} onChange={handlers.discount} />
          <UIFormCurrency value={state.total} readonly />
        </UILayoutGrid>
      </div>
    );
  },
};
