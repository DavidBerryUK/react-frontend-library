import IPropShade from "../interfaces/properties/IPropShade";

const UseShadeStyle = (prefix: string, color: IPropShade): string => {
  var value = "";
  if (color.lighter) {
    value = "lighter";
  } else if (color.darker) {
    value = "darker";
  }

  return `${prefix}-${value}`;
};

export default UseShadeStyle;
