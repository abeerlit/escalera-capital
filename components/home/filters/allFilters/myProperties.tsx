import useAllFiltersDispatch from "@/hooks/useAllFiltersDispatch";
import { useFilters } from "@/hooks/useFilters";
import { Input } from "../input";
import { CheckboxInput } from "../checkboxInput";
import { ButtonsSelection } from "../buttonsSelection";

export const MyProperties = () => {
  const { handleChange } = useAllFiltersDispatch();
  const { state } = useFilters();

  return (
    <div className="p-4 grid grid-cols-3 gap-4 flex-1">
      <div className="space-y-6">
        <Input
          label="Labels ?"
          placeholder="Search for a label"
          value={state.allFilters.myProperties.labels}
          onChange={(value) => handleChange("myProperties", "labels", value)}
        />
      </div>
      <div className="space-y-6">
        <Input
          label="Note Text ?"
          placeholder="Text"
          value={state.allFilters.myProperties.noteText}
          onChange={(value) => handleChange("myProperties", "noteText", value)}
        />
        <CheckboxInput
          label="Has Note ?"
          checkLabel="Has Note"
          checked={state.allFilters.myProperties.hasNote === "true"}
          onChange={(checked) =>
            handleChange("myProperties", "hasNote", checked ? "true" : "false")
          }
        />
      </div>
      <div className="space-y-6">
        <ButtonsSelection
          label="Viewed Data ?"
          buttons={[
            "Past day",
            "Past 7 days",
            "Past 30 days",
            "Past 3 months",
            "Custom",
          ]}
          selected={state.allFilters.myProperties.viewedData}
          onClick={(value) => handleChange("myProperties", "viewedData", value)}
        />
        <ButtonsSelection
          label="Exported Properties ?"
          buttons={["Include", "Exclude"]}
          selected={state.allFilters.myProperties.exportedProperties}
          onClick={(value) =>
            handleChange("myProperties", "exportedProperties", value)
          }
        />
      </div>
    </div>
  );
};
