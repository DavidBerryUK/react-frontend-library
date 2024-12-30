import IPropGridColGap from "../interfaces/properties/IPropGridColGap";

const useGridColGapStyle = (style: IPropGridColGap): string => {
  let colGap = style.colGap;

  if (style.colGap1) {
    colGap = 1;
  } else if (style.colGap2) {
    colGap = 2;
  } else if (style.colGap3) {
    colGap = 3;
  } else if (style.colGap4) {
    colGap = 4;
  } else if (style.colGap5) {
    colGap = 5;
  } else if (style.colGap6) {
    colGap = 6;
  } else if (style.colGap7) {
    colGap = 7;
  } else if (style.colGap8) {
    colGap = 8;
  } else if (style.colGap9) {
    colGap = 9;
  } else if (style.colGap10) {
    colGap = 10;
  } else if (style.colGap11) {
    colGap = 11;
  } else if (style.colGap12) {
    colGap = 12;
  }

  if (colGap) {
    return `column-gap-${colGap}`;
  }

  return "";
};

export default useGridColGapStyle;
