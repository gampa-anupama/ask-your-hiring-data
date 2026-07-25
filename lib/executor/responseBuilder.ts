import { QueryIR } from "../query-ir/types";

export function buildResponse(
  ir: QueryIR,
  result: any
) {
  let message = "";

  if (typeof result === "number") {
    message += `Found ${result} matching record(s).\n\n`;
  } else if (Array.isArray(result)) {
    message += `Found ${result.length} matching record(s).\n\n`;
    message += JSON.stringify(result, null, 2);
  } else {
    message += JSON.stringify(result, null, 2);
  }

  message += "\n\nApplied Filters:\n";

  if (ir.filters.length === 0) {
    message += "• None";
  } else {
    ir.filters.forEach((filter) => {
      message += `• ${filter.field} ${filter.operator} ${filter.value}\n`;
    });
  }

  message += "\nSource Dataset:\n";
  message += `${ir.entity}.csv`;

  return {
    answer: message,
  };
}