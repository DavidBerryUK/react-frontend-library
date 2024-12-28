import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";
import IFormTextProperties from "../../interfaces/controls/IFormTextProperties";

const UIFormText: React.FC<IFormTextProperties> = (props) => {
  return <UIFormBaseString {...props} inputType="text" />;
};

export default UIFormText;
