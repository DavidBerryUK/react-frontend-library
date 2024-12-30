import React from "react";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import classNames from "classnames";

interface IPropGridSpan {
  columnSpan?: number;
  rowSpan?: number;
  colSpan1?: boolean;
  colSpan2?: boolean;
  colSpan3?: boolean;
  colSpan4?: boolean;
  colSpan5?: boolean;
  colSpan6?: boolean;
  colSpan7?: boolean;
  colSpan8?: boolean;
  colSpan9?: boolean;
  colSpan10?: boolean;
  colSpan11?: boolean;
  colSpan12?: boolean;
  rowSpan1?: boolean;
  rowSpan2?: boolean;
  rowSpan3?: boolean;
  rowSpan4?: boolean;
  rowSpan5?: boolean;
  rowSpan6?: boolean;
  rowSpan7?: boolean;
  rowSpan8?: boolean;
  rowSpan9?: boolean;
  rowSpan10?: boolean;
  rowSpan11?: boolean;
  rowSpan12?: boolean;
}

type IPropertiesGridCell = IPropChildren & IPropGridSpan;

const UIGridCell: React.FC<IPropertiesGridCell> = (props) => {
  let columnSpanClassName = "";
  let rowSpanClassName = "";

  let columns = props.columnSpan;
  let rows = props.rowSpan;

  // Map colSpan props to columnSpan value
  if (props.colSpan1) {
    columns = 1;
  } else if (props.colSpan2) {
    columns = 2;
  } else if (props.colSpan3) {
    columns = 3;
  } else if (props.colSpan4) {
    columns = 4;
  } else if (props.colSpan5) {
    columns = 5;
  } else if (props.colSpan6) {
    columns = 6;
  } else if (props.colSpan7) {
    columns = 7;
  } else if (props.colSpan8) {
    columns = 8;
  } else if (props.colSpan9) {
    columns = 9;
  } else if (props.colSpan10) {
    columns = 10;
  } else if (props.colSpan11) {
    columns = 11;
  } else if (props.colSpan12) {
    columns = 12;
  }

  // Map rowSpan props to rowSpan value
  if (props.rowSpan1) {
    rows = 1;
  } else if (props.rowSpan2) {
    rows = 2;
  } else if (props.rowSpan3) {
    rows = 3;
  } else if (props.rowSpan4) {
    rows = 4;
  } else if (props.rowSpan5) {
    rows = 5;
  } else if (props.rowSpan6) {
    rows = 6;
  } else if (props.rowSpan7) {
    rows = 7;
  } else if (props.rowSpan8) {
    rows = 8;
  } else if (props.rowSpan9) {
    rows = 9;
  } else if (props.rowSpan10) {
    rows = 10;
  } else if (props.rowSpan11) {
    rows = 11;
  } else if (props.rowSpan12) {
    rows = 12;
  }

  // Generate class names based on columnSpan and rowSpan
  if (columns) {
    columnSpanClassName = `column-span-${columns}`;
  }

  if (rows) {
    rowSpanClassName = `row-span-${rows}`;
  }

  const className = classNames("ui-grid-cell", columnSpanClassName, rowSpanClassName);

  return <div className={className}>{props.children}</div>;
};

export default UIGridCell;
