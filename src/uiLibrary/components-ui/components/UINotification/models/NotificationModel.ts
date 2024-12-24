import { nanoid } from "nanoid";
import EnumNotificationDuration from "../enums/EnumNotificationDuration";
import EnumNotificationStatus from "../enums/EnumNotificationStatus";
import EnumNotificationType from "../enums/EnumNotificationType";

//
// Represents an individual notification
//
export default class NotificationModel {
  status: EnumNotificationStatus;
  id: string;
  type: EnumNotificationType;
  duration: EnumNotificationDuration;
  title: string;
  message: string;
  x: number;
  y: number;
  width: number;
  height: number;
  transitionDelay: number;

  constructor(type: EnumNotificationType, duration: EnumNotificationDuration, title: string, message: string) {
    this.id = nanoid();
    this.type = type;
    this.title = title;
    this.duration = duration;
    this.message = message;
    this.status = EnumNotificationStatus.initialising;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.transitionDelay = 0;
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
    return copy;
  }
}
