import { useUiContext } from "../../uiLibrary/context/UiContext";
import CommandSidePanelLeftClose from "../../uiLibrary/context/actions/CommandSidePanelLeftClose";
import CommandSidePanelLeftOpen from "../../uiLibrary/context/actions/CommandSidePanelLeftOpen";
import CommandSidePanelRightClose from "../../uiLibrary/context/actions/CommandSidePanelRightClose";
import CommandSidePanelRightOpen from "../../uiLibrary/context/actions/CommandSidePanelRightOpen";
import EnumPanelButtonAnchor from "../../uiLibrary/components-ui/components/UIButtonPanel/enums/EnumPanelButtonAnchor";
import EnumPanelButtonState from "../../uiLibrary/components-ui/components/UIButtonPanel/enums/EnumPanelButtonState";
import React, { useState } from "react";
import UILayoutFlex from "../../uiLibrary/components-ui/components/UILayoutFlex/UILayoutFlex";
import UILayoutSideHost from "../../uiLibrary/components-ui/components/UILayoutSidePanels/UILayoutSideHost";
import UILoremUpsum from "../../storyExamples/UILoremUpsum";
import UIPanelButton from "../../uiLibrary/components-ui/components/UIButtonPanel/UIButtonPanel";

const HomePage: React.FC = () => {
  const { uiDispatch } = useUiContext();
  const [panelLeftState, setPanelLeftState] = useState<EnumPanelButtonState>(EnumPanelButtonState.closed);
  const [panelRightState, setPanelRightState] = useState<EnumPanelButtonState>(EnumPanelButtonState.closed);

  const handleLeftPanelButtonClickEvent = () => {
    if (panelLeftState === EnumPanelButtonState.closed) {
      setPanelLeftState(EnumPanelButtonState.open);
      uiDispatch(new CommandSidePanelLeftOpen());
    } else {
      setPanelLeftState(EnumPanelButtonState.closed);
      uiDispatch(new CommandSidePanelLeftClose());
    }
  };

  const handleRightPanelButtonClickEvent = () => {
    if (panelRightState === EnumPanelButtonState.closed) {
      setPanelRightState(EnumPanelButtonState.open);
      uiDispatch(new CommandSidePanelRightOpen());
    } else {
      setPanelRightState(EnumPanelButtonState.closed);
      uiDispatch(new CommandSidePanelRightClose());
    }
  };

  return (
    <UILayoutSideHost>
      <UILayoutFlex gap3>
        <UIPanelButton anchor={EnumPanelButtonAnchor.left} state={panelLeftState} onClick={handleLeftPanelButtonClickEvent} />
        <UIPanelButton anchor={EnumPanelButtonAnchor.right} state={panelRightState} onClick={handleRightPanelButtonClickEvent} />
      </UILayoutFlex>
      <UILoremUpsum />
      <UILoremUpsum />
      <UILoremUpsum />
    </UILayoutSideHost>
  );
};

export default HomePage;
