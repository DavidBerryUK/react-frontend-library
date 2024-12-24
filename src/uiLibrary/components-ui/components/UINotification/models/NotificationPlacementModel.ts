import EnumAlignHorizontal from "../enums/EnumAlignHorizontal";
import EnumAlignVertical from "../enums/EnumAlignVertical";
import EnumNotificationPlacement from "../enums/EnumNotificationPlacement";

//
// used to calculate placement of notifications
//
export default class NotificationPlacementModel {
  alignVertical: EnumAlignVertical = EnumAlignVertical.none;
  alignHorizontal: EnumAlignHorizontal = EnumAlignHorizontal.none;
  adjustmentVertical: number = 0;
  adjustmentHorizontal: number = 0;

  constructor(placement: EnumNotificationPlacement) {
    this.calculateVerticalAlignment(placement);
    this.calculateHorizontalAlignment(placement);
  }

  private calculateVerticalAlignment(placement: EnumNotificationPlacement) {
    switch (placement) {
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
        this.adjustmentVertical = 1;
        break;
    }
  }

  private calculateHorizontalAlignment(placement: EnumNotificationPlacement) {
    switch (placement) {
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
