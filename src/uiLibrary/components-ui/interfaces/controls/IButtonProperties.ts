import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropOnClick from "../properties/IPropOnClick";
import IPropOutline from "../properties/IPropOutline";
import IPropSize from "../properties/IPropSize";
import IPropsText from "../properties/IPropText";

type IButtonProperties = IPropColor & IPropDisabled & IPropsText & IPropSize & IPropOutline & IPropOnClick & {testId?: string}

export default IButtonProperties;
