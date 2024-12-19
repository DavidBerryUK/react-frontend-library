import NotificationModel from "./NotificationModel";

export default class NotificationCollection {
  collection: Array<NotificationModel>;

  constructor(collection?: Array<NotificationModel>) {
    this.collection = collection || new Array<NotificationModel>();
  }

  reset() {
    this.collection = new Array<NotificationModel>();
  }

  doesMessageAlreadyExist(title: string, message: string): boolean {
    var matches = this.collection.filter((item) => item.title === title && item.message === message);
    return matches.length > 0;
  }

  // return true if added
  //
  add(notification: NotificationModel): boolean {
    if (this.get(notification.id) === undefined) {
      this.collection.push(notification);
      return true;
    }
    return false;
  }

  // return true if removed ok
  //
  remove(notification: NotificationModel): boolean {
    if (this.get(notification.id)) {
      this.collection = this.collection.filter((item) => item.id !== notification.id);
      return true;
    }
    return false;
  }

  // return true if updated ok
  //
  update(notification: NotificationModel) {
    var existing = this.get(notification.id);
    if (existing === undefined) {
      return false;
    }
    existing.height = notification.height;
    existing.width = notification.width;
    existing.status = notification.status;
    existing.title = notification.title;
    existing.message = notification.message;
    return true;
  }

  get(id: string): NotificationModel | undefined {
    return this.collection.find((item) => item.id === id);
  }

  clone(): NotificationCollection {
    var collection = new NotificationCollection(this.collection);
    return collection;
  }
}
