import IPropTextAlignment from "../interfaces/properties/IPropTextAlignment";

const useTextAlignmentStyle = (style: IPropTextAlignment): string => {
  return (style.alignTextLeft && "align-text-left") || (style.alignTextRight && "align-text-right") || (style.alignTextCenter && "align-text-center") || "";
};

export default useTextAlignmentStyle;
