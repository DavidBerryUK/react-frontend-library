import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/properties/IPropClassName";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropInteractionMode from "../../interfaces/properties/IPropInteractionMode";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropPlaceholder from "../../interfaces/properties/IPropPlaceholder";
import IPropValue from "../../interfaces/properties/IPropValue";
import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";
import NumberUtility from "../../../utilities/NumberUtility";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropColor & IPropInteractionMode;

const UIFormCurrency: React.FC<IProperties> = (props) => {
  const handleLostFocusEvent = (field: FieldModel) => {
    if (props.onChange) {
      props.onChange(field.cloneWithValue(NumberUtility.format2dp(field.valueAsNumber)));
    }
  };

  return <UIFormBaseString {...props} alignTextRight inputType="number" textPrefix="£" onLostFocus={handleLostFocusEvent} />;
};

export default UIFormCurrency;
