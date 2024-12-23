import IShowIfTrueProperties from "../../../interfaces/controls/IShowIfTrueProperties";
//
// helper component to show child functions if a condition is met
//

const UIShowIfTrue: React.FC<IShowIfTrueProperties> = ({ value, children }) => {
  //
  // if the isTrue property is provided, then evaluate if
  //
  if (!value) {
    return null;
  }

  return <>{children}</>;
};

export default UIShowIfTrue;
