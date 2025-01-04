import classNames from "classnames";
import React from "react";
import useLayoutColGapStyle from "../../../hooks/UseLayoutColGapStyle";
import useLayoutColumnsStyle from "../../../hooks/UseLayoutColumnsStyle";
import useLayoutRowGapStyle from "../../../hooks/UseLayoutRowGapStyle";
import IPropertiesLayoutGrid from "../../../interfaces/controls/ILayoutGridProperties";
import UseLayoutAlignmentStyle from "../../../hooks/UseLayoutAlignmentStyle";

const UILayoutGrid: React.FC<IPropertiesLayoutGrid> = (props) => {
  const columnsClassName = useLayoutColumnsStyle(props);
  const rowGapClassName = useLayoutRowGapStyle(props);
  const colGapClassName = useLayoutColGapStyle(props);
  const alignmentClassName = UseLayoutAlignmentStyle(props);

  const className = classNames("ui-layout-grid ", alignmentClassName, columnsClassName, colGapClassName, rowGapClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutGrid;
