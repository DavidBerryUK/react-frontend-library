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
  if (field && field.validation.hasRules) {
    color = {
      danger: field.validation.state === EnumValidationState.invalid,
      success: field.validation.state === EnumValidationState.valid,
    };
  }

  const value =
    (color.primary && "primary") ||
    (color.secondary && "secondary") ||
    (color.success && "success") ||
    (color.info && "info") ||
    (color.warning && "warning") ||
    (color.danger && "danger") ||
    "default";

  const className = `${prefix}-${value}`;

  return className;
};

export default useVariantStyle;
