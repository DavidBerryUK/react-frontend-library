import React from "react";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import classNames from "classnames";

interface IPropGridColumns {
  columns?: number;

  columns1?: boolean;
  columns2?: boolean;
  columns3?: boolean;
  columns4?: boolean;
  columns5?: boolean;
  columns6?: boolean;
  columns7?: boolean;
  columns8?: boolean;
  columns9?: boolean;
  columns10?: boolean;
  columns11?: boolean;
  columns12?: boolean;
}

interface IPropGridGap {
  //
  //
  colGap?: number;
  colGap1?: boolean;
  colGap2?: boolean;
  colGap3?: boolean;
  colGap4?: boolean;
  colGap5?: boolean;
  colGap6?: boolean;
  colGap7?: boolean;
  colGap8?: boolean;
  colGap9?: boolean;
  colGap10?: boolean;
  colGap11?: boolean;
  colGap12?: boolean;
  //
  //
  rowGap?: number;
  rowGap1?: boolean;
  rowGap2?: boolean;
  rowGap3?: boolean;
  rowGap4?: boolean;
  rowGap5?: boolean;
  rowGap6?: boolean;
  rowGap7?: boolean;
  rowGap8?: boolean;
  rowGap9?: boolean;
  rowGap10?: boolean;
  rowGap11?: boolean;
  rowGap12?: boolean;
}

type IPropertiesLayoutGrid = IPropChildren & IPropGridColumns & IPropGridGap;

const UILayoutGrid: React.FC<IPropertiesLayoutGrid> = (props) => {
  let columnsClassName = "";
  let columnGapClassName = "";
  let columnRowClassName = "";

  let columns = props.columns;
  let colGap = props.colGap;
  let rowGap = props.rowGap;

  // Map colSpan props to columnSpan value
  if (props.columns1) {
    columns = 1;
  } else if (props.columns2) {
    columns = 2;
  } else if (props.columns3) {
    columns = 3;
  } else if (props.columns4) {
    columns = 4;
  } else if (props.columns5) {
    columns = 5;
  } else if (props.columns6) {
    columns = 6;
  } else if (props.columns7) {
    columns = 7;
  } else if (props.columns8) {
    columns = 8;
  } else if (props.columns9) {
    columns = 9;
  } else if (props.columns10) {
    columns = 10;
  } else if (props.columns11) {
    columns = 11;
  } else if (props.columns12) {
    columns = 12;
  }

  //

  if (props.colGap1) {
    colGap = 1;
  } else if (props.colGap2) {
    colGap = 2;
  } else if (props.colGap3) {
    colGap = 3;
  } else if (props.colGap4) {
    colGap = 4;
  } else if (props.colGap5) {
    colGap = 5;
  } else if (props.colGap6) {
    colGap = 6;
  } else if (props.colGap7) {
    colGap = 7;
  } else if (props.colGap8) {
    colGap = 8;
  } else if (props.colGap9) {
    colGap = 9;
  } else if (props.colGap10) {
    colGap = 10;
  } else if (props.colGap11) {
    colGap = 11;
  } else if (props.colGap12) {
    colGap = 12;
  }

  if (props.rowGap1) {
    rowGap = 1;
  } else if (props.rowGap2) {
    rowGap = 2;
  } else if (props.rowGap3) {
    rowGap = 3;
  } else if (props.rowGap4) {
    rowGap = 4;
  } else if (props.rowGap5) {
    rowGap = 5;
  } else if (props.rowGap6) {
    rowGap = 6;
  } else if (props.rowGap7) {
    rowGap = 7;
  } else if (props.rowGap8) {
    rowGap = 8;
  } else if (props.rowGap9) {
    rowGap = 9;
  } else if (props.rowGap10) {
    rowGap = 10;
  } else if (props.rowGap11) {
    rowGap = 11;
  } else if (props.rowGap12) {
    rowGap = 12;
  }

  if (columns) {
    columnsClassName = `columns-${columns}`;
  }

  if (colGap) {
    columnGapClassName = `column-gap-${colGap}`;
  }

  if (rowGap) {
    columnRowClassName = `row-gap-${rowGap}`;
  }

  const className = classNames("ui-layout-grid", columnsClassName, columnGapClassName, columnRowClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutGrid;
