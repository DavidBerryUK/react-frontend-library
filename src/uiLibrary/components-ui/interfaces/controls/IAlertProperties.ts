import IAlertStyles from "../properties/IPropAlertBorderStyles";
import IPropChildren from "../properties/IPropChildren";
import IPropColor from "../properties/IPropColor";
import IPropShade from "../properties/IPropShade";
import IPropSize from "../properties/IPropSize";

type IAlertProperties = IPropColor & IAlertStyles & IPropSize & IPropShade & IPropChildren & {testId?: string};

export default IAlertProperties;
