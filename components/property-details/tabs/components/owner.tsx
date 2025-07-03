export const Owner = () => {

    const OWNER_DATA = {
        name: "926 Properties, LLC",
        propertiesInPortfolio: 1,
        portfolioAssessedValue: 2142890,
        lastAcquisitionDate: "Dec 2024",
        location: "Houston, TX",
        propertyTypes: [
            { type: "Industrial", percent: 100 },
        ],
        reportedOwner: "926 Properties Llc",
        address: "1035 Dairy Ashford Rd Unit 146, Houston, TX 77079"
    };

    return (
        <div className="flex flex-col gap-4 py-4 bg-gray-100">
            <div className="flex flex-col gap-2 bg-white p-4">
                <h3 className="text-lg font-semibold">
                    Owners
                    <span className="inline-flex font-normal items-center justify-center text-xs rounded-full w-4 h-4 border border-gray-500 ml-2">?</span>
                </h3>
                <div className="flex items-start gap-8 border border-gray-200 p-4">
                    {/* Owner Main Card */}
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 20.25V19.125C18 17.3551 16.5449 15.9 14.775 15.9H9.225C7.45507 15.9 6 17.3551 6 19.125V20.25M15.75 7.125C15.75 9.07107 14.0711 10.75 12.125 10.75C10.1789 10.75 8.5 9.07107 8.5 7.125C8.5 5.17893 10.1789 3.5 12.125 3.5C14.0711 3.5 15.75 5.17893 15.75 7.125Z"
                                />
                            </svg>
                        </span>
                        <h3 className="font-semibold text-lg">{OWNER_DATA.name}</h3>
                    </div>
                    {/*  */}
                    <div className="flex gap-6 mt-2 text-sm min-w-[600px]">
                        <div className="flex-1 flex flex-col">
                            <div className="text-gray-500">Properties in Portfolio</div>
                            <div className="font-semibold">{OWNER_DATA.propertiesInPortfolio}</div>
                            <div className="mt-4 text-gray-500">Portfolio Assessed Value</div>
                            <div className="font-semibold">${OWNER_DATA.portfolioAssessedValue.toLocaleString()}</div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="text-gray-500">Last Acquisition Date</div>
                            <div className="font-semibold">{OWNER_DATA.lastAcquisitionDate}</div>
                            <div className="mt-4 text-gray-500">Location</div>
                            <div className="font-semibold">{OWNER_DATA.location}</div>
                        </div>
                    </div>
                    {/* Property Types Pie Chart */}
                    <div className="flex flex-col ">
                        <div className="text-gray-500 text-sm mb-2">Property Types</div>
                        {/* Simple Pie Chart (SVG) */}
                        <div className="flex items-start gap-2">
                            <svg width="80" height="80" viewBox="0 0 32 32">
                                <circle r="16" cx="16" cy="16" fill="#e9d0db" />
                            </svg>
                            <div>
                                {OWNER_DATA.propertyTypes.map((propertyType) => (
                                    <div key={propertyType.type} className="flex items-center gap-2 mt-2">
                                        <span className="inline-block w-3 h-3 rounded-full bg-pink-200"></span>
                                        <span className="text-sm">{propertyType.percent}% {propertyType.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reported Owner Section */}
                <div className="mt-6">
                    <div className="flex items-center gap-2 text-gray-700 font-medium text-base mb-2">
                        Reported Owner
                        <span className="inline-flex items-center justify-center text-xs rounded-full w-4 h-4 border border-gray-500 ml-2">?</span>
                    </div>
                    <div className="flex flex-col gap-1 ml-2 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M18 20.25V19.125C18 17.3551 16.5449 15.9 14.775 15.9H9.225C7.45507 15.9 6 17.3551 6 19.125V20.25M15.75 7.125C15.75 9.07107 14.0711 10.75 12.125 10.75C10.1789 10.75 8.5 9.07107 8.5 7.125C8.5 5.17893 10.1789 3.5 12.125 3.5C14.0711 3.5 15.75 5.17893 15.75 7.125Z"
                                    />
                                </svg>
                            </span>
                            <span>{OWNER_DATA.reportedOwner}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v6.75m9 0v6.75a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 017.5 20.25v-6.75m9 0H7.5"
                                    />
                                </svg>
                            </span>
                            <span>{OWNER_DATA.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}