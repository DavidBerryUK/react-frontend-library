import classNames from "classnames";
import FieldModel from "../../../models/fields/FieldModel";
import IPropChildren from "../../../interfaces/properties/IPropChildren";
import IPropClassName from "../../../interfaces/properties/IPropClassName";
import IPropValue from "../../../interfaces/properties/IPropValue";
import UIFormLabel from "../../UIFormLabel/UIFormLabel";
import UIShowIfTrue from "../../../components-ui/components/UIShowIfTrue/UIShowIfTrue";
import IPropLabelPlacementMode from "../../../interfaces/properties/IPropLabelPlacementMode";

type IProperties = IPropChildren & IPropValue<FieldModel> & IPropClassName & IPropLabelPlacementMode;

/**
 * Create a consistant form control wrapper for forms,
 * This will display
 *  - a label with the forms title
 *  - the passed in control ( passed in as children )
 *  - an error message if required
 *  - an help message if required
 *
 * The form control is reponsible for its own rendering including color (variant) styling
 */
const UIFormControlWrapper: React.FC<IProperties> = ({ children, value, className, row: labelAside }) => {
  const showHelpMessage = !!value.help?.length;
  const showErrorMessage = !!value.error.length;
  var labelPlacementClass = labelAside ? "layout-row" : "layout-column";
  const containerClassName = classNames("ui-fc-control", labelPlacementClass, className);

  return (
    <div className={containerClassName}>
      <UIFormLabel value={value} className="cell-label" />
      <div className="cell-control">{children}</div>
      <UIShowIfTrue value={showHelpMessage}>
        <div className="cell-help">{value.help}</div>
      </UIShowIfTrue>
      <UIShowIfTrue value={showErrorMessage}>
        <div className="cell-error ui-fc-error">{value.error}</div>
      </UIShowIfTrue>
    </div>
  );
};
export default UIFormControlWrapper;
