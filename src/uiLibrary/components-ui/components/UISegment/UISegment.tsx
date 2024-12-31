import ISegmentProperties from "../../../interfaces/controls/ISegmentProperties";
import React from "react";
import UISegmentButton from "./UISegmentButton";
import useViewController from "./hooks/useViewController";

/**
 * Common Text Field
 * @param props
 * @returns
 */
const UISegment: React.FC<ISegmentProperties> = (props) => {
  const { className, handleOnKeyDownEvent, handleOnButtonClickEvent } = useViewController(props);

  if (props.options === undefined) {
    return null;
  }

  return (
    <div role="button" tabIndex={0} className={className} onKeyDown={handleOnKeyDownEvent}>
      {props.options.map((option) => (
        <UISegmentButton key={option.key} option={option} selected={props.selected!} onClick={handleOnButtonClickEvent} />
      ))}
    </div>
  );
};

export default UISegment;
