import IPropLayoutGap from "../interfaces/properties/IPropLayoutGap";

const UseLayoutGapStyle = (style: IPropLayoutGap): string => {
  const colGap =
    (style.gap1 && 1) ||
    (style.gap2 && 2) ||
    (style.gap3 && 3) ||
    (style.gap4 && 4) ||
    (style.gap5 && 5) ||
    (style.gap6 && 6) ||
    (style.gap7 && 7) ||
    (style.gap8 && 8) ||
    (style.gap9 && 9) ||
    (style.gap10 && 10) ||
    (style.gap11 && 11) ||
    (style.gap12 && 12) ||
    style.gap;

  return colGap ? `gap-${colGap}` : "";
};

export default UseLayoutGapStyle;
