import classNames from "classnames";
import ILayoutContainerProps from "../../../interfaces/controls/ILayoutContainerProperties";
import useMarginStyle from "../../../hooks/UseMarginStyle";
import usePaddingStyle from "../../../hooks/UsePaddingStyle";
import UsePaletteStyle from "../../../hooks/UsePaletteStyle";
import useroundingStyle from "../../../hooks/UseroundingStyle";

const UILayoutContainer: React.FC<ILayoutContainerProps> = (props) => {
  const paddingClassName = usePaddingStyle(props);
  const marginClassName = useMarginStyle(props);
  const paletteClassName = UsePaletteStyle(props);
  const roundingClassName = useroundingStyle(props);
  const fillClassName = props.fill ? "fill" : "";

  const className = classNames("ui-layout-container", fillClassName, roundingClassName, marginClassName, paddingClassName, paletteClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutContainer;
