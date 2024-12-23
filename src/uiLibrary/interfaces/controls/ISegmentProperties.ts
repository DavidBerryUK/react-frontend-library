import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropOnChange from "../properties/IPropOnChange";
import IPropOptions from "../properties/IPropOptions";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";

type ISegmentProperties = IPropColor & IPropDisabled & IPropOnChange<OptionModel<any>> & IPropOptions;

export default ISegmentProperties;
