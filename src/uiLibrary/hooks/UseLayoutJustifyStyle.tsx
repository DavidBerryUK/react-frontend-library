import IPropLayoutJustify from "../interfaces/properties/IPropLayoutJustify";

const useLayoutJustifyStyle = (style: IPropLayoutJustify): string => {
  var className =
    (style.justifyStart && "justify-start") ||
    (style.justifyEnd && "justify-end") ||
    (style.justifyCenter && "justify-center") ||
    (style.justifyBetween && "justify-between") ||
    (style.justifyAround && "justify-around") ||
    (style.justifyEvenly && "justify-evenly") ||
    "";

  return className;
};

export default useLayoutJustifyStyle;
