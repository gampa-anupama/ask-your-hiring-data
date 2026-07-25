import { QueryIR } from "./types";

export function parseIR(response: string): QueryIR {
  const cleaned = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}