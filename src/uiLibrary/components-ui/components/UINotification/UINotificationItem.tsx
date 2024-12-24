import { useUiContext } from "../../../context/UiContext";
import CommandRemoveNotification from "../../../context/actions/CommandRemoveNotification";
import CommandRequestDismissNotification from "../../../context/actions/CommandRequestDismissNotification";
import CommandUpdateNotification from "../../../context/actions/CommandUpdateNotification";
import EnumAlignHorizontal from "./enums/EnumAlignHorizontal";
import EnumAlignVertical from "./enums/EnumAlignVertical";
import EnumNotificationStatus from "./enums/EnumNotificationStatus";
import EnumNotificationType from "./enums/EnumNotificationType";
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

  console.log("----------------------------------");
  console.log(`vertical: ${EnumAlignVertical[props.notification.alignVertical]} horizontal:${EnumAlignHorizontal[props.notification.alignHorizontal]}`);

  let style: any = { transitionDelay: `${props.notification.transitionDelay}s` };

  if (props.notification.alignVertical === EnumAlignVertical.top) {
    console.log(`position to top ${props.notification.y}`);
    style.top = props.notification.y;
  }

  if (props.notification.alignVertical === EnumAlignVertical.bottom) {
    console.log(`position to bottom ${props.notification.y}`);
    style.bottom = props.notification.y;
  }

  if (props.notification.alignHorizontal === EnumAlignHorizontal.left) {
    console.log(`position to left ${props.notification.x}`);
    style.left = props.notification.x;
  }

  if (props.notification.alignHorizontal === EnumAlignHorizontal.right) {
    console.log(`position to right ${props.notification.x}`);
    style.right = props.notification.x;
  }

  var alertProps: IAlertProperties = { lighter: true };
  var textProps: ITextProperties = {};
  var buttonProps: IButtonProperties = { text: "Dismiss" };

  switch (props.notification.type) {
    case EnumNotificationType.info:
      alertProps.info = true;
      textProps.info = true;
      buttonProps.info = true;
      break;

    case EnumNotificationType.question:
      alertProps.primary = true;
      textProps.primary = true;
      buttonProps.primary = true;
      break;

    case EnumNotificationType.warning:
      alertProps.warning = true;
      textProps.warning = true;
      buttonProps.warning = true;
      break;

    case EnumNotificationType.danger:
      alertProps.danger = true;
      textProps.danger = true;
      buttonProps.danger = true;
      break;

    case EnumNotificationType.success:
      alertProps.success = true;
      textProps.success = true;
      buttonProps.success = true;
      break;
  }

  let className = "ui-notification";
  if (
    props.notification.status === EnumNotificationStatus.showing ||
    props.notification.status === EnumNotificationStatus.requestedToDismiss ||
    props.notification.status === EnumNotificationStatus.dismissing
  ) {
    className = `${className} shown`;
  }

  if (props.notification.status === EnumNotificationStatus.requestedToDismiss || props.notification.status === EnumNotificationStatus.dismissing) {
    className = `${className} dismissed`;
  }

  if (props.notification.alignHorizontal === EnumAlignHorizontal.center) {
    className = `${className} center`;
  }

  useEffect(() => {
    if (containerRef.current !== null) {
      if (props.notification.status === EnumNotificationStatus.initialising) {
        const size = containerRef.current.getBoundingClientRect();
        var copy = props.notification.clone();
        copy.width = size.width;
        copy.height = size.height;
        copy.status = EnumNotificationStatus.willShow;
        uiDispatch(new CommandUpdateNotification(copy));
        return;
      }

      if (props.notification.status === EnumNotificationStatus.willShow) {
        setTimeout(() => {
          const copy = props.notification.clone();
          copy.status = EnumNotificationStatus.showing;
          uiDispatch(new CommandUpdateNotification(copy));
        }, 150);
      }

      if (props.notification.status === EnumNotificationStatus.requestedToDismiss) {
        const copy = props.notification.clone();
        copy.status = EnumNotificationStatus.dismissing;

        setTimeout(() => {
          uiDispatch(new CommandRemoveNotification(copy));
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, props.notification.status]);

  const handleTimerCompleteEvent = () => {
    console.log("handleTimerCompleteEvent");
    if (props.notification.status !== EnumNotificationStatus.dismissing && props.notification.status !== EnumNotificationStatus.requestedToDismiss) {
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
