import { partLineFieldNames } from "./PartLineConstants";
import EnumFieldDataType from "../../../../uiLibrary/enums/EnumFieldDataType";
import FieldSchema from "../../../../uiLibrary/models/fields/FieldSchema";
import RuleInteger from "../../../../uiLibrary/validation/rules/RuleInteger";
import RuleMandatory from "../../../../uiLibrary/validation/rules/RuleMandatory";
import RuleMaxLength from "../../../../uiLibrary/validation/rules/RuleMaxLength";
import RuleMinLength from "../../../../uiLibrary/validation/rules/RuleMinLength";
import RulePositive from "../../../../uiLibrary/validation/rules/RulePositive";
import ViewModelSchema, { SchemaBase } from "../../../../uiLibrary/models/fields/ViewModelSchema";

/**
 * The scheme defines the fields on the record and any validation rules required
 */
export default class PartLineSchemaModel extends ViewModelSchema {
  fields: SchemaBase = {
    code: new FieldSchema("Code", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(2), new RuleMaxLength(20)]),
    description: new FieldSchema("Description", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(10), new RuleMaxLength(100)]),
    price: new FieldSchema("Price", EnumFieldDataType.number, [new RuleMandatory(), new RulePositive(true)]),
    quantity: new FieldSchema("Quantity", EnumFieldDataType.number, [new RuleMandatory(), new RulePositive(true), new RuleInteger()]),
    discountPercentage: new FieldSchema("Discount", EnumFieldDataType.number, [new RuleMandatory(), new RulePositive(true)]),
    lineTotal: new FieldSchema("Line Total", EnumFieldDataType.string, []),
  };

  constructor() {
    super();
    this.populateFieldNames();
  }

  /**
   * Helpers to get schema information
   */
  public get code(): FieldSchema {
    return this.fields[partLineFieldNames.code];
  }

  get description(): FieldSchema {
    return this.fields[partLineFieldNames.description];
  }

  get price(): FieldSchema {
    return this.fields[partLineFieldNames.price];
  }

  get quantity(): FieldSchema {
    return this.fields[partLineFieldNames.quantity];
  }

  get discountPercentage(): FieldSchema {
    return this.fields[partLineFieldNames.discountPercentage];
  }

  get lineTotal(): FieldSchema {
    return this.fields[partLineFieldNames.lineTotal];
  }
}
