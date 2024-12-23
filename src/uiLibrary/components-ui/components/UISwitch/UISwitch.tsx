import React from "react";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";
import ConstKeyboardKeys from "../../../constants/ConstKeyboardKeys";
import ISwitchProperties from "../../../interfaces/controls/ISwitchProperties";

const UISwitch: React.FC<ISwitchProperties> = (props) => {
  var variantClass = useVariantStyle("swt", props);

  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      event.stopPropagation();
      props.onChange(!props.value);
    }
  };

  const handleOnKeyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.onChange) {
      if (event.key === ConstKeyboardKeys.arrowLeft && props.value === true) {
        props.onChange(false);
      }

      if (event.key === ConstKeyboardKeys.arrowRight && props.value === false) {
        props.onChange(true);
      }
    }
  };

  const className = classNames("ui-switch", variantClass);

  return (
    <div className={className}>
      <div>
        <input
          type="checkbox"
          checked={props.value} // Strictly controlled
          onChange={handleOnChangeEvent}
          onKeyDown={handleOnKeyDownEvent}
          disabled={props.disabled} // Handle disabled state
        />
        <span></span>
      </div>
    </div>
  );
};

export default UISwitch;
