import IPropRounded from "../interfaces/properties/IPropRounded";

const useroundingStyle = (style: IPropRounded) => {
  const className =
    (style.rounded1 && "rounded-1") ||
    (style.rounded2 && "rounded-2") ||
    (style.rounded3 && "rounded-3") ||
    (style.rounded4 && "rounded-4") ||
    (style.rounded5 && "rounded-5") ||
    (style.roudned6 && "rounded-6") ||
    (style.roudned7 && "rounded-7") ||
    (style.roudned8 && "rounded-8") ||
    (style.rounded && `rounded-${style.rounded}`) ||
    "";

  return className;
};

export default useroundingStyle;
