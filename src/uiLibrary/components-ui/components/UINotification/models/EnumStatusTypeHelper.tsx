import { enumStatusType } from "../enums/EnumStatusType";
import IPropColor from "../../../../interfaces/properties/IPropColor";
import React, { ReactNode } from "react";
import UIIconAlertCrossCircleSolid from "../../../../components-icons/UIIconAlertCrossCircleSolid";
import UIIconAlertExclamationCircleSolid from "../../../../components-icons/UIIconAlertExclamationCircleSolid";
import UIIconAlertInfoCircleSolid from "../../../../components-icons/UIIconAlertInfoCircleSolid";
import UIIconAlertQuestionCircleSolid from "../../../../components-icons/UIIconAlertQuestionCircleSolid";
import UIIconAlertSuccessCircleSolid from "../../../../components-icons/UIIconAlertSuccessCircleSolid";

export default class EnumStatusTypeHelper {
  static getIconForStatus(status: enumStatusType): ReactNode {
    switch (status) {
      case enumStatusType.success:
        return <UIIconAlertSuccessCircleSolid success />;
      case enumStatusType.info:
        return <UIIconAlertInfoCircleSolid info />;
      case enumStatusType.warning:
        return <UIIconAlertExclamationCircleSolid warning />;
      case enumStatusType.danger:
        return <UIIconAlertCrossCircleSolid danger />;
      case enumStatusType.question:
        return <UIIconAlertQuestionCircleSolid primary />;
    }
  }

  static getColorForStatus(status: enumStatusType): string {
    switch (status) {
      case enumStatusType.success:
      case enumStatusType.question:
        return "#198754";
      case enumStatusType.info:
        return "#0dcaf0";
      case enumStatusType.warning:
        return "#ffc107";
      case enumStatusType.danger:
        return "#dc3545";
    }
  }
}
