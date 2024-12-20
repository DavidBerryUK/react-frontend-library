/**
 * very simple test child control used for testing rendering
 * @returns
 */

import { ReactNode } from "react";
import classNames from "classnames";

interface IProperties {
  columns: number;
  children: ReactNode;
}

const TestFlexGrid: React.FC<IProperties> = (props) => {
  let columnClass = `sb-cols-${props.columns}`;

  const className = classNames("sb-flex-grid", columnClass);

  return <div className={className}>{props.children}</div>;
};

export default TestFlexGrid;
