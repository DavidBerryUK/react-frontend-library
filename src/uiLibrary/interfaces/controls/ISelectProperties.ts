import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropOnChange from "../properties/IPropOnChange";
import IPropOptions from "../properties/IPropOptions";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";

export type ISelectProperties = IPropColor & IPropDisabled & IPropOnChange<OptionModel<any>> & IPropOptions & IPropColor;
