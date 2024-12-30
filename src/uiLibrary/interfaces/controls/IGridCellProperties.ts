import IPropChildren from "../properties/IPropChildren";
import IPropGridColSpan from "../properties/IPropGridColSpan";
import IPropGridRowSpan from "../properties/IPropGridRowSpan";

type IGridCellProperties = IPropChildren & IPropGridRowSpan & IPropGridColSpan;

export default IGridCellProperties;
