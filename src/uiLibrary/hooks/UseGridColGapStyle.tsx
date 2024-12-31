import IPropGridColGap from "../interfaces/properties/IPropGridColGap";

const useGridColGapStyle = (style: IPropGridColGap): string => {
  const colGap =
    (style.colGap1 && 1) ||
    (style.colGap2 && 2) ||
    (style.colGap3 && 3) ||
    (style.colGap4 && 4) ||
    (style.colGap5 && 5) ||
    (style.colGap6 && 6) ||
    (style.colGap7 && 7) ||
    (style.colGap8 && 8) ||
    (style.colGap9 && 9) ||
    (style.colGap10 && 10) ||
    (style.colGap11 && 11) ||
    (style.colGap12 && 12) ||
    style.colGap;

  return colGap ? `column-gap-${colGap}` : "";
};

export default useGridColGapStyle;
