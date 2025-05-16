import { MinMaxInput } from "../minMaxInput";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { useFilters } from "@/hooks/useFilters";

export const Tax = () => {
  const { handleMinMaxChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-6">
        <MinMaxInput
          label="YoY Change"
          min={state.allFilters.tax.yoyChange.min}
          max={state.allFilters.tax.yoyChange.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) => handleMinMaxChange("tax", "yoyChange", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("tax", "yoyChange", "max", value)}
        />
        <MinMaxInput
          label="Tax Amount"
          min={state.allFilters.tax.taxAmount.min}
          max={state.allFilters.tax.taxAmount.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) => handleMinMaxChange("tax", "taxAmount", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("tax", "taxAmount", "max", value)}
        />
      </div>
    </div>
  );
};
