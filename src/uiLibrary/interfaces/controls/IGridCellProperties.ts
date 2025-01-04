import IPropChildren from "../properties/IPropChildren";
import IPropLayoutColSpan from "../properties/IPropLayoutColSpan";
import IPropLayoutRowSpan from "../properties/IPropLayoutRowSpan";

type IGridCellProperties = IPropChildren & IPropLayoutRowSpan & IPropLayoutColSpan;

export default IGridCellProperties;
