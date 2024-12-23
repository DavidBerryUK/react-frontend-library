import React from "react";
import UINotificationItem from "./UINotificationItem";
import { useUiContext } from "../../../context/UiContext";

const UINotifications: React.FC = () => {
  const { uiState } = useUiContext();

  return (
    <div className="ui-notification-container">
      {uiState.notificationManager.collection.collection.map((notification) => (
        <UINotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default UINotifications;
