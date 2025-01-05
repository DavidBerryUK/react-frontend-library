import { Record } from "immutable";
import FieldModel from "../../../../uiLibrary/models/fields/FieldModel";

/**
 * Define the properties on the record
 */
export interface IPartLineParameters {
  // key = ui key, id = record id. The record id may not be known, e.g. when a new record is created on the ui.
  id: string;
  key: string;
  // properties
  code: FieldModel;
  description: FieldModel;
  price: FieldModel;
  quantity: FieldModel;
  discountPercentage: FieldModel;
  lineTotal: FieldModel;
}

type PartLineFieldNamesType = keyof IPartLineParameters;

/**
 * Create constants when refering to field names to ensure
 * we are not using magic strings,
 *
 * The use of KEY ensure that the constants are correct or a compile time error will be raised
 */
export const partLineFieldNames: { [key in PartLineFieldNamesType]: PartLineFieldNamesType } = {
  id: "id",
  key: "key",
  code: "code",
  description: "description",
  price: "price",
  quantity: "quantity",
  discountPercentage: "discountPercentage",
  lineTotal: "lineTotal",
};

/**
 * A record type is required for the view model, this is for the initial values, however
 * the record.Create() actually creates the initial values
 */
export const PartLineRecord = Record<IPartLineParameters>({
  id: "",
  key: "",
  code: undefined as any,
  description: undefined as any,
  price: undefined as any,
  quantity: undefined as any,
  discountPercentage: undefined as any,
  lineTotal: undefined as any,
});
