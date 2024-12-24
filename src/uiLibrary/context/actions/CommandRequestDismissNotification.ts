import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";
import EnumNotificationStatus from "../../components-ui/components/UINotification/enums/EnumNotificationStatus";
import NotificationModel from "../../components-ui/components/UINotification/models/NotificationModel";

export default class CommandRequestDismissNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  constructor(notification: NotificationModel) {
    this.notification = notification.clone();
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    this.notification.status = EnumNotificationStatus.requestedToDismiss;
    notificationManager.update(this.notification);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
