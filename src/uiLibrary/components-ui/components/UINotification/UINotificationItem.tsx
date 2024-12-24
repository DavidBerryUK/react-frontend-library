import { enumAlignHorizontal, enumAlignVertical, enumNotificationStatus } from "./enums/enumNotification";
import { enumStatusType } from "./enums/EnumStatusType";
import { useUiContext } from "../../../context/UiContext";
import CommandRemoveNotification from "../../../context/actions/CommandRemoveNotification";
import CommandRequestDismissNotification from "../../../context/actions/CommandRequestDismissNotification";
import CommandUpdateNotification from "../../../context/actions/CommandUpdateNotification";
import IAlertProperties from "../../../interfaces/controls/IAlertProperties";
import IButtonProperties from "../../../interfaces/controls/IButtonProperties";
import ITextProperties from "../../../interfaces/controls/ITextProperties";
import NotificationModel from "./models/NotificationModel";
import React, { useEffect, useRef } from "react";
import UIAlert from "../UIAlert/UIAlert";
import UIButton from "../UIButton/UIButton";
import UINotificationsIcon from "./UINotificationsIcon";
import UIText from "../UIText/UIText";

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

  var alertProps: IAlertProperties = { lighter: true };
  var textProps: ITextProperties = {};
  var buttonProps: IButtonProperties = { text: "Dismiss" };

  switch (props.notification.type) {
    case enumStatusType.info:
      alertProps.info = true;
      textProps.info = true;
      buttonProps.info = true;
      break;

    case enumStatusType.question:
      alertProps.primary = true;
      textProps.primary = true;
      buttonProps.primary = true;
      break;

    case enumStatusType.warning:
      alertProps.warning = true;
      textProps.warning = true;
      buttonProps.warning = true;
      break;

    case enumStatusType.danger:
      alertProps.danger = true;
      textProps.danger = true;
      buttonProps.danger = true;
      break;

    case enumStatusType.success:
      alertProps.success = true;
      textProps.success = true;
      buttonProps.success = true;
      break;
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
      <UIAlert borderedLeft {...alertProps}>
        <div className="region-content">
          <div className="region-icon">
            <UINotificationsIcon notification={props.notification} onTimerComplete={handleTimerCompleteEvent} />
          </div>
          <div className="region-body">
            <UIText {...textProps} subHeading>
              {props.notification.title}
            </UIText>
            <UIText {...textProps} body>
              {props.notification.message}
            </UIText>
          </div>
          <div className="region-actions">
            <UIButton {...buttonProps} onClick={handleTimerCompleteEvent} />
          </div>
        </div>
      </UIAlert>
    </div>
  );
};

export default UINotificationItem;
