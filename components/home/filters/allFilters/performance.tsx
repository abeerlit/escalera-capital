import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { useFilters } from "@/hooks/useFilters";
import { MinMaxInput } from "../minMaxInput";

export const Performance = () => {
  const { handleMinMaxChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-4 gap-10 flex-1">
      <div className="space-y-4">
        <MinMaxInput
          label="Rent"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.rent.min}
          max={state.allFilters.performance.rent.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "rent", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "rent", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="City Index"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.cityIndex.min}
          max={state.allFilters.performance.cityIndex.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "cityIndex", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "cityIndex", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Submarket Index"
          min={state.allFilters.performance.submarketIndex.min}
          max={state.allFilters.performance.submarketIndex.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) =>
            handleMinMaxChange("performance", "submarketIndex", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "submarketIndex", "max", value)
          }
          hideChevron
        />
      </div>
      <div className="space-y-4">
        <MinMaxInput
          label="Property Index"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyIndex.min}
          max={state.allFilters.performance.propertyIndex.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "propertyIndex", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "propertyIndex", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Brand Index"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.brandIndex.min}
          max={state.allFilters.performance.brandIndex.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "brandIndex", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "brandIndex", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Zip Code Index"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.zipCodeIndex.min}
          max={state.allFilters.performance.zipCodeIndex.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "zipCodeIndex", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "zipCodeIndex", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Estimated Vacancy"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.estimatedVacancy.min}
          max={state.allFilters.performance.estimatedVacancy.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "estimatedVacancy", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "estimatedVacancy", "max", value)
          }
          hideChevron
        />
      </div>
      <div className="space-y-4">
        <MinMaxInput
          label="Submarket Rent Growth"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.submarketRentGrowth.min}
          max={state.allFilters.performance.submarketRentGrowth.max}
          onMinChange={(value) =>
            handleMinMaxChange(
              "performance",
              "submarketRentGrowth",
              "min",
              value
            )
          }
          onMaxChange={(value) =>
            handleMinMaxChange(
              "performance",
              "submarketRentGrowth",
              "max",
              value
            )
          }
          hideChevron
        />
        <MinMaxInput
          label="Property Type Rent Growth"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyTypeRentGrowth.min}
          max={state.allFilters.performance.propertyTypeRentGrowth.max}
          onMinChange={(value) =>
            handleMinMaxChange(
              "performance",
              "propertyTypeRentGrowth",
              "min",
              value
            )
          }
          onMaxChange={(value) =>
            handleMinMaxChange(
              "performance",
              "propertyTypeRentGrowth",
              "max",
              value
            )
          }
          hideChevron
        />
        <MinMaxInput
          label="Property Rent Growth"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyRentGrowth.min}
          max={state.allFilters.performance.propertyRentGrowth.max}
          onMinChange={(value) =>
            handleMinMaxChange(
              "performance",
              "propertyRentGrowth",
              "min",
              value
            )
          }
          onMaxChange={(value) =>
            handleMinMaxChange(
              "performance",
              "propertyRentGrowth",
              "max",
              value
            )
          }
          hideChevron
        />
        <MinMaxInput
          label="Property RevPAR"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyRevPAR.min}
          max={state.allFilters.performance.propertyRevPAR.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "propertyRevPAR", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "propertyRevPAR", "max", value)
          }
          hideChevron
        />
      </div>
      <div className="space-y-4">
        <MinMaxInput
          label="Property Rent"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyRent.min}
          max={state.allFilters.performance.propertyRent.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "propertyRent", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "propertyRent", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Property Type Rent"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.propertyTypeRent.min}
          max={state.allFilters.performance.propertyTypeRent.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "propertyTypeRent", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "propertyTypeRent", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="City Rent"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.cityRent.min}
          max={state.allFilters.performance.cityRent.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "cityRent", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "cityRent", "max", value)
          }
          hideChevron
        />
        <MinMaxInput
          label="Submarket Rent"
          minPlaceholder="min"
          maxPlaceholder="max"
          min={state.allFilters.performance.submarketRent.min}
          max={state.allFilters.performance.submarketRent.max}
          onMinChange={(value) =>
            handleMinMaxChange("performance", "submarketRent", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("performance", "submarketRent", "max", value)
          }
          hideChevron
        />
      </div>
    </div>
  );
};
