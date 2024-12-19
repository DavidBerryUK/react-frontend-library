import { enumNotificationDuration } from "../../components/UINotification/enums/enumNotification";
import { enumStatusType } from "../../components/UINotification/enums/EnumStatusType";
import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";
import NotificationModel from "../../components/UINotification/models/NotificationModel";

export default class CommandAddNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  // Create the command with all data needed to update
  //  the state
  constructor(type: enumStatusType, duration: enumNotificationDuration, title: string, message: string) {
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
