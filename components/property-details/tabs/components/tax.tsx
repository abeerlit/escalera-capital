import { Table } from "@/components/common/table";

export const Tax = () => {

    const customRender = (key: string, row: Record<string, unknown>) => {
        if (key === "label") {
            return (
                <span className="font-semibold mr-8">
                    {row[key as string] as string}
                </span>
            )
        } else return null;
    }

    return (
        <Table
            headers={taxHeaders}
            data={taxData}
            customRender={customRender}
        />
    )
}

const taxHeaders = [
    { key: "label", label: "Tax Data" },
    { key: "2023", label: "2023", className: "text-right" },
    { key: "2022", label: "2022", className: "text-right" },
    { key: "2021", label: "2021", className: "text-right" },
];

const taxData = [
    {
        label: "Tax Amount",
        "2023": "$49,706",
    },
    {
        label: "YoY Change In Tax Amount",
        "2023": "Unchanged",
    },
    {
        label: "Assessed Land Value",
        "2023": "$694,970",
    },
    {
        label: "Assessed Improvement Value",
        "2023": "$1,447,920",
    },
    {
        label: "Total Assessed Value",
        "2023": "$2,142,890",
    },
    {
        label: "Applied Tax Rate",
        "2023": "2.32%",
    },
    {
        label: "Land Market Value",
        "2023": "$694,970",
    },
    {
        label: "Improvements Market Value",
        "2023": "$1,447,920",
    },
];