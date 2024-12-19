import { enumStatusType } from "../enums/EnumStatusType";
import UIIconAlertCrossCircle from "../../../../components-icons/UIIconAlertCrossCircle";
import UIIconAlertCrossCircleSolid from "../../../../components-icons/UIIconAlertCrossCircleSolid";
import UIIconAlertExclamationCircle from "../../../../components-icons/UIIconAlertExclamationCircle";
import UIIconAlertExclamationCircleSolid from "../../../../components-icons/UIIconAlertExclamationCircleSolid";
import UIIconAlertInfoCircle from "../../../../components-icons/UIIconAlertInfoCircle";
import UIIconAlertInfoCircleSolid from "../../../../components-icons/UIIconAlertInfoCircleSolid";
import UIIconAlertQuestionCircle from "../../../../components-icons/UIIconAlertQuestionCircle";
import UIIconAlertQuestionCircleSolid from "../../../../components-icons/UIIconAlertQuestionCircleSolid";
import UIIconAlertSuccessCircle from "../../../../components-icons/UIIconAlertSuccessCircle";
import UIIconAlertSuccessCircleSolid from "../../../../components-icons/UIIconAlertSuccessCircleSolid";
import React, { ReactNode } from "react";

export default class EnumStatusTypeHelper {
  static readonly iconDanger = (<UIIconAlertCrossCircle />);
  static readonly iconDangerSolid = (<UIIconAlertCrossCircleSolid />);

  static readonly iconInfo = (<UIIconAlertInfoCircle />);
  static readonly iconInfoSolid = (<UIIconAlertInfoCircleSolid />);

  static readonly iconSuccess = (<UIIconAlertSuccessCircle />);
  static readonly iconSuccessSolid = (<UIIconAlertSuccessCircleSolid />);

  static readonly iconWarning = (<UIIconAlertExclamationCircle />);
  static readonly iconWarningSolid = (<UIIconAlertExclamationCircleSolid />);

  static readonly iconQuestion = (<UIIconAlertQuestionCircle />);
  static readonly iconQuestionSolid = (<UIIconAlertQuestionCircleSolid />);

  static getIconForStatus(status: enumStatusType, solid: boolean): ReactNode {
    switch (status) {
      case enumStatusType.success:
        return solid ? EnumStatusTypeHelper.iconSuccessSolid : EnumStatusTypeHelper.iconSuccess;
      case enumStatusType.info:
        return solid ? EnumStatusTypeHelper.iconInfoSolid : EnumStatusTypeHelper.iconInfo;
      case enumStatusType.warning:
        return solid ? EnumStatusTypeHelper.iconWarningSolid : EnumStatusTypeHelper.iconWarning;
      case enumStatusType.danger:
        return solid ? EnumStatusTypeHelper.iconDangerSolid : EnumStatusTypeHelper.iconDanger;
      case enumStatusType.question:
        return solid ? EnumStatusTypeHelper.iconQuestionSolid : EnumStatusTypeHelper.iconQuestion;
    }
  }

  static getDarkenedColorForStatus(status: enumStatusType): string {
    switch (status) {
      case enumStatusType.success:
      case enumStatusType.question:
        return "#105736"; // darkened by 25%
      case enumStatusType.info:
        return "#08839b"; // darkened by 25%
      case enumStatusType.warning:
        return "#aa7f00"; // darkened by 25%
      case enumStatusType.danger:
        return "#971a26"; // darkened by 25%
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
