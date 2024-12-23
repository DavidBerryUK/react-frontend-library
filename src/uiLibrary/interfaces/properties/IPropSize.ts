import EnumSize from "../../enums/EnumSize";

interface IPropSize {
  size?: EnumSize;
  small?: boolean;
  regular?: boolean;
  large?: boolean;
}

export default IPropSize;

export function GetEnumSizeFromProp(property: IPropSize): EnumSize {
  if (property.size) {
    return property.size;
  }

  if (property.small) {
    return EnumSize.small;
  }

  if (property.large) {
    return EnumSize.large;
  }

  return EnumSize.regular;
}
