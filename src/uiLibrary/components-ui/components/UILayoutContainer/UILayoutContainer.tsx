import classNames from "classnames";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import IPropsMargin from "../../../interfaces/properties/IPropMargin";
import IPropsPadding from "../../../interfaces/properties/IPropPadding";
import IPropsRadius from "../../../interfaces/properties/IPropRadius";
import useMarginStyle from "../../../hooks/UseMarginStyle";
import usePaddingStyle from "../../../hooks/UsePaddingStyle";

type ILayoutContainerProps = IPropChildren & IPropsMargin & IPropsPadding & IPropsRadius;

const UILayoutContainer: React.FC<ILayoutContainerProps> = (props) => {
  const style = props;

  const paddingClassName = usePaddingStyle(props);
  const marginClassName = useMarginStyle(props);

  // Background color
  const backgroundColorClassName = style.backgroundColor && `bg-${style.backgroundColor}`;

  // Border radius
  const radiusClassName =
    (style.radius1 && "radius-1") ||
    (style.radius2 && "radius-2") ||
    (style.radius3 && "radius-3") ||
    (style.radius4 && "radius-4") ||
    (style.radius5 && "radius-5") ||
    (style.radius6 && "radius-6") ||
    (style.radius && `radius-${style.radius}`) ||
    "";

  const className = classNames("ui-layout-container", backgroundColorClassName, radiusClassName, marginClassName, paddingClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutContainer;
