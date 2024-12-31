import IPropSizeExtended from "../interfaces/properties/IPropSizeExtended";

const useExtendedSizeStyle = (prefix: string, size: IPropSizeExtended): string => {
  const value =
    (size.extraSmall && "2xs") ||
    (size.small && "xs") ||
    (size.smaller && "sm") ||
    (size.larger && "lg") ||
    (size.large && "xl") ||
    (size.extraLarge && "2xl") ||
    "base";

  return `${prefix}-${value}`;
};

export default useExtendedSizeStyle;
