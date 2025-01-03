import FieldModel from "../../models/fields/FieldModel";

export default interface IFieldValidation {
  countAll: number;
  validationMessage: string;
  validate(field: FieldModel): boolean;
  hasRules: boolean;
  ruleCount: number;
}
