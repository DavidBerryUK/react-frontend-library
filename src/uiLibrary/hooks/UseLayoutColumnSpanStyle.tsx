import IPropLayoutColSpan from "../interfaces/properties/IPropLayoutColSpan";

const useLayoutColumnSpanStyle = (style: IPropLayoutColSpan): string => {
  const columns =
    (style.colSpan1 && 1) ||
    (style.colSpan2 && 2) ||
    (style.colSpan3 && 3) ||
    (style.colSpan4 && 4) ||
    (style.colSpan5 && 5) ||
    (style.colSpan6 && 6) ||
    (style.colSpan7 && 7) ||
    (style.colSpan8 && 8) ||
    (style.colSpan9 && 9) ||
    (style.colSpan10 && 10) ||
    (style.colSpan11 && 11) ||
    (style.colSpan12 && 12) ||
    style.columnSpan;

  return columns ? `column-span-${columns}` : "";
};

export default useLayoutColumnSpanStyle;
