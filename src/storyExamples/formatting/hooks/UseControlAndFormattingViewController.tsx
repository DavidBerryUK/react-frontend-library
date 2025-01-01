import { useState } from "react";
import OptionModel from "../../../uiLibrary/components-ui/components/UISegment/models/OptionModel";
import EnumFieldDataType from "../../../uiLibrary/enums/EnumFieldDataType";
import EnumFieldInteractionMode from "../../../uiLibrary/enums/EnumFieldInteractionMode";
import EnumFieldLabelPlacement from "../../../uiLibrary/enums/EnumFieldLabelPlacement";
import IPropInteractionMode from "../../../uiLibrary/interfaces/properties/IPropInteractionMode";
import IPropLabelPlacementMode from "../../../uiLibrary/interfaces/properties/IPropLabelPlacementMode";
import FieldModel from "../../../uiLibrary/models/fields/FieldModel";
import FactorFormsLayoutLists from "../../factories/FactorFormsLayoutLists";
import FieldValidation from "../../../uiLibrary/validation/models/FieldValidation";
import RuleMandatory from "../../../uiLibrary/validation/rules/RuleMandatory";
import RuleMaxLength from "../../../uiLibrary/validation/rules/RuleMaxLength";

const useControlAndFormattingViewController = () => {
  const [placementList] = useState<Array<OptionModel<EnumFieldLabelPlacement>>>(FactorFormsLayoutLists.GetFieldLabelPlacment());
  const [InteractionModesList] = useState<Array<OptionModel<EnumFieldInteractionMode>>>(FactorFormsLayoutLists.GetFieldInteractiveModes());

  const [selectedPlacement, setSelectedPlacement] = useState<OptionModel<EnumFieldLabelPlacement>>(FactorFormsLayoutLists.GetFieldLabelPlacment()[0]);
  const [selectedInteractionMode, setSelectedInteractionMode] = useState<OptionModel<EnumFieldInteractionMode>>(
    FactorFormsLayoutLists.GetFieldInteractiveModes()[0],
  );

  const [forename, setForename] = useState<FieldModel>(
    FieldModel.create("forename", "Forename", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
  );
  const [surname, setSurname] = useState<FieldModel>(
    FieldModel.create("surname", "Surname", EnumFieldDataType.string, "", new FieldValidation([new RuleMandatory(), new RuleMaxLength(20)])),
  );

  const handleOnPlacementChangedEvent = (value: OptionModel<EnumFieldLabelPlacement>) => {
    setSelectedPlacement(value);
  };

  const handleOnInteractionModeChangedEvent = (value: OptionModel<EnumFieldInteractionMode>) => {
    setSelectedInteractionMode(value);
  };

  const handleOnForenameChangedEvent = (value: FieldModel) => {
    setForename(value);
  };

  const handleOnSurnameChangedEvent = (value: FieldModel) => {
    setSurname(value);
  };

  var props: IPropLabelPlacementMode & IPropInteractionMode = {};

  if (selectedPlacement.data! === EnumFieldLabelPlacement.column) {
    props.column = true;
  }
  if (selectedPlacement.data! === EnumFieldLabelPlacement.row) {
    props.row = true;
  }

  if (selectedInteractionMode.data! === EnumFieldInteractionMode.ReadOnly) {
    props.readonly = true;
  }

  if (selectedInteractionMode.data! === EnumFieldInteractionMode.Hidden) {
    props.hidden = true;
  }

  return {
    props,
    forename,
    surname,
    placementList,
    selectedPlacement,
    InteractionModesList,
    selectedInteractionMode,
    handleOnPlacementChangedEvent,
    handleOnInteractionModeChangedEvent,
    handleOnForenameChangedEvent,
    handleOnSurnameChangedEvent,
  };
};

export default useControlAndFormattingViewController;
