import NotificationModel from "../../components-ui/components/UINotification/models/NotificationModel";
import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandUpdateNotification implements IUiContextDispatchCommand {
  notification: NotificationModel;

  // Create the command with all data needed to update
  //  the state
  constructor(notification: NotificationModel) {
    this.notification = notification;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    notificationManager.update(this.notification);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
