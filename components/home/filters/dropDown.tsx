import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { useEffect, useState } from "react";

type DropdownProps = {
  title: string;
  options: string[];
  selected: string | string[];
  onSelect: (value: string) => void;
  showCheckbox?: boolean;
  className?: string;
};

export function Dropdown({
  title,
  options,
  selected,
  onSelect,
  showCheckbox = false,
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      !e.target.closest("." + title.split(" ").join("-")) &&
      open
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={`${title.split(" ").join("-")}`}>
      <button
        className={`border border-gray-300 rounded px-3 py-1 w-fit text-left bg-white flex items-center gap-4 whitespace-nowrap ${className}`}
        onClick={() => setOpen(!open)}
      >
        {(Array.isArray(selected) ? title : selected) || title}
        <ChevronIcon className={`w-3 h-3 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute z-10 bottom-auto bg-white rounded border border-gray-300 shadow-lg w-fit">
          {options.map((option) => (
            <li
              className={`px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-nowrap overflow-hidden ${
                selected.includes(option) ? "bg-gray-100" : ""
              }`}
              key={option}
              onClick={() => {
                onSelect(option);
                if (!showCheckbox) {
                  setOpen(false);
                }
              }}
            >
              {showCheckbox && (
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer w-4 h-4 accent-black"
                  onChange={() => onSelect(option)}
                  checked={selected.includes(option)}
                />
              )}{" "}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
