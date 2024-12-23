import EnumColor from "../../enums/EnumColor";

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

export function GetIPropColorFromProperty(props: IPropColor): IPropColor {
  const colourProps: IPropColor = {
    default: props.danger,
    secondary: props.secondary,
    success: props.success,
    info: props.info,
    warning: props.info,
    danger: props.danger,
  };

  return colourProps;
}

export function GetEnumColorFromProp(property: IPropColor): EnumColor {
  if (property.primary) {
    return EnumColor.primary;
  }

  if (property.secondary) {
    return EnumColor.secondary;
  }

  if (property.success) {
    return EnumColor.success;
  }

  if (property.info) {
    return EnumColor.info;
  }

  if (property.warning) {
    return EnumColor.warning;
  }

  if (property.danger) {
    return EnumColor.danger;
  }

  if (property.default) {
    return EnumColor.default;
  }

  return EnumColor.default;
}
