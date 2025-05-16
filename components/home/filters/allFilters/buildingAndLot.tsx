import { useFilters } from "@/hooks/useFilters";
import { ButtonsSelection } from "../buttonsSelection";
import { MinMaxInput } from "../minMaxInput";
import { Input } from "../input";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";


export const BuildingAndLot = () => {
  const { handleChange, handleMinMaxChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-6">
        <MinMaxInput
          label="Year Built"
          min={state.allFilters.buildingAndLot.yearBuilt.min}
          max={state.allFilters.buildingAndLot.yearBuilt.max}
          minPlaceholder="from"
          maxPlaceholder="until"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "yearBuilt", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "yearBuilt", "max", value)}
        />
        <MinMaxInput
          label="Year Renovated"
          min={state.allFilters.buildingAndLot.yearRenovated.min}
          max={state.allFilters.buildingAndLot.yearRenovated.max}
          minPlaceholder="from"
          maxPlaceholder="until"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "yearRenovated", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "yearRenovated", "max", value)}
        />
        <Input
          label="Zoning"
          placeholder="Example: C2, 13, R5"
          value={state.allFilters.buildingAndLot.zoning}
          onChange={(value) => handleChange("buildingAndLot", "zoning", value)}
        />
      </div>
      <div className="space-y-6">
        <MinMaxInput
          label="Lot Size (SF)"
          min={state.allFilters.buildingAndLot.lotSizeSF.min}
          max={state.allFilters.buildingAndLot.lotSizeSF.max}
          minPlaceholder="Min"
          maxPlaceholder="Max"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "lotSizeSF", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "lotSizeSF", "max", value)}
        />
        <MinMaxInput
          label="Lot Size (Acreage)"
          min={state.allFilters.buildingAndLot.lotSizeAcreage.min}
          max={state.allFilters.buildingAndLot.lotSizeAcreage.max}
          minPlaceholder="Min"
          maxPlaceholder="Max"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "lotSizeAcreage", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "lotSizeAcreage", "max", value)}
        />
        <ButtonsSelection
          label="Opportunity Zone ?"
          buttons={["Yes", "No"]}
          selected={state.allFilters.buildingAndLot.opportunityZone}
          onClick={(value) => handleChange("buildingAndLot", "opportunityZone", value)}
        />
      </div>
      <div className="space-y-6">
        <MinMaxInput
          label="Total Units"
          min={state.allFilters.buildingAndLot.totalUnits.min}
          max={state.allFilters.buildingAndLot.totalUnits.max}
          minPlaceholder="Min"
          maxPlaceholder="Max"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "totalUnits", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "totalUnits", "max", value)}
        />
        <MinMaxInput
          label="Building Area"
          min={state.allFilters.buildingAndLot.buildingArea.min}
          max={state.allFilters.buildingAndLot.buildingArea.max}
          minPlaceholder="Min"
          maxPlaceholder="Max"
          onMinChange={(value) => handleMinMaxChange("buildingAndLot", "buildingArea", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("buildingAndLot", "buildingArea", "max", value)}
        />
      </div>
    </div>
  );
};
