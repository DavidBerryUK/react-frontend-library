import EnumNotificationPlacement from "../../components-ui/components/UINotification/enums/EnumNotificationPlacement";
import EnumNotificationType from "../../components-ui/components/UINotification/enums/EnumNotificationType";
import OptionModel from "../../components-ui/components/UISegment/models/OptionModel";

export default class FactoryNotificationOptionLists {
  public static GetNotificationTypes(): Array<OptionModel<EnumNotificationType>> {
    const options: Array<OptionModel<EnumNotificationType>> = [
      new OptionModel<EnumNotificationType>("info", "Info", EnumNotificationType.info),
      new OptionModel<EnumNotificationType>("question", "Question", EnumNotificationType.question),
      new OptionModel<EnumNotificationType>("success", "Success", EnumNotificationType.success),
      new OptionModel<EnumNotificationType>("warning", "Warning", EnumNotificationType.warning),
      new OptionModel<EnumNotificationType>("danger", "Danger", EnumNotificationType.danger),
    ];
    return options;
  }

  public static GetNotificationPlacements(): Array<OptionModel<EnumNotificationPlacement>> {
    const options: Array<OptionModel<EnumNotificationPlacement>> = [
      new OptionModel<EnumNotificationPlacement>("topLeft", "Top Left", EnumNotificationPlacement.topLeft),
      new OptionModel<EnumNotificationPlacement>("topCenter", "Top Center", EnumNotificationPlacement.topCenter),
      new OptionModel<EnumNotificationPlacement>("topRight", "Top Right", EnumNotificationPlacement.topRight),
      new OptionModel<EnumNotificationPlacement>("bottomLeft", "Bottom Left", EnumNotificationPlacement.bottomLeft),
      new OptionModel<EnumNotificationPlacement>("bottomCenter", "Bottom Center", EnumNotificationPlacement.bottomCenter),
      new OptionModel<EnumNotificationPlacement>("bottomRight", "Bottom Right", EnumNotificationPlacement.bottomRight),
    ];
    return options;
  }

  public static getNotificationTypeName = (type: EnumNotificationType): string => {
    switch (type) {
      case EnumNotificationType.info:
        return "Information";

      case EnumNotificationType.question:
        return "Question";

      case EnumNotificationType.success:
        return "Success";

      case EnumNotificationType.warning:
        return "Warning";

      case EnumNotificationType.danger:
        return "Danger";

      default:
        return "Unknown";
    }
  };
}
