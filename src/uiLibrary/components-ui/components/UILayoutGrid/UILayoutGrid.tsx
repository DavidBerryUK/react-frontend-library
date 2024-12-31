import classNames from "classnames";
import React from "react";
import useGridColGapStyle from "../../../hooks/UseGridColGapStyle";
import useGridColumnsStyle from "../../../hooks/UseGridColumnsStyle";
import useGridRowGapStyle from "../../../hooks/UseGridRowGapStyle";
import IPropertiesLayoutGrid from "../../../interfaces/controls/ILayoutGridProperties";
import UseGridAlignmentStyle from "../../../hooks/UseGridAlignmentStyle";

const UILayoutGrid: React.FC<IPropertiesLayoutGrid> = (props) => {
  const columnsClassName = useGridColumnsStyle(props);
  const rowClassName = useGridRowGapStyle(props);
  const colGapClassName = useGridColGapStyle(props);
  const alignmentClassName = UseGridAlignmentStyle(props);

  const className = classNames("ui-layout-grid ", alignmentClassName, columnsClassName, colGapClassName, rowClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutGrid;
