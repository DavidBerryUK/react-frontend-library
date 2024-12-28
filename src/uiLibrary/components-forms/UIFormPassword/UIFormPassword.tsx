import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";
import IFormTextProperties from "../../interfaces/controls/IFormTextProperties";

const UIFormPassword: React.FC<IFormTextProperties> = (props) => {
  return <UIFormBaseString {...props} inputType="password" />;
};

export default UIFormPassword;
