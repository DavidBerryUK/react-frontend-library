//flowbite.com/icons/ IconSize:32px  StrokeWidth:2px

import EnumIconSvgStyle from "./enum/EnumIconSvgStyle";
import useIconStyling from "./hooks/UseIconStyling";
import IIconProps from "./interfaces/IIconProps";

const UIIconHomeSolid: React.FC<IIconProps> = (props) => {
  const { color, className } = useIconStyling(props, EnumIconSvgStyle.fill);
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default UIIconHomeSolid;
