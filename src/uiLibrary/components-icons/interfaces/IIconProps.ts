import IPropColor from "../../interfaces/properties/IPropColor";
import IPropSizeExtended from "../../interfaces/properties/IPropSizeExtended";

type IIconProps = IPropColor &
  IPropSizeExtended &
  IPropColor & {
    color?: string;
  } & {
    testId?: string;
  };

export default IIconProps;
