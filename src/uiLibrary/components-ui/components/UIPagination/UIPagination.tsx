import { EnumButtonType } from "./enums/EnumButtonType";
import UIPaginationButton from "./sections/UIPaginationButton";
import PaginationModel from "./models/PaginationModel";
import React, { useMemo } from "react";
import IPropColor from "../../interfaces/properties/IPropColor";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import classNames from "classnames";
import ConstKeyboardKeys from "../../../constants/ConstKeyboardKeys";

type IProperties = IPropColor & {
  page: number;
  pageCount: number;
  onPageChanged?: (page: number) => void;
};

// Component
// Displays a row of pagination buttons
//
const UIPagination: React.FC<IProperties> = (props) => {
  const [pageModel, setPageModel] = React.useState(new PaginationModel(props.page, props.pageCount));
  const variantClass = useVariantStyle("pg", props);

  // Ony create pagination model once,regardless of how many screen refreshes,
  // unless the page and page count is updated
  useMemo(() => {
    setPageModel(new PaginationModel(props.page, props.pageCount));
  }, [props.page, props.pageCount]);

  // Event Handlers
  //
  function changePageClickHandler(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > pageModel.pageCount) {
      page = pageModel.pageCount;
    }
    if (page !== pageModel.page) {
      if (props.onPageChanged) {
        props.onPageChanged(page);
      }
    }
  }

  const handleOnKeyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = props.page;

    if (currentIndex === -1) {
      return;
    }

    let newIndex = currentIndex;

    if (event.key === ConstKeyboardKeys.arrowLeft) {
      if (event.shiftKey) {
        newIndex = newIndex - 10;
      } else if (event.ctrlKey) {
        newIndex = 1;
      } else {
        newIndex = newIndex - 1;
      }
    }

    if (event.key === ConstKeyboardKeys.arrowRight) {
      if (event.shiftKey) {
        newIndex = newIndex + 10;
      } else if (event.ctrlKey) {
        newIndex = pageModel.pageCount;
      } else {
        newIndex = newIndex + 1;
      }
    }

    if (newIndex < 1) {
      newIndex = 1;
    }

    if (newIndex > pageModel.pageCount) {
      newIndex = pageModel.pageCount;
    }

    if (newIndex !== currentIndex) {
      if (props.onPageChanged) {
        props.onPageChanged(newIndex);
      }
    }
  };

  const className = classNames("ui-pagination", variantClass);

  return (
    <div className={className} role="button" tabIndex={0} onKeyDown={handleOnKeyDownEvent}>
      <UIPaginationButton selectedClassName={variantClass} enabled={pageModel.enableFirstPageButton} pageNumber={1} onPageSelected={changePageClickHandler} type={EnumButtonType.First} />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableSkipPreviousPageButton}
        pageNumber={pageModel.page - 10}
        onPageSelected={changePageClickHandler}
        type={EnumButtonType.SkipPrevious}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enablePreviousPageButton}
        pageNumber={pageModel.page - 1}
        onPageSelected={changePageClickHandler}
        type={EnumButtonType.Previous}
      />
      {pageModel.pageNumbers.map((item: number) => (
        <UIPaginationButton selectedClassName={variantClass} key={`${item}`} selected={item === pageModel.page} pageNumber={item} onPageSelected={changePageClickHandler} type={EnumButtonType.Page} />
      ))}
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableSkipNextPageButton}
        pageNumber={pageModel.page + 1}
        onPageSelected={changePageClickHandler}
        type={EnumButtonType.Next}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableNextPageButton}
        pageNumber={pageModel.page + 10}
        onPageSelected={changePageClickHandler}
        type={EnumButtonType.SkipNext}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableLastPageButton}
        pageNumber={pageModel.pageCount}
        onPageSelected={changePageClickHandler}
        type={EnumButtonType.Last}
      />
    </div>
  );
};

export default UIPagination;
