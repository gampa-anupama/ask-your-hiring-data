import { QueryIR } from "../query-ir/types";

export function buildSummary(ir: QueryIR, result: any) {
  if (typeof result === "number") {
    return `Found ${result} matching record(s).`;
  }

  if (Array.isArray(result)) {
    return `Found ${result.length} matching record(s).`;
  }

  return "Query executed successfully.";
}