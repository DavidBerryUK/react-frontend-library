import classNames from "classnames";
import EnumFieldDataType from "../../../enums/EnumFieldDataType";
import UIShowIfTrue from "../../../components-ui/components/UIShowIfTrue/UIShowIfTrue";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import UIFormControlWrapper from "./UIFormControlWrapper";
import IFormTextProperties from "../../../interfaces/controls/IFormTextProperties";
import IPropInputType from "../../../interfaces/properties/IPropInputType";
import IPropsTextPrefix from "../../../interfaces/properties/IPropTextPrefix";
import IPropsTextSuffix from "../../../interfaces/properties/IPropTextSuffix";
import EnumFieldInteractionMode from "../../../enums/EnumFieldInteractionMode";
import IPropInteractionMode from "../../../interfaces/properties/IPropInteractionMode";

type IProperties = IFormTextProperties & IPropInputType & IPropsTextPrefix & IPropsTextSuffix & IPropInteractionMode;

const UIFormBaseString: React.FC<IProperties> = (props) => {
  const variantClass = useVariantStyle("fc", props);

  /**
   * EVENT HANDLERS
   */
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * Event Handlers
     */
    if (props.onChange) {
      if (props.value.dataType === EnumFieldDataType.boolean) {
        props.onChange(props.value.cloneWithValue(event.target.checked));
      } else {
        props.onChange(props.value.cloneWithValue(event.target.value));
      }
    }
  };

  /**
   * Calculate attributes
   */
  const showPrefix = props.textPrefix !== undefined;
  const showSuffix = props.textSuffix !== undefined;
  const isReadOnly = props.readonly === true || props.interactionMode === EnumFieldInteractionMode.ReadOnly;
  const inputClassName = classNames("ui-fc-text", variantClass);

  return (
    <UIFormControlWrapper {...props}>
      <div className={inputClassName}>
        <UIShowIfTrue value={showPrefix}>
          <div className="fc-prefix-text">{props.textPrefix}</div>
        </UIShowIfTrue>
        <input
          type={props.inputType}
          readOnly={isReadOnly}
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
    </UIFormControlWrapper>
  );
};

export default UIFormBaseString;
