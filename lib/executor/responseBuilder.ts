// import { QueryIR } from "../query-ir/types";

// type GroupResult = {
//   label: string;
//   value: number;
// };

// export function buildResponse(ir: QueryIR, result: any) {
//   let answer = "";

//   // Summary
//   if (ir.groupBy) {
//     answer += `Results grouped by ${ir.groupBy}.\n\n`;
//   } else if (typeof result === "number") {
//     answer += `Found ${result} matching ${
//       result === 1 ? "record" : "records"
//     }.\n\n`;
//   } else if (Array.isArray(result)) {
//     answer += `Found ${result.length} matching ${
//       result.length === 1 ? "record" : "records"
//     }.\n\n`;
//   }

//   // Result
//   if (Array.isArray(result)) {
//     if (
//       result.length > 0 &&
//       "label" in result[0] &&
//       "value" in result[0]
//     ) {
//       (result as GroupResult[]).forEach((item) => {
//         answer += `${item.label}: ${item.value}\n`;
//       });
//     } else {
//       answer += "See the table below.";
//     }
//   } else {
//     answer += String(result);
//   }

//   // Applied Filters
//   answer += "\n\nApplied Filters:\n";

//   if (ir.filters.length === 0) {
//     answer += "None";
//   } else {
//     ir.filters.forEach((filter) => {
//       answer += `${filter.field} ${filter.operator} ${filter.value}\n`;
//     });
//   }

//   // Dataset Information
//   answer += `\n\nSource Dataset:\n${ir.entity}.csv`;

//   return {
//     answer,

//     metric:
//       typeof result === "number"
//         ? {
//             value: result,
//             title: "Matching Records",
//           }
//         : undefined,

//     chart:
//       Array.isArray(result) &&
//       result.length > 0 &&
//       "label" in result[0] &&
//       "value" in result[0]
//         ? result
//         : undefined,

//     table:
//       Array.isArray(result) &&
//       result.length > 0 &&
//       !("label" in result[0])
//         ? result
//         : undefined,

//     grounding: {
//       dataset: ir.entity,
//       filters: ir.filters,
//     },
//   };
// }
import { QueryIR } from "../query-ir/types";
import { Grounding } from "../groundedness/ground";

type GroupResult = {
  label: string;
  value: number;
};

export function buildResponse(
  ir: QueryIR,
  result: any,
  grounding: Grounding
) {
  let answer = "";

  // Summary
  if (ir.groupBy) {
    answer += `Results grouped by ${ir.groupBy}.\n\n`;
  } else if (typeof result === "number") {
    answer += `Found ${result} matching ${
      result === 1 ? "record" : "records"
    }.\n\n`;
  } else if (Array.isArray(result)) {
    answer += `Found ${result.length} matching ${
      result.length === 1 ? "record" : "records"
    }.\n\n`;
  }

  // Result
  if (Array.isArray(result)) {
    if (
      result.length > 0 &&
      "label" in result[0] &&
      "value" in result[0]
    ) {
      (result as GroupResult[]).forEach((item) => {
        answer += `${item.label}: ${item.value}\n`;
      });
    } else {
      answer += "See the table below.";
    }
  } else {
    answer += String(result);
  }

  // Applied Filters
  answer += "\n\nApplied Filters:\n";

  if (ir.filters.length === 0) {
    answer += "None";
  } else {
    ir.filters.forEach((filter) => {
      answer += `${filter.field} ${filter.operator} ${filter.value}\n`;
    });
  }

  answer += `\n\nSource Dataset:\n${grounding.dataset}.csv`;

  return {
    answer,

    metric:
      typeof result === "number"
        ? {
            value: result,
            title: "Matching Records",
          }
        : undefined,

    chart:
      Array.isArray(result) &&
      result.length > 0 &&
      "label" in result[0] &&
      "value" in result[0]
        ? result
        : undefined,

    table:
      Array.isArray(result) &&
      result.length > 0 &&
      !("label" in result[0])
        ? result
        : undefined,

    grounding,
  };
}