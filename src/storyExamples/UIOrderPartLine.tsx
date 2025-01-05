import FieldModel from "../uiLibrary/models/fields/FieldModel";
import PartLineViewModel from "./viewModels/order/partLine/PartLineViewModel";
import React from "react";
import UIButton from "../uiLibrary/components-ui/components/UIButton/UIButton";
import UIFormCurrency from "../uiLibrary/components-forms/UIFormCurrency/UIFormCurrency";
import UIFormNumber from "../uiLibrary/components-forms/UIFormNumber/UIFormNumber";
import UIFormText from "../uiLibrary/components-forms/UIFormText/UIFormText";
import UILayoutGrid from "../uiLibrary/components-ui/components/UILayoutGrid/UILayoutGrid";

interface IProperties {
  value: PartLineViewModel;
  onChange: (form: PartLineViewModel) => void;
  onDelete: (value: PartLineViewModel) => void;
}

/**
 * Display a single part line
 */
const UIOrderPartLine: React.FC<IProperties> = ({ value, onChange, onDelete }) => {
  /****************************************************/
  /* Event Handlers                                   */
  /****************************************************/

  /**
   * a UIFormText has been updated, this updated the PartLine and
   * raises an event to the parent to update the order line, and then
   * the order object.
   */
  const handleOnFieldValueChangedEvent = (field: FieldModel) => {
    onChange(value.cloneWithField(field));
  };

  /**
   * Delete this line by raising an event to the parent (Labour Line) to
   * request to remove it from the parts collection
   */
  const handleDeleteLineEvent = () => {
    onDelete(value);
  };

  /****************************************************/
  /* Template                                         */
  /****************************************************/
  return (
    <div>
      <UILayoutGrid columns6 colGap3 topLeft>
        <UIFormText value={value.code} onChange={handleOnFieldValueChangedEvent} />
        <UIFormText value={value.description} onChange={handleOnFieldValueChangedEvent} />
        <UIFormCurrency value={value.price} onChange={handleOnFieldValueChangedEvent} />
        <UIFormText value={value.quantity} onChange={handleOnFieldValueChangedEvent} />
        <UIFormNumber value={value.discountPercentage} onChange={handleOnFieldValueChangedEvent} />
        <UIFormCurrency value={value.lineTotal} readonly />
      </UILayoutGrid>
      <UILayoutGrid middleEnd>
        <UIButton text="Delete" onClick={handleDeleteLineEvent} />
      </UILayoutGrid>
    </div>
  );
};

export default UIOrderPartLine;
