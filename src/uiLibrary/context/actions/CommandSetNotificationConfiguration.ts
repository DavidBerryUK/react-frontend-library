import NotificationConfiguration from "../../components-ui/components/UINotification/models/NotificationConfiguration";
import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandSetNotificationConfiguration implements IUiContextDispatchCommand {
  notificationConfig: NotificationConfiguration;

  // Create the command with all data needed to update
  //  the state
  constructor(notificationConfig: NotificationConfiguration) {
    this.notificationConfig = notificationConfig;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    notificationManager.changeConfiguration(this.notificationConfig);

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
