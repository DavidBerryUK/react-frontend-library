import IPropLayoutRowSpan from "../interfaces/properties/IPropLayoutRowSpan";

const useLayoutRowSpanStyle = (style: IPropLayoutRowSpan): string => {
  const rows =
    (style.rowSpan1 && 1) ||
    (style.rowSpan2 && 2) ||
    (style.rowSpan3 && 3) ||
    (style.rowSpan4 && 4) ||
    (style.rowSpan5 && 5) ||
    (style.rowSpan6 && 6) ||
    (style.rowSpan7 && 7) ||
    (style.rowSpan8 && 8) ||
    (style.rowSpan9 && 9) ||
    (style.rowSpan10 && 10) ||
    (style.rowSpan11 && 11) ||
    (style.rowSpan12 && 12) ||
    style.rowSpan;

  return rows ? `row-span-${rows}` : "";
};

export default useLayoutRowSpanStyle;
