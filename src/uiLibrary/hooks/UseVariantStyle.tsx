import IPropColor from "../interfaces/properties/IPropColor";

const useVariantStyle = (prefix: string, color: IPropColor): string => {
  var value = "";
  if (color.primary) {
    value = "primary";
  } else if (color.secondary) {
    value = "secondary";
  } else if (color.success) {
    value = "success";
  } else if (color.info) {
    value = "info";
  } else if (color.warning) {
    value = "warning";
  } else if (color.danger) {
    value = "danger";
  } else {
    value = "default";
  }

  return `${prefix}-${value}`;
};

export default useVariantStyle;
