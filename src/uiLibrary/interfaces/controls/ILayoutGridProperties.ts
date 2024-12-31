import IPropChildren from "../properties/IPropChildren";
import IPropGridAlignment from "../properties/IPropGridAlignment";
import IPropGridColGap from "../properties/IPropGridColGap";
import IPropGridColumns from "../properties/IPropGridColumns";
import IPropGridRowGap from "../properties/IPropGridRowGap";

type IPropertiesLayoutGrid = IPropChildren & IPropGridColumns & IPropGridRowGap & IPropGridColGap & IPropGridAlignment;

export default IPropertiesLayoutGrid;
