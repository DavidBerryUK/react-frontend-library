import IPropChildren from "../properties/IPropChildren";
import IPropLayoutAlignment from "../properties/IPropLayoutAlignment";
import IPropLayoutColGap from "../properties/IPropLayoutColGap";
import IPropLayoutColumns from "../properties/IPropLayoutColumns";
import IPropLayoutRowGap from "../properties/IPropLayoutRowGap";

type IPropertiesLayoutGrid = IPropChildren & IPropLayoutColumns & IPropLayoutRowGap & IPropLayoutColGap & IPropLayoutAlignment;

export default IPropertiesLayoutGrid;
