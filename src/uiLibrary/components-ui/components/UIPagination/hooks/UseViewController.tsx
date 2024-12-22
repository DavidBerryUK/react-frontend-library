import { useMemo, useState } from "react";
import PaginationModel from "../models/PaginationModel";
import { IProperties } from "../UIPagination";
import useVariantStyle from "../../../../hooks/UseVariantStyle";
import ConstKeyboardKeys from "../../../../constants/ConstKeyboardKeys";
import classNames from "classnames";

const useViewController = (props: IProperties) => {
  const [pageModel, setPageModel] = useState(new PaginationModel(props.page, props.pageCount));
  const variantClass = useVariantStyle("pg", props);

  // Ony create pagination model once,regardless of how many screen refreshes,
  // unless the page and page count is updated
  useMemo(() => {
    setPageModel(new PaginationModel(props.page, props.pageCount));
  }, [props.page, props.pageCount]);

  // Event Handlers
  //
  function handlechangePageClickEvent(page: number) {
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

  return {
    handleOnKeyDownEvent,
    className,
    variantClass,
    pageModel,
    handlechangePageClickEvent,
  };
};

export default useViewController;
