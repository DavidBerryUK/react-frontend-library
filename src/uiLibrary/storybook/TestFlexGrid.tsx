/**
 * very simple test child control used for testing rendering
 * @returns
 */

import { ReactNode } from "react";

interface IProperties {
  columns: number;
  children: ReactNode;
}

const TestFlexGrid: React.FC<IProperties> = (props) => {
  let columnClass = "";

  switch (props.columns) {
    case 2:
      columnClass = "grid-cols-2";
      break;
    case 3:
      columnClass = "grid-cols-3";
      break;
    case 4:
      columnClass = "grid-cols-4";
      break;
    case 5:
      columnClass = "grid-cols-5";
      break;
    case 6:
      columnClass = "grid-cols-6";
      break;
    case 7:
      columnClass = "grid-cols-7";
      break;
    case 8:
      columnClass = "grid-cols-8";
      break;
    case 9:
      columnClass = "grid-cols-9";
      break;
    case 10:
      columnClass = "grid-cols-10";
      break;
    default:
      columnClass = "grid-cols-4";
  }

  return <div className={`grid ${columnClass} mb-8 items-center gap-4`}>{props.children}</div>;
};

export default TestFlexGrid;
