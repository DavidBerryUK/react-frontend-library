import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/IPropClassName";
import IPropDisabled from "../../interfaces/IPropDisabled";
import IPropOnChange from "../../interfaces/IPropOnChange";
import IPropPlaceholder from "../../interfaces/IPropPlaceholder";
import IPropValue from "../../interfaces/IPropValue";
import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName;

const UIFormPassword: React.FC<IProperties> = (props) => {
  return <UIFormBaseString {...props} inputType="password" />;
};

export default UIFormPassword;
