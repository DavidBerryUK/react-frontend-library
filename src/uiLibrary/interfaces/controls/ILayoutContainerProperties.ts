import IPropChildren from "../properties/IPropChildren";
import IPropPadding from "../properties/IPropPadding";
import IPropPaletteColour from "../properties/IPropPaletteColour";
import IPropPaletteShade from "../properties/IPropPaletteShade";
import IPropRounded from "../properties/IPropRounded";
import IPropsMargin from "../properties/IPropMargin";

type ILayoutContainerProps = IPropChildren &
  IPropsMargin &
  IPropPadding &
  IPropRounded &
  IPropPaletteColour &
  IPropPaletteShade & {
    fill?: boolean;
  };

export default ILayoutContainerProps;
