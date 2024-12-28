import EnumFieldInteractionMode from "../../enums/EnumFieldInteractionMode";

export default interface IPropInteractionMode {
  interactionMode?: EnumFieldInteractionMode;
  hidden?: boolean;
  readonly?: boolean;
  editable?: boolean;
}
