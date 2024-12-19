import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import FieldModel from "../../../models/fields/FieldModel";
import IPropClassName from "../../../interfaces/IPropClassName";
import IPropDisabled from "../../../interfaces/IPropDisabled";
import IPropInputType from "../../../interfaces/IPropInputType";
import IPropOnChange from "../../../interfaces/IPropOnChange";
import IPropPlaceholder from "../../../interfaces/IPropPlaceholder";
import IPropValue from "../../../interfaces/IPropValue";
import UIFormLabel from "../../UIFormLabel/UIFormLabel";
import UIShowIfTrue from "../../../../uiLibrary/components-ui/components/UIShowIfTrue/UIShowIfTrue";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropInputType;

const UIFormBaseString: React.FC<IProperties> = ({ value, onChange, inputType, placeholder, disabled, className }) => {
  if (!value.active) {
    return null;
  }

  /**
   * EVENT HANDLERS
   */
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      if (value.dataType === EnumFieldDataType.boolean) {
        onChange(value.cloneWithValue(event.target.checked));
      } else {
        onChange(value.cloneWithValue(event.target.value));
      }
    }
  };

  const showHelpMessage = !!value.help?.length;
  const showErrorMessage = !!value.error.length;
  const inputStyle = `ui-fc-text ${showErrorMessage ? "error" : ""}`;
  className = `ui-fc-control ${className ?? ""}`;

  return (
    <div className={className}>
      <UIFormLabel value={value} />
      <input
        type={inputType}
        id={value.fieldName}
        value={value.value as string}
        disabled={disabled}
        className={inputStyle}
        placeholder={placeholder}
        onChange={handleOnChangeEvent}
        autoComplete="off"
      />
      <UIShowIfTrue value={showHelpMessage}>
        <div className="ui-fc-help">{value.help}</div>
      </UIShowIfTrue>
      <UIShowIfTrue value={showErrorMessage}>
        <div className="ui-fc-error">{value.error}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIFormBaseString;
