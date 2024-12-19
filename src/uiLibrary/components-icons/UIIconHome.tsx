//flowbite.com/icons/ IconSize:32px  StrokeWidth:2px

import EnumIconSvgStyle from "./enum/EnumIconSvgStyle";
import useIconStyling from "./hooks/UseIconStyling";
import IIconProps from "./interfaces/IIconProps";

const UIIconHome: React.FC<IIconProps> = (props) => {
  const { color, className } = useIconStyling(props, EnumIconSvgStyle.stroke);
  return (
    <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
      />
    </svg>
  );
};

export default UIIconHome;
