import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropLabel from "../properties/IPropLabel";
import IPropMessageError from "../properties/IPropMessageError";
import IPropMessageHelp from "../properties/IPropMessageHelp";
import IPropOnChange from "../properties/IPropOnChange";
import IPropPlaceholder from "../properties/IPropPlaceholder";
import IPropValue from "../properties/IPropValue";

type ITextStringProperties = IPropValue<string> &
  IPropDisabled &
  IPropLabel &
  IPropPlaceholder &
  IPropColor &
  IPropMessageHelp &
  IPropMessageError &
  IPropOnChange<string>;

export default ITextStringProperties;
