import IPropLayoutRowGap from "../interfaces/properties/IPropLayoutRowGap";

const useLayoutRowGapStyle = (style: IPropLayoutRowGap): string => {
  const rowGap =
    (style.rowGap1 && 1) ||
    (style.rowGap2 && 2) ||
    (style.rowGap3 && 3) ||
    (style.rowGap4 && 4) ||
    (style.rowGap5 && 5) ||
    (style.rowGap6 && 6) ||
    (style.rowGap7 && 7) ||
    (style.rowGap8 && 8) ||
    (style.rowGap9 && 9) ||
    (style.rowGap10 && 10) ||
    (style.rowGap11 && 11) ||
    (style.rowGap12 && 12) ||
    style.rowGap;

  return rowGap ? `row-gap-${rowGap}` : "";
};

export default useLayoutRowGapStyle;
