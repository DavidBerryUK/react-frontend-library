import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";

export default class NotificationConfiguration {
  placement: EnumNotificationPlacement;

  constructor() {
    this.placement = EnumNotificationPlacement.bottomRight;
  }

  static get default(): NotificationConfiguration {
    return new NotificationConfiguration();
  }

  clone(): NotificationConfiguration {
    var model = new NotificationConfiguration();
    model.placement = this.placement;
    return model;
  }

  cloneWithPlacement(placement: EnumNotificationPlacement): NotificationConfiguration {
    var model = new NotificationConfiguration();
    model.placement = placement;
    return model;
  }
}
