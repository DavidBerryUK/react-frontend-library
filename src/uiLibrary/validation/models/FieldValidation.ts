import EnumValidationState from "../enum/EnumValidationState";
import FieldModel from "../../models/fields/FieldModel";
import IFieldValidation from "../interfaces/IFieldValidation";
import IRule from "../interfaces/IRule";

/**
 * performs validation for a UIField
 */
export default class FieldValidation implements IFieldValidation {
  private rules: Array<IRule>;
  private messages: Array<string>;
  private fieldCaption: string = "";
  public state: EnumValidationState = EnumValidationState.indeterminate;

  constructor(rules: Array<IRule>) {
    console.log("**** CREATE FieldValidation ****");

    this.rules = rules;
    this.messages = new Array<string>();
  }

  get countAll(): number {
    return this.messages.length;
  }

  get hasRules(): boolean {
    return this.rules.length > 0;
  }

  get ruleCount(): number {
    return this.rules.length;
  }

  private get messagesAsSummary(): string {
    if (this.messages.length === 0) {
      return "";
    }
    let count = 0;
    let msg = "";
    this.messages.forEach((message) => {
      if (count > 0) {
        msg = `${msg} and `;
      }
      count++;
      msg = `${msg}${message}`;
    });
    return msg;
  }

  get validationMessage(): string {
    if (this.countAll === 0) {
      return "";
    }

    return `${this.fieldCaption} ${this.messagesAsSummary}`;
  }

  validate(field: FieldModel): boolean {
    console.log(`BEGIN VALIDATION FOR FIELD ${field.fieldName}`);

    var isValid = true;
    this.messages = new Array<string>();
    this.fieldCaption = field.caption;

    this.rules.forEach((rule) => {
      var response = rule.isValid(field);

      if (!response.pass) {
        isValid = false;
        this.messages.push(response.message);
      }
    });

    this.state = isValid ? EnumValidationState.valid : EnumValidationState.invalid;

    console.log(`       VALIDATE: field state is ${EnumValidationState[this.state]} ${this.messagesAsSummary}`);

    return isValid;
  }

  clear() {
    this.messages = new Array<string>();
    this.state = EnumValidationState.indeterminate;
    console.log(`       CLEAR: field state is ${EnumValidationState[this.state]} ${this.messagesAsSummary}`);
  }
}
