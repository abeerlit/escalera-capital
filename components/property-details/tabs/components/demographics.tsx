import { Table } from "@/components/common/table";

export const Demographics = () => {
    return (
        <Table
            headers={demographicsHeaders}
            data={demographicsData}
        />
    )
}


const demographicsHeaders = [
    { key: "label", label: "" },
    { key: "oneMile", label: "1 MILE", className: "text-right" },
    { key: "threeMile", label: "3 MILE", className: "text-right" },
    { key: "fiveMile", label: "5 MILE", className: "text-right" },
];

const demographicsData = [
    {
        label: "2024 Total Population",
        oneMile: "5,791",
        threeMile: "69,130",
        fiveMile: "233,007",
    },
    {
        label: "2029 Population",
        oneMile: "6,086",
        threeMile: "73,843",
        fiveMile: "249,952",
    },
    {
        label: "Pop Growth 2024-2029",
        oneMile: "+ 5.09%",
        threeMile: "+ 6.82%",
        fiveMile: "+ 7.27%",
    },
    {
        label: "Average Age",
        oneMile: "37",
        threeMile: "35",
        fiveMile: "36",
    },
    {
        label: "2024 Total Households",
        oneMile: "2,025",
        threeMile: "23,303",
        fiveMile: "85,056",
    },
    {
        label: "HH Growth 2024-2029",
        oneMile: "+ 5.19%",
        threeMile: "+ 6.89%",
        fiveMile: "+ 7.46%",
    },
    {
        label: "Median Household Inc",
        oneMile: "$49,682",
        threeMile: "$46,892",
        fiveMile: "$53,034",
    },
    {
        label: "Avg Household Size",
        oneMile: "2.80",
        threeMile: "2.80",
        fiveMile: "2.60",
    },
    {
        label: "2024 Avg HH Vehicles",
        oneMile: "2.00",
        threeMile: "2.00",
        fiveMile: "2.00",
    },
    {
        label: "Median Home Value",
        oneMile: "$143,750",
        threeMile: "$155,336",
        fiveMile: "$187,820",
    },
    {
        label: "Median Year Built",
        oneMile: "1976",
        threeMile: "1980",
        fiveMile: "1977",
    },
];