import classNames from "classnames";
import UIIconChevronDoubleLeft from "../../../../components-icons/UIIconChevronDoubleLeft";
import UIIconChevronDoubleRight from "../../../../components-icons/UIIconChevronDoubleRight";
import UIIconChevronFirstSolid from "../../../../components-icons/UIIconChevronFirstSolid";
import UIIconChevronLargeLeft from "../../../../components-icons/UIIconChevronLargeLeft";
import UIIconChevronLargeRight from "../../../../components-icons/UIIconChevronLargeRight";
import UIIconChevronLastSolid from "../../../../components-icons/UIIconChevronLastSolid";
import { EnumButtonType } from "../enums/EnumButtonType";

import React, { ReactNode } from "react";

interface IProperties {
  selectedClassName: string;
  type: EnumButtonType;
  pageNumber: number;
  enabled?: boolean;
  selected?: boolean;
  onPageSelected: (page: number) => void;
}

const UIPaginationButton: React.FC<IProperties> = (props) => {
  var iconFirst = <UIIconChevronFirstSolid />;
  var iconPrevPage = <UIIconChevronDoubleLeft />;
  var iconPrev = <UIIconChevronLargeLeft />;
  var iconNext = <UIIconChevronLargeRight />;
  var iconNextPage = <UIIconChevronDoubleRight />;
  var iconLast = <UIIconChevronLastSolid />;

  var title = "";
  var content: ReactNode;

  switch (props.type) {
    case EnumButtonType.First:
      title = "First Page";
      content = iconFirst;
      break;
    case EnumButtonType.SkipPrevious:
      title = "Jump Backward";
      content = iconPrevPage;
      break;
    case EnumButtonType.Previous:
      title = "Previous Page";
      content = iconPrev;
      break;
    case EnumButtonType.Next:
      title = "Next Page";
      content = iconNext;
      break;
    case EnumButtonType.SkipNext:
      title = "Jump Forwards";
      content = iconNextPage;
      break;
    case EnumButtonType.Last:
      title = "Last Page";
      content = iconLast;
      break;

    default:
      title = `Page ${props.pageNumber}`;
      content = <>{props.pageNumber}</>;
      break;
  }

  // event handlers
  //
  const handleButtonClickEvent = () => {
    props.onPageSelected(props.pageNumber);
  };

  var classSelected = props.selected ? `${props.selectedClassName} selected` : "";

  var classDisabled = props.type !== EnumButtonType.Page && props.enabled === false ? "disabled" : "";

  var className = classNames("pg-button", classSelected, classDisabled);

  return (
    <div data-testid={title} className={className} title={title} onClick={handleButtonClickEvent}>
      {content}
    </div>
  );
};

export default UIPaginationButton;
