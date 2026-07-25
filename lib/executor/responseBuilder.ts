import { QueryIR } from "../query-ir/types";

export function buildResponse(ir: QueryIR, result: any) {
  let answer = "";

  // Summary
  if (ir.groupBy) {
    answer += `Grouped by ${ir.groupBy}\n\n`;
  } else if (typeof result === "number") {
    answer += `Found ${result} matching record(s).\n\n`;
  } else if (Array.isArray(result)) {
    answer += `Found ${result.length} matching record(s).\n\n`;
  }

  // Result
  if (Array.isArray(result)) {
    if (
      result.length > 0 &&
      "label" in result[0] &&
      "value" in result[0]
    ) {
      result.forEach((item: any) => {
        answer += `${item.label}: ${item.value}\n`;
      });
    } else {
        answer += "See the table below.";    }
  } else {
    answer += String(result);
  }

  // Filters
  answer += "\n\nApplied Filters:\n";

  if (ir.filters.length === 0) {
    answer += "None";
  } else {
    ir.filters.forEach((filter) => {
      answer += `${filter.field} ${filter.operator} ${filter.value}\n`;
    });
  }

  // Source
  answer += `\nSource Dataset:\n${ir.entity}.csv`;

  return {
  answer,
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
};
}