type PropertyTypeListItemProps = {
  type: {
    label: string;
    count: number;
  };
  selectedTypes: string[];
  handleTypeToggle: (typeId: string) => void;
  className?: string;
};

export const PropertyTypeListItem = ({
  type,
  selectedTypes,
  handleTypeToggle,
  className,
}: PropertyTypeListItemProps) => {
  return (
    <div key={type.label} className={`flex justify-between ps-4 ${className}`}>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={`commercial-${type.label}`}
          checked={selectedTypes.includes(type.label)}
          onChange={() => handleTypeToggle(type.label)}
          className="mr-2 accent-black"
        />
        {type.label}
      </label>
      <div className="flex-1 border-b border-gray-300 mb-1.5" />
      <span className="text-sm">
        {Number(type.count)?.toLocaleString() || "--"}
      </span>
    </div>
  );
};
