import IPropSizeExtended from "../interfaces/properties/IPropSizeExtended";

const useExtendedSizeStyle = (prefix: string, size: IPropSizeExtended): string => {
  var value = "";
  if (size.extraSmall) {
    value = "2xs";
  } else if (size.small) {
    value = "xs";
  } else if (size.smaller) {
    value = "sm";
  } else if (size.larger) {
    value = "lg";
  } else if (size.large) {
    value = "xl";
  } else if (size.extraLarge) {
    value = "2xl";
  } else {
    value = "base";
  }

  return `${prefix}-${value}`;
};

export default useExtendedSizeStyle;
