import IPropOnChange from "../properties/IPropOnChange";
import IPropColor from "../properties/IPropColor";
import IPropDisabled from "../properties/IPropDisabled";
import IPropLabel from "../properties/IPropLabel";
import IPropMessageError from "../properties/IPropMessageError";
import IPropMessageHelp from "../properties/IPropMessageHelp";
import IPropPlaceholder from "../properties/IPropPlaceholder";
import IPropValue from "../properties/IPropValue";

type ITextNumberProperties = IPropValue<number | undefined> &
  IPropDisabled &
  IPropLabel &
  IPropPlaceholder &
  IPropColor &
  IPropMessageHelp &
  IPropMessageError &
  IPropOnChange<number | undefined>;

export default ITextNumberProperties;
