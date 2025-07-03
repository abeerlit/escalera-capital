import { Table } from "@/components/common/table";

export const Occupants = () => {

    const customRender = (key: string, row: Record<string, unknown>) => {
        if (key === "currentOccupant") {
            return (
                <span className="font-semibold mr-8">
                    {row[key as string] as string}
                </span>
            )
        } else if (key === "website") {
            return (
                <>
                    {row[key as string] ?
                        <a
                            href={row[key as string] as string} target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 underline hover:text-blue-800"
                        >
                            {row[key as string] as string}
                        </a>
                        : <>--</>
                    }
                </>
            )
        } else return null;
    }

    return (
        <Table
            headers={occupantsHeaders}
            data={occupantsData}
            showRowNumbers
            customRender={customRender}
        />
    )
}

const occupantsHeaders = [
    { key: "currentOccupant", label: "Current Occupant" },
    { key: "address", label: "Address" },
    { key: "naics", label: "NAICS" },
    { key: "sic", label: "SIC" },
    { key: "typeOfLocation", label: "Type of Location" },
    { key: "employees", label: "Employees", className: "text-right" },
    { key: "yearStarted", label: "Year Started", className: "text-right" },
    { key: "website", label: "Website" },
    { key: "contacts", label: "Contacts", className: "text-center" },
];

const occupantsData = [
    {
        currentOccupant: "Allignment Right Inc",
        address: "6910 NE Loop 410 San Antonio, TX 78219",
        naics: "Specialized Automotive Repair",
        sic: "Wheel Alignment, Automotive",
        typeOfLocation: "Single Location",
        employees: 1,
        yearStarted: 2001,
        website: "www.alignmentright.com",
        contacts: "2 Contacts",
    },
    {
        currentOccupant: "Idla Towing And Recovery",
        address: "6910 NE Loop 410 Ste 2 San Antonio, TX...",
        naics: "Motor Vehicle Towing",
        sic: "Towing Services",
        typeOfLocation: "Single Location",
        employees: 3,
        yearStarted: 2017,
    },
    {
        currentOccupant: "C C Custom Cabinets Granite",
        address: "6910 NE Loop 410 San Antonio, TX 78219",
        naics: "Finish Carpentry Contractors",
        sic: "Counter Top Installation",
        typeOfLocation: "Single Location",
        employees: 1,
        yearStarted: 2015,
    },
    {
        currentOccupant: "Baldemar T Frlas, Dba Used Shelving Of ...",
        address: "6910 NE Loop 410 San Antonio, TX 78219",
        naics: "All Other Plastics Product Manufacturing",
        sic: "Plastics Products, Nec",
        typeOfLocation: "Single Location",
        employees: 2,
        yearStarted: 2009,
    },
];