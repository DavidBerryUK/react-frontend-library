import { IPropLayoutWrap } from "../interfaces/properties/IPropLayoutWrap";

const useLayoutWrapStyle = (style: IPropLayoutWrap): string => {
  var className = (style.wrap && "wrap-on") || (style.wrapOff && "wrap-off") || "wrap-on";

  return className;
};

export default useLayoutWrapStyle;
