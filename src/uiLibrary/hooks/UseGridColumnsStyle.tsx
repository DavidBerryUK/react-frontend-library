import IPropGridColumns from "../interfaces/properties/IPropGridColumns";

const useGridColumnsStyle = (style: IPropGridColumns): string => {
  // Check each column directly using short-circuit evaluation
  const columns =
    (style.columns1 && 1) ||
    (style.columns2 && 2) ||
    (style.columns3 && 3) ||
    (style.columns4 && 4) ||
    (style.columns5 && 5) ||
    (style.columns6 && 6) ||
    (style.columns7 && 7) ||
    (style.columns8 && 8) ||
    (style.columns9 && 9) ||
    (style.columns10 && 10) ||
    (style.columns11 && 11) ||
    (style.columns12 && 12) ||
    (style.columns && style.columns);

  if (columns) {
    return `columns-${columns}`;
  }

  return "";
};

export default useGridColumnsStyle;
