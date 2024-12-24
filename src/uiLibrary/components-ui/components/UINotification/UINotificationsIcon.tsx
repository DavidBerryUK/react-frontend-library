import NotificationModel from "./models/NotificationModel";
import React, { ReactNode, useRef, useState } from "react";

import useAnimatedProgressCircle from "./hooks/useAnimatedProgressCircle";
import EnumStatusTypeHelper from "./hooks/EnumStatusTypeHelper";

interface IProperties {
  notification: NotificationModel;
  onTimerComplete: () => void;
}

const UINotificationsIcon: React.FC<IProperties> = (props) => {
  const [IconComponent] = useState<ReactNode>(EnumStatusTypeHelper.getIconForStatus(props.notification.type));

  const refCanvas = useRef<HTMLCanvasElement>(null);

  const handleTimerCompleteEvent = () => {
    props.onTimerComplete();
  };

  useAnimatedProgressCircle(refCanvas.current!, props.notification.duration, handleTimerCompleteEvent);

  return (
    <div className="timer">
      <div className="notification-icon-position">{IconComponent}</div>
      <canvas className="circle-progress" width={80} height={80} ref={refCanvas} />
    </div>
  );
};

export default UINotificationsIcon;
