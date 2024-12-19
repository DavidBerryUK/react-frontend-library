import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandResetNotifications implements IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps {
    const notificationManager = state.notificationManager.clone();
    notificationManager.reset();

    return {
      ...state,
      notificationManager: notificationManager,
    };
  }
}
