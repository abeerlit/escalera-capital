import { useFilters } from "@/hooks/useFilters";
import { PropertyTypeListItem } from "./PropertyTypeListItem";

export const PropertyTypeList = ({ currentTab }: { currentTab: string }) => {
  const { state, dispatch } = useFilters();
  const currentTabKey =
    currentTab as keyof typeof state.allFilters.propertyType;
  const currentTabList = state.allFilters.propertyType[currentTabKey];

  const ALL_PROPERTY_TABS = {
    commercial: [
      [
        ...PROPERTY_TYPES_COMMERCIAL_GENERAL,
        ...PROPERTY_TYPES_COMMERCIAL_OFFICE,
      ],
      [
        ...PROPERTY_TYPES_COMMERCIAL_HOSPITALITY,
        ...PROPERTY_TYPES_COMMERCIAL_MIXED_USE,
      ],
      PROPERTY_TYPES_COMMERCIAL_RETAIL,
    ],
    industrial: [PROPERTY_TYPES_INDUSTRIAL],
    multifamily: [PROPERTY_TYPES_MULTIFAMILY],
    specialPurpose: [PROPERTY_TYPES_SPECIAL_PURPOSE],
    vacantLand: [PROPERTY_TYPES_VACANT_LAND],
    others: [
      PROPERTY_TYPES_OTHERS_AGRICULTURAL,
      PROPERTY_TYPES_OTHERS_PUBLIC_SEMI_PUBLIC,
      PROPERTY_TYPES_OTHERS_EASEMENTS_PERSONAL_PROP_OTHER,
    ],
  };

  const LIST_OF_PROPERTY_TYPES = [
    ...(ALL_PROPERTY_TABS[currentTabKey as keyof typeof ALL_PROPERTY_TABS] ||
      []),
  ];

  const handleTypeToggle = (typeId: string) => {
    dispatch({
      type: "SET_ALL_FILTERS_PROPERTY_TYPE",
      payload: {
        key: currentTabKey,
        value: typeId,
      },
    });
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-8">
      {LIST_OF_PROPERTY_TYPES.map((propertyType) => (
        <div key={propertyType?.[0]?.label}>
          {propertyType.map((type) => (
            <PropertyTypeListItem
              key={type.label}
              type={type}
              selectedTypes={currentTabList}
              handleTypeToggle={handleTypeToggle}
              className={type.class ? type.class : ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Constants for commercial property types

const PROPERTY_TYPES_COMMERCIAL_GENERAL = [
  { label: "Commercial General/Misc.", count: 927641, class: "!ps-0" },
  { label: "Commercial (General)", count: 857750 },
  { label: "Commercial Condominium", count: 25211 },
  { label: "Self-Storage", count: 44680 },
];

const PROPERTY_TYPES_COMMERCIAL_OFFICE = [
  { label: "Office", count: 1123658, class: "!ps-0 mt-4" },
  { label: "Business Park", count: 4456 },
  { label: "Financial Building", count: 79358 },
  { label: "Medical Building", count: 118711 },
  { label: "Medical Condominium", count: 5658 },
  { label: "Office Building", count: 779601 },
  { label: "Office Condominium", count: 135874 },
];

const PROPERTY_TYPES_COMMERCIAL_HOSPITALITY = [
  { label: "Hospitality", count: 125203, class: "!ps-0" },
  { label: "Hotel", count: 72529 },
  { label: "Hotel Condominium", count: 7836 },
  { label: "Motel", count: 23849 },
  { label: "Resort", count: 15206 },
  { label: "Transient Lodging", count: 5783 },
];

const PROPERTY_TYPES_COMMERCIAL_MIXED_USE = [
  { label: "Mixed Use", count: 420474, class: "!ps-0 mt-4" },
  { label: "Mixed Use: Commercial/Industrial", count: 70676 },
  { label: "Mixed Use: Hotel/Residential", count: 1582 },
  { label: "Mixed Use: Multiple Uses", count: 177921 },
  { label: "Mixed Use: Office/Residential", count: 23379 },
  { label: "Mixed Use: Office/Retail", count: 72616 },
  { label: "Mixed Use: Retail/Residential", count: 74300 },
];

const PROPERTY_TYPES_COMMERCIAL_RETAIL = [
  { label: "Retail", count: 1848806, class: "!ps-0" },
  { label: "Automotive Repair Shop", count: 184881 },
  { label: "Automotive Sales", count: 57784 },
  { label: "Bar/Tavern/Nightclub", count: 30958 },
  { label: "Car Wash", count: 16819 },
  { label: "Convenience/Service Station", count: 110014 },
  { label: "Department Store", count: 18006 },
  { label: "Fast Food Restaurant", count: 64448 },
  { label: "Laundromat", count: 7596 },
  { label: "Restaurant", count: 158870 },
  { label: "Retail Stores", count: 1034926 },
  { label: "Shopping Center", count: 119284 },
  { label: "Supermarket", count: 25184 },
  { label: "Wholesale", count: 20036 },
];

// Industrial Property Types
const PROPERTY_TYPES_INDUSTRIAL = [
  { label: "Industrial", count: 1352493, class: "!ps-0" },
  { label: "Aircraft Facility", count: 8024 },
  { label: "Automotive Wrecking", count: 834 },
  { label: "Bulk Plant", count: 1047 },
  { label: "Chemical", count: 854 },
  { label: "Dump Site", count: 433 },
  { label: "Facilities", count: 506 },
  { label: "Food Packing/Packing/Canning Plant", count: 1308 },
  { label: "Gas Production", count: 5535 },
  { label: "General Industrial", count: 414845 },
  { label: "Heavy Industrial", count: 15453 },
  { label: "Industrial Condominium", count: 39942 },
  { label: "Industrial Park", count: 3152 },
  { label: "Industrial Plant", count: 7482 },
  { label: "Light Industrial", count: 119102 },
  { label: "Lumber Mill", count: 2209 },
  { label: "Lumber Yard", count: 6293 },
  { label: "Metal Production", count: 7962 },
];

// Multifamily Property Types
const PROPERTY_TYPES_MULTIFAMILY = [
  { label: "Multifamily", count: 4591002, class: "!ps-0" },
  { label: "Cooperative", count: 49680 },
  { label: "Dormitories/Group Quarters", count: 9824 },
  { label: "Duplex", count: 2218026 },
  { label: "Frat/Sorority House", count: 7138 },
  { label: "Mobile Home Park", count: 113455 },
  { label: "Multi Family (General)", count: 1584699 },
  { label: "Nursing Home", count: 24985 },
  { label: "Quadruplex", count: 209507 },
  { label: "Triplex", count: 373688 },
];

// Special Purpose Property Types
const PROPERTY_TYPES_SPECIAL_PURPOSE = [
  { label: "Special Purpose", count: 1367913, class: "!ps-0" },
  { label: "Amusement Park", count: 3354 },
  { label: "Animal Hospital/Veterinarian", count: 9890 },
  { label: "Arcade", count: 366 },
  { label: "Auditorium", count: 3539 },
  { label: "Billiard Hall", count: 138 },
  { label: "Bowling Alley", count: 3563 },
  { label: "Casino", count: 508 },
  { label: "Cemetery", count: 69462 },
  { label: "Charitable Organization", count: 30941 },
  { label: "Charitable organization", count: 42043 },
  { label: "Clubs, Lodges/Professional Associations", count: 25715 },
  { label: "Communication Facility", count: 5466 },
  { label: "Convalescent Hospital", count: 2719 },
  { label: "Convention Center", count: 1015 },
  { label: "Correctional Facility", count: 1438 },
  { label: "Country Club", count: 6531 },
  { label: "Dance Hall", count: 394 },
];

// Vacant Land Property Types
const PROPERTY_TYPES_VACANT_LAND = [
  { label: "Vacant Land", count: 29705281, class: "!ps-0" },
  { label: "Agricultural Land", count: 4539814 },
  { label: "Barren Land", count: 58274 },
  { label: "Commercial Vacant Land", count: 1128266 },
  { label: "Desert", count: 93 },
  { label: "Forest", count: 925880 },
  { label: "General Vacant Land", count: 5495444 },
  { label: "Industrial Vacant Land", count: 206439 },
  { label: "Marshland", count: 6986 },
  { label: "Mobile Home Lot", count: 115824 },
  { label: "Mountainous Land", count: 935 },
  { label: "Recreational Vacant Land", count: 556291 },
  { label: "Residential Vacant Land", count: 16442382 },
  { label: "Unusable Land", count: 149140 },
  { label: "Vacant Mobile Home", count: 5742 },
  { label: "Waste Land", count: 73771 },
];

// Others Property Types
const PROPERTY_TYPES_OTHERS_AGRICULTURAL = [
  { label: "Agricultural", count: 6835192, class: "!ps-0" },
  { label: "Agricultural ", count: 3625930 },
  { label: "Animal Farm", count: 3040 },
  { label: "Brewery", count: 232 },
  { label: "Citrus Grove", count: 2293 },
  { label: "Dairy Farm", count: 21448 },
  { label: "Farm", count: 2038019 },
  { label: "Field (All Soil Classes)", count: 181546 },
  { label: "Fisheries", count: 593 },
  { label: "Food Processing", count: 7219 },
  { label: "Grain Elevator", count: 2464 },
  { label: "Greenhouse", count: 2321 },
  { label: "Livestock", count: 28165 },
  { label: "Nursery", count: 12029 },
  { label: "Orchard", count: 78852 },
  { label: "Pasture", count: 341734 },
  { label: "Poultry Farm", count: 4069 },
  { label: "Ranch", count: 434449 }
];
const PROPERTY_TYPES_OTHERS_PUBLIC_SEMI_PUBLIC = [
  { label: "Public & Semi-Public", count: 4523611, class: "!ps-0" },
  { label: "Airport", count: 10734 },
  { label: "Common Area", count: 152234 },
  { label: "Common Land", count: 7760 },
  { label: "Community Center", count: 10540 },
  { label: "Educational Service", count: 17605 },
  { label: "Electrical Facility", count: 16046 },
  { label: "Government/Public Use (County)", count: 250023 },
  { label: "Government/Public Use (Federal)", count: 153172 },
  { label: "Government/Public Use (General)", count: 658930 },
  { label: "Government/Public Use (Municipal)", count: 351059 },
  { label: "Government/Public Use (State)", count: 384964 },
  { label: "Greenbelt", count: 16755 },
  { label: "Library/Museum", count: 6289 },
  { label: "Military Building", count: 3747 },
  { label: "Open Space", count: 380401 },
  { label: "Park", count: 144754 },
  { label: "Police/Fire/Civil Defense", count: 19504 }
];
const PROPERTY_TYPES_OTHERS_EASEMENTS_PERSONAL_PROP_OTHER = [
  { label: "Easements/Personal Prop/Other", count: 912428, class: "!ps-0" },
  { label: "Air Rights", count: 149 },
  { label: "Art", count: 493 },
  { label: "Automotive Equipment", count: 2398 },
  { label: "Durable Goods", count: 415 },
  { label: "Easement (General)", count: 58396 },
  { label: "Embassies/Chanceries", count: 81 },
  { label: "Enterprise Zone", count: 59 },
  { label: "Historical District", count: 2062 },
  { label: "Lake/River/Beach", count: 27530 },
  { label: "Mineral Rights", count: 2 },
  { label: "Miscellaneous", count: 785355 },
  { label: "Natural Resources", count: 6874 },
  { label: "Nondurable Goods", count: 100 },
  { label: "Possessory Interest", count: 4154 },
  { label: "Radio Facility", count: 3637 },
  { label: "Tax Abatement", count: 4533 },
  { label: "Truck Terminal", count: 5438 }
];
