import classNames from "classnames";

import React from "react";
import useExtendedSizeStyle from "../../../hooks/UseExtendedSizeStyle";
import useFontStyle from "../../../hooks/UseFontStyle";
import useFontWeightStyle from "../../../hooks/UseFontWeightStyle";
import useVariantStyle from "../../../hooks/UseVariantStyle";
import ITextProperties from "../../../interfaces/controls/ITextProperties";

/**
 * @param props
 * @returns
 */
const UIText: React.FC<ITextProperties> = (props) => {
  var styleClass = useFontStyle(props);
  var sizeClass = useExtendedSizeStyle("text", props);
  var weightClass = useFontWeightStyle("text", props);
  var variantClass = useVariantStyle("text", props);
  var className = classNames("ui-text", variantClass, styleClass, sizeClass, weightClass);

  return (
    <div className={className} data-testid={props.testId}>
      {props.children}
    </div>
  );
};

export default UIText;
