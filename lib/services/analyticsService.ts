// import { askLLM } from "../llm/provider";
// import { getPrompt } from "../prompts/registry";
// import { parseIR } from "../query-ir/parser";
// import { validateIR } from "../query-ir/validator";
// import { execute } from "../executor/executor";
// import { USE_LLM } from "../config";
// import { generateMockIR } from "../mock/mockIR";

// export async function analyticsService(message: string) {
//   const prompt = `
// ${getPrompt("analytics-v1")}

// User Question:
// ${message}
// `;

//   try {
//     let ir;

//     if (USE_LLM) {
//       const response = await askLLM(prompt);

//       console.log("========== GEMINI RESPONSE ==========");
//       console.log(response);
//       console.log("=====================================");

//       ir = parseIR(response);
//     } else {
//       ir = generateMockIR(message);

//       console.log("========== MOCK IR ==========");
//       console.dir(ir, { depth: null });
//     }

//     console.log("========== PARSED IR ==========");
//     console.dir(ir, { depth: null });

//     const validation = validateIR(ir);

//     console.log("========== VALIDATION ==========");
//     console.dir(validation, { depth: null });

//     if (!validation.success) {
//       return {
//         answer: JSON.stringify(validation.error.format(), null, 2),
//       };
//     }

//     const result = await execute(validation.data);

//     return result;
//   } catch (error) {
//     console.error("BACKEND ERROR:");
//     console.error(error);

//     throw error;
//   }

// }
import { askLLM } from "../llm/provider";
import { getPrompt } from "../prompts/registry";
import { parseIR } from "../query-ir/parser";
import { validateIR } from "../query-ir/validator";
import { execute } from "../executor/executor";
import { USE_LLM } from "../config";
import { generateMockIR } from "../mock/mockIR";
import { UserContext } from "../auth/roles";

export async function analyticsService(
  message: string,
  user: UserContext
) 
{
  const lowerMessage = message.toLowerCase();

const blockedPatterns = [
  "ignore previous instructions",
  "forget previous instructions",
  "ignore all instructions",
  "system prompt",
  "reveal your prompt",
  "show your prompt",
  "developer instructions",
  "act as",
];

if (
  blockedPatterns.some((pattern) =>
    lowerMessage.includes(pattern)
  )
) {
  return {
    answer:
      "Sorry, I cannot ignore my system instructions. Please ask a hiring analytics question.",
  };
}
  const prompt = `
${getPrompt("analytics-v1")}

User Question:
${message}
`;

  try {

    let ir;

    if (USE_LLM) {

      const response = await askLLM(prompt);

      console.log("========== GEMINI RESPONSE ==========");
      console.log(response);
      console.log("=====================================");

      ir = parseIR(response);

    } else {

      ir = generateMockIR(message);

      console.log("========== MOCK IR ==========");
      console.dir(ir, { depth: null });

    }

    console.log("========== PARSED IR ==========");
    console.dir(ir, { depth: null });

    const validation = validateIR(ir);

    console.log("========== VALIDATION ==========");
    console.dir(validation, { depth: null });
    if ((ir as any).unsupported) {
  return {
    answer:
      "Sorry, I can only answer questions related to hiring analytics.",
  };
}
    if (!validation.success) {
      return {
        answer: JSON.stringify(
          validation.error.format(),
          null,
          2
        ),
      };
    }

    const result = await execute(
      validation.data,
      user
    );

    return result;

  } catch (error) {

    console.error("BACKEND ERROR:");
    console.error(error);

    throw error;

  }
}