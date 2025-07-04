"use client"
import { useState } from "react";
import { AnalyticsChart, AnalyticsTable } from "./AnalyticsChart";

const TABS = {
    rentalAnalysis : "Rental Analysis",
    vacancyAnalysis : "Vacancy Analysis",
    submarket : "Submarket:",
    msa : "MSA:",
    propertyType : "Property Type:",
    zoning : "Zoning:",
    sf : "SF:",
    numberOfUnits : "Number of Units:",
    yearsBuilt : "Year(s) Built:",
    landSizeAcres : "Land Size (Acres):",
    landSizeSF : "Land Size (SF):",
    parkingSpaces : "Parking Spaces:",
};

export const PropertyDetailAnalytics = () => {
    const [currentTab, setCurrentTab] = useState("rentalAnalysis");

    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-4 px-4">Data Analytics</h2>
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 px-4">
                    <div className="flex flex-col gap-2 min-w-fit">
                        {Object.entries(TABS).map(([key, value]) => (
                            <button
                                key={key}
                                className={`px-2 py-2 pe-28 cursor-pointer text-left text-sm
                                    ${currentTab === key ? "bg-gray-400" : "bg-gray-200"}
                                `}
                                onClick={() => setCurrentTab(key)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col flex-1 overflow-x-auto">
                        <h2 className="text-2xl font-bold mb-4 border-b-2 w-fit">{TABS[currentTab as keyof typeof TABS]}</h2>
                        <AnalyticsChart selectedTab={currentTab} />
                    </div>
                </div>
                <AnalyticsTable selectedTab={currentTab}/>
            </div>
        </div>
    )
}