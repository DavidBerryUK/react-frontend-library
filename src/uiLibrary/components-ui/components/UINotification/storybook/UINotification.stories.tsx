import { UiContextProvider, useUiContext } from "../../../../context/UiContext";
import CommandAddNotification from "../../../../context/actions/CommandAddNotification";
import CommandSetNotificationConfiguration from "../../../../context/actions/CommandSetNotificationConfiguration";
import EnumNotificationDuration from "../enums/EnumNotificationDuration";
import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";
import EnumNotificationType from "../enums/EnumNotificationType";
import FactoryNotificationOptionLists from "../../../../../storyExamples/factories/FactoryNotificationOptionLists";
import OptionModel from "../../UISegment/models/OptionModel";
import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import UIButton from "../../UIButton/UIButton";
import UINotifications from "../UINotifications";
import UISegment from "../../UISegment/UISegment";

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
   * Setup State for NotificationType
   */
  const [notificationTypes] = useState<Array<OptionModel<EnumNotificationType>>>(FactoryNotificationOptionLists.GetNotificationTypes());
  const [selectedType, setSelectedType] = useState<OptionModel<EnumNotificationType>>(FactoryNotificationOptionLists.GetNotificationTypes()[0]);

  /**
   * Setup State for NotificationDuration
   */
  const [notificationDurations] = useState<Array<OptionModel<EnumNotificationDuration>>>(FactoryNotificationOptionLists.GetNotificationDurations());
  const [selectedDuration, setSelectedDuration] = useState<OptionModel<EnumNotificationDuration>>(FactoryNotificationOptionLists.GetNotificationDurations()[0]);

  /**
   * Setup State for Placement
   */
  const [notificationPlacements] = useState<Array<OptionModel<EnumNotificationPlacement>>>(FactoryNotificationOptionLists.GetNotificationPlacements());
  const [selectedPlacement, setSelectedPlacement] = useState<OptionModel<EnumNotificationPlacement>>(
    FactoryNotificationOptionLists.GetNotificationPlacements().find((item) => item.data === uiState.notificationManager.configuration.placement)!,
  );

  /**
   * Event Handlers
   */
  function handleOnNotificationTypeChanged(value: OptionModel<EnumNotificationType>) {
    setSelectedType(value);
  }

  function handleOnNotificationDurationChanged(value: OptionModel<EnumNotificationDuration>) {
    setSelectedDuration(value);
  }

  const handleOnNotificationPlacementChanged = (value: OptionModel<EnumNotificationPlacement>) => {
    setSelectedPlacement(value);
    const config = uiState.notificationManager.configuration.cloneWithPlacement(value.data!);
    uiDispatch(new CommandSetNotificationConfiguration(config));
    console.log(`set placement to ${EnumNotificationPlacement[config.placement]}`);
  };

  const handleOnPublishClickEvent = () => {
    const typeName = FactoryNotificationOptionLists.getNotificationTypeName(selectedType.data!);
    uiDispatch(new CommandAddNotification(selectedType.data!, selectedDuration.data!, typeName, `You have just activated a ${typeName} Notification`));
  };

  const handleOnRandomPublishClickEvent = () => {
    const config = FactoryNotificationOptionLists.GetRandomNotificationConfig();
    uiDispatch(new CommandAddNotification(config.type, config.duration, config.title, config.message));
  };

  /**
   * Template
   */
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", margin: 12 }}>
        <UISegment options={notificationTypes} selected={selectedType} onChange={handleOnNotificationTypeChanged} />
        <UISegment options={notificationDurations} selected={selectedDuration} onChange={handleOnNotificationDurationChanged} />
        <UISegment options={notificationPlacements} selected={selectedPlacement} onChange={handleOnNotificationPlacementChanged} />
        <UIButton primary text="Publish" large onClick={handleOnPublishClickEvent} />
        <UIButton info text="Random" large onClick={handleOnRandomPublishClickEvent} />
      </div>

      <UINotifications />
    </div>
  );
};
