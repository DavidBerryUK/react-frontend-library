import classNames from "classnames";
import IAlertProperties from "../../../../interfaces/controls/IAlertProperties";
import useSizeStyle from "../../../../hooks/UseSizeStyle";
import useVariantStyle from "../../../../hooks/UseVariantStyle";

const useViewController = (props: IAlertProperties) => {
  var shadeClass = "";
  var bordeClass = "";
  var sizeClass = useSizeStyle("al", props);

  // Colour
  var variantClass = useVariantStyle("al", props);

  // Shade

  if (props.lighter) {
    shadeClass = "lighter";
  } else if (props.darker) {
    shadeClass = "darker";
  }

  //
  // Border
  //
  if (props.bordered) {
    bordeClass = "al-border";
  } else if (props.borderedLeft) {
    bordeClass = "al-border-left";
  } else if (props.borderedRight) {
    bordeClass = "al-border-right";
  } else if (props.borderedTop) {
    bordeClass = "al-border-top";
  } else if (props.borderedBottom) {
    bordeClass = "al-border-bottom";
  }

  var className = classNames("ui-alert", variantClass, shadeClass, bordeClass, sizeClass);

  return {
    className,
  };
};

export default useViewController;
