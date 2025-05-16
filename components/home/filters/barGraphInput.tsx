type BarGraphInputProps = {
  label?: string;
  labelPills?: string[];
  barGraphData?: string[];
  className?: string;
};

export const BarGraphInput = ({
  label,
  labelPills,
  barGraphData,
  className,
}: BarGraphInputProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className="flex gap-2 justify-between items-center text-sm">
        <span className="font-semibold">{label}</span>
        <div className="flex">
          <button className="rounded-full px-2 py-1 text-xs leading-none bg-blue-100 text-blue-900 ">
            {labelPills?.[0] || "Preset"}
          </button>
          <button className="rounded-full px-2 py-1 text-xs leading-none">
            {labelPills?.[1] || "Custom"}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="relative h-10 px-4 flex gap-1 items-end border-b">
          <span className="absolute -bottom-2 left-0 flex items-center justify-center w-4 h-4 border bg-gray-100 rounded-full text-[6px]">
            |||
          </span>
          {barGraphData?.map((data) => (
            <div
              key={data}
              className={`flex-1 bg-gray-100 ${
                barGraphData.length === 1 ? "h-full" : "h-[" + data + "%]"
              }`}
              style={{ height: `${data}%` }}
            />
          ))}
          <span className="absolute -bottom-2 right-0 flex items-center justify-center w-4 h-4 border bg-gray-100 rounded-full text-[6px]">
            |||
          </span>
        </div>
        <div className="flex text-xs">
          <span>Any</span>
          <span className="ms-auto">Any</span>
        </div>
      </div>
    </div>
  );
};
