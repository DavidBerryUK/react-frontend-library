import EnumNotificationDuration from "../../components-ui/components/UINotification/enums/EnumNotificationDuration";
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

  public static GetNotificationDurations(): Array<OptionModel<EnumNotificationDuration>> {
    const options: Array<OptionModel<EnumNotificationDuration>> = [
      new OptionModel<EnumNotificationDuration>("s", "Short", EnumNotificationDuration.short),
      new OptionModel<EnumNotificationDuration>("m", "Medium", EnumNotificationDuration.medium),
      new OptionModel<EnumNotificationDuration>("l", "Long", EnumNotificationDuration.long),
    ];
    return options;
  }

  public static getNotificationTypeName = (type: EnumNotificationType): string => {
    switch (type) {
      case EnumNotificationType.success:
        return "Success";

      case EnumNotificationType.info:
        return "Information";

      case EnumNotificationType.warning:
        return "Warning";

      case EnumNotificationType.danger:
        return "Danger";

      case EnumNotificationType.question:
        return "Question";

      default:
        return `Unknown type ${type} ${EnumNotificationType[type]}`;
    }
  };

  private static GetRandomNotificationType(): EnumNotificationType {
    const enumValues = Object.values(EnumNotificationType).filter((value) => typeof value === "number");
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as EnumNotificationType;
  }

  private static GetRandomNotificationDuration(): EnumNotificationDuration {
    const enumValues = Object.values(EnumNotificationDuration).filter((value) => typeof value === "number");
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as EnumNotificationDuration;
  }

  public static GetRandomNotificationConfig() {
    // get a random value for EnumNotificationType
    const type = this.GetRandomNotificationType();
    const duration = this.GetRandomNotificationDuration();
    const title = this.getNotificationTypeName(type);
    const message = this.getRandomMessageForType(type);

    return { type, duration, title, message };
  }

  public static getRandomMessageForType = (type: EnumNotificationType): string => {
    let messages: Array<string>;
    switch (type) {
      case EnumNotificationType.info:
        messages = [
          "Informational message.",
          "Your update has been successfully saved.",
          "The system will undergo maintenance on Saturday at 10 PM.",
          "Here's a quick tip: You can access settings from the menu.",
          "Did you know? Our system offers advanced features for tracking your performance, analyzing results, and gaining insights to help you make better decisions every day.",
        ];
        break;

      case EnumNotificationType.question:
        messages = [
          "Are you sure you want to proceed?",
          "Would you like to save your changes before exiting?",
          "Do you need help with this feature?",
          "What's your preferred language setting?",
          "Is there anything else we can assist you with?",
          "We noticed you haven't completed your profile yet. Would you like to take a moment to update it now and unlock additional features tailored to your preferences and needs?",
        ];
        break;

      case EnumNotificationType.success:
        messages = [
          "Operation completed successfully!",
          "Your changes have been saved.",
          "Congratulations! You've reached a new milestone.",
          "The file has been uploaded successfully.",
          "You've successfully logged in.",
          "Great job! Your submission has been received and is being processed. You'll receive a notification once the review is complete, typically within the next 24-48 hours.",
        ];
        break;

      case EnumNotificationType.warning:
        messages = [
          "This action might have unintended consequences.",
          "Please double-check your input before proceeding.",
          "Your session is about to expire in 5 minutes.",
          "Some fields are missing or incorrect.",
          "Low disk space detected. Please free up some space.",
          "Caution: The data you are about to delete is critical and cannot be recovered. Please make sure to back up any necessary information before proceeding with this action.",
        ];
        break;

      case EnumNotificationType.danger:
        messages = [
          "An error occurred. Please try again later.",
          "Unauthorized access detected!",
          "System failure! Immediate attention required.",
          "Your account has been locked due to suspicious activity.",
          "Critical error! Contact support immediately.",
          "Severe system malfunction detected! Immediate intervention is required to prevent data loss or potential service interruption. Please contact technical support without delay for assistance.",
        ];
        break;

      default:
        messages = ["Unknown notification type."];
        break;
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };
}
