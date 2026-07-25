import { z } from "zod";

export const FilterSchema = z.object({
  field: z.string(),
  operator: z.enum(["=", "!=", ">", "<", ">=", "<="]),
  value: z.union([z.string(), z.number()]),
});

export const QueryIRSchema = z.object({
  entity: z.string(),
  metric: z.string(),
  filters: z.array(FilterSchema),
  groupBy: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
});