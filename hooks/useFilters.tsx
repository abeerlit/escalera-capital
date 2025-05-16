import React, { createContext, useContext, useReducer } from "react";

export type FilterState = {
  search: string;
  forSale: string;
  businessPlan: string[];
  location: {
    selections: string[];
    states: string;
    metros: string;
    submarkets: string;
    county: string;
    city: string;
    zipCodes: string;
    streetAddresses: string;
  };
  allFilters: {
    propertyType: {
      commercial: string[];
      industrial: string[];
      multifamily: string[];
      specialPurpose: string[];
      vacantLand: string[];
      others: string[];
    };
    buildingAndLot: {
      yearBuilt: {
        min: string;
        max: string;
      };
      yearRenovated: {
        min: string;
        max: string;
      };
      lotSizeSF: {
        min: string;
        max: string;
      };
      lotSizeAcreage: {
        min: string;
        max: string;
      };
      totalUnits: {
        min: string;
        max: string;
      };
      buildingArea: {
        min: string;
        max: string;
      };
      zoning: string;
      opportunityZone: string;
    };
    owner: {
      ownerName: string;
      ownerType: string;
      ownerContactInformation: string;
      propertiesInPortfolio: {
        min: string;
        max: string;
      };
      ownerOccupied: string;
      inStateReportedOwnerMailingAddress: string;
      portfolioAssessedValue: {
        min: string;
        max: string;
      };
      reportedOwner: string;
      reportedOwnerMailingAddress: string;
    };
    occupants: {
      currentOccupant: string;
      occupantType: string;
      occupantWebsite: string;
    };
    sales: {
      saleDate: string;
      multiParcelSale: string;
      salePriceOrAcre: {
        min: string;
        max: string;
      };
      likelihoodToSale: string;
    };
    debt: {
      mortgageOrigination: string;
      maturityDate: string;
      lenderName: string;
      CMBsLoan: string;
    };
    distressed: {
      auctionDate: string;
      preForeclosureCategory: string;
      onCMBsWatchList: string;
    };
    tax: {
      yoyChange: {
        min: string;
        max: string;
      };
      taxAmount: {
        min: string;
        max: string;
      };
    };
    myProperties: {
      labels: string;
      noteText: string;
      hasNote: string;
      viewedData: string;
      exportedProperties: string
    };
    performance: {
      rent: {
        min: string;
        max: string;
      },
      cityIndex: {
        min: string;
        max: string;
      },
      submarketIndex: {
        min: string;
        max: string;
      },
      propertyIndex: {
        min: string;
        max: string;
      },
      brandIndex: {
        min: string;
        max: string;
      },
      zipCodeIndex: {
        min: string;
        max: string;
      },
      estimatedVacancy: {
        min: string;
        max: string;
      },
      submarketRentGrowth: {
        min: string;
        max: string;
      },
      propertyTypeRentGrowth: {
        min: string;
        max: string;
      },
      propertyRentGrowth: {
        min: string;
        max: string;
      },
      propertyRevPAR: {
        min: string;
        max: string;
      },
      propertyRent: {
        min: string;
        max: string;
      },
      propertyTypeRent: {
        min: string;
        max: string;
      },
      cityRent: {
        min: string;
        max: string;
      },
      submarketRent: {
        min: string;
        max: string;
      },
    },

  };
};

const initialState: FilterState = {
  search: "",
  forSale: "For Sale",
  businessPlan: [],
  location: {
    selections: [],
    states: "",
    metros: "",
    submarkets: "",
    county: "",
    city: "",
    zipCodes: "",
    streetAddresses: "",
  },
  allFilters: {
    propertyType: {
      commercial: [],
      industrial: [],
      multifamily: [],
      specialPurpose: [],
      vacantLand: [],
      others: [],
    },
    buildingAndLot: {
      yearBuilt: {
        min: "",
        max: "",
      },
      yearRenovated: {
        min: "",
        max: "",
      },
      lotSizeSF: {
        min: "",
        max: "",
      },
      lotSizeAcreage: {
        min: "",
        max: "",
      },
      totalUnits: {
        min: "",
        max: "",
      },
      buildingArea: {
        min: "",
        max: "",
      },
      zoning: "",
      opportunityZone: "",
    },
    owner: {
      ownerName: "",
      ownerType: "",
      ownerContactInformation: "",
      propertiesInPortfolio: {
        min: "",
        max: "",
      },
      ownerOccupied: "",
      inStateReportedOwnerMailingAddress: "",
      portfolioAssessedValue: {
        min: "",
        max: "",
      },
      reportedOwner: "",
      reportedOwnerMailingAddress: "",
    },
    occupants: {
      currentOccupant: "",
      occupantType: "",
      occupantWebsite: "",
    },
    sales: {
      saleDate: "",
      multiParcelSale: "",
      salePriceOrAcre: {
        min: "",
        max: "",
      },
      likelihoodToSale: "",
    },
    debt: {
      mortgageOrigination: "",
      maturityDate: "",
      lenderName: "",
      CMBsLoan: "",
    },
    distressed: {
      auctionDate: "",
      preForeclosureCategory: "",
      onCMBsWatchList: "",
    },
    tax: {
      yoyChange: {
        min: "",
        max: "",
      },
      taxAmount: {
        min: "",
        max: "",
      },
    },
    myProperties: {
      labels: "",
      noteText: "",
      hasNote: "",
      viewedData: "",
      exportedProperties: "",
    },
    performance: {
      rent: {
        min: "",
        max: "",
      },
      cityIndex: {
        min: "",
        max: "",
      },
      submarketIndex: {
        min: "",
        max: "",
      },
      propertyIndex: {
        min: "",
        max: "",
      },
      brandIndex: {
        min: "",
        max: "",
      },
      zipCodeIndex: {
        min: "",
        max: "",
      },
      estimatedVacancy: {
        min: "",
        max: "",
      },
      submarketRentGrowth: {
        min: "",
        max: "",
      },
      propertyTypeRentGrowth: {
        min: "",
        max: "",
      },
      propertyRentGrowth: {
        min: "",
        max: "",
      },
      propertyRevPAR: {
        min: "",
        max: "",
      },
      propertyRent: {
        min: "",
        max: "",
      },
      propertyTypeRent: {
        min: "",
        max: "",
      },
      cityRent: {
        min: "",
        max: "",
      },
      submarketRent: {
        min: "",
        max: "",
      },
    },
  },
};

