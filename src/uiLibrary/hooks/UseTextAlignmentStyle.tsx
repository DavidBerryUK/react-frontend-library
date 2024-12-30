import IPropTextAlignment from "../interfaces/properties/IPropTextAlignment";

const useTextAlignmentStyle = (style: IPropTextAlignment): string => {
  if (style.alignTextLeft) {
    return "align-text-left";
  } else if (style.alignTextRight) {
    return "align-text-right";
  } else if (style.alignTextCenter) {
    return "align-text-center";
  }
  return "";
};

export default useTextAlignmentStyle;
