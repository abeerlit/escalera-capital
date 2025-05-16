import { useFilters } from "@/hooks/useFilters";
import { BarGraphInput } from "../barGraphInput";
import { ButtonsSelection } from "../buttonsSelection";
import { Input } from "../input";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";

export const Debt = () => {
  const { handleChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-8 flex-1">
      <div className="space-y-6">
        <BarGraphInput
          label="Mortgage Amount ?"
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
        <ButtonsSelection
          label={
            <div className="flex gap-2 justify-between items-center">
              <span>Mortgage Origination</span>
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
            "Last year",
            "Last 1-2 year",
            "Last 2-3 years",
            "Last 3-5 years",
            "Last 5-7 years",
            "Last 7-10 years",
            "Custom",
          ]}
          selected={state.allFilters.debt.mortgageOrigination}
          onClick={(value) =>
            handleChange("debt", "mortgageOrigination", value)
          }
        />
      </div>
      <div className="space-y-6">
        <ButtonsSelection
          label="Maturity Date"
          buttons={[
            "Next 90 days",
            "Next year",
            "Next 2 years",
            "Next 5 years",
            "Next 10 years",
            "Custom",
          ]}
          selected={state.allFilters.debt.maturityDate}
          onClick={(value) => handleChange("debt", "maturityDate", value)}
        />
        <Input
          label="Lender Name"
          placeholder="Lender"
          value={state.allFilters.debt.lenderName}
          onChange={(value) => handleChange("debt", "lenderName", value)}
        />
      </div>
      <div className="space-y-6">
        <ButtonsSelection
          label="CMBS Loan"
          buttons={["Current", "Historical"]}
          selected={state.allFilters.debt.CMBsLoan}
          onClick={(value) => handleChange("debt", "CMBsLoan", value)}
        />
      </div>
    </div>
  );
};
