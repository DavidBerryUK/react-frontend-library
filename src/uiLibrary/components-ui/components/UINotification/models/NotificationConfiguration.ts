import EnumAlignHorizontal from "../enums/EnumAlignHorizontal";
import EnumAlignVertical from "../enums/EnumAlignVertical";
import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";

export default class NotificationConfiguration {
  placement: EnumNotificationPlacement;
  alignVertical: EnumAlignVertical = EnumAlignVertical.none;
  alignHorizontal: EnumAlignHorizontal = EnumAlignHorizontal.none;
  borderTopBottom: number = 16;
  borderLeftRight: number = 16;
  notificationWidth: number = 640;

  constructor(placement: EnumNotificationPlacement) {
    this.placement = placement;
    this.calculateHorizontalAlignment();
    this.calculateVerticalAlignment();
  }

  static get default(): NotificationConfiguration {
    return new NotificationConfiguration(EnumNotificationPlacement.bottomCenter);
  }

  clone(): NotificationConfiguration {
    var model = new NotificationConfiguration(this.placement);
    return model;
  }

  cloneWithPlacement(placement: EnumNotificationPlacement): NotificationConfiguration {
    var model = new NotificationConfiguration(placement);
    return model;
  }

  private calculateVerticalAlignment() {
    switch (this.placement) {
      case EnumNotificationPlacement.topCenter:
      case EnumNotificationPlacement.topLeft:
      case EnumNotificationPlacement.topRight:
        this.alignVertical = EnumAlignVertical.top;
        break;

      case EnumNotificationPlacement.bottomCenter:
      case EnumNotificationPlacement.bottomLeft:
      case EnumNotificationPlacement.bottomRight:
        this.alignVertical = EnumAlignVertical.bottom;
        break;
    }
  }

  private calculateHorizontalAlignment() {
    switch (this.placement) {
      case EnumNotificationPlacement.topLeft:
      case EnumNotificationPlacement.bottomLeft:
        this.alignHorizontal = EnumAlignHorizontal.left;
        break;

      case EnumNotificationPlacement.topCenter:
      case EnumNotificationPlacement.bottomCenter:
        this.alignHorizontal = EnumAlignHorizontal.center;
        break;

      case EnumNotificationPlacement.topRight:
      case EnumNotificationPlacement.bottomRight:
        this.alignHorizontal = EnumAlignHorizontal.right;
        break;
    }
  }
}
