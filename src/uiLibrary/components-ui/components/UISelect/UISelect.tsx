import classNames from "classnames";
import React from "react";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import { ISelectProperties } from "../../../interfaces/controls/ISelectProperties";
import OptionModel from "../UISegment/models/OptionModel";

const UISelect: React.FC<ISelectProperties> = (props) => {
  /**
   * Handle event when user chooses a new option
   * @param event - from select element
   */
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    const selectedOption = props.options?.find((option) => option.key === selectedKey);
    if (props.onChange) {
      props.onChange(selectedOption); // Call onChange handler with the selected OptionModel
    }
  };

  const variantClassName = useVariantStyle("sel", props);
  const className = classNames("ui-select", variantClassName);
  if (props.options === undefined) {
    props.options = new Array<OptionModel<string>>();
  }

  return (
    <select className={className} onChange={handleOnChangeEvent} value={props.selected?.key} disabled={props.disabled}>
      <option key="NoSelection" data-testid="NoSelection" value="">
        Select an option
      </option>

      {props.options.map((option) => (
        <option key={option.key} data-testid={option.key} value={option.key}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default UISelect;
