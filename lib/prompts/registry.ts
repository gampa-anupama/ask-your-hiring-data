import { analyticsPrompt } from "./analyticsPrompt";

export function getPrompt(id: string) {
  switch (id) {
    case "analytics-v1":
      return analyticsPrompt;

    default:
      throw new Error("Prompt not found");
  }
}