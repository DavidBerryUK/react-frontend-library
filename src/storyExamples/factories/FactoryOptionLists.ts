import OptionModel from "../../uiLibrary/components-ui/components/UISegment/models/OptionModel";
import EnumColor from "../../uiLibrary/enums/EnumColor";

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

  public static GetVariantList(): Array<OptionModel<EnumColor>> {
    const options: Array<OptionModel<EnumColor>> = [
      new OptionModel<EnumColor>("default", "Default Theme", EnumColor.default),
      new OptionModel<EnumColor>("primary", "Primary Theme", EnumColor.primary),
      new OptionModel<EnumColor>("secondary", "Secondary Theme", EnumColor.secondary),
      new OptionModel<EnumColor>("success", "Success Theme", EnumColor.success),
      new OptionModel<EnumColor>("info", "Info Theme", EnumColor.info),
      new OptionModel<EnumColor>("warning", "Warning Theme", EnumColor.warning),
      new OptionModel<EnumColor>("danger", "Danger Theme", EnumColor.danger),
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
