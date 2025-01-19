// custom icon - see assests - custom-icons.afdesign

import EnumIconSvgStyle from "./enum/EnumIconSvgStyle";
import useIconStyling from "./hooks/UseIconStyling";
import IIconProps from "./interfaces/IIconProps";

const UIIconPanelRightOpenFull: React.FC<IIconProps> = (props) => {
  const { color, className } = useIconStyling(props, EnumIconSvgStyle.fill);
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15,1l0,20l8,-0c1.104,-0 2,-0.896 2,-2l0,-16c0,-1.104 -0.896,-2 -2,-2l-8,-0Z"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25,3l-0,16c-0,1.104 -0.896,2 -2,2l-20,0c-1.104,0 -2,-0.896 -2,-2l-0,-16c-0,-1.104 0.896,-2 2,-2l20,0c1.104,0 2,0.896 2,2Z"
      />
    </svg>
  );
};

export default UIIconPanelRightOpenFull;
