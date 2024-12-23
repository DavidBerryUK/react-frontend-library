import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropOnChange from "../properties/IPropOnChange";
import IPropValue from "../properties/IPropValue";

type ISwitchProperties = IPropColor & IPropDisabled & IPropValue<boolean> & IPropOnChange<boolean>;

export default ISwitchProperties;
