import { z } from "zod";

export const AnalyticsResponseSchema = z.object({
  answer: z.string(),

  metric: z
    .object({
      title: z.string(),
      value: z.number(),
    })
    .optional(),

  chart: z
    .array(
      z.object({
        label: z.string(),
        value: z.number(),
      })
    )
    .optional(),

  table: z.array(z.record(z.string(), z.any())).optional(),

  grounding: z
    .object({
      dataset: z.string(),
      rowsMatched: z.number(),
      fieldsUsed: z.array(z.string()),
      appliedFilters: z.array(
        z.object({
          field: z.string(),
          operator: z.string(),
          value: z.union([z.string(), z.number()]),
        })
      ),
    })
    .optional(),
});

export type AnalyticsResponse = z.infer<typeof AnalyticsResponseSchema>;