import FieldModel from "../../models/fields/FieldModel";

export default interface IPropFocus {
  onGotFocus?: (field: FieldModel) => void;
  onLostFocus?: (field: FieldModel) => void;
}
