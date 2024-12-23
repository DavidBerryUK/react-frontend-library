import classNames from "classnames";
import UIFormLabel from "../UIFormLabel/UIFormLabel";
import UIShowIfTrue from "../../components-ui/components/UIShowIfTrue/UIShowIfTrue";
import UISwitch from "../../components-ui/components/UISwitch/UISwitch";
import { GetIPropColorFromProperty } from "../../interfaces/properties/IPropColor";
import IFormSwitchProperties from "../../interfaces/controls/IFormSwitchProperties";

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

  const showHelpMessage = !!props.value.help?.length;
  const showErrorMessage = !!props.value.error.length;
  const containerClassName = classNames("ui-fc-control");
  const colourProps = GetIPropColorFromProperty(props);

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
