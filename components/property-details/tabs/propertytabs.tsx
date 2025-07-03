"use client";
import React, { useState } from 'react'
import { BuildingAndLot } from './components/building_and_lot';
import { Owner } from './components/owner';
import { Occupants } from './components/occupants';
import { Sales } from './components/sales';
import { Debt } from './components/debt';
import { Tax } from './components/tax';
import { Demographics } from './components/demographics';
import { Permits } from './components/permits';

const PROPERTY_TABS = {
    building_and_lot: "Building & Lot",
    owner: "Owner",
    occupants: "Occupants",
    sales: "Sales",
    debt: "Debt",
    tax: "Tax",
    demographics: "Demographics",
    notes: "Notes",
    permits: "Permits",
    reviews: "Reviews",
};

const PROPERTY_TABS_COMPONENTS = {
    building_and_lot: BuildingAndLot,
    owner: Owner,
    occupants: Occupants,
    sales: Sales,
    debt: Debt,
    tax: Tax,
    demographics: Demographics,
    notes: () => <>Notes</>,
    permits: Permits,
    reviews: () => <>Reviews</>,
};

export const PropertyTabs = () => {
    const [currentTab, setCurrentTab] = useState("building_and_lot");

    return (
        <div className='py-8'>
            <h2 className='text-2xl font-bold mb-2 px-4'>Property Details</h2>
            <div className="flex overflow-x-auto border-b border-gray-300">
                {Object.entries(PROPERTY_TABS).map(([key, label]) => (
                    <button
                        key={key}
                        className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent ${currentTab === key
                            ? "!border-black text-black"
                            : "text-gray-700 hover:text-black cursor-pointer"
                            }`}
                        onClick={() => setCurrentTab(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {PROPERTY_TABS_COMPONENTS[
                currentTab as keyof typeof PROPERTY_TABS_COMPONENTS
            ] &&
                React.createElement(
                    PROPERTY_TABS_COMPONENTS[
                        currentTab as keyof typeof PROPERTY_TABS_COMPONENTS
                    ]
                )}
        </div>
    )
}