import { IPropLayoutAlign } from "../interfaces/properties/IPropLayoutAlign";

const useLayoutAlignClass = (style: IPropLayoutAlign): string => {
  var className =
    (style.alignStart && "align-start") ||
    (style.alignEnd && "align-end") ||
    (style.alignCenter && "align-center") ||
    (style.alignBaseline && "align-baseline") ||
    (style.alignStretch && "align-stretch") ||
    "";

  return className;
};

export default useLayoutAlignClass;
