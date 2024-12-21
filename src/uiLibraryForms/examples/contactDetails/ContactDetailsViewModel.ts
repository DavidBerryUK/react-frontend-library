import BaseViewModel from "../../models/fields/BaseViewModel";
import EnumFieldDataType from "../../enums/EnumFieldDataType";
import FieldModel from "../../models/fields/FieldModel";
import FieldSchema from "../../models/fields/FieldSchema";
import RuleMandatory from "../../validation/rules/RuleMandatory";
import RuleMaxLength from "../../validation/rules/RuleMaxLength";
import RuleMinLength from "../../validation/rules/RuleMinLength";
import ViewModelSchema, { SchemaBase } from "../../models/fields/ViewModelSchema";

class ContactDetailsViewModelSchema extends ViewModelSchema {
  fields: SchemaBase = {
    forename: new FieldSchema("Forename", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(2), new RuleMaxLength(100)]),
    surname: new FieldSchema("Surname", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(2), new RuleMaxLength(100)]),
    emailAddress: new FieldSchema("Email Address", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(2), new RuleMaxLength(250)]),
    message: new FieldSchema("Message", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(20), new RuleMaxLength(1000)]),
  };

  constructor() {
    super();
    this.populateFieldNames();
  }
}

/**
 * The Contact Form is imutable, meaning that it is read only and any
 * changes result in a new instance. With the help of immutable package
 * only the changes fields have a new instance, resulting in faster mutations
 * and reduction in memory changes
 */
export default class ContactDetailsViewModel extends BaseViewModel<ContactDetailsViewModel> {
  // the schema provides field meta data such as fieldname, ui-caption, data types
  static modelSchema = new ContactDetailsViewModelSchema();

  /****************************************************/
  /* Initialize ContactFormViewModel with Field Models */
  /****************************************************/

  static CreateViewModel(forename: string, surname: string, emailAddress: string, message: string): ContactDetailsViewModel {
    // Define the type for initialValues based on the keys of the modelSchema fields
    const initialValues: {
      // this ensures that initial values are spelt correctly
      [K in keyof ContactDetailsViewModelSchema["fields"]]: ContactDetailsViewModelSchema["fields"][K];
    } = {
      forename,
      surname,
      emailAddress,
      message,
    } as any;
    var form = ContactDetailsViewModel.create(this.createInitialFields(this.modelSchema, initialValues));
    return form;
  }

  static CreateEmptyViewModel(): ContactDetailsViewModel {
    return this.CreateViewModel("", "", "", "");
  }

  /****************************************************/
  /* GETTERS FOR FIELD VALUES                         *
  /****************************************************/
  get forename(): FieldModel {
    return this.fields.get(ContactDetailsViewModel.modelSchema.fields.forename.fieldName)!;
  }

  get surname(): FieldModel {
    return this.fields.get(ContactDetailsViewModel.modelSchema.fields.surname.fieldName)!;
  }

  get emailAddress(): FieldModel {
    return this.fields.get(ContactDetailsViewModel.modelSchema.fields.emailAddress.fieldName)!;
  }

  get message(): FieldModel {
    return this.fields.get(ContactDetailsViewModel.modelSchema.fields.message.fieldName)!;
  }

  /****************************************************/
  /* Form Events                                      */
  /****************************************************/
  onFieldUpdated(model: ContactDetailsViewModel, oldField: FieldModel, newField: FieldModel): ContactDetailsViewModel {
    return model;
  }

  onInitialise(model: ContactDetailsViewModel): ContactDetailsViewModel {
    return model;
  }
}
