//flowbite.com/icons/ IconSize:32px  StrokeWidth:2px

import EnumIconSvgStyle from "./enum/EnumIconSvgStyle";
import useIconStyling from "./hooks/UseIconStyling";
import IIconProps from "./interfaces/IIconProps";

const UIIconTrash: React.FC<IIconProps> = (props) => {
  const { color, className } = useIconStyling(props, EnumIconSvgStyle.stroke);
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
      />
    </svg>
  );
};

export default UIIconTrash;