type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_FOR_SALE"; payload: string }
  | { type: "SET_BUSINESS_PLAN"; payload: string }
  | { type: "SET_LOCATION_SELECTION"; payload: string }
  | {
      type: "SET_LOCATION_INPUTS";
      payload: {
        key: string;
        value: string;
      };
    }
  | {
      type: "SET_ALL_FILTERS_PROPERTY_TYPE";
      payload: {
        key: keyof FilterState["allFilters"]["propertyType"];
        value: string;
      };
    }
  | {
      type: "SET_ALL_FILTERS_DYNAMIC";
      payload: {
        parentKey: keyof FilterState["allFilters"];
        key: keyof FilterState["allFilters"][keyof FilterState["allFilters"]];
        value: string;
      };
    }
  | {
      type: "SET_ALL_FILTERS_MIN_MAX_DYNAMIC";
      payload: {
        parentKey: keyof FilterState["allFilters"];
        key: keyof FilterState["allFilters"][keyof FilterState["allFilters"]];
        valueKey: string;
        value: string;
      };
    };

function filtersReducer(state: FilterState, action: Action): FilterState {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_FOR_SALE":
      return { ...state, forSale: action.payload };
    case "SET_BUSINESS_PLAN":
      return {
        ...state,
        businessPlan: state.businessPlan.includes(action.payload)
          ? state.businessPlan.filter((item) => item !== action.payload)
          : [...state.businessPlan, action.payload],
      };
    case "SET_LOCATION_SELECTION":
      return {
        ...state,
        location: {
          ...state.location,
          selections: state.location.selections.includes(action.payload)
            ? state.location.selections.filter(
                (item) => item !== action.payload
              )
            : [...state.location.selections, action.payload],
        },
      };
    case "SET_LOCATION_INPUTS":
      return {
        ...state,
        location: {
          ...state.location,
          [action.payload.key]: action.payload.value,
        },
      };

    case "SET_ALL_FILTERS_PROPERTY_TYPE":
      return {
        ...state,
        allFilters: {
          ...state.allFilters,
          propertyType: {
            ...state.allFilters.propertyType,
            [action.payload.key]: state.allFilters.propertyType[action.payload.key].includes(action.payload.value)
              ? state.allFilters.propertyType[action.payload.key].filter(
                  (item) => item !== action.payload.value
                )
              : [...state.allFilters.propertyType[action.payload.key], action.payload.value],
          },
        },
      };
    
    case "SET_ALL_FILTERS_DYNAMIC":
      return {
        ...state,
        allFilters: {
          ...state.allFilters,
          [action.payload.parentKey]: {
            ...state.allFilters[action.payload.parentKey],
            [action.payload.key]: action.payload.value,
          }
        }
      }
    case "SET_ALL_FILTERS_MIN_MAX_DYNAMIC":
      return {
        ...state,
        allFilters: {
          ...state.allFilters,
          [action.payload.parentKey]: {
            ...state.allFilters[action.payload.parentKey],
            [action.payload.key]: {
              ...(state.allFilters[action.payload.parentKey][action.payload.key] as Record<string, Record<string, string>>),
              [action.payload.valueKey]: action.payload.value,
            }
          }
        }
      }

    default:
      return state;
  }
}

type FilterContextType = {
  state: FilterState;
  dispatch: React.Dispatch<Action>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
