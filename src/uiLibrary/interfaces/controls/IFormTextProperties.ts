import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../properties/IPropClassName";
import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropInteractionMode from "../properties/IPropInteractionMode";
import IPropLabelPlacementMode from "../properties/IPropLabelPlacementMode";
import IPropOnChange from "../properties/IPropOnChange";
import IPropPlaceholder from "../properties/IPropPlaceholder";
import IPropValue from "../properties/IPropValue";

type IFormTextProperties = IPropDisabled &
  IPropPlaceholder &
  IPropValue<FieldModel> &
  IPropOnChange<FieldModel> &
  IPropClassName &
  IPropColor &
  IPropLabelPlacementMode &
  IPropInteractionMode;

export default IFormTextProperties;
