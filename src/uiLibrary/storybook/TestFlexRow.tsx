/**
 * very simple test child control used for testing rendering
 * @returns
 */

import { ReactNode } from "react";

interface IProperties {
  children: ReactNode;
}

const TestFlexRow: React.FC<IProperties> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "2px",
        rowGap: "2px",
        justifyContent: "flex-start",
      }}
    >
      {props.children}
    </div>
  );
};

export default TestFlexRow;
