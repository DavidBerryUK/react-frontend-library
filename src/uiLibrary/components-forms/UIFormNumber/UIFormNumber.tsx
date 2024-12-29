import UIFormBaseString from "../base/UIFormBase/UIFormBaseString";
import IFormTextProperties from "../../interfaces/controls/IFormTextProperties";

const UIFormNumber: React.FC<IFormTextProperties> = (props) => {
  return <UIFormBaseString {...props} alignTextRight inputType="number" />;
};

export default UIFormNumber;
