import IPropChildren from "./IPropChildren";
import IPropClassName from "./IPropClassName";
import { IPropLayoutAlign } from "./IPropLayoutAlign";
import IPropLayoutColGap from "./IPropLayoutColGap";
import { IPropLayoutDirection } from "./IPropLayoutDirection";
import IPropLayoutGap from "./IPropLayoutGap";
import { IPropLayoutJustify } from "./IPropLayoutJustify";
import IPropLayoutRowGap from "./IPropLayoutRowGap";
import { IPropLayoutWrap } from "./IPropLayoutWrap";

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
