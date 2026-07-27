
// import { askGemini } from "./gemini";

// export async function askLLM(prompt: string) {
//   return await askGemini(prompt);
// }
import { askGemini } from "./gemini";
import { askOpenRouter } from "./openrouter";

export async function askLLM(prompt: string) {
  const provider = process.env.LLM_PROVIDER ?? "gemini";

  switch (provider) {
    case "openrouter":
      return await askOpenRouter(prompt);

    case "gemini":
    default:
      return await askGemini(prompt);
  }
}