import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import OptionModel from "./models/OptionModel";
import React from "react";
import UISegmentButton from "./UISegmentButton";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";
import ConstKeyboardKeys from "../../../constants/ConstKeyboardKeys";

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

  const handleOnKeyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = props.options.findIndex((option) => option.text === props.selected.text);

    if (currentIndex === -1) {
      return;
    }

    let newIndex = currentIndex;

    if (event.key === ConstKeyboardKeys.arrowLeft) {
      newIndex = (currentIndex - 1 + props.options.length) % props.options.length;
    }

    if (event.key === ConstKeyboardKeys.arrowRight) {
      newIndex = (currentIndex + 1) % props.options.length;
    }

    if (newIndex !== currentIndex) {
      if (props.onChange) {
        props.onChange(props.options[newIndex]);
      }
    }
  };

  return (
    <div role="button" tabIndex={0} className={className} onKeyDown={handleOnKeyDownEvent}>
      {props.options.map((option) => (
        <UISegmentButton key={option.text} option={option} selected={props.selected} onClick={handleOnButtonClickEvent} />
      ))}
    </div>
  );
};

export default UISegment;
