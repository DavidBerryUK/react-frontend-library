import FieldModel from "../../models/fields/FieldModel";
import IPropValue from "../../interfaces/properties/IPropValue";

type IProperties = IPropValue<FieldModel>;

/**
 * Common Text Field
 * @param props
 * @returns
 */
const UIFormLabel: React.FC<IProperties> = (props) => {
  return (
    <label htmlFor={props.value.fieldName} aria-label={props.value.caption} className="ui-fc-label">
      {props.value.caption}
    </label>
  );
};

export default UIFormLabel;
