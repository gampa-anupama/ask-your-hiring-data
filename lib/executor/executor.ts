// import { QueryIR } from "../query-ir/types";
// import { initializeDataset, getDataset } from "../data/dataset";
// import { applyFilters } from "./filters";
// import { aggregate } from "./aggregations";
// import { buildResponse } from "./responseBuilder";
// import { currentUser } from "../auth/mockUser";
// import { applyRoleScope } from "../auth/scope";
// import { groupRows } from "./grouping";
// import { sortRows } from "./sorting";

// export async function execute(ir: QueryIR) {
//   await initializeDataset();

//   const dataset = getDataset();

//   const rows = (dataset as any)[ir.entity];

//   if (!rows) {
//     return {
//       answer: "Unknown dataset",
//     };
//   }

//   // Apply role-based access
//   const scopedRows = applyRoleScope(rows, currentUser);
//   console.log("FIRST ROW");
// console.dir(scopedRows[0], { depth: null });
//   // Apply filters
// const filtered = applyFilters(scopedRows, ir.filters);
// const sorted = sortRows(
//   filtered,
//   ir.sortBy,
//   ir.sortOrder
// );
//   // Handle GROUP BY queries
//   if (ir.groupBy) {
// const grouped = groupRows(sorted, ir.groupBy);
//     console.log("========== GROUPED ==========");
//     console.dir(grouped, { depth: null });

//     return buildResponse(ir, grouped);
//   }

//   // Handle normal queries
// const result = aggregate(ir.metric, sorted);
//   console.log("========== RESULT ==========");
//   console.dir(result, { depth: null });

//   return buildResponse(ir, result);
// }
import { QueryIR } from "../query-ir/types";
import { initializeDataset, getDataset } from "../data/dataset";
import { applyFilters } from "./filters";
import { aggregate } from "./aggregations";
import { buildResponse } from "./responseBuilder";
import { applyRoleScope } from "../auth/scope";
import { groupRows } from "./grouping";
import { sortRows } from "./sorting";
import { UserContext } from "../auth/roles";
import { buildGrounding } from "../groundedness/ground";



export async function execute(
  ir: QueryIR,
  user: UserContext
) {

  await initializeDataset();

  const dataset = getDataset();

const rows = dataset[ir.entity as keyof typeof dataset];
  if (!rows) {
    throw new Error("Unknown dataset requested.");
  }

  const scopedRows = applyRoleScope(
    rows,
    user
  );

  console.log("Rows after RBAC:", scopedRows.length);
  const filtered = applyFilters(
    scopedRows,
    ir.filters
  );

  console.log("Rows after Filters:", filtered.length);
  const sorted = sortRows(
    filtered,
    ir.sortBy,
    ir.sortOrder
  );
  const grounding = buildGrounding(
  ir.entity,
  ir.filters,
  filtered
);
  if (ir.groupBy) {

    const grouped = groupRows(
      sorted,
      ir.groupBy
    );

    return buildResponse(
      ir,
      grouped,
      grounding
    );

  }

  const result = aggregate(
    ir.metric,
    sorted
  );

  return buildResponse(
    ir,
    result,
    grounding
  );

}