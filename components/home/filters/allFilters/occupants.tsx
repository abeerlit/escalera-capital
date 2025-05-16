import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { Input } from "../input";
import { useFilters } from "@/hooks/useFilters";

export const Occupants = () => {
  const { handleChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-6">
        <Input
          label="Current Occupant"
          placeholder="Current Occupant"
          value={state.allFilters.occupants.currentOccupant}
          onChange={(value) =>
            handleChange("occupants", "currentOccupant", value)
          }
        />
        <Input
          label={
            <div className="flex gap-2 justify-between items-center">
              <span>Occupant Type</span>
              <div className="flex font-normal">
                <button className="rounded-full px-2 py-1 text-xs leading-none bg-blue-100 text-blue-900 ">
                  NAICS
                </button>
                <button className="rounded-full px-2 py-1 text-xs leading-none">
                  SIC
                </button>
              </div>
            </div>
          }
          placeholder="Search by NAICS/SIC Description"
          value={state.allFilters.occupants.occupantType}
          onChange={(value) => handleChange("occupants", "occupantType", value)}
        />
        <Input
          label="Occupant Website"
          placeholder="Occupant Website"
          value={state.allFilters.occupants.occupantWebsite}
          onChange={(value) =>
            handleChange("occupants", "occupantWebsite", value)
          }
        />
      </div>
    </div>
  );
};
