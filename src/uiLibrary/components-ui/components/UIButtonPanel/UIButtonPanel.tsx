import EnumPanelButtonAnchor from "./enums/EnumPanelButtonAnchor";
import EnumPanelButtonState from "./enums/EnumPanelButtonState";
import UIIconPanelLeftClosed from "../../../components-icons/UIIconPanelLeftClosed";
import UIIconPanelLeftOpenFull from "../../../components-icons/UIIconPanelLeftOpenFull";
import UIIconPanelLeftOpenPartial from "../../../components-icons/UIIconPanelLeftOpenPartial";
import UIIconPanelRightClosed from "../../../components-icons/UIIconPanelRightClosed";
import UIIconPanelRightOpenFull from "../../../components-icons/UIIconPanelRightOpenFull";
import UIIconPanelRightOpenPartial from "../../../components-icons/UIIconPanelRightOpenPartial";
import IButtonProperties from "../../../interfaces/controls/IButtonProperties";

type IProperties = IButtonProperties & {
  anchor: EnumPanelButtonAnchor;
  state: EnumPanelButtonState;
};

const UIPanelButton: React.FC<IProperties> = ({ anchor, state, ...buttonProps }) => {
  const icons = {
    left: {
      [EnumPanelButtonState.open]: <UIIconPanelLeftOpenFull />,
      [EnumPanelButtonState.partiallyOnly]: <UIIconPanelLeftOpenPartial />,
      [EnumPanelButtonState.closed]: <UIIconPanelLeftClosed />,
    },
    right: {
      [EnumPanelButtonState.open]: <UIIconPanelRightOpenFull />,
      [EnumPanelButtonState.partiallyOnly]: <UIIconPanelRightOpenPartial />,
      [EnumPanelButtonState.closed]: <UIIconPanelRightClosed />,
    },
  };

  const handleOnButtonPressEvent = () => {};

  const icon = icons[anchor]?.[state] || null;

  return (
    <div style={{ height: 26, width: 22 }} onClick={handleOnButtonPressEvent} {...buttonProps}>
      {icon}
    </div>
  );
};

export default UIPanelButton;
