import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";
import EnumFieldDataType from "../../enums/EnumFieldDataType";
import IRule from "../../validation/interfaces/IRule";

export default class FieldSchema {
  /**
   * This is auto populated by SchemaProcessor
   */
  public fieldName: string = "";

  /**
   * The caption to display in the UI
   */
  public caption: string = "";

  /**
   * Type of the field, e.g. string, number, boolean or data
   */
  public dataType: EnumFieldDataType;

  /**
   * Validation rules
   */
  public rules: Array<IRule>;

  /**
   * optional list of options for dropdowns / segement control
   */
  public options: Array<OptionModel<any>> | undefined;

  constructor(caption: string, dataType: EnumFieldDataType, rules?: Array<IRule>, options?: Array<OptionModel<any>> | undefined) {
    this.caption = caption;
    this.dataType = dataType;
    this.rules = rules ?? new Array<IRule>();
    this.options = options;
  }
}
