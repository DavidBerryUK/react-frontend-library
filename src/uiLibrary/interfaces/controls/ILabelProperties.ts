import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../properties/IPropClassName";
import IPropValue from "../properties/IPropValue";

type ILabelProperties = IPropValue<FieldModel> & IPropClassName;

export default ILabelProperties;
