import { useFilters } from "@/hooks/useFilters";
import { useEffect, useState } from "react";
import { Input } from "./input";
import { ChevronIcon } from "@/components/icons/ChevronIcon";

const options = ["City", "MSA", "ZIP Code", "Submarket"];

export function LocationDropdown() {
  const { state, dispatch } = useFilters();
  const [open, setOpen] = useState(false);

  const handleInputDispatch = (key: string, value: string) => {
    dispatch({
      type: "SET_LOCATION_INPUTS",
      payload: {
        key: key,
        value: value,
      },
    });
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      !e.target.closest(".location-dropdown") &&
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
    <div className="location-dropdown">
      <button
        className="border border-gray-300 rounded px-3 py-1 w-fit bg-white flex items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        Location
        <ChevronIcon className={`w-4 h-4 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg w-full max-w-60">
          <ul>
            {options.map((option) => (
              <li
                className={`px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center text-nowrap overflow-hidden ${
                  state.location.selections.includes(option)
                    ? "bg-gray-100"
                    : ""
                }`}
                key={option}
                onClick={() =>
                  dispatch({
                    type: "SET_LOCATION_SELECTION",
                    payload: option,
                  })
                }
              >
                <input
                  type="checkbox"
                  onChange={() => {}}
                  className="mr-2 cursor-pointer w-4 h-4 accent-black"
                  checked={state.location.selections.includes(option)}
                />
                {option}
              </li>
            ))}
          </ul>
          <div className="p-2 space-y-2">
            <Input
              label="States"
              placeholder="Enter a state"
              value={state.location.states}
              onChange={(value) => handleInputDispatch("states", value)}
            />
            <Input
              label="Metros ?"
              placeholder="All Metros"
              value={state.location.metros}
              onChange={(value) => handleInputDispatch("metros", value)}
            />
            <Input
              label="Submarket"
              placeholder="All Submarkets"
              value={state.location.submarkets}
              onChange={(value) => handleInputDispatch("submarkets", value)}
            />

            <Input label="County" />
            <Input
              label="City"
              value={state.location.city}
              onChange={(value) => handleInputDispatch("city", value)}
            />
            <Input
              label="Zip Code"
              value={state.location.zipCodes}
              onChange={(value) => handleInputDispatch("zipCodes", value)}
            />
            <Input
              label="Street Adress or intersection"
              value={state.location.streetAddresses}
              onChange={(value) =>
                handleInputDispatch("streetAddresses", value)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
