import IPropShade from "../interfaces/properties/IPropShade";

const UseShadeStyle = (prefix: string, color: IPropShade): string => {
  const value = (color.lighter && "lighter") || (color.darker && "darker") || "";
  return `${prefix}-${value}`;
};

export default UseShadeStyle;
