import { useFilters } from "@/hooks/useFilters";
import { ButtonsSelection } from "../buttonsSelection";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";

export const Distressed = () => {
  const { handleChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-8">
        <ButtonsSelection
          label="Auction Date"
          buttons={["Next 2 weeks", "Next month", "Next 3 months", "Custom"]}
          selected={state.allFilters.distressed.auctionDate}
          onClick={(value) => handleChange("distressed", "auctionDate", value)}
        />
        <ButtonsSelection
          label="Pre-foreclosure Category"
          buttons={[
            "All",
            "Final Judgement of Foreclosure",
            "Lis Pendens",
            "Notice of Default",
          ]}
          selected={state.allFilters.distressed.preForeclosureCategory}
          onClick={(value) =>
            handleChange("distressed", "preForeclosureCategory", value)
          }
        />
      </div>
      <div className="space-y-8">
        <ButtonsSelection
          label="On CMBS Watchlist ?"
          buttons={["Currently", "Previously"]}
          selected={state.allFilters.distressed.onCMBsWatchList}
          onClick={(value) =>
            handleChange("distressed", "onCMBsWatchList", value)
          }
        />
      </div>
    </div>
  );
};
