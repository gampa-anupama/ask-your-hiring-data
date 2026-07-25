import { QueryIRSchema } from "./schema";

export function validateIR(data: unknown) {
  return QueryIRSchema.safeParse(data);
}