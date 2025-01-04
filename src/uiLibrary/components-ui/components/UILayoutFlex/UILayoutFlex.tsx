import classNames from "classnames";
import ILayoutFlexProperties from "../../../interfaces/properties/ILayoutFlexProperties";
import useLayoutAlignClass from "../../../hooks/UseLayoutAlignClass";
import useLayoutColGapStyle from "../../../hooks/UseLayoutColGapStyle";
import useLayoutDirectionStyle from "../../../hooks/UseLayoutDirection";
import UseLayoutGapStyle from "../../../hooks/UseLayoutGapStyle";
import useLayoutJustifyStyle from "../../../hooks/UseLayoutJustifyStyle";
import useLayoutRowGapStyle from "../../../hooks/UseLayoutRowGapStyle";
import useLayoutWrapStyle from "../../../hooks/UseLayoutWrapStyle";

const UILayoutFlex: React.FC<ILayoutFlexProperties> = (props) => {
  const directionClassName = useLayoutDirectionStyle(props);
  const wrapClassName = useLayoutWrapStyle(props);
  const justifyClassName = useLayoutJustifyStyle(props);
  const alignClassName = useLayoutAlignClass(props);
  const colGapClassName = useLayoutColGapStyle(props);
  const rowGapClassName = useLayoutRowGapStyle(props);
  const gapClassName = UseLayoutGapStyle(props);

  const className = classNames(
    "ui-layout-flex",
    props.className,
    directionClassName,
    colGapClassName,
    rowGapClassName,
    gapClassName,
    wrapClassName,
    justifyClassName,
    alignClassName,
  );

  return <div className={className}>{props.children}</div>;
};

export default UILayoutFlex;
