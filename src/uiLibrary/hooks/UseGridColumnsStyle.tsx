import IPropGridColumns from "../interfaces/properties/IPropGridColumns";

const useGridColumnsStyle = (style: IPropGridColumns): string => {
  let columns = style.columns;

  if (style.columns1) {
    columns = 1;
  } else if (style.columns2) {
    columns = 2;
  } else if (style.columns3) {
    columns = 3;
  } else if (style.columns4) {
    columns = 4;
  } else if (style.columns5) {
    columns = 5;
  } else if (style.columns6) {
    columns = 6;
  } else if (style.columns7) {
    columns = 7;
  } else if (style.columns8) {
    columns = 8;
  } else if (style.columns9) {
    columns = 9;
  } else if (style.columns10) {
    columns = 10;
  } else if (style.columns11) {
    columns = 11;
  } else if (style.columns12) {
    columns = 12;
  }

  if (columns) {
    return `columns-${columns}`;
  }

  return "";
};

export default useGridColumnsStyle;
