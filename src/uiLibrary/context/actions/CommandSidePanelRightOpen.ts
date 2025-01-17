import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandSidePanelRightOpen implements IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps {
    return {
      ...state,
      panelRightOpen: true,
    };
  }
}
