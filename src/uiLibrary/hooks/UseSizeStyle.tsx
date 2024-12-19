import IPropSize from "../interfaces/properties/IPropSize";

const useSizeStyle = (prefix: string, size: IPropSize): string => {
  var value = "";
  if (size.small) {
    value = "small";
  } else if (size.large) {
    value = "large";
  }

  return `${prefix}-${value}`;
};

export default useSizeStyle;
