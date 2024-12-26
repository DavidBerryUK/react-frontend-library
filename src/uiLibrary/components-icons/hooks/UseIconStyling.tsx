import classNames from "classnames";
import EnumIconSvgStyle from "../enum/EnumIconSvgStyle";
import IIconProps from "../interfaces/IIconProps";
import useExtendedSizeStyle from "../../hooks/UseExtendedSizeStyle";
import useVariantStyle from "../../hooks/UseVariantStyle";
import UseShadeStyle from "../../hooks/UseShadeStyle";

const useIconStyling = (props: IIconProps, svgStyle: EnumIconSvgStyle) => {
  var color = props.color ?? "currentColor";
  var colorClassName = useVariantStyle("ic", props);
  var sizeClassName = useExtendedSizeStyle("ic", props);
  var shadeClassName = UseShadeStyle("ic", props);

  var className = classNames("ui-icon", colorClassName, shadeClassName, sizeClassName);

  return {
    color,
    className,
  };
};

export default useIconStyling;
