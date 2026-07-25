import { QueryIR } from "../query-ir/types";
import { initializeDataset, getDataset } from "../data/dataset";
import { applyFilters } from "./filters";
import { aggregate } from "./aggregations";
import { buildResponse } from "./responseBuilder";
import { currentUser } from "../auth/mockUser";
import { applyRoleScope } from "../auth/scope";
import { groupRows } from "./grouping";
import { sortRows } from "./sorting";

export async function execute(ir: QueryIR) {
  await initializeDataset();

  const dataset = getDataset();

  const rows = (dataset as any)[ir.entity];

  if (!rows) {
    return {
      answer: "Unknown dataset",
    };
  }

  // Apply role-based access
  const scopedRows = applyRoleScope(rows, currentUser);

  // Apply filters
const filtered = applyFilters(scopedRows, ir.filters);
const sorted = sortRows(
  filtered,
  ir.sortBy,
  ir.sortOrder
);
  // Handle GROUP BY queries
  if (ir.groupBy) {
const grouped = groupRows(sorted, ir.groupBy);
    console.log("========== GROUPED ==========");
    console.dir(grouped, { depth: null });

    return buildResponse(ir, grouped);
  }

  // Handle normal queries
const result = aggregate(ir.metric, sorted);
  console.log("========== RESULT ==========");
  console.dir(result, { depth: null });

  return buildResponse(ir, result);
}