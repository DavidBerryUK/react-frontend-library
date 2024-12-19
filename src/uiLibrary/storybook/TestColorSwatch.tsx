const TestColorSwatch: React.FC = () => {
  return (
    <div id="sample-child-control" className="w-[400px] rounded-lg border-2 border-red-800 bg-red-100">
      <div className="p-2 text-center font-mono text-lg">SAMPLE CHILD CONTROL</div>

      <div className="flex h-12 p-2">
        <div className="flex-grow bg-red-100" />
        <div className="flex-grow bg-red-200" />
        <div className="flex-grow bg-red-300" />
        <div className="flex-grow bg-red-400" />
        <div className="flex-grow bg-red-500" />
        <div className="flex-grow bg-red-600" />
        <div className="flex-grow bg-red-700" />
        <div className="flex-grow bg-red-800" />
        <div className="flex-grow bg-red-900" />
      </div>
    </div>
  );
};

export default TestColorSwatch;
