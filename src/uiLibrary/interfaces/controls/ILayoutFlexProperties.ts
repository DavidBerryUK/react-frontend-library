import IPropChildren from "../properties/IPropChildren";
import IPropClassName from "../properties/IPropClassName";
import IPropLayoutAlign from "../properties/IPropLayoutAlign";
import IPropLayoutColGap from "../properties/IPropLayoutColGap";
import IPropLayoutDirection from "../properties/IPropLayoutDirection";
import IPropLayoutGap from "../properties/IPropLayoutGap";
import IPropLayoutJustify from "../properties/IPropLayoutJustify";
import IPropLayoutRowGap from "../properties/IPropLayoutRowGap";
import IPropLayoutWrap from "../properties/IPropLayoutWrap";

type ILayoutFlexProperties = IPropChildren &
  IPropClassName &
  IPropLayoutDirection &
  IPropLayoutRowGap &
  IPropLayoutColGap &
  IPropLayoutGap &
  IPropLayoutWrap &
  IPropLayoutAlign &
  IPropLayoutJustify;

export default ILayoutFlexProperties;
