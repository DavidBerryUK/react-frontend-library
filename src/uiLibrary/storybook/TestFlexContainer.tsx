/**
 * very simple test child control used for testing rendering
 * @returns
 */

import { ReactNode } from "react";

interface IProperties {
  children: ReactNode;
}

const TestFlexContainer: React.FC<IProperties> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: 800,
        rowGap: "2px",
      }}
    >
      {props.children}
    </div>
  );
};

export default TestFlexContainer;
