import NotificationCollection from "../models/NotificationCollection";
import NotificationConfiguration from "../models/NotificationConfiguration";
import NotificationModel from "../models/NotificationModel";
import NotificationLayoutManager from "./NotificationLayoutManager";

export default class NotificationManager {
  configuration: NotificationConfiguration;
  collection: NotificationCollection;
  layoutManager: NotificationLayoutManager;

  constructor() {
    this.collection = new NotificationCollection();
    this.configuration = NotificationConfiguration.default;
    this.layoutManager = new NotificationLayoutManager(this.configuration, this.collection);
  }

  clone(): NotificationManager {
    var copy = new NotificationManager();
    copy.layoutManager = this.layoutManager;
    copy.collection = this.collection;
    copy.configuration = this.configuration;
    return copy;
  }

  changeConfiguration(configuration: NotificationConfiguration) {
    this.configuration = configuration;
    this.layoutManager.changeConfiguration(configuration);
    this.layoutManager.calculatePositions();
  }

  add(notification: NotificationModel) {
    if (this.collection.doesMessageAlreadyExist(notification.title, notification.message) === false) {
      if (this.collection.add(notification)) {
        this.layoutManager.calculatePositions();
      }
    }
  }

  update(notification: NotificationModel) {
    if (this.collection.update(notification)) {
      this.layoutManager.calculatePositions();
    }
  }

  remove(notification: NotificationModel) {
    if (this.collection.remove(notification)) {
      this.layoutManager.calculatePositions();
    }
  }

  reset() {
    this.collection.reset();
    this.layoutManager.calculatePositions();
  }
}
