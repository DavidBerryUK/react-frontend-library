import { enumAlignHorizontal, enumAlignVertical, enumNotificationStatus } from "../enums/enumNotification";
import NotificationCollection from "../models/NotificationCollection";
import NotificationConfiguration from "../models/NotificationConfiguration";
import NotificationPlacementModel from "../models/NotificationPlacementModel";
//
// manage the positions and state of notification views
//
export default class NotificationLayoutManager {
  private notificationCollection: NotificationCollection;
  private configuration: NotificationConfiguration;

  constructor(configuration: NotificationConfiguration, notificationCollection: NotificationCollection) {
    this.notificationCollection = notificationCollection;
    this.configuration = configuration;
  }

  changeConfiguration(configuration: NotificationConfiguration) {
    this.configuration = configuration;
    this.calculatePositions();
  }

  // called when a status of an item changes, or
  // when an item is added or removed
  //
  public calculatePositions() {
    this.calculateOffScreenStartPositions();
    this.calculateShowPositions();
    this.calculateMovementDelays();
    this.calculateDismissRequests();
  }

  //
  //
  //
  private calculateDismissRequests() {
    let items = this.notificationCollection.collection.filter((item) => item.status === enumNotificationStatus.requestedToDismiss);
    if (items.length === 0) {
      return;
    }
    const placementModel = new NotificationPlacementModel(this.configuration.placement);
    items.forEach((notification) => {
      //
      // note the +10 is to cater for the shadow
      //
      if (placementModel.alignHorizontal === enumAlignHorizontal.left) {
        // notification will exit to the left
        notification.x = -(notification.width + 20);
      }
      if (placementModel.alignHorizontal === enumAlignHorizontal.right) {
        // notification will exit to the right
        notification.x = -(notification.width + 20);
      }
      if (placementModel.alignHorizontal === enumAlignHorizontal.center) {
        if (placementModel.adjustmentVertical === enumAlignVertical.top) {
          // notification will exit to the top
          notification.y = -(notification.height + 20);
        }
        if (placementModel.adjustmentVertical === enumAlignVertical.bottom) {
          // notification will exit to the bottom
          notification.y = -(notification.height + 20);
        }
      }
    });
  }

  //
  // calculate the first off screen position for new notifications
  //
  private calculateOffScreenStartPositions() {
    const placementModel = new NotificationPlacementModel(this.configuration.placement);
    let items = this.notificationCollection.collection.filter((item) => item.status === enumNotificationStatus.willShow);
    if (items.length === 0) {
      return;
    }
    items.forEach((notification) => {
      notification.alignHorizontal = placementModel.alignHorizontal;
      notification.alignVertical = placementModel.alignVertical;
      if (placementModel.adjustmentVertical === enumAlignVertical.top || placementModel.adjustmentVertical === enumAlignVertical.bottom) {
        notification.x = 10;
        notification.y = -notification.height;
      }
    });
  }

  //
  // calculate show position for each element
  //
  private calculateShowPositions() {
    const placementModel = new NotificationPlacementModel(this.configuration.placement);

    let items = this.notificationCollection.collection.filter((item) => item.status === enumNotificationStatus.showing);
    if (items.length === 0) {
      return;
    }
    let x = 10;
    let y = 10;
    for (var index = items.length - 1; index >= 0; index--) {
      const notification = items[index];
      notification.alignHorizontal = placementModel.alignHorizontal;
      notification.alignVertical = placementModel.alignVertical;
      if (notification.status === enumNotificationStatus.showing) {
        notification.y = y;

        if (placementModel.adjustmentHorizontal === enumAlignHorizontal.center) {
        } else {
          notification.x = x;
        }

        x = x + (notification.width + 10) * placementModel.adjustmentHorizontal;
        y = y + (notification.height + 10) * placementModel.adjustmentVertical;
      }
    }
  }

  //
  // calculate movement details to create shuffle effect when an item
  // is added or removed
  //
  private calculateMovementDelays() {
    let items = this.notificationCollection.collection.filter((item) => item.status === enumNotificationStatus.showing);
    if (items.length === 0) {
      return;
    }
    let delay = 0;
    items.forEach((notification) => {
      notification.transitionDelay = delay;
      delay = delay + 0.05;
    });
  }
}
