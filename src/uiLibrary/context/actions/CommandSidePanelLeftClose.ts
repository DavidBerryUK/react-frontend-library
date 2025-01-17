import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandSidePanelLeftClose implements IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps {
    return {
      ...state,
      panelLeftOpen: false,
    };
  }
}
