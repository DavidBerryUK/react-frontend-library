import classNames from "classnames";
import React from "react";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import { ISelectProperties } from "../../../interfaces/controls/ISelectProperties";

const UISelect: React.FC<ISelectProperties> = (props) => {
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
