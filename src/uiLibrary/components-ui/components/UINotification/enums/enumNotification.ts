//
// current rendering status of the notification,
// (only for internal use)
//
export enum enumNotificationStatus {
	initialising = 0,
	willShow = 1,
	showing = 2,
	closing = 3,
	removed = 4,
	requestedToDismiss = 5,
	dismissing = 6,

}


//
// where the notifications will appear on screen
//
export enum enumNotificationPlacement {
	topLeft,
	topCenter,
	topRight,
	bottomLeft,
	bottomCenter,
	bottomRight,
}

//
// the preferred stacking direction,
// note that some combinations of placement and stacking direction are not valid and will
// be overridden
//
export enum enumNotificationStackDirection {
	default,
	up,
	down,
	left,
	right,
}

//
// how long will the notification appear on screen before being
// dismissed
//
export enum enumNotificationDuration {
	short = 4,		// number of seconds the notification stays on screen
	medium = 8,		// number of seconds the notification stays on screen
	long = 12,		// number of seconds the notification stays on screen
}

//
// for internal calculations
//
export enum enumAlignVertical {
	none,
	top,
	bottom,
}

//
// for internal calculations
//
export enum enumAlignHorizontal {
	none,
	left,
	center,
	right,
}
