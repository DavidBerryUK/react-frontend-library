import IShowIfFalseProperties from "../../../interfaces/controls/IShowIfFalseProperties";
//
// helper component to show child functions if a condition is met
//

const UIShowIfFalse: React.FC<IShowIfFalseProperties> = ({ value, children }) => {
  //
  // if the isTrue property is provided, then evaluate if
  //
  if (value) {
    return null;
  }

  return <>{children}</>;
};

export default UIShowIfFalse;
