import { Table } from "@/components/common/table";

export const Permits = () => {
    return (
        <Table
            headers={permitHeaders}
            data={[]}
        />
    )
}

const permitHeaders = [
    { key: "permitNumber", label: "Permit number" },
    { key: "permitType", label: "Permit type" },
    { key: "issuedDate", label: "Issued date" },
    { key: "address", label: "Address" },
    { key: "city", label: "City" },
    { key: "zipCode", label: "Zip code" },
    { key: "latitude", label: "Latitude" },
    { key: "longitude", label: "Longitude" },
    { key: "workDescription", label: "Work description" },
  ];