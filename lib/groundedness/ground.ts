import { Filter } from "../query-ir/types";

export interface Grounding {
  dataset: string;
  rowsMatched: number;
  fieldsUsed: string[];
  appliedFilters: Filter[];
}

export function buildGrounding(
  dataset: string,
  filters: Filter[],
  rows: any[]
): Grounding {
  return {
    dataset,
    rowsMatched: rows.length,
    fieldsUsed: [...new Set(filters.map((f) => f.field))],
    appliedFilters: filters,
  };
}