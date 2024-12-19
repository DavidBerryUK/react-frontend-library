import classNames from "classnames";
import OptionModel from "./models/OptionModel";

interface IButtonProperties {
  option: OptionModel;
  selected: OptionModel;
  className: string;
  onClick: (value: OptionModel) => void;
}

const UISegmentButton: React.FC<IButtonProperties> = (props) => {
  const classNameStandard =
    "-ms-px inline-flex items-center gap-x-2 border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 first:ms-0 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-50 focus:z-10 focus:bg-gray-50 focus:outline-none ";

  const classNameSelected = classNames(
    props.className,
    "-ms-px inline-flex items-center gap-x-2 border px-4 py-3 text-sm font-medium  first:ms-0 first:rounded-s-lg last:rounded-e-lg  focus:z-10 focus:outline-none ",
  );

  const handleOnButtonClickedEvent = () => {
    props.onClick(props.option);
  };

  return (
    <button type="button" className={props.option.text === props.selected.text ? classNameSelected : classNameStandard} onClick={handleOnButtonClickedEvent}>
      {props.option.text}
    </button>
  );
};

export default UISegmentButton;
