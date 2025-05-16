import { FilterState, useFilters } from "./useFilters";

const useAllFiltersDispatch = () => {
  const { dispatch } = useFilters();

  const handleChange = (
    parentKey: keyof FilterState["allFilters"],
    key: string,
    value: string
  ) => {
    dispatch({
      type: "SET_ALL_FILTERS_DYNAMIC",
      payload: {
        // @ts-expect-error type is not defined in the useFilters hook
        parentKey,
        key,
        value,
      },
    });
  };

  const handleMinMaxChange = (
    parentKey: keyof FilterState["allFilters"],
    key: string,
    valueKey: string,
    value: string
  ) => {
    dispatch({
      type: "SET_ALL_FILTERS_MIN_MAX_DYNAMIC",
      payload: {
        // @ts-expect-error type is not defined in the useFilters hook
        parentKey,
        key,
        valueKey,
        value,
      },
    });
  };
  return { handleChange, handleMinMaxChange };
};

export default useAllFiltersDispatch;
