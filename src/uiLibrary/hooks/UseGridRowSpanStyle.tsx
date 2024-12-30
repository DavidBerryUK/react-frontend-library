import IPropGridRowSpan from "../interfaces/properties/IPropGridRowSpan";

const useGridRowSpanStyle = (style: IPropGridRowSpan): string => {
  let rows = style.rowSpan;

  // Map rowSpan style to rowSpan value
  if (style.rowSpan1) {
    rows = 1;
  } else if (style.rowSpan2) {
    rows = 2;
  } else if (style.rowSpan3) {
    rows = 3;
  } else if (style.rowSpan4) {
    rows = 4;
  } else if (style.rowSpan5) {
    rows = 5;
  } else if (style.rowSpan6) {
    rows = 6;
  } else if (style.rowSpan7) {
    rows = 7;
  } else if (style.rowSpan8) {
    rows = 8;
  } else if (style.rowSpan9) {
    rows = 9;
  } else if (style.rowSpan10) {
    rows = 10;
  } else if (style.rowSpan11) {
    rows = 11;
  } else if (style.rowSpan12) {
    rows = 12;
  }

  if (rows) {
    return `row-span-${rows}`;
  }

  return "";
};

export default useGridRowSpanStyle;
