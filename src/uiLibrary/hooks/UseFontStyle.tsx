import IPropsTextStyle from "../interfaces/properties/IPropsTextStyle";

const useFontStyle = (style: IPropsTextStyle) => {
  return (
    (style.heading && "text-2xl text-bold") ||
    (style.subHeading && "text-xl text-semibold") ||
    (style.body && "text-base text-normal") ||
    (style.caption && "text-sm text-light") ||
    (style.smallCaption && "text-xs text-gray-500") ||
    ""
  );
};

export default useFontStyle;
