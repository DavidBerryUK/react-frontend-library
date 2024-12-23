import classNames from "classnames";
import React from "react";
import useSizeStyle from "../../../hooks/UseSizeStyle";
import useStyleOutlined from "../../../hooks/UseOutlinedStyle";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import IButtonProperties from "../../../interfaces/controls/IButtonProperties";

/**
 * Common button
 * @param props
 * @returns
 */
const UIButton: React.FC<IButtonProperties> = (props) => {
  var variantClass = useVariantStyle("btn", props);
  var sizeClass = useSizeStyle("btn", props);
  var outlinedClass = useStyleOutlined("btn", props);
  var className = classNames("ui-button", variantClass, sizeClass, outlinedClass);

  const handleOnClickEvent = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className={className} disabled={props.disabled} aria-label={props.text} onClick={handleOnClickEvent} data-testid={props.testId}>
      {props.text}
    </button>
  );
};

export default UIButton;
