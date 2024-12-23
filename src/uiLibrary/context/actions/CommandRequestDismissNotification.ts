import { enumNotificationStatus } from "../../components-ui/components/UINotification/enums/enumNotification";
import NotificationModel from "../../components-ui/components/UINotification/models/NotificationModel";
import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandRequestDismissNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  constructor(notification: NotificationModel) {
    this.notification = notification.clone();
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    this.notification.status = enumNotificationStatus.requestedToDismiss;
    notificationManager.update(this.notification);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
