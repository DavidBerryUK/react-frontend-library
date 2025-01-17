import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandSidePanelLeftOpen implements IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps {
    return {
      ...state,
      panelLeftOpen: true,
    };
  }
}
