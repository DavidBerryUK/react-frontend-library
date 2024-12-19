import { enumAlignHorizontal, enumAlignVertical, enumNotificationPlacement } from "../enums/enumNotification";

//
// used to calculate placement of notifications
//
export default class NotificationPlacementModel {
  alignVertical: enumAlignVertical = enumAlignVertical.none;
  alignHorizontal: enumAlignHorizontal = enumAlignHorizontal.none;
  adjustmentVertical: number = 0;
  adjustmentHorizontal: number = 0;

  constructor(placement: enumNotificationPlacement) {
    this.calculateVerticalAlignment(placement);
    this.calculateHorizontalAlignment(placement);
  }

  private calculateVerticalAlignment(placement: enumNotificationPlacement) {
    switch (placement) {
      case enumNotificationPlacement.topCenter:
      case enumNotificationPlacement.topLeft:
      case enumNotificationPlacement.topRight:
        this.alignVertical = enumAlignVertical.top;
        this.adjustmentVertical = 1;
        break;

      case enumNotificationPlacement.bottomCenter:
      case enumNotificationPlacement.bottomLeft:
      case enumNotificationPlacement.bottomRight:
        this.alignVertical = enumAlignVertical.bottom;
        this.adjustmentVertical = 1;
        break;
    }
  }

  private calculateHorizontalAlignment(placement: enumNotificationPlacement) {
    switch (placement) {
      case enumNotificationPlacement.topLeft:
      case enumNotificationPlacement.bottomLeft:
        this.alignHorizontal = enumAlignHorizontal.left;
        this.adjustmentHorizontal = 0;
        break;

      case enumNotificationPlacement.topCenter:
      case enumNotificationPlacement.bottomCenter:
        this.alignHorizontal = enumAlignHorizontal.center;
        this.adjustmentHorizontal = 0;
        break;

      case enumNotificationPlacement.topRight:
      case enumNotificationPlacement.bottomRight:
        this.alignHorizontal = enumAlignHorizontal.right;
        this.adjustmentHorizontal = 0;
        break;
    }
  }
}
