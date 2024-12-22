import { EnumButtonType } from "./enums/EnumButtonType";
import IPropColor from "../../interfaces/properties/IPropColor";
import React from "react";
import UIPaginationButton from "./sections/UIPaginationButton";
import useViewController from "./hooks/UseViewController";

export type IProperties = IPropColor & {
  page: number;
  pageCount: number;
  onPageChanged?: (page: number) => void;
};

// Component
// Displays a row of pagination buttons
//
const UIPagination: React.FC<IProperties> = (props) => {
  const { pageModel, variantClass, className, handleOnKeyDownEvent, handlechangePageClickEvent } = useViewController(props);

  return (
    <div className={className} role="button" tabIndex={0} onKeyDown={handleOnKeyDownEvent}>
      <UIPaginationButton selectedClassName={variantClass} enabled={pageModel.enableFirstPageButton} pageNumber={1} onPageSelected={handlechangePageClickEvent} type={EnumButtonType.First} />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableSkipPreviousPageButton}
        pageNumber={pageModel.page - 10}
        onPageSelected={handlechangePageClickEvent}
        type={EnumButtonType.SkipPrevious}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enablePreviousPageButton}
        pageNumber={pageModel.page - 1}
        onPageSelected={handlechangePageClickEvent}
        type={EnumButtonType.Previous}
      />
      {pageModel.pageNumbers.map((item: number) => (
        <UIPaginationButton
          selectedClassName={variantClass}
          key={`${item}`}
          selected={item === pageModel.page}
          pageNumber={item}
          onPageSelected={handlechangePageClickEvent}
          type={EnumButtonType.Page}
        />
      ))}
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableSkipNextPageButton}
        pageNumber={pageModel.page + 1}
        onPageSelected={handlechangePageClickEvent}
        type={EnumButtonType.Next}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableNextPageButton}
        pageNumber={pageModel.page + 10}
        onPageSelected={handlechangePageClickEvent}
        type={EnumButtonType.SkipNext}
      />
      <UIPaginationButton
        selectedClassName={variantClass}
        enabled={pageModel.enableLastPageButton}
        pageNumber={pageModel.pageCount}
        onPageSelected={handlechangePageClickEvent}
        type={EnumButtonType.Last}
      />
    </div>
  );
};

export default UIPagination;
