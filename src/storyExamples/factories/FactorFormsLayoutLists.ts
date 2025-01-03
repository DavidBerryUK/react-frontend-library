import OptionModel from "../../uiLibrary/components-ui/components/UISegment/models/OptionModel";
import EnumFieldInteractionMode from "../../uiLibrary/enums/EnumFieldInteractionMode";
import EnumFieldLabelPlacement from "../../uiLibrary/enums/EnumFieldLabelPlacement";
import EnumGridAlign from "../../uiLibrary/enums/EnumGridAlign";

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

  public static GetAlignmentOptions(): Array<OptionModel<EnumGridAlign>> {
    const options: Array<OptionModel<EnumGridAlign>> = [
      new OptionModel<EnumGridAlign>("tl", "Top Left", EnumGridAlign.topLeft),
      new OptionModel<EnumGridAlign>("tc", "Top Center", EnumGridAlign.topCenter),
      new OptionModel<EnumGridAlign>("tr", "Top Right", EnumGridAlign.topRight),
      new OptionModel<EnumGridAlign>("ml", "Middle Left", EnumGridAlign.middleLeft),
      new OptionModel<EnumGridAlign>("mc", "Middle Center", EnumGridAlign.middleCenter),
      new OptionModel<EnumGridAlign>("me", "Middle End", EnumGridAlign.middleEnd),
      new OptionModel<EnumGridAlign>("rl", "Bottom Left", EnumGridAlign.bottomLeft),
      new OptionModel<EnumGridAlign>("bc", "Bottom Center", EnumGridAlign.bottomCenter),
      new OptionModel<EnumGridAlign>("br", "Bottom Right", EnumGridAlign.bottomRight),
    ];
    return options;
  }
}
