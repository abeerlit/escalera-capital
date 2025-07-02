import React from 'react';

export const BuildingAndLot = () => {
    return (
        <div className='p-2 bg-slate-50 flex flex-wrap gap-4'>
            <div className='flex-1 basis-2xl p-4 rounded border border-gray-200 bg-white'>
                <h3 className='text-lg font-bold mb-2'>{BuildingData.title}</h3>
                {BuildingData.list.map((item, index) => (
                    <BuildingAndLotListItem key={index} item={item} />
                ))}
            </div>
            <div className='flex-1 basis-2xl p-4 rounded border border-gray-200 bg-white'>
                <h3 className='text-lg font-bold mb-2'>{LotData.title}</h3>
                {LotData.list.map((item, index) => (
                    <BuildingAndLotListItem key={index} item={item} />
                ))}
            </div>
            <div className='flex-1 basis-2xl p-4 rounded border border-gray-200 bg-white'>
                <h3 className='text-lg font-bold mb-2'>{LocationData.title}</h3>
                {LocationData.list.map((item, index) => (
                    <BuildingAndLotListItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

type BuildingAndLotListItemProps = {
    item: {
        title: string;
        value: string;
    };
    className?: string;
}

const BuildingAndLotListItem = ({
    item,
    className,
}: BuildingAndLotListItemProps) => {
    return (
        <div key={item.title} className={`flex gap-1 ${className}`}>
            <span>
                {item.title}
            </span>
            <div className="flex-1 border-b border-gray-300 mb-1.5" />
            <span className="text-sm">
                {item.value || "--"}
            </span>
        </div>
    );
};

const BuildingData = {
    title: "Building",
    list: [
        { title: "Year Built", value: "1965" },
        { title: "Year Renovated", value: "1975" },
        { title: "Stories", value: "1" },
        { title: "Number of Buildings", value: "5" },
        { title: "Existing Floor Area Ratio", value: "0.32" },
        { title: "Commercial Units", value: "--" },
        { title: "Residential Units", value: "--" },
        { title: "Total Units", value: "--" },
        { title: "Building Area", value: "57,520 sf" },
    ],
}

const LotData = {
    title: "Lot",
    list: [
        { title: "Property Type", value: "Industrial | Warehouse" },
        { title: "Lot Area SF", value: "177,289 sf" },
        { title: "Lot Area Acres", value: "4.07 acres" },
        { title: "Zoning", value: "--" },
        { title: "Depth", value: "--" },
        { title: "Frontage", value: "--" },
        { title: "Census Tract", value: "48029131504" },
        { title: "Opportunity Zone", value: "No" },
    ],
}

const LocationData = {
    title: "Location",
    list: [
        { title: "Metropolitan Statistical Area", value: "San Antonio-New Braunfels, TX" },
        { title: "County", value: "Bexar County" },
        { title: "Municipality", value: "San Antonio" },
        { title: "Minor Civil Division", value: "San Antonio Northeast" },
        { title: "Neighborhood", value: "East San Antonio" },
        { title: "Legal", value: "NCB 10599 BLK LOT 10 & 11 2010-MERGE PER CR# 21405 RECEIVED 6/4/09" },
    ],
}