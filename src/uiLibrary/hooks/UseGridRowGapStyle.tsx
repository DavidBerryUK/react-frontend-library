import IPropGridRowGap from "../interfaces/properties/IPropGridRowGap";

const useGridRowGapStyle = (style: IPropGridRowGap): string => {
  let rowGap = style.rowGap;

  if (style.rowGap1) {
    rowGap = 1;
  } else if (style.rowGap2) {
    rowGap = 2;
  } else if (style.rowGap3) {
    rowGap = 3;
  } else if (style.rowGap4) {
    rowGap = 4;
  } else if (style.rowGap5) {
    rowGap = 5;
  } else if (style.rowGap6) {
    rowGap = 6;
  } else if (style.rowGap7) {
    rowGap = 7;
  } else if (style.rowGap8) {
    rowGap = 8;
  } else if (style.rowGap9) {
    rowGap = 9;
  } else if (style.rowGap10) {
    rowGap = 10;
  } else if (style.rowGap11) {
    rowGap = 11;
  } else if (style.rowGap12) {
    rowGap = 12;
  }

  if (rowGap) {
    return `row-gap-${rowGap}`;
  }

  return "";
};

export default useGridRowGapStyle;
