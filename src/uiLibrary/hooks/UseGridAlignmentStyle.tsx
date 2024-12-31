import EnumGridAlign from "../enums/EnumGridAlign";
import IPropGridAlignment from "../interfaces/properties/IPropGridAlignment";

const UseGridAlignmentStyle = (style: IPropGridAlignment): string => {
  // Handle when style is an Enum
  if (typeof style.alignment) {
    switch (style.alignment) {
      case EnumGridAlign.topLeft:
        return "alignTopLeft";
      case EnumGridAlign.topCenter:
        return "alignTopCenter";
      case EnumGridAlign.topRight:
        return "alignTopRight";
      case EnumGridAlign.middleLeft:
        return "alignMiddleLeft";
      case EnumGridAlign.middleCenter:
        return "alignMiddleCenter";
      case EnumGridAlign.middleEnd:
        return "alignMiddleEnd";
      case EnumGridAlign.bottomLeft:
        return "alignBottomLeft";
      case EnumGridAlign.bottomCenter:
        return "alignBottomCenter";
      case EnumGridAlign.bottomRight:
        return "alignBottomRight";
      default:
        return "alignDefault";
    }
  }

  // Handle when style is a boolean switch object
  if (typeof style === "object") {
    if (style.topLeft) return "alignTopLeft";
    if (style.topCenter) return "alignTopCenter";
    if (style.topRight) return "alignTopRight";
    if (style.middleLeft) return "alignMiddleLeft";
    if (style.middleCenter) return "alignMiddleCenter";
    if (style.middleEnd) return "alignMiddleEnd";
    if (style.bottomLeft) return "alignBottomLeft";
    if (style.bottomCenter) return "alignBottomCenter";
    if (style.bottomRight) return "alignBottomRight";
  }

  // Default case
  return "alignDefault";
};

export default UseGridAlignmentStyle;
