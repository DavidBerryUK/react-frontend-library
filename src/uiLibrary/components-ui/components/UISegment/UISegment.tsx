import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import OptionModel from "./models/OptionModel";
import React from "react";
import UISegmentButton from "./UISegmentButton";
import useViewController from "./hooks/useViewController";

interface IOptions {
  options: Array<OptionModel<any>>;
  selected: OptionModel<any>;
}

export type IProperties = IPropColor & IPropDisabled & IPropOnChange<OptionModel<string>> & IOptions;

/**
 * Common Text Field
 * @param props
 * @returns
 */
const UISegment: React.FC<IProperties> = (props) => {
  const { className, handleOnKeyDownEvent, handleOnButtonClickEvent } = useViewController(props);

  return (
    <div role="button" tabIndex={0} className={className} onKeyDown={handleOnKeyDownEvent}>
      {props.options.map((option) => (
        <UISegmentButton key={option.key} option={option} selected={props.selected} onClick={handleOnButtonClickEvent} />
      ))}
    </div>
  );
};

export default UISegment;
