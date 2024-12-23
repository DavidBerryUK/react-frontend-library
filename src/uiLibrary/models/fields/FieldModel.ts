import { Record } from "immutable";
import FieldSchema from "./FieldSchema";
import EnumFieldDataType from "../../enums/EnumFieldDataType";
import IFieldValidation from "../../validation/interfaces/IFieldValidation";
import FieldValidation from "../../validation/models/FieldValidation";
export type FieldTypeString = string | undefined;
export type FieldTypeNumber = number | undefined;
export type FieldTypeBoolean = boolean | undefined;
export type FieldTypeDate = Date | undefined;
export type FieldValueType = FieldTypeString | FieldTypeNumber | FieldTypeDate | FieldTypeBoolean;

interface FieldViewModelProps {
  dataType: EnumFieldDataType;
  caption: string;
  fieldName: string;
  value: FieldValueType;
  error: string;
  help: string;
  validation: IFieldValidation | undefined;
  active: boolean;
}

const FieldViewModelRecord = Record<FieldViewModelProps>({
  dataType: EnumFieldDataType.string,
  caption: "",
  fieldName: "",
  error: "",
  help: "",
  value: undefined,
  validation: undefined,
  active: true,
});

const RecordPropertyNames = {
  dataType: "dataType",
  caption: "caption",
  fieldName: "fieldName",
  value: "value",
  error: "error",
  help: "help",
  validation: "validation",
  active: "active",
} as const;

export default class FieldModel extends FieldViewModelRecord {
  constructor(
    fieldName: string,
    dataType: EnumFieldDataType,
    caption: string,
    value: FieldValueType,
    error: string,
    help: string,
    validation: IFieldValidation,
  ) {
    super({
      dataType: dataType,
      fieldName: fieldName,
      caption: caption,
      value: value,
      error: error,
      help: help,
      validation: validation,
    });
  }

  public static create(fieldName: string, caption: string, dataType: EnumFieldDataType, value: FieldValueType, validation?: FieldValidation) {
    return new FieldModel(
      fieldName, // Field name
      dataType, // Data Type, e.g. String, Number, Boolean, Date
      caption, // Caption displayed on the UI
      value, // Actual value
      "", // Error message
      "", // help message
      validation ?? new FieldValidation([]), // validation rules
    );
  }

  /**
   * Factory method to create a FieldModel from a schema.
   */
  public static fromSchema(schema: FieldSchema, value: FieldValueType): FieldModel {
    return new FieldModel(
      schema.fieldName, // Field name
      schema.dataType, // Data Type, e.g. String, Number, Boolean, Date
      schema.caption, // Caption displayed on the UI
      value, // Actual value
      "", // Error message
      "", // help message
      new FieldValidation(schema.rules), // validation rules
    );
  }

  get fieldName(): string {
    return this.get(RecordPropertyNames.fieldName);
  }

  get caption(): string {
    return this.get(RecordPropertyNames.caption);
  }

  get help(): string {
    return this.get(RecordPropertyNames.help);
  }

  get validation(): FieldValidation {
    return this.get(RecordPropertyNames.validation) as FieldValidation;
  }

  get value(): FieldValueType {
    return this.get(RecordPropertyNames.value);
  }

  get dataType(): EnumFieldDataType {
    return this.get(RecordPropertyNames.dataType);
  }

  get active(): boolean {
    return this.get(RecordPropertyNames.active);
  }

  /**
   * Retrieves the numeric value if applicable.
   */
  get valueAsNumber(): FieldTypeNumber {
    return Number(this.value) as FieldTypeNumber;
  }

  /**
   * Retrieves the boolean value if applicable.
   */
  get valueAsBoolean(): FieldTypeBoolean {
    return this.value as FieldTypeBoolean;
  }

  /**
   * Retrieves the string value if applicable.
   */
  get valueAsString(): string {
    return (this.value as FieldTypeString) ?? "";
  }

  /**
   * Creates a clone of the model with a new value, updating the validation error message accordingly.
   */
  cloneWithValue(newValue: FieldValueType): FieldModel {
    var newField = this.set(RecordPropertyNames.value, newValue);

    if (newField.active) {
      this.validation?.validate(newField);
      const errorMessage = this.validation?.validationMessage || "";
      return newField.set(RecordPropertyNames.error, errorMessage) as FieldModel;
    }

    return newField;
  }

  cloneWithUpdatedValidation(): FieldModel {
    var field = this as FieldModel;

    if (this.active) {
      field.validation?.validate(field);
    } else {
      field.validation?.clear();
    }
    const errorMessage = field.validation?.validationMessage || "";
    return field.set(RecordPropertyNames.error, errorMessage) as FieldModel;
  }

  /**
   * Creates a clone of the model with a new value, updating the validation error message accordingly.
   */
  cloneAndClear(): FieldModel {
    let field: FieldModel = this;

    switch (field.dataType) {
      case EnumFieldDataType.string:
        field = field.cloneWithValue("") as FieldModel;
        break;
      case EnumFieldDataType.number:
        field = field.cloneWithValue(false) as FieldModel;
        break;
      case EnumFieldDataType.boolean:
        field = field.cloneWithValue(false) as FieldModel;
        break;
    }
    if (field.validation) {
      field.validation.clear();
    }
    field = field.set(RecordPropertyNames.error, "") as FieldModel;
    return field;
  }

  /**
   * Make field inactive, clear any validation messages
   */
  cloneAsInactive(): FieldModel {
    let field = this.set(RecordPropertyNames.error, "") as FieldModel;
    field = field.set(RecordPropertyNames.active, false);
    return field;
  }

  /**
   * make field active, perform validation
   */
  cloneAsActive(): FieldModel {
    this.validation?.validate(this);
    var field = this;

    if (field.valueAsString === "" || field.valueAsNumber === 0) {
      field = field.set(RecordPropertyNames.error, "");
    } else {
      const errorMessage = this.validation?.validationMessage || "";
      field = field.set(RecordPropertyNames.error, errorMessage);
    }
    field = field.set(RecordPropertyNames.active, true);
    return field;
  }

  /**
   * Creates a clone of the model with updated help text.
   */
  cloneWithHelp(newHelp: string): FieldModel {
    return this.set(RecordPropertyNames.help, newHelp) as FieldModel;
  }
}
