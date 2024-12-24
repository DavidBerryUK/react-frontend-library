//
// current rendering status of the notification,
// (only for internal use)
//
enum EnumNotificationStatus {
  initialising = 0,
  willShow = 1,
  showing = 2,
  closing = 3,
  removed = 4,
  requestedToDismiss = 5,
  dismissing = 6,
}

export default EnumNotificationStatus;
