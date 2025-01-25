import classNames from "classnames";
import IPropPadding from "../interfaces/properties/IPropPadding";

const usePaddingStyle = (style: IPropPadding) => {
  // Padding styles
  const paddingClassName =
    (style.padding1 && "padding-1") ||
    (style.padding2 && "padding-2") ||
    (style.padding3 && "padding-3") ||
    (style.padding4 && "padding-4") ||
    (style.padding5 && "padding-5") ||
    (style.padding6 && "padding-6") ||
    (style.padding7 && "padding-7") ||
    (style.padding8 && "padding-8") ||
    (style.padding && `padding-${style.padding}`) ||
    null;

  const paddingTopClassName =
    (style.paddingTop1 && "padding-top-1") ||
    (style.paddingTop2 && "padding-top-2") ||
    (style.paddingTop3 && "padding-top-3") ||
    (style.paddingTop4 && "padding-top-4") ||
    (style.paddingTop5 && "padding-top-5") ||
    (style.paddingTop6 && "padding-top-6") ||
    (style.paddingTop7 && "padding-top-7") ||
    (style.paddingTop8 && "padding-top-8") ||
    (style.paddingTop && `padding-top-${style.paddingTop}`) ||
    null;

  const paddingBottomClassName =
    (style.paddingBottom1 && "padding-bottom-1") ||
    (style.paddingBottom2 && "padding-bottom-2") ||
    (style.paddingBottom3 && "padding-bottom-3") ||
    (style.paddingBottom4 && "padding-bottom-4") ||
    (style.paddingBottom5 && "padding-bottom-5") ||
    (style.paddingBottom6 && "padding-bottom-6") ||
    (style.paddingBottom7 && "padding-bottom-7") ||
    (style.paddingBottom8 && "padding-bottom-8") ||
    (style.paddingBottom && `padding-bottom-${style.paddingBottom}`) ||
    null;

  const paddingLeftClassName =
    (style.paddingLeft1 && "padding-left-1") ||
    (style.paddingLeft2 && "padding-left-2") ||
    (style.paddingLeft3 && "padding-left-3") ||
    (style.paddingLeft4 && "padding-left-4") ||
    (style.paddingLeft5 && "padding-left-5") ||
    (style.paddingLeft6 && "padding-left-6") ||
    (style.paddingLeft7 && "padding-left-7") ||
    (style.paddingLeft8 && "padding-left-8") ||
    (style.paddingLeft && `padding-left-${style.paddingLeft}`) ||
    null;

  const paddingRightClassName =
    (style.paddingRight1 && "padding-right-1") ||
    (style.paddingRight2 && "padding-right-2") ||
    (style.paddingRight3 && "padding-right-3") ||
    (style.paddingRight4 && "padding-right-4") ||
    (style.paddingRight5 && "padding-right-5") ||
    (style.paddingRight6 && "padding-right-6") ||
    (style.paddingRight7 && "padding-right-7") ||
    (style.paddingRight8 && "padding-right-8") ||
    (style.paddingRight && `padding-right-${style.paddingRight}`) ||
    null;

  return classNames(paddingClassName, paddingTopClassName, paddingBottomClassName, paddingLeftClassName, paddingRightClassName);
};

export default usePaddingStyle;
