import classNames from "classnames";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import { useUiContext } from "../../../context/UiContext";

type IProperties = IPropChildren;

const UILayoutSideHost: React.FC<IProperties> = ({ children }) => {
  const { uiState } = useUiContext();

  const leftOpen = uiState.panelLeftOpen;
  const rightOpen = uiState.panelRightOpen;

  const classNameLeft = classNames("ui-layout-side-panels-left", leftOpen ? "open" : "");
  const classNameCenter = classNames("ui-layout-side-panels-detail", leftOpen ? "left-open" : "", rightOpen ? "right-open" : "");
  const classNameRight = classNames("ui-layout-side-panels-right", rightOpen ? "open" : "");

  return (
    <div className="ui-layout-side-panels-host">
      <div className={classNameLeft}></div>
      <div className={classNameCenter}>{children}</div>
      <div className={classNameRight}></div>
    </div>
  );
};

export default UILayoutSideHost;
