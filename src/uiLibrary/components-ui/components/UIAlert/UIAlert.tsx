import React from "react";
import IAlertProperties from "../../interfaces/controls/IAlertProperties";
import useViewController from "./hooks/UseViewController";

/**
 * Common alert box
 * @param props
 * @returns
 */
const UIAlert: React.FC<IAlertProperties> = (props) => {
  const { className } = useViewController(props);
  return <div className={className} data-testid={props.testId}>{props.children}</div>;
};

export default UIAlert;
