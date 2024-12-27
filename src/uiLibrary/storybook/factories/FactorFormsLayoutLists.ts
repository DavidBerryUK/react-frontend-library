import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import EnumFieldInteractionMode from "../../enums/EnumFieldInteractionMode";
import EnumFieldLabelPlacement from "../../enums/EnumFieldLabelPlacement";

/**
 * Factory providing lists for stories / tests
 */
export default class FactorFormsLayoutLists {
  public static GetFieldLabelPlacment(): Array<OptionModel<EnumFieldLabelPlacement>> {
    const options: Array<OptionModel<EnumFieldLabelPlacement>> = [
      new OptionModel<EnumFieldLabelPlacement>("c", "Column", EnumFieldLabelPlacement.column),
      new OptionModel<EnumFieldLabelPlacement>("r", "Row", EnumFieldLabelPlacement.row),
    ];
    return options;
  }

  public static GetFieldInteractiveModes(): Array<OptionModel<EnumFieldInteractionMode>> {
    const options: Array<OptionModel<EnumFieldInteractionMode>> = [
      new OptionModel<EnumFieldInteractionMode>("e", "Editable", EnumFieldInteractionMode.Editable),
      new OptionModel<EnumFieldInteractionMode>("r", "Read Only", EnumFieldInteractionMode.ReadOnly),
      new OptionModel<EnumFieldInteractionMode>("h", "Hidden", EnumFieldInteractionMode.Hidden),
    ];
    return options;
  }
}
