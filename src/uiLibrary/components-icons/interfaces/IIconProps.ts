import IPropColor from "../../components-ui/interfaces/properties/IPropColor";
import IPropSizeExtended from "../../components-ui/interfaces/properties/IPropSizeExtended";

type IIconProps = IPropColor &
  IPropSizeExtended &
  IPropColor & {
    color?: string;
  }
  & {
    testId?: string
  }

export default IIconProps;
