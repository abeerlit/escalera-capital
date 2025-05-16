import { useFilters } from "@/hooks/useFilters";
import { Dropdown } from "./dropDown";
import { LocationDropdown } from "./locationDropdown";
import { AllFilters } from "./allFilters";

const forSaleOptions = ["For Sale", "For Lease", "All Properties"];
const businessPlans = [
  "Debt Maturing",
  "Negative Cash Flow",
  "Value-Add",
  "Land Banking",
  "Adaptive Reuse",
  "Mark to Market",
  "Core+",
  "Supply Demand Imbalance",
  "Shallow Bay Ground Up",
  "Tilt Wall Ground Up",
  "Logistics Ground Up",
  "MOB Ground Up",
  "Strip Center Ground Up",
  "High Vacancy",
  "Big Box Ground Up",
  "Full Service Ground Up",
  "Select Service Ground Up",
  "Boutique Ground Up",
  "Limited Service Ground Up",
  "Extended Stay Ground Up",
  "Garden Style Ground Up",
  "Infill Multi Ground Up",
];

export const FiltersComponent = () => {
  const { state, dispatch } = useFilters();

  return (
    <div className="relative flex items-center gap-3 bg-gray-50 p-3 rounded shadow">
      <div className="flex gap-1 items-center rounded p-1 bg-white border border-gray-300 w-2/12 min-w-[150px]">
        <svg
          height="20px"
          width="20px"
          viewBox="-8.25 -8.25 222.78 222.78"
          fill="#098aec"
          stroke="#098aec"
          strokeWidth="15"
        >
          <path d="M175.922,102.595c-1.414-38.698-32.553-69.841-71.255-71.251V0.004h-5.451v31.34 c-38.698,1.414-69.838,32.553-71.255,71.251H0v5.443h27.962c1.417,38.702,32.557,69.845,71.255,71.258v26.985h5.451v-26.985 c38.702-1.417,69.841-32.557,71.255-71.258h30.363v-5.443H175.922z M170.471,108.038c-1.414,35.667-30.145,64.398-65.804,65.808 v-28.684h-5.451v28.684c-35.656-1.41-64.394-30.152-65.801-65.808h27.707v-5.443H33.416c1.41-35.653,30.145-64.387,65.801-65.801 V61.12h5.451V36.794c35.66,1.414,64.394,30.148,65.804,65.801h-25.302v5.443H170.471z" />
        </svg>
        <input
          type="search"
          value={state.search}
          placeholder="Enter a location"
          className="outline-none bg-white border-none w-full"
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH", payload: e.target.value })
          }
        />
      </div>
      {/* Left Side Filters */}
      <Dropdown
        title="For Sale"
        options={forSaleOptions}
        selected={state.forSale || "Select For Sale"}
        onSelect={(val) => dispatch({ type: "SET_FOR_SALE", payload: val })}
      />
      <Dropdown
        title="Business Plan"
        options={businessPlans}
        selected={state.businessPlan || "Select Business Plan"}
        showCheckbox
        onSelect={(val) =>
          dispatch({ type: "SET_BUSINESS_PLAN", payload: val })
        }
      />
      <LocationDropdown />
      <AllFilters />

      {/* Right Side Filters */}
      <button className="ml-auto border px-3 py-1 border-gray-300 rounded bg-white hover:bg-gray-100 whitespace-nowrap">
        Save Search
      </button>
      <Dropdown
        title="Sort"
        options={[]}
        selected={"Sort"}
        onSelect={() => {}}
        className="!max-w-20"
      />
    </div>
  );
};
