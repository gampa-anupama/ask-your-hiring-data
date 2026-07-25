import { QueryIR } from "./types";

export function parseIR(json: string): QueryIR {
  return JSON.parse(json);
}