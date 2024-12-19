import { nanoid } from "nanoid";
import { enumAlignHorizontal, enumAlignVertical, enumNotificationStatus } from "../enums/enumNotification";

import { enumNotificationDuration } from "../enums/enumNotification";
import { enumStatusType } from "../enums/EnumStatusType";

//
// Represents an individual notification
//
export default class NotificationModel {
  status: enumNotificationStatus;
  id: string;
  type: enumStatusType;
  duration: enumNotificationDuration;
  title: string;
  message: string;
  x: number;
  y: number;
  width: number;
  height: number;
  transitionDelay: number;
  alignVertical: enumAlignVertical;
  alignHorizontal: enumAlignHorizontal;

  constructor(type: enumStatusType, duration: enumNotificationDuration, title: string, message: string) {
    this.id = nanoid();
    this.type = type;
    this.title = title;
    this.duration = duration;
    this.message = message;
    this.status = enumNotificationStatus.initialising;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.transitionDelay = 0;
    this.alignVertical = enumAlignVertical.none;
    this.alignHorizontal = enumAlignHorizontal.none;
  }

  clone(): NotificationModel {
    var copy = new NotificationModel(this.type, this.duration, this.title, this.message);
    copy.status = this.status;
    copy.id = this.id;
    copy.x = this.x;
    copy.y = this.y;
    copy.width = this.width;
    copy.height = this.height;
    copy.transitionDelay = this.transitionDelay;
    copy.alignVertical = this.alignVertical;
    copy.alignHorizontal = this.alignHorizontal;
    return copy;
  }
}
