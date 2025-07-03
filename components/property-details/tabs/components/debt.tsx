import { Table } from "@/components/common/table";

export const Debt = () => {

    const customRender = (key: string, row: Record<string, unknown>) => {
        if (key === "standardizedLender" || key === "recordedLender") {
            return (
                <span className="font-semibold mr-8">
                    {row[key as string] as string}
                </span>
            )
        } else return null;
    }

    return (
        <Table
            headers={debtHeaders}
            data={debtData}
            showRowNumbers
            customRender={customRender}
        />
    )
}

const debtHeaders = [
    { key: "standardizedLender", label: "Standardized Lender" },
    { key: "recordedLender", label: "Recorded Lender" },
    { key: "recordedDate", label: "Recorded Date", className: "text-right" },
    { key: "executedDate", label: "Executed Date", className: "text-right" },
    { key: "amount", label: "Amount", className: "text-right" },
    { key: "maturityDate", label: "Maturity Date", className: "text-right" },
    { key: "term", label: "Term", className: "text-right" },
    { key: "refinance", label: "Refinance" },
    { key: "constructionLoan", label: "Construction Loan" },
    { key: "mortgageType", label: "Mortgage Type" },
    { key: "documentType", label: "Document Type" },
    { key: "interestRate", label: "Interest Rate", className: "text-right" },
    { key: "interestType", label: "Interest Type" },
    { key: "sellerCarryBack", label: "Seller Carry Back" },
    { key: "documentNumber", label: "Document Number", className: "text-right" },
    { key: "signatory1", label: "Signatory 1" },
];

const debtData = [
    {
        standardizedLender: "Lone Star Cap Bk Na",
        recordedLender: "Lone Star Cap Bk Na",
        recordedDate: "Jun 27, 2024",
        executedDate: "Jun 26, 2024",
        amount: "$5,745,000",
        maturityDate: "Sep 20, 2029",
        term: "63 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Modification Of Mortgage",
        interestRate: "6.50%",
        sellerCarryBack: "No",
        documentNumber: "116103",
        signatory1: "Robert H Magee",
    },
    {
        standardizedLender: "Lone Star Cap Bk Na",
        recordedLender: "Lone Star Cap Bk Na",
        recordedDate: "Sep 20, 2022",
        executedDate: "Sep 20, 2022",
        amount: "$3,745,000",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Deed Of Trust",
        sellerCarryBack: "No",
        documentNumber: "227914",
        signatory1: "Charles D Leddy",
    },
    {
        standardizedLender: "Byron K Bexley",
        recordedLender: "Byron K Bexley",
        recordedDate: "Jan 24, 2019",
        executedDate: "Jan 23, 2019",
        amount: "$525,000",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Private Party Lender",
        documentType: "Deed Of Trust",
        interestType: "Adjustable",
        sellerCarryBack: "No",
        documentNumber: "12913",
        signatory1: "Ralph Marcantonio",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Feb 16, 2018",
        executedDate: "Jan 7, 2018",
        amount: "$149,265",
        maturityDate: "Oct 20, 2018",
        term: "9 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Modification Of Mortgage",
        sellerCarryBack: "No",
        documentNumber: "29695",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Jan 17, 2017",
        executedDate: "Jan 7, 2017",
        amount: "$100,000",
        maturityDate: "Jan 7, 2018",
        term: "12 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Modification Of Mortgage",
        interestType: "Fixed",
        sellerCarryBack: "No",
        documentNumber: "9265",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Feb 5, 2015",
        executedDate: "Jan 7, 2015",
        amount: "$134,182",
        maturityDate: "Jan 7, 2016",
        term: "12 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Modification Of Mortgage",
        sellerCarryBack: "No",
        documentNumber: "20179",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Jan 27, 2014",
        executedDate: "Jan 7, 2014",
        amount: "$150,000",
        maturityDate: "Jan 7, 2015",
        term: "12 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Modification Of Mortgage",
        sellerCarryBack: "No",
        documentNumber: "12098",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Jan 9, 2013",
        executedDate: "Jan 7, 2013",
        amount: "$100,000",
        maturityDate: "Jan 7, 2014",
        term: "12 months",
        refinance: "No",
        constructionLoan: "Yes",
        documentType: "Deed Of Trust",
        sellerCarryBack: "No",
        documentNumber: "5430",
        signatory1: "Ralph Marcantonio",
    },
    {
        standardizedLender: "Texstar Nat'L Bk",
        recordedLender: "Texstar Nat'L Bk",
        recordedDate: "Nov 3, 2008",
        executedDate: "Oct 31, 2008",
        amount: "$1,192,000",
        maturityDate: "Nov 1, 2023",
        term: "180 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Deed Of Trust",
        sellerCarryBack: "No",
        documentNumber: "237445",
    },
    {
        standardizedLender: "Wachovia Bk Na",
        recordedLender: "Wachovia Bk Na",
        recordedDate: "Mar 26, 2007",
        executedDate: "Mar 20, 2007",
        amount: "$100,000",
        maturityDate: "Mar 20, 2022",
        term: "180 months",
        refinance: "No",
        constructionLoan: "No",
        mortgageType: "Conventional",
        documentType: "Deed Of Trust",
        sellerCarryBack: "No",
        documentNumber: "69326",
        signatory1: "Ralph Marcantonio",
    },
];