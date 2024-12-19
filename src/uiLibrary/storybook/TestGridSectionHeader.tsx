/**
 * very simple test child control used for testing rendering
 * @returns
 */

interface IProperties {
  title: string;
  colspan: number;
}

const TestGridSectionHeader: React.FC<IProperties> = (props) => {
  let columnClass = "";

  switch (props.colspan) {
    case 2:
      columnClass = "col-span-2";
      break;
    case 3:
      columnClass = "col-span-3";
      break;
    case 4:
      columnClass = "col-span-4";
      break;
    case 5:
      columnClass = "col-span-5";
      break;
    case 6:
      columnClass = "col-span-6";
      break;
    case 7:
      columnClass = "col-span-7";
      break;
    case 8:
      columnClass = "col-span-8";
      break;
    case 9:
      columnClass = "col-span-9";
      break;
    case 10:
      columnClass = "col-span-10";
      break;
    default:
      columnClass = "col-span-4";
  }

  const className = `${columnClass} mt-4 mb-0 border-b border-gray-300 pb-2 text-lg font-bold text-gray-700`;

  return (
    <div className="contents">
      <div className={className}>{props.title}</div>
    </div>
  );
};

export default TestGridSectionHeader;
