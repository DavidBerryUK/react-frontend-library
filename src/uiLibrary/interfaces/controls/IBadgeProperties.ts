import IPropChildren from "../properties/IPropChildren";
import IPropColor from "../properties/IPropColor";
import IPropOnClick from "../properties/IPropOnClick";
import IPropShade from "../properties/IPropShade";
import IPropSize from "../properties/IPropSize";

type IBadgeProperties = IPropColor & IPropChildren & IPropOnClick & IPropSize & IPropShade;

export default IBadgeProperties;
