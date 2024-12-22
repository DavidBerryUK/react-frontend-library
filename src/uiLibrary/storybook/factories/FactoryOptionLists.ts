import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import EnumThemeVariant from "../../components-ui/enums/EnumThemeVariant";

/**
 * Factory providing lists for stories / tests
 */
export default class FactoryOptionLists {
  public static GetYearMonthDayList(): Array<OptionModel<string>> {
    const options: Array<OptionModel<string>> = [
      new OptionModel<string>("y", "Years"),
      new OptionModel<string>("m", "Months"),
      new OptionModel<string>("d", "Days"),
    ];
    return options;
  }

  public static GetVariantList(): Array<OptionModel<EnumThemeVariant>> {
    const options: Array<OptionModel<EnumThemeVariant>> = [
      new OptionModel<EnumThemeVariant>("default", "Default Theme", EnumThemeVariant.default),
      new OptionModel<EnumThemeVariant>("primary", "Primary Theme", EnumThemeVariant.primary),
      new OptionModel<EnumThemeVariant>("secondary", "Secondary Theme", EnumThemeVariant.secondary),
      new OptionModel<EnumThemeVariant>("success", "Success Theme", EnumThemeVariant.success),
      new OptionModel<EnumThemeVariant>("info", "Info Theme", EnumThemeVariant.info),
      new OptionModel<EnumThemeVariant>("warning", "Warning Theme", EnumThemeVariant.warning),
      new OptionModel<EnumThemeVariant>("danger", "Danger Theme", EnumThemeVariant.danger),
    ];
    return options;
  }

  public static GetMonthsOfYearList(): Array<OptionModel<string>> {
    const options: Array<OptionModel<string>> = [
      new OptionModel<string>("jan", "January"),
      new OptionModel<string>("feb", "February"),
      new OptionModel<string>("mar", "March"),
      new OptionModel<string>("apr", "April"),
      new OptionModel<string>("may", "May"),
      new OptionModel<string>("jun", "June"),
      new OptionModel<string>("jul", "July"),
      new OptionModel<string>("aug", "August"),
      new OptionModel<string>("sep", "September"),
      new OptionModel<string>("oct", "October"),
      new OptionModel<string>("nov", "November"),
      new OptionModel<string>("dec", "December"),
    ];
    return options;
  }

  public static GetYearList(): Array<OptionModel<number>> {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10;
    const endYear = currentYear + 2;

    const options: Array<OptionModel<number>> = [];
    for (let year = startYear; year <= endYear; year++) {
      options.push(new OptionModel<number>(year.toString(), year.toString(), year));
    }

    return options;
  }
}
