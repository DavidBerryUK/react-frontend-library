import EnumNotificationDuration from "../enums/EnumNotificationDuration";
import EnumNotificationType from "../enums/EnumNotificationType";
import { UiContextProvider, useUiContext } from "../../../../context/UiContext";
import CommandAddNotification from "../../../../context/actions/CommandAddNotification";
import CommandSetNotificationConfiguration from "../../../../context/actions/CommandSetNotificationConfiguration";

import FactoryNotificationOptionLists from "../../../../storybook/factories/FactoryNotificationOptionLists";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIButton from "../../UIButton/UIButton";
import UINotifications from "../UINotifications";
import UISegment from "../../UISegment/UISegment";
import OptionModel from "../../UISegment/models/OptionModel";
import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";

const meta = {
  title: "1 - UI/UINotification",
  component: UINotifications,
  decorators: [
    (Story) => (
      <div style={{ position: "relative" }}>
        <UiContextProvider>
          <Story />
        </UiContextProvider>
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Application notifications,<br/> <b>under development</b><ul></ul>",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UINotifications>;

export default meta;

export const Notifications: React.FC = () => {
  /**
   * Get Context Handlers
   */
  const { uiState, uiDispatch } = useUiContext();

  /**
   * Setup State
   */
  const [notificationTypes] = useState<Array<OptionModel<EnumNotificationType>>>(FactoryNotificationOptionLists.GetNotificationTypes());
  const [selectedType, setSelectedType] = useState<OptionModel<EnumNotificationType>>(FactoryNotificationOptionLists.GetNotificationTypes()[0]);

  const [notificationPlacements] = useState<Array<OptionModel<EnumNotificationPlacement>>>(FactoryNotificationOptionLists.GetNotificationPlacements());
  const [selectedPlacement, setSelectedPlacement] = useState<OptionModel<EnumNotificationPlacement>>(
    FactoryNotificationOptionLists.GetNotificationPlacements()[0],
  );

  /**
   * Event Handlers
   */
  const handleOnNotificationTypeChanged = (value: OptionModel<EnumNotificationType>) => {
    setSelectedType(value);
  };

  const handleOnNotificationPlacementChanged = (value: OptionModel<EnumNotificationPlacement>) => {
    setSelectedPlacement(value);
    const config = uiState.notificationManager.configuration.cloneWithPlacement(selectedPlacement.data!);
    uiDispatch(new CommandSetNotificationConfiguration(config));
  };

  const handleOnPublishClickEvent = () => {
    const typeName = FactoryNotificationOptionLists.getNotificationTypeName(selectedType.data!);

    uiDispatch(new CommandAddNotification(selectedType.data!, EnumNotificationDuration.short, typeName, `You have just activated a ${typeName} Notification`));
  };

  /**
   * Template
   */
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: 12 }}>
        <UISegment options={notificationTypes} selected={selectedType} onChange={handleOnNotificationTypeChanged} />
        <UISegment options={notificationPlacements} selected={selectedPlacement} onChange={handleOnNotificationPlacementChanged} />
        <UIButton primary text="GO" large onClick={handleOnPublishClickEvent} />
      </div>

      <UINotifications />
    </div>
  );
};
