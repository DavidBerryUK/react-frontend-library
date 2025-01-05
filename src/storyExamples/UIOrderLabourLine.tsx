import FieldModel from "../uiLibrary/models/fields/FieldModel";
import LabourLineViewModel from "./viewModels/order/labourLine/LabourLineViewModel";
import React from "react";
import UIButton from "../uiLibrary/components-ui/components/UIButton/UIButton";
import UIFormText from "../uiLibrary/components-forms/UIFormText/UIFormText";
import UILayoutGrid from "../uiLibrary/components-ui/components/UILayoutGrid/UILayoutGrid";
import UIOrderPartLineCollection from "./UIOrderPartLineCollection";
import UIText from "../uiLibrary/components-ui/components/UIText/UIText";
import UIFormNumber from "../uiLibrary/components-forms/UIFormNumber/UIFormNumber";
import UIFormCurrency from "../uiLibrary/components-forms/UIFormCurrency/UIFormCurrency";

interface IProperties {
  value: LabourLineViewModel;
  onChange: (value: LabourLineViewModel) => void;
  onDelete: (value: LabourLineViewModel) => void;
}

/**
 * Display a single labour line, this will also display a collection
 * of child part lines
 */
const UIOrderLabourLine: React.FC<IProperties> = ({ value, onChange, onDelete }) => {
  /****************************************************/
  /* Event Handlers                                   */
  /****************************************************/

  /**
   * a field has been updated on this Labour line. this updated the
   * labour line view model and raises event to update the order model
   */
  const handleOnFieldValueChangedEvent = (field: FieldModel) => {
    onChange(value.cloneWithField(field));
  };

  /**
   * add a new part line. This adds the part line to the view model
   * and raises event to parent to update the order model
   */
  const handleAddPartLineEvent = () => {
    const model = value.addPartLine();
    onChange(model);
  };

  /**
   * update part line, the updated part line is return in the labour line parameter
   * and raises an event to the parent with the updated labourLine to update
   * the order model
   */
  const handlePartLineUpdatedEvent = (labourLine: LabourLineViewModel) => {
    onChange(labourLine);
  };

  /**
   * Delete this labour line by raising event to parent
   */
  const handleDeleteLineEvent = () => {
    onDelete(value);
  };

  /****************************************************/
  /* Template                                         */
  /****************************************************/
  return (
    <div>
      <UIText subHeading>Labour Line</UIText>
      <UILayoutGrid columns6 colGap3 topLeft>
        <UIFormText value={value.description} onChange={handleOnFieldValueChangedEvent} />
        <UIFormCurrency value={value.labourRate} onChange={handleOnFieldValueChangedEvent} />
        <UIFormNumber value={value.hours} onChange={handleOnFieldValueChangedEvent} />
        <UIFormCurrency secondary value={value.labourTotal} readonly />
        <UIFormCurrency secondary value={value.partsTotal} readonly />
        <UIFormCurrency primary value={value.lineTotal} readonly />
      </UILayoutGrid>
      <UILayoutGrid columns2 colGap2 middleEnd>
        <UIButton text="Add Part Line" onClick={handleAddPartLineEvent} />
        <UIButton text="Delete" onClick={handleDeleteLineEvent} />
      </UILayoutGrid>
      <UIOrderPartLineCollection value={value} onChange={handlePartLineUpdatedEvent} />
    </div>
  );
};

export default UIOrderLabourLine;
