import classNames from "classnames";
import FieldModel from "../../models/fields/FieldModel";
import IPropColor from "../../../uiLibrary/interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/IPropDisabled";
import IPropOnChange from "../../interfaces/IPropOnChange";
import IPropValue from "../../interfaces/IPropValue";
import UIFormLabel from "../UIFormLabel/UIFormLabel";
import UIShowIfTrue from "../../../uiLibrary/components-ui/components/UIShowIfTrue/UIShowIfTrue";
import UISwitch from "../../../uiLibrary/components-ui/components/UISwitch/UISwitch";

type IProperties = IPropDisabled & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropColor;

const UIFormSwitch: React.FC<IProperties> = (props) => {
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

  const showHelpMessage = !!props.value.help?.length;
  const showErrorMessage = !!props.value.error.length;
  const containerClassName = classNames("ui-fc-control");
  const colourProps: IPropColor = {
    default: props.danger,
    secondary: props.secondary,
    success: props.success,
    info: props.info,
    warning: props.info,
    danger: props.danger,
  };

  return (
    <div className={containerClassName}>
      <UIFormLabel value={props.value} />
      <UISwitch {...colourProps} value={props.value.valueAsBoolean!} onChange={handleOnChangeEvent} />
      <UIShowIfTrue value={showHelpMessage}>
        <div className="ui-fc-help">{props.value.help}</div>
      </UIShowIfTrue>
      <UIShowIfTrue value={showErrorMessage}>
        <div className="ui-fc-error">{props.value.error}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIFormSwitch;
