import IPropChildren from "../properties/IPropChildren";
import IPropColor from "../properties/IPropColor";
import IPropShade from "../properties/IPropShade";
import IPropOnClick from "../properties/IPropOnClick";
import IPropSize from "../properties/IPropSize";

type IBadgeProperties = IPropColor & IPropChildren & IPropOnClick & IPropSize & IPropShade;

export default IBadgeProperties;
