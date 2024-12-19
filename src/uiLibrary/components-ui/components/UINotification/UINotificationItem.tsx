import CommandRemoveNotification from "../../context/actions/CommandRemoveNotification";
import CommandRequestDismissNotification from "../../context/actions/CommandRequestDismissNotification";
import CommandUpdateNotification from "../../context/actions/CommandUpdateNotification";
import { useUiContext } from "../../context/UiContext";
import { enumAlignHorizontal, enumAlignVertical, enumNotificationStatus } from "./enums/enumNotification";
import { enumStatusType } from "./enums/EnumStatusType";
import NotificationModel from "./models/NotificationModel";
import React, { useEffect, useRef } from "react";
import UINotificationsIcon from "./UINotificationsIcon";

interface IProperties {
  notification: NotificationModel;
}

const UINotificationItem: React.FC<IProperties> = (props) => {
  const { uiDispatch } = useUiContext();
  const containerRef = useRef<HTMLDivElement>(null);

  let style: any = { transitionDelay: `${props.notification.transitionDelay}s` };

  if (props.notification.alignVertical === enumAlignVertical.top) {
    style.top = props.notification.y;
  }

  if (props.notification.alignVertical === enumAlignVertical.bottom) {
    style.bottom = props.notification.y;
  }

  if (props.notification.alignHorizontal === enumAlignHorizontal.left) {
    style.left = props.notification.x;
  }

  if (props.notification.alignHorizontal === enumAlignHorizontal.right) {
    style.right = props.notification.x;
  }

  let className = "ui-notification";
  if (
    props.notification.status === enumNotificationStatus.showing ||
    props.notification.status === enumNotificationStatus.requestedToDismiss ||
    props.notification.status === enumNotificationStatus.dismissing
  ) {
    className = `${className} shown`;
  }

  if (props.notification.status === enumNotificationStatus.requestedToDismiss || props.notification.status === enumNotificationStatus.dismissing) {
    className = `${className} dismissed`;
  }

  if (props.notification.alignHorizontal === enumAlignHorizontal.center) {
    className = `${className} center`;
  }

  if (props.notification.type === enumStatusType.success) {
    className = `${className} theme-success`;
  }
  if (props.notification.type === enumStatusType.info) {
    className = `${className} theme-info`;
  }
  if (props.notification.type === enumStatusType.warning) {
    className = `${className} theme-warning`;
  }
  if (props.notification.type === enumStatusType.danger) {
    className = `${className} theme-danger`;
  }
  if (props.notification.type === enumStatusType.question) {
    className = `${className} theme-question`;
  }

  useEffect(() => {
    if (containerRef.current !== null) {
      if (props.notification.status === enumNotificationStatus.initialising) {
        const size = containerRef.current.getBoundingClientRect();
        var copy = props.notification.clone();
        copy.width = size.width;
        copy.height = size.height;
        copy.status = enumNotificationStatus.willShow;
        uiDispatch(new CommandUpdateNotification(copy));
        return;
      }

      if (props.notification.status === enumNotificationStatus.willShow) {
        setTimeout(() => {
          const copy = props.notification.clone();
          copy.status = enumNotificationStatus.showing;
          uiDispatch(new CommandUpdateNotification(copy));
        }, 150);
      }

      if (props.notification.status === enumNotificationStatus.requestedToDismiss) {
        const copy = props.notification.clone();
        copy.status = enumNotificationStatus.dismissing;

        setTimeout(() => {
          uiDispatch(new CommandRemoveNotification(copy));
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, props.notification.status]);

  const handleTimerCompleteEvent = () => {
    console.log("handleTimerCompleteEvent");
    if (props.notification.status !== enumNotificationStatus.dismissing && props.notification.status !== enumNotificationStatus.requestedToDismiss) {
      uiDispatch(new CommandRequestDismissNotification(props.notification));
    }
  };

  return (
    <div className={className} style={style} ref={containerRef}>
      <div className="region-icon">
        <UINotificationsIcon notification={props.notification} onTimerComplete={handleTimerCompleteEvent} />
      </div>
      <div className="region-message">
        <div className="">
          <h4 className="text-lg font-semibold">{props.notification.title}</h4>
        </div>
        <p className="text-sm">
          <span dangerouslySetInnerHTML={{ __html: props.notification.message }} />
        </p>
      </div>
      <div className="region-actions">
        <button onClick={handleTimerCompleteEvent} className="text-gray-500 hover:text-gray-700">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default UINotificationItem;
