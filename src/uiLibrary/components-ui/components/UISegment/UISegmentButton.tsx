import classNames from "classnames";
import OptionModel from "./models/OptionModel";

interface IButtonProperties {
  option: OptionModel<any>;
  selected: OptionModel<any>;

  onClick: (value: OptionModel<any>) => void;
}

const UISegmentButton: React.FC<IButtonProperties> = (props) => {
  const selectedClassName = props.selected?.text === props.option.text ? "selected" : "";

  // console.log(`Rendering Button ${props.option?.text}  selectedOption:${props.selected?.data}`);

  const className = classNames("ui-segment-button", selectedClassName);

  const handleOnButtonClickedEvent = () => {
    props.onClick(props.option);
  };

  return (
    <div role="tab" className={className} data-testid={props.option.key} onClick={handleOnButtonClickedEvent}>
      {props.option.text}
    </div>
  );
};

export default UISegmentButton;
