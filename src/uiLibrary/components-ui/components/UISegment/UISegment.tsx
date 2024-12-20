import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import OptionModel from "./models/OptionModel";
import React from "react";
import UISegmentButton from "./UISegmentButton";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";

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
  const variantClassName = useVariantStyle("sg", props);
  const className = classNames("ui-segment", variantClassName);

  const handleOnButtonClickEvent = (value: OptionModel) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  return (
    <div className={className}>
      {props.options.map((option) => (
        <UISegmentButton option={option} selected={props.selected} onClick={handleOnButtonClickEvent} />
      ))}
    </div>
  );
};

export default UISegment;
