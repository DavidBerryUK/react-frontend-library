import FieldModel from "../../models/fields/FieldModel";
import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropOnChange from "../properties/IPropOnChange";
import IPropValue from "../properties/IPropValue";

type IFormSwitchProperties = IPropDisabled & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropColor;

export default IFormSwitchProperties;
