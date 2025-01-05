import OrderViewModel from "../viewModels/order/order/OrderViewModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIOrderWidget from "../UIOrderWidget";

import UIFormText from "../../uiLibrary/components-forms/UIFormText/UIFormText";

const meta = {
  title: "5 - Form Examples/Order",
  component: UIFormText,
  parameters: {
    docs: {
      description: {
        component: "Very basic data entry form with simple validation and optional field",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "20px", paddingBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "900px", minHeight: "450px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof UIFormText>;

export default meta;

export const Interactive: React.FC = () => {
  const [order, setOrder] = useState<OrderViewModel>(new OrderViewModel());

  const handleOnOrderChangeEvent = (value: OrderViewModel) => {
    setOrder(value);
  };

  return <UIOrderWidget value={order} onChange={handleOnOrderChangeEvent} />;
};
