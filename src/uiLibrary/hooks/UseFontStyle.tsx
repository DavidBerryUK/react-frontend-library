import IPropsTextStyle from "../interfaces/properties/IPropsTextStyle";

const useFontStyle = (style: IPropsTextStyle) => {
  var value = "";
  if (style.heading) {
    value = "text-2xl text-bold";
  } else if (style.subHeading) {
    value = "text-xl text-semibold";
  } else if (style.body) {
    value = "text-base text-normal";
  } else if (style.caption) {
    value = "text-sm text-light";
  } else if (style.smallCaption) {
    value = "text-xs text-gray-500";
  }

  return value;
};

export default useFontStyle;
