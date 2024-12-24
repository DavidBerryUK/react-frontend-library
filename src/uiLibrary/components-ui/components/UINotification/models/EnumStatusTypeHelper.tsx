import { ReactNode } from "react";
import EnumNotificationType from "../enums/EnumNotificationType";
import UIIconAlertCrossCircleSolid from "../../../../components-icons/UIIconAlertCrossCircleSolid";
import UIIconAlertExclamationCircleSolid from "../../../../components-icons/UIIconAlertExclamationCircleSolid";
import UIIconAlertInfoCircleSolid from "../../../../components-icons/UIIconAlertInfoCircleSolid";
import UIIconAlertQuestionCircleSolid from "../../../../components-icons/UIIconAlertQuestionCircleSolid";
import UIIconAlertSuccessCircleSolid from "../../../../components-icons/UIIconAlertSuccessCircleSolid";

export default class EnumStatusTypeHelper {
  static getIconForStatus(status: EnumNotificationType): ReactNode {
    switch (status) {
      case EnumNotificationType.success:
        return <UIIconAlertSuccessCircleSolid success />;
      case EnumNotificationType.info:
        return <UIIconAlertInfoCircleSolid info />;
      case EnumNotificationType.warning:
        return <UIIconAlertExclamationCircleSolid warning />;
      case EnumNotificationType.danger:
        return <UIIconAlertCrossCircleSolid danger />;
      case EnumNotificationType.question:
        return <UIIconAlertQuestionCircleSolid primary />;
    }
  }
}
