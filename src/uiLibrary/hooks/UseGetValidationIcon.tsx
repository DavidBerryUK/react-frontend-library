import { ReactNode } from "react";
import EnumValidationState from "../validation/enum/EnumValidationState";
import FieldModel from "../models/fields/FieldModel";
import IPropValue from "../interfaces/properties/IPropValue";
import UIIconAlertExclamationTriangle from "../components-icons/UIIconAlertExclamationTriangle";
import UIIconTickCircle from "../components-icons/UIIconTickCircle";

const useGetValidationIcon = (props: IPropValue<FieldModel>): ReactNode | null => {
  if (!props.value.validation.hasRules) {
    return null;
  }

  switch (props.value.validation.state) {
    case EnumValidationState.valid:
      return <UIIconTickCircle success smaller />;

    case EnumValidationState.invalid:
      return <UIIconAlertExclamationTriangle danger smaller />;

    default:
      return null;
  }
};

export default useGetValidationIcon;
