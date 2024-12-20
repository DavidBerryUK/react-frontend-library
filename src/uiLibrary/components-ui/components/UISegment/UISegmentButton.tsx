import classNames from "classnames";
import OptionModel from "./models/OptionModel";

interface IButtonProperties {
  option: OptionModel;
  selected: OptionModel;

  onClick: (value: OptionModel) => void;
}

const UISegmentButton: React.FC<IButtonProperties> = (props) => {
  const selectedClassName = props.selected.text === props.option.text ? "selected" : "";

  const className = classNames("ui-segment-button", selectedClassName);

  const handleOnButtonClickedEvent = () => {
    props.onClick(props.option);
  };

  return (
    <button type="button" className={className} onClick={handleOnButtonClickedEvent}>
      {props.option.text}
    </button>
  );
};

export default UISegmentButton;
