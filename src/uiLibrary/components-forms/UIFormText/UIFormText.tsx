import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/properties/IPropClassName";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropPlaceholder from "../../interfaces/properties/IPropPlaceholder";
import IPropValue from "../../interfaces/properties/IPropValue";
import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropColor;

const UIFormText: React.FC<IProperties> = (props) => {
  return <UIFormBaseString {...props} inputType="text" />;
};

export default UIFormText;
