import { nanoid } from "nanoid";
import FieldModel from "../../../../uiLibrary/models/fields/FieldModel";
import PartLineSchemaModel from "./PartLineSchema";
import { IPartLineParameters, partLineFieldNames, PartLineRecord } from "./PartLineConstants";

/**
 * This is a View Model that is created using the immutable framework, this enables the record to only be updated with the
 * changed properties, making it faster to use with ReactJS.
 *
 * e.g. if Code is updated, then the other fields will not be updated.
 *
 */
export default class PartLineViewModel extends PartLineRecord {
  /****************************************************/
  /* Constructor to initialize with a unique key    */
  /****************************************************/
  private constructor(params?: Partial<IPartLineParameters>) {
    const initParams = Object.assign({}, params, { key: params?.key ?? nanoid() });
    super(initParams);
  }

  /****************************************************/
  /* Getters
  /****************************************************/
  get key(): string {
    return this.get(partLineFieldNames.key) as string;
  }

  get code(): FieldModel {
    return this.get(partLineFieldNames.code) as FieldModel;
  }

  get description(): FieldModel {
    return this.get(partLineFieldNames.description) as FieldModel;
  }

  get price(): FieldModel {
    return this.get(partLineFieldNames.price) as FieldModel;
  }

  get quantity(): FieldModel {
    return this.get(partLineFieldNames.quantity) as FieldModel;
  }

  get discountPercentage(): FieldModel {
    return this.get(partLineFieldNames.discountPercentage) as FieldModel;
  }

  get lineTotal(): FieldModel {
    return this.get(partLineFieldNames.lineTotal) as FieldModel;
  }

  /****************************************************/
  /* Create New
  /****************************************************/
  static create(): PartLineViewModel {
    const schema = new PartLineSchemaModel();
    return new PartLineViewModel({
      code: FieldModel.fromSchema(schema.code, ""),
      description: FieldModel.fromSchema(schema.description, ""),
      price: FieldModel.fromSchema(schema.price, ""),
      quantity: FieldModel.fromSchema(schema.quantity, ""),
      discountPercentage: FieldModel.fromSchema(schema.discountPercentage, ""),
      lineTotal: FieldModel.fromSchema(schema.lineTotal, ""),
    });
  }

  /****************************************************/
  /* Clone Object                                     */
  /****************************************************/
  clone(): PartLineViewModel {
    return new PartLineViewModel({
      code: this.code,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      discountPercentage: this.discountPercentage,
      lineTotal: this.lineTotal,
    });
  }

  cloneWithField(field: FieldModel): PartLineViewModel {
    var model = this as PartLineViewModel;
    model = this.set(field.fieldName as keyof IPartLineParameters, field);
    model = model.updateCalculations(model);
    return model;
  }

  /****************************************************/
  /* Calculations to run each time model is changed   */
  /****************************************************/
  private updateCalculations(model: PartLineViewModel): PartLineViewModel {
    // Update Line Total
    var price = model.price.valueAsNumber;
    var quantity = model.quantity.valueAsNumber;
    if (price && quantity) {
      var total = price * quantity;
      if (model.lineTotal.valueAsNumber !== total) {
        var field = model.lineTotal.cloneWithValue(total);
        model = model.set(field.fieldName as keyof IPartLineParameters, field) as PartLineViewModel;
      }
    }

    return model;
  }
}
