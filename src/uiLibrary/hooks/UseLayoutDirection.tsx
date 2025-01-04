import { IPropLayoutDirection } from "../interfaces/properties/IPropLayoutDirection";

const useLayoutDirectionStyle = (style: IPropLayoutDirection): string => {
  var className = (style.dirColumn && "dir-col") || (style.dirRow && "dir-row") || "";

  return className;
};

export default useLayoutDirectionStyle;
