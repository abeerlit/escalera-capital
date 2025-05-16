import { BarGraphInput } from "../barGraphInput";
import { ButtonsSelection } from "../buttonsSelection";
import { CheckboxInput } from "../checkboxInput";
import { MinMaxInput } from "../minMaxInput";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { useFilters } from "@/hooks/useFilters";

export const Sales = () => {
  const { handleChange, handleMinMaxChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-8 flex-1">
      <div className="space-y-6">
        <ButtonsSelection
          label={
            <div className="flex gap-2 justify-between items-center">
              <span>Sale Date</span>
              <div className="flex font-normal">
                <button className="rounded-full px-2 py-1 text-xs leading-none bg-blue-100 text-blue-900 ">
                  Within
                </button>
                <button className="rounded-full px-2 py-1 text-xs leading-none">
                  Not Within
                </button>
              </div>
            </div>
          }
          buttons={[
            "Past 90 days",
            "Past year",
            "Past 2 years",
            "Past 5 years",
            "Past 10 years",
            "Custom",
          ]}
          selected={state.allFilters.sales.saleDate}
          onClick={(value) => handleChange("sales", "saleDate", value)}
        />
        <ButtonsSelection
          label="Multi-Parcel Sales?"
          buttons={["Yes", "No"]}
          selected={state.allFilters.sales.multiParcelSale}
          onClick={(value) => handleChange("sales", "multiParcelSale", value)}
        />
      </div>
      <div className="space-y-4">
        <BarGraphInput
          label="Sale Price ?"
          labelPills={["Preset", "Custom"]}
          barGraphData={[
            "50",
            "24",
            "30",
            "40",
            "51",
            "69",
            "70",
            "10",
            "83",
            "20",
          ]
            .reverse()
            .sort((a, b) => Number(a) - Number(b))}
        />
        <BarGraphInput
          label="Sale Price / SF ?"
          labelPills={["Preset", "Custom"]}
          barGraphData={[
            "27",
            "62",
            "49",
            "35",
            "40",
            "54",
            "80",
            "70",
            "10",
            "20",
          ].reverse()}
        />
      </div>
      <div className="space-y-6">
        <MinMaxInput
          label="Sale Price / Acre"
          min={state.allFilters.sales.salePriceOrAcre.min}
          max={state.allFilters.sales.salePriceOrAcre.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) => handleMinMaxChange("sales", "salePriceOrAcre", "min", value)}
          onMaxChange={(value) => handleMinMaxChange("sales", "salePriceOrAcre", "max", value)}
        />
        <CheckboxInput
          label="Likelihood to Sell ?"
          checkLabel="Likely to Sell Properties"
          checked={state.allFilters.sales.likelihoodToSale === "true"}
          onChange={(checked) =>
            handleChange("sales", "likelihoodToSale", checked ? "true" : "false")
          }
        />
        <div className="flex flex-col gap-2">
          <div className="flex">
            <button className="rounded-full px-2 py-1 text-xs leading-none bg-green-100 text-green-900 ">
              High
            </button>
            <div className="border-b border-gray-300 mb-1 flex-1" />
            --
          </div>
          <div className="flex">
            <button className="rounded-full px-2 py-1 text-xs leading-none bg-blue-100 text-blue-900 ">
              Medium
            </button>
            <div className="border-b border-gray-300 mb-1 flex-1" />
            --
          </div>
        </div>
      </div>
    </div>
  );
};
