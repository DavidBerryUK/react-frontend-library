import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/IPropClassName";
import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";
import IPropDisabled from "../../interfaces/IPropDisabled";
import IPropPlaceholder from "../../interfaces/IPropPlaceholder";
import IPropValue from "../../interfaces/IPropValue";
import IPropOnChange from "../../interfaces/IPropOnChange";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName;

const UIFormText: React.FC<IProperties> = (props) => {
  return <UIFormBaseString {...props} inputType="text" />;
};

export default UIFormText;
