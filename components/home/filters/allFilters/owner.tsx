import { ButtonsSelection } from "../buttonsSelection";
import { MinMaxInput } from "../minMaxInput";
import { Input } from "../input";
import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { useFilters } from "@/hooks/useFilters";
import { CheckboxInput } from "../checkboxInput";

export const Owner = () => {
  const { handleChange, handleMinMaxChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-6">
        <Input
          label="Owner ?"
          placeholder="Company or Person Name"
          value={state.allFilters.owner.ownerName}
          onChange={(value) => handleChange("owner", "ownerName", value)}
        />
        <ButtonsSelection
          label="Owner Type ?"
          buttons={["Company", "Person"]}
          selected={state.allFilters.owner.ownerType}
          onClick={(value) => handleChange("owner", "ownerType", value)}
        />
        <ButtonsSelection
          label="Owner Contact Information ?"
          buttons={[
            "Includes Phone Address",
            "Includes Email Address",
            "Includes Mailing Address",
          ]}
          selected={state.allFilters.owner.ownerContactInformation}
          onClick={(value) =>
            handleChange("owner", "ownerContactInformation", value)
          }
        />
      </div>
      <div className="space-y-6">
        <MinMaxInput
          label="Properties In Portfolio ?"
          min={state.allFilters.owner.propertiesInPortfolio.min}
          max={state.allFilters.owner.propertiesInPortfolio.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) =>
            handleMinMaxChange("owner", "propertiesInPortfolio", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("owner", "propertiesInPortfolio", "max", value)
          }
        />
        <CheckboxInput
          label="Owner Occupied ?"
          checkLabel="Owner-Occupied Property"
          checked={state.allFilters.owner.ownerOccupied === "true"}
          onChange={(checked) =>
            handleChange("owner", "ownerOccupied", checked ? "true" : "false")
          }
        />
        <ButtonsSelection
          label="In-State reported Owner Mailing Address ?"
          buttons={["Yes", "No"]}
          selected={state.allFilters.owner.inStateReportedOwnerMailingAddress}
          onClick={(value) =>
            handleChange("owner", "inStateReportedOwnerMailingAddress", value)
          }
        />
      </div>
      <div className="space-y-6">
        <MinMaxInput
          label="Portfolio Assessed Value"
          min={state.allFilters.owner.portfolioAssessedValue.min}
          max={state.allFilters.owner.portfolioAssessedValue.max}
          minPlaceholder="min"
          maxPlaceholder="max"
          onMinChange={(value) =>
            handleMinMaxChange("owner", "portfolioAssessedValue", "min", value)
          }
          onMaxChange={(value) =>
            handleMinMaxChange("owner", "portfolioAssessedValue", "max", value)
          }
        />
        <Input
          label="Reported Owner ?"
          placeholder="Reported Owner"
          value={state.allFilters.owner.reportedOwner}
          onChange={(value) => handleChange("owner", "reportedOwner", value)}
        />
        <Input
          label="Reported Owner Mailing Address ?"
          placeholder="Mailing Address"
          value={state.allFilters.owner.reportedOwnerMailingAddress}
          onChange={(value) =>
            handleChange("owner", "reportedOwnerMailingAddress", value)
          }
        />
      </div>
    </div>
  );
};
