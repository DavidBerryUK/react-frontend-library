import classNames from "classnames";
import IPropsMargin from "../interfaces/properties/IPropMargin";

const useMarginStyle = (style: IPropsMargin) => {
  // Margin styles
  const marginClassName =
    (style.margin1 && "margin-1") ||
    (style.margin2 && "margin-2") ||
    (style.margin3 && "margin-3") ||
    (style.margin4 && "margin-4") ||
    (style.margin5 && "margin-5") ||
    (style.margin6 && "margin-6") ||
    (style.margin7 && "margin-7") ||
    (style.margin8 && "margin-8") ||
    (style.margin && `margin-${style.margin}`) ||
    null;

  const marginTopClassName =
    (style.marginTop1 && "margin-top-1") ||
    (style.marginTop2 && "margin-top-2") ||
    (style.marginTop3 && "margin-top-3") ||
    (style.marginTop4 && "margin-top-4") ||
    (style.marginTop5 && "margin-top-5") ||
    (style.marginTop6 && "margin-top-6") ||
    (style.marginTop7 && "margin-top-7") ||
    (style.marginTop8 && "margin-top-8") ||
    (style.marginTop && `margin-top-${style.marginTop}`) ||
    null;

  const marginBottomClassName =
    (style.marginBottom1 && "margin-bottom-1") ||
    (style.marginBottom2 && "margin-bottom-2") ||
    (style.marginBottom3 && "margin-bottom-3") ||
    (style.marginBottom4 && "margin-bottom-4") ||
    (style.marginBottom5 && "margin-bottom-5") ||
    (style.marginBottom6 && "margin-bottom-6") ||
    (style.marginBottom7 && "margin-bottom-7") ||
    (style.marginBottom8 && "margin-bottom-8") ||
    (style.marginBottom && `margin-bottom-${style.marginBottom}`) ||
    null;

  const marginLeftClassName =
    (style.marginLeft1 && "margin-left-1") ||
    (style.marginLeft2 && "margin-left-2") ||
    (style.marginLeft3 && "margin-left-3") ||
    (style.marginLeft4 && "margin-left-4") ||
    (style.marginLeft5 && "margin-left-5") ||
    (style.marginLeft6 && "margin-left-6") ||
    (style.marginLeft7 && "margin-left-7") ||
    (style.marginLeft8 && "margin-left-8") ||
    (style.marginLeft && `margin-left-${style.marginLeft}`) ||
    null;

  const marginRightClassName =
    (style.marginRight1 && "margin-right-1") ||
    (style.marginRight2 && "margin-right-2") ||
    (style.marginRight3 && "margin-right-3") ||
    (style.marginRight4 && "margin-right-4") ||
    (style.marginRight5 && "margin-right-5") ||
    (style.marginRight6 && "margin-right-6") ||
    (style.marginRight7 && "margin-right-7") ||
    (style.marginRight8 && "margin-right-8") ||
    (style.marginRight && `margin-right-${style.marginRight}`) ||
    null;

  return classNames(marginClassName, marginTopClassName, marginBottomClassName, marginLeftClassName, marginRightClassName);
};

export default useMarginStyle;
