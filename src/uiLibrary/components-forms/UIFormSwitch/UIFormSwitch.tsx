import IFormSwitchProperties from "../../interfaces/controls/IFormSwitchProperties";
import UIFormControlWrapper from "../base/UIFormBase/UIFormControlWrapper";
import UISwitch from "../../components-ui/components/UISwitch/UISwitch";

const UIFormSwitch: React.FC<IFormSwitchProperties> = (props) => {
  if (!props.value.active) {
    return null;
  }

  /**
   * EVENT HANDLERS
   */
  const handleOnChangeEvent = (value: boolean) => {
    if (props.onChange) {
      props.onChange(props.value.cloneWithValue(!props.value.valueAsBoolean!));
    }
  };

  return (
    <UIFormControlWrapper {...props}>
      <UISwitch {...props} value={props.value.valueAsBoolean!} onChange={handleOnChangeEvent} />
    </UIFormControlWrapper>
  );
};

export default UIFormSwitch;
