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
import useVariantStyle from "../../../../uiLibrary/hooks/UseVariantStyle";
import IPropColor from "../../../../uiLibrary/interfaces/properties/IPropColor";
import classNames from "classnames";
import IPropsTextPrefix from "../../../../uiLibrary/interfaces/properties/IPropTextPrefix";
import IPropsTextSuffix from "../../../../uiLibrary/interfaces/properties/IPropTextSuffix";

type IProperties = IPropDisabled & IPropPlaceholder & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropInputType & IPropColor & IPropsTextPrefix & IPropsTextSuffix;

const UIFormBaseString: React.FC<IProperties> = (props) => {
  const variantClass = useVariantStyle("fc", props);

  if (!props.value.active) {
    return null;
  }

  /**
   * EVENT HANDLERS
   */
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      if (props.value.dataType === EnumFieldDataType.boolean) {
        props.onChange(props.value.cloneWithValue(event.target.checked));
      } else {
        props.onChange(props.value.cloneWithValue(event.target.value));
      }
    }
  };

  const showPrefix = props.textPrefix !== undefined;
  const showSuffix = props.textSuffix !== undefined;
  const showHelpMessage = !!props.value.help?.length;
  const showErrorMessage = !!props.value.error.length;
  const errorClassName = showErrorMessage ? "error" : "";
  const containerClassName = classNames("ui-fc-control", props.className);
  const inputClassName = classNames("ui-fc-text", variantClass, errorClassName);

  return (
    <div className={containerClassName}>
      <UIFormLabel value={props.value} />
      <div className={inputClassName}>
        <UIShowIfTrue value={showPrefix}>
          <div className="fc-prefix-text">{props.textPrefix}</div>
        </UIShowIfTrue>
        <input
          type={props.inputType}
          id={props.value.fieldName}
          value={props.value.value as string}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onChange={handleOnChangeEvent}
          autoComplete="off"
        />
        <UIShowIfTrue value={showSuffix}>
          <div className="fc-suffix-text">{props.textSuffix}</div>
        </UIShowIfTrue>
      </div>
      <UIShowIfTrue value={showHelpMessage}>
        <div className="ui-fc-help">{props.value.help}</div>
      </UIShowIfTrue>
      <UIShowIfTrue value={showErrorMessage}>
        <div className="ui-fc-error">{props.value.error}</div>
      </UIShowIfTrue>
    </div>
  );
};

export default UIFormBaseString;
