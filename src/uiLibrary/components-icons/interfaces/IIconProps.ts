import IPropColor from "../../interfaces/properties/IPropColor";
import IPropShade from "../../interfaces/properties/IPropShade";
import IPropSizeExtended from "../../interfaces/properties/IPropSizeExtended";

type IIconProps = IPropColor &
  IPropSizeExtended &
  IPropColor &
  IPropShade & {
    color?: string;
  } & {
    testId?: string;
  };

export default IIconProps;
