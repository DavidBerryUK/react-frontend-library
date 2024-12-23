import FieldModel from "../../models/fields/FieldModel";
import IPropClassName from "../../interfaces/properties/IPropClassName";
import IPropColor from "../../interfaces/properties/IPropColor";
import IPropDisabled from "../../interfaces/properties/IPropDisabled";
import IPropOnChange from "../../interfaces/properties/IPropOnChange";
import IPropValue from "../../interfaces/properties/IPropValue";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import UISelect from "../../components-ui/components/UISelect/UISelect";
import UIFormLabel from "../UIFormLabel/UIFormLabel";

type IProperties = IPropDisabled & IPropValue<FieldModel> & IPropOnChange<FieldModel> & IPropClassName & IPropColor;

const UIFormSelect: React.FC<IProperties> = (props) => {
  //
  // Event Handlers
  //
  const handleOnChangeEvent = (value: OptionModel<any>) => {
    if (props.onChange) {
      const updatedField = props.value.cloneWithValue(value.data!);
      props.onChange(updatedField);
    }
  };

  const selected = props.value.options?.filter((item) => item.key === props.value.valueAsString)![0]!;

  return (
    <div>
      <UIFormLabel value={props.value} />
      <UISelect {...props} onChange={handleOnChangeEvent} options={props.value.options!} selected={selected} />
    </div>
  );
};

export default UIFormSelect;
