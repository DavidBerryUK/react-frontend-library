import IPropFontWeight from "../interfaces/properties/IPropFontWeight";

const useFontWeightStyle = (prefix: string, props: IPropFontWeight): string => {
  var value = "";
  if (props.thin) {
    value = "thin";
  } else if (props.extraLight) {
    value = "extralight";
  } else if (props.light) {
    value = "light";
  } else if (props.medium) {
    value = "medium";
  } else if (props.semiBold) {
    value = "semibold";
  } else if (props.bold) {
    value = "bold";
  } else if (props.extraBold) {
    value = "extrabold";
  } else if (props.ultraBold) {
    value = "black";
  } else {
    value = "normal";
  }

  return `${prefix}-${value}`;
};

export default useFontWeightStyle;
