import classNames from "classnames";
import ConstKeyboardKeys from "../../../../constants/ConstKeyboardKeys";
import ISegmentProperties from "../../../../interfaces/controls/ISegmentProperties";
import OptionModel from "../models/OptionModel";
import useVariantStyle from "../../../../hooks/UseVariantStyle";

const useViewController = (props: ISegmentProperties) => {
  const variantClassName = useVariantStyle("sg", props);
  const className = classNames("ui-segment", variantClassName);

  const handleOnButtonClickEvent = (value: OptionModel<any>) => {
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

  return {
    className,
    handleOnButtonClickEvent,
    handleOnKeyDownEvent,
  };
};

export default useViewController;
