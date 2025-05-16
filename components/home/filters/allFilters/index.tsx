import React, { useEffect, useState } from "react";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { PropertyType } from "./propertyType";
import { BuildingAndLot } from "./buildingAndLot";
import { Owner } from "./owner";
import { Occupants } from "./occupants";
import { Tax } from "./tax";
import { Distressed } from "./distressed";
import { Sales } from "./sales";
import { Debt } from "./debt";
import { MyProperties } from "./myProperties";
import { Performance } from "./performance";

const FILTER_TABS = {
  property_type: "Property Type",
  building_and_lot: "Building & Lot",
  owner: "Owner",
  occupants: "Occupants",
  sales: "Sales",
  debt: "Debt",
  distressed: "Distressed",
  tax: "Tax",
  my_properties: "My Properties",
  performance: "Performance",
};

const FILTER_TABS_COMPONENTS = {
  property_type: PropertyType,
  building_and_lot: BuildingAndLot,
  owner: Owner,
  occupants: Occupants,
  sales: Sales,
  debt: Debt,
  distressed: Distressed,
  tax: Tax,
  my_properties: MyProperties,
  performance: Performance,
};

export const AllFilters = () => {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("property_type");

  const handleClickOutside = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      !e.target.closest(".all-filters-dropdown") &&
      open
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="all-filters-dropdown">
      <button
        className="border border-gray-300 rounded px-3 py-1 w-fit bg-white flex items-center gap-4 whitespace-nowrap"
        onClick={() => setOpen(!open)}
      >
        All Filters
        <ChevronIcon className={`w-4 h-4 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute min-h-[300px] z-10 left-0 top-12 bg-white border border-gray-300 shadow-lg w-full flex flex-col">
          <div className="flex overflow-x-auto border-b border-gray-300">
            {Object.entries(FILTER_TABS).map(([key, label]) => (
              <button
                key={key}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent ${
                  currentTab === key
                    ? "!border-black text-black"
                    : "text-gray-700 hover:text-black cursor-pointer"
                }`}
                onClick={() => setCurrentTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
          {FILTER_TABS_COMPONENTS[
            currentTab as keyof typeof FILTER_TABS_COMPONENTS
          ] &&
            React.createElement(
              FILTER_TABS_COMPONENTS[
                currentTab as keyof typeof FILTER_TABS_COMPONENTS
              ]
            )}
          <div className="flex gap-4 p-4 mt-auto">
            {currentTab === "property_type" && (
              <p className="text-gray-700 text-sm">
                * Properties available in current search
              </p>
            )}
            {(currentTab === "sales" || currentTab === "debt") && (
              <p className="text-gray-700 text-sm">
                * Filters apply to most recent transactions
              </p>
            )}
            <button onClick={() => setOpen(false)} className="text-sm font-semibold ms-auto">Close</button>
            <button onClick={() => setOpen(false)} className="text-sm font-semibold bg-blue-900 text-white px-2 py-1">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};
