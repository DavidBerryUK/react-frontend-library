import classNames from "classnames";
import React from "react";
import useGridColGapStyle from "../../../hooks/UseGridColGapStyle";
import useGridColumnsStyle from "../../../hooks/UseGridColumnsStyle";
import useGridRowGapStyle from "../../../hooks/UseGridRowGapStyle";
import IPropertiesLayoutGrid from "../../../interfaces/controls/ILayoutGridProperties";

const UILayoutGrid: React.FC<IPropertiesLayoutGrid> = (props) => {
  const columnsClassName = useGridColumnsStyle(props);
  const columnRowClassName = useGridRowGapStyle(props);
  const columnGapClassName = useGridColGapStyle(props);

  const className = classNames("ui-layout-grid", columnsClassName, columnGapClassName, columnRowClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutGrid;
