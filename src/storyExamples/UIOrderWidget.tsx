import OrderViewModel from "./viewModels/order/order/OrderViewModel";
import React from "react";
import UIOrderHeader from "./UIOrderHeader";
import UIOrderLabourLineCollection from "./UIOrderLabourLineCollection";

interface IProperties {
  value: OrderViewModel;
  onChange: (order: OrderViewModel) => void;
}

/**
 * Display an Order
 */
const UIOrderWidget: React.FC<IProperties> = ({ value, onChange }) => {
  /****************************************************/
  /* Event Handlers                                   */
  /****************************************************/

  /**
   * The order has been updated by either the header or
   * labour lines (or its children). Raise an event to parent container
   * to update the order state
   */
  const handleOnOrderChangeEvent = (order: OrderViewModel) => {
    onChange(order);
  };

  /****************************************************/
  /* Template                                         */
  /****************************************************/
  return (
    <div>
      <div className="ui-form">
        <UIOrderHeader value={value} onChange={handleOnOrderChangeEvent} />
        <UIOrderLabourLineCollection value={value} onChange={handleOnOrderChangeEvent} />
      </div>
    </div>
  );
};

export default UIOrderWidget;
