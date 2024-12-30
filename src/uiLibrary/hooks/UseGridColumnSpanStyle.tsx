import IPropGridColSpan from "../interfaces/properties/IPropGridColSpan";

const useGridColumnSpanStyle = (style: IPropGridColSpan): string => {
  let columns = style.columnSpan;

  if (style.colSpan1) {
    columns = 1;
  } else if (style.colSpan2) {
    columns = 2;
  } else if (style.colSpan3) {
    columns = 3;
  } else if (style.colSpan4) {
    columns = 4;
  } else if (style.colSpan5) {
    columns = 5;
  } else if (style.colSpan6) {
    columns = 6;
  } else if (style.colSpan7) {
    columns = 7;
  } else if (style.colSpan8) {
    columns = 8;
  } else if (style.colSpan9) {
    columns = 9;
  } else if (style.colSpan10) {
    columns = 10;
  } else if (style.colSpan11) {
    columns = 11;
  } else if (style.colSpan12) {
    columns = 12;
  }
  if (columns) {
    return `column-span-${columns}`;
  }

  return "";
};

export default useGridColumnSpanStyle;
