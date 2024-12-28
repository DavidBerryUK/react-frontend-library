import EnumValidationState from "../validation/enum/EnumValidationState";
import FieldModel from "../models/fields/FieldModel";
import IPropColor from "../interfaces/properties/IPropColor";

/**
 *
 * @param prefix text prefix to be added to class, helps make class names unique
 * @param color  the color required using the IPropColor interface
 * @param field  Optional data field, if provided then if valid color = success,
 *        or if in error, then color = danger
 * @returns
 */
const useVariantStyle = (prefix: string, color: IPropColor, field?: FieldModel): string => {
  if (field) {
    if (field.validation.state === EnumValidationState.invalid) {
      color = { danger: true };
    } else if (field.validation.state === EnumValidationState.valid) {
      color = { success: true };
    }
  }

  var value = "";
  if (color.primary) {
    value = "primary";
  } else if (color.secondary) {
    value = "secondary";
  } else if (color.success) {
    value = "success";
  } else if (color.info) {
    value = "info";
  } else if (color.warning) {
    value = "warning";
  } else if (color.danger) {
    value = "danger";
  } else {
    value = "default";
  }

  return `${prefix}-${value}`;
};

export default useVariantStyle;
