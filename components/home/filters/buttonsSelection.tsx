type ButtonsSelectionProps = {
  buttons: string[];
  selected: string;
  onClick: (value: string) => void;
  className?: string;
  label?: string | React.ReactNode;
};

export const ButtonsSelection = ({
  buttons,
  selected,
  onClick,
  className,
  label,
}: ButtonsSelectionProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {label && <label className="text-sm font-semibold">{label}</label>}
      <div className="flex gap-2 flex-wrap">
        {buttons.map((button) => !!button && (
          <button
            key={button}
            onClick={() => onClick(button)}
            className={`whitespace-nowrap px-3 py-1 border border-gray-500 rounded ${
              selected === button ? "bg-gray-900 !border-gray-900 text-white" : "cursor-pointer active:scale-95"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};
