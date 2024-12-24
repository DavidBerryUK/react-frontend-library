import EnumAlignHorizontal from "../enums/EnumAlignHorizontal";
import EnumAlignVertical from "../enums/EnumAlignVertical";
import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";

export default class NotificationConfiguration {
  placement: EnumNotificationPlacement;
  alignVertical: EnumAlignVertical = EnumAlignVertical.none;
  alignHorizontal: EnumAlignHorizontal = EnumAlignHorizontal.none;
  public adjustmentVertical: number = 0;
  public adjustmentHorizontal: number = 0;

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
        this.adjustmentVertical = 1;
        break;

      case EnumNotificationPlacement.bottomCenter:
      case EnumNotificationPlacement.bottomLeft:
      case EnumNotificationPlacement.bottomRight:
        this.alignVertical = EnumAlignVertical.bottom;
        this.adjustmentVertical = -1;
        break;
    }
  }

  private calculateHorizontalAlignment() {
    switch (this.placement) {
      case EnumNotificationPlacement.topLeft:
      case EnumNotificationPlacement.bottomLeft:
        this.alignHorizontal = EnumAlignHorizontal.left;
        this.adjustmentHorizontal = 0;
        break;

      case EnumNotificationPlacement.topCenter:
      case EnumNotificationPlacement.bottomCenter:
        this.alignHorizontal = EnumAlignHorizontal.center;
        this.adjustmentHorizontal = 0;
        break;

      case EnumNotificationPlacement.topRight:
      case EnumNotificationPlacement.bottomRight:
        this.alignHorizontal = EnumAlignHorizontal.right;
        this.adjustmentHorizontal = 0;
        break;
    }
  }
}
