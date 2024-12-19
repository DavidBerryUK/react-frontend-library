import { enumNotificationPlacement } from "../enums/enumNotification";

export default class NotificationConfiguration {
  placement: enumNotificationPlacement;

  constructor() {
    this.placement = enumNotificationPlacement.bottomRight;
  }

  static get default(): NotificationConfiguration {
    return new NotificationConfiguration();
  }

  clone(): NotificationConfiguration {
    var model = new NotificationConfiguration();
    model.placement = this.placement;
    return model;
  }

  cloneWithPlacement(placement: enumNotificationPlacement): NotificationConfiguration {
    var model = new NotificationConfiguration();
    model.placement = placement;
    return model;
  }
}
