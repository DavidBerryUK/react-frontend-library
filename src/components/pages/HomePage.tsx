import React from "react";
import UIButton from "../../uiLibrary/components-ui/components/UIButton/UIButton";
import UILayoutFlex from "../../uiLibrary/components-ui/components/UILayoutFlex/UILayoutFlex";
import UILayoutSideHost from "../../uiLibrary/components-ui/components/UILayoutSidePanels/UILayoutSideHost";
import UILoremUpsum from "../../storyExamples/UILoremUpsum";
import { useUiContext } from "../../uiLibrary/context/UiContext";
import CommandSidePanelRightOpen from "../../uiLibrary/context/actions/CommandSidePanelRightOpen";
import CommandSidePanelRightClose from "../../uiLibrary/context/actions/CommandSidePanelRightClose";
import CommandSidePanelLeftClose from "../../uiLibrary/context/actions/CommandSidePanelLeftClose";
import CommandSidePanelLeftOpen from "../../uiLibrary/context/actions/CommandSidePanelLeftOpen";

const HomePage: React.FC = () => {
  const { uiDispatch } = useUiContext();

  const handleOnOpenLeftEvent = () => {
    uiDispatch(new CommandSidePanelLeftOpen());
  };

  const handleOnCloseLeftEvent = () => {
    uiDispatch(new CommandSidePanelLeftClose());
  };

  const handleOnOpenRightEvent = () => {
    uiDispatch(new CommandSidePanelRightOpen());
  };

  const handleOnCloseRightEvent = () => {
    uiDispatch(new CommandSidePanelRightClose());
  };

  return (
    <UILayoutSideHost>
      <UILayoutFlex gap3>
        <UIButton text="Open Left" onClick={handleOnOpenLeftEvent} />
        <UIButton text="Close Left" onClick={handleOnCloseLeftEvent} />
        <UIButton text="Open Right" onClick={handleOnOpenRightEvent} />
        <UIButton text="Close Right" onClick={handleOnCloseRightEvent} />
      </UILayoutFlex>
      <UILoremUpsum />
      <UILoremUpsum />
      <UILoremUpsum />
    </UILayoutSideHost>
  );
};

export default HomePage;
