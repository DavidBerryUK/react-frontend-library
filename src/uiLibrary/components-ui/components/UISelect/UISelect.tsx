import React from "react";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import OptionModel from "../UISegment/models/OptionModel";
import classNames from "classnames";
import useVariantStyle from "../../../hooks/UseVariantStyle";

interface IOptions {
  options: Array<OptionModel<any>>;
  selected: OptionModel<any>;
}

export type IProperties = IPropColor & IPropDisabled & IPropOnChange<OptionModel<any>> & IOptions & IPropColor;

const UISelect: React.FC<IProperties> = (props) => {
  /**
   * Handle event when user chooses a new option
   * @param event - from select element
   */
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    const selectedOption = props.options.find((option) => option.key === selectedKey);
    if (selectedOption && props.onChange) {
      props.onChange(selectedOption); // Call onChange handler with the selected OptionModel
    }
  };

  const variantClassName = useVariantStyle("sel", props);
  const className = classNames("ui-select", variantClassName);

  return (
    <select className={className} onChange={handleOnChangeEvent} value={props.selected?.key} disabled={props.disabled}>
      {props.options.map((option) => (
        <option key={option.key} data-testid={option.key} value={option.key}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default UISelect;
