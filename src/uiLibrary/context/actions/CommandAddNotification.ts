import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";
import EnumNotificationDuration from "../../components-ui/components/UINotification/enums/EnumNotificationDuration";
import EnumNotificationType from "../../components-ui/components/UINotification/enums/EnumNotificationType";
import NotificationModel from "../../components-ui/components/UINotification/models/NotificationModel";

export default class CommandAddNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  // Create the command with all data needed to update
  //  the state
  constructor(type: EnumNotificationType, duration: EnumNotificationDuration, title: string, message: string) {
    this.notification = new NotificationModel(type, duration, title, message);
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    notificationManager.add(this.notification);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
