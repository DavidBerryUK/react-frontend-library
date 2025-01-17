import { IUiContextDispatchCommand, UiContextProps } from "../UiContext";

export default class CommandSidePanelRightClose implements IUiContextDispatchCommand {
  execute(state: UiContextProps): UiContextProps {
    return {
      ...state,
      panelRightOpen: false,
    };
  }
}
