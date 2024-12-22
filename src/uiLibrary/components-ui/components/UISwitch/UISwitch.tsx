import React from "react";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropValue from "../../interfaces/properties/IPropValue";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropColor from "../../interfaces/properties/IPropColor";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";
import ConstKeyboardKeys from "../../../constants/ConstKeyboardKeys";

type IProperties = IPropColor & IPropDisabled & IPropValue<boolean> & IPropOnChange<boolean>;

const UISwitch: React.FC<IProperties> = (props) => {
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
