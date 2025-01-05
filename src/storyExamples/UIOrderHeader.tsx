import FieldModel from "../uiLibrary/models/fields/FieldModel";
import OrderViewModel from "./viewModels/order/order/OrderViewModel";
import React from "react";
import UIFormCurrency from "../uiLibrary/components-forms/UIFormCurrency/UIFormCurrency";
import UIFormText from "../uiLibrary/components-forms/UIFormText/UIFormText";
import UIGridCell from "../uiLibrary/components-ui/components/UILayoutGrid/UIGridCell";
import UILayoutGrid from "../uiLibrary/components-ui/components/UILayoutGrid/UILayoutGrid";
import UIText from "../uiLibrary/components-ui/components/UIText/UIText";

interface IProperties {
  value: OrderViewModel;
  onChange: (form: OrderViewModel) => void;
}

/**
 * Display header details for an order, this can be split down into further
 * components as it becomre more complex
 */
const UIOrderHeader: React.FC<IProperties> = ({ value, onChange }) => {
  /****************************************************/
  /* Event Handlers                                   */
  /****************************************************/

  /**
   * update a field value on the order, then raise an event to the parent
   * order container to update the storage of the OrderViewModel
   */
  const handleOnFieldValueChangedEvent = (field: FieldModel) => {
    onChange(value.cloneWithField(field));
  };

  /****************************************************/
  /* Template                                         */
  /****************************************************/
  return (
    <div>
      <UIText heading>Order</UIText>
      <UILayoutGrid columns2 colGap3 rowGap2>
        <UIFormText value={value.customer} onChange={handleOnFieldValueChangedEvent} />
        <UIFormText value={value.supplier} onChange={handleOnFieldValueChangedEvent} />
      </UILayoutGrid>
      <UILayoutGrid columns6 colGap3 rowGap2>
        <UIGridCell colSpan3 />
        <UIFormCurrency secondary value={value.partsTotal} readonly />
        <UIFormCurrency secondary value={value.labourTotal} readonly />
        <UIFormCurrency primary value={value.orderTotal} readonly />
      </UILayoutGrid>
    </div>
  );
};

export default UIOrderHeader;
