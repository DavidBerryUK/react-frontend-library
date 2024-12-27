import classNames from "classnames";
import ILabelProperties from "../../interfaces/controls/ILabelProperties";

/**
 * Common Text Field
 * @param props
 * @returns
 */
const UIFormLabel: React.FC<ILabelProperties> = (props) => {
  const className = classNames("ui-fc-label", props.className);
  return (
    <label htmlFor={props.value.fieldName} aria-label={props.value.caption} className={className}>
      {props.value.caption}
    </label>
  );
};

export default UIFormLabel;
