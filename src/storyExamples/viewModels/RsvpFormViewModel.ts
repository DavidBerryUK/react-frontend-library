import BaseViewModel from "../../uiLibrary/models/fields/BaseViewModel";
import EnumFieldDataType from "../../uiLibrary/enums/EnumFieldDataType";
import FieldModel from "../../uiLibrary/models/fields/FieldModel";
import FieldSchema from "../../uiLibrary/models/fields/FieldSchema";
import RuleInteger from "../../uiLibrary/validation/rules/RuleInteger";
import RuleMandatory from "../../uiLibrary/validation/rules/RuleMandatory";
import RuleMaxLength from "../../uiLibrary/validation/rules/RuleMaxLength";
import RuleMinLength from "../../uiLibrary/validation/rules/RuleMinLength";
import RuleValueBetween from "../../uiLibrary/validation/rules/RuleValueBetween";
import ViewModelSchema, { SchemaBase } from "../../uiLibrary/models/fields/ViewModelSchema";

class RsvpViewModelSchema extends ViewModelSchema {
  fields: SchemaBase = {
    guestName: new FieldSchema("Guest Name", EnumFieldDataType.string, [new RuleMandatory(), new RuleMinLength(2), new RuleMaxLength(100)]),
    attending: new FieldSchema("Attending", EnumFieldDataType.boolean),
    numberOfGuests: new FieldSchema("Number Of Guests (1-4)", EnumFieldDataType.number, [new RuleMandatory(), new RuleInteger(), new RuleValueBetween(1, 4)]),
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
export default class RsvpFormViewModel extends BaseViewModel<RsvpFormViewModel> {
  // the schema provides field meta data such as fieldname, ui-caption, data types

  static modelSchema = new RsvpViewModelSchema();

  /****************************************************/
  /* Initialize RsvpFormViewModel with Field Models */
  /****************************************************/

  /**
   * @param guestName - Initial value for the "guestName" field.
   * @param attending - Initial value for the "attending" field.
   * @param numberOfGuests - Initial value for the "numberOfGuests" field.
   * @returns {RsvpFormViewModel} A new instance of RsvpFormViewModel with initialized fields.
   */
  static createViewModel(guestName: string, attending: boolean, numberOfGuests: number): RsvpFormViewModel {
    // Define the type for initialValues based on the keys of the modelSchema fields
    const initialValues: {
      // this ensures that initial values are spelt correctly
      [K in keyof RsvpViewModelSchema["fields"]]: RsvpViewModelSchema["fields"][K];
    } = {
      guestName,
      attending,
      numberOfGuests,
    } as any;

    var form = RsvpFormViewModel.create(this.createInitialFields(this.modelSchema, initialValues));
    return form;
  }

  static CreateEmptyViewModel(): RsvpFormViewModel {
    return this.createViewModel("", false, 0);
  }

  /****************************************************/
  /* GETTERS FOR FIELD VALUES                         *
  /****************************************************/

  get guestName(): FieldModel {
    return this.fields.get(RsvpFormViewModel.modelSchema.fields.guestName.fieldName)!;
  }

  get attending(): FieldModel {
    return this.fields.get(RsvpFormViewModel.modelSchema.fields.attending.fieldName)!;
  }

  get numberOfGuests(): FieldModel {
    return this.fields.get(RsvpFormViewModel.modelSchema.fields.numberOfGuests.fieldName)!;
  }

  /****************************************************/
  /* Form Events                                      */
  /****************************************************/
  onFieldUpdated(model: RsvpFormViewModel, oldField: FieldModel, newField: FieldModel): RsvpFormViewModel {
    if (newField.fieldName === model.attending.fieldName) {
      model = this.applyConditionalValidation(model);
    }
    return model;
  }

  onInitialise(model: RsvpFormViewModel): RsvpFormViewModel {
    model = model.applyConditionalValidation(model);
    return model;
  }

  /****************************************************/
  /* Conditional Validation
  /****************************************************/
  applyConditionalValidation(model: RsvpFormViewModel): RsvpFormViewModel {
    // Swith validation for number of guests on/off depending on the attending value

    if (model.attending.valueAsBoolean) {
      model = model.cloneWithField(model.numberOfGuests.cloneAsActive());
    } else {
      model = model.cloneWithField(model.numberOfGuests.cloneAsInactive());
    }

    return model;
  }
}
