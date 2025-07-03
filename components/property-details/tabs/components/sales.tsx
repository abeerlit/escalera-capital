import { Table } from "@/components/common/table";

export const Sales = () => {

    const customRender = (key: string, row: Record<string, unknown>) => {
        if (key === "buyer" || key === "seller") {
            return (
                <span className="font-semibold mr-8">
                    {row[key as string] as string}
                </span>
            )
        } else return null;
    }

    return (
        <Table
            headers={salesHeaders}
            data={salesData}
            showRowNumbers
            customRender={customRender}
        />
    )
}

const salesHeaders = [
    { key: "buyer", label: "Buyer" },
    { key: "seller", label: "Seller" },
    { key: "recordedDate", label: "Recorded Date", className: "text-right" },
    { key: "executedDate", label: "Executed Date", className: "text-right" },
    { key: "price", label: "Price", className: "text-right" },
    { key: "transactionType", label: "Transaction Type" },
    { key: "documentType", label: "Document Type" },
    { key: "documentNumber", label: "Document Number" },
    { key: "pricePerSFLot", label: "Price/SF Lot", className: "text-right" },
    { key: "pricePerSFBuilding", label: "Price/SF Building", className: "text-right" },
    { key: "pricePerAcre", label: "Price/Acre", className: "text-right" },
    { key: "pricePerUnit", label: "Price/Unit", className: "text-right" },
    { key: "ownershipTransfer", label: "% Ownership Transfer", className: "text-right" },
    { key: "allCashPurchase", label: "All Cash Purchase" },
    { key: "foreclosed", label: "Foreclosed" },
];

const salesData = [
    {
        buyer: "926 Properties Llc",
        seller: "Mlsa 410 Lp",
        recordedDate: "Jan 8, 2025",
        executedDate: "Dec 27, 2024",
        transactionType: "Arms Length",
        documentType: "Special Warranty Deed",
        documentNumber: "3873",
        foreclosed: "No",
    },
    {
        buyer: "Mlsa 410 Lp",
        seller: "6910 Ne Loop 410 Llc",
        recordedDate: "Sep 20, 2022",
        executedDate: "Sep 20, 2022",
        transactionType: "Arms Length",
        documentType: "Special Warranty Deed",
        documentNumber: "227913",
        foreclosed: "No",
    },
    {
        buyer: "6910 Ne Loop 410 Llc",
        seller: "Marcantonio Enterprises Llc",
        recordedDate: "Jan 24, 2019",
        executedDate: "Jan 23, 2019",
        price: "$656,300",
        documentType: "Warranty Deed",
        documentNumber: "12912",
        pricePerSFLot: "$4",
        pricePerSFBuilding: "$11",
        pricePerAcre: "$161,253",
    },
    {
        buyer: "Ralph Marcantonio",
        seller: "Lido Inc",
        recordedDate: "Nov 3, 2008",
        executedDate: "Oct 31, 2008",
        price: "$1,490,000",
        transactionType: "Arms Length",
        documentType: "Special Warranty Deed",
        documentNumber: "237444",
        pricePerSFLot: "$8",
        pricePerSFBuilding: "$26",
        pricePerAcre: "$366,094",
        foreclosed: "No",
    },
    {
        buyer: "Lido Inc",
        seller: "Imhasa Of San Antonio Inc",
        recordedDate: "Feb 14, 2006",
        executedDate: "Feb 10, 2006",
        price: "$558,600",
        transactionType: "Arms Length",
        documentType: "Special Warranty Deed",
        documentNumber: "34265",
        pricePerSFLot: "$3",
        pricePerSFBuilding: "$10",
        pricePerAcre: "$137,248",
        foreclosed: "No",
    },
];