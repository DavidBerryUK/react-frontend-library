import IPropChildren from "../properties/IPropChildren";
import IPropColor from "../properties/IPropColor";
import IPropFontWeight from "../properties/IPropFontWeight";
import IPropSizeExtended from "../properties/IPropSizeExtended";
import IPropsTextStyle from "../properties/IPropsTextStyle";

type ITextProperties = IPropColor & IPropChildren & IPropSizeExtended & IPropFontWeight & IPropsTextStyle & { testId?: string };

export default ITextProperties;
