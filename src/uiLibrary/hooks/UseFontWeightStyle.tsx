import IPropFontWeight from "../interfaces/properties/IPropFontWeight";

const useFontWeightStyle = (prefix: string, props: IPropFontWeight): string => {
  const value =
    (props.thin && "thin") ||
    (props.extraLight && "extralight") ||
    (props.light && "light") ||
    (props.medium && "medium") ||
    (props.semiBold && "semibold") ||
    (props.bold && "bold") ||
    (props.extraBold && "extrabold") ||
    (props.ultraBold && "black") ||
    "normal";

  return `${prefix}-${value}`;
};

export default useFontWeightStyle;
