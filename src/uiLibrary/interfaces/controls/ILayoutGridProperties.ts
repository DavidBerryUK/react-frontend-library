import IPropChildren from "../properties/IPropChildren";
import IPropGridColGap from "../properties/IPropGridColGap";
import IPropGridColumns from "../properties/IPropGridColumns";
import IPropGridRowGap from "../properties/IPropGridRowGap";

type IPropertiesLayoutGrid = IPropChildren & IPropGridColumns & IPropGridRowGap & IPropGridColGap;

export default IPropertiesLayoutGrid;
