import { enumNotificationDuration } from "../enums/enumNotification";
import { enumStatusType } from "../enums/EnumStatusType";
import { UiContextProvider, useUiContext } from "../../../../context/UiContext";
import CommandAddNotification from "../../../../context/actions/CommandAddNotification";
import React from "react";
import type { Meta } from "@storybook/react";
import UIButton from "../../UIButton/UIButton";
import UINotifications from "../UINotifications";

const meta = {
  title: "1 - UI/UINotification",
  component: UINotifications,
  decorators: [
    (Story) => (
      <UiContextProvider>
        <Story />
      </UiContextProvider>
    ),
  ],
  parameters: {
    layout: "centered",
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
  const { uiDispatch } = useUiContext();

  const handleOnSuccessNotificationClickEvent = () => {
    uiDispatch(new CommandAddNotification(enumStatusType.success, enumNotificationDuration.short, "Success", "You have just activated a Success Notification"));
  };

  const handleOnInfoNotificationClickEvent = () => {
    uiDispatch(
      new CommandAddNotification(enumStatusType.info, enumNotificationDuration.short, "Information", "You have just activated a Information Notification"),
    );
  };

  const handleOnWarningNotificationClickEvent = () => {
    uiDispatch(new CommandAddNotification(enumStatusType.warning, enumNotificationDuration.short, "Warning", "You have just activated a Warning Notification"));
  };

  const handleOnQuestionNotificationClickEvent = () => {
    uiDispatch(
      new CommandAddNotification(enumStatusType.question, enumNotificationDuration.short, "Question", "You have just activated a Question Notification"),
    );
  };

  const handleOnDangerNotificationClickEvent = () => {
    uiDispatch(new CommandAddNotification(enumStatusType.danger, enumNotificationDuration.short, "Danger!", "You have just activated a Danger Notification"));
  };
  return (
    <div
      style={{
        width: "800px",
        height: "800px",
        maxWidth: "800px",
        maxHeight: "800px",
        position: "relative",
      }}
    >
      <UIButton default text="Question Notification" onClick={handleOnQuestionNotificationClickEvent} />
      <UIButton success text="Success Notification" onClick={handleOnSuccessNotificationClickEvent} />
      <UIButton info text="Information Notification" onClick={handleOnInfoNotificationClickEvent} />
      <UIButton warning text="Warning Notification" onClick={handleOnWarningNotificationClickEvent} />
      <UIButton danger text="Danger Notification" onClick={handleOnDangerNotificationClickEvent} />
      <UINotifications />
    </div>
  );
};
