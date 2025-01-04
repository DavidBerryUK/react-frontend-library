import classNames from "classnames";
import IGridCellProperties from "../../../interfaces/controls/IGridCellProperties";
import React from "react";
import useLayoutColumnSpanStyle from "../../../hooks/UseLayoutColumnSpanStyle";
import useLayoutRowSpanStyle from "../../../hooks/UseLayoutRowSpanStyle";

const UIGridCell: React.FC<IGridCellProperties> = (props) => {
  let columnSpanClassName = useLayoutColumnSpanStyle(props);
  let rowSpanClassName = useLayoutRowSpanStyle(props);

  const className = classNames("ui-grid-cell", columnSpanClassName, rowSpanClassName);

  return <div className={className}>{props.children}</div>;
};

export default UIGridCell;
