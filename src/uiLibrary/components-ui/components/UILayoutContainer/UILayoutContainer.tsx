import classNames from "classnames";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import IPropPadding from "../../../interfaces/properties/IPropPadding";
import IPropPaletteColour from "../../../interfaces/properties/IPropPaletteColour";
import IPropPaletteShade from "../../../interfaces/properties/IPropPaletteShade";
import IPropRounded from "../../../interfaces/properties/IPropRounded";
import IPropsMargin from "../../../interfaces/properties/IPropMargin";
import useMarginStyle from "../../../hooks/UseMarginStyle";
import usePaddingStyle from "../../../hooks/UsePaddingStyle";
import UsePaletteStyle from "../../../hooks/UsePaletteStyle";

type ILayoutContainerProps = IPropChildren & IPropsMargin & IPropPadding & IPropRounded & IPropPaletteColour & IPropPaletteShade;

const UILayoutContainer: React.FC<ILayoutContainerProps> = (props) => {
  const style = props;

  // Padding and Margin Classes
  const paddingClassName = usePaddingStyle(props);
  const marginClassName = useMarginStyle(props);
  const paletteClassName = UsePaletteStyle(props);

  // Background color
  const backgroundColorClassName = style.backgroundColor && `bg-${style.backgroundColor}`;

  // Border radius
  const radiusClassName =
    (style.rounded1 && "rounded-1") ||
    (style.rounded2 && "rounded-2") ||
    (style.rounded3 && "rounded-3") ||
    (style.rounded4 && "rounded-4") ||
    (style.rounded5 && "rounded-5") ||
    (style.roudned6 && "rounded-6") ||
    (style.roudned7 && "rounded-7") ||
    (style.roudned8 && "rounded-8") ||
    (style.rounded && `rounded-${style.rounded}`) ||
    "";

  const className = classNames("ui-layout-container", backgroundColorClassName, radiusClassName, marginClassName, paddingClassName, paletteClassName);

  return <div className={className}>{props.children}</div>;
};

export default UILayoutContainer;
