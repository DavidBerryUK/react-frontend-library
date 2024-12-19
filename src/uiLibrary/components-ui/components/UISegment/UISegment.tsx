import FactoryThemeVariants from "../../styles/factories/FactoryThemeVariants";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import OptionModel from "./models/OptionModel";
import React from "react";

import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import UISegmentButton from "./UISegmentButton";

interface IOptions {
  options: Array<OptionModel>;
  selected: OptionModel;
}
type IProperties = IPropColor & IPropDisabled & IPropOnChange<OptionModel> & IOptions;

/**
 * Common Text Field
 * @param props
 * @returns
 */
const UISegment: React.FC<IProperties> = (props) => {
  const variant = FactoryThemeVariants.getColorModel(props);
  const buttonStyle = props.disabled ? variant.button.standardDisabled : variant.button.standard;

  const handleOnButtonClickEvent = (value: OptionModel) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div className="inline-flex rounded-lg">
      {props.options.map((option) => (
        <UISegmentButton option={option} selected={props.selected} className={buttonStyle} onClick={handleOnButtonClickEvent} />
      ))}
    </div>
  );
};

export default UISegment;
