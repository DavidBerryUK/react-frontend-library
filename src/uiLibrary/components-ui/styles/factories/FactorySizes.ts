import IIconProps from "../../../components-icons/interfaces/IIconProps";
import IPropSize, { GetEnumSizeFromProp } from "../../../interfaces/properties/IPropSize";
import EnumSize from "../../enums/EnumSize";
import ISizeConfig from "../models/ISizeConfig";

export default class FactorySizes {
  private static dictionary: { [key in EnumSize]: ISizeConfig } = FactorySizes.createMap();

  public static getSizeModel(size: IPropSize): ISizeConfig {
    const key = GetEnumSizeFromProp(size);
    return this.dictionary[key];
  }

  private static createMap(): { [key in EnumSize]: ISizeConfig } {
    const small: ISizeConfig = {
      size: EnumSize.small,
      buttonStyle: "h-8 px-4 py-0  text-sm",
      spinnerStyle: "h-8 w-8",
    };

    const regular: ISizeConfig = {
      size: EnumSize.regular,
      buttonStyle: "h-10 px-5 py-0",
      spinnerStyle: "h-12 w-12",
    };

    const large: ISizeConfig = {
      size: EnumSize.large,
      buttonStyle: "h-12 px-6 m-2 py-0 text-lg",
      spinnerStyle: "h-24 w-24",
    };

    return {
      [EnumSize.small]: small,
      [EnumSize.regular]: regular,
      [EnumSize.large]: large,
    };
  }

  public static GetIconSize(icon: IIconProps): string {
    if (icon.extraSmall) {
      return "h-3 w-3"; // 12px
    }
    if (icon.small) {
      return "h-4 w-4"; // 16px
    }
    if (icon.smaller) {
      return "h-7 w-7"; // 28px
    }
    if (icon.regular) {
      return "h-8 w-8"; // 32px
    }
    if (icon.larger) {
      return "h-10 w-10"; // 40px
    }
    if (icon.large) {
      return "h-12 w-12"; // 48px
    }
    if (icon.extraLarge) {
      return "h-16 w-16"; // 64px
    }

    // Default regular size
    return "h-8 w-8"; // 32px
  }
}
