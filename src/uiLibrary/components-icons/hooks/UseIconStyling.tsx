import classNames from "classnames";
import EnumIconSvgStyle from "../enum/EnumIconSvgStyle";
import IIconProps from "../interfaces/IIconProps";
import useExtendedSizeStyle from "../../hooks/UseExtendedSizeStyle";
import useVariantStyle from "../../hooks/UseVariantStyle";

const useIconStyling = (props: IIconProps, svgStyle: EnumIconSvgStyle) => {
  var color = props.color ?? "currentColor";
  var variantClass = useVariantStyle("ic", props);
  var sizeVariant = useExtendedSizeStyle("ic", props);
  var className = classNames("ui-icon", variantClass, sizeVariant);

  return {
    color,
    className,
  };
};

export default useIconStyling;
