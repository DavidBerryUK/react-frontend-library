import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";
import NotificationModel from "../../components/UINotification/models/NotificationModel";
import { enumNotificationStatus } from "../../components/UINotification/enums/enumNotification";

export default class CommandDismissNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  constructor(notification: NotificationModel) {
    this.notification = notification.clone();
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    this.notification.status = enumNotificationStatus.dismissing;
    notificationManager.update(this.notification);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
