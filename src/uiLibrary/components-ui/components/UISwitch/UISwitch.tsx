import React from "react";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropValue from "../../interfaces/properties/IPropValue";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropColor from "../../interfaces/properties/IPropColor";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";

type IProperties = IPropColor & IPropDisabled & IPropValue<boolean> & IPropOnChange<boolean>;

const UISwitch: React.FC<IProperties> = (props) => {
  var variantClass = useVariantStyle("swt", props);

  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      event.stopPropagation();
      props.onChange(!props.value);
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
          disabled={props.disabled} // Handle disabled state
        />
        <span></span>
      </div>
    </div>
  );
};

export default UISwitch;
