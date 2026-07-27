// import { Filter } from "../query-ir/types";

// export function applyFilters(data: any[], filters: Filter[]) {
//   return data.filter((row) => {
//     return filters.every((filter) => {
//       const value = row[filter.field];

//       if (value === undefined) return false;

//       switch (filter.operator) {
//         case "=":
//           return (
//             String(value).toLowerCase() ===
//             String(filter.value).toLowerCase()
//           );

//         case "!=":
//           return (
//             String(value).toLowerCase() !==
//             String(filter.value).toLowerCase()
//           );

//         default:
//           return false;
//       }
//     });
//   });
// }
import { Filter } from "../query-ir/types";

export function applyFilters(data: any[], filters: Filter[]) {
  if (!filters.length) return data;

  return data.filter((row) =>
    filters.every((filter) => {
      const value = row[filter.field];

      if (value === undefined || value === null) {
        return false;
      }

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

        case ">":
          return Number(value) > Number(filter.value);

        case "<":
          return Number(value) < Number(filter.value);

        case ">=":
          return Number(value) >= Number(filter.value);

        case "<=":
          return Number(value) <= Number(filter.value);

        case "contains":
          return String(value)
            .toLowerCase()
            .includes(String(filter.value).toLowerCase());

        default:
          return false;
      }
    })
  );
}