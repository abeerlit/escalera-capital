import React, { useState } from "react";
import { PropertyTypeList } from "./PropertyTypeList";

const FILTER_TABS = {
  commercial: "Commercial",
  industrial: "Industrial",
  multifamily: "Multifamily",
  specialPurpose: "Special Purpose",
  vacantLand: "Vacant Land",
  others: "Others",
};

export const PropertyType = () => {
  const [currentTab, setCurrentTab] = useState("commercial");

  return (
    <>
      <div className="flex overflow-x-auto border-b border-gray-300">
        {Object.entries(FILTER_TABS).map(([key, label]) => (
          <button
            key={key}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent ${
              currentTab === key
                ? "!border-blue-800 text-blue-800"
                : "text-gray-500 hover:text-black cursor-pointer"
            }`}
            onClick={() => setCurrentTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <PropertyTypeList currentTab={currentTab} />
    </>
  );
};
