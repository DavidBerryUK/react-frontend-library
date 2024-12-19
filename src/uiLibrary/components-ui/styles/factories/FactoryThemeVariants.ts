import EnumThemeVariant from "../../enums/EnumThemeVariant";

import ISolidColorConfig from "../models/sections/ISolidColorConfig";
import IStyleConfig from "../models/IStyleConfig";
import IPropColor, { GetEnumColorFromProp } from "../../../interfaces/properties/IPropColor";

export default class FactoryThemeVariants {
  // Static dictionary to hold the colors mapped by EnumColor
  private static dictionary: { [key in EnumThemeVariant]: IStyleConfig } = FactoryThemeVariants.createMap();

  // Public function to get a ColorModel by its EnumColor
  public static getColorModel(color: IPropColor): IStyleConfig {
    const key = GetEnumColorFromProp(color);
    return this.dictionary[key];
  }

  public static getSolidColorModel(color: IPropColor): ISolidColorConfig {
    const key = GetEnumColorFromProp(color);
    return this.dictionary[key].solid;
  }

  // Function to create and initialize the color map
  private static createMap(): { [key in EnumThemeVariant]: IStyleConfig } {
    const borderSize = "border-2";
    const colorDefault: IStyleConfig = {
      theme: EnumThemeVariant.default,
      button: {
        standard: "bg-slate-500 hover:bg-slate-800 text-slate-100",
        standardDisabled: "bg-slate-300 text-slate-400",
        outline: `${borderSize} border-slate-600 hover:bg-slate-200 text-slate-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-white",
        borderColor: "border-slate-700",
      },
      solid: {
        lighterBackground: "bg-blue-50",
        lighterBorder: "border-blue-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-blue-700",
        /***/
        defaultBackground: "bg-blue-600",
        defaultBorder: "border-blue-800",
        defaultFill: "",
        defaultStroke: "",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-blue-900",
        darkerBorder: "border-blue-500",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorPrimary: IStyleConfig = {
      theme: EnumThemeVariant.primary,
      button: {
        standard: "bg-purple-700 hover:bg-purple-800 text-purple-100",
        standardDisabled: "",
        outline: `${borderSize} border-indigo-500 hover:bg-purple-200  "text-purple-700`,
        outlineDisabled: "bg-purple-300",
      },
      textField: {
        backgroundColor: "bg-purple-50",
        borderColor: "border-purple-700",
      },
      solid: {
        lighterBackground: "bg-purple-50",
        lighterBorder: "border-purple-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-purple-700",
        /***/
        defaultBackground: "bg-purple-600",
        defaultBorder: "border-purple-800",
        defaultFill: "fill-purple-600",
        defaultStroke: "stroke-purple-600",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-purple-900",
        darkerBorder: "border-purple-500",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorSecondary: IStyleConfig = {
      theme: EnumThemeVariant.secondary,
      button: {
        standard: "bg-gray-700 hover:bg-gray-800 text-gray-100",
        standardDisabled: "bg-gray-300",
        outline: `${borderSize} border-grey-300 hover:bg-gray-200 text-grey-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-gray-50",
        borderColor: "border-gray-700",
      },
      solid: {
        lighterBackground: "bg-gray-50",
        lighterBorder: "border-gray-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-gray-700",
        /***/
        defaultBackground: "bg-gray-500",
        defaultBorder: "border-gray-700",
        defaultFill: "fill-gray-500",
        defaultStroke: "stroke-gray-500",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-gray-900",
        darkerBorder: "border-gray-500",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorSuccess: IStyleConfig = {
      theme: EnumThemeVariant.success,
      button: {
        standard: "bg-green-700 hover:bg-green-800 text-green-100",
        standardDisabled: "bg-green-300",
        outline: `${borderSize} border-green-500 hover:bg-green-200 text-green-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-green-50",
        borderColor: "border-green-700",
      },
      solid: {
        lighterBackground: "bg-green-50",
        lighterBorder: "border-green-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-green-700",
        /***/
        defaultBackground: "bg-green-600",
        defaultBorder: "border-green-800",
        defaultFill: "fill-green-600",
        defaultStroke: "stroke-green-600",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-green-900",
        darkerBorder: "border-green-500",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorInfo: IStyleConfig = {
      theme: EnumThemeVariant.info,
      button: {
        standard: "bg-blue-600 hover:bg-blue-700 text-blue-100",
        standardDisabled: "bg-blue-300",
        outline: `${borderSize} border-blue-600 hover:bg-blue-200 text-blue-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-blue-50",
        borderColor: "border-blue-600",
      },
      solid: {
        lighterBackground: "bg-blue-50",
        lighterBorder: "border-blue-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-blue-700",
        /***/
        defaultBackground: "bg-blue-600",
        defaultBorder: "border-blue-800",
        defaultFill: "fill-blue-600",
        defaultStroke: "stroke-blue-600",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-blue-800",
        darkerBorder: "border-blue-400",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorWarning: IStyleConfig = {
      theme: EnumThemeVariant.warning,
      button: {
        standard: "bg-yellow-700 hover:bg-yellow-800 text-yellow-100",
        standardDisabled: "bg-gray-300",
        outline: `${borderSize} border-yellow-600 hover:bg-yellow-200 text-yellow-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-gray-50",
        borderColor: "border-gray-700",
      },
      solid: {
        lighterBackground: "bg-yellow-50",
        lighterBorder: "border-yellow-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-yellow-700",
        /***/
        defaultBackground: "bg-yellow-500",
        defaultBorder: "border-yellow-600",
        defaultFill: "fill-yellow-600",
        defaultStroke: "stroke-yellow-600",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-yellow-600",
        darkerBorder: "border-yellow-400",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    const colorDanger: IStyleConfig = {
      theme: EnumThemeVariant.danger,
      button: {
        standard: "bg-red-700 hover:bg-red-800 text-red-100",
        standardDisabled: "bg-red-300",
        outline: `${borderSize} border-red-600 hover:bg-red-200 text-red-700`,
        outlineDisabled: "",
      },
      textField: {
        backgroundColor: "bg-red-50",
        borderColor: "border-red-700",
      },
      solid: {
        lighterBackground: "bg-red-50",
        lighterBorder: "border-red-300",
        lighterFill: "",
        lighterStroke: "",
        lighterText: "text-red-700",
        /***/
        defaultBackground: "bg-red-600",
        defaultBorder: "border-red-800",
        defaultFill: "fill-red-600",
        defaultStroke: "stroke-red-600",
        defaultText: "text-white",
        /***/
        darkerBackground: "bg-red-900",
        darkerBorder: "border-red-500",
        darkerFill: "",
        darkerStroke: "",
        darkerText: "text-white",
      },
    };

    return {
      [EnumThemeVariant.primary]: colorPrimary,
      [EnumThemeVariant.secondary]: colorSecondary,
      [EnumThemeVariant.success]: colorSuccess,
      [EnumThemeVariant.info]: colorInfo,
      [EnumThemeVariant.warning]: colorWarning,
      [EnumThemeVariant.danger]: colorDanger,
      [EnumThemeVariant.default]: colorDefault,
    };
  }
}
