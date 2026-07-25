import { Filter } from "../query-ir/types";

export function applyFilters(data: any[], filters: Filter[]) {
  return data.filter((row) => {
    return filters.every((filter) => {
      const value = row[filter.field];

      if (value === undefined) return false;

      switch (filter.operator) {
        case "=":
          return (
            String(value).toLowerCase() ===
            String(filter.value).toLowerCase()
          );

        case "!=":
          return (
            String(value).toLowerCase() !==
            String(filter.value).toLowerCase()
          );

        default:
          return false;
      }
    });
  });
}