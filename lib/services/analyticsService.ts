import { askLLM } from "../llm/provider";
import { getPrompt } from "../prompts/registry";
import { parseIR } from "../query-ir/parser";
import { validateIR } from "../query-ir/validator";
import { execute } from "../executor/executor";

export async function analyticsService(message: string) {
  const prompt = `
${getPrompt("analytics-v1")}

User Question:
${message}
`;

  const response = await askLLM(prompt);

  console.log("========== GEMINI RESPONSE ==========");
  console.log(response);
  console.log("=====================================");

  try {
    const ir = parseIR(response);

console.log("========== PARSED IR ==========");
console.dir(ir, { depth: null });

const validation = validateIR(ir);

console.log("========== VALIDATION ==========");
console.dir(validation, { depth: null });

if (!validation.success) {
  return {
    answer: JSON.stringify(validation.error.format(), null, 2),
  };
}

    // Execute the validated IR
    const result = await execute(validation.data);

    return result;

  } catch (error) {
    console.error(error);

    return {
      answer: "Unable to parse LLM response.",
    };
  }
}