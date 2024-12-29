import classNames from "classnames";
import EnumFieldInteractionMode from "../../enums/EnumFieldInteractionMode";
import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/properties/IPropClassName";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropInteractionMode from "../../interfaces/properties/IPropInteractionMode";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropValue from "../../interfaces/properties/IPropValue";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import UIFormControlWrapper from "../base/UIFormBase/UIFormControlWrapper";
import UIFormText from "../UIFormText/UIFormText";
import UISelect from "../../components-ui/components/UISelect/UISelect";
import UIShowIfFalse from "../../components-ui/components/UIShowIfFalse/UIShowIfFalse";
import UIShowIfTrue from "../../components-ui/components/UIShowIfTrue/UIShowIfTrue";
import useGetValidationIcon from "../../hooks/UseGetValidationIcon";
import useVariantStyle from "../../hooks/UseVariantStyle";

type IProperties = IPropDisabled & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropColor & IPropInteractionMode;

const UIFormSelect: React.FC<IProperties> = (props) => {
  //
  // Attributes
  //
  const variantClass = useVariantStyle("fc", props, props.value);
  const isReadOnly = props.readonly === true || props.interactionMode === EnumFieldInteractionMode.ReadOnly;
  const validationIcon = useGetValidationIcon(props);
  const inputClassName = classNames("ui-fc-select", variantClass, props.className);
  //
  // Event Handlers
  //
  const handleOnChangeEvent = (value: OptionModel<any> | undefined) => {
    if (props.onChange) {
      if (value === undefined) {
        props.onChange(props.value.cloneAndClear());
      } else {
        props.onChange(props.value.cloneWithValue(value.data!));
      }
    }
  };

  const selected = props.value.options?.filter((item) => item.key === props.value.valueAsString)![0]!;

  return (
    <>
      <UIShowIfTrue value={isReadOnly}>
        <UIFormText value={props.value} />
      </UIShowIfTrue>
      <UIShowIfFalse value={isReadOnly}>
        <UIFormControlWrapper {...props}>
          <div className={inputClassName}>
            <UIShowIfFalse value={isReadOnly}>
              <UISelect {...props} onChange={handleOnChangeEvent} options={props.value.options!} selected={selected} />
              <div className="fc-validation-icon">{validationIcon}</div>
            </UIShowIfFalse>
          </div>
        </UIFormControlWrapper>
      </UIShowIfFalse>
    </>
  );
};

export default UIFormSelect;
