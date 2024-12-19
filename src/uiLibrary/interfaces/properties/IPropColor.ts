import EnumThemeVariant from "../../components-ui/enums/EnumThemeVariant";

export default interface IPropColor {
  /** Use the Primary Style */
  primary?: boolean;
  /** Use the Secondary Style */
  secondary?: boolean;
  /** Use the Success Style */
  success?: boolean;
  /** Use the Information Style */
  info?: boolean;
  /** Use the Warning Style */
  warning?: boolean;
  /** Use the Danger Style */
  danger?: boolean;
  /** Use the Default Style */
  default?: boolean;
}

export function GetEnumColorFromProp(property: IPropColor): EnumThemeVariant {
  if (property.primary) {
    return EnumThemeVariant.primary;
  }

  if (property.secondary) {
    return EnumThemeVariant.secondary;
  }

  if (property.success) {
    return EnumThemeVariant.success;
  }

  if (property.info) {
    return EnumThemeVariant.info;
  }

  if (property.warning) {
    return EnumThemeVariant.warning;
  }

  if (property.danger) {
    return EnumThemeVariant.danger;
  }

  if (property.default) {
    return EnumThemeVariant.default;
  }

  return EnumThemeVariant.default;
}
