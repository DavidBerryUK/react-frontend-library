import classNames from "classnames";
import "./styles/Style.scss";

/**
 * very simple test child control used for testing rendering
 * @returns
 */

interface IProperties {
  title: string;
  colspan: number;
}

const TestGridSectionHeader: React.FC<IProperties> = (props) => {
  let columnClass = `sb-span-${props.colspan}`;

  const className = classNames("sb-section-header", columnClass);

  return <div className={className}>{props.title}</div>;
};

export default TestGridSectionHeader;
