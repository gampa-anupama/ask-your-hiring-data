import { QueryIR } from "../query-ir/types";
import { initializeDataset, getDataset } from "../data/dataset";
import { applyFilters } from "./filters";
import { aggregate } from "./aggregations";
import { buildResponse } from "./responseBuilder";
import { currentUser } from "../auth/mockUser";
import { applyRoleScope } from "../auth/scope";
export async function execute(ir: QueryIR) {
  await initializeDataset();

  const dataset = getDataset();

  const rows = (dataset as any)[ir.entity];

  if (!rows) {
    return {
      answer: "Unknown dataset",
    };
  }

const scoped = applyRoleScope(rows, currentUser);

const filtered = applyFilters(scoped, ir.filters);
  const result = aggregate(ir.metric, filtered);

  return buildResponse(result);
}