
import { askGemini } from "./gemini";

export async function askLLM(prompt: string) {
  return await askGemini(prompt);
}