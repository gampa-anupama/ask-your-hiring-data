import { QueryIR } from "./types";

export function parseIR(response: string): QueryIR {
  const cleaned = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const ir = JSON.parse(cleaned);

  if (ir.filters) {
    ir.filters = ir.filters.map((filter: any) => ({
      operator: "=",
      ...filter,
    }));
  }

  return ir;
}

