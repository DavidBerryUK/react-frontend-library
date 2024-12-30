import classNames from "classnames";
import IGridCellProperties from "../../../interfaces/controls/IGridCellProperties";
import React from "react";
import useGridColumnSpanStyle from "../../../hooks/UseGridColumnSpanStyle";
import useGridRowSpanStyle from "../../../hooks/UseGridRowSpanStyle";

const UIGridCell: React.FC<IGridCellProperties> = (props) => {
  let columnSpanClassName = useGridColumnSpanStyle(props);
  let rowSpanClassName = useGridRowSpanStyle(props);

  const className = classNames("ui-grid-cell", columnSpanClassName, rowSpanClassName);

  return <div className={className}>{props.children}</div>;
};

export default UIGridCell;
