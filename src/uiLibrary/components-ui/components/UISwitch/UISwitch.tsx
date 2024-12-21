import React from "react";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropValue from "../../interfaces/properties/IPropValue";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";

type IProperties = IPropDisabled & IPropValue<boolean> & IPropOnChange<boolean>;

const UISwitch: React.FC<IProperties> = (props) => {
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      event.stopPropagation();
      props.onChange(!props.value);
    }
  };

  return (
    <div className="ui-switch-control">
      <div className="ui-switch">
        <input
          type="checkbox"
          checked={props.value} // Strictly controlled
          onChange={handleOnChangeEvent}
          disabled={props.disabled} // Handle disabled state
        />
        <span className="ui-switch-slider"></span>
      </div>
    </div>
  );
};

export default UISwitch;
