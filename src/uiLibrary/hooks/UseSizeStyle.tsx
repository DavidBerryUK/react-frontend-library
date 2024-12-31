import IPropSize from "../interfaces/properties/IPropSize";

const useSizeStyle = (prefix: string, size: IPropSize): string => {
  const value = (size.small && "small") || (size.large && "large") || "";
  return `${prefix}-${value}`;
};

export default useSizeStyle;
