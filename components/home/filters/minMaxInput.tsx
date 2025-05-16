import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { ReactNode } from "react";

type MinMaxInputProps = {
  label: string | ReactNode;
  min: string;
  max: string;
  minPlaceholder?: string;
  maxPlaceholder?: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  className?: string;
  hideChevron?: boolean;
};

export const MinMaxInput = ({
  label,
  min,
  max,
  minPlaceholder,
  maxPlaceholder,
  onMinChange,
  onMaxChange,
  className,
  hideChevron = false,
}: MinMaxInputProps) => {
  return (
    <div className={`flex flex-col gap-1 max-w-[400px] ${className}`}>
      <label className="text-sm font-semibold">{label}</label>
      <div className="flex gap-2 items-center">
        <div className="border border-gray-300 rounded flex-1 flex">
          <input
            type="text"
            className="w-full px-2 py-1 outline-none"
            value={min}
            placeholder={minPlaceholder}
            onChange={(e) => onMinChange(e.target.value)}
          />
          {!hideChevron && (
            <button className="border-l border-gray-300 px-2 py-1">
              <ChevronIcon className="w-4 h-4" />
            </button>
          )}
        </div>
        {!hideChevron ? (
          <div className="border border-gray-300 w-3" />
        ) : (
          <span className="text-sm text-gray-500">to</span>
        )}
        <div className="border border-gray-300 rounded flex-1 flex">
          <input
            type="text"
            className="w-full px-2 py-1 outline-none"
            value={max}
            placeholder={maxPlaceholder}
            onChange={(e) => onMaxChange(e.target.value)}
          />
          {!hideChevron && (
            <button className="border-l border-gray-300 px-2 py-1">
              <ChevronIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};